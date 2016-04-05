---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.29"
order: "029"
date: 2016-04-04
---

We can simply write the procedure following the original integral procedure shown. Notice here that the arguments passed to sum are not
 $$ a $$ and $$ b $$ but the indexes of the terms i.e. 0, 1, 2 ... n.

{% highlight racket linenos %}
#lang sicp

(define (sum term a next b)
  (if
     (> a b)
     0
     (+
        (term a)
        (sum term (next a) next b)
     )
  )
)

(define (cube n) (* n n n))

;integral procedure from book
(define (integral f a b dx)
  (define (add-dx x) (+ x dx))
  (* (sum f (+ a (/ dx 2.0)) add-dx b)
dx))

; simpson integral procedure
(define (simpson-integral f a b n)
    (define (coeff k)
         (cond
             ((or (= k 0) (= k n)) 1)             
             ((even? k) 2)
             (else 4)
         )    
    )

    (let ((h (/ (- b a) n)))
      (define (term k)
           (* (coeff k) (f (+ a (* k h))))
      )

      (*
        (/ h 3)
        (sum term 0 inc n)
      )
    )  
)
{% endhighlight %}

We can see the output of simpson is more accurate than original procedure.

{% highlight racket linenos %}

> (simpson-integral cube 0.0 1.0 100)
0.24999999999999992
> (integral cube 0.0 1.0 0.01)
0.24998750000000042
> (simpson-integral cube 0.0 1.0 1000)
0.2500000000000003
> (integral cube 0.0 1.0 0.001)
0.249999875000001

{% endhighlight %}