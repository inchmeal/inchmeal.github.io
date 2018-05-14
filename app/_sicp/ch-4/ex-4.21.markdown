---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.21"
order: "021"
date: 2018-03-13 
---

This is interesting way to solve the of simultaneous definition.

I am first writing solution for part(b)

#### (b)

Let's start from Louis's suggestion in the previous exercise. Why his suggestion was not working?

The reason is if we evaluate `lambda` expression for **even?** then `odd?` can not be found. Similarly evaluating `lambda` expression for  **odd?** then `even?` is not found. 

Why? As we saw in prev. exercise: the **scope** in which `lambda` expression for *even?* or *odd?* is evaluated **does not** contain the bindings `even?` and `odd?`.

So, how can we *fix* this situation?

What if instead of `even?`'s expression calling `odd?` and  `odd?`'s expression calling `even?`, there is a way we can make these invocations by passing the *lambda* expression of these procedures to each other!

What I mean is, the problem was we don't have name binding of `even?` to its definiton and `odd?` to its definition. So why not we instead pass the procedure to be invoked!

We pass `lambda` expression of `even?` to `odd?` and similarly we pass the `lambda` expression of `odd?` to `even?`.

In this way we are not dependent on binding of variable names `even?` and `odd?` to their respective `lambda` expressions!

Well thats it! Here is our procedure:

{% highlight scheme linenos %}
(define (f x)
  ((lambda (even? odd?)
     (even? even? odd? x))
   (lambda (ev? od? n)
     (if (= n 0) true (od? ev? od? (- n 1))))
   (lambda (ev? od? n)
     (if (= n 0) false (ev? ev? od? (- n 1))))))
{% endhighlight %}

Well, it indeed solved the problem but it has decreased the readablity of the code!

#### (a)

This is simple now after doing part(a)

{% highlight scheme linenos %}
;;; M-Eval input:
((lambda (n)
    ((lambda (fib)
        (fib fib n))
     (lambda (fb n)
        (cond ((= n 0) 0)
              ((= n 1) 1)
              (else (+ (fb fb (- n 1)) (fb fb (- n 2))))))))
 10)

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
55
{% endhighlight %}


--------

#### Complete Code

Since in next section, there will be quite a number of changes in code. Putting the complete code here till now.

{% highlight scheme linenos %}
;;;;METACIRCULAR EVALUATOR FROM CHAPTER 4 (SECTIONS 4.1.1-4.1.4) of
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch4.scm

;;;;This file can be loaded into Scheme as a whole.
;;;;Then you can initialize and start the evaluator by evaluating
;;;; the two commented-out lines at the end of the file (setting up the
;;;; global environment and starting the driver loop).

;;;; resetting the environment so that we can reload the file
(ge (make-top-level-environment))

;;;;This warning here now not applicable in our case because of the statement above.
;;;;**WARNING: Don't load this file twice (or you'll lose the primitives
;;;;  interface, due to renamings of apply).

;;;from section 4.1.4 -- must precede def of metacircular apply
(define apply-in-underlying-scheme apply)

;;;SECTION 4.1.1

(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
        ((quoted? exp) (text-of-quotation exp))
        ((assignment? exp) (eval-assignment exp env))
        ((definition? exp) (eval-definition exp env))
        ((unbound!? exp) (eval-unbound! exp env))
        ((if? exp) (eval-if exp env))
        ((lambda? exp)
         (make-procedure (lambda-parameters exp)
                         (lambda-body exp)
                         env))
        ((begin? exp) 
         (eval-sequence (begin-actions exp) env))
        ((cond? exp) (eval-cond exp env))
		((logical? exp) (eval-logical exp env))
		((let? exp) (eval (let->combination exp) env))
		((let*? exp) (eval (let*->let exp) env))
		((letrec? exp) (eval (letrec->let exp) env))
		((for? exp) (eval (for->let exp) env))
        ((application? exp)
         (apply (eval (operator exp) env)
                (list-of-values (operands exp) env)))
        (else
         (error "Unknown expression type -- EVAL" exp))))

(define (apply procedure arguments)
  (cond ((primitive-procedure? procedure)
         (apply-primitive-procedure procedure arguments))
        ((compound-procedure? procedure)
         (eval-sequence
           (procedure-body procedure)
           (extend-environment
             (procedure-parameters procedure)
             arguments
             (procedure-environment procedure))))
        (else
         (error
          "Unknown procedure type -- APPLY" procedure))))

