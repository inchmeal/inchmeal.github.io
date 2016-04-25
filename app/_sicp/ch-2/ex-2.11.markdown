---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.11"
order: "011"
date: 2016-04-23
---

This problem contains so many cases that it and chances to miss something in a case are high. Problem in itself is not difficult but 
needed more focus.

In an effort to improve the readability of the cases, I have commented all the cases corresponding to their conditions.

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (make-interval a b) (cons a b))

(define (lower-bound x) (min (car x) (cdr x)))

(define (upper-bound x) (max (car x) (cdr x)))

(define (mul-interval x y)
  (let ((p1 (* (lower-bound x) (lower-bound y)))
        (p2 (* (lower-bound x) (upper-bound y)))
        (p3 (* (upper-bound x) (lower-bound y)))
        (p4 (* (upper-bound x) (upper-bound y))))
    (make-interval (min p1 p2 p3 p4)
                   (max p1 p2 p3 p4))))

(define (mul-interval-sign x y)
   (let (
          (lx (>= (lower-bound x) 0))
          (ux (>= (upper-bound x) 0))
          (ly (>= (lower-bound y) 0))
          (uy (>= (upper-bound y) 0))
          (vlx (lower-bound x))
          (vux (upper-bound x))
          (vly (lower-bound y))
          (vuy (upper-bound y))
        )
        ;(display lx)
        ;(display ux)
        ;(display ly)
        ;(display uy)
        (cond
               ;[+,+], [+,+] 
               ((and lx ux ly uy)
                                 (make-interval (* vlx vly) (* vux vuy))
               )
               ;[+,+], [-,+] 
               ((and lx ux (not ly) uy)
                                 (make-interval (* vux vly) (* vux vuy))
               )
               ;[+,+], [-,-]
               ((and lx ux (not ly) (not uy))
                                 (make-interval (* vux vly) (* vlx vuy))
               )                
               ;[-,+], [+,+] 
               ((and (not lx) ux ly uy)
                                 (make-interval (* vlx vuy) (* vux vuy))
               )
               ;[-,+], [-,+] 
               ((and (not lx) ux (not ly) uy)
                                 (make-interval (min (* vlx vuy) (* vux vly))
                                                (max (* vlx vly) (* vux vuy))
                                 )
               )                  
               ;[-,+], [-,-]
               ((and (not lx) ux (not ly) (not uy))
                                 (make-interval (* vux vly) (* vlx vly))
               )
               ;[-,-], [+,+] 
               ((and (not lx) (not ux) ly uy)
                                 (make-interval (* vlx vuy) (* vux vly))
               )
               ;[-,-], [-,+] 
               ((and (not lx) (not ux) (not ly) uy)
                                 (make-interval (* vlx vuy) (* vlx vly))
               )
               ;[-,-], [-,-]
               ((and (not lx) (not ux) (not ly) (not uy))          
                                 (make-interval (* vux vuy) (* vlx vly))
               )
               (else (error "Error, this is an unreachbale path"))
         )
    )
)  

(define (equal-interval x y)
       (and (= (lower-bound x) (lower-bound y))
            (= (upper-bound x) (upper-bound y))
       )
)
     
(define (test proc1 proc2 x y)
     (if (equal-interval (proc1 x y) (proc2 x y))        
         (display "Equal")
         (error "Not Equal" (proc1 x y) (proc2 x y))
     )
)  

{% endhighlight %}

I liked the way test case is written in [wiki][wiki] solutions. This question specially is a perfect cases for testing. Thus I have also added
a procedure for test in the above code.

Output of the tests:

{% highlight racket linenos %}
> (test mul-interval mul-interval-sign 
        (make-interval 10 20) (make-interval 30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval 10 20) (make-interval -30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval 10 20) (make-interval -40 -30))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -10 20) (make-interval 30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -10 20) (make-interval -30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -10 20) (make-interval -40 -30))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -10 -20) (make-interval 30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -10 -20) (make-interval -30 40))
Equal
> (test mul-interval mul-interval-sign 
        (make-interval -20 -10) (make-interval -40 -30))
Equal
{% endhighlight %}

[wiki]: http://community.schemewiki.org/?sicp-ex-2.11