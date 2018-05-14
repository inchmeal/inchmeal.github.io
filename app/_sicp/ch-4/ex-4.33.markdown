---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.33"
order: "033"
date: 2018-03-18 
---

Note-1: I have put the combined(and complete) code of this exercise and the next on the next exercise page. 

Note-2: I developed this code on top of earlier code where we can specify each parameter as 'lazy', 'lazy-memo'.

It was difficult to test this exercise without proper display method in place. So, after testing trivial cases, I started adding the print functionality which took me to next exercise.

If we need to represent the quoted list as lazy lists, then we must make the lazy `cons`, `car` and `cdr` available before the interpreter/evaluator begins(i.e. asks for user input). We can achieve this simply by creating definitions of `car`, `cdr` and `cons` in the `setup-environment`.

After this, we just need to write procedures that converts the quoted expressions into lazy `cons`. These conversion procedures turned out to be quite simple(after doing so many evaluator exercises).

Only one thing to note here is the procedure `quote-it`. I have quoted arguments passed to lazy-list or customized cons. To understand why:

Implementation based reason:

- Let's ignore the **lazy** part and think of implementing this code with applicative order of arguments passed to customized cons.
- Now, consider that when we evaluate the code `(cons '(a b))`, then if we don't quote *a* and *b*, then they are passed as `a` and `b` as arguments to `cons`.
- But, since we are assuming no laziness, we will evaluate `a` and `b`. But `a` and `b` need not be evaluated!
- Thus, we need to apply `quote-it` them.

Now, I think conceptual reason or logical reason can make it more clear:

How quote needs to work?

(I saw this after checking the mit scheme behavior of quoting expressions)

- If a list is quoted, then we converts each of the item inside the list passed to it into quoted expression.
- If a symbol is quoted, then we get a list containing two elements `quote` and the symbol.

Here are the changes done:

{% highlight scheme linenos %}

;; primitve cons cdr and car are commented/removed
(define primitive-procedures
  (list ;(list 'car car)   ;;commmented 
        ;(list 'cdr cdr)
        ;(list 'cons cons)
        (list 'null? null?)
        ;(list 'list list)
        (list '+ +)
        (list '- -)
        (list '* *)
        (list '/ /)
        (list '= =)
        (list 'newline newline)
        (list 'display display)
;;      more primitives
        ))

;; added the definitions of cons, car and cdr
(define (setup-environment)
  (let ((initial-env
         (extend-environment (primitive-procedure-names)
                             (primitive-procedure-objects)
                             the-empty-environment)))
    (define-variable! 'true true initial-env)
    (define-variable! 'false false initial-env)
	(actual-value '(define (cons (x memo-lazy) (y memo-lazy))
							  (lambda (m) (m x y))) initial-env)
	(actual-value '(define (car z)
					 (z (lambda ((p memo-lazy) (q memo-lazy)) p)))
				  initial-env)
	(actual-value '(define (cdr z)
					 (z (lambda ((p memo-lazy) (q memo-lazy)) q)))
				  initial-env)
    initial-env))

;;change in handling of quotation
(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
        ((quoted? exp) (quote->custom-cons exp env)) ;;changed
        ((assignment? exp) (eval-assignment exp env))
        ((definition? exp) (eval-definition exp env))
        ((if? exp) (eval-if exp env))
        ((lambda? exp)
         (make-procedure (lambda-parameters exp)
                         (lambda-body exp)
                         env))
        ((begin? exp) 
         (eval-sequence (begin-actions exp) env))
        ((cond? exp) (eval (cond->if exp) env))
        ((application? exp)             ; clause from book
         (apply (actual-value (operator exp) env)
                (operands exp)
                env))
        (else
         (error "Unknown expression type -- EVAL" exp))))

(define (quote-it exp) (list 'quote exp))

(define (make-custom-cons-list exp)
  (if (null? exp)
	  '()
	  (list 'cons (quote-it (car exp)) (make-custom-cons-list (cdr exp)))))

(define (quote->custom-cons exp env)
  (let ((l (text-of-quotation exp)))
	(if (pair? l)
		(eval (make-custom-cons-list l) env)
		l)))
{% endhighlight %}


Example/Test:

{% highlight scheme linenos %}
;;; L-Eval input:
'1

;;; L-Eval value:
lazy-evaluator-loaded

;;; L-Eval input:

;;; L-Eval value:
1

;;; L-Eval input:
'()

;;; L-Eval value:
()

;;; L-Eval input:
'a

;;; L-Eval value:
a

;;; L-Eval input:
''1

;;; L-Eval value:
(compound-procedure (m) ((m x y)) <procedure-env>)

{% endhighlight %}
