---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.8"
order: "008"
date: 2018-03-07 
---

{% highlight scheme linenos %}
(define (let? exp) (tagged-list? exp 'let))

(define (let-has-name? exp) (symbol? (cadr exp)))

(define (let-name exp) (cadr exp))

(define (let-vardefs exp)
  (if (let-has-name? exp)
	  (caddr exp)
	  (cadr exp)))

(define (let-body exp)
  (if (let-has-name? exp)
	  (cdddr exp)
	  (cddr exp)))

(define (let->combination exp)
  (let ((res (fold-right
			  (lambda (new rem)
				(cons (cons (car new) (car rem))
					  (cons (cadr new) (cdr rem))))
			  (cons '() '())
			  (let-vardefs exp))))
	(let ((vars (car res))
		  (vexps (cdr res)))
	  (define proc (make-lambda vars (let-body exp)))
	  (if (let-has-name? exp)
		  ;;create a lambda with no arguments and two statements:
		  ;;(i) containing definition of the let-lambda
		  ;;(ii) invocation of the procedure with those arguments.
		  ;;finally create application for this no argument lambda.
		  (cons
		   (make-lambda '()
						(list (list 'define (let-name exp) proc)
							  (cons (let-name exp) vexps)
							  ))
		   '())
		  (cons proc vexps)
	  ))))
{% endhighlight %}

Output:

Note: It should report error if this variable(procedure name) is accessed outside let.

{% highlight scheme linenos %}
;; First testing normal/old let
;;; M-Eval input:
(let ((x (+ 1 2)) (y 100)) (+ x y))

;;; M-Eval value:
103

;;; M-Eval input:
(define (fib n)
  (let fib-iter ((a 1)
                 (b 0)
                 (count n))
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1)))))

;;; M-Eval value:
ok

;;; M-Eval input:
(fib 10)

;;; M-Eval value:
55

;;; M-Eval input:
(define (fib n)
  (let fib-iter ((a 1)
                 (b 0)
                 (count n))
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1)))) (fib-iter 1 0 1))

;;; M-Eval value:
ok

;;; M-Eval input:
(fib 10)
;Unbound variable fib-iter

{% endhighlight %}
