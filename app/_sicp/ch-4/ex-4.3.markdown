---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.3"
order: "003"
date: 2018-03-04 
---

#### Some additional details

Since it was becoming difficult to verify programs because the whole evaluator is not yet built in the book, i went ahead and read till section 4.1.4.

Now, after reading that, now we can use the evaluator presented in the book whose complete code can be found [here][mit].

**Note:** We should not re-load the same code again while using **repl**. Else our evaluator code can get in conflict with the implementation language, in particular the apply procedure!

If one wants to reload, then repl should be reset/restarted. In MIT scheme, this can be done using `(ge (make-top-level-environment))`. I put this line at the top of the evaluator code thus need not to remember resetting, every time when I reload.

I have added a small check for exiting from the evaluator by typing `exit` on the evaluator prompt.

------

#### Solution

**Note** the use of `apply-in-underlying-scheme` while invoking `exp-handler` inside `eval`. We should not use `apply` here because we have changed the definition of apply. 

But why we used `apply` in the `application?` part in `eval`? Because at that point we are here invoking the procedure defined in our defined language!

Finally consider the use of *data-driven* style which was the main point of the exercise. The advantage here we can see is when we add a new expression-type we need not to go to the main code i.e. a separate developer using our evaluator can add a new expression type easily without touching our evaluator.

Also, it would have been better if `application?` part can also become part of this *data-driven* style using the strategey used in previous exercise.

{% highlight scheme linenos %}
(define *op-table* (make-hash-table))

(define (put op type proc)
  (hash-table/put! *op-table* (list op type) proc))

(define (get op type)
  (hash-table/get *op-table* (list op type) #f))

(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
		(else (let ((exp-handler (get 'exp (car exp))))
				(cond
				 ((not (eq? #f exp-handler)) (apply-in-underlying-scheme exp-handler (list exp env)))
				 ((application? exp)
				  (apply (eval (operator exp) env)
						 (list-of-values (operands exp) env)))
				 (else
				  (error "Unknown expression type -- EVAL" exp)))))))

;; note that below statements should be added at the bottom of the evaluator else when these statements are
;; executed the repl will look for the procedures not yet defined.
(put 'exp 'quote (lambda(exp env) (text-of-quotation exp)))
(put 'exp 'set! eval-assignment)
(put 'exp 'define eval-definition)
(put 'exp 'if eval-if)
(put 'exp 'lambda
	 (lambda(exp env)
	   (make-procedure (lambda-parameters exp) (lambda-body exp) env)))
(put 'exp 'begin (lambda(exp env) (eval-sequence (begin-actions exp) env)))
(put 'exp 'cond (lambda(exp env) (eval (cond->if exp) env)))

{% endhighlight %}

I tested this on the example given in section 4.1.4:

{% highlight scheme linenos %}

;;; M-Eval input:
(define (append x y)
  (if (null? x)
      y
      (cons (car x)
            (append (cdr x) y))))

;;; M-Eval value:
ok

;;; M-Eval input:
(append '(a b c) '(d e f))

;;; M-Eval value:
(a b c d e f)

;;; M-Eval input:
(append '(1 2 3 q w) '(e r t y))

;;; M-Eval value:
(1 2 3 q w e r t y)

;;; M-Eval input:
exit
;Value: exiting..

1 ]=> 
{% endhighlight %}

--------

#### Complete working code

The code can be downloaded from [mit][mit]. Still I am presenting the complete code here with the changes corresponding to this exercise as well as to reset the repl:

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

(define *op-table* (make-hash-table))

(define (put op type proc)
  (hash-table/put! *op-table* (list op type) proc))

(define (get op type)
  (hash-table/get *op-table* (list op type) #f))


(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
		(else (let ((exp-handler (get 'exp (car exp))))
				(cond
				 ((not (eq? #f exp-handler)) (apply-in-underlying-scheme exp-handler (list exp env)))
				 ((application? exp)
				  (apply (eval (operator exp) env)
						 (list-of-values (operands exp) env)))
				 (else
				  (error "Unknown expression type -- EVAL" exp)))))))

;; (define (eval exp env)
;;   (cond ((self-evaluating? exp) exp)
;;         ((variable? exp) (lookup-variable-value exp env))
;;         ((quoted? exp) (text-of-quotation exp))
;;         ((assignment? exp) (eval-assignment exp env))
;;         ((definition? exp) (eval-definition exp env))
;;         ((if? exp) (eval-if exp env))
;;         ((lambda? exp)
;;          (make-procedure (lambda-parameters exp)
;;                          (lambda-body exp)
;;                          env))
;;         ((begin? exp) 
;;          (eval-sequence (begin-actions exp) env))
;;         ((cond? exp) (eval (cond->if exp) env))
;;         ((application? exp)
;;          (apply (eval (operator exp) env)
;;                 (list-of-values (operands exp) env)))
;;         (else
;;          (error "Unknown expression type -- EVAL" exp))))

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

(put 'exp 'quote (lambda(exp env) (text-of-quotation exp)))
(put 'exp 'set! eval-assignment)
(put 'exp 'define eval-definition)
(put 'exp 'if eval-if)
(put 'exp 'lambda
	 (lambda(exp env)
	   (make-procedure (lambda-parameters exp) (lambda-body exp) env)))
(put 'exp 'begin (lambda(exp env) (eval-sequence (begin-actions exp) env)))
(put 'exp 'cond (lambda(exp env) (eval (cond->if exp) env)))

;;;Following are commented out so as not to be evaluated when
;;; the file is loaded.

(define the-global-environment (setup-environment))
(driver-loop)

'METACIRCULAR-EVALUATOR-LOADED
{% endhighlight %}





[mit]: https://mitpress.mit.edu/sicp/code/index.html

