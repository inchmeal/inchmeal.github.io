---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.45"
order: "045"
date: 2016-05-13
---

{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define (split align1 align2)
  (lambda (painter n)
    (if (= n 0)
      painter
      (let (
              (smaller (
                         (split
                             align1 align2
                         )
                         painter (- n 1)
                      )
              )
           )
           (align1
                painter
                (align2 smaller smaller)
           )
      )
    )
  )  
)

{% endhighlight %}
        