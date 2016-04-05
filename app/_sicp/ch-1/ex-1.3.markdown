---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.3"
order: "003"
date: 2016-03-29
---

{% highlight racket linenos %}
#lang sicp

(define (sum-of-sqr-of-two-lrgr-numbers x y z)
    (cond ((and (< x y) (< x z)) (sum-of-sqr y z))
          ((and (< y x) (< y z)) (sum-of-sqr x z))
          (else (sum-of-sqr x y))
    )
)

(define (sum-of-sqr x y)
    (+ (* x x) (* y y))
)
{% endhighlight %}