---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.48"
order: "048"
date: 2018-05-13 
---

We can build a special form for `compile-and-run` in the evaluator and then in its instructions simply compile the expression and store the results in `val` and then jump over to `external-entry`.

Note that `external-entry` already take cares for `continue` and setting up the `env`.

Changes in file ch5-syntax.scm to support special form `compile-and-run`:

{% highlight scheme linenos %}
(define (compile-and-run? exp) (tagged-list? exp 'compile-and-run))

(define (compile-and-run-expression exp) (text-of-quotation (cadr exp)))
{% endhighlight %}

Changes in file ch5-eceval-compiler.scm for compile and assmbling instructions:

{% highlight scheme linenos %}
;;new procedure for compiling and return the assembled instructions.
(define (compile-and-assemble expression)
  (assemble (statements
             (compile expression 'val 'return the-empty-cenv))
            eceval))
{% endhighlight %}

Now add special form in evaluator `ch5-eceval-compiler.scm`:

{% highlight scheme linenos %}
;;add these procedures in eceval-operations
;;ex-5.48
(list 'compile-and-run? compile-and-run?)
(list 'compile-and-run-expression compile-and-run-expression)
(list 'compile-and-assemble compile-and-assemble)


;;now setup for eval-dispatch for special form:
;;change marked with ;;;
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
  (test (op lambda?) (reg exp))
  (branch (label ev-lambda))
  (test (op begin?) (reg exp))
  (branch (label ev-begin))
  (test (op compile-and-run?) (reg exp))   ;;;
  (branch (label ev-compile-and-run))      ;;;
  (test (op application?) (reg exp))
  (branch (label ev-application))
  (goto (label unknown-expression-type))

;;And finally the instructions for special form:
ev-compile-and-run
  (assign exp (op compile-and-run-expression) (reg exp))
  (assign val (op compile-and-assemble) (reg exp))
  (goto (label external-entry))
{% endhighlight %}

I had some difficulty in setting up the things in correct order so that no compilation error should come in a fresh start.

On a fresh start, I first load the compiler, `ch5-compiler.scm` and then load the file `load-eceval-compiler.scm`.

Here's the output:

{% highlight scheme linenos %}

1 ]=> (start-eceval)


;;; EC-Eval input:
(compile-and-run
 '(define (factorial n)
    (if (= n 1)
        1
        (* (factorial (- n 1)) n))))

(total-pushes = 0 maximum-depth = 0)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(+ 5 4)

(total-pushes = 8 maximum-depth = 5)
;;; EC-Eval value:
9

;;; EC-Eval input:
(factorial 5)

(total-pushes = 13 maximum-depth = 8)
;;; EC-Eval value:
120

;;; EC-Eval input:
((lambda(x) (factorial x)) 6)

(total-pushes = 20 maximum-depth = 10)
;;; EC-Eval value:
720

;;; EC-Eval input:
(compile-and-run '(define (dummy x) (+ 500 x))) 

(total-pushes = 0 maximum-depth = 0)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(define rs (dummy 5))

(total-pushes = 8 maximum-depth = 6)
;;; EC-Eval value:
ok

;;; EC-Eval input:
rs

(total-pushes = 0 maximum-depth = 0)
;;; EC-Eval value:
505

;;; EC-Eval input:
{% endhighlight %}

-----

I first tried this by installing `compile-and-run` as a primitive procedure. First problem is that there is a call `(start eceval)` that starts the evaluator. It can work fine but this means that `compile-and-run` call never returns! Because `(start eceval)` will go into a read-eval-print loop. 

A simple solution could be to set `flag` and branch in primitive procedure to `extrenal-entry` when flag is set. This did not work and even did not seem to be a good design as it will introduce a branching instruction for every primitive application.
