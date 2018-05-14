---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.38"
order: "038"
date: 2018-05-10
---

Interesting and took much more time than i anticipated!

Few points for the approach:

- For consistency, I think it is important to evaluate the primitive arguments also in the right to left order as is the case with all the procedures arguments.
- Since in the first part for `spread-arguments`, it was not mentioned that there will only be two arg registers. So I made a global list of arg registers and if there can be more than 2 then just need add them in the global list(in code `all-arg-regs`) of arg regs.
- Used a inbuilt scheme procedure `take` which returns the first `n` elements of the list passed to it.

Since this contained a good amount of changes, I have also put the complete code of file ch5-compiler.scm at the bottom of this page.

#### (a)

Code follows after this description.

Note the `iter` procedure inside `spread-arguments` is called with two arguments, `operands-list` and `arg-args`. Since we need as many arg registers (like arg1, arg2) as the number of operands. Thus `iter` is invoked with by taking(using `take`) as many registers from `all-arg-regs` as the number of operands.

Note that for right to left evaluation, `preserving` first is passed the instruction for the rest operands and *then* the first operand.

For first-operand, again `preserving` is used(see the line marked with `;;;1`), because the results of rest-operands must be saved before evaluating the first operand.

Why can't we just used only the first use of preserving and pass the registers to be preserved along with the `env`. 

To understand the `preserving` marked with comment `;;;1`, first let me recall how  `preserving` works:

*It preserves the registers which are modified by first sequence but needed in second sequence.*

Now, where are the results of rest operands saved?

Well, there is one to one mapping between each register in `arg-regs` and each operand in `operands-list`. Thus `(cdr arg-regs)` is the answer.

Ofcourse, we need to preserve `env` register as the remaining arguments might use variables from the environment stored in `env`.

