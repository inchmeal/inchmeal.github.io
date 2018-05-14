---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.34"
order: "034"
date: 2018-03-19 
---

Note: I built it on top of the exercise where we implemeted parameter type based evaluation, `lazy`, `memo-lazy`(ex-4.31)

This simple looking requirement took my entire day! I hope it works and have not missed any cases :)

Added the output/test after the code below.

There are many nuances, it will take some time to write all the detail. The main pointers/ideas which I think can help in understanding the code:

- As mentioned in exercise, We need to do some tagging to differentiate between the compound procedure and these `cons` procedures.
- Note that, it may occur that we can avoid tagging by comparing the text of expression with lambda we used to implement cons, but this is wrong because it is certainly possible to have another lambda whose text/body matches the cons lambda but they are two different procedures.
- Other possible way of avoiding tagging it to associate atleast one name with the procedure. So that we can get a procedure name like `procedure-name` similar to `procedure-body`. But this means we are changing a fundamental part of our language. So, tagging seems to be a better approach.
- We can do tagging by creating a pair of `pair` and our customised(or lazy we implemented) cons.
- But, ofcourse, we can not use our own `cons` for creating this pair. Why? :)
- The other way we can do tagging is to use, underlying `cons`.
- Mixing underlying `cons` and our `cons` comes with interesting results. For example, try calling `display` on this mixed structure :)
- How to display? Two possible ways:
  - To implement display function in the implemented language like we have implemented 'cons'.
  - To implement display function in the evaluator, thus we can use our host langauge.
- Both approaches have their own pros and cons, in first approach we do not have any host language constructs available! So, we need to provide them as primitive procedures. In the second approach, we don't have the lazy implementations of `cons` available to us.
- I tried the first approach, but it required availability of so many constructs like `eq?`, `pair?` and combined with the fact that the arguments our `cons` are lazy evaluated, it caused too many troubles.
- Second appraoch, turned out quite easier. Since I have all the evaluator code available, it turned out not a big deal to call implemented(lazy) language `cons`, `car` or `cdr`. We just call `actual-value` and pass it the syntax we want to evaluate.
- There's only one hurdle now, Suppose the result of our evaluator(the lazy cons list) is `object`. Then, this call `(actual-value (list 'car object))` won't work because our evaluator will try to evaluate `object` which we do not want. Because object is already the result of evaluation. So, a simple solution is to put this object under a variable say `'object` in the implemented langauge environment and then call `(actual-value (list 'car 'object))`. (Notice the quote before object).

Oh, now the main part of the exercise:

- Initially, I thought to first convert the language `cons` into host `cons` but.. since it requires traversing the list twice, I directly display it.
- I created a counter, that gets incremented every time a **non-cons** is printed.
- Well, ideally i guess it would be better to print in BFS order, but that would have required queue, So, I just traversed the lazy-lists with DFS traversal.
- I used the dreaded *assignment* for maintaining count as there seems to be no other quicker way.

I hope, I covered the main points. Since this required many changes, I am putting up the complete code:

