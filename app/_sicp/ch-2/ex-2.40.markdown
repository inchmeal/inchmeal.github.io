---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.40"
order: "040"
date: 2016-04-28
---

Code for generating *unique-pairs*:

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
              (cdr rest)
        )
    )
  )
  (iter initial sequence)
)



(define (flatmap proc seq)
  (fold-right append nil (map proc seq))
)

(define (enumerate-interval i j)
  (if (> i j)
      nil
      (cons i (enumerate-interval (+ i 1) j))
  )
)  

(define (unique-pairs n)
   (flatmap
       (lambda (i)
          (map
              (lambda (j)
                (list j i)
              )
              (enumerate-interval 1 (- i 1))
          )
       )
       (enumerate-interval 1 n)
   )
)
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
>  (display (unique-pairs 4))
((2 1) (3 1) (3 2) (4 1) (4 2) (4 3))
>  (display (unique-pairs 8))
((2 1) (3 1) (3 2) (4 1) (4 2) (4 3) (5 1) (5 2) (5 3) (5 4) (6 1) (6 2) (6 3) (6 4) (6 5) 
             (7 1) (7 2) (7 3) (7 4) (7 5) (7 6) (8 1) (8 2) (8 3) (8 4) (8 5) (8 6) (8 7))

{% endhighlight %}


Using `unique-pairs` in procedure `prime-sum-pairs`:

{% highlight racket linenos %}
(define (prime-sum-pairs n)
  (map make-pair-sum
       (filter prime-sum?
               (unique-pairs n)
       )
  )
)

{% endhighlight %}

