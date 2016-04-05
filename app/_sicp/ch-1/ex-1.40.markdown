---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.40"
order: "040"
date: 2016-04-05
---

{% highlight racket linenos %}
(define (cubic a b c)
      (define (cube x) (* x x x))
      (define (square x) (* x x))
      (lambda (x) (+ (cube x) (* a (square x)) (* b x) c))
)
{% endhighlight %}
