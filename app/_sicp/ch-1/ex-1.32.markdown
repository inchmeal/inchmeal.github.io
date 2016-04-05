---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.32"
order: "032"
date: 2016-04-04
---

Accumulator by Recursive process:

{% highlight racket linenos %}
(define (accumulate combiner null-value term a next b)
  (if
     (> a b)
     null-value
     (combiner
        (term a)
        (accumulate combiner null-value term (next a) next b)
     )
  )
)
{% endhighlight %}


Sum and Product:

{% highlight racket linenos %}  
(define (sum term a next b)
  (accumulate + 0 term a next b)
)

(define (product term a next b)
  (accumulate * 1 term a next b)
)
{% endhighlight %}


Accumulator by Iterative process:

{% highlight racket linenos %}
(define (accumulate combiner null-value term a next b)
  (define (iter a result)
    (if (> a b) result
        (iter (next a) (combiner result (term a)))
     )
  )
  (iter a null-value)
)
{% endhighlight %}


