---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.42"
order: "042"
date: 2018-05-11 
---

{% highlight scheme linenos %}
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
{% endhighlight %}

#### Example/Output:

Since i developed this on top of other previous changes, here i tested by enabling and disabling the open code changes from ex-4.38.

Output after disabling the open-code changes from ex-4.38. 

{% highlight scheme linenos %}
1 ]=> 
(compile '((lambda (x y)
   (lambda (a b c d e)
     ((lambda (y z) (* x y z))
      (* a b x)
      (+ c d x))))
 3
 4) 'val 'next the-empty-cenv)

;;output
((env)
 (env proc argl continue val)
 (
  (assign proc (op make-compiled-procedure) (label entry2) (reg env))
  (goto (label after-lambda1))
  entry2
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (x y)) (reg argl) (reg env))
  (assign val (op make-compiled-procedure) (label entry4) (reg env))
  (goto (reg continue))
  entry4
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (a b c d e)) (reg argl) (reg env))
  (assign proc (op make-compiled-procedure) (label entry12) (reg env))
  (goto (label after-lambda11))
  entry12
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (y z)) (reg argl) (reg env))
  (assign proc (op lookup-variable-value) (const *) (reg env))
  (assign val (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (assign val (op lexical-address-lookup) (const (2 0)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch15))
  compiled-branch14
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch15
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call13
  after-lambda11
  (save continue)
  (save proc)
  (save env)
  (assign proc (op lookup-variable-value) (const +) (reg env))
  (assign val (op lexical-address-lookup) (const (1 0)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 3)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (assign val (op lexical-address-lookup) (const (0 2)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch10))
  compiled-branch9
  (assign continue (label after-call8))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch10
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call8 (assign argl (op list) (reg val))
  (restore env)
  (save argl)
  (assign proc (op lookup-variable-value) (const *) (reg env))
  (assign val (op lexical-address-lookup) (const (1 0)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (assign val (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch7))
  compiled-branch6
  (assign continue (label after-call5))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch7
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call5 (restore argl)
  (assign argl (op cons) (reg val) (reg argl))
  (restore proc)
  (restore continue)
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch18))
  compiled-branch17
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch18
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call16
  after-lambda3 after-lambda1 (assign val (const 4))
  (assign argl (op list) (reg val))
  (assign val (const 3))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch21))
  compiled-branch20
  (assign continue (label after-call19))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch21
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call19))
{% endhighlight %}

-----

With open code changes included and output is as expected.

{% highlight scheme linenos %}
1 ]=> 
(compile '((lambda (x y)
   (lambda (a b c d e)
     ((lambda (y z) (* x y z))
      (* a b x)
      (+ c d x))))
 3
 4) 'val 'next the-empty-cenv)


;;output:
((env)
 (env proc argl continue val)
 (
  (assign proc (op make-compiled-procedure) (label entry2) (reg env))
  (goto (label after-lambda1))
  entry2
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (x y)) (reg argl) (reg env))
  (assign val (op make-compiled-procedure) (label entry4) (reg env))
  (goto (reg continue))
  entry4
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (a b c d e)) (reg argl) (reg env))
  (assign proc (op make-compiled-procedure) (label entry6) (reg env))
  (goto (label after-lambda5))
  entry6
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (y z)) (reg argl) (reg env))
  (assign arg2 (op lexical-address-lookup) (const (0 1)) (reg env))
  (save arg2)
  (assign arg2 (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign arg1 (op lexical-address-lookup) (const (2 0)) (reg env))
  (assign arg1 (op *) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op *) (reg arg1) (reg arg2))
  (goto (reg continue))
  after-lambda5
  (assign arg2 (op lexical-address-lookup) (const (1 0)) (reg env))
  (save arg2)
  (assign arg2 (op lexical-address-lookup) (const (0 3)) (reg env))
  (assign arg1 (op lexical-address-lookup) (const (0 2)) (reg env))
  (assign arg1 (op +) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op +) (reg arg1) (reg arg2))
  (assign argl (op list) (reg val))
  (assign arg2 (op lexical-address-lookup) (const (1 0)) (reg env))
  (save arg2)
  (assign arg2 (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign arg1 (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign arg1 (op *) (reg arg1) (reg arg2))
  (restore arg2)
  (assign val (op *) (reg arg1) (reg arg2))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch9))
  compiled-branch8
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch9
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call7
  after-lambda3
  after-lambda1
  (assign val (const 4))
  (assign argl (op list) (reg val))
  (assign val (const 3))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch12))
  compiled-branch11
  (assign continue (label after-call10))
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch12
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  after-call10))
{% endhighlight %}
