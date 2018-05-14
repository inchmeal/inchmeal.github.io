---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.52"
order: "052"
date: 2018-03-26 
---

{% highlight scheme linenos %}
(define (if-fail? exp) (tagged-list? exp 'if-fail))
(define (if-fail-first exp) (cadr exp))
(define (if-fail-second exp) (caddr exp))

(define (analyze-if-fail exp)
  (let ((first (analyze (if-fail-first exp)))
		(second (analyze (if-fail-second exp))))
	(lambda (env succeed fail)
	  (first env
			  succeed
			 (lambda()
			   (second env succeed fail))))))
{% endhighlight %}

For testing, First I defined these functions in global environment:

{% highlight scheme linenos %}
(define (require p)
    (if (not p) (amb)))

(define (an-element-of l)
  (require (not (null? l)))
  (amb (car l) (an-element-of (cdr l))))

(define (even? x) (= (remainder x 2) 0))
(define (odd? x) (not (even? x)))
{% endhighlight %}

Now, testing:

(Check last interesting example which i tested additionaly apart from the given in book)

{% highlight scheme linenos %}
;;; Amb-Eval input:
(if-fail (let ((x (an-element-of '(1 3 5))))
           (require (even? x))
           x)
         'all-odd)

;;; Starting a new problem 

;;; Amb-Eval value:
all-odd

;;; Amb-Eval input:
(if-fail (let ((x (an-element-of '(1 3 5 8))))
           (require (even? x))
           x)
         'all-odd)

;;; Starting a new problem 

;;; Amb-Eval value:
8

;;; Amb-Eval input:
(if-fail (let ((x (an-element-of '(1 3 5))))
           (require (even? x))
           x)
         (let ((x (an-element-of '(1 3 5 18))))
           (require (even? x))
           x))

;;; Starting a new problem 

;;; Amb-Eval value:
18

;;; Amb-Eval input:
(if-fail (let ((x (an-element-of '(1 3 5))))
           (require (even? x))
           x)
         (let ((x (an-element-of '(1 3 5))))
           (require (even? x))
           x))

;;; Starting a new problem 
;;; There are no more values of
(if-fail (let ((x (an-element-of (quote (1 3 5))))) (require (even? x)) x) (let ((x (an-element-of (quote (1 3 5))))) (require (even? x)) x))

;;; Amb-Eval input:

{% endhighlight %}
