---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.79"
order: "079"
date: 2016-06-27
---

The changes required in each package is shown below. Added the complete code in the end. 

{% highlight racket linenos %}
;; number package:
(put 'equ? '(scheme-number scheme-number) =)

;; rational package:
(define (equ? x y) 
 (and (= (numer x) (numer y)) (= (denom x) (denom y)))
) 
 
(put 'equ? '(rational rational) equ?)


;; complex package:
(define (equ? z1 z2) 
 (and
     (= (apply-generic 'real-part z1) (apply-generic 'real-part z2))
     (= (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))
 )
) 

(put 'equ? '(complex complex) equ?)

; generic definition
(define (equ? x y)
  (apply-generic 'equ? x y)
)

{% endhighlight %}

Note that in comlex-number, we are using `apply-generic` for comparing real and imaginary parts. This is because complex number is an abstarction built on top of
rectangular and polar packages.

Test/Output:

{% highlight racket linenos %}
>  (define n1 (make-number 5))
>  (define n2 (make-number 5))
>  (define n3 (make-number 6))
> (apply-generic 'equ? n1 n2)
#t
>  (apply-generic 'equ? n1 n3)
#f
>
> (define r1 (make-rational 2 3))
> (define r2 (make-rational 4 6))
> (define r3 (make-rational 3 5))
> (apply-generic 'equ? r1 r2)
#t
> (apply-generic 'equ? r1 r3)
#f
> (define c1 (make-complex-from-real-imag 2 3))
> (define c2 (make-complex-from-real-imag 2 3))
> (define c3 (make-complex-from-real-imag 3 4))
> (apply-generic 'equ? c1 c2) 
#t
> (apply-generic 'equ? c1 c3)
#f
> 
{% endhighlight %}

Complete code:

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

(define (square x) (* x x))

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

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
          (apply proc (map contents args))
          (error
            "No method for these types -- APPLY-GENERIC"
            (list op type-tags))
      )
    )
  )
)



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
  ;equ?
  (put 'equ? '(scheme-number scheme-number) =)
  'done
)

(define (make-number n)
  ((get 'make 'scheme-number) n)
)  

(define (install-rational-package)
  ;; internal procedures
  (define (numer x) (car x))
  (define (denom x) (cdr x))
  (define (make-rat n d)
    (let ((g (gcd n d)))
      (cons (/ n g) (/ d g))))
  (define (add-rat x y)
  (make-rat (+ (* (numer x) (denom y))
                 (* (numer y) (denom x)))
              (* (denom x) (denom y))))
  (define (sub-rat x y)
    (make-rat (- (* (numer x) (denom y))
                 (* (numer y) (denom x)))
              (* (denom x) (denom y))))
  (define (mul-rat x y)
    (make-rat (* (numer x) (numer y))
              (* (denom x) (denom y))))
  (define (div-rat x y)
    (make-rat (* (numer x) (denom y))
              (* (denom x) (numer y))))

  ;; equ?
  (define (equ? x y) 
     (and (= (numer x) (numer y)) (= (denom x) (denom y)))
  ) 
     
  ;; interface to rest of the system
  (define (tag x) (attach-tag 'rational x))
  (put 'add '(rational rational)
       (lambda (x y) (tag (add-rat x y))))
  (put 'sub '(rational rational)
       (lambda (x y) (tag (sub-rat x y))))
  (put 'mul '(rational rational)
       (lambda (x y) (tag (mul-rat x y))))
  (put 'div '(rational rational)
       (lambda (x y) (tag (div-rat x y))))
  (put 'make 'rational
       (lambda (n d) (tag (make-rat n d))))
  (put 'equ? '(rational rational) equ?)
  
  'done
)

(define (make-rational n d)
  ((get 'make 'rational) n d)
)

(define (install-complex-package)
  ;; imported procedures from rectangular and polar packages
  (define (make-from-real-imag x y)
    ((get 'make-from-real-imag 'rectangular) x y))
  (define (make-from-mag-ang r a)
    ((get 'make-from-mag-ang 'polar) r a))
  ;; internal procedures
  (define (add-complex z1 z2)
    (make-from-real-imag (+ (real-part z1) (real-part z2))
                         (+ (imag-part z1) (imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (- (real-part z1) (real-part z2))
                         (- (imag-part z1) (imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (* (magnitude z1) (magnitude z2))
                       (+ (angle z1) (angle z2))))
  (define (div-complex z1 z2)
    (make-from-mag-ang (/ (magnitude z1) (magnitude z2))
                       (- (angle z1) (angle z2))))
  (define (equ? z1 z2) 
     (and
         (= (apply-generic 'real-part z1) (apply-generic 'real-part z2))
         (= (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))
     )
  ) 

  ;; interface to rest of the system
  (define (tag z) (attach-tag 'complex z))
  (put 'add '(complex complex)
       (lambda (z1 z2) (tag (add-complex z1 z2))))
  (put 'sub '(complex complex)
       (lambda (z1 z2) (tag (sub-complex z1 z2))))
  (put 'mul '(complex complex)
       (lambda (z1 z2) (tag (mul-complex z1 z2))))
  (put 'div '(complex complex)
       (lambda (z1 z2) (tag (div-complex z1 z2))))
  (put 'make-from-real-imag 'complex
       (lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'complex
       (lambda (r a) (tag (make-from-mag-ang r a))))
  (put 'equ? '(complex complex) equ?)

  'done
)

(define (install-rectangular-package)
  ;; internal procedures
  (define (real-part z) (car z))
  (define (imag-part z) (cdr z))
  (define (make-from-real-imag x y) (cons x y))
  (define (magnitude z)
    (sqrt (+ (square (real-part z))
             (square (imag-part z)))))
  (define (angle z)
    (atan (imag-part z) (real-part z)))
  (define (make-from-mag-ang r a)
    (cons (* r (cos a)) (* r (sin a))))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'rectangular x))
  (put 'real-part '(rectangular) real-part)
  (put 'imag-part '(rectangular) imag-part)
  (put 'magnitude '(rectangular) magnitude)
  (put 'angle '(rectangular) angle)
  (put 'make-from-real-imag 'rectangular
       (lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'rectangular
       (lambda (r a) (tag (make-from-mag-ang r a))))
'done)
 
(define (install-polar-package)
  ;; internal procedures
  (define (magnitude z) (car z))
 
(define (angle z) (cdr z))
  (define (make-from-mag-ang r a) (cons r a))
  (define (real-part z)
    (* (magnitude z) (cos (angle z))))
  (define (imag-part z)
    (* (magnitude z) (sin (angle z))))
  (define (make-from-real-imag x y)
    (cons (sqrt (+ (square x) (square y)))
          (atan y x)))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'polar x))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
       (lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar
       (lambda (r a) (tag (make-from-mag-ang r a))))
'done)

(define (make-complex-from-real-imag x y)
  ((get 'make-from-real-imag 'complex) x y))
(define (make-complex-from-mag-ang r a)
  ((get 'make-from-mag-ang 'complex) r a))

(define (equ? x y)
  (apply-generic 'equ? x y)
)

(install-rectangular-package)
(install-polar-package)
(install-scheme-number-package)
(install-rational-package)
(install-complex-package)
{% endhighlight %}


