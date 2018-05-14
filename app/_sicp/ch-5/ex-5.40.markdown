---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.40"
order: "040"
date: 2018-05-10
---

Since it contain lot of small changes, i am putting the main change.

All the code generators now accept this new argument `cenv`, except:

- `compile-self-evaluating`
- `compile-quoted`
- `compile-procedure-call` (not to be confused with `compile-application` where `cenv` did get passed bec it is required for compiling the arguments there).

{% highlight scheme linenos %}
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
     (compile-sequence (lambda-body exp)
					   'val
					   'return
					   (extend-compile-time-env cenv formals)))) ;;;

(define (extend-compile-time-env cenv frame)  ;;;
  (cons frame cenv))                          ;;;
{% endhighlight %}
