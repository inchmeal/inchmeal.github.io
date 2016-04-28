---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.39"
order: "039"
date: 2016-04-28
---

{% highlight racket linenos %}
#lang sicp

(define (fold-right op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (fold-right op initial (cdr sequence))
      )
  )
)

(define (fold-left op initial sequence)
  (define (iter result rest)
    (if (null? rest)
        result
        (iter (op result (car rest))
              (cdr rest))))
  (iter initial sequence))

(define (reverse-r sequence)
    (fold-right
         (lambda (x y)             
            (append y (list x))
         )
         nil
         sequence
    )
)

(define (reverse-l sequence)
    (fold-left
         (lambda (x y)
                (cons y x)
         )
         nil
         sequence
    )
)
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
> (display (reverse-r (list 1 2 3)))
(3 2 1)
> (display (reverse-l (list 1 2 3)))
(3 2 1)
> 
{% endhighlight %}
