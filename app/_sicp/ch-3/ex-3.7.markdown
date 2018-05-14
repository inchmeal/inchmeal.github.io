---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.7"
order: "007"
date: 2017-12-31 
---

My understanding is that joint account can only be created using the main-account i.e. we can not create another joint account using joint account.

{% highlight racket linenos %}
#lang sicp

(define (make-account balance secretpwd)
    (define (withdraw amount)
      (if (>= balance amount)
          (begin (set! balance (- balance amount))
                 balance)
          "Insufficient funds"))
    (define (deposit amount)
      (set! balance (+ balance amount))
      balance)
  
    (define (operation m)
      (cond ((eq? m 'withdraw) withdraw)
            ((eq? m 'deposit) deposit)
            (else (error "Unknown request -- in operating account"
                         m))))
  
    (define (dispatch pwd m)
      (let ((verified (eq? pwd secretpwd)))
         (if (eq? 'verify m)
             (if verified operation '())
             (if verified
                 (operation m)
                 (error "Invalid Password")))))
  dispatch)

(define (make-joint acct secretpwd jointpwd)
  (let ((operation (acct secretpwd 'verify)))
    (if (null? operation)
        (error "Can not create Join Account - Invalid Main Password")
        (lambda (pwd m)
          (if (eq? pwd jointpwd)
              (operation m)
              (error "Invalid access to joint account"))))))
              
    
{% endhighlight %}

Example:

{% highlight racket linenos %}
> (define acc (make-account 100 'secret-password))
> ((acc 'secret-password 'withdraw) 40)
60
> ((acc 'some-other-password 'deposit) 50)
. . Invalid Password
> (define join-acc
  (make-joint acc 'secret-passwd 'rosebud))
. . Can not create Join Account - Invalid Main Password
> (define join-acc
  (make-joint acc 'secret-password 'rosebud))
> ((join-acc 'rosebud 'deposit) 1000)
1060
> ((acc 'secret-password 'deposit) 0)
1060
> ((join-acc 'rosebd 'deposit) 0) 
. . Invalid access to joint account
> 
> ((join-acc 'rosebud 'withdraw) 100)
960
; Can not create joint using joint account
> (make-joint join-acc 'secret-password 'rosebud)
. . Invalid access to joint account
> 
{% endhighlight %}

