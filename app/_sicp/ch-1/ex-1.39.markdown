---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.39"
order: "039"
date: 2016-04-04
---

Procedure:

{% highlight racket linenos %}
(define (tan-cf x n)
    (let ((num-const (* -1 x x)))
      (define (num k) (if (= k 1) x num-const))
      (define (den k) (- (* 2 k) 1))
      (cont-frac-itr num den n)
    )        
)
{% endhighlight %}


Sample output:

{% highlight racket linenos %}
(define pi (/ 22.0 7))

> (tan-cf (/ pi 4) 10)
; 1.0006324445845896

> (tan-cf 0 10)
; 0
{% endhighlight %}

