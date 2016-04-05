---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.37"
order: "037"
date: 2016-04-04
---

Procedure definition that generates recursive process:

{% highlight racket linenos %}
(define (cont-frac num den k)
    (define (aux c)
        (cond ((> c k) 0)
              (else (/
                      (num c)
                      (+
                         (den c)
                         (aux (inc c))
                      )
                    )
              )
        )
    )
  (aux 1)
)
{% endhighlight %}

Value of $$ k $$ needed to generate $$ \frac 1 { \phi } $$ correct upto 4 decimal places:

{% highlight racket linenos %}
; Correct value: 0.618033988749894848204586834365638117720309179805762862135

> (cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 10)
0.6179775280898876

> (cont-frac (lambda (i) 1.0) (lambda (i) 1.0) 11)
0.6180555555555556

{% endhighlight %}
        
 
        
Procedure definition that generates iterative process:

{% highlight racket linenos %}
(define (cont-frac-itr num den k)
    (define (itr rs c)
        (cond ((= c 0) rs)
              (else
                    (itr
                        (/
                           (num c)
                           (+ (den c) rs)
                        )
                        (dec c)
                    )
              )
        )
    )
  (itr 0 k)
)
{% endhighlight %}
