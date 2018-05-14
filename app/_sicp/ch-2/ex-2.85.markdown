---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.85"
order: "085"
date: 2017-12-21
---

Creating 'projection' is similar to creating 'raise' operation. Just need to set procedures in the respective packages. 'drop' is simple to implement. But as soon as I put 'drop' in 'apply-generic' the trouble started which took me quite some time debugging. Here are the problems that I faced after putting 'drop':

Note: I am using only 3 types in my hierarchy: *rational -> scheme-number(real number) -> 'complex*. Update: Later, in ex-2.88, I have added the integer package too.

- Even drop itself stopped working! Not only 'apply-generic' but direct calls to 'drop' not working. Reason was 'drop' is using 'equ?'. When it was called for 'complex type the 'equ?' calls 'equ?' again to compare real and imaginary part. So 'real-part is called using `apply-generic`. That means drop is called on the 'real-part returned by the procedure. Now our drop, drops this to rationa-number.Thus the 'equ of complex number *should call* 'equ of rational numbers to compare the real and imag parts. But it was using `=`. So changed this call to call 'equ using `apply-generic`.

- Now since 'equ is also using `apply-generic` that means `drop` is evoked on the result of 'equ. Thus `drop` is called on boolean!. And to add to the trouble there was a bug in my `type-tag` which is silently ignoring the error when `(type-tag <boolean>)` or any other non-typed argument is used. This is the reason why I think that static typed languages are better. Well, I fixed the `type-tag` and also created a proc `has-type-tag?` and `drop` first checks if that is true only then it tries to *drop*.

- Now the next problem happens as I try operation `add` to complex numbers. The problem is that now since drop is getting called on 'real-part the real and imag part of complex numbers can be rational too! So I can not directly add two complex numbers by adding their real and imag parts. But now, 'add' should be used instead on '+'. Thus replaced all the operations +,-,\*,/ with add,sub,mul, and div.

- Well thats it!

Initially I was thinking that its not a good idea that the procedures that are used by `apply-generic` should themselves be invoked using apply-generic(Eg: raise and projection). Because it was causing circular dependency and may go into infinite recursion. Now after implementing this procedure - and as per the requirement of this exercise operation 'equ can not be avoided to implement and 'equ can not work without `apply-generic` - that helped me in understanding that it `apply-generic` can also internally use itself as long as we are clear how things are working. In case of drop the recursion stops as `drop` *drops* the type to last-type possible! 

So, I think now raise and projection can also be used with 'apply-generic' - something that I avoided for the sake of circular dependency. Another thing to wonder here is: Did I evade complexity or enhanced it by creating new table for raise/project operations? I think I should do it only with the old table but this exercise has already taken a lot of time. Probably will try later if I revisit sicp.

So here goes the complete code:

{% highlight racket linenos %}

#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

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

Example/Output:

{% highlight racket linenos %}
> (display (add (make-complex-from-real-imag 2.5 -9) (make-complex-from-real-imag 1 9)))
(rational 7.0 . 2.0)
> (find-highest-type (map type-tag (list (make-number 50000) (make-complex-from-real-imag 2 3))))
'complex
> (display (add (make-complex-from-real-imag 2.5 -9) (make-complex-from-real-imag 1 9)))
(rational 7.0 . 2.0)
> (display (add (make-complex-from-real-imag 2.5 -9) (make-complex-from-real-imag 100 20)))
(complex rectangular (rational 205.0 . 2.0) rational 11 . 1)
> (display (add (make-number 50000) (make-complex-from-real-imag 2 3)))

(complex rectangular (rational 50002 . 1) rational 3 . 1)
> (display (add (make-rational 1 5) (make-complex-from-real-imag 2 3)))
(complex rectangular (rational 11 . 5) rational 3 . 1)
> (exp (make-number 2) (make-number 3))
(mcons 'rational (mcons 8 1))
> (display (exp (make-number 2) (make-number 3)))
(rational 8 . 1)
> (display (exp (make-rational 1 2) (make-number -1)))
(rational 2 . 1)
> (exp (make-rational 1 2) (make-number -1))
(mcons 'rational (mcons 2 1))
> (display (exp (make-complex-from-real-imag 1 2) (make-number 3)))
;This error is expected because exp is not defined for complex numbers.
. . Could not find a suitable ancestor exp ((complex rectangular 1 . 2) (complex rectangular 3 . 0
))
> (display (exp (make-rational 25 100) (make-rational 1 2)))
(rational 1 . 2)
> (display (sub (make-rational 7 2) (add (make-complex-from-real-imag 2.5 -9) (make-complex-from-real-imag 1 9))))
(rational 0.0 . 1.0)
> (display (mul (make-complex-from-real-imag 2.5 3) (make-complex-from-real-imag 3 4)))
(complex polar 19.525624189766635 . 1.8033532685998055)
> 
{% endhighlight %}
