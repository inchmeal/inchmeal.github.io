---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.4"
order: "004"
date: 2018-03-06 
---

#### Special form implementation

The logic for both *and* and *or* is same except that what we do for 'true' case in *and*, we do for the 'false' case in *or*.

So, I implemented a common procedure.

One thing to note is the returned values by `and` and `or` expressions. Currently these values are the internal values of the language. Or we are using the same primitives as of the implementation language for boolean case too!

It may then occur that we should add boolean check in `self-evaluating?`, but this is not so because we have defined variables(in book), true and false. So instead of using #t, or #f we can get our code work using true and false.

How difficult it would be to implement our own numbers/booleans instead of using from the implementing language? I tried for boolean to use 'yes and 'no but it turned out it will take some more thinking so abandoned the effort.

Let's first check the output(note all the possible inputs including and/or with 0 arguments & nesting):

(for short circuiting, we should not even evaluate the remaining part even if evaluating it causes error - eg (and false t) - should return false even if t is not defined - see last output example.)

{% highlight scheme linenos %}
1 ]=> 

;;; M-Eval input:
(and)

;;; M-Eval value:
#t

;;; M-Eval input:
(or)

;;; M-Eval value:
#f

;;; M-Eval input:
(and true)

;;; M-Eval value:
#t

;;; M-Eval input:
(and false)

;;; M-Eval value:
#f

;;; M-Eval input:
(and 1 2 3)

;;; M-Eval value:
3

;;; M-Eval input:
(and false false 3)

;;; M-Eval value:
#f

;;; M-Eval input:
(or 'a true false)

;;; M-Eval value:
a

;;; M-Eval input:
(and (and true true) (or false true))

;;; M-Eval value:
#t

;;; M-Eval input:
(or (and false false) (or false false) (and true))

;;; M-Eval value:
#t

;;; M-Eval input:
(or (and false) 'x)

;;; M-Eval value:
x

;;; M-Eval input:
(and (or true) 'x)

;;; M-Eval value:
x

;;; M-Eval input:
(and (or false) false)

;;; M-Eval value:
#f

;;; M-Eval input:
(define x 37)

;;; M-Eval value:
ok

;;; M-Eval input:
(and true x)

;;; M-Eval value:
37

;;; M-Eval input:
(and false x)

;;; M-Eval value:
#f

;;; M-Eval input:
(and false t)

;;; M-Eval value:
#f

;;; M-Eval input:
(and true t)
;Unbound variable t

{% endhighlight %}

Here are the corresponding changes:

{% highlight scheme linenos %}
(define (eval exp env)
  (cond ((self-evaluating? exp) exp)
        ((variable? exp) (lookup-variable-value exp env))
        ((quoted? exp) (text-of-quotation exp))
        ((assignment? exp) (eval-assignment exp env))
        ((definition? exp) (eval-definition exp env))
        ((if? exp) (eval-if exp env))
        ((lambda? exp)
         (make-procedure (lambda-parameters exp)
                         (lambda-body exp)
                         env))
        ((begin? exp) 
         (eval-sequence (begin-actions exp) env))
        ((cond? exp) (eval (cond->if exp) env))
		((logical? exp) (eval-logical exp env))
        ((application? exp)
         (apply (eval (operator exp) env)
                (list-of-values (operands exp) env)))
        (else
         (error "Unknown expression type -- EVAL" exp))))

(define (boolean-impl val)
  (if (true? val) val false))

(define (eval-logical exp env)
  (define (iter predicates test?)
	(let ((first (eval (first-exp predicates) env)))
	  (if (test? first)
		  (if (last-exp? predicates)
			  (boolean-impl first)
			  (iter (rest-exps predicates) test?))
		  (boolean-impl first))))
  
  (let ((test? (if (and? exp) true? false?))
		(predicates (logical-predicates exp)))
	(if (null? predicates)
		(boolean-impl (test? '()))
		(iter predicates test?))))

(define (and? exp) (tagged-list? exp 'and))

(define (or? exp) (tagged-list? exp 'or))

(define (logical? exp) (or (and? exp) (or? exp)))

(define (logical-predicates exp) (cdr exp))

{% endhighlight %}

------------

#### Derived form implementation

Similar to special form implementation, here also, I have combined the logic in a single procedure:

(Add this in eval: `((cond? exp) (eval (cond->if exp) env))`)

{% highlight scheme linenos %}
(define (and? exp) (tagged-list? exp 'and))

(define (or? exp) (tagged-list? exp 'or))

(define (logical? exp) (or (and? exp) (or? exp)))

(define (logical-predicates exp) (cdr exp))

(define (logical->if exp)
  (expand-predicates (and? exp) (logical-predicates exp)))

(define (expand-predicates and-type preds)
  (if (null? preds)
	  (if and-type 'true 'false)
	  (let ((first (car preds))
			(rest (cdr preds)))
		(let ((rest-exp (if (null? rest)
							first
							(expand-predicates and-type rest))))
		  (if and-type
			  (make-if first rest-exp 'false)
			  (make-if first first rest-exp))))))
{% endhighlight %}

This also works exactly like the previous section(short-circuiting/nesting). I have tested it for same inputs. 

Few things to notice:

- I used `'true` and `'false` here instead of implementing language true and false values as opposed to the special form version. Why? Because after conversion, the syntax should conform to our language. We are not evaluating here but just converting to special form!
- As an effect of above point, no eval calls in the conversion procedures.
- Note that `first` is used two times. Thus it will be evaluated twice! This has two problems: (i) Efficiency (ii) If an expression has any side effect(assignment), we have more trouble!

We can avoid this using memoization but I have skipped this probably I think this may get covered later in the book itself.
