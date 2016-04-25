---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.21"
order: "021"
date: 2016-04-25
---

{% highlight racket linenos %}
#lang sicp

(define (square-list items)
  (if (null? items)
      nil
      (cons (square (car items)) (square-list (cdr items)))
  )
)  

(define (square x) (* x x))  

(define (square-list-by-map items)
   (map square items)
)
{% endhighlight %}

