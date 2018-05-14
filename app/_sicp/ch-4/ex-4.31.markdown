---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.31"
order: "031"
date: 2018-03-17 
---

It's an interesting exercise. 

I just change `make-procedure` to contain params-types list too. for eg: if there is a procedure `(define (proc (a lazy) b (c lazy-memo)) (+ a b c))`, then params-types is a list `'(lazy () lazy-memo)`.

Similar to procedure `list-of-delayed-args`, I implemented `list-of-customized-args` which just calls `customize-it` instead of `delay-it`.

`customize-it` is similar to `delay-it` except that it takes an extra argument for param-type and add tag `'lazy-thunk` or `'memo-thunk` depending if `param-type` is `lazy` or `lazy-memo`.

Apart from this there are cases added in `force-it` where `memo-thunk` case is handled as it was in book's version.

Well thats it!

The code which contains the changes is below:

{% highlight scheme linenos %}
(define (list-of-arg-values exps env)
  (if (no-operands? exps)
      '()
      (cons (actual-value (first-operand exps) env)
            (list-of-arg-values (rest-operands exps)
                                env))))

(define (list-of-customized-args params-types exps env)
  (if (no-operands? exps)
      '()
      (cons (customize-it (car params-types) (first-operand exps) env)
            (list-of-customized-args (cdr params-types) (rest-operands exps)
									 env))))

