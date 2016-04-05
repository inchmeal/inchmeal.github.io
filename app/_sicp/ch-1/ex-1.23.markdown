---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.23"
order: "023"
date: 2016-04-02
---

Here I have written code in two ways:

- one is as asked in problem, by writing a function `next-divisor`.
- Without writing any extra function, just adding 2 in every iteration.

First approach:

{% highlight racket linenos %}
 
#lang sicp

(define (smallest-divisor n)
    (find-divisor n 2)
)

(define (find-divisor n test-divisor)
  (cond ((> (square test-divisor) n) n)
        ((divides? test-divisor n) test-divisor)
        (else (find-divisor n (next-divisor test-divisor)))
  )
)

(define (divides? a b)
  (= (remainder b a) 0)
)

(define (next-divisor d)
  (if (= d 2)
      3
      (+ d 2)
  )
)  

(define (prime? n)
  (= n (smallest-divisor n)))

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
     (if (prime? n)
         (report-prime n (- (runtime) st))
         0
     ) 
)

{% endhighlight %}

Second approach:

{% highlight racket linenos %}

#lang sicp

(define (smallest-divisor n)
  (if (even? n)
      2
      (find-divisor n 3)
  )    
)

(define (find-divisor n test-divisor)
  (cond ((> (square test-divisor) n) n)
        ((divides? test-divisor n) test-divisor)
        (else (find-divisor n (+ test-divisor 2)))
  )
)

(define (divides? a b)
  (= (remainder b a) 0)
)

(define (prime? n)
  (= n (smallest-divisor n)))

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
     (if (prime? n)
         (report-prime n (- (runtime) st))
         0
     ) 
)

{% endhighlight %}

Now I will put all the timings from all three approaches in one place:

|---
|Numbers | Orignal approach with no skipping | Skipping even numbers by calling next-divisor | Skipping even numbers directly 
|:-:
| 1009 | 4 | 3 | 2
| 1013 | 4 | 3 | 2
| 1019 | 4 | 3 | 2
| 10007 | 12 | 9 | 7
| 10009 | 26 | 8 | 7
| 10037 | 13 | 7 | 5
| 100003 | 41 | 26 | 20 
| 100019 | 40 | 27 | 19
| 100043 | 40 | 26 | 19
| 1000003 | 157 | 83 | 62
| 1000033 | 126 | 82 | 63
| 1000037 | 127 | 83 | 63
| 10000000000037 | 388727 | 279466 | 194440 
| 10000000000051 | 388108 | 279058 | 192753
| 10000000000099 | 394797 | 304850 | 207065
| 100000000000031 | 1238697 | 8375991 | 6426951 
| 100000000000067 | 1240527 | 8306311 | 6561041 


As we can see clearly that 'next-divisor' function calls make significant extra cost and it increases as number increases. Without
using this function and skipping the even numbers generates prime numbers in almost half of the orignial time as expected.


 


