---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.4"
order: "004"
date: 2017-12-31 
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (make-account balance secretpwd)
  (let ((times 0))
   (define (withdraw amount)
     (if (>= balance amount)
         (begin (set! balance (- balance amount))
                balance)
         "Insufficient funds"))
   (define (deposit amount)
     (set! balance (+ balance amount))
     balance)
   (define (dispatch pwd m)
     (if (eq? secretpwd pwd)
         (begin (set! times 0)
           (cond ((eq? m 'withdraw) withdraw)
               ((eq? m 'deposit) deposit)
               (else (error "Unknown request -- MAKE-ACCOUNT"
                            m))))
         (if (> times 6)
             (begin (call-the-cops) (error "Some error happend. Please wait..."))
             (begin (set! times (+ times 1))
                    (error "Invalid Password")))))
  dispatch))

(define (call-the-cops)
  (error "Cops coming!"))
{% endhighlight %}

