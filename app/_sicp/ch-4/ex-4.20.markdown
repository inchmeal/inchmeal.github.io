---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.20"
order: "020"
date: 2018-03-13 
---

#### (a)

Code is not difficult after doing so exercises. The main part to understand is what Louis pointed out in part(b)

Here goes the code:

{% highlight scheme linenos %}
(define (letrec? exp) (tagged-list? exp 'letrec))

(define (letrec-vardefs exp) (cadr exp))

(define (letrec-body exp) (cddr exp))

(define (letrec->let exp)
  (define rs
	(fold-right (lambda(new rem)
				  (cons (cons (list (car new) ''*unassigned*) (car rem))
						(cons (list 'set! (car new) (cadr new)) (cdr rem))))
				(cons '() '())
				(letrec-vardefs exp)))
  (make-let (car rs) (append (cdr rs) (letrec-body exp))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}

;;; M-Eval input:
(define (f x)
  (letrec ((even?
            (lambda (n)
              (if (= n 0)
                  true
                  (odd? (- n 1)))))
           (odd?
            (lambda (n)
              (if (= n 0)
                  false
                  (even? (- n 1))))))
    (even? x)))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
ok

;;; M-Eval input:
(f 5)

;;; M-Eval value:
#f

;;; M-Eval input:
(f 6)

;;; M-Eval value:
#t

;;; M-Eval input:
(f 0)

;;; M-Eval value:
#t

;;; M-Eval input:
(f 1)

;;; M-Eval value:
#f
{% endhighlight %}

#### (b)

If we simply substitute `let` with `letrec` it won't work.

The main thing to see is that variables `even?` and `odd?` are bound to the frame created by `let` expression. Also recall that `let` is nothing but a lambda definition and invocation. The invocation of lambda evaluates the arguments of `let` in the environment where `let` is defined. Thus `even?` and `odd?` are not yet binded!

Now, when we invoke `even?`, we start evaluating the `(lambda (n) (if (= n 0) true (odd? (- n 1))))`. This `lambda` do not get evaluated inside the generated `lambda`(generated for let) environment but in the environment where 'let' is defined. But in that environment `even?` and `odd?` are not available!

Thus `odd?` won't be found and it will report error. Eg:

{% highlight scheme linenos %}
;;; M-Eval input:
(define (f x)
  (let ((even?
            (lambda (n)
              (if (= n 0)
                  true
                  (odd? (- n 1)))))
           (odd?
            (lambda (n)
              (if (= n 0)
                  false
                  (even? (- n 1))))))
    (even? x)))

;;; M-Eval value:
ok

;;; M-Eval input:
(f 5)
;Unbound variable odd?
{% endhighlight %}
