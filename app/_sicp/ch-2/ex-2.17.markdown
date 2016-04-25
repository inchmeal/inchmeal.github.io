---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.17"
order: "017"
date: 2016-04-25
---

Note that we need to return the last pair, not the last element.

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (last-pair list)
  (if (null? list)
      (error "Error: Empty list")
      (let ((tail (cdr list)))
          (if (null? tail)
              list
              (last-pair (cdr list))
          )
      )
  )    
)
{% endhighlight %}