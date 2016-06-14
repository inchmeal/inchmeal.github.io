---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.48"
order: "048"
date: 2016-05-13
---


{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define (make-segment sg1 sg2)
   (cons sg1 sg2)
)

(define (start-segment sg)
   (car sg)
)

(define (end-segment sg)
   (cdr sg)
)
{% endhighlight %}


Output/Test:
        
{% highlight racket linenos %}
> (define sgmnt (make-segment (make-vect 0 0) (make-vect 1 1)))
> (start-segment sgmnt)
(mcons 0 0)
> (end-segment sgmnt)
(mcons 1 1)
> 
{% endhighlight %}
