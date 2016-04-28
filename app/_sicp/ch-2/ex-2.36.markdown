---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.36"
order: "036"
date: 2016-04-28
---

{% highlight racket linenos %}
#lang sicp

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence))
      )
  )
)

(define (accumulate-n op init seqs)
  (if (null? (car seqs))
      nil
      (cons (accumulate op init (map car seqs))
            (accumulate-n op init (map cdr seqs))
      )
  )
)
{% endhighlight %}


Example/Output:

{% highlight racket linenos %}
> (define seqs (list (list 1 2 3) (list 4 5 6) (list 7 8 9) (list 10 11 12)))
> (display (accumulate-n + 0 seqs))
(22 26 30)
> 
{% endhighlight %}


