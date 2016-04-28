---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.34"
order: "034"
date: 2016-04-27
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

(define (horner-eval x coefficient-sequence)
  (accumulate
        (lambda (this-coeff higher-terms)
              (+ this-coeff (* x higher-terms))
        )        
        0
        coefficient-sequence
  )
)
{% endhighlight %}


Example/Output:

{% highlight racket linenos %}
> (horner-eval 2 (list 1 3 0 5 0 1))

79
{% endhighlight %}


