---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.82"
order: "082"
date: 2017-12-19
---

Well, this is an interesting procedure and took me some type to get it working. Mainly I got stuck with calling `apply-generic` which I was assuming will work like Java(sorry :)), i.e. it can take list also for the variable number of arguments. It turns out that it was not accepting list for variable number of parameters/arguments(turning the list into list of list - causing it difficult to debug). The solution is to use `apply`.

I also created an auxillary procedure `map-until` which works like `map` but returns when it first encounters a given *until-val*(after applying the *proc*).

Another thing to note is - I have added check so that procedure `apply-generic` wont go into infinite recursion - which can happen if all the arguments are of same type and there is no operation *op* is available in the op-table.

The last part of the problem - Consider the case that we have an operation defined say `pow` for rational numbers, now if we pass two numbers - then ideally we would expect that both numbers are coerce into rational numbers and then `pow` is applied but our implementation does not support this.

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))


(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (define (coerce types)            
      (if (null? types)
          (error "No methods found")
          (let ((to-type (car types)))
            (let ((coerced-args
                     (map-until
                         '()
                          (lambda(arg)
                              (let ((from-type (type-tag arg)))
                                 (if (equal? to-type from-type)
                                     arg   
                                     (let ((coerce-proc (get-coercion from-type to-type)))
                                       (if (null? coerce-proc) '() (coerce-proc arg))
                                     )   
                                 )
                              )
                          )  
                          args
                     )
                 ))                  
                 (if (equal? (size coerced-args) (size args))
                       (apply apply-generic op coerced-args)
                       (coerce (cdr types))
                 )
             )
           )
       )
    )
    (let ((proc (get op type-tags)))
      (if (not (null? proc))
          (apply proc (map contents args))
          (if (accumulate
               (lambda (a b) (and a b))
               #t
               (map
                (lambda(x) (equal? (car type-tags) x))
                (cdr type-tags)))
              (error "No method found for *same* types" (list op type-tags))
              (coerce type-tags)      
              )
          )
      )
    )
  )

(define (map-until until-val proc args)
   (if (null? args)
       '()
       (let ((arg (car args)))
           (let ((marg (proc arg)))
             (if (equal? marg until-val)
                 '()
                 (cons marg (map-until until-val proc (cdr args)))
             )
           )
      )
  )
)



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

(define (filter predicate sequence)
  (cond ((null? sequence) nil)
        ((predicate (car sequence))
         (cons (car sequence)
               (filter predicate (cdr sequence))))
        (else (filter predicate (cdr sequence)))))

(define (size list)
  (if (null? list) 0 (+ 1 (size (cdr list)))))

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence)))))


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
    (make-from-real-imag (+ (apply-generic 'real-part z1) (apply-generic 'real-part z2))
                         (+ (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (- (apply-generic 'real-part z1) (apply-generic 'real-part z2))
                         (- (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (* (apply-generic 'magnitude z1) (apply-generic 'magnitude z2))
                       (+ (apply-generic 'angle z1) (apply-generic 'angle z2))))
  (define (div-complex z1 z2)
    (make-from-mag-ang (/ (apply-generic 'magnitude z1) (apply-generic 'magnitude z2))
                       (- (apply-generic 'angle z1) (apply-generic 'angle z2))))
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
(define (add x y) (apply-generic 'add x y))
(define (sub x y) (apply-generic 'sub x y))


(install-rectangular-package)
(install-polar-package)
(install-scheme-number-package)
(install-rational-package)
(install-complex-package)
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (add (make-number 50000) (make-complex-from-real-imag 2 3))
(mcons 'complex (mcons 'rectangular (mcons 50002 3)))
> (display (add (make-number 50000) (make-complex-from-real-imag 2 3)))
(complex rectangular 50002 . 3)
> (display (add (make-number 50000) (make-number 2000)))
52000
> (display (add (make-complex-from-real-imag 50000 70000) (make-complex-from-real-imag 2 3)))
(complex rectangular 50002 . 70003)
> (display (exp (make-number 5) (make-number 2)))
25
> (display (exp (make-complex-from-real-imag 50000 70000) (make-complex-from-real-imag 2 3)))
. . No method found for *same* types {exp {complex complex}}
> 
{% endhighlight %}

