---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.59"
order: "059"
date: 2016-06-17
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (union-set set1 set2)
  (cond ((null? set1) set2)
        ((null? set2) set1)
        ((element-of-set? (car set1) set2) (union-set (cdr set1) set2))
        (else (cons (car set1) (union-set (cdr set1) set2)))
  )
)  

(define (element-of-set? x set)
  (cond ((null? set) false)
        ((equal? x (car set)) true)
        (else (element-of-set? x (cdr set)))
  )
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
> (display (union-set (list 1 0 5 2 9) (list 10 1 19 5 50)))
(0 2 9 10 1 19 5 50)
> 
{% endhighlight %}

 