---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.44"
order: "044"
date: 2018-05-11 
---

{% highlight scheme linenos %}
(define (same? exp cenv) (and (tagged-list? exp '=)
							  (eq? 'not-found (find-variable '= cenv))))
(define (mul? exp cenv) (and (tagged-list? exp '*)
							 (eq? 'not-found (find-variable '* cenv))))
(define (sub? exp cenv) (and (tagged-list? exp '-)
							 (eq? 'not-found (find-variable '- cenv))))
(define (add? exp cenv) (and (tagged-list? exp '+)
							 (eq? 'not-found (find-variable '+ cenv))))


;;changes in compile - passing an addition argument
((same? exp cenv) (compile-same exp target linkage cenv))
((add? exp cenv) (compile-add exp target linkage cenv))
((sub? exp cenv) (compile-sub exp target linkage cenv))
((mul? exp cenv) (compile-mul exp target linkage cenv))
{% endhighlight %}

This works fine as suggested in the problem but notice this statement in the problem:

*The code will work correctly as long as the program does not define or set! these names*

Defines and redefines inside local procedure are taken cared by ex-5.43 but..

What if we defined `+`, or `*` in the global environment? 

We know from statement of ex-5.42(see the tip 47 in it too) that because the global environment is dynamic, we can not store the variables of global environment in compile time environment!

Because of this we can not *redefine* or *define* these primitives in global environment in this context.

#### Example 

Tested on the example given in the problem:

{% highlight scheme linenos %}
1 ]=> 
(compile '(lambda (+ * a b x y)
                   (+ (* a x) (* b y))) 'val 'next the-empty-cenv)

;;Output:
((env)
 (val)
 (
  (assign val (op make-compiled-procedure) (label entry2) (reg env))
  (goto (label after-lambda1))
  entry2
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (+ * a b x y)) (reg argl) (reg env))
  (assign proc (op lexical-address-lookup) (const (0 0)) (reg env))
  (save continue)
  (save proc)
  (save env)
  (assign proc (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign val (op lexical-address-lookup) (const (0 5)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 3)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch8))
  compiled-branch7
  (assign continue (label after-call6))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch8
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call6
  (assign argl (op list) (reg val))
  (restore env)
  (save argl)
  (assign proc (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign val (op lexical-address-lookup) (const (0 4)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 2)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch5))
  compiled-branch4
  (assign continue (label after-call3))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch5
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call3
  (restore argl)
  (assign argl (op cons) (reg val) (reg argl))
  (restore proc)
  (restore continue)
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch11))
  compiled-branch10
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch11
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call9
  after-lambda1))
{% endhighlight %}

Since this mark the completion of the changes because of *compile time environment*, I shall put the complete code here:

File: ch5-compiler.scm:

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
		((add? exp cenv) (compile-add exp target linkage cenv))
		((sub? exp cenv) (compile-sub exp target linkage cenv))
		((mul? exp cenv) (compile-mul exp target linkage cenv))
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

There are few changes in ch5-syntax.scm - to supprt `let?`

{% highlight scheme linenos %}
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
{% endhighlight %}

Also, there are few changes as part of ex-5.39:

(As of now i put these changes in ch5-eceval-support.scm):

{% highlight scheme linenos %}
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
