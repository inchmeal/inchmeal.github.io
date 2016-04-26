---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.28"
order: "028"
date: 2016-04-26
---

{% highlight racket linenos %}
#lang sicp

(define (fringe l)
    (cond ((null? l) nil)
        ((not (pair? l)) (cons l nil))
        (else (append
                    (fringe (car l))
                    (fringe (cdr l))
              )    
        )
    )
)
{% endhighlight %}
