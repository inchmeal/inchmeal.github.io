---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.28"
order: "028"
date: 2016-04-04
---

As mentioned in the problem we need to check in the squaring step if the number that we are squaring is a non-trivial square root of n.
I will paste here again the corresponding part of the problem:
 
> To test the primality of a number n by the Miller-Rabin test, we pick a random number $$a < n $$ and raise a to the $$ (n - 1) $$st power modulo $$ n $$ using the expmod procedure. 
> However, whenever we perform the squaring step in expmod, we check to see if we have discovered a ‘‘nontrivial square root of $$ 1\;modulo \; n $$,’’ that is, a number not equal to 
> $$ 1 $$ or $$ n - 1 $$ whose square is equal to $$ 1\;modulo \; n $$. It is possible to prove that if such a nontrivial square root of 1 exists, then $$ n $$ is not prime. 
 
I have made the corresponding changes while squaring in `expmode` procedure. I have written a new procedure `check` that checks for the
‘‘nontrivial square root of $$ 1\;modulo \; n $$,’’ as described in problem. It uses `let` expression to avoid computing that expression twice.

Also note that if the number is prime than `expmod` process will return 1 as per Miller-Rabin test. Thus for the other case I am returning 0
as also suggested in the book.

I have also modified the carmichael-test procedure and checked all the carmichael-numbers we were given and the procedure correctly returns
false for all these numbers. Also I checked for all prime numbers discovered in previous exercises and test runs as expected.

{% highlight racket linenos %}
#lang sicp
(#%require (only racket/base random))

(define (expmod base exp m)
  (cond ((= exp 0) 1)
        ((even? exp)
            (check (expmod base (/ exp 2) m) m)
        )
        (else
           (remainder (* base (expmod base (- exp 1) m)) m))
  )
)

(define (check n m)
  (let (
          (rs (remainder (square n) m))
       )
       (if (and
                (not (or
                         (= n 1)
                         (= n (- m 1))
                     )
                )
                (= rs 1)
            )                
            0
            rs
       )
  )  
)  

(define (square x) (* x x))

(define (miller-rabin-test n)
  (define (try-it a)
    (= (expmod a (- n 1) n) 1))
  (try-it (+ 1 (random (- n 1)))))

(define (carmichael-test num)
  (define (carmi-iter n a)
     (if (= n a)
         true
         (if (= (expmod a (- n 1) n) 1)
             (carmi-iter n (+ a 1))
             false
         )
     )
  )
  (carmi-iter num 1)
)  
{% endhighlight %}