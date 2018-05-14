---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.6"
order: "006"
date: 2018-03-07 
---

Only one thing to mention, used fold-right to avoid looping twice.

{% highlight scheme linenos %}
(define (let? exp) (tagged-list? exp 'let))

(define (let-varexps exp) (cadr exp))

(define (let-body exp) (cddr exp))

(define (let->combination exp)
  (let ((res (fold-right
			  (lambda (new rem)
				(cons (cons (car new) (car rem))
					  (cons (cadr new) (cdr rem))))
			  (cons '() '())
			  (let-varexps exp))))
	(let ((vars (car res))
		  (vexps (cdr res)))
	  (cons (make-lambda vars (let-body exp)) vexps)
	  )))
{% endhighlight %}

Example:

{% highlight scheme linenos %}
;;; M-Eval input:
(let ((x (cons 1 2)) (y (cons 'a 'b))) 'hello 'world)

;;; M-Eval value:
world

;;; M-Eval input:
(let ((x (cons 1 2)) (y (cons 'a 'b))) (cons x y))

;;; M-Eval value:
((1 . 2) a . b)

;;; M-Eval input:
(let ((x (+ 1 2)) (y 100)) (+ x y))

;;; M-Eval value:
103
{% endhighlight %}
