---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.20"
order: "020"
date: 2016-04-25
---

{% highlight racket linenos %}
#lang sicp

(define (same-parity x . rem-list)
     (define (collect rem rs l)
         (cond ((null? l)
                       (reverse rs)
               )
               ((= (remainder (car l) 2) rem)
                       (collect rem (cons (car l) rs) (cdr l))
               )
               (else
                       (collect rem rs (cdr l))
               )
         )
     )
     (collect (remainder x 2) (list x) rem-list)
)
{% endhighlight %}

Note that we need to reverse the list in end to get the required result.

Here is another implementation which will not require reversing the list:

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (same-parity x . rem-list)
     (define (collect rem l)
         (cond ((null? l)
                       nil
               )
               ((= (remainder (car l) 2) rem)
                       (cons (car l) (collect rem (cdr l)))
               )
               (else
                       (collect rem (cdr l))
               )
         )
     )
     (cons x (collect (remainder x 2) rem-list))
)
{% endhighlight %}

Note that in first implementation `collect` is iterative but in latter it is recursive.