#### Complete Code

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
        ((null? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
        ((quoted? exp) (quote->custom-cons exp env))
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

(define (quote-it exp) (list 'quote exp))

(define (custom-cons? obj) (tagged-list? obj 'pair))

(define (make-custom-cons-list exp)
  (if (null? exp)
	  '()
	  (list 'cons (quote-it (car exp)) (make-custom-cons-list (cdr exp)))))

(define (quote->custom-cons exp env)
  (let ((l (text-of-quotation exp)))
	(if (pair? l)
		(eval (make-custom-cons-list l) env)
		l)))

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
  (list (list 'underlying-car car)
        (list 'underlying-cdr cdr)
        (list 'underlying-cons cons)
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

(define (custom->cons object)
  (define temp-env
	(extend-environment
	 (list 'object)
	 (list object)
	 the-global-environment))

  (cons
   (actual-value (list 'car 'object) temp-env)
   (actual-value (list 'cdr 'object) temp-env)))

(define MAX-ITEMS 10)
(define (make-counter) (cons 'counter 0))

(define (print-list items counter)
  (if (custom-cons? items)
	  (if (> (cdr counter) MAX-ITEMS)
		  (display "...")
		  (let ((ucons (custom->cons items)))
			(print-custom-cons (car ucons) counter)
			(if (null? (cdr ucons))
				(display "")
				(begin (display " ")
					   (print-list (cdr ucons) counter)))))
	  (begin (set-cdr! counter (+ (cdr counter) 1))
			 (display ".")
			 (display " ")
			 (display items))))

(define (print-custom-cons object counter)
  (if (custom-cons? object)
	  (begin
		(display "(")
		(print-list object counter)
		(display ")"))
	  (begin (set-cdr! counter (+ (cdr counter) 1))
			 (display object))))

(define (user-print object)
  (if (compound-procedure? object)
      (display (list 'compound-procedure
                     (procedure-parameters object)
                     (procedure-body object)
                     '<procedure-env>))
	  (if (custom-cons? object)
		  (print-custom-cons object (make-counter))
		  (display object))))

(define (setup-environment)
  (let ((initial-env
         (extend-environment (primitive-procedure-names)
                             (primitive-procedure-objects)
                             the-empty-environment)))
    (define-variable! 'true true initial-env)
    (define-variable! 'false false initial-env)

	(actual-value '(define (cons (x memo-lazy) (y memo-lazy))
							  (underlying-cons 'pair (lambda (m) (m x y)))) initial-env)
	(actual-value '(define (car z)
					 ((underlying-cdr z) (lambda ((p memo-lazy) (q memo-lazy)) p)))
				  initial-env)
	(actual-value '(define (cdr z)
					 ((underlying-cdr z) (lambda ((p memo-lazy) (q memo-lazy)) q)))
				  initial-env)
    initial-env))

(define the-global-environment (setup-environment))
(driver-loop)

'LAZY-EVALUATOR-LOADED
{% endhighlight %}

------

#### Test Examples

First these are the outputs from my implementation as part of this exercise. Next, I also presented the output when same input is passed to the mit-scheme.

{% highlight scheme linenos %}
;;; L-Eval input:
'('(a b c) '(d e '(f g) h) '('(i j) k) l m n '(o p) '(q r s) t u v w x '(y z))
;;; L-Eval value:
((quote (a b c)) (quote (d e (quote (f g)) h)) ...)
;;; L-Eval input:
'()
;;; L-Eval value:
()
;;; L-Eval input:
'1
;;; L-Eval value:
1
;;; L-Eval input:
'a
;;; L-Eval value:
a
;;; L-Eval input:
''a
;;; L-Eval value:
(quote a)
;;; L-Eval input:
(car '(a b))
;;; L-Eval value:
a
;;; L-Eval input:
(car '('a 'b))
;;; L-Eval value:
(quote a)
;;; L-Eval input:
(cdr '('(a b) '(c d)))
;;; L-Eval value:
((quote (c d)))
;;; L-Eval input:
(car (cdr '('(a b) '(c d))))
;;; L-Eval value:
(quote (c d))
;;; L-Eval input:
(car (cdr (car (cdr '('(a b) '(c d))))))
;;; L-Eval value:
(c d)
;;; L-Eval input:
(car (car (cdr (car (cdr '('(a b) '(c d)))))))
;;; L-Eval value:
c
;;; L-Eval input:
(cdr (car (cdr (car (cdr '('(a b) '(c d)))))))
;;; L-Eval value:
(d)
;;; L-Eval input:
(cons 1 2)
;;; L-Eval value:
(1 . 2)
;;; L-Eval input:
(define ones (cons 1 ones))
;;; L-Eval value:
ok
;;; L-Eval input:
ones
;;; L-Eval value:
(1 1 1 1 1 1 1 1 1 1 1 ...)
;;; L-Eval input:
(cons 'a (cons 'b (cons 'c '())))
;;; L-Eval value:
(a b c)
{% endhighlight %}
Output from MIT scheme:

{% highlight scheme linenos %}
1 ]=> '('(a b c) '(d e '(f g) h) '('(i j) k) l m n '(o p) '(q r s) t u v w x '(y z))
)
;Value 3: ((quote (a b c)) (quote (d e (quote (f g)) h)) (quote ((quote (i j)) k)) l m n (quote (o p)) (quote (q r s)) t u v w x (quote (y z)))
1 ]=> '()
1 ]=> 
;Value: ()
1 ]=> '1
;Value: 1
1 ]=> 'a
;Value: a
1 ]=> ''a
;Value 4: (quote a)
1 ]=> (car '(a b))
;Value: a
1 ]=> (car '('a 'b))
;Value 5: (quote a)
1 ]=> (cdr '('(a b) '(c d)))
;Value 6: ((quote (c d)))
1 ]=> (car (cdr '('(a b) '(c d))))
;Value 7: (quote (c d))
1 ]=> (car (cdr (car (cdr '('(a b) '(c d))))))
;Value 8: (c d)
1 ]=> (car (car (cdr (car (cdr '('(a b) '(c d)))))))
;Value: c
1 ]=> (cdr (car (cdr (car (cdr '('(a b) '(c d)))))))
;Value 9: (d)
1 ]=> (cons 1 2)
;Value 19: (1 . 2)
1 ]=> (cons 'a (cons 'b (cons 'c '())))
;Value 20: (a b c)
{% endhighlight %}

-----

Realising again that working with with lists in scheme is not very comfortable. I think most of these issue perhaps are because of my first in-depth experience with a non-typed langauge. 

I generally found that there are fewer mistakes in the logical part of my approach compared to the implementation where most of the mistakes happen because I mixed wrong types.

Apart from this, this exercise is quite educational. It made me realise the nuances when we have to decide where to implement a feature? In the evaluator or on top of the implemented language.

I think, the main trouble here was because we want our evaluator to *know* the lazy `cons`. So, that it can print them. If this was not the requirement, we could have implemented it completely as procedures and it is the user concern how to print the customized cons.

But since we want that our evluator must know about the 'cons' because of this exercise, I think it would have been better if we implemented `cons` as special form instead of procedures. This would have made things easier as there was no mixing of the things from implemented language and the host language.

I am not sure if this is always possible to avoid this mixing. But, when this is the case, I think things can go quite complex and probably much more complex than this exercise.
