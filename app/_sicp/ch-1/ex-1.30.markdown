---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.30"
order: "030"
date: 2016-04-04
---

{% highlight racket linenos %}
(define (sum term a next b)
  (define (iter a result)
    (if (> a b) result
        (iter (next a) (+ result (term a)))
     )
  )
  (iter a 0)
)
{% endhighlight %}