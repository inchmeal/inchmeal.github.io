---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.26"
order: "026"
date: 2018-03-15 
---

Ben want to say that as an special form we can implement `unless` just like we implemented `if`. Similar to the implementation of `if` where we evaluate either consequent or alternative depending on the result of evaluation of predicate. Similarly we can implement `unless` in applicative order language.

Alyssa's point was also true that special forms can not be passed as procedures to other procedures. When we pass `unless` or `if` as arguments, then these arguments will be evaluated as `operands` by invoking `(eval 'if)`. Now, we can check easily that at this point, `eval` will think of `if` as a name and tries to lookup for this name in the environment!

----

Well, I can not come up with a good use case.

Every time I tried to come up with a use case, it can be solved in a different equally simple or even more simpler way and without any effect on performance.

Initially i felt that Alyssa is making quite a good point and we might need it but now I think such case is quite rare.


It's quite easy to implement derived form for `unless`. Since it is not mentioned, I am assuming that, Unlike `if`, `unless` won't be used only with two arguments i.e. like `(unless <c> <u>)` but will only be used like `(unless <c> <u> <e>)`.

{% highlight scheme linenos %}
(define (unless? expr) (tagged-list? expr 'unless))

(define (unless-condition expr) (cadr expr)) 
(define (unless-usual expr) (caddr expr)) 
(define (unless-exceptional expr) (cadddr expr)) 
  
(define (unless->if expr) 
  (make-if (unless-condition expr)
		   (unless-exceptional expr)
		   (unless-usual expr)
		   )) 
{% endhighlight %}
