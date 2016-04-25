---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.7"
order: "007"
date: 2016-04-22
---

{% highlight racket linenos %}
#lang sicp

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

Sample output:

{% highlight racket linenos %}
> (define intrvl (make-interval -50 -100))
> (display-interval intrvl)
[-100,-50]
{% endhighlight %}
