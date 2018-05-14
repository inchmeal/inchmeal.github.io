---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.7"
order: "007"
date: 2018-03-07 
---

To understand this solution, just we need to check that `make-let` needs both arguments to be list. Thus the result of each iteration of `fold-right` must be list.

Since the `fold-right` returns list even in the last iteration, we just take the first element.

{% highlight scheme linenos %}
;; var-defs and body should be list
(define (make-let var-defs body)
  (cons 'let (cons var-defs body)))

(define (let*? exp) (tagged-list? exp 'let*))

(define (let*->let exp)
  (car
   (fold-right (lambda(new rem)
				 (list (make-let (list new) rem)))
			   (let-body exp)
			   (let-vardefs exp))))
{% endhighlight %}

Example:

{% highlight scheme linenos %}
;;; M-Eval input:
(let* ((x (+ 1 2)) (y (+ x 100))) (+ x y))

;;; M-Eval value:
106

;;; M-Eval input:
(let* ((x (+ 1 2)) (y (+ x 100)) (z y)) (+ x y z))

;;; M-Eval value:
209

;;; M-Eval input:
(let* ((x (+ 1 2)) (y (+ x 100)) (z y)) (define m 1000) (+ x y z m))

;;; M-Eval value:
1209
{% endhighlight %}

#### Do we need to expand explicitly?

This is more interesting part because it feels like magical that somehow every thing is working as per theory.

No, we need not to expand let explicitly. This is possible because of the way we lookup variables in environment. 

It is important to understand this conceptually. Here is my understanding:

- let* creates let
- let creates lambda
- when lambda is evaluated a procedure is created. See `make-procedure`.
- Now after creation of procedure, we `apply` this procedure to its arguments.
- During application we *extend* the base environment and add the procedure parameters in the extended environment.
- If there is new lambda expression/procedure, same iteration is done.
- Thus every nested lambda get the required variables!

:)
