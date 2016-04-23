---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.6"
order: "006"
date: 2016-04-22
---

We are given these two procedures:

{% highlight racket linenos %}
(define zero (lambda (f) (lambda (x) x)))

(define (add-1 n)
  (lambda (f) (lambda (x) (f ((n f) x)))))
{% endhighlight %}

The procedure `zero` accepts an argument `f` and returns another procedure `(lambda (x) x)` which returns whatever is passed to it.
Thus procedure `zero` accepts an argument `f` and returns an identity procedure.

Now lets find `one` by expanding `(add-1 zero)` using substitution:

{% highlight racket linenos %}
(add-1 zero)
(lambda (f) (lambda (x) (f ((zero f) x)))))
{% endhighlight %} 

It seems like we got stuck here but one more detailed look in last statement reveals that `zero f` can also be expanded using 
substitution. Thus the call `(zero f)` can be expanded into `(lambda (x) x)` which is clearly an identity function i.e. it returns
whatever is passed to it. It follows that the invocation `((zero f) x)` returns `x`. Thus substituting `x` inplace of  `((zero f) x)`
in the above statement, we get:

{% highlight racket linenos %}
(lambda (f) (lambda (x) (f x))))
{% endhighlight %} 

This procedure, similar to `zero`, accepts an argument `f`. But unlike `zero`, it returns a procedure that accepts argument `x` and applies `f` to this 
argument. In case of `zero` the procedure returned does not apply `f` to its argument.

It seems like that `zero` means applying `f` to argument, 0 times and `one` means applying `f` to argument, 1 times.
  
Now again we follow the same process to compute `two` by expanding `(add-1 one)`:  
 
{% highlight racket linenos %}
(add-1 one)
(lambda (f) (lambda (x) (f ((one f) x)))))
{% endhighlight %} 

Lets expand this part `((one f) x)` of the above statement. Clearly by the definition of `one`, &nbsp; invocation: `(one f)` returns a procedure that
accepts an argument, say a(to avoid conflict with above x), and applies `f` to this argument and returns the result.
Thus `((one f) x)` means applying `f` to `x` once i.e. `(f x)`. Thus `((one f) x)` can be substituted with `(f x)` in the above
statement:

{% highlight racket linenos %}
(lambda (f) (lambda (x) (f (f x)))))
{% endhighlight %} 

It is exactly what we guessed i.e. the procedure `two` accepts `f` and returns another procedure that accepts an argument `x` and returns
the result of applying `f` **twice** to the argument `x`.

We can take an example also to verify that procedure `zero` means applying `f` to `x` $$ 0 $$ times and similarly `one` means 
applying `f` to `x` $$ 1 $$ times and so on:

{% highlight racket linenos %}
> ((zero inc) 500)
500
> ((one inc) 500)
501
> ((two inc) 500)
502
> ((zero dec) 500)
500
> ((one dec) 500)
499
> ((two dec) 500)
498
{% endhighlight %}


After understanding this, we can try to make sense of the procedure `add-1`:
 
{% highlight racket linenos %}
(define (add-1 n)
  (lambda (f) (lambda (x) (f ((n f) x)))))
{% endhighlight %}

Suppose that `n` is a procedure that accepts an argument `f'` and returns another procedure that accepts an argument `x'` and returns 
the result of applying `f'` to `x'`, $$ p $$ number of times.

Now if we pass this procedure `n` to `add-1`, we get the procedure:

{% highlight racket linenos %}
(lambda (f) (lambda (x) (f ((n f) x)))))
{% endhighlight %}

Now we can easily understand the invocation `((n f) x)` in the above procedure. Clearly `(n f)`  returns a procedure that accepts an argument `x'` and returns 
the result of applying `f` to `x'`, $$ p $$ number of times. Thus `((n f) x)` will result in apllying `f` to `x`, $$ p $$ number of times.
 
Now the result of  `((n f) x)` is again passed as an argument to `f`. Thus we get applying `f` to `x`, total: $$ p + 1 $$ number of times.
 
Thus effectively if procedure `n` applies `f` to `x`, $$ p $$ times then `add-1` applies `f` to `x`, total: $$ p + 1 $$ times.

Now we can easily code for procedure `+`, which accepts procedures `m` and `n` and returns a procedure that takes argument `f` and
returns another procedure that takes `x` as argument and returns the result of applying `f` to `x` $$ q + p $$ times, where $$ p $$
is the number of times `n` applies `f` to `x` and $$ q $$ is the number of times `m` applies `f` to `x`.
 
{% highlight racket linenos %}
(define (+ m n)
     (lambda (f) (lambda (x) ((m f) ((n f) x))))
)
{% endhighlight %}
 
Lets say $$ r_i $$ means the result of applying `f` to `x` $$ i $$ times. Thus `((n f) x)` returns $$ r_p $$. Now this result is passed
  to `(m f)`, thus `f` is applied to `r_p` $$ q $$ times. Thus we get $$ r_{p+q} $$.
  
We can check our results:

{% highlight racket linenos %}
> (define four (+ two two))
> ((four inc) 500)
504
> (define otherzero (+ zero zero))
> ((otherzero inc) 500)
500
> (define onepluszero (+ zero one))
> ((onepluszero inc) 500)
501
> (define eight (+ four four))
> ((eight inc) 500)
508
{% endhighlight %}
  
