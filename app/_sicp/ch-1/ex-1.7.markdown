---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.7"
order: "007"
date: 2016-03-30
---

{% highlight racket linenos %}
#lang sicp

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x)
                 x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (square x)
  (* x x))

(define (sqrt x)
  (sqrt-iter 1.0 x))
{% endhighlight %}

For small numbers, specially whose square are themselves less than `0.001` the method `good-enough` is not *good enough* as it will
return true as soon our guess reach close to `0.001` and clearly it wont be correct.
   
For example: `(sqrt 0.00000001)` should return `0.0001` but the procedure returns `0.03125106561775382`.
   
For large numbers, generally computers does not support high precision. Thus the difference between two large numbers which are very close
will still result there difference more than `0.001`, no matter how close they get.
    
Thus the program will go into infinite recursive calls.

After changing the program with new `good-enough` we get:

{% highlight racket linenos %}
#lang sicp

(define (sqrt-iter oldguess newguess x)
  (if (good-enough? oldguess newguess)
      newguess
      (sqrt-iter newguess (improve newguess x)
                 x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? oldguess newguess)
  (< (/ (abs (- oldguess newguess)) oldguess) 0.001))

(define (sqrt x)
  (sqrt-iter 1.0 x x))
{% endhighlight %}


This programs works for small numbers as well as large numbers. Note that in racket I used numbers in decimal form like `100000000000000000.0` or `0.000000001`.
Using fractional or natural numbers takes program much larger time to finish because racket internally uses rational number which end up
generating very large numerators and denominators in the fractions.
