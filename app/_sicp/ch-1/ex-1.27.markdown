---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.27"
order: "027"
date: 2016-04-02
---

{% highlight racket linenos %} 
#lang sicp

(define (expmod base exp m)
  (cond ((= exp 0) 1)
        ((even? exp)
           (remainder (square (expmod base (/ exp 2) m)) m)
        )
        (else
           (remainder (* base (expmod base (- exp 1) m)) m))
  )
)

(define (square x) (* x x))

(define (carmichael-test num)
  (define (carmi-iter n a)
     (if (= n a)
         true
         (if (= (expmod a n n) a)
             (carmi-iter n (+ a 1))
             false
         )
     )
  )
  (carmi-iter num 1)
)

;> (carmichael-test 561)
;#t
;> (carmichael-test 1105)
;#t
;> (carmichael-test 1729)
;#t
;> (carmichael-test 2465)
;#t
;> (carmichael-test 2821)
;#t
;> (carmichael-test 6601)
;#t

{% endhighlight %}