(define (list-of-values exps env)
  (if (no-operands? exps)
      '()
      (cons (eval (first-operand exps) env)
            (list-of-values (rest-operands exps) env))))

(define (eval-if exp env)
  (if (true? (eval (if-predicate exp) env))
      (eval (if-consequent exp) env)
      (eval (if-alternative exp) env)))

(define (eval-cond exp env)
  (define (iter clauses)
	(if (null? clauses)
		false
		(let ((first (car clauses))
			  (rest (cdr clauses)))
		  (cond ((cond-else-clause? first)
				 (if (null? rest)
					 (eval (sequence->exp (cond-actions first)) env)
					 (error "Else not last clause"
							(cond-clauses exp))))
				((cond-=>-clause? first)
				 (let ((pred (eval (cond-=>-predicate first) env)))
				   (if (true? pred)
					   (apply (eval (cond-=>-recipient first) env) (list pred))
					   (iter rest))))
				(else (if (true? (eval (cond-predicate first) env))
						  (eval (sequence->exp (cond-actions first)) env)
						  (iter rest)))))))
  (iter (cond-clauses exp)))
	 
(define (eval-sequence exps env)
  (cond ((last-exp? exps) (eval (first-exp exps) env))
        (else (eval (first-exp exps) env)
              (eval-sequence (rest-exps exps) env))))

