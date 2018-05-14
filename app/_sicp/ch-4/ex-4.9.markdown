---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.9"
order: "009"
date: 2018-03-08 
---

I implemented for. Let's first check the output:

**Note-0**: User can use any names for variables - there won't be any conflict.    
**Note-1**: i installed few more premitive procedures like display, error etc.    
**Note-2**: for some reason when i try to display a procedure defined(eg check proc here in the output) using the evaluator, it goes into a infinite loop. since it does not concern in this problem, i am not not wearing my debugging cap :)

{% highlight scheme linenos %}
;;; M-Eval input:
(define proc (lambda () '((1 a) (2 b))))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
ok

;;; M-Eval input:
(for item (proc) (display item))
(1 a)(2 b)
;;; M-Eval value:
#!unspecific

;;; M-Eval input:
(for item (proc) (display item) 'done)
(1 a)(2 b)
;;; M-Eval value:
done

;;; M-Eval input:
(define sum 0)

;;; M-Eval value:
ok

;;; M-Eval input:
(for i '(1 2 3 4 5) (set! sum (+ i sum)) sum)

;;; M-Eval value:
15

;;; M-Eval input:
(for iter '(a b) iter)

;;; M-Eval value:
b

;;; M-Eval input:
(for body '(a b) body)

;;; M-Eval value:
b

;;; M-Eval input:
(for l '(a b) l)

;;; M-Eval value:
b

;;; M-Eval input:
exit
;Value: exiting..
{% endhighlight %}

-------

It works my converting the `for` into a `let` expression for eg:

{% highlight scheme linenos %}
(for x '(1 2)
	 (define it 100)
	 (define body 200)
	 (newline)
	 (display x)
	 (newline)
	 (+ it x))

;; this for loop gets converted to:

(let iter ((l '(1 2)))
  (define body
	  (lambda (x)
	    (define l 100)
	    (define body 200)
	    (newline)
	    (display x)
	    (newline)
	    (+ l x body)))  
    (cond ((null? l) '())
	  	     ((not (pair? l)) (error "invalid data- for loop expects list"))
		     ((null? (cdr l)) (body (car l)))
		     (else (body (car l)) (iter (cdr l)))))
{% endhighlight %}

------

Now, here comes the code:

{% highlight scheme linenos %}
(define (for? exp) (tagged-list? exp 'for))
(define (for-var exp) (cadr exp))
(define (for-data exp) (caddr exp))
(define (for-body exp) (cdddr exp))

(define (for->let exp)
  (define body
	(list 'define 'body (make-lambda
						 (list (for-var exp))
						 (for-body exp))))
  (define cond-exp '(cond ((null? l) '())
		((not (pair? l)) (error "invalid data- for loop expects list"))
		((null? (cdr l)) (body (car l)))
		(else (body (car l)) (iter (cdr l)))))
  (make-named-let 'iter
				  (list (list 'l (for-data exp)))
				  (list body cond-exp)))
{% endhighlight %}
