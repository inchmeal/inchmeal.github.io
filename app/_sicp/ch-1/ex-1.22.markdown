---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.22"
order: "022"
date: 2016-04-02
---

I have changed the code slightly for printing numbers in easier way. The complete code looks as follows:

{% highlight racket linenos %}

#lang sicp

(define (smallest-divisor n)
  (find-divisor n 2))
(define (find-divisor n test-divisor)
  (cond ((> (square test-divisor) n) n)
        ((divides? test-divisor n) test-divisor)
        (else (find-divisor n (+ test-divisor 1)))))
(define (divides? a b)
  (= (remainder b a) 0))

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


Output on multiple invocations is as follows:

{% highlight racket linenos %}

> (search-primes 100 5)
101 *** 2
103 *** 3
107 *** 2

; avg: 2.33 

> (search-primes 1000 3)
1009 *** 4
1013 *** 4
1019 *** 4

; avg: 4
; prev_avg * sqrt 10 = 7.36

> (search-primes 10000 3)
10007 *** 12
10009 *** 26
10037 *** 13

; avg: 17
; prev_avg * sqrt 10 = 12.64


> (search-primes 100000 3)
100003 *** 41
100019 *** 40
100043 *** 40

; avg: 40.03
; prev_avg * sqrt 10 = 53.72

> (search-primes 1000000 3)
1000003 *** 157
1000033 *** 126
1000037 *** 127

; avg: 136.66
; prev_avg * sqrt 10 = 126.49 

> (search-primes 10000000 3)
10000019 *** 349
10000079 *** 436
10000103 *** 398

; avg: 394.33
; prev_avg * sqrt 10 = 431.84 

> (search-primes 100000000 3)
100000007 *** 1248
100000037 *** 1136
100000039 *** 1288

; avg: 1224
; prev_avg * sqrt 10 =  1246.08

> (search-primes 1000000000 3)
1000000007 *** 3937
1000000009 *** 3860
1000000021 *** 3866

; avg: 3887.66
; prev_avg * sqrt 10 = 3867.84 

> (search-primes 10000000000 3)
10000000019 *** 12264
10000000033 *** 12119
10000000061 *** 12120

; avg: 12167.66
; prev_avg * sqrt 10 =  12285.00

> (search-primes 100000000000 3)
100000000003 *** 39317
100000000019 *** 40547
100000000057 *** 39256

; avg: 39706.66
; prev_avg * sqrt 10 = 38449.80  

> (search-primes 1000000000000 3)
1000000000039 *** 122881
1000000000061 *** 123508
1000000000063 *** 123451

; avg: 123280 
; prev_avg * sqrt 10 = 125473.04 

> (search-primes 10000000000000 3)
10000000000037 *** 388727
10000000000051 *** 388108
10000000000099 *** 394797

; avg: 390544
; prev_avg * sqrt 10 = 389564.8 

> (search-primes 100000000000000 3)
100000000000031 *** 1238697
100000000000067 *** 1240527
100000000000097 *** 1231886

; avg: 1237036.66
; prev_avg * sqrt 10 = 1234119.04 

> (search-primes 1000000000000000 3)

1000000000000037 *** 4022782
1000000000000091 *** 4036198
1000000000000159 *** 4013268

; avg: 4024082.66
; prev_avg * sqrt 10 = 3909035.84

; lets try last example with five more zeroes than the previous example.
; clearly this time should come about prev_avg * sqrt 100000
  
> (search-primes 100000000000000000000 3)

100000000000000000039 *** 5964178266
  
; as it took too much time, i will not go for further primes. lets consider this only as avg: 5964178266
; prev_avg * sqrt 100000 = 1236145670.96 (note here we are using 100000 and not 10 like in last cases)
; clearly here actual time taken is much larger than the expected value.

; as it takes too much time

; this takes 

{% endhighlight %}


As we can see above numbers are almost inline with our calculations. There can be multiple reasons for these small variations:

- Operations like multiplication/addition on very large numbers may take more time compared to small numbers.
- For small numbers time taken in loading and initialization of programs may take more time as compared to actual process.
- Garbage collector may also take some time and halt the program in between depending on the interpreter.
- For humongous numbers, eg i tried with 21 trailing zeros, and program is taking huge time and for this case the difference
  between expected and actual time taken is significant(almost 5 times in the eg). The reason can be that numbers that can
  need more than 64 bits for storage will take much more time on system of 64bits.
  