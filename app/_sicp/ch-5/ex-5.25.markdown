---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.25"
order: "025"
date: 2018-05-03 
---

This exercise turned out quite interesting. It displays that writing code in machine instructions is not that difficult. It also shows why even it being not difficult - it's tedious.

Well, there's a reason why we code in high level languages. For this small change, it took quite a bit of remembering - details of the values stored in each registers and stack saves and continue and so on.

Note again, after doing exercises of sec-4.2 in ch-4, this exercise in itself is not difficult but it requires a lot of remembering. I just replicated the exact flow as in the sec-4.2.

Few things to note for understanding the solution:
- Now, as in sec-4.2 lazy evaluator, we just dispatch the jump to `apply-dispatch` without evaluating the arguments.
- Now, `apply-dispatch` does following:
  - if procedure is `primitive` then it jumps to `ev-appl-operands-values` where the operand values present in `unev` are evaluated and saved in `argl`. Note that how i saved `proc` and worked with `continue` to make sure that after `argl` is formed, we jump to `primitive-apply` with `proc` and `argl` available.
  - if procedure is `compound` then it calls *primitive procedure* `list-of-delayed-args` to convert all the arguments into thunks.
- Defined a label `actual-value`, that works exactly like procedure `actual-value` in our lazy evaluator of sec-4.2. It evaluates the expression in `exp` and *then* in loop it keeps evaluating the result until the result is no longer a `thunk`. At this point it jumps back to the original continue(thus we do some saving of continue here).
- Similar to the lazy-evaluator, i changed `if`, `cond` and the main drive loop `read-eval-print-loop` to use `actual-value` instead of `eval-dispatch`.

And that's it!

First I shall preesent the important changes then at the bottom I shall put the complete code of the evaluator:

{% highlight scheme linenos %}
ev-application
  (save continue)
  (save env)
  (assign unev (op operands) (reg exp))
  (save unev)
  (assign exp (op operator) (reg exp))
  (assign continue (label apply-dispatch))
  (goto (label actual-value))
  
ev-appl-operands-values
  (assign argl (op empty-arglist))
  (test (op no-operands?) (reg unev))
  (branch (label ev-appl-no-operands))
  (save continue)  
ev-appl-operand-loop
  (save argl)
  (assign exp (op first-operand) (reg unev))  
  (test (op last-operand?) (reg unev))
  (branch (label ev-appl-last-arg))
  (save env)
  (save unev)
  (assign continue (label ev-appl-accumulate-arg))
  (goto (label actual-value))
ev-appl-accumulate-arg
  (restore unev)
  (restore env)
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (assign unev (op rest-operands) (reg unev))
  (goto (label ev-appl-operand-loop))
ev-appl-last-arg
  (assign continue (label ev-appl-accum-last-arg))
  (goto (label actual-value))
ev-appl-accum-last-arg
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (restore continue)
ev-appl-no-operands
  (goto (reg continue))

apply-dispatch
  (restore unev)
  (restore env)
  (assign proc (reg val))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-prepare))
  (test (op compound-procedure?) (reg proc))  
  (branch (label compound-prepare))
  (goto (label unknown-procedure-type))

actual-value
  (save continue)
  (assign continue (label force-it))
  (goto (label eval-dispatch))
force-it
  (test (op thunk?) (reg val))
  (branch (label ev-thunk))
  (test (op evaluated-thunk?) (reg val))
  (branch (label ev-evaluated-thunk))
  (restore continue)
  (goto (reg continue))
ev-thunk
  (assign exp (op thunk-exp) (reg val))
  (assign env (op thunk-env) (reg val))
  (save val)
  (assign continue (label save-thunk))
  (goto (label actual-value))
save-thunk
  (restore exp)
  (perform (op make-evaluated-thunk) (reg exp) (reg val))
  (restore continue)
  ;;note that before jump val contains the evaluated value
  (goto (reg continue))
ev-evaluated-thunk
  (restore continue)
  (assign val (op thunk-value) (reg val))
  (goto (reg continue))
  
primitive-prepare
  (save proc)
  (assign continue (label primitive-apply))
  (goto (label ev-appl-operands-values))
primitive-apply
  (restore proc)  
  (assign val (op apply-primitive-procedure)
              (reg proc)
              (reg argl))
  (restore continue)
  (goto (reg continue))

compound-prepare
  (assign argl (op list-of-delayed-args) (reg unev) (reg env))