(define (make-procedure parameters body env)
  (define split
	(fold-right (lambda(new rem)
				  (let ((param
						 (if (pair? new)
							 (if (or (lazy-param? (cadr new))
									 (memo-lazy-param? (cadr new)))
								 new
								 (error "Wrong parameter type: " (cadr new)))
							 (list new '()))))
					(cons
					 (cons (car param) (car rem)) 
					 (cons (cadr param) (cdr rem)))))
				(cons '() '())
				parameters)) 
  (list 'procedure (car split) (cdr split) body env))

(define (compound-procedure? p)
  (tagged-list? p 'procedure))

(define (procedure-parameters p) (cadr p))
(define (procedure-params-types p) (caddr p))
(define (procedure-body p) (cadddr p))
(define (procedure-environment p) (cadddr (cdr p)))
(define (lazy-param? param-type) (eq? 'lazy param-type))
(define (memo-lazy-param? param-type) (eq? 'memo-lazy param-type))

;; thunks
(define (customize-it param-type exp env)
  (cond ((lazy-param? param-type) (list 'lazy-thunk exp env))
		((memo-lazy-param? param-type) (list 'memo-thunk exp env))
		(else (actual-value exp env))))

;(define (delay-it exp env)
;  (list 'thunk exp env))

(define (thunk? obj)
  (or (lazy-thunk? obj) (memo-thunk? obj)))
(define (lazy-thunk? obj)
  (tagged-list? obj 'lazy-thunk))
(define (memo-thunk? obj)
  (tagged-list? obj 'memo-thunk))

(define (thunk-exp thunk) (cadr thunk))
(define (thunk-env thunk) (caddr thunk))

;; "thunk" that has been forced and is storing its (memoized) value
(define (evaluated-thunk? obj)
  (tagged-list? obj 'evaluated-thunk))

(define (thunk-value evaluated-thunk) (cadr evaluated-thunk))

;; memoizing version of force-it
(define (force-it obj)
  (cond ((memo-thunk? obj)
         (let ((result (actual-value
                        (thunk-exp obj)
                        (thunk-env obj))))
           (set-car! obj 'evaluated-thunk)
           (set-car! (cdr obj) result)  ; replace exp with its value
           (set-cdr! (cdr obj) '())     ; forget unneeded env
           result))
		((lazy-thunk? obj) (actual-value (thunk-exp obj) (thunk-env obj)))
        ((evaluated-thunk? obj)
         (thunk-value obj))
        (else obj)))
{% endhighlight %}

---------

#### Output/Testing

First I tested with a small code:

{% highlight scheme linenos %}
;;; L-Eval input:
(define (test a (b lazy) (c memo-lazy)) a b c 'done)

;;; L-Eval value:
ok

;;; L-Eval input:
(test ((lambda() (display 'a-invoked) 'a)) ((lambda() (display 'b-invoked) 'b)) ((lambda() (display 'c-invoked) 'c)))
a-invoked
;;; L-Eval value:
done
{% endhighlight %}

Then, I tested it using ex-4.27 code. 

Testing each version separately, normal, lazy and memoized by defining argument to procedure `id` in ex-4.27, as normal, lazy and lazy-memo.

**Note** there is a difference in how values of count changes between each version.

**Without lazy or lazy-memo**

{% highlight scheme linenos %}
;;; L-Eval input:
(define count 0)
;;; L-Eval value:
ok
;;; L-Eval input:
(define (id x)
  (set! count (+ count 1))
  x)
;;; L-Eval value:
ok
;;; L-Eval input:
(define w (id (id 10)))
;;; L-Eval value:
ok
;;; L-Eval input:
count
;;; L-Eval value:
2
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
2
;;; L-Eval input:
w
;;; L-Eval value:
10
{% endhighlight %}

**With lazy argument**

{% highlight scheme linenos %}
;;; L-Eval input:
(define count 0)
;;; L-Eval value:
ok
;;; L-Eval input:
(define (id (x lazy))
  (set! count (+ count 1))
  x)
;;; L-Eval value:
ok
;;; L-Eval input:
(define w (id (id 10)))
;;; L-Eval value:
ok
;;; L-Eval input:
count
;;; L-Eval value:
1
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
2
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
3
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
4
{% endhighlight %}

**With memo-lazy**:

{% highlight scheme linenos %}
;;; L-Eval input:
(define count 0)
;;; L-Eval value:
ok
;;; L-Eval input:
(define (id (x memo-lazy))
  (set! count (+ count 1))
  x)
;;; L-Eval value:
ok
;;; L-Eval input:
(define w (id (id 10)))
;;; L-Eval value:
ok
;;; L-Eval input:
count
;;; L-Eval value:
1
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
2
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
2
{% endhighlight %}


-----------

#### Complete Code:

I have added changed in this [file][mit-code] provided by mit.

Note: Sometimes this code: `(ge (make-top-level-environment))` at the top does not correctly clear the environment. So, I executed this directly in scheme repl before loading the file.(I am using emacs). I wasted some time in it believing that there is a bug in code but the actual problem was this :(

{% highlight scheme linenos %}
;;;;LAZY EVALUATOR FROM SECTION 4.2 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch4.scm
;;;; Also includes enlarged primitive-procedures list

;;;;This file can be loaded into Scheme as a whole.
;;;;**NOTE**This file loads the metacircular evaluator of
;;;;  sections 4.1.1-4.1.4, since it uses the expression representation,
;;;;  environment representation, etc.
;;;;  You may need to change the (load ...) expression to work in your
;;;;  version of Scheme.
;;;;**WARNING: Don't load mceval twice (or you'll lose the primitives
;;;;  interface, due to renamings of apply).

;;;;Then you can initialize and start the evaluator by evaluating
;;;; the two lines at the end of the file ch4-mceval.scm
;;;; (setting up the global environment and starting the driver loop).

;;;; resetting the environment so that we can reload the file
(ge (make-top-level-environment))
(restart 1)

;;;;  To run without memoization, reload the first version of force-it below


;;**implementation-dependent loading of evaluator file
;;Note: It is loaded first so that the section 4.2 definition
;; of eval overrides the definition from 4.1.1
(load "ch4-mceval.scm")


;;;SECTION 4.2.2

;;; Modifying the evaluator

(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
        ((quoted? exp) (text-of-quotation exp))
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

(define (actual-value exp env)
  (force-it (eval exp env)))

(define (apply procedure arguments env)
  (cond ((primitive-procedure? procedure)
         (apply-primitive-procedure
          procedure
          (list-of-arg-values arguments env))) ; changed
        ((compound-procedure? procedure)
         (eval-sequence
          (procedure-body procedure)
          (extend-environment
           (procedure-parameters procedure)
           (list-of-customized-args (procedure-params-types procedure) arguments env) ; changed
           (procedure-environment procedure))))
        (else
         (error
          "Unknown procedure type -- APPLY" procedure))))

(define (list-of-arg-values exps env)
  (if (no-operands? exps)
      '()
      (cons (actual-value (first-operand exps) env)
            (list-of-arg-values (rest-operands exps)
                                env))))

(define (list-of-customized-args params-types exps env)
  (if (no-operands? exps)
      '()
      (cons (customize-it (car params-types) (first-operand exps) env)
            (list-of-customized-args (cdr params-types) (rest-operands exps)
									 env))))

(define (make-procedure parameters body env)
  (define split
	(fold-right (lambda(new rem)
				  (let ((param
						 (if (pair? new)
							 (if (or (lazy-param? (cadr new))
									 (memo-lazy-param? (cadr new)))
								 new
								 (error "Wrong parameter type: " (cadr new)))
							 (list new '()))))
					(cons
					 (cons (car param) (car rem)) 
					 (cons (cadr param) (cdr rem)))))
				(cons '() '())
				parameters)) 
  (list 'procedure (car split) (cdr split) body env))

(define (compound-procedure? p)
  (tagged-list? p 'procedure))

(define (procedure-parameters p) (cadr p))
(define (procedure-params-types p) (caddr p))
(define (procedure-body p) (cadddr p))
(define (procedure-environment p) (cadddr (cdr p)))

(define (eval-if exp env)
  (if (true? (actual-value (if-predicate exp) env))
      (eval (if-consequent exp) env)
      (eval (if-alternative exp) env)))

(define input-prompt ";;; L-Eval input:")
(define output-prompt ";;; L-Eval value:")

(define (driver-loop)
  (prompt-for-input input-prompt)
  (let ((input (read)))
	(define stime (get-universal-time))
    (let ((output
           (actual-value input the-global-environment)))
	  ;; (newline)
	  ;; (display (list "Time Taken: " (- (get-universal-time) stime)))
	  ;; (newline)
      (announce-output output-prompt)
      (user-print output)))
  (driver-loop))


;;; Representing thunks

;; non-memoizing version of force-it

;; (define (force-it obj)
;;   (if (thunk? obj)
;;       (actual-value (thunk-exp obj) (thunk-env obj))
;;       obj))

(define (lazy-param? param-type) (eq? 'lazy param-type))
(define (memo-lazy-param? param-type) (eq? 'memo-lazy param-type))

;; thunks
(define (customize-it param-type exp env)
  (cond ((lazy-param? param-type) (list 'lazy-thunk exp env))
		((memo-lazy-param? param-type) (list 'memo-thunk exp env))
		(else (actual-value exp env))))

;(define (delay-it exp env)
;  (list 'thunk exp env))

(define (thunk? obj)
  (or (lazy-thunk? obj) (memo-thunk? obj)))
(define (lazy-thunk? obj)
  (tagged-list? obj 'lazy-thunk))
(define (memo-thunk? obj)
  (tagged-list? obj 'memo-thunk))

(define (thunk-exp thunk) (cadr thunk))
(define (thunk-env thunk) (caddr thunk))

;; "thunk" that has been forced and is storing its (memoized) value
(define (evaluated-thunk? obj)
  (tagged-list? obj 'evaluated-thunk))

(define (thunk-value evaluated-thunk) (cadr evaluated-thunk))

;; memoizing version of force-it

(define (force-it obj)
  (cond ((memo-thunk? obj)
         (let ((result (actual-value
                        (thunk-exp obj)
                        (thunk-env obj))))
           (set-car! obj 'evaluated-thunk)
           (set-car! (cdr obj) result)  ; replace exp with its value
           (set-cdr! (cdr obj) '())     ; forget unneeded env
           result))
		((lazy-thunk? obj) (actual-value (thunk-exp obj) (thunk-env obj)))
        ((evaluated-thunk? obj)
         (thunk-value obj))
        (else obj)))

;; A longer list of primitives -- suitable for running everything in 4.2
;; Overrides the list in ch4-mceval.scm

(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
        (list 'list list)
        (list '+ +)
        (list '- -)
        (list '* *)
        (list '/ /)
        (list '= =)
        (list 'newline newline)
        (list 'display display)
;;      more primitives
        ))

(define the-global-environment (setup-environment))
(driver-loop)

'LAZY-EVALUATOR-LOADED

{% endhighlight %}

[mit-code]: https://mitpress.mit.edu/sicp/code/ch4-leval.scm
