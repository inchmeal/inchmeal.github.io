---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.41"
order: "041"
date: 2016-04-05
---

{% highlight racket linenos %}
(define (double f)
  (lambda (x) (f (f x)))
)
{% endhighlight %}

Now evaluating the statement given:

{% highlight racket linenos %}
> (((double (double double)) inc) 5)
{% endhighlight %}

The call `double double` returns a procedure, lets call this procedure X, that applies double twice to an argument passed to it. 
 
And call to `double (double double)`, return a procedure, lets call this procedure Y, that applies X twice to the argument passed to it.

And the invocation `Y inc`, returns a procedure, lets call it Z, that applies 'X' twice to `inc`. i.e. `(X (X inc))`.
         
Thus now finally the call to `Z 5` is evaluated as follows:
         
{% highlight racket linenos %}
(Z 5)
((X (X inc)) 5)
((double (double (double (double inc))) 5))
{% endhighlight %}

Now we can see that in the innermost call, inc is called twice, than it is doubled thus called 4 times, again it is doubled thus
called 8 times and again it is double thus called 16 times.

Thus thus function will return after calling `inc` 16 times starting with argument 5.

Thus the output is $$ 16+5 = 21 $$.


         
