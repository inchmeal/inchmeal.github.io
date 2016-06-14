---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.44"
order: "044"
date: 2016-05-11
---

{% highlight racket linenos %}

#lang sicp

(#%require sicp-pict)

(define (up-split painter n)
   (if (= n 0)
      painter
      (let (
              (smaller (up-split 
                           painter (- n 1)
                       )
              )
           )
           (below 
                painter 
                (beside smaller smaller)
           )
      )
   )
)

{% endhighlight %}
        