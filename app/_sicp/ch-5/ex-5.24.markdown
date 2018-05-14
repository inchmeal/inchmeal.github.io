---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.24"
order: "024"
date: 2018-05-01 
---

Few things to note:

- `ev-sequence` reads from `unev`. Thus before jumping to `ev-sequence` we need to set `unev` with the `cond-actions` to be executed.
- `eve-sequence` itself pops from stack to read `continue`, thus we need to make sure that top of stack contains correct `continue`.
- To iterate clauses, i used `car` and `cdr`. Ideally they should be abstracted with methods like `first-clause` and `rest-clauses`.
- At present, error is logged in this case only: If `else` is not last clause, then error is reported only when the control reaches the else clause. Else if there is some expression that evaluated to true before else, then no error is logged.
- If no clause, evaluates to true, `false` is returned.
- Add the procedures like `not`, `null?`, `car`, `cond-predicate`, `cond-else-clause?` etc in the list of operations while creating eceval.

{% highlight scheme linenos %}
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
  (goto (label eval-dispatch))
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
{% endhighlight %}

Example/Output:

{% highlight scheme linenos %}
1 ]=> 
(define the-global-environment (setup-environment))
(start eceval)

;Value: the-global-environment

1 ]=> 

;;; EC-Eval input:

(define x -5)
(cond ((> x 0) x)
      ((= x 0) 0)
      (else (- x)))

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(quote here)((else (- x)))
(total-pushes = 26 maximum-depth = 8)
;;; EC-Eval value:
5

;;; EC-Eval input:
(define x 5)

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:

(cond ((> x 0) x)
      ((= x 0) 0)
      (else (- x)))
(quote here)(((> x 0) x) ((= x 0) 0) (else (- x)))
(total-pushes = 11 maximum-depth = 8)
;;; EC-Eval value:
5

;;; EC-Eval input:
(define x 0)

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:

(cond ((> x 0) x)
      ((= x 0) 0)
      (else (- x)))
(quote here)(((= x 0) 0) (else (- x)))
(total-pushes = 21 maximum-depth = 8)
;;; EC-Eval value:
0

;;; EC-Eval input:

(cond ((> x 0) x)
      (else (- x))
      ((< x 0) (- x)))
else-not-last-in-cond-error

;;; EC-Eval input:
(cond (false 'abc) (false 'def))

(total-pushes = 5 maximum-depth = 3)
;;; EC-Eval value:
false

;;; EC-Eval input:

{% endhighlight %}
