---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.50"
order: "050"
date: 2018-05-13 
---

Interesting!

The whole exercise is more about integration than coding. Setting up `apply` took most of the time.

Here's how i setup the code:

#### Changes in chapter-4 evaluator

File names `ch4-mceval.scm` contained code for chapet-4 evaluator. I took this file from mit website thus it contains no changes/customisations done as part of exercises of ch-4.

I put the whole code in an expression like this:
{% highlight scheme linenos %}
(define mceval-expression '(begin
;;;;
;;;;
;;;;
;;;;
;;;;
;;;;
;;;; all the code of ch4-mceval.scm
;;;;
;;;;
;;;;
;;;;
;;;;
;;;;
;;(driver-loop)
'METACIRCULAR-EVALUATOR-LOADED
)) ;;expression ends here
{% endhighlight %}

Before going to other parts, let me first point out few changes i made in the above code:

- intitialize the global environment.
- added few primitive procedures like `-`, `*` so that i can test `factorial` program :).

Here are those changes:

{% highlight scheme linenos %}
;;this line is already in the code just need to uncomment it
(define the-global-environment (setup-environment))


;;added few primitive in this section marked by ;;;
(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
        (list '+ +)     ;;;
        (list '- -)     ;;;
        (list '* *)     ;;;
        (list '= =)     ;;;
        (list 'not not) ;;;
;;      more primitives
        ))
{% endhighlight %}

#### Changes in ch5-eceval-support.scm

Here, we just added few more primitive procedures:

Note: procedures installed here in the compiler are primitive procedures for evaluator. Thus we can install any procedure even which is not available in scheme and then later use it in our evaluator and even install there as a primitve procedure like we installed here scheme's procedure as primitive procedures such that it can be used by the code written on top of evaluator!

{% highlight scheme linenos %}

;;procedures added for ex-5.50
    (list 'list list)
    (list 'length length)
    (list 'cddr cddr)
    (list 'cadr cadr)
    (list 'cdar cdar)
    (list 'cdddr cdddr)
    (list 'cdadr cdadr)
    (list 'cddar cddar)
    (list 'caddr caddr)
    (list 'caadr caadr)
    (list 'cadddr cadddr)
    (list 'set-car! set-car!)
	(list 'set-cdr! set-cdr!)
	(list 'newline newline)
	(list 'display display)
	(list 'error error)
	(list 'read read)
	(list 'eq? eq?)
	(list 'number? number?)
	(list 'symbol? symbol?)
	(list 'pair? pair?)
	(list 'string? string?)
	(list 'not not)
{% endhighlight %}

-----

#### setting up apply and map procedures

This is where the it took me time figuring out.

Let's first talk about `map`. In the chapter-4 mceval evaluator we use `map`. Since this evaluator compiles on our own compiler, we need to provide `map` from implicitly as part of the language or just build a `map` in the evaluator code itself. 

How to give `map` as part of the language? 

Can we give underlying scheme `map` as primitive procedure like we did above for `+`, `cons` etc?

No. Because `map` accepts *lambda* and in this context this lambda is not the underlying scheme lambda but our own compiled version of lambda! The underlying scheme is not aware of our compiled represention of lambda.

The solution is we simply write `map` as part of a libs and while compiling evaluator, we first *compile* all the library these procedures like `map` we want to give.

Similarly we need to do with `apply`. But there are few more nuances for `apply`. Let's first see the code how to setup this:

{% highlight scheme linenos %}
(define libs
  '(begin

	 (define (apply proc arguments)
	   (specialform-apply proc arguments))
	 
	 (define (map proc items)
		  (if (null? items)
			  '()
			  (cons (proc (car items))
					(map proc (cdr items)))))
	 ))

(define libs-and-mceval
  `(begin ,libs ,mceval-expression))

{% endhighlight %}

Note, that `mceval-expression` contains the code of our evaluator.

Thus, now `libs-and-mceval` contains all the code that needs to be compiled.

Okay, Before we put everything together, let's first understand `apply`:

Recall that we need to give `apply` from the *compiler* to the *evaluator*.

Note that evaluator uses `apply` only for primtive procedures thus we can get away by writing `apply` which internally calls schemes underlying `apply`. 

But, it won't be a complete implementation of `apply` because it won't work for compiled procedures!

Another approach is we give a special form `apply` which can understand compiled procedures! 

But the special form `apply` won't be a procedure like `map`. See how the evaluator use `apply`:

{% highlight scheme linenos %}
(define apply-in-underlying-scheme apply)

(define (apply-primitive-procedure proc args)
  (apply-in-underlying-scheme
   (primitive-implementation proc) args))
{% endhighlight %}

The first line won't work if `apply` is a special form!

So, we build a special form `specialform-apply` and also build a procedure `apply` and our procedure `apply` internally uses `specialform-apply`. As show in the above code of `libs`.

Here's the code of `specialform-apply` in the compiler(file ch5-compiler.scm):

{% highlight scheme linenos %}
;;add following in the main procedure compile
((specialform-apply? exp)
	(compile-specialform-apply exp target linkage cenv))


;;new procedure
;;the code is similar to compile-application except:
;;- change in accessors to get the procedure and arguments.
;;- there is only one argument which should be a list because apply takes list of arguments as a list.
(define (compile-specialform-apply exp target linkage cenv)
  (let ((proc-code (compile (specialform-apply-procedure exp) 'proc 'next cenv))
		(args-code (compile (specialform-apply-arguments exp) 'argl 'next cenv)))
    (preserving '(env continue)
     proc-code
     (preserving '(proc continue)
				 args-code
				 (compile-procedure-call target linkage)))))
{% endhighlight %}

Ofcourse, there are few procedures for this new syntax added(i added them in file ch5-syntax.scm):

{% highlight scheme linenos %}
(define (specialform-apply? exp) (tagged-list? exp 'specialform-apply))
(define (specialform-apply-procedure exp) (cadr exp))
(define (specialform-apply-arguments exp) (caddr exp))
{% endhighlight %}

Let's put this all together:

#### Putting it all together

Now, the main part how to put all components together and compile and execute.

I used the code built in previous exercise, ch5-compiler-machine.scm and added few changes in the compiler machine so that on start it will first parse the evaluator.

Here is the updated code, after changes in the solution of previous exercise:

{% highlight scheme linenos %}

(load "ch5-compiler")

(load "ch5-regsim")

(load "ch5-eceval-support")

(load "ch4-mceval")

(define the-global-environment (setup-environment))

(define (prompt-for-input string)
  (newline) (newline) (display string) (newline))

(define (announce-output string)
  (newline) (display string) (newline))

;; Modification of section 4.1.4 procedure
;; **replaces version in syntax file
(define (user-print object)
  (cond ((compound-procedure? object)
         (display (list 'compound-procedure
                        (procedure-parameters object)
                        (procedure-body object)
                        '<procedure-env>)))
        ((compiled-procedure? object)
         (display '<compiled-procedure>))
        (else (display object))))

(define (compile-and-assemble expression)
  (assemble (statements
             (compile expression 'val 'return the-empty-cenv))
            compiler-machine))

(define compiler-operations
  (list 
   ;;primitive Scheme operations
   (list 'read read)			

   (list 'list list)
   (list 'cons cons)

   (list 'compile-and-assemble compile-and-assemble)
   
   ;;operations in eceval-support.scm
   (list 'false? false?) 
   (list 'extend-environment extend-environment)
   (list 'lookup-variable-value lookup-variable-value)
   (list 'set-variable-value! set-variable-value!)
   (list 'define-variable! define-variable!)
   (list 'primitive-procedure? primitive-procedure?)
   (list 'apply-primitive-procedure apply-primitive-procedure)
   (list 'prompt-for-input prompt-for-input)
   (list 'announce-output announce-output)
   (list 'user-print user-print)
   (list 'get-global-environment get-global-environment)

   ;;for compiled code (also in eceval-support.scm)
   (list 'make-compiled-procedure make-compiled-procedure)
   (list 'compiled-procedure? compiled-procedure?)
   (list 'compiled-procedure-entry compiled-procedure-entry)
   (list 'compiled-procedure-env compiled-procedure-env)

   ;;for open-code ex-5.38
   (list 'lexical-address-lookup lexical-address-lookup)
   (list 'lexical-address-set! lexical-address-set!)
   ;;added few operations for testing ex-5.38 as machine intructions
   (list '+ +)
   (list '= =)
   (list '- -)
   (list '* *)
   (list '< <)))

;;define map here for ex-5.50 bec it is used in this
;;and we can not use primitive map bec. primtive map
;;will expect the lambda passed to it to be primitive too.  
;;but here the lambda passed would be our compiled lambda

;;as part of ex-5.50, the evaluator needs apply
(define libs
  '(begin

	 (define (apply proc arguments)
	   (specialform-apply proc arguments))

	 'apply-done
	 
	 (define (map proc items)
		  (if (null? items)
			  '()
			  (cons (proc (car items))
					(map proc (cdr items)))))
	 'map-done

	 ))

(define libs-and-mceval
  `(begin ,libs ,mceval-expression))

;(define the-compiled-machine (compile-and-assemble libs-and-mceval))

(display 'done)
;(display libs-and-mceval)
	
(define compiler-machine
  (make-machine
   '(exp env val proc argl continue unev
	 arg1 arg2
	 )
   compiler-operations
   `((assign exp (const ,libs-and-mceval))  ;;note that here we put the complete code in exp
	 (goto (label compile-n-assemble))
	 read-compile-execute-print-loop
	 (perform (op initialize-stack))
	 (perform
	  (op prompt-for-input) (const ";;; RCEPL input:"))
	 (assign exp (op read))
	 compile-n-assemble
	 (assign val (op compile-and-assemble) (reg exp))
	 (perform
	  (op announce-output) (const 'compiled-and-assembled))  ;;i just added this print to ensure things have compiled
	 (assign env (op get-global-environment))
	 (assign continue (label print-result))
	 (goto (reg val))
	 print-result
	 ;;**following instruction optional -- if use it, need monitored stack
	 (perform (op print-stack-statistics))
	 (perform
	  (op announce-output) (const ";;; RECEPL value:"))
	 (perform (op user-print) (reg val))
	 (goto (label read-compile-execute-print-loop)))))

;;these are commands which can reset the scheme environment(mit-scheme only).
;;they should be used only when one want to forget all the previous variables in repl scheme.
;; (ge (make-top-level-environment))
;; (restart 1)
{% endhighlight %}

Note that the except for register simulator, file `ch5-regsim.scm` and chapter 4 evaluator `ch4-mceval.scm`(except the changes mentioned above) are the original files from the mit website without any changes.

The file `ch5-compiler`, `ch5-syntax.scm` and `ch5-eceval-support` contains changes as were done in earlier exercises including the changes mentioned in this exercise.

(i shall put the complete code of these files at the bottom of this page)

This file contains everything we need!

Let's just load this file:

#### Testing/Examples

Note the call to `(driver-loop)` to start the evaluator inside the compiler's read-compile-execute-print loop.

{% highlight scheme linenos %}
1 ]=> (start compiler-machine)

(quote compiled-and-assembled)

(total-pushes = 449 maximum-depth = 36)
;;; RECEPL value:
metacircular-evaluator-loaded

;;; RCEPL input:
(driver-loop)

(quote compiled-and-assembled)


;;; M-Eval input:
(define (factorial n)
    (if (= n 1)
        1
        (* (factorial (- n 1)) n)))

;;; M-Eval value:
ok

;;; M-Eval input:
(factorial 5)

;;; M-Eval value:
120

;;; M-Eval input:
(* 2 ((lambda() 3)))

;;; M-Eval value:
6

;;; M-Eval input:
(define x (+ 100 (factorial 10)))

;;; M-Eval value:
ok

;;; M-Eval input:
x

;;; M-Eval value:
3628900

;;; M-Eval input:
{% endhighlight %}

That's it!

--------------

--------------


#### Complete code

Code in for compiler, file: ch5-compiler

{% highlight scheme linenos %}

;;;;COMPILER FROM SECTION 5.5 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch5.scm

;;;;This file can be loaded into Scheme as a whole.
;;;;**NOTE**This file loads the metacircular evaluator's syntax procedures
;;;;  from section 4.1.2
;;;;  You may need to change the (load ...) expression to work in your
;;;;  version of Scheme.

;;;;Then you can compile Scheme programs as shown in section 5.5.5

;;**implementation-dependent loading of syntax procedures
(load "ch5-syntax.scm")			;section 4.1.2 syntax procedures


;;;SECTION 5.5.1

(define (compile exp target linkage cenv)
  (cond ((self-evaluating? exp)
         (compile-self-evaluating exp target linkage))
        ((quoted? exp) (compile-quoted exp target linkage))
        ((variable? exp)
         (compile-variable exp target linkage cenv))
        ((assignment? exp)
         (compile-assignment exp target linkage cenv))
        ((definition? exp)
         (compile-definition exp target linkage cenv))
        ((if? exp) (compile-if exp target linkage cenv))
        ((lambda? exp) (compile-lambda exp target linkage cenv))
        ((let? exp) (compile (let->combination exp) target linkage cenv))
        ((begin? exp)
         (compile-sequence (begin-actions exp)
                           target
                           linkage cenv))
        ((cond? exp) (compile (cond->if exp) target linkage cenv))
		((same? exp cenv) (compile-same exp target linkage cenv))
		((less? exp cenv) (compile-less exp target linkage cenv))
		((add? exp cenv) (compile-add exp target linkage cenv))
		((sub? exp cenv) (compile-sub exp target linkage cenv))
		((mul? exp cenv) (compile-mul exp target linkage cenv))
		((specialform-apply? exp)
		 (compile-specialform-apply exp target linkage cenv))
        ((application? exp)
         (compile-application exp target linkage cenv))
        (else
         (error "Unknown expression type -- COMPILE" exp))))


(define all-arg-regs '(arg1 arg2))
(define total-arg-regs (length all-arg-regs))

(define (spread-arguments operands-list cenv)
  (define (iter operands-list arg-regs)
	(if (null? operands-list)
		(empty-instruction-sequence)
		(let ((rest-seq (iter (cdr operands-list)
							  (cdr arg-regs)))
			  (first-seq (compile (car operands-list)
								  (car arg-regs)
								  'next
								  cenv)))
		  (preserving
		   '(env)
		   rest-seq
		   (preserving (cdr arg-regs)
					   first-seq
					   (make-instruction-sequence
						(cdr arg-regs)
						'()
						'()))))))
  (iter operands-list (take all-arg-regs (length operands-list))))

(define (same? exp cenv) (and (tagged-list? exp '=)
							  (eq? 'not-found (find-variable '= cenv))))
(define (mul? exp cenv) (and (tagged-list? exp '*)
							 (eq? 'not-found (find-variable '* cenv))))
(define (sub? exp cenv) (and (tagged-list? exp '-)
							 (eq? 'not-found (find-variable '- cenv))))
(define (add? exp cenv) (and (tagged-list? exp '+)
							 (eq? 'not-found (find-variable '+ cenv))))
(define (less? exp cenv) (and (tagged-list? exp '<)
							  (eq? 'not-found (find-variable '< cenv))))

;;it return list like '((reg arg1) (reg arg2) ... )
;;for each reg in arg-regs passed
(define (make-arg-regs-list arg-regs)
  (map (lambda(reg)
		 (list 'reg reg))
	   arg-regs))
  
(define (compile-open-code operation operands-list target linkage cenv)
  (let ((operands-length (length operands-list)))
	(if (> operands-length total-arg-regs)
		(error "Open code primitive operands are more than the available arg regs.")
		(let ((arg-regs (take all-arg-regs operands-length)))
		  (end-with-linkage
		   linkage
		   (append-instruction-sequences
			(spread-arguments operands-list cenv)
			(make-instruction-sequence
			 arg-regs
			 `(,target)
			 `((assign ,target
					   (op ,operation)
					   . ;;notice the dot
					   ,(make-arg-regs-list arg-regs))))))))))

(define (split items n)
  (cond ((= n 0) (cons '() items))
		((null? items) (cons '() '()))
		(else (let ((n-1-split (split (cdr items)
									  (- n 1))))
				(cons (cons (car items)
							(car n-1-split))
					  (cdr n-1-split))))))

(define (split-and-compile operator operands target linkage cenv)
  (let ((splitted (split operands total-arg-regs)))
	(let ((first-part (car splitted))
		  (rem-part (cdr splitted)))
	  (if (null? rem-part)
		  (compile-open-code operator first-part target linkage cenv)
		  (let ((new-operand-1 (cons operator first-part))
				(new-operand-2 (if (null? (cdr rem-part))
								   (car rem-part)
								   (cons operator rem-part))))
			(compile-open-code operator
							   (list new-operand-1 new-operand-2)
							   target
							   linkage
							   cenv))))))
	
(define (compile-add exp target linkage cenv)
  (split-and-compile '+ (operands exp) target linkage cenv))

(define (compile-same exp target linkage cenv)
  (compile-open-code '= (operands exp) target linkage cenv))

(define (compile-less exp target linkage cenv)
  (compile-open-code '< (operands exp) target linkage cenv))

(define (compile-mul exp target linkage cenv)
  (split-and-compile '* (operands exp) target linkage cenv))

(define (compile-sub exp target linkage cenv)
  (compile-open-code '- (operands exp) target linkage cenv))

(define (make-instruction-sequence needs modifies statements)
  (list needs modifies statements))

(define (empty-instruction-sequence)
  (make-instruction-sequence '() '() '()))


;;;SECTION 5.5.2

;;;linkage code

(define (compile-linkage linkage)
  (cond ((eq? linkage 'return)
         (make-instruction-sequence '(continue) '()
          '((goto (reg continue)))))
        ((eq? linkage 'next)
         (empty-instruction-sequence))
        (else
         (make-instruction-sequence '() '()
          `((goto (label ,linkage)))))))

(define (end-with-linkage linkage instruction-sequence)
  (preserving '(continue)
   instruction-sequence
   (compile-linkage linkage)))


;;;simple expressions

(define (compile-self-evaluating exp target linkage)
  (end-with-linkage linkage
   (make-instruction-sequence '() (list target)
    `((assign ,target (const ,exp))))))

(define (compile-quoted exp target linkage)
  (end-with-linkage linkage
   (make-instruction-sequence '() (list target)
    `((assign ,target (const ,(text-of-quotation exp)))))))

(define (compile-variable exp target linkage cenv)
  (let ((lex-addr (find-variable exp cenv)))
	(end-with-linkage linkage
					  (make-instruction-sequence
					   '(env) (list target)
					   (if (eq? lex-addr 'not-found)
						   `((assign ,target
									 (op lookup-variable-value)
									 (const ,exp)
									 (reg env)))
						   `((assign ,target
									 (op lexical-address-lookup)
									 (const ,lex-addr)
									 (reg env))))))))

(define (compile-assignment exp target linkage cenv)
  (let ((var (assignment-variable exp))
        (get-value-code
         (compile (assignment-value exp) 'val 'next cenv)))
	(let ((lex-addr (find-variable var cenv)))
      (end-with-linkage
	   linkage
	   (preserving
		'(env)
		get-value-code
		(make-instruction-sequence
		 '(env val)
		 (list target)
		 (if (eq? lex-addr 'not-found)
			 `((perform (op set-variable-value!)
						(const ,var)
						(reg val)
						(reg env))
			   (assign ,target (const ok)))
			 `((perform (op lexical-address-set!)
						(const ,lex-addr)
						(reg val)
						(reg env))
			   (assign ,target (const ok))))))))))
	
(define (compile-definition exp target linkage cenv)
  (let ((var (definition-variable exp))
        (get-value-code
         (compile (definition-value exp) 'val 'next cenv)))
    (end-with-linkage linkage
     (preserving '(env)
      get-value-code
      (make-instruction-sequence '(env val) (list target)
       `((perform (op define-variable!)
                  (const ,var)
                  (reg val)
                  (reg env))
         (assign ,target (const ok))))))))


;;;conditional expressions

;;;labels (from footnote)
(define label-counter 0)

(define (new-label-number)
  (set! label-counter (+ 1 label-counter))
  label-counter)

(define (make-label name)
  (string->symbol
    (string-append (symbol->string name)
                   (number->string (new-label-number)))))
;; end of footnote

(define (compile-if exp target linkage cenv)
  (let ((t-branch (make-label 'true-branch))
        (f-branch (make-label 'false-branch))                    
        (after-if (make-label 'after-if)))
    (let ((consequent-linkage
           (if (eq? linkage 'next) after-if linkage)))
      (let ((p-code (compile (if-predicate exp) 'val 'next cenv))
            (c-code
             (compile
              (if-consequent exp) target consequent-linkage cenv))
            (a-code
             (compile (if-alternative exp) target linkage cenv)))
        (preserving '(env continue)
         p-code
         (append-instruction-sequences
          (make-instruction-sequence '(val) '()
           `((test (op false?) (reg val))
             (branch (label ,f-branch))))
          (parallel-instruction-sequences
           (append-instruction-sequences t-branch c-code)
           (append-instruction-sequences f-branch a-code))
          after-if))))))

;;; sequences

(define (compile-sequence seq target linkage cenv)
  (if (last-exp? seq)
      (compile (first-exp seq) target linkage cenv)
      (preserving '(env continue)
       (compile (first-exp seq) target 'next cenv)
       (compile-sequence (rest-exps seq) target linkage cenv))))

;;;lambda expressions

(define (compile-lambda exp target linkage cenv)
  (let ((proc-entry (make-label 'entry))
        (after-lambda (make-label 'after-lambda)))
    (let ((lambda-linkage
           (if (eq? linkage 'next) after-lambda linkage)))
      (append-instruction-sequences
       (tack-on-instruction-sequence
        (end-with-linkage lambda-linkage
         (make-instruction-sequence '(env) (list target)
          `((assign ,target
                    (op make-compiled-procedure)
                    (label ,proc-entry)
                    (reg env)))))
        (compile-lambda-body exp proc-entry cenv))
       after-lambda))))

(define (compile-lambda-body exp proc-entry cenv)
  (let ((formals (lambda-parameters exp)))
    (append-instruction-sequences
     (make-instruction-sequence '(env proc argl) '(env)
      `(,proc-entry
        (assign env (op compiled-procedure-env) (reg proc))
        (assign env
                (op extend-environment)
                (const ,formals)
                (reg argl)
                (reg env))))
     (compile-sequence (scan-out-defines
						(lambda-body exp))
					   'val
					   'return
					   (extend-cenv formals cenv)))))

;;this procedure copied from ex-4.16 for ex-5.43
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
		  ;;note that this procedure was copied from ex-4.16
		  ;;and there we put the result in a list
		  ;;and it turns out we need to get the result
		  ;;in a list here too bec this result is passed to
		  ;;compiler sequence and it expects a sequence
		  ;;which means a list!
		  (list (make-let (car result)
						  (cadr result))))))

;;ex-5.40, 5.41
(define the-empty-cenv '())
(define (extend-cenv frame base-cenv)
  (cons frame base-cenv))

(define (make-lexical-address frame-num elem-num)
  (list frame-num elem-num))

(define (lex-addr-frame-num lexical-address)
  (car lexical-address))
(define (lex-addr-displacement lexical-address)
  (cadr lexical-address))

(define the-empty-cenv '())

(define (extend-cenv frame base-cenv)
  (cons frame base-cenv))

(define (cenv-first-frame cenv) (car cenv))

(define (enclosing-cenv cenv) (cdr cenv))

(define (find-variable var cenv)
  (define (env-loop frame-num cenv)
	(define (scan displacement vars)
	  (cond ((null? vars)
			 (env-loop (+ frame-num 1)
					   (enclosing-cenv cenv)))
			((eq? var (car vars))
			 (make-lexical-address frame-num
								   displacement))
			(else
			 (scan (+ 1 displacement)
				   (cdr vars)))))
	(if (eq? cenv the-empty-cenv)
		'not-found
		(scan 0 (cenv-first-frame cenv))))
  (env-loop 0 cenv))
;;;SECTION 5.5.3

;;;combinations

(define (compile-specialform-apply exp target linkage cenv)
  (let ((proc-code (compile (specialform-apply-procedure exp) 'proc 'next cenv))
		(args-code (compile (specialform-apply-arguments exp) 'argl 'next cenv)))
    (preserving '(env continue)
     proc-code
     (preserving '(proc continue)
				 args-code
				 (compile-procedure-call target linkage)))))

(define (compile-application exp target linkage cenv)
  (let ((proc-code (compile (operator exp) 'proc 'next cenv))
        (operand-codes
         (map (lambda (operand) (compile operand 'val 'next cenv))
              (operands exp))))
    (preserving '(env continue)
     proc-code
     (preserving '(proc continue)
      (construct-arglist operand-codes)
      (compile-procedure-call target linkage)))))

(define (construct-arglist operand-codes)
  (let ((operand-codes (reverse operand-codes)))
    (if (null? operand-codes)
        (make-instruction-sequence '() '(argl)
         '((assign argl (const ()))))
        (let ((code-to-get-last-arg
               (append-instruction-sequences
                (car operand-codes)
                (make-instruction-sequence '(val) '(argl)
                 '((assign argl (op list) (reg val)))))))
          (if (null? (cdr operand-codes))
              code-to-get-last-arg
              (preserving '(env)
               code-to-get-last-arg
               (code-to-get-rest-args
                (cdr operand-codes))))))))

(define (code-to-get-rest-args operand-codes)
  (let ((code-for-next-arg
         (preserving '(argl)
          (car operand-codes)
          (make-instruction-sequence '(val argl) '(argl)
           '((assign argl
              (op cons) (reg val) (reg argl)))))))
    (if (null? (cdr operand-codes))
        code-for-next-arg
        (preserving '(env)
         code-for-next-arg
         (code-to-get-rest-args (cdr operand-codes))))))

;;;applying procedures

(define (compile-procedure-call target linkage)
  (let ((primitive-branch (make-label 'primitive-branch))
        (compiled-branch (make-label 'compiled-branch))
        (after-call (make-label 'after-call)))
    (let ((compiled-linkage
           (if (eq? linkage 'next) after-call linkage)))
      (append-instruction-sequences
       (make-instruction-sequence '(proc) '()
        `((test (op primitive-procedure?) (reg proc))
          (branch (label ,primitive-branch))))
       (parallel-instruction-sequences
        (append-instruction-sequences
         compiled-branch
         (compile-proc-appl target compiled-linkage))
        (append-instruction-sequences
         primitive-branch
         (end-with-linkage linkage
          (make-instruction-sequence '(proc argl)
                                     (list target)
           `((assign ,target
                     (op apply-primitive-procedure)
                     (reg proc)
                     (reg argl)))))))
       after-call))))

;;this procedure contains some modification in compiler for ex-5.47,5.48
;;but commented for ex-5.49 to use the original procedure without these changes.
;; (define (compile-procedure-call target linkage)
;;   (let ((primitive-branch (make-label 'primitive-branch))
;;         (compiled-branch (make-label 'compiled-branch))
;;         (compound-branch (make-label 'compound-branch))
;;         (after-call (make-label 'after-call)))
;;     (let ((compiled-or-compound-linkage
;;            (if (eq? linkage 'next) after-call linkage)))
;;       (append-instruction-sequences
;;        (make-instruction-sequence '(proc) '()
;;         `((test (op primitive-procedure?) (reg proc))
;;           (branch (label ,primitive-branch))))
;;        (parallel-instruction-sequences
;; 		(append-instruction-sequences
;; 		 (make-instruction-sequence '(proc) '()
;; 		  `((test (op compound-procedure?) (reg proc))
;; 			(branch (label ,compound-branch))))
;; 		 (parallel-instruction-sequences
;; 		  (append-instruction-sequences
;;            compiled-branch
;;            (compile-proc-appl target compiled-or-compound-linkage))
;; 		  (append-instruction-sequences
;; 		   compound-branch
;; 		   (compound-proc-appl target compiled-or-compound-linkage))))
;;         (append-instruction-sequences
;;          primitive-branch
;;          (end-with-linkage linkage
;;           (make-instruction-sequence '(proc argl)
;;                                      (list target)
;;            `((assign ,target
;;                      (op apply-primitive-procedure)
;;                      (reg proc)
;;                      (reg argl)))))))
;;        after-call))))

;;;applying compound procedures

(define (compound-proc-appl target linkage)
  (cond ((and (eq? target 'val) (not (eq? linkage 'return)))
         (make-instruction-sequence '(proc) all-regs
			`((assign continue (label ,linkage))
			  (save continue)
             (goto (reg compapp)))))
        ((and (not (eq? target 'val))
              (not (eq? linkage 'return)))
         (let ((proc-return (make-label 'proc-return)))
           (make-instruction-sequence '(proc) all-regs
            `((assign continue (label ,proc-return))
			  (save continue)
			  (goto (reg compapp))
              ,proc-return
              (assign ,target (reg val))
              (goto (label ,linkage))))))
        ((and (eq? target 'val) (eq? linkage 'return))
         (make-instruction-sequence '(proc continue) all-regs
          '((save continue)
			(goto (reg compapp)))))
        ((and (not (eq? target 'val)) (eq? linkage 'return))
         (error "return linkage, target not val -- COMPILE"
                target))))

;;;applying compiled procedures

(define (compile-proc-appl target linkage)
  (cond ((and (eq? target 'val) (not (eq? linkage 'return)))
         (make-instruction-sequence '(proc) all-regs
           `((assign continue (label ,linkage))
             (assign val (op compiled-procedure-entry)
                         (reg proc))
             (goto (reg val)))))
        ((and (not (eq? target 'val))
              (not (eq? linkage 'return)))
         (let ((proc-return (make-label 'proc-return)))
           (make-instruction-sequence '(proc) all-regs
            `((assign continue (label ,proc-return))
              (assign val (op compiled-procedure-entry)
                          (reg proc))
              (goto (reg val))
              ,proc-return
              (assign ,target (reg val))
              (goto (label ,linkage))))))
        ((and (eq? target 'val) (eq? linkage 'return))
         (make-instruction-sequence '(proc continue) all-regs
          '((assign val (op compiled-procedure-entry)
                        (reg proc))
            (goto (reg val)))))
        ((and (not (eq? target 'val)) (eq? linkage 'return))
         (error "return linkage, target not val -- COMPILE"
                target))))

;; footnote
(define all-regs '(env proc val argl continue))


;;;SECTION 5.5.4

(define (registers-needed s)
  (if (symbol? s) '() (car s)))

(define (registers-modified s)
  (if (symbol? s) '() (cadr s)))

(define (statements s)
  (if (symbol? s) (list s) (caddr s)))

(define (needs-register? seq reg)
  (memq reg (registers-needed seq)))

(define (modifies-register? seq reg)
  (memq reg (registers-modified seq)))


(define (append-instruction-sequences . seqs)
  (define (append-2-sequences seq1 seq2)
    (make-instruction-sequence
     (list-union (registers-needed seq1)
                 (list-difference (registers-needed seq2)
                                  (registers-modified seq1)))
     (list-union (registers-modified seq1)
                 (registers-modified seq2))
     (append (statements seq1) (statements seq2))))
  (define (append-seq-list seqs)
    (if (null? seqs)
        (empty-instruction-sequence)
        (append-2-sequences (car seqs)
                            (append-seq-list (cdr seqs)))))
  (append-seq-list seqs))

(define (list-union s1 s2)
  (cond ((null? s1) s2)
        ((memq (car s1) s2) (list-union (cdr s1) s2))
        (else (cons (car s1) (list-union (cdr s1) s2)))))

(define (list-difference s1 s2)
  (cond ((null? s1) '())
        ((memq (car s1) s2) (list-difference (cdr s1) s2))
        (else (cons (car s1)
                    (list-difference (cdr s1) s2)))))

(define (preserving regs seq1 seq2)
  (if (null? regs)
      (append-instruction-sequences seq1 seq2)
      (let ((first-reg (car regs)))
        (if (and (needs-register? seq2 first-reg)
                 (modifies-register? seq1 first-reg))
            (preserving (cdr regs)
             (make-instruction-sequence
              (list-union (list first-reg)
                          (registers-needed seq1))
              (list-difference (registers-modified seq1)
                               (list first-reg))
              (append `((save ,first-reg))
                      (statements seq1)
                      `((restore ,first-reg))))
             seq2)
            (preserving (cdr regs) seq1 seq2)))))

(define (tack-on-instruction-sequence seq body-seq)
  (make-instruction-sequence
   (registers-needed seq)
   (registers-modified seq)
   (append (statements seq) (statements body-seq))))

(define (parallel-instruction-sequences seq1 seq2)
  (make-instruction-sequence
   (list-union (registers-needed seq1)
               (registers-needed seq2))
   (list-union (registers-modified seq1)
               (registers-modified seq2))
   (append (statements seq1) (statements seq2))))

'(COMPILER LOADED)
{% endhighlight %}

Code in file ch5-eceval-support:

{% highlight scheme linenos %}
;;;;SIMULATION OF ECEVAL MACHINE OPERATIONS --
;;;;loaded by load-eceval.scm and by load-eceval-compiler.scm

;;;;FIRST A LOT FROM 4.1.2-4.1.4

(load "ch5-syntax.scm");               ;section 4.1.2 syntax procedures

;;;SECTION 4.1.3
;;; operations used by compiled code and eceval except as noted

(define (true? x)
  (not (eq? x false)))

;;* not used by eceval itself -- used by compiled code when that
;; is run in the eceval machine
(define (false? x)
  (eq? x false))

;;following compound-procedure operations not used by compiled code
(define (make-procedure parameters body env)
  (list 'procedure parameters body env))

(define (compound-procedure? p)
  (tagged-list? p 'procedure))

(define (procedure-parameters p) (cadr p))
(define (procedure-body p) (caddr p))
(define (procedure-environment p) (cadddr p))
;;(end of compound procedures)


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

(define (primitive-procedure? proc)
  (tagged-list? proc 'primitive))

(define (primitive-implementation proc) (cadr proc))

(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
	;;above from book -- here are some more
	(list '+ +)
	(list '- -)
	(list '* *)
	(list '= =)
	(list '/ /)
	(list '> >)
	(list '< <)

	;;procedures added for ex-5.50
    (list 'list list)
    (list 'length length)
    (list 'cddr cddr)
    (list 'cadr cadr)
    (list 'cdar cdar)
    (list 'cdddr cdddr)
    (list 'cdadr cdadr)
    (list 'cddar cddar)
    (list 'caddr caddr)
    (list 'caadr caadr)
    (list 'cadddr cadddr)
    (list 'set-car! set-car!)
	(list 'set-cdr! set-cdr!)
	(list 'newline newline)
	(list 'display display)
	(list 'error error)
	(list 'read read)
	;; (list 'apply (lambda (proc args)
	;; 			   (apply (primitive-implementation proc) args)))
	(list 'eq? eq?)
	(list 'number? number?)
	(list 'symbol? symbol?)
	(list 'pair? pair?)
	(list 'string? string?)
	(list 'not not)
		))

(define (primitive-procedure-names)
  (map car
       primitive-procedures))

(define (primitive-procedure-objects)
  (map (lambda (proc) (list 'primitive (cadr proc)))
       primitive-procedures))

(define apply-in-underlying-scheme apply)

(define (apply-primitive-procedure proc args)
  (apply-in-underlying-scheme
   (primitive-implementation proc) args))


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

;;; Simulation of new machine operations needed by
;;;  eceval machine (not used by compiled code)

;;; From section 5.4.1 footnote
(define (empty-arglist) '())
(define (adjoin-arg arg arglist)
  (append arglist (list arg)))
(define (last-operand? ops)
  (null? (cdr ops)))

;;; From section 5.4.2 footnote, for non-tail-recursive sequences
(define (no-more-exps? seq) (null? seq))

;;; From section 5.4.4 footnote
(define (get-global-environment)
  the-global-environment)
;; will do following when ready to run, not when load this file
;;(define the-global-environment (setup-environment))


;;; Simulation of new machine operations needed for compiled code
;;;  and eceval/compiler interface (not used by plain eceval machine)
;;; From section 5.5.2 footnote
(define (make-compiled-procedure entry env)
  (list 'compiled-procedure entry env))
(define (compiled-procedure? proc)
  (tagged-list? proc 'compiled-procedure))
(define (compiled-procedure-entry c-proc) (cadr c-proc))
(define (compiled-procedure-env c-proc) (caddr c-proc))

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

;;ex-5.39
(define (make-lexical-address frame-num elem-num)
  (list frame-num elem-num))

(define (lex-addr-frame-num lexical-address)
  (car lexical-address))
(define (lex-addr-displacement lexical-address)
  (cadr lexical-address))

(define (lexical-address-lookup lex-addr env)
  (let ((correct-env (env-ref env
							  (lex-addr-frame-num lex-addr))))
	(let ((elem (list-ref (frame-values
						   (first-frame correct-env))
						  (lex-addr-displacement lex-addr))))
	  (if (eq? elem '*unassigned*)
		  (error "Error - Unassigned variable access!")
		  elem))))
  
(define (lexical-address-set! lex-addr val env)
  (let ((correct-env (env-ref env
							  (lex-addr-frame-num lex-addr))))
    (list-set! (frame-values
				(first-frame correct-env))
			   (lex-addr-displacement lex-addr)
			   val)
	'ok))

(define (env-ref env frame-num)
  (cond ((eq? env the-empty-environment)
		 (error "Invalid environment!"))
		((= frame-num 0) env)
		(else (env-ref
			   (enclosing-environment env)
			   (- frame-num 1)))))
{% endhighlight %}


Complete code of syntax file, ch5-syntax.scm:

{% highlight scheme linenos %}

;;;;SCHEME SYNTAX FROM SECTION 4.1.2 OF STRUCTURE AND INTERPRETATION OF
;;;  COMPUTER PROGRAMS, TO SUPPORT CHAPTER 5
;;;;Loaded by compiler.scm (for use by compiler), and by eceval-support.scm
;;;; (for simulation of eceval machine operations)

(define (self-evaluating? exp)
  (cond ((number? exp) true)
        ((string? exp) true)
		((null? exp) true)
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


(define (begin? exp) (tagged-list? exp 'begin))
(define (begin-actions exp) (cdr exp))

(define (last-exp? seq) (null? (cdr seq)))
(define (first-exp seq) (car seq))
(define (rest-exps seq) (cdr seq))

(define (application? exp) (pair? exp))
(define (operator exp) (car exp))
(define (operands exp) (cdr exp))

(define (no-operands? ops) (null? ops))
(define (first-operand ops) (car ops))
(define (rest-operands ops) (cdr ops))

;;;**following needed only to implement COND as derived expression,
;;; not needed by eceval machine in text.  But used by compiler

;; from 4.1.2
(define (make-if predicate consequent alternative)
  (list 'if predicate consequent alternative))


(define (sequence->exp seq)
  (cond ((null? seq) seq)
        ((last-exp? seq) (first-exp seq))
        (else (make-begin seq))))

(define (make-begin seq) (cons 'begin seq))

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
;; end of Cond support

;; var-defs and body should be list
(define (make-let var-defs body)
  (cons 'let (cons var-defs body)))

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

(define (compile-and-run? exp) (tagged-list? exp 'compile-and-run))

(define (compile-and-run-expression exp) (text-of-quotation (cadr exp)))

(define (specialform-apply? exp) (tagged-list? exp 'specialform-apply))
(define (specialform-apply-procedure exp) (cadr exp))
(define (specialform-apply-arguments exp) (caddr exp))
{% endhighlight %}

------

Yo!


That completes most of the exercises of sicp. As of now, i am skipping last two exercises :)
