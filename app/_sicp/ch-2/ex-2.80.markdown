---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.80"
order: "080"
date: 2016-06-27
---

This is almost similar to the previous exercise. The changes required in each package is shown below.

{% highlight racket linenos %}
;; number package:
(put '=zero? '(scheme-number scheme-number) (lambda (x) (= x 0)))

;; rational package:
(define (=zero? x) 
  (= (numer x) 0)
)
 
(put '=zero? '(rational) =zero?)

;; complex package:
(define (=zero? z) 
 (and
     (= (apply-generic 'real-part z) 0)
     (= (apply-generic 'imag-part z) 0)
 )
)

(put '=zero? '(complex) =zero?)

; generic definition
(define (=zero? x)
  (apply-generic '=zero? x)
)

{% endhighlight %}
