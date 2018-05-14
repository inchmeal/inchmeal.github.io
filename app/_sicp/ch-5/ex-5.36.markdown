---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.36"
order: "036"
date: 2018-05-09 
---

The current order of evaluation of arguments is right to left. 

Why we reverse the operator-codes? Because as explained in the book we use `cons` which causes the list to be built by adding elements at the front of the list.

To understand intuitively, we do two reverses, one explicit reverse and one which happens because of `cons`. Thus they cancel out each other so that we can have a list of `argl` which contains arguments in the same order as they are passed.

But still this does not explain why arguments are evaluated from right to left? 

Well, if we see `constuct-arglist` where while we do `cons` we also generate instructions to evaluate that argument. And we do `cons` starting from the first element of the reversed list.

#### Changing the order from left->right to right->left

Changes are marked with ;;;

{% highlight scheme linenos %}
(define (compile-application exp target linkage)
  (let ((proc-code (compile (operator exp) 'proc 'next))
        (operand-codes
         (map (lambda (operand) (compile operand 'val 'next))
              (operands exp))))
    (preserving '(env continue)
     proc-code
     (preserving '(proc continue)
				 (tack-on-instruction-sequence                 ;;;
				  (construct-arglist operand-codes)            ;;;
				  (make-instruction-sequence                   ;;;
				   '(argl)                                     ;;;
				   '(argl)                                     ;;;
				   '((assign argl (op reverse) (reg argl)))))  ;;;
				 (compile-procedure-call target linkage)))))

(define (construct-arglist operand-codes)
  ;;;removed the reverse code from here
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
						 (cdr operand-codes)))))))
{% endhighlight %}

Note that if we remove the reverse of `operator-codes` we need to reverse the `argl` because `argl` is formed by *consing* which causes the elements present in `argl` to be in the reverse order of the `operand-codes`. 

If we don't reverse `argl` this will happen:

Suppose we evaluate a call `(g (+ 5 2) (- 5 2))`. Then `argl` should be `(7 3)` but without reverse(and bec of using cons) it will be `(3 7)`. Thus when we call `g` the arguments passed to it will be in reverse order!

This does not happen in the book's version because we first reversed `(+ 5 2) (- 5 2)` to `(- 5 2) (+ 5 2)` and thus when we build argl because of using cons, `(7 3)`. Thus we get the correct order in which we need to pass this in `g`.

#### Efficiency

Note that earlier the reverse was in the compiler code. Now the reverse is happening while code is executing! It improves the efficiency of compiler as we need not to do reverse but it does have impact in the efficiency of the code generated! For every procedure application, we have to do reverse!

Well, I was first thinking to reverse the *formal arguments* thus avoiding the reverse of `argl`. This can be done for compiled procedures but not for primitive procedures!


#### Output

I checked with the code of ex-5.35(compiling `(define (f x) (+ x (g (+ x 2)))`):

(reverse instruction generated are marked with ;;;)

Note the difference in the order of arguments for procedure `+`

