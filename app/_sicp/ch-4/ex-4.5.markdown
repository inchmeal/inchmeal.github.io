---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.5"
order: "005"
date: 2018-03-07 
---

I have re-written the `cond` as an special form instead of using `if`.

I first attempted to use the existing `cond` which is written as derived expression. But like in previous exercise, it again lead to repeated evaluation of same argument.

To build solution that uses memoization in some way seemed more time consuming, so instead I rewrote the `cond` as an special form instead of derived form.

(Change the eval to use `eval-cond` instead of converting to if)

{% highlight scheme linenos %}
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
					   ;;we do not use eval but ourself called apply
					   ;;the reason is eval in application block tries to eval the arguments(pred) also.
					   ;;but we do not need to eval argument(pred) bec it is already evaluated.
					   (apply (eval (cond-=>-recipient first) env) (list pred))
					   (iter rest))))
				(else (if (true? (eval (cond-predicate first) env))
						  (eval (sequence->exp (cond-actions first)) env)
						  (iter rest)))))))
  (iter (cond-clauses exp)))

(define (cond-=>-clause? clause)
  (eq? '=> (cadr clause)))

(define (cond-=>-predicate clause) (car clause))

(define (cond-=>-recipient clause)
  (let ((recp (cddr clause)))
	(if (last-exp? recp)
		(first-exp recp)
		(error "recipient can not have multiple expressions" clause))))
{% endhighlight %}


Note that I added `+`, `cadr`, `cddr`, `assoc` also in the list of primitive procedures in the evaluator.

Output:

{% highlight scheme linenos %}
;;; M-Eval input:
(cond ((+ 2 5) => (lambda(x) (+ x 100))))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
107

;;; M-Eval input:
(cond ((assoc 'b '((a 1) (b 2))) => cadr)
      (else false))

;;; M-Eval value:
2

;;; M-Eval input:
(cond (1 100))

;;; M-Eval value:
100

;;; M-Eval input:
(cond (false 100))

;;; M-Eval value:
#f

;;; M-Eval input:
(cond (false 100) (true 200) (1 => +))

;;; M-Eval value:
200

;;; M-Eval input:
(cond (false 100) (false 200) (1 => +))

;;; M-Eval value:
1

;;; M-Eval input:
{% endhighlight %}

---------

#### Complete Code

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
        ((if? exp) (eval-if exp env))
        ((lambda? exp)
         (make-procedure (lambda-parameters exp)
                         (lambda-body exp)
                         env))
        ((begin? exp) 
         (eval-sequence (begin-actions exp) env))
        ((cond? exp) (eval-cond exp env))
		((logical? exp) (eval-logical exp env))
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

;;;SECTION 4.1.3

(define (true? x)
  (not (eq? x false)))

(define (false? x)
  (eq? x false))

(define (make-procedure parameters body env)
  (list 'procedure parameters body env))

(define (compound-procedure? p)
  (tagged-list? p 'procedure))


(define (procedure-parameters p) (cadr p))
(define (procedure-body p) (caddr p))
(define (procedure-environment p) (cadddr p))


(define (enclosing-environment env) (cdr env))

(define (first-frame env) (car env))

(define the-empty-environment '())

(define (make-frame variables values)
  (cons variables values))

(define (frame-variables frame) (car frame))
(define (frame-values frame) (cdr frame))

(define (add-binding-to-frame! var val frame)
  (set-car! frame (cons var (car frame)))
  (set-cdr! frame (cons val (cdr frame))))

(define (extend-environment vars vals base-env)
  (if (= (length vars) (length vals))
      (cons (make-frame vars vals) base-env)
      (if (< (length vars) (length vals))
          (error "Too many arguments supplied" vars vals)
          (error "Too few arguments supplied" vars vals))))

(define (lookup-variable-value var env)
  (define (env-loop env)
    (define (scan vars vals)
      (cond ((null? vars)
             (env-loop (enclosing-environment env)))
            ((eq? var (car vars))
             (car vals))
            (else (scan (cdr vars) (cdr vals)))))
    (if (eq? env the-empty-environment)
        (error "Unbound variable" var)
        (let ((frame (first-frame env)))
          (scan (frame-variables frame)
                (frame-values frame)))))
  (env-loop env))

(define (set-variable-value! var val env)
  (define (env-loop env)
    (define (scan vars vals)
      (cond ((null? vars)
             (env-loop (enclosing-environment env)))
            ((eq? var (car vars))
             (set-car! vals val))
            (else (scan (cdr vars) (cdr vals)))))
    (if (eq? env the-empty-environment)
        (error "Unbound variable -- SET!" var)
        (let ((frame (first-frame env)))
          (scan (frame-variables frame)
                (frame-values frame)))))
  (env-loop env))

(define (define-variable! var val env)
  (let ((frame (first-frame env)))
    (define (scan vars vals)
      (cond ((null? vars)
             (add-binding-to-frame! var val frame))
            ((eq? var (car vars))
             (set-car! vals val))
            (else (scan (cdr vars) (cdr vals)))))
    (scan (frame-variables frame)
          (frame-values frame))))

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
		(list 'assoc assoc)
		(list 'cadr cadr)
		(list 'cddr cddr)
;;      more primitives
        ))

(define (primitive-procedure-names)
  (map car
       primitive-procedures))

(define (primitive-procedure-objects)
  (map (lambda (proc) (list 'primitive (cadr proc)))
       primitive-procedures))

;[moved to start of file] (define apply-in-underlying-scheme apply)

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

(define (prompt-for-input string)
  (newline) (newline) (display string) (newline))

(define (announce-output string)
  (newline) (display string) (newline))

(define (user-print object)
  (if (compound-procedure? object)
      (display (list 'compound-procedure
                     (procedure-parameters object)
                     (procedure-body object)
                     '<procedure-env>))
      (display object)))

;;;Following are commented out so as not to be evaluated when
;;; the file is loaded.

(define the-global-environment (setup-environment))
(driver-loop)

'METACIRCULAR-EVALUATOR-LOADED
{% endhighlight %}
