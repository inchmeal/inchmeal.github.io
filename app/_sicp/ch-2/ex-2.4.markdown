---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.4"
order: "004"
date: 2016-04-20
---

Lets first define procedure `cdr` and also test by invoking the procedures with an example.  

{% highlight racket linenos %}
#lang sicp

(define (cons x y)
  (lambda (m) (m x y)))
(define (car z)
  (z (lambda (p q) p)))
(define (cdr z)
  (z (lambda (p q) q)))

(define pair (cons 3 5))
(car pair)
; 3
(cdr pair)
; 5
{% endhighlight %} 

A we can see output is correct. Lets verify this using substitution for the invocation `(cdr pair)` in example above:

{% highlight racket linenos %}
(cdr pair)
(pair (lambda (p q) q))
((lambda (m) (m 3 5))) (lambda (p q) q))
((lambda (p q) q) 3 5)
5
{% endhighlight %} 

Similarly it can be verified for procedure `cdr`.


