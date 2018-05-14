---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.13"
order: "013"
date: 2018-03-09 
---

I am somewhat confused with the naming of *special form* `make-unbound!`. Till now we used **make-** prefix to *build* a special form like we used `make-if` to convert `cond` to `if`.

So, I am hoping that author meant to build a *special form* `make-unbound` like we have `define` and `if` instead of `make-if` kind of procedure.

With this assumption, I think it would be better to follow the earlier naming, so I will be calling this *special form* as `unbound!`. Please tell what do you think? Did I missed anything?

I think one who can bind can also unbind. When one defines a variable it ofcourse gets defined in the current environment, so when one unbinds a variable it must also be for the current environment.

Apart from ownership, other things that are not specified in the problem is about the implementation - whether we just unset the point thus leaving a *hole* where variable is stored or should we also *shift* all the variables to not leave any *holes*.

I think both implmentation have pros and cons. As of now I have just *unset* the point thus leaving a hole. Perhaps a better strategy is maintaining a count of holes and when they reaches a threshold then shifting or creating a new without holes.

Here goes my solution:

(I built on top of the previous solutions. In last exercise I build `find-pair` it uses the same procedure.)

{% highlight scheme linenos %}
;;add following line in eval:
((unbound!? exp) (eval-unbound! exp env))

(define (unbound!? exp)
  (tagged-list? exp 'unbound!))

(define (unbound!-variable-name exp)
  (if (symbol? (cadr exp))
	  (cadr exp)
	  (error "Unbound variable name is not a symbol" exp)))

(define (eval-unbound! exp env)
  (unbound-variable! (unbound!-variable-name exp) env))

(define (unbound-variable! var env)
  (let ((pair (find-pair var env)))
	(if pair
		(begin (set-car! pair '()) (set-cdr! pair '()))
		(error "Unbound variable" var))))
{% endhighlight %}

Now, a small test:

{% highlight scheme linenos %}
;;; M-Eval input:
(define x 5)

;;; M-Eval value:
ok

;;; M-Eval input:
x

;;; M-Eval value:
5

;;; M-Eval input:
(unbound! x)

;;; M-Eval value:
#!unspecific

;;; M-Eval input:
x
;Unbound variable x

{% endhighlight %}
