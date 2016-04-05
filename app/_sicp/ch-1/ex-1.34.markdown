---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.34"
order: "034"
date: 2016-04-04
---

We are given the following procedure:

{% highlight racket linenos %}
(define (f g)
 (g 2)
)
{% endhighlight %}

When this prcedure is invoked by passing itself as argument, we get following error:

{% highlight racket linenos %}
> ( f f)
. . application: not a procedure;
 expected a procedure that can be applied to arguments
  given: 2
{% endhighlight %}


We can understand this by substituting:

{% highlight racket linenos %}
(f f)
(f 2)
(2 2)
{% endhighlight %}

As we can see in the last statement, interpreter expects a procedure after opening bracket but `2` is not a procedure. 

