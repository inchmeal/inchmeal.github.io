---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.5"
order: "005"
date: 2017-12-31 
---

{% highlight racket linenos %}

#lang sicp

(#%require (only racket/base error))

(define (random-in-range low high)
  (let ((range (- high low)))
    (+ low (random range))))

(define (square x) (* x x))

(define (estimate-integral pr x1 x2 y1 y2 trials)
  (let ((rect-area (* (- x2 x1) (- y2 y1))))
    (* (monte-carlo trials pr) rect-area)))
    
(define (circle-test cx cy r)
  (lambda (x y)
          (let ((d2 (+ (square (- x cx)) (square (- y cy))))
                (r2 (square r)))
            (< d2 r2))))
                
(define (estimate-pi trials)
  (let ((x1 -1.0)
        (x2 1.0)
        (y1 -1.0)
        (y2 1.0))
     (let ((unit-circle-test
                 (lambda ()
                         ((circle-test 0.0 0.0 1.0) (random-in-range x1 x2)
                                              (random-in-range y1 y2)))))
       (estimate-integral unit-circle-test x1 x2 y1 y2 trials)))) 
    

(define (monte-carlo trials experiment)
  (define (iter trials-remaining trials-passed)
    (cond ((= trials-remaining 0)
           (/ trials-passed trials))
          ((experiment)
           (iter (- trials-remaining 1) (+ trials-passed 1)))
          (else
           (iter (- trials-remaining 1) trials-passed))))
  (iter trials 0))

{% endhighlight %}

Output:

{% highlight racket linenos %}
> (estimate-pi 100)
2.8
> (estimate-pi 500)
3.128
> (estimate-pi 500)
3.12
> (estimate-pi 1000)
3.104
> (estimate-pi 10000)
3.1248
> (estimate-pi 100000)
3.15444
> (estimate-pi 10000000)
3.1422792
> 
{% endhighlight %}

