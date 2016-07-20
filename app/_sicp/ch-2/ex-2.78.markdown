---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.78"
order: "078"
date: 2016-06-26
---

I have included the complete program so that it can be tested/executed easily.

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

; helper procedures
(define *op-table* (make-hash))

(define (put op type proc)
  (hash-set! *op-table* (list op type) proc)
)

(define (get op type)
  (hash-ref *op-table* (list op type) '())
)

(define (attach-tag type-tag contents) 
   (if (number? contents) 
       contents 
       (cons type-tag contents)
   )
) 

; procedures implemented as per the requirement of exercise  
(define (type-tag datum) 
   (cond ((number? datum) 'scheme-number)
         ((pair? datum) (car datum)) 
         (error "Bad tagged datum -- TYPE-TAG" datum)
   )
)
  
(define (contents datum) 
   (cond ((number? datum) datum) 
         ((pair? datum) (cdr datum)) 
         (error "Bad tagged datum -- CONTENTS" datum)
   )
)

;remaining procedures
(define (install-scheme-number-package)
  (define (tag x)
    (attach-tag 'scheme-number x))
  (put 'add '(scheme-number scheme-number)
       (lambda (x y) (tag (+ x y))))
  (put 'sub '(scheme-number scheme-number)
       (lambda (x y) (tag (- x y))))
  (put 'mul '(scheme-number scheme-number)
       (lambda (x y) (tag (* x y))))
  (put 'div '(scheme-number scheme-number)
       (lambda (x y) (tag (/ x y))))
  (put 'make 'scheme-number
       (lambda (x) (tag x)))
  'done
)

(install-scheme-number-package)

(define (make-number n)
  ((get 'make 'scheme-number) n)
)  

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))

    (let ((proc (get op type-tags)))
      (if proc
          (apply proc (map contents args))
          (error
            "No method for these types -- APPLY-GENERIC"
            (list op type-tags))))))
{% endhighlight %}
 
I shall first add the output generated without the changes in `apply-tag`, `tag` or `contents`:
 
{% highlight racket linenos %}
> (display (make-number 5))
(scheme-number 5)
> (apply-generic 'add 5 10)
(scheme-number 15)
> (apply-generic 'mul 5 10)
(scheme-number 50)
> 
{% endhighlight %}
 

Now, lets see the output after the changes:

{% highlight racket linenos %}
> (make-number 5)
5
> (display (make-number 5))
5
> (apply-generic 'add 5 10)
15
> (apply-generic 'mul 5 10)
50
> 
{% endhighlight %}


 
