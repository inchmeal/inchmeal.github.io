---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.60"
order: "060"
date: 2016-06-17
---

Only changes are in `adjoin-set` and `union-set`. Procedure `adjoin-set` have $$ \theta(1) $$ time complexity and procedure `union-set` have $$ \theta(n) $$ time
complexity.

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (adjoin-set x set)
  (cons x set)
)

(define (union-set set1 set2)
  (cond ((null? set1) set2)
        ((null? set2) set1)
        (else (append set1 set2))
  )
)  

{% endhighlight %}

Clearly the preferred places for this representation are those where it is required to collect/write/create the elements of the set most of the times and only rarely we 
check presence of element in the set.
