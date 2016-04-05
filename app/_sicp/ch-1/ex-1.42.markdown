---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.42"
order: "042"
date: 2016-04-05
---

{% highlight racket linenos %}
(define (compose f g)
  (lambda (x) (f (g x)))
)
{% endhighlight %}
