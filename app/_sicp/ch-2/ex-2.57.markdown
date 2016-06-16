---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.57"
order: "057"
date: 2016-05-15
---

We can just change procedures `augend` and `multiplicand`. Its interesting to see that how abstraction takes care of the rest.

{% highlight racket linenos %}
(define (augend s)
  (if (null? (cdddr s))
      (caddr s)
      (cons '+ (cddr s))
  )
)  

(define (multiplicand p)
  (if (null? (cdddr p))
      (caddr p)
      (cons '* (cddr p))
  )
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
> (display (deriv '(* x y (+ x 3)) 'x))
(+ (* x y) (* y (+ x 3)))
> 
{% endhighlight %}
 