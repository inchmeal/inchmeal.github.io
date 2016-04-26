---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.27"
order: "027"
date: 2016-04-26
---

{% highlight racket linenos %}
#lang sicp

(define (reverse list)
  (define (reverse-iter rs ls)
      (if (null? ls)
          rs
          (reverse-iter
                   (cons
                        (let ((data (car ls)))
                           (if (pair? data)
                                  (reverse data)
                                  data
                           )
                        )  
                        rs
                   )
                   (cdr ls)
          )
      )
  )
  (reverse-iter nil list)
)
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define x (list (list 1 2) (list 3 4)))
> (reverse x)
(mcons (mcons 4 (mcons 3 '())) (mcons (mcons 2 (mcons 1 '())) '()))
> (define x (list 1 (list 2 3) 4 5 (list 6 7) 8))
> (reverse x)
(mcons 8 (mcons (mcons 7 (mcons 6 '())) (mcons 5 (mcons 4 (mcons (mcons 3 (mcons 2 '())) (mcons 1 '()))))))
{% endhighlight %}



