---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.46"
order: "046"
date: 2016-05-13
---

{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define (make-vect x y)
    (cons x y)
)

(define (xcor-vect v) (car v))

(define (ycor-vect v) (cdr v))

(define (add-vect v1 v2)
   (make-vect (+
                 (xcor-vect v1)
                 (xcor-vect v2)
              )
              (+
                 (ycor-vect v1)
                 (ycor-vect v2)
              )
   )
)

(define (sub-vect v1 v2)
   (make-vect (-
                 (xcor-vect v1)
                 (xcor-vect v2)
              )
              (-
                 (ycor-vect v1)
                 (ycor-vect v2)
              )
   )
)

(define (scale-vect v scale)
   (make-vect (*
                 scale
                 (xcor-vect v)
              )
              (*
                 scale
                 (ycor-vect v)
              )
   )
)

{% endhighlight %}

Test/Output:
        
{% highlight racket linenos %}
> (define v1 (make-vect 1 2))
> (define v2 (make-vect 10 20))
> (add-vect v1 v2)
(mcons 11 22)
> (sub-vect v1 v2)
(mcons -9 -18)
> (scale-vect v1 10)
(mcons 10 20)
> 
{% endhighlight %}
        