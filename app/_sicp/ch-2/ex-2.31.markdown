---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.31"
order: "031"
date: 2016-04-27
---

{% highlight racket linenos %}
#lang sicp

(define (tree-map proc tree)
  (map
      (lambda (x)
         (if (not (pair? x))
             (proc x)
             (tree-map proc x)
         )
      )  
      tree
  )
)

(define (square x) (* x x))

(define (square-tree tree) (tree-map square tree))
{% endhighlight %}

