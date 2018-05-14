---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.43"
order: "043"
date: 2018-05-11 
---

- Used the code `scan-out-defines` from ex-4.16.
- Because `scan-out-defines` convert the code into a `let` expression, we need our compiler to parse let expresstions. This can be done just by converting the code of `let` into `lambda` which we have already done in ex-4.6.
- There's a subtle point about the return value of `scan-out-defines`. It should be returning a sequence because we send its output to `compile-sequence`. It turns out that it is already doing so as per the old implementation! So, nothing needs to be done.

Well, that's it!


Here are the changes:

{% highlight scheme linenos %}
;;Change in compile procedure
((let? exp) (compile (let->combination exp) target linkage cenv))

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
     (compile-sequence (scan-out-defines         ;;;
						(lambda-body exp))       ;;;
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
{% endhighlight %}

Also, there are few changes in ch5-syntax.scm - to add support for `let?`:

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

#### Example/Code

{% highlight scheme linenos %}
1 ]=> 
(compile '(define (dummy) (define a 10) a (define b 20) (+ a b)) 'val 'next the-empty-cenv)

;;Output:
((env)
 (val)
 (
  (assign val (op make-compiled-procedure) (label entry2) (reg env))
  (goto (label after-lambda1))
  entry2
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const ()) (reg argl) (reg env))
  (assign proc (op make-compiled-procedure) (label entry4) (reg env))
  (goto (label after-lambda3))
  entry4
  (assign env (op compiled-procedure-env) (reg proc))
  (assign env (op extend-environment) (const (a b)) (reg argl) (reg env))
  (assign val (const 10))
  (perform (op lexical-address-set!) (const (0 0)) (reg val) (reg env))
  (assign val (const ok))
  (assign val (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign val (const 20))
  (perform (op lexical-address-set!) (const (0 1)) (reg val) (reg env))
  (assign val (const ok))
  (assign proc (op lookup-variable-value) (const +) (reg env))
  (assign val (op lexical-address-lookup) (const (0 1)) (reg env))
  (assign argl (op list) (reg val))
  (assign val (op lexical-address-lookup) (const (0 0)) (reg env))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch7))
  compiled-branch6
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch7
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call5
  after-lambda3
  (assign val (const *unassigned*))
  (assign argl (op list) (reg val))
  (assign val (const *unassigned*))
  (assign argl (op cons) (reg val) (reg argl))
  (test (op primitive-procedure?) (reg proc))
  (branch (label primitive-branch10))
  compiled-branch9
  (assign val (op compiled-procedure-entry) (reg proc))
  (goto (reg val))
  primitive-branch10
  (assign val (op apply-primitive-procedure) (reg proc) (reg argl))
  (goto (reg continue))
  after-call8
  after-lambda1
  (perform (op define-variable!) (const dummy) (reg val) (reg env))
  (assign val (const ok))
  ))
{% endhighlight %}
