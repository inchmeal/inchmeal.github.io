---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.10"
order: "010"
date: 2016-04-22
---

{% highlight racket linenos %}
(define (div-interval x y) 
   (if (and (<= (lower-bound y) 0) (>= (upper-bound y) 0)) 
       (error "Error: interval span contains 0 :" y) 
       (mul-interval
                   x  
                   (make-interval
                               (/ 1. (upper-bound y)) 
                               (/ 1. (lower-bound y))
                   )
       )
   )
)
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define I1 (make-interval 1 5))
>  (define I2 (make-interval -5 2))
> (div-interval I1 I2)
. . Error: interval span contains 0 : {-5 . 2}
{% endhighlight %}