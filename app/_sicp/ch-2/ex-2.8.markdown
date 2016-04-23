---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.8"
order: "008"
date: 2016-04-22
---

Alyssa initializes lower-bound with the minum possible value lower-bound can get while carrying put the corresponding arithmetic operation.
Thus we can extend the same to write `sub-interval`:

{% highlight racket linenos %}
#lang sicp

(define (sub-interval x y)
  (make-interval (- (lower-bound x) (upper-bound y))
                 (- (upper-bound x) (lower-bound y)))
)

(define (make-interval a b) (cons a b))

(define (lower-bound x) (min (car x) (cdr x)))

(define (upper-bound x) (max (car x) (cdr x)))

(define (display-interval x) 
   (display "[") 
   (display (lower-bound x)) 
   (display ",") 
   (display (upper-bound x)) 
   (display "]")
   (newline) 
)

{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define intrvl (make-interval -50 -100))
> (display-interval intrvl)
[-100,-50]
> (define intrvl2 (make-interval -10 -40))
> (display-interval intrvl2)
[-40,-10]
> (display-interval (sub-interval intrvl intrvl2))
[-90,-10]
{% endhighlight %}
