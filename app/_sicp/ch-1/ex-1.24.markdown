---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.24"
order: "024"
date: 2016-04-02
---

Present implementation of `random` is not under sicp language. So I shall be importing it additionally.
Also, `random` works only on numbers less than `4294967087`, so I created `my-random` using `random`. It is however more
costlier than `random` as it internally calls random twice for numbers beyond integer range.

{% highlight racket linenos %} 
#lang sicp

(#%require (only racket/base random))

(define (expmod base exp m)
  (cond ((= exp 0) 1)
        ((even? exp)
           (remainder (square (expmod base (/ exp 2) m)) m)
        )
        (else
           (remainder (* base (expmod base (- exp 1) m)) m))
  )
)

(define (fermat-test n)
  (define (try-it a)
    (= (expmod a n n) a)
  )
  (try-it (+ 1 (my-random (- n 1))))      
)

(define MAX 10000000)

(define (my-random n)
  (if (< n 4294967087)
      (random n)
      (+ (* (random (quotient n MAX)) MAX) (random (remainder n MAX)))
  )
)  

(define (fast-prime? n times)
  (cond ((= times 0) true)
        ((fermat-test n) (fast-prime? n (- times 1)))
        (else false)
  )
)

(define (square x) (* x x))

(define (report-prime n elapsed-time)
  (newline)
  (display n)
  (display " *** ")
  (display elapsed-time)
  1
)

(define (search-primes start count)
  (define (search-primes-itr mm nn)
    (if (> nn 0)
        (if (> (elapsed-prime-time mm (runtime)) 0)
            (search-primes-itr (+ mm 2) (dec nn))
            (if (even? mm)
                (search-primes-itr (+ mm 1) nn)
                (search-primes-itr (+ mm 2) nn)
            )
        )
        (newline)
    )    
  )
  (search-primes-itr start count)
)

(define (elapsed-prime-time n st)
     (if (fast-prime? n 25)
         (report-prime n (- (runtime) st))
         0
     ) 
)
 
{% endhighlight %}

Now I shall redraw the table from previous exercise including values from this exercise:

|---
|Numbers | Orignal approach with no skipping | Skipping even numbers by calling next-divisor | Skipping even numbers directly | fermat-prime?
|:-:
| 1009 | 4 | 3 | 2 | 521
| 1013 | 4 | 3 | 2 | 541
| 1019 | 4 | 3 | 2 | 561
| 10007 | 12 | 9 | 7 | 661 
| 10009 | 26 | 8 | 7 | 661
| 10037 | 13 | 7 | 5 | 671 
| 100003 | 41 | 26 | 20 | 781 
| 100019 | 40 | 27 | 19 | 801
| 100043 | 40 | 26 | 19 | 811
| 1000003 | 157 | 83 | 62 | 871 
| 1000033 | 126 | 82 | 63 | 861
| 1000037 | 127 | 83 | 63 | 881
| 10000000000037 | 388727 | 279466 | 194440 | 6381 
| 10000000000051 | 388108 | 279058 | 192753 | 6141
| 10000000000099 | 394797 | 304850 | 207065 | 6271
| 100000000000031 | 1238697 | 8375991 | 6426951 | 6971
| 100000000000067 | 1240527 | 8306311 | 6561041 | 7021

As we can see that exponential increments in input size causes only linear changes in processing-time using `fermat-prime`.
Also we can note that for small numbers fermat-prime takes much more time because we are calling random function and trying multiple
times(25). But as input size increases, `fermat-test` is much faster than the linear ones.