{% highlight scheme linenos %}
|--------------------------------------------------------------------|---------------------------------------------------------------------|
| Left to Right(change in this exercise)                             | Left to Right(ex-5.35)                                              |
|--------------------------------------------------------------------|---------------------------------------------------------------------|
| (assign val (op make-compiled-procedure) (label entry2) (reg env)) | (assign val (op make-compiled-procedure) (label entry16) (reg env)) |
| (goto (label after-lambda1))                                       | (goto (label after-lambda15))                                       |
| entry2                                                             | entry16                                                             |
| (assign env (op compiled-procedure-env) (reg proc))                | (assign env (op compiled-procedure-env) (reg proc))                 |
| (assign env (op extend-environment) (const (x)) (reg argl) (reg en | (assign env (op extend-environment) (const (x)) (reg argl) (reg env |
| (assign proc (op lookup-variable-value) (const +) (reg env))       | (assign proc (op lookup-variable-value) (const +) (reg env))        |
| (save continue)                                                    | (save continue)                                                     |
| (save proc)                                                        | (save proc)                                                         |
| (assign val (op lookup-variable-value) (const x) (reg env))        | (save env)                                                          |
| (assign argl (op list) (reg val))                                  | (assign proc (op lookup-variable-value) (const g) (reg env))        |
| (save argl)                                                        | (save proc)                                                         |
| (assign proc (op lookup-variable-value) (const g) (reg env))       | (assign proc (op lookup-variable-value) (const +) (reg env))        |
| (save proc)                                                        | (assign val (const 2))                                              |
| (assign proc (op lookup-variable-value) (const +) (reg env))       | (assign argl (op list) (reg val))                                   |
| (assign val (op lookup-variable-value) (const x) (reg env))        | (assign val (op lookup-variable-value) (const x) (reg env))         |
| (assign argl (op list) (reg val))                                  | (assign argl (op cons) (reg val) (reg argl))                        |
| (assign val (const 2))                                             | (test (op primitive-procedure?) (reg proc))                         |
| (assign argl (op cons) (reg val) (reg argl))                       | (branch (label primitive-branch19))                                 |
| ;;Note the reverse instruction genereted                           | compiled-branch18                                                   |
| (assign argl (op reverse) (reg argl))     ;;;                      | (assign continue (label after-call17))                              |
| (test (op primitive-procedure?) (reg proc))                        | (assign val (op compiled-procedure-entry) (reg proc))               |
| (branch (label primitive-branch5))                                 | (goto (reg val))                                                    |
| compiled-branch4                                                   | primitive-branch19                                                  |
| (assign continue (label after-call3))                              | (assign val (op apply-primitive-procedure) (reg proc) (reg argl))   |
| (assign val (op compiled-procedure-entry) (reg proc))              | after-call17                                                        |
| (goto (reg val))                                                   | (assign argl (op list) (reg val))                                   |
| primitive-branch5                                                  | (restore proc)                                                      |
| (assign val (op apply-primitive-procedure) (reg proc) (reg argl))  | (test (op primitive-procedure?) (reg proc))                         |
| after-call3                                                        | (branch (label primitive-branch22))                                 |
| (assign argl (op list) (reg val))                                  | compiled-branch21                                                   |
| (assign argl (op reverse) (reg argl))    ;;;                       | (assign continue (label after-call20))                              |
| (restore proc)                                                     | (assign val (op compiled-procedure-entry) (reg proc))               |
| (test (op primitive-procedure?) (reg proc))                        | (goto (reg val))                                                    |
| (branch (label primitive-branch8))                                 | primitive-branch22                                                  |
| compiled-branch7                                                   | (assign val (op apply-primitive-procedure) (reg proc) (reg argl))   |
| (assign continue (label after-call6))                              | after-call20                                                        |
| (assign val (op compiled-procedure-entry) (reg proc))              | (assign argl (op list) (reg val))                                   |
| (goto (reg val))                                                   | (restore env)                                                       |
| primitive-branch8                                                  | (assign val (op lookup-variable-value) (const x) (reg env))         |
| (assign val (op apply-primitive-procedure) (reg proc) (reg argl))  | (assign argl (op cons) (reg val) (reg argl))                        |
| after-call6                                                        | (restore proc)                                                      |
| (restore argl)                                                     | (restore continue)                                                  |
| (assign argl (op cons) (reg val) (reg argl))                       | (test (op primitive-procedure?) (reg proc))                         |
| (assign argl (op reverse) (reg argl))    ;;;                       | (branch (label primitive-branch25))                                 |
| (restore proc)                                                     | compiled-branch24                                                   |
| (restore continue)                                                 | (assign val (op compiled-procedure-entry) (reg proc))               |
| (test (op primitive-procedure?) (reg proc))                        | (goto (reg val))                                                    |
| (branch (label primitive-branch11))                                | primitive-branch25                                                  |
| compiled-branch10                                                  | (assign val (op apply-primitive-procedure) (reg proc) (reg argl))   |
| (assign val (op compiled-procedure-entry) (reg proc))              | (goto (reg continue))                                               |
| (goto (reg val))                                                   | after-call23                                                        |
| primitive-branch11                                                 | after-lambda15                                                      |
| (assign val (op apply-primitive-procedure) (reg proc) (reg argl))  | (perform (op define-variable!) (const f) (reg val) (reg env))       |
| (goto (reg continue))                                              | (assign val (const ok))                                             |
| after-call9                                                        |                                                                     |
| after-lambda1                                                      |                                                                     |
| (perform (op define-variable!) (const f) (reg val) (reg env))      |                                                                     |
| (assign val (const ok))                                            |                                                                     |
|                                                                    |                                                                     |
|--------------------------------------------------------------------|---------------------------------------------------------------------|
{% endhighlight %}

