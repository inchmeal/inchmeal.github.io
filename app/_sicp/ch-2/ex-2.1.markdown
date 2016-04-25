---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.1"
order: "001"
date: 2016-04-19
---

{% highlight racket linenos %}
#lang sicp

(define (make-rat n d)
  (define (make-rat-aux n d)
    (let (
          (g (gcd n d))
         )
         (cons (/ n g) (/ d g))
    )
  )  
  (if (< d 0)
      (make-rat-aux (- n) (- d))      
      (make-rat-aux n d)
  )
)       

(define (numer x) (car x))
(define (denom x) (cdr x))

(define (print-rat x)
  (newline)
  (display (numer x))
  (display "/")
  (display (denom x))
)

(define (gcd a b)
  (define (gcd-abs a b)
      (if (= b 0)
          a
          (gcd
               b (remainder a b)
          )
      )
  )
  (gcd-abs (abs a) (abs b))
)
{% endhighlight %}

Note that procedure `gcd` is changed to work with negative integers.

Sample output:

{% highlight racket linenos %}
> (print-rat (make-rat -10 -40))

1/4
> (print-rat (make-rat 10 -40))

-1/4
> (print-rat (make-rat -10 40))

-1/4
> (print-rat (make-rat 10 40))

1/4
{% endhighlight %}
