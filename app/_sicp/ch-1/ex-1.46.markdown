---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.46"
order: "046"
date: 2016-04-05
---

Here is our iterative-improve procedure:

{% highlight racket linenos %}
(define (iterative-improve improve good-enough?)
   (define (iter x)
       (if (good-enough? x)
           x
           (iter (improve x))
       )
   )
   iter
)
{% endhighlight %}


Implementation of `sqrt` using `iterative-improve`:

{% highlight racket linenos %}
(define (sqrt x)
   (
       (iterative-improve
            (lambda (y)
                     (average y (/ x y))
            )   
            (lambda (y)
                     (< (abs (- (square y) x)) 0.001)
            )  
       )
       1.0 ; initial guess
   )
)

; Helper procedures
(define (square x) (* x x))
(define (average a b)
    (/ (+ a b) 2)
)  
{% endhighlight %}

Implementation of `fixed-point` using `iterative-improve`:

{% highlight racket linenos %}
(define tolerance 0.00001)
(define (fixed-point f initial-guess)
  ((iterative-improve  
          f 
          (lambda (x)
                  (< (abs (- x (f x))) tolerance)
          )          
  ) initial-guess)
)
{% endhighlight %}
