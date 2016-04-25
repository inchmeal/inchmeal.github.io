---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.18"
order: "018"
date: 2016-04-25
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (reverse list)
  (define (reverse-iter rs ls)
      (if (null? ls)
          rs
          (reverse-iter (cons (car ls) rs) (cdr ls))
      )
  )
  (reverse-iter nil list)
)
{% endhighlight %}