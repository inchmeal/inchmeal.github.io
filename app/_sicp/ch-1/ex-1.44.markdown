---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.44"
order: "044"
date: 2016-04-05
---

Here goes our smoothing function:

{% highlight racket linenos %}
(define (smooth f)
  (define (average a b c)
    (/ (+ a b c) 2)
  )
  (lambda (x) (average (f (- x dx)) (f x) (f (+ x dx)) ))
)
{% endhighlight %}


Procedure for nth-smoothing:

{% highlight racket linenos %}
(define (nth-smooth f n)
     ((repeated smooth n) f)
)
{% endhighlight %}

Note that it we may also think of doing nth-smoothing instead in the following way:

{% highlight racket linenos %}
(define (smooth-nth f n)
     (repeated (smooth f) n)
)
{% endhighlight %}


I think it is not correct as this is repeating `(smooth f)` n times. As to quote from the exercise:
 
> It is sometimes valuable to repeatedly smooth a function (that is, smooth the smoothed function, and so on) 
> to obtained the n-fold smoothed function.
  
We need to do smoothing of the smoothed function n times.  