---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.86"
order: "086"
date: 2017-12-21
---

Well, it turned out I missed few bugs in 2.85(which I have not fixed as it is part of this exercise). This exercise is in a way a part of previous exercise. As to complete that exercise complex number can have rational parts too, which was required because of the problems encountered when adding `drop` in that exercise.

Now, in this exercise this was asked explicitly to allow complex numbers with real and imaginary parts. I thought *bingo!*, I have already done it but the part that made me realised - I had left few issues - is that it explicitly asked for operation *sin*, *cos*. Soon I figured that I have not tested my last exercise with operations `div` and `mul` and used only the rectangular implementation of complex numbers. Thus in my test cases - sin and cos never came up!

Now, its just a matter of changing all operations used in rectangular and angular so that they can work fine.

Note that I have not defined `sine`, `cosine` and `arctan` by apply-generic because it can be done without it - just by raising the argument passed to `scheme-number`.

Also, I discovered one more bug in my code - again which should have been discovered earlier but because scheme is *not* static-typed - My implementation of `angle` was wrong as I *forgot* to call div and just passed two arguments - which a static language should have caught as I was passing two arguments where only one is expected. I have left that bug in the previous exercise.

So here goes the complete code:

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

(define (sine x) (sin (contents (raise-to-type 'scheme-number x))))
(define (cosine x) (cos (contents (raise-to-type 'scheme-number x))))
(define (arctan x) (atan (contents (raise-to-type 'scheme-number x)))) 

(define (drop arg)
 (if (has-type-tag? arg)
     (let ((type (type-tag arg)))
       (let ((proc (get-projection type)))
          (if (not (null? proc))
             (let ((projected (proc arg)))
               (let ((raised (raise-to-type type projected)))
                 (if ((get 'equ? (list type type)) (contents raised) (contents arg))
                       (drop projected)
                       arg
                 )
               )
             )                
             arg
          )
       )
     )
     arg
  )
)

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if (not (null? proc))
          (drop (apply proc (map contents args)))            
          (let ((has-same-type
                     (accumulate
                          (lambda (a b) (and a b))
                          #t
                          (map
                             (lambda(x) (equal? (car type-tags) x))
                             (cdr type-tags)
                          )
                     )
               ))
               (let ((highest-type (if has-same-type
                                       (get-parent (car type-tags))
                                       (find-highest-type type-tags)
                                   )
                    ))
                    (if (null? highest-type)
                       (error "Could not find a suitable ancestor" op args)
                       (let ((raised-args (map-until
                                                    '()
                                                    (lambda(arg)
                                                        (raise-to-type highest-type arg)
                                                    )
                                                    args
                                           )
                            ))
                           (if (not (null? raised-args))
                               (apply apply-generic op raised-args)
                               (error "Error. No suitable raise method found to raise all types into " highest-type " for raising types " type-tags)
                           )
                       )
                    )     
              )
          )
      )
   )
 )
)  

(define *type-table* (make-hash))

(define (put-parent type parent)
   (let ((already-set (hash-ref *type-table* (list 'parent type) '())))
     (if (null? already-set)
         (hash-set! *type-table*  (list 'parent type) parent)
         (error "Parent already defined for :" type " parent currently *present* is " already-set " the passed parent " parent)
     )
   )
)

(define (get-parent type)
  (hash-ref *type-table* (list 'parent type) '())
)

(define (put-child type child)
   (let ((already-set (hash-ref *type-table* (list 'child type) '())))
     (if (null? already-set)
         (hash-set! *type-table*  (list 'child type) child)
         (error "Child already defined for :" type " child currently *present* is " already-set " the passed child " child)
     )
   )
)

(define (get-child type)
  (hash-ref *type-table* (list 'child type) '())
)


(define *cast-table* (make-hash))

(define (put-raise type proc)
   (let ((already-set (hash-ref *cast-table* (list 'raise type) '())))
     (if (null? already-set)
         (hash-set! *cast-table*  (list 'raise type) proc)
         (error "Raise is already defined for :" type)
     )
   )
)

(define (get-raise type)
  (hash-ref *cast-table* (list 'raise type) '())
)

(define (put-projection type proc)
   (let ((already-set (hash-ref *cast-table* (list 'project type) '())))
     (if (null? already-set)
         (hash-set! *cast-table*  (list 'project type) proc)
         (error "Project is already defined for :" type)
     )
   )
)

(define (get-projection type)
  (hash-ref *cast-table* (list 'project type) '())
)

(define (get-ancestors type)
  (if (null? type)
      '()
       (cons type (get-ancestors (get-parent type)))
  )
)

(define (contains item item-list)
      (fold-left
         (lambda(result new)
             (or result (equal? item new))
         )
         #f
         item-list
      )
)
     

(define (find-highest-type type-tags)
  (let ((ancestors-of-each-type (map get-ancestors type-tags)))
     (let ((smallest-ancestor-set
               (accumulate (lambda(new remaining)
                               (if (< (size new) (size remaining))
                                   new
                                   remaining
                               )
                           )
                           (car ancestors-of-each-type)
                           ancestors-of-each-type
               )
          ))
          (define (find-type-present-in-each-ancestors type-list)
              (if (null? type-list)
                  '()
                  (let ((found (accumulate
                                      (lambda (a b) (and a b))
                                      #t
                                      (map
                                          (lambda(ancestors) (contains (car type-list) ancestors))
                                          ancestors-of-each-type)
                               )
                        ))
                        (if found
                            (car type-list)
                            (find-type-present-in-each-ancestors (cdr type-list))
                        )
                  )
              )
          )
          (find-type-present-in-each-ancestors smallest-ancestor-set)
       )
    )
)

(define (raise-to-type type arg)
     (cond ((null? arg) '())
           ((equal? type (type-tag arg)) arg)
           (else (let ((proc (get-raise (type-tag arg))))
                   (if (null? proc)
                       '()
                       (raise-to-type type (proc arg))
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

(define (fold-left op initial sequence)
  (define (iter result rest)
    (if (null? rest)
        result
        (iter (op result (car rest))
              (cdr rest))))
  (iter initial sequence))


(define (raise n)
  ((get-raise (type-tag n)) n)
)

;use mul as x can be rational-number also
(define (square x) (mul x x))

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

(define (has-type-tag? datum) 
  (cond 
        ((number? datum) #t)
        ((pair? datum)
                (contains (car datum) '(complex rational))
        )
        (else #f)
  )
)

(define (type-tag datum) 
  (cond 
        ((number? datum) 'scheme-number)
        ((pair? datum) (car datum)) 
        (else (error "Bad tagged datum -- TYPE-TAG" datum))
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
          (accumulate op initial (cdr sequence)))
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

  ; raise operation
  (put-raise 'scheme-number (lambda(x) (make-complex-from-real-imag (contents x) 0)))
  ; set parent
  (put-parent 'scheme-number 'complex)  

  ;a simple way to convert from real to rational is by multiplying and dividing by a
  ; constant but it will only be correct to 4 places of decimal(4 zeroes in 10000)
  (define multiplier 10000)
  ; project operation
  (put-projection 'scheme-number (lambda(c) (make-rational (floor (* (contents c) multiplier)) multiplier)))
  ; set child
  (put-child 'scheme-number 'rational)

  
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
  ; comment this to check the example suggested above for tree structure support
  (put 'sub '(rational rational)
       (lambda (x y) (tag (sub-rat x y))))
  (put 'mul '(rational rational)
       (lambda (x y) (tag (mul-rat x y))))
  (put 'div '(rational rational)
       (lambda (x y) (tag (div-rat x y))))
  (put 'make 'rational
       (lambda (n d) (tag (make-rat n d))))
  (put 'equ? '(rational rational) equ?)

  ; raise operation
  (put-raise 'rational (lambda(r) (make-number (/ (numer (contents r)) (denom (contents r))))))
  ; set parent
  (put-parent 'rational 'scheme-number)
  
  ; uncomment this and comment above raise to make rational as child of complex instead of number
  ; (put-raise 'rational (lambda(r) (make-complex-from-real-imag (/ (numer (contents r)) (denom (contents r))) 0)))
  ; uncomment this and comment above raise to make rational as child of complex instead of number
  ; (put-parent 'rational 'complex)
  
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
    (make-from-real-imag (add (apply-generic 'real-part z1) (apply-generic 'real-part z2))
                         (add (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))))
  (define (sub-complex z1 z2)
    (make-from-real-imag (sub (apply-generic 'real-part z1) (apply-generic 'real-part z2))
                         (sub (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))))
  (define (mul-complex z1 z2)
    (make-from-mag-ang (mul (apply-generic 'magnitude z1) (apply-generic 'magnitude z2))
                       (add (apply-generic 'angle z1) (apply-generic 'angle z2))))
  (define (div-complex z1 z2)
    (make-from-mag-ang (div (apply-generic 'magnitude z1) (apply-generic 'magnitude z2))
                       (sub (apply-generic 'angle z1) (apply-generic 'angle z2))))
  (define (equ? z1 z2) 
    (and
     (apply-generic 'equ? (apply-generic 'real-part z1) (apply-generic 'real-part z2))
     (apply-generic 'equ? (apply-generic 'imag-part z1) (apply-generic 'imag-part z2))
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

  ; raise operation is not defined for complex
  ; parent not defined for complex

  ; project operation
  (put-projection
          'complex
           (lambda(c)
               ;note that we can not call apply-generic here because this method is used by drop and drop is used in generic
               ;thus it can go into a loop
               ;so need to take care of type-tags here only
               ; c is complex number(includes tag complex) cc is rectangular/angular including the type-tag
               ; Note that, the repurcurssions of drop lead to the point that real and imag can be any number except number
               ; thus raising it to the real number type (because apart from complex numbers, my understanding is any number can be raised to real number
               (let ((cc (contents c)))
                     (raise-to-type 'scheme-number ((get 'real-part (list (type-tag cc))) (contents cc)))
               )
           )
  )
  ; set child
  (put-child 'complex 'scheme-number)
  
  'done
)

(define (sqrt x)
  ;note the magic of apply-generic
  ;it will convert that rational into real because expt is only defined in
  ;scheme-number package and rational can be raised to scheme-number
  (exp x (make-rational 1 2))
)
        

(define (install-rectangular-package)
  ;; internal procedures
  (define (real-part z) (car z))
  (define (imag-part z) (cdr z))
  (define (make-from-real-imag x y) (cons x y))
  (define (magnitude z)
    (sqrt (add (square (real-part z))
             (square (imag-part z)))))
  (define (angle z)
    (arctan (div (imag-part z) (real-part z))))
  (define (make-from-mag-ang r a)
    (cons (mul r (cosine a)) (mul r (sine a))))
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
    (mul (magnitude z) (cosine (angle z))))
  (define (imag-part z)
    (mul (magnitude z) (sine (angle z))))
  (define (make-from-real-imag x y)
    (cons (sqrt (add (square x) (square y)))
          (arctan (div y x))))
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

(define (exp x y) (apply-generic 'exp x y))
(define (add x y) (apply-generic 'add x y))
(define (sub x y) (apply-generic 'sub x y))
(define (mul x y) (apply-generic 'mul x y))
(define (div x y) (apply-generic 'div x y))


(install-rectangular-package)
(install-polar-package)
(install-scheme-number-package)
(install-rational-package)
(install-complex-package)

{% endhighlight %}

Examples/Output:

{% highlight racket linenos %}
> (display (mul (make-complex-from-real-imag 2 3) (make-complex-from-real-imag 3 4)))
(complex polar 18.027756377319946 . 1.9100889412489412)
> (display (mul (make-complex-from-real-imag 2.5 3) (make-complex-from-real-imag 3 4)))
(complex polar 19.525624189766635 . 1.8033532685998055)
> (display (mul (make-complex-from-real-imag (make-rational 5 2) 3) (make-complex-from-real-imag 3 4)))
(complex polar 19.525624189766635 . 1.8033532685998055)
> (display (add (make-complex-from-real-imag 2.5 -9) (make-complex-from-real-imag 1 9)))
(rational 7.0 . 2.0)
; add 0 converts to rectangular
> (display (add (make-number 0) (mul (make-complex-from-real-imag (make-rational 5 2) 3) (make-complex-from-real-imag 3 4))))
(complex rectangular -4.4999999999999964 rational 19.0 . 1.0)
> (display (add (make-rational 3 4) (mul (make-complex-from-real-imag (make-rational 5 2) 3) (make-complex-from-real-imag 3 4))))
(complex rectangular -3.7499999999999964 rational 19.0 . 1.0)
{% endhighlight %}

