---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.35"
order: "035"
date: 2018-05-08 
---

It's fun!

This code generates the same output:

{% highlight scheme linenos %}
(compile '(define (f x)
  (+ x (g (+ x 2)))) 'val 'next)
{% endhighlight %}

How to arrive at this answer?

Added the details in comments:

{% highlight scheme linenos %}
;;below two line of code suggests that between entry-16 and after-lambda-15 contains a compiled procedure
;;and this proceudre is saved in register val
(assign val (op make-compiled-procedure) (label entry16) (reg env))
(goto (label after-lambda15)) 
entry16
(assign env (op compiled-procedure-env) (reg proc))
;;the procedure takes an argument `x`
(assign env (op extend-environment) (const (x)) (reg argl) (reg env))
;;in the procedure the first expression invokes procedure `+`
(assign proc (op lookup-variable-value) (const +) (reg env))
(save continue)
(save proc)
(save env)
;;since + is not yet completed, this means + contains a last argument which invokes
;;procedure g like this (+ <other arguments> (g <arguments to g>))
(assign proc (op lookup-variable-value) (const g) (reg env))  
(save proc)
;;since g is not yet completed, thus g contains a last argument which invokes
;;procedure + like this (+ ... (g ... (+ ...)))  
(assign proc (op lookup-variable-value) (const +) (reg env))
;; (+ ... (g ... (+ ... 2)))  
(assign val (const 2))
(assign argl (op list) (reg val))
;; (+ ... (g ... (+ ... x 2)))  
(assign val (op lookup-variable-value) (const x) (reg env))
(assign argl (op cons) (reg val) (reg argl))
;;no more arguments for +
;;we have 
;; (+ ... (g ... (+ x 2)))  
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch19))
compiled-branch18
(assign continue (label after-call17))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch19
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call17
(assign argl (op list) (reg val))
(restore proc)
;;no more arguments to g
;;we have
;; (+ ... (g (+ x 2)))  
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch22))
compiled-branch21
(assign continue (label after-call20))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch22
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call20
(assign argl (op list) (reg val))
(restore env)
;; (+ ... x (g (+ x 2)))  
(assign val (op lookup-variable-value) (const x) (reg env))
(assign argl (op cons) (reg val) (reg argl))
(restore proc)
(restore continue)
;;no more arguments to +
;;we have
;; (+ x (g (+ x 2)))  
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch25))
compiled-branch24
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch25
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
(goto (reg continue))
after-call23
;;no more statements thus there is onlye one statment in the procedure.
after-lambda15
(perform (op define-variable!) (const f) (reg val) (reg env)) ;the procedure is name is 'f'
(assign val (const ok)) 
{% endhighlight %}
