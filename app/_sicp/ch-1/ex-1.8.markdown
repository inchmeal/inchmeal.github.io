---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.8"
order: "008"
date: 2016-03-30
---

{% highlight racket linenos %}
#lang sicp

(define (cubert-iter oldguess newguess x)
  (if (good-enough? oldguess newguess)
      newguess
      (cubert-iter newguess (improve newguess x)
                 x)))

(define (improve guess x)
  (/ (+ (/ x (* guess guess)) (* 2 guess)) 3))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? oldguess newguess)
  (< (/ (abs (- oldguess newguess)) oldguess) 0.001))

(define (cubert x)
  (cubert-iter 1.0 x x))
{% endhighlight %}

