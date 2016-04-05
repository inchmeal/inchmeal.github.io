---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.33"
order: "033"
date: 2016-04-04
---

Procedure for `filtered-accumulate`:

{% highlight racket linenos %}
(define (filtered-accumulate filter combiner null-value term a next b)
  (define (iter a result)
    (if (> a b) result        
        (iter
             (next a)
             (if (filter a)                     
                 (combiner result (term a))
                 result                          
             )
        )
     )
  )
  (iter a null-value)
)
{% endhighlight %}


Here is the procedure to sum squares of prime numbers in the specified range:

{% highlight racket linenos %}
(define (prime-sum a b)
    (filtered-accumulate prime? + 0 square a inc b)
)

(define (square x) (* x x))

(define (prime? n)
  (= n (smallest-divisor n)))

(define (smallest-divisor n)
  (find-divisor n 2))
(define (find-divisor n test-divisor)
  (cond ((> (square test-divisor) n) n)
        ((divides? test-divisor n) test-divisor)
        (else (find-divisor n (+ test-divisor 1)))))
(define (divides? a b)
  (= (remainder b a) 0))
{% endhighlight %}


Procedure to find product of co-primes less than $$ n $$:

{% highlight racket linenos %}
(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))
  )
)

(define (identity x) x)


(define (prod-of-rel-prime n)
   (define (rel-prime? k)
       (= (gcd k n) 1)
   )
   (filtered-accumulate rel-prime? * 1 identity 1 inc (- n 1))
)
{% endhighlight %}


