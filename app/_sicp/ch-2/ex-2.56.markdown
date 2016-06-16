---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.56"
order: "056"
date: 2016-05-15
---

{% highlight racket linenos %}
(define (make-exponentiation base exp)
   (cond ((=number? exp 0) 1)
         ((=number? exp 1) base)
         (else (list '^ base exp))
   )     
)

(define (exponentiation? e)
    (and
        (pair? e)
        (eq? (car e) '^)
    )
)  

(define (base exp)
    (cadr exp)
)

(define (exponent exp)
    (caddr exp)
)

(define (deriv exp var)
  (cond ((number? exp) 0)
        ( (variable? exp)
          (if (same-variable? exp var) 1 0)
        )
        ( (sum? exp)
          (make-sum
                 (deriv (addend exp) var)
                 (deriv (augend exp) var)
          )
        )
        ( (product? exp)
          (make-sum
            (make-product
                 (multiplier exp)
                 (deriv (multiplicand exp) var)
            )
            (make-product
                 (deriv (multiplier exp) var)
                 (multiplicand exp)
            )
          )
        )
        ( (exponentiation? exp)
          (make-product
                (make-product
                      (exponent exp)
                      (make-exponentiation (base exp) (- (exponent exp) 1))
                )
                (deriv (base exp) var)
          )     
        ) 
        (else
          (error "unknown expression type -- DERIV" exp)
        )
  )
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
> (display (deriv '(^ (+ x 3) 5) 'x))
(* 5 (^ (+ x 3) 4))
> (display (deriv '(^ (+ x 3) 2) 'x))
(* 2 (+ x 3))
> (display (deriv '(^ (+ x 3) 0) 'x))
0
> (display (deriv '(^ (+ x 3) 1) 'x))
1
> (display (deriv '(^ 3 5) 'x))
0
>
{% endhighlight %}
 