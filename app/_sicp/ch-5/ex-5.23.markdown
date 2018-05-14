---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.23"
order: "023"
date: 2018-05-01 
---

Here are the changes for `let` and `cond`:

Note: As always i dowloaded the code from [mit][mit] and added my changes in it. For this code to work there are few files needed - ch5-regsim.scm, ch5-eceval.scm, ch5-eceval-support.scm, load-eceval.scm, ch5-syntax.scm. How to load the evaluator is described in file ch5-eceval.scm.

Changes in file ch5-eceval.scm:

{% highlight scheme linenos %}
;;change in eceval-operations:
(define eceval-operations
  (list
   ;;......
   ;;......
   ;;ex-5.23
   (list 'cond? cond?)
   (list 'cond->if cond->if)
   (list 'let? let?)
   (list 'let->combination let->combination)

   ;;.....
   ;;.....
   ))

;;change in eceval
(define eceval
  (make-machine
   '(exp env val proc argl continue unev)
   eceval-operations
  '(
	;;.....
	;;.....
	;;ex-5.23
ev-cond
    (assign exp (op cond->if) (reg exp))
    (goto (label ev-if))
ev-let
    (assign exp (op let->combination) (reg exp))  
    (goto (label ev-application))
    ;;....
    ;;....
	)))
{% endhighlight %}

Changes in file ch5-syntax.scm(To add the primitive procedures):

(I added this from my solution of ex-4.6)

{% highlight scheme linenos %}
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

------

Test/Output:

{% highlight scheme linenos %}
1 ]=> 
;Loading "ch5-regsim.scm"... done
;Value 10: (register simulator loaded)

1 ]=> 
;Loading "ch5-eceval-support.scm"...
;  Loading "ch5-syntax.scm"... done
;... done
;Value: compiled-procedure-env

1 ]=> 
;Loading "ch5-eceval.scm"... done
;Value 11: (explicit control evaluator loaded)

1 ]=> 
(define the-global-environment (setup-environment))
(start eceval)

;Value: the-global-environment

1 ]=> 

;;; EC-Eval input:
(let ((x (cons 1 2)) (y (cons 'a 'b))) 'hello 'world)

(total-pushes = 26 maximum-depth = 10)
;;; EC-Eval value:
world

;;; EC-Eval input:
(let ((x (cons 1 2)) (y (cons 'a 'b))) (cons x y))

(total-pushes = 32 maximum-depth = 10)
;;; EC-Eval value:
((1 . 2) a . b)

;;; EC-Eval input:
(define x -5)

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(cond ((> x 0) x)
      ((= x 0) (display 'zero) 0)
      (else (- x)))

(total-pushes = 27 maximum-depth = 8)
;;; EC-Eval value:
5

;;; EC-Eval input:

{% endhighlight %}


[mit]: https://mitpress.mit.edu/sites/default/files/sicp/code/index.html
