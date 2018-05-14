---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.16"
order: "016"
date: 2018-03-09 
---

#### (a)

{% highlight scheme linenos %}
(define (lookup-variable-value var env)
  (let ((pair (find-pair var env)))
	(if pair 
		(if (eq? (cdr pair) '*unassigned*)
			(error "Variable is unassigned!")
			(cdr pair))
		(error "Unbound variable" var))))
{% endhighlight %}

#### (b)

The `fold-right` accumulates results in a list which contains 2 things: 

- list of variables to be used in let definition eg ((a '*unassigned*) (b '*unassigned)) etc.
- list of the all the statements in the proc-body with `define` replaced with `set!`.

Note that once we got this result, we check if there are any definitions found? If no then we return the procedure body without any modification else we return transformed let expression. 

I think we should do this because it makes logical sense to not convert when there are no definitions but it also has an interesting implication that if we do not do this then it leads to infinite loop of conversions!

Next thing to note:

The order of `set!` expression matters! and can not be simply put at the beginning of `let`. See the last example in the output. It's implicit in the book because there is no point that we create `(let ((a '*unassigned*)) (set! a <exp1>) ... )` instead of `(let ((a <exp1>)) ... )`. Check the last example which would not have worked as expected if we simply put `set!` in the beginning.

Then what is the point of moving definitions on top when they are only going to be evaluated by our simulator sequentially?

I think the answer is we may need to implement an evaluator in a different probably non-sequential way for eg one which does multiple passes(which happens generally with static languages) or may be to speedup the process we might parallelize some evaluator tasks...

Trivial mistakes made when writing this code:

- A funny mistake! Declared a parameter `new` in `lambda(new rem)` and coded the remaining `lambda` "thinking" that I named it `exp` instead of `new`. And simulator seemed to work fine as every program I have thrown at it worked fine!

  The only problem was its *too good to be true*. I am not such a brilliant coder that every thing worked without a single glitch in first iteration!
  
  A *dry execution* revealed that I am not using `exp` instead of `new` But then how things are working just fine!
  
  Well, `exp` is an exponential procedure from mit scheme. Ok, thats my mistake but how come my programs are getting evaluated correctly! Well, the check mentioned above which does not do any conversion when no `define` are found explains the rest :)
  
- Using single quoted '*unassigned* - The problem is we need a quote in the generated syntax! But if there is only one quote then generated syntax(for let) won't contain any quote! And our eval tries to access it thinking of it as a variable! Got it? Why then only single quote works in part(a)? :)

- I was using `cons` initially instead of `list` while creating `let` variable definition in this line: `(let ((var-def (list (definition-variable new) ''*unassigned*))`. The problem is when we read input every expression comes as a list - even if it contains 2 elements.

{% highlight scheme linenos %}
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
		  ;;put let in list bec apply expects it a list
		  (list (make-let (car result)
						  (cadr result))))))
{% endhighlight %}

#### (c)

I think `make-procedure` is better place to install it. because if we install it in `procedure-body` selector, then it can lead to multiple re-computation every time `procedure-body` is accessed. So here goes the installation code:

{% highlight scheme linenos %}
(define (make-procedure parameters body env)
  (list 'procedure parameters (scan-out-defines body) env))
{% endhighlight %}

---------------

**Output:**

{% highlight scheme linenos %}
;;; M-Eval input:
(define (dummy) (define a 10) a (define b 20) (+ a b))

;;; M-Eval value:
ok

;;; M-Eval input:
(dummy)

;;; M-Eval value:
30

;;; M-Eval input:
(define (fib n)
  (let fib-iter ((a 1)
                 (b 0)
                 (count n))
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1)))))

;;; M-Eval value:
ok

;;; M-Eval input:
(fib 10)

;;; M-Eval value:
55

;;; M-Eval input:
(define (dummy2) (define a 10) (+ 10 20) (define b (+ a 100)) (define c b) c)

;;; M-Eval value:
ok

;;; M-Eval input:
(dummy2)

;;; M-Eval value:
110

;;; M-Eval input:
(define (dummy3) (define a 10) (define b c) (define c 50) c)

;;; M-Eval value:
ok

;;; M-Eval input:
(dummy3)
;Variable is unassigned!

;;; M-Eval input:
(define (dummy4) (define a 10) (set! a 30) (define b a) b)

;;; M-Eval value:
ok

;;; M-Eval input:
(dummy4)

;;; M-Eval value:
30
;;; will return 10 if set!(generated by transform, not to be confused with `(set! a 30)`) were added at the beginning.
{% endhighlight %}