(define (eval-assignment exp env)
  (set-variable-value! (assignment-variable exp)
                       (eval (assignment-value exp) env)
                       env)
  'ok)

(define (eval-definition exp env)
  (define-variable! (definition-variable exp)
                    (eval (definition-value exp) env)
                    env)
  'ok)

(define (boolean-impl val)
  (if (true? val) val false))

(define (eval-logical exp env)
  (define (iter predicates test?)
	(let ((first (eval (first-exp predicates) env)))
	  (if (test? first)
		  (if (last-exp? predicates)
			  (boolean-impl first)
			  (iter (rest-exps predicates) test?))
		  (boolean-impl first))))
  
  (let ((test? (if (and? exp) true? false?))
		(predicates (logical-predicates exp)))
	(if (null? predicates)
		(boolean-impl (test? '()))
		(iter predicates test?))))
	
;;;SECTION 4.1.2

(define (self-evaluating? exp)
  (cond ((number? exp) true)
        ((string? exp) true)
        (else false)))

(define (quoted? exp)
  (tagged-list? exp 'quote))

(define (text-of-quotation exp) (cadr exp))

(define (tagged-list? exp tag)
  (if (pair? exp)
      (eq? (car exp) tag)
      false))

(define (variable? exp) (symbol? exp))

(define (assignment? exp)
  (tagged-list? exp 'set!))

(define (assignment-variable exp) (cadr exp))

(define (assignment-value exp) (caddr exp))

(define (definition? exp)
  (tagged-list? exp 'define))

(define (definition-variable exp)
  (if (symbol? (cadr exp))
      (cadr exp)
      (caadr exp)))

(define (definition-value exp)
  (if (symbol? (cadr exp))
      (caddr exp)
      (make-lambda (cdadr exp)
                   (cddr exp))))

(define (unbound!? exp)
  (tagged-list? exp 'unbound!))

(define (unbound!-variable-name exp)
  (if (symbol? (cadr exp))
	  (cadr exp)
	  (error "Unbound variable name is not a symbol" exp)))

(define (eval-unbound! exp env)
  (unbound-variable! (unbound!-variable-name exp) env))

(define (lambda? exp) (tagged-list? exp 'lambda))

(define (lambda-parameters exp) (cadr exp))
(define (lambda-body exp) (cddr exp))

(define (make-lambda parameters body)
  (cons 'lambda (cons parameters body)))

(define (if? exp) (tagged-list? exp 'if))

(define (if-predicate exp) (cadr exp))

(define (if-consequent exp) (caddr exp))

(define (if-alternative exp)
  (if (not (null? (cdddr exp)))
      (cadddr exp)
      'false))

(define (make-if predicate consequent alternative)
  (list 'if predicate consequent alternative))


(define (begin? exp) (tagged-list? exp 'begin))

(define (begin-actions exp) (cdr exp))

(define (last-exp? seq) (null? (cdr seq)))
(define (first-exp seq) (car seq))
(define (rest-exps seq) (cdr seq))

(define (sequence->exp seq)
  (cond ((null? seq) seq)
        ((last-exp? seq) (first-exp seq))
        (else (make-begin seq))))

(define (make-begin seq) (cons 'begin seq))


(define (application? exp) (pair? exp))
(define (operator exp) (car exp))
(define (operands exp) (cdr exp))

(define (no-operands? ops) (null? ops))
(define (first-operand ops) (car ops))
(define (rest-operands ops) (cdr ops))


(define (cond? exp) (tagged-list? exp 'cond))

(define (cond-clauses exp) (cdr exp))

(define (cond-else-clause? clause)
  (eq? (cond-predicate clause) 'else))

(define (cond-predicate clause) (car clause))

(define (cond-actions clause) (cdr clause))

(define (cond-=>-clause? clause)
  (eq? '=> (cadr clause)))

(define (cond-=>-predicate clause) (car clause))

(define (cond-=>-recipient clause)
  (let ((recp (cddr clause)))
	(if (last-exp? recp)
		(first-exp recp)
		(error "recipient can not have multiple expressions" clause))))

(define (cond->if exp)
  (expand-clauses (cond-clauses exp)))

(define (expand-clauses clauses)
  (if (null? clauses)
      'false                          ; no else clause
      (let ((first (car clauses))
            (rest (cdr clauses)))
        (if (cond-else-clause? first)
            (if (null? rest)
                (sequence->exp (cond-actions first))
                (error "ELSE clause isn't last -- COND->IF"
                       clauses))
            (make-if (cond-predicate first)
                     (sequence->exp (cond-actions first))
                     (expand-clauses rest))))))

(define (and? exp) (tagged-list? exp 'and))

(define (or? exp) (tagged-list? exp 'or))

(define (logical? exp) (or (and? exp) (or? exp)))

(define (logical-predicates exp) (cdr exp))

(define (logical->if exp)
  (expand-predicates (and? exp) (logical-predicates exp)))

(define (expand-predicates and-type preds)
  (if (null? preds)
	  (if and-type 'true 'false)
	  (let ((first (car preds))
			(rest (cdr preds)))
		(let ((rest-exp (if (null? rest)
							first
							(expand-predicates and-type rest))))
		  (if and-type
			  (make-if first rest-exp 'false)
			  (make-if first first rest-exp))))))

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
		  (cons
		   (make-lambda '()
						(list (list 'define (let-name exp) proc)
							  (cons (let-name exp) vexps)
							  )) '())
		  (cons proc vexps)
	  ))))

;; var-defs and body should be list
(define (make-let var-defs body)
  (cons 'let (cons var-defs body)))

;; var-defs and body should be list
(define (make-named-let name var-defs body)
  (cons 'let (cons name (cons var-defs body))))

(define (let*? exp) (tagged-list? exp 'let*))

(define (let*->let exp)
  (car
   (fold-right (lambda(new rem)
				 (list (make-let (list new) rem)))
			   (let-body exp)
			   (let-vardefs exp))))

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

;;;SECTION 4.1.3

(define (true? x)
  (not (eq? x false)))

(define (false? x)
  (eq? x false))

(define (make-procedure parameters body env)
  (list 'procedure parameters (scan-out-defines body) env))

(define (compound-procedure? p)
  (tagged-list? p 'procedure))


(define (procedure-parameters p) (cadr p))
(define (procedure-body p) (caddr p))
(define (procedure-environment p) (cadddr p))


(define (enclosing-environment env) (cdr env))

(define (first-frame env) (car env))

(define the-empty-environment '())

;; we need cons to contain list of pairs.
;; the reason is same as when we build tables in ch-3:
;; if we add at beginning of list or pairs
;; it will change the initial point of the pairs.
;; thus we need a place to point to the head of this list. 
(define (make-frame variables values)
  (cons 'table (map cons variables values)))

;;(define (frame-variables frame) (car frame))
;;(define (frame-values frame) (cdr frame))

(define (frame-pairs frame) (cdr frame))

(define (find contains? next data)
  (if (null? data)
	  #f
	  (let ((found (contains? data)))
		(if found
			found
			(find contains? next (next data))))))

(define (assoc var table)
  (find (lambda(tbl)
		  (let ((pair (car tbl)))
			(if (eq? (car pair) var)
				pair
				#f)))
		 cdr
		 table))

(define (find-pair var env)
  (find (lambda(e)
		  (assoc var (frame-pairs (first-frame e))))
		enclosing-environment
		env))

(define (add-binding-to-frame! var val frame)
  (set-cdr! frame (cons (cons var val) (cdr frame))))

(define (extend-environment vars vals base-env)
  (if (= (length vars) (length vals))
      (cons (make-frame vars vals) base-env)
      (if (< (length vars) (length vals))
          (error "Too many arguments supplied" vars vals)
          (error "Too few arguments supplied" vars vals))))

(define (lookup-variable-value var env)
  (let ((pair (find-pair var env)))
	(if pair 
		(if (eq? (cdr pair) '*unassigned*)
			(error "Variable is unassigned!")
			(cdr pair))
		(error "Unbound variable" var))))

(define (set-variable-value! var val env)
  (let ((pair (find-pair var env)))
	(if pair
		(set-cdr! pair val)
		(error "Unbound variable" var))))

(define (define-variable! var val env)
  (let ((pair (assoc var (frame-pairs (first-frame env)))))
	(if pair
		(set-cdr! pair val)
		(add-binding-to-frame! var val (first-frame env))
		)))

(define (unbound-variable! var env)
  (let ((pair (find-pair var env)))
	(if pair
		(begin (set-car! pair '()) (set-cdr! pair '()))
		(error "Unbound variable" var))))

(define (scan-out-defines proc-body)
  (let ((result
		 (fold-right
		  (lambda(new rem)
			(if (definition? new)
				(let ((var-def (list (definition-variable new) ''*unassigned*))
					  (var-set (list 'set! (definition-variable new) (definition-value new))))
					(list (cons var-def (car rem))
						  (cons var-set (cadr rem))))
				(list (car rem)
					  (cons new (cadr rem)))))
		  (list '() '())
		  proc-body)))
	
	  (if (eq? '() (car result))
		  proc-body ;;return original else infinite loop!
		  ;;put let in list bec apply expects it a list
		  (list (make-let (car result)
						  (cadr result))))))

;;;SECTION 4.1.4

(define (setup-environment)
  (let ((initial-env
         (extend-environment (primitive-procedure-names)
                             (primitive-procedure-objects)
                             the-empty-environment)))
    (define-variable! 'true true initial-env)
    (define-variable! 'false false initial-env)
    initial-env))

;[do later] (define the-global-environment (setup-environment))

(define (primitive-procedure? proc)
  (tagged-list? proc 'primitive))

(define (primitive-implementation proc) (cadr proc))

(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
		(list '+ +)
		(list '* *)
		(list 'assoc assoc)
		(list 'cadr cadr)
		(list 'cddr cddr)
		(list '= =)
		(list '- -)
        (list 'pair? pair?)
        (list 'not not)
        (list 'newline newline)
        (list 'display display)
        (list 'error error)
;;      more primitives
        ))

(define (primitive-procedure-names)
  (map car
       primitive-procedures))

(define (primitive-procedure-objects)
  (map (lambda (proc) (list 'primitive (cadr proc)))
       primitive-procedures))

(define (user-print object)
  (if (compound-procedure? object)
      (display (list 'compound-procedure
                     (procedure-parameters object)
                     (procedure-body object)
                     '<procedure-env>))
      (display object)))

(define (apply-primitive-procedure proc args)
  (apply-in-underlying-scheme
   (primitive-implementation proc) args))

(define input-prompt ";;; M-Eval input:")
(define output-prompt ";;; M-Eval value:")
(define exit-symbol 'exit)

(define (driver-loop)
  (prompt-for-input input-prompt)
  (let ((input (read)))
	(if (eq? input exit-symbol)
		'exiting..
		(let ((output (eval input the-global-environment)))
		  (announce-output output-prompt)
		  (user-print output)
		  (driver-loop)))))

;;[user-print moved before primitive procedure as it is used there]

(define (prompt-for-input string)
  (newline) (newline) (display string) (newline))

(define (announce-output string)
  (newline) (display string) (newline))

;;;Following are commented out so as not to be evaluated when
;;; the file is loaded.

(define the-global-environment (setup-environment))
(driver-loop)

'METACIRCULAR-EVALUATOR-LOADED
{% endhighlight %}