{% highlight scheme linenos %}
(define all-arg-regs '(arg1 arg2))
(define total-arg-regs (length all-arg-regs))

(define (spread-arguments operands-list)
  (define (iter operands-list arg-regs)
	(if (null? operands-list)
		(empty-instruction-sequence)
		(let ((rest-seq (iter (cdr operands-list)
							  (cdr arg-regs)))
			  (first-seq (compile (car operands-list)
								  (car arg-regs)
								  'next)))
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
{% endhighlight %}

Note that `spread-arguments` assumes that there are atleast as many arg registers as there are the number of operands. The user/caller of `spread-arguments` should ensure it.

#### (b)

`compile-open-code` is a common procedure used by all the code generators `compile-add`, `compile-sub` etc.

Just one thing to note, `continue` might get modified by call to `spread-arguments` and `end-with-linkage` takes care of it.

{% highlight scheme linenos %}
;;it return list like '((reg arg1) (reg arg2) ... )
;;for each reg in arg-regs passed
(define (make-arg-regs-list arg-regs)
  (map (lambda(reg)
		 (list 'reg reg))
	   arg-regs))

(define (compile-open-code operation operands-list target linkage)
  (let ((operands-length (length operands-list)))
	(if (> operands-length total-arg-regs)
		(error "Open code primitive operands are more than the available arg regs.")
		(let ((arg-regs (take all-arg-regs operands-length)))
		  ;;recall that end-with-linkage preserves continue register
		  (end-with-linkage
		   linkage
		   (append-instruction-sequences
			(spread-arguments operands-list)
			(make-instruction-sequence
			 arg-regs
			 `(,target)
			 `((assign ,target
					   (op ,operation)
					   . ;;notice the dot
					   ,(make-arg-regs-list arg-regs))))))))))

(define (same? exp) (tagged-list? exp '=))
(define (mul? exp) (tagged-list? exp '*))
(define (sub? exp) (tagged-list? exp '-))
(define (add? exp) (tagged-list? exp '+))

(define (compile-same exp target linkage)
  (compile-open-code '= (operands exp) target linkage))

(define (compile-sub exp target linkage)
  (compile-open-code '- (operands exp) target linkage))

;;below to procedures contains the change correspoding to part(d)
(define (compile-add exp target linkage)
  (split-and-compile '+ (operands exp) target linkage))

(define (compile-mul exp target linkage)
  (split-and-compile '* (operands exp) target linkage))

;;Additions in compile procedure

((same? exp) (compile-same exp target linkage))
((add? exp) (compile-add exp target linkage))
((sub? exp) (compile-sub exp target linkage))
((mul? exp) (compile-mul exp target linkage))
{% endhighlight %}

#### (c)

**factorial with Open Coding**

As we can see, now there are no more procedure invocation instructions generated for `=`, `-`.

{% highlight scheme linenos %}
(assign val
		(op make-compiled-procedure)
		(label entry2)
		(reg env))
(goto (label after-lambda1))
entry2
(assign env
		(op compiled-procedure-env)
		(reg proc))
(assign env
		(op extend-environment)
		(const (n))
		(reg argl)
		(reg env))
(assign arg2 (const 1))
(assign arg1
		(op lookup-variable-value)
		(const n)
		(reg env))
(assign val
		(op =)
		(reg arg1)
		(reg arg2))
(test (op false?) (reg val))
(branch (label false-branch4))
true-branch5
(assign val (const 1))
(goto (reg continue))
false-branch4
(save continue)
(assign arg2
		(op lookup-variable-value)
		(const n)
		(reg env))
(save arg2)
(assign proc
		(op lookup-variable-value)
		(const factorial)
		(reg env))
(assign arg2 (const 1))
(assign arg1
		(op lookup-variable-value)
		(const n)
		(reg env))
(assign val (op -)
		(reg arg1)
		(reg arg2))
(assign argl (op list) (reg val))
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch8))
compiled-branch7
(assign continue (label proc-return9))
(assign val
		(op compiled-procedure-entry)
		(reg proc))
(goto (reg val))
proc-return9
(assign arg1 (reg val))
(goto (label after-call6))
primitive-branch8
(assign arg1
		(op apply-primitive-procedure)
		(reg proc)
		(reg argl))
after-call6
(restore arg2)
(assign val
		(op *)
		(reg arg1)
		(reg arg2))
(restore continue)
(goto (reg continue))
after-if3
after-lambda1
(perform (op define-variable!)
		(const factorial)
		(reg val)
		(reg env))
(assign val (const ok))
{% endhighlight %}
   
#### (d)

This took me quite some time but turned out quite simple. We can just use the procedures created above.

The idea is quite simple: To compile `(+ 1 2 3 4 5)`, compile `(+ 1 2)` and compile `(+ 3 4 5)` separately and merge the results as `(+ result-1 result-2)`. The recursion takes care of the rest!

One special case: `(+ 1 2 3)` should be splitted as `(+ 1 2)` and `3`(not `+ 3`).

Procedure `split`, divides the list passed to it in two parts, with first containing `n` items and second part containing the remaining items. If `n` is large than the number of items then it will return all the iterms in the first part only and rest part will be empty.

{% highlight scheme linenos %}
(define (split items n)
  (cond ((= n 0) (cons '() items))
		((null? items) (cons '() '()))
		(else (let ((n-1-split (split (cdr items)
									  (- n 1))))
				(cons (cons (car items)
							(car n-1-split))
					  (cdr n-1-split))))))

(define (split-and-compile operator operands target linkage)
  (let ((splitted (split operands total-arg-regs)))
	(let ((first-part (car splitted))
		  (rem-part (cdr splitted)))
	  (if (null? rem-part)
		  (compile-open-code operator first-part target linkage)
		  (let ((new-operand-1 (cons operator first-part))
				(new-operand-2 (if (null? (cdr rem-part))
								   (car rem-part)
								   (cons operator rem-part))))
			(compile-open-code operator
							   (list new-operand-1 new-operand-2)
							   target
							   linkage))))))
{% endhighlight %}

#### Some small examples:

{% highlight scheme linenos %}
1 ]=> 
(compile '(+ 1 2) 'val 'next)

(()
 (arg2 arg1 val)
 (
  (assign arg2 (const 2))
  (assign arg1 (const 1))
  (assign val (op +) (reg arg1) (reg arg2))))

1 ]=> 
(compile '(+ 1 2 3) 'val 'next)

(()
 (arg2 arg1 val)
 (
  (assign arg2 (const 3))
  (save arg2)
  (assign arg2 (const 2))
  (assign arg1 (const 1))
  (assign arg1 (op +) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op +) (reg arg1) (reg arg2))))

1 ]=> 
(compile '(+ 1 2 3 4) 'val 'next)
(()
(arg2 arg1 val)
(
 (assign arg2 (const 4))
 (assign arg1 (const 3))
 (assign arg2 (op +) (reg arg1) (reg arg2))
 (save arg2)
 (assign arg2 (const 2))
 (assign arg1 (const 1))
 (assign arg1 (op +) (reg arg1) (reg arg2))
 (restore arg2)
 (assign val (op +) (reg arg1) (reg arg2))))

1 ]=> 
(compile '(+ 1 2 3 4 5) 'val 'next)

(()
 (arg2 arg1 val)
 (
  (assign arg2 (const 5))
  (save arg2)
  (assign arg2 (const 4))
  (assign arg1 (const 3))
  (assign arg1 (op +) (reg arg1) (reg arg2))
  (restore arg2)
  (assign arg2 (op +) (reg arg1) (reg arg2))
  (save arg2)
  (assign arg2 (const 2))
  (assign arg1 (const 1))
  (assign arg1 (op +) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op +) (reg arg1) (reg arg2))))

1 ]=>  
(compile '(+ (f 1) 2) 'val 'next)

((env)
 (arg2 env proc argl continue arg1 val)
 (
  (assign arg2 (const 2))
  (assign proc (op lookup-variable-value) (const f) (reg env))
  (assign val (const 1))
  (assign argl (op list) (reg val))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch3))
  compiled-branch2
  (assign continue (label proc-return4))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  proc-return4 (assign arg1 (reg val))
  (goto (label after-call1))
  primitive-branch3
  (assign arg1 (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call1
  (assign val (op +) (reg arg1) (reg arg2))))

1 ]=> 
(compile '(+ 0 (f 1) 2) 'val 'next)

((env)
 (arg2 env proc argl continue arg1 val)
 (
  (assign arg2 (const 2))
  (save arg2)
  (assign proc (op lookup-variable-value) (const f) (reg env))
  (assign val (const 1))
  (assign argl (op list) (reg val))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch7))
  compiled-branch6
  (assign continue (label proc-return8))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  proc-return8 (assign arg2 (reg val))
  (goto (label after-call5))
  primitive-branch7
  (assign arg2 (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call5
  (assign arg1 (const 0))
  (assign arg1 (op +) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op +) (reg arg1) (reg arg2))))

1 ]=> 
(compile '(f (+ 1 2)) 'val 'next)

((env)
 (arg2 arg1 env proc argl continue val)
 (
  (assign proc (op lookup-variable-value) (const f) (reg env))
  (assign arg2 (const 2))
  (assign arg1 (const 1))
  (assign val (op +) (reg arg1) (reg arg2))
  (assign argl (op list) (reg val))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch11))
  compiled-branch10
  (assign continue (label after-call9))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch11
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call9))

1 ]=> 
{% endhighlight %}


### Complete Code

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

(define (compile exp target linkage)
  (cond ((self-evaluating? exp)
         (compile-self-evaluating exp target linkage))
        ((quoted? exp) (compile-quoted exp target linkage))
        ((variable? exp)
         (compile-variable exp target linkage))
        ((assignment? exp)
         (compile-assignment exp target linkage))
        ((definition? exp)
         (compile-definition exp target linkage))
        ((if? exp) (compile-if exp target linkage))
        ((lambda? exp) (compile-lambda exp target linkage))
        ((begin? exp)
         (compile-sequence (begin-actions exp)
                           target
                           linkage))
        ((cond? exp) (compile (cond->if exp) target linkage))
		((same? exp) (compile-same exp target linkage))
		((add? exp) (compile-add exp target linkage))
		((sub? exp) (compile-sub exp target linkage))
		((mul? exp) (compile-mul exp target linkage))
        ((application? exp)
         (compile-application exp target linkage))
        (else
         (error "Unknown expression type -- COMPILE" exp))))


(define all-arg-regs '(arg1 arg2))
(define total-arg-regs (length all-arg-regs))

(define (spread-arguments operands-list)
  (define (iter operands-list arg-regs)
	(if (null? operands-list)
		(empty-instruction-sequence)
		(let ((rest-seq (iter (cdr operands-list)
							  (cdr arg-regs)))
			  (first-seq (compile (car operands-list)
								  (car arg-regs)
								  'next)))
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

(define (same? exp) (tagged-list? exp '=))
(define (mul? exp) (tagged-list? exp '*))
(define (sub? exp) (tagged-list? exp '-))
(define (add? exp) (tagged-list? exp '+))

;;it return list like '((reg arg1) (reg arg2) ... )
;;for each reg in arg-regs passed
(define (make-arg-regs-list arg-regs)
  (map (lambda(reg)
		 (list 'reg reg))
	   arg-regs))
  
(define (compile-open-code operation operands-list target linkage)
  (let ((operands-length (length operands-list)))
	(if (> operands-length total-arg-regs)
		(error "Open code primitive operands are more than the available arg regs.")
		(let ((arg-regs (take all-arg-regs operands-length)))
		  (end-with-linkage
		   linkage
		   (append-instruction-sequences
			(spread-arguments operands-list)
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

(define (split-and-compile operator operands target linkage)
  (let ((splitted (split operands total-arg-regs)))
	(let ((first-part (car splitted))
		  (rem-part (cdr splitted)))
	  (if (null? rem-part)
		  (compile-open-code operator first-part target linkage)
		  (let ((new-operand-1 (cons operator first-part))
				(new-operand-2 (if (null? (cdr rem-part))
								   (car rem-part)
								   (cons operator rem-part))))
			(compile-open-code operator
							   (list new-operand-1 new-operand-2)
							   target
							   linkage))))))
	
(define (compile-add exp target linkage)
  (split-and-compile '+ (operands exp) target linkage))

(define (compile-same exp target linkage)
  (compile-open-code '= (operands exp) target linkage))

(define (compile-mul exp target linkage)
  (split-and-compile '* (operands exp) target linkage))

(define (compile-sub exp target linkage)
  (compile-open-code '- (operands exp) target linkage))

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

(define (compile-variable exp target linkage)
  (end-with-linkage linkage
   (make-instruction-sequence '(env) (list target)
    `((assign ,target
              (op lookup-variable-value)
              (const ,exp)
              (reg env))))))

(define (compile-assignment exp target linkage)
  (let ((var (assignment-variable exp))
        (get-value-code
         (compile (assignment-value exp) 'val 'next)))
    (end-with-linkage linkage
     (preserving '(env)
      get-value-code
      (make-instruction-sequence '(env val) (list target)
       `((perform (op set-variable-value!)
                  (const ,var)
                  (reg val)
                  (reg env))
         (assign ,target (const ok))))))))

(define (compile-definition exp target linkage)
  (let ((var (definition-variable exp))
        (get-value-code
         (compile (definition-value exp) 'val 'next)))
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

(define (compile-if exp target linkage)
  (let ((t-branch (make-label 'true-branch))
        (f-branch (make-label 'false-branch))                    
        (after-if (make-label 'after-if)))
    (let ((consequent-linkage
           (if (eq? linkage 'next) after-if linkage)))
      (let ((p-code (compile (if-predicate exp) 'val 'next))
            (c-code
             (compile
              (if-consequent exp) target consequent-linkage))
            (a-code
             (compile (if-alternative exp) target linkage)))
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

(define (compile-sequence seq target linkage)
  (if (last-exp? seq)
      (compile (first-exp seq) target linkage)
      (preserving '(env continue)
       (compile (first-exp seq) target 'next)
       (compile-sequence (rest-exps seq) target linkage))))

;;;lambda expressions

(define (compile-lambda exp target linkage)
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
        (compile-lambda-body exp proc-entry))
       after-lambda))))

(define (compile-lambda-body exp proc-entry)
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
     (compile-sequence (lambda-body exp) 'val 'return))))


;;;SECTION 5.5.3

;;;combinations

(define (compile-application exp target linkage)
  (let ((proc-code (compile (operator exp) 'proc 'next))
        (operand-codes
         (map (lambda (operand) (compile operand 'val 'next))
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
