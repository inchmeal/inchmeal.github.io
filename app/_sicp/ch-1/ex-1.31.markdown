---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.31"
order: "031"
date: 2016-04-04
---

This can easily be done by following the definition of sum.

Recursive process:

{% highlight racket linenos %}
#lang sicp

(define (product term a next b)
  (if
     (> a b)
     1
     (*
        (term a)
        (product term (next a) next b)
     )
  )
)
{% endhighlight %}

Iterative Process:

{% highlight racket linenos %}

(define (product-it term a next b)
  (define (iter a result)
    (if (> a b) result
        (iter (next a) (* result (term a)))
     )
  )
  (iter a 1)
)

{% endhighlight %}

Factorial using the above product procedure(n is number of terms):

{% highlight racket linenos %}

(define (identity x) x)

(define (factorial n)
  (product-it identity 1 inc n)
)
{% endhighlight %}

Function for computing pi:

{% highlight racket linenos %}
(define (pi n)
  (define (num k)
    (cond 
          ((even? k) (+ k 2))
          (else (+ k 3))
    )
  )
  (define (den k)
    (cond 
          ((even? k) (+ k 3))
          (else (+ k 2))
    )
  )
  (define (term k) (/ (num k) (den k)))

  (* 4.0 (product term 0 inc n))
)
{% endhighlight %}

