---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.23"
order: "023"
date: 2016-04-25
---

{% highlight racket linenos %}
#lang sicp

(define (for-each proc l) 
   (cond 
        ((null? l) true) 
        (else
             (proc (car l)) 
             (for-each proc (cdr l))
        )
   )
)
{% endhighlight %}

Note that here, `cond` is used instead of `if` because in "else" part it is required to execute two statements. This cant be done
 using `if`.

