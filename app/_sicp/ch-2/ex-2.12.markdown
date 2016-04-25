---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.12"
order: "012"
date: 2016-04-23
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (make-center-percent c p)
  (let ((width (/ (* c p) 100)))
    (make-interval (- c width) (+ c width))
  )
)

(define (percent-tolerance x) 
   (let (
           (center (/ (+ (upper-bound x) (lower-bound x)) 2.0)) 
           (width (/ (- (upper-bound x) (lower-bound x)) 2.0))
        ) 
        (* (/ width center) 100)
   )
)

(define (make-center-width c w)
  (make-interval (- c w) (+ c w)))
(define (center i)
  (/ (+ (lower-bound i) (upper-bound i)) 2))
(define (width i)
  (/ (- (upper-bound i) (lower-bound i)) 2))
  
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
> (define intvl (make-center-percent 100 10))
> (display-interval intvl)
[90,110]
> (percent-tolerance intvl)
10.0
> (define intvl (make-center-percent 500 15))
> (display-interval intvl)
[425,575]
{% endhighlight %}
