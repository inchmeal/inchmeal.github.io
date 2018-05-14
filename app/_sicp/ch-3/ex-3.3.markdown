---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.3"
order: "003"
date: 2017-12-31 
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (make-account balance secretpwd)
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
        (cond ((eq? m 'withdraw) withdraw)
              ((eq? m 'deposit) deposit)
              (else (error "Unknown request -- MAKE-ACCOUNT"
                           m)))
        (error "Invalid Password")))
  dispatch)
{% endhighlight %}