compound-apply
  (assign unev (op procedure-parameters) (reg proc))
  (assign env (op procedure-environment) (reg proc))
  (assign env (op extend-environment)
              (reg unev) (reg argl) (reg env))
  (assign unev (op procedure-body) (reg proc))
  (goto (label ev-sequence))
{% endhighlight %}

(Above code does not contain changes in `ev-if`, `ev-cond` and `read-eval-print-loop` - check complete code at the bottom to view those changes)

There are few *primitive procedures* which were added in ch5-eceval-support.scm:

{% highlight scheme linenos %}
;;;ex-5.25 normal order evaluation
(define (delay-it exp env)
  (list 'thunk exp env))

(define (thunk? obj)
  (tagged-list? obj 'thunk))

(define (thunk-exp thunk) (cadr thunk))

(define (thunk-env thunk) (caddr thunk))

(define (evaluated-thunk? obj)
  (tagged-list? obj 'evaluated-thunk))

(define (thunk-value evaluated-thunk) (cadr evaluated-thunk))

(define (make-evaluated-thunk thunk thunk-value)
  (set-car! thunk 'evaluated-thunk)
  (set-car! (cdr thunk) thunk-value)  ; replace exp with its value
  (set-cdr! (cdr thunk) '()))     ; forget unneeded env

(define (list-of-delayed-args exps env)
  (if (no-operands? exps)
      '()
      (cons (delay-it (first-operand exps) env)
            (list-of-delayed-args (rest-operands exps)
                                  env))))
{% endhighlight %}

-----

Example/Output

First few basic tests:

{% highlight scheme linenos %}
1 ]=> 
(define the-global-environment (setup-environment))
(start eceval)

;Value: the-global-environment

1 ]=> 

;;; EC-Eval input:
1

(total-pushes = 1 maximum-depth = 1)
;;; EC-Eval value:
1

;;; EC-Eval input:
(define (append x y)
  (if (null? x)
      y
      (cons (car x)
            (append (cdr x) y))))

(total-pushes = 4 maximum-depth = 4)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(append '(a b c) '(d e f))

(total-pushes = 165 maximum-depth = 32)
;;; EC-Eval value:
(a b c d e f)

;;; EC-Eval input:
(define (factorial n)
  (if (= n 1)
      1
      (* (factorial (- n 1)) n)))

(total-pushes = 4 maximum-depth = 4)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(factorial 5)

(total-pushes = 207 maximum-depth = 49)
;;; EC-Eval value:
120

;;; EC-Eval input:
(factorial (factorial 4))

(total-pushes = 1241 maximum-depth = 182)
;;; EC-Eval value:
620448401733239439360000

;;; EC-Eval input:
{% endhighlight %}

Now, I tested with ex-4.27 - which demostrates that arguments are indeed delayed:

{% highlight scheme linenos %}
;;; EC-Eval input:
(define count 0)
(define (id x)
  (set! count (+ count 1))
  x)

(total-pushes = 4 maximum-depth = 4)
;;; EC-Eval value:
ok

;;; EC-Eval input:

(total-pushes = 4 maximum-depth = 4)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(define w (id (id 10)))

(total-pushes = 25 maximum-depth = 17)
;;; EC-Eval value:
ok

;;; EC-Eval input:
count

(total-pushes = 1 maximum-depth = 1)
;;; EC-Eval value:
1

;;; EC-Eval input:
w

(total-pushes = 26 maximum-depth = 16)
;;; EC-Eval value:
10

;;; EC-Eval input:
count

(total-pushes = 1 maximum-depth = 1)
;;; EC-Eval value:
2

;;; EC-Eval input:
w

(total-pushes = 1 maximum-depth = 1)
;;; EC-Eval value:
10

;;; EC-Eval input:
count

(total-pushes = 1 maximum-depth = 1)
;;; EC-Eval value:
2

;;; EC-Eval input:
{% endhighlight %}

-----

#### Complete Code

This contain all changes of ex-5.23, 5.24, 5.25

All the changes are mainly in file ch5-eceval.scm:(this file is origninally from mit website)

{% highlight scheme linenos %}
;;;;EXPLICIT-CONTROL EVALUATOR FROM SECTION 5.4 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch5.scm

;;; To use it
;;; -- load "load-eceval.scm", which loads this file and the
;;;    support it needs (including the register-machine simulator)

;;; -- To initialize and start the machine, do

;: (define the-global-environment (setup-environment))

;: (start eceval)

;; To restart, can do just
;: (start eceval)
;;;;;;;;;;


;;**NB. To [not] monitor stack operations, comment in/[out] the line after
;; print-result in the machine controller below
;;**Also choose the desired make-stack version in regsim.scm

(define eceval-operations
  (list
   ;;primitive Scheme operations
   (list 'read read)
   (list 'car car)
   (list 'cdr cdr)
   (list 'null? null?)
   (list 'not not)
   
   ;;operations in syntax.scm
   (list 'self-evaluating? self-evaluating?)
   (list 'quoted? quoted?)
   (list 'text-of-quotation text-of-quotation)
   (list 'variable? variable?)
   (list 'assignment? assignment?)
   (list 'assignment-variable assignment-variable)
   (list 'assignment-value assignment-value)
   (list 'definition? definition?)
   (list 'definition-variable definition-variable)
   (list 'definition-value definition-value)
   (list 'lambda? lambda?)
   (list 'lambda-parameters lambda-parameters)
   (list 'lambda-body lambda-body)
   (list 'if? if?)
   (list 'if-predicate if-predicate)
   (list 'if-consequent if-consequent)
   (list 'if-alternative if-alternative)

   ;;ex-5.23-5.24
   (list 'cond? cond?)
   (list 'cond-clauses cond-clauses)
   (list 'cond-actions cond-actions)
   (list 'cond-predicate cond-predicate)
   (list 'cond-else-clause? cond-else-clause?)
   (list 'cond->if cond->if)
   (list 'let? let?)
   (list 'let->combination let->combination)

   ;;ex-5.25
   (list 'thunk? thunk?)
   (list 'evaluated-thunk? evaluated-thunk?)
   (list 'thunk-value thunk-value)
   (list 'thunk-exp thunk-exp)
   (list 'thunk-env thunk-env)
   (list 'make-evaluated-thunk make-evaluated-thunk)
   (list 'list-of-delayed-args list-of-delayed-args)
   
   (list 'begin? begin?)
   (list 'begin-actions begin-actions)
   (list 'last-exp? last-exp?)
   (list 'first-exp first-exp)
   (list 'rest-exps rest-exps)
   (list 'application? application?)
   (list 'operator operator)
   (list 'operands operands)
   (list 'no-operands? no-operands?)
   (list 'first-operand first-operand)
   (list 'rest-operands rest-operands)

   ;;operations in eceval-support.scm
   (list 'true? true?)
   (list 'make-procedure make-procedure)
   (list 'compound-procedure? compound-procedure?)
   (list 'procedure-parameters procedure-parameters)
   (list 'procedure-body procedure-body)
   (list 'procedure-environment procedure-environment)
   (list 'extend-environment extend-environment)
   (list 'lookup-variable-value lookup-variable-value)
   (list 'set-variable-value! set-variable-value!)
   (list 'define-variable! define-variable!)
   (list 'primitive-procedure? primitive-procedure?)
   (list 'apply-primitive-procedure apply-primitive-procedure)
   (list 'prompt-for-input prompt-for-input)
   (list 'announce-output announce-output)
   (list 'user-print user-print)
   (list 'empty-arglist empty-arglist)
   (list 'adjoin-arg adjoin-arg)
   (list 'last-operand? last-operand?)
   (list 'no-more-exps? no-more-exps?)	;for non-tail-recursive machine
   (list 'get-global-environment get-global-environment))
   )

(define eceval
  (make-machine
   '(exp env val proc argl continue unev)
   eceval-operations
  '(
;;SECTION 5.4.4
read-eval-print-loop
  (perform (op initialize-stack))
  (perform
   (op prompt-for-input) (const ";;; EC-Eval input:"))
  (assign exp (op read))
  (assign env (op get-global-environment))
  (assign continue (label print-result))
  (goto (label actual-value))
print-result
;;**following instruction optional -- if use it, need monitored stack
  (perform (op print-stack-statistics))
  (perform
   (op announce-output) (const ";;; EC-Eval value:"))
  (perform (op user-print) (reg val))
  (goto (label read-eval-print-loop))

unknown-expression-type
  (assign val (const unknown-expression-type-error))
  (goto (label signal-error))

unknown-procedure-type
  (restore continue)
  (assign val (const unknown-procedure-type-error))
  (goto (label signal-error))

signal-error
  (perform (op user-print) (reg val))
  (goto (label read-eval-print-loop))

;;SECTION 5.4.1
eval-dispatch
  (test (op self-evaluating?) (reg exp))
  (branch (label ev-self-eval))
  (test (op variable?) (reg exp))
  (branch (label ev-variable))
  (test (op quoted?) (reg exp))
  (branch (label ev-quoted))
  (test (op assignment?) (reg exp))
  (branch (label ev-assignment))
  (test (op definition?) (reg exp))
  (branch (label ev-definition))
  (test (op if?) (reg exp))
  (branch (label ev-if))

  ;;ex-5.25
  (test (op cond?) (reg exp))
  (branch (label ev-cond))
  (test (op let?) (reg exp))
  (branch (label ev-let))
  
  (test (op lambda?) (reg exp))
  (branch (label ev-lambda))
  (test (op begin?) (reg exp))
  (branch (label ev-begin))
  (test (op application?) (reg exp))
  (branch (label ev-application))
  (goto (label unknown-expression-type))

ev-self-eval
  (assign val (reg exp))
  (goto (reg continue))
ev-variable
  (assign val (op lookup-variable-value) (reg exp) (reg env))
  (goto (reg continue))
ev-quoted
  (assign val (op text-of-quotation) (reg exp))
  (goto (reg continue))
ev-lambda
  (assign unev (op lambda-parameters) (reg exp))
  (assign exp (op lambda-body) (reg exp))
  (assign val (op make-procedure)
              (reg unev) (reg exp) (reg env))
  (goto (reg continue))

ev-application
  (save continue)
  (save env)
  (assign unev (op operands) (reg exp))
  (save unev)
  (assign exp (op operator) (reg exp))
  (assign continue (label apply-dispatch))
  (goto (label actual-value))
  
ev-appl-operands-values
  (assign argl (op empty-arglist))
  (test (op no-operands?) (reg unev))
  (branch (label ev-appl-no-operands))
  (save continue)  
ev-appl-operand-loop
  (save argl)
  (assign exp (op first-operand) (reg unev))  
  (test (op last-operand?) (reg unev))
  (branch (label ev-appl-last-arg))
  (save env)
  (save unev)
  (assign continue (label ev-appl-accumulate-arg))
  (goto (label actual-value))
ev-appl-accumulate-arg
  (restore unev)
  (restore env)
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (assign unev (op rest-operands) (reg unev))
  (goto (label ev-appl-operand-loop))
ev-appl-last-arg
  (assign continue (label ev-appl-accum-last-arg))
  (goto (label actual-value))
ev-appl-accum-last-arg
  (restore argl)
  (assign argl (op adjoin-arg) (reg val) (reg argl))
  (restore continue)
ev-appl-no-operands
  (goto (reg continue))

apply-dispatch
  (restore unev)
  (restore env)
  (assign proc (reg val))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-prepare))
  (test (op compound-procedure?) (reg proc))  
  (branch (label compound-prepare))
  (goto (label unknown-procedure-type))

actual-value
  (save continue)
  (assign continue (label force-it))
  (goto (label eval-dispatch))
force-it
  (test (op thunk?) (reg val))
  (branch (label ev-thunk))
  (test (op evaluated-thunk?) (reg val))
  (branch (label ev-evaluated-thunk))
  (restore continue)
  (goto (reg continue))
ev-thunk
  (assign exp (op thunk-exp) (reg val))
  (assign env (op thunk-env) (reg val))
  (save val)
  (assign continue (label save-thunk))
  (goto (label actual-value))
save-thunk
  (restore exp)
  (perform (op make-evaluated-thunk) (reg exp) (reg val))
  (restore continue)
  ;;note that before jump val contains the evaluated value
  (goto (reg continue))
ev-evaluated-thunk
  (restore continue)
  (assign val (op thunk-value) (reg val))
  (goto (reg continue))
  
primitive-prepare
  (save proc)
  (assign continue (label primitive-apply))
  (goto (label ev-appl-operands-values))
primitive-apply
  (restore proc)  
  (assign val (op apply-primitive-procedure)
              (reg proc)
              (reg argl))
  (restore continue)
  (goto (reg continue))

compound-prepare
  (assign argl (op list-of-delayed-args) (reg unev) (reg env))
compound-apply
  (assign unev (op procedure-parameters) (reg proc))
  (assign env (op procedure-environment) (reg proc))
  (assign env (op extend-environment)
              (reg unev) (reg argl) (reg env))
  (assign unev (op procedure-body) (reg proc))
  (goto (label ev-sequence))

;;;SECTION 5.4.2
ev-begin
  (assign unev (op begin-actions) (reg exp))
  (save continue)
  (goto (label ev-sequence))

ev-sequence
  (assign exp (op first-exp) (reg unev))
  (test (op last-exp?) (reg unev))
  (branch (label ev-sequence-last-exp))
  (save unev)
  (save env)
  (assign continue (label ev-sequence-continue))
  (goto (label eval-dispatch))
ev-sequence-continue
  (restore env)
  (restore unev)
  (assign unev (op rest-exps) (reg unev))
  (goto (label ev-sequence))
ev-sequence-last-exp
  (restore continue)
  (goto (label eval-dispatch))

;;;SECTION 5.4.3

ev-if
  (save exp)
  (save env)
  (save continue)
  (assign continue (label ev-if-decide))
  (assign exp (op if-predicate) (reg exp))
  (goto (label actual-value))
ev-if-decide
  (restore continue)
  (restore env)
  (restore exp)
  (test (op true?) (reg val))
  (branch (label ev-if-consequent))
ev-if-alternative
  (assign exp (op if-alternative) (reg exp))
  (goto (label eval-dispatch))
ev-if-consequent
  (assign exp (op if-consequent) (reg exp))
  (goto (label eval-dispatch))

ev-assignment
  (assign unev (op assignment-variable) (reg exp))
  (save unev)
  (assign exp (op assignment-value) (reg exp))
  (save env)
  (save continue)
  (assign continue (label ev-assignment-1))
  (goto (label eval-dispatch))
ev-assignment-1
  (restore continue)
  (restore env)
  (restore unev)
  (perform
   (op set-variable-value!) (reg unev) (reg val) (reg env))
  (assign val (const ok))
  (goto (reg continue))

ev-definition
  (assign unev (op definition-variable) (reg exp))
  (save unev)
  (assign exp (op definition-value) (reg exp))
  (save env)
  (save continue)
  (assign continue (label ev-definition-1))
  (goto (label eval-dispatch))
ev-definition-1
  (restore continue)
  (restore env)
  (restore unev)
  (perform
   (op define-variable!) (reg unev) (reg val) (reg env))
  (assign val (const ok))
  (goto (reg continue))


;;ex-5.23-5.24
ev-cond
  (assign exp (op cond-clauses) (reg exp))
  (save continue)
ev-cond-loop
  (test (op null?) (reg exp))
  (branch (label ev-cond-false))
  (assign unev (op car) (reg exp))
  (test (op cond-else-clause?) (reg unev))
  (branch (label ev-cond-else))
  (save exp)
  (save env)
  (assign exp (op cond-predicate) (reg unev))
  (assign continue (label ev-cond-decide))
  (goto (label actual-value))
ev-cond-decide
  (restore env)
  (restore exp)
  (test (op true?) (reg val))
  (branch (label ev-cond-actions))
  (assign exp (op cdr) (reg exp))
  (goto (label ev-cond-loop))
ev-cond-else
  (assign unev (op cdr) (reg exp))
  (assign unev (op null?) (reg unev))
  (test (op not) (reg unev))
  (branch (label ev-cond-error))
ev-cond-actions
  ;(restore continue)
  (perform (op user-print) (const 'here))
  (perform (op user-print) (reg exp))
  (assign exp (op car) (reg exp))
  (assign unev (op cond-actions) (reg exp))
  (goto (label ev-sequence))
ev-cond-false
  (restore continue)
  (assign val (const false))
  (goto (reg continue))
ev-cond-error
  (assign val (const else-not-last-in-cond-error))
  (goto (label signal-error))

ev-let
  (assign exp (op let->combination) (reg exp))  
  (goto (label ev-application))
  
   )))


'(EXPLICIT CONTROL EVALUATOR LOADED)
{% endhighlight %}

Note that there are few changes in file ch5-eceval-support.scm which i have shown above.

Apart from that, since above code also contain changes for ex-5.24, to run this code, few changes from ex-5.24 in file ch5-syntax.scm also needs to be included(or just remove the part corresponding to 5.23 and 5.24 in file ch5-eceval.scm shown above):

{% highlight scheme linenos %}
(define (let? exp) (tagged-list? exp 'let))

(define (let-varexps exp) (cadr exp))

(define (let-body exp) (cddr exp))

(define (let->combination exp)
  (let ((res (fold-right
			  (lambda (new rem)
				(cons (cons (car new) (car rem))
					  (cons (cadr new) (cdr rem))))
			  (cons '() '())
			  (let-varexps exp))))
	(let ((vars (car res))
		  (vexps (cdr res)))
	  (cons (make-lambda vars (let-body exp)) vexps)
	  )))
{% endhighlight %}
