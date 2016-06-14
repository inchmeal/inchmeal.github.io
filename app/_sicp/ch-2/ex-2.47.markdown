---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.47"
order: "047"
date: 2016-05-13
---

For the first constructor:

{% highlight racket linenos %}
#lang sicp

(define (make-frame origin edge1 edge2)
   (list origin edge1 edge2)
)

(define (origin-frame frame)
   (car frame)
)

(define (edge1-frame frame)
   (car (cdr frame))
)

(define (edge2-frame frame)
   (car (cdr (cdr frame)))
)

{% endhighlight %}

Second Constructor:
        
{% highlight racket linenos %}
#lang sicp

(define (make-frame origin edge1 edge2)
  (cons origin (cons edge1 edge2))
)
  
(define (origin-frame frame)
   (car frame)
)

(define (edge1-frame frame)
   (car (cdr frame))
)

(define (edge2-frame frame)
   (cdr (cdr frame))
)

{% endhighlight %}
        