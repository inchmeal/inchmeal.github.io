---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.81"
order: "081"
date: 2016-06-28
---

**(a)** It will go into an infinite loop of recursive calls.

**(b)** Program is *almost* correct and will work fine. A minor issue is when an *operation* is not defined, it unnecessarily tries for coercion. In this case
        program should directly report the error that *operation* is not found. Here coercion is not required because a procedure that works on two same types
        should be available in *op* table.       
        Note that we may need to convert both of the arguments to super-type, if the operation is defined for super-types. But here in this exercise it is not required.

**(c)**
        
{% highlight racket linenos %}
(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if (not (null? proc))
          (apply proc (map contents args))
          (if (= (length args) 2)
             (let
                 (
                   (type1 (car type-tags))
                   (type2 (cadr type-tags))
                   (a1 (car args))
                   (a2 (cadr args))
                 )
                 (if (equal? type1 type2)
                     (error "No method for these *same* types" (list op type-tags))
                     (let
                         (
                           (t1->t2 (get-coercion type1 type2))
                           (t2->t1 (get-coercion type2 type1))
                         )
                         (cond
                              (t1->t2 (apply-generic op (t1->t2 a1) a2))
                              (t2->t1 (apply-generic op a1 (t2->t1 a2)))
                              (else   (error "No method for these types" (list op type-tags)))                              
                         )
                     )
                 )
                 (error "No method for these types" (list op type-tags))
             )
          )
       )
    )
  )
)        
{% endhighlight %}

Test/Output:
        
{% highlight racket linenos %}
> (exp (make-complex-from-real-imag 2 3) (make-complex-from-real-imag 1 2))
. . No method for these *same* types {exp {complex complex}}
> (exp (make-number 2) (make-number 3))
8
> 
{% endhighlight %}

Here is the complete code, with the changes suggested in exercise:
         
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

(define *coercion-table* (make-hash))

(define (put-coercion op type proc)
  (hash-set! *coercion-table* (list op type) proc)
)

(define (get-coercion op type)
  (hash-ref *coercion-table* (list op type) '())
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
      (if (not (null? proc))
          (apply proc (map contents args))
          (if (= (length args) 2)
             (let
                 (
                   (type1 (car type-tags))
                   (type2 (cadr type-tags))
                   (a1 (car args))
                   (a2 (cadr args))
                 )
                 (if (equal? type1 type2)
                     (error "No method for these *same* types" (list op type-tags))
                     (let
                         (
                           (t1->t2 (get-coercion type1 type2))
                           (t2->t1 (get-coercion type2 type1))
                         )
                         (cond
                              (t1->t2 (apply-generic op (t1->t2 a1) a2))
                              (t2->t1 (apply-generic op a1 (t2->t1 a2)))
                              (else   (error "No method for these types" (list op type-tags)))                              
                         )
                     )
                 )
                 (error "No method for these types" (list op type-tags))
             )
          )
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
  
  ;; following added to Scheme-number package
  (put 'exp '(scheme-number scheme-number)
     (lambda (x y) (tag (expt x y)))) ; using primitive expt

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
     (and (= (numer x) (numer y)) (= (denom x) (denom y)))) 
     
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

(define (scheme-number->complex n)
  (make-complex-from-real-imag (contents n) 0)
)
(put-coercion 'scheme-number 'complex scheme-number->complex)

;; added by Louis Reasoner
(define (scheme-number->scheme-number n) n)
(define (complex->complex z) z)
(put-coercion 'scheme-number 'scheme-number
              scheme-number->scheme-number)
(put-coercion 'complex 'complex complex->complex)

(define (exp x y) (apply-generic 'exp x y))

(install-rectangular-package)
(install-polar-package)
(install-scheme-number-package)
(install-rational-package)
(install-complex-package)
{% endhighlight %}
         
        