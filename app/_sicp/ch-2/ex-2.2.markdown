---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.2"
order: "002"
date: 2016-04-19
---

{% highlight racket linenos %}
#lang sicp

(define (midpoint-segment seg)
  (make-point (/
                 (+
                    (x-point (start-segment seg))
                    (x-point (end-segment seg))
                 )
                 2
              )
              (/
                 (+
                    (y-point (start-segment seg))
                    (y-point (end-segment seg))
                 )
                 2
              )
   )
)  

(define (make-segment st end)
        (cons st end)
)

(define (start-segment seg)
  (car seg)
)

(define (end-segment seg)
  (cdr seg)
)

(define (make-point x y)
  (cons x y)
)

(define (x-point point)
  (car point)
)

(define (y-point point)
  (cdr point)
)

(define (print-point p)
  (newline)
  (display "(")
  (display (x-point p))
  (display ",")
  (display (y-point p))
  (display ")")
)
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (print-point (
                midpoint-segment (
                                  make-segment 
                                                (make-point 3 5)
                                                (make-point 7 15)
                                  )
                )
  )             


(5,10) ;output
{% endhighlight %}
