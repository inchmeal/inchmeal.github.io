---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.90"
order: "090"
date: 2017-12-23 
---

Apparently I did not find it as difficult as it seemed from the hint. Perhaps I missed something :)

My understanding is problem requires to implement the polynomial system that can be used for both sparse and dense termlists and all operations can be performed between them. It has *not* asked to implement procedures that for the efficiency - It *only* asked to implement system which can *enable* us to later implement a polynomial system which is efficient for both dense and sparse. I believe so because as per my experience with the old problems - the problem generally gives an outline for what it seeks in the solution - here it only gave an outline to build a system which can enable operations on both term-list.

If the case is to implement the system where our polynomial also *decides* whether to use sparse or dense then it can also be implemented - we just need to think for the strategy - at how much packing is considered good for sparse and inside make-polynomial we can check with this strategy and do conversions(I have not made this change). 

I made the following changes:

- Implemented two terms-list packages - 'dense-termlist, 'sparse-termlist
- `make-term`, `coeff`, and `order` are owned by the polynomial package(not by the term-list packages implemented) because they are terms not the list themselves and both packages - sparse-termlist and dense-termlist use them from the polynomial package.
- There is an interesting way I worked around with the `adjoin-term` - this procedure have different implementation for each package and which should be the part of the respective term-list packages. But I can not apply `adjoin-term` in generic way because it takes two arguments - `term`, and `termlist` - where term does not have any type tag in my implementation because I made term to be owned by polynomial package instead of termlist package(which may be debatable). So, I made `adjoin-term-proc` - a procedure  that returns a procedure! And the returned procedure takes an argument - term and adds it to the list. See the implementation for details.

Here is the complete code(Examples in the end):

{% highlight racket linenos %}

#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

;Polynomial Package

(define (install-polynomial-package)
  ;; internal procedures
  ;; representation of poly
  (define (make-poly variable term-list)
    (cons variable term-list)
  )
  
  (define (variable p) (car p))
  (define (term-list p) (cdr p))
  (define (variable? x) (symbol? x))
  (define (same-variable? v1 v2) (and (variable? v1) (variable? v2) (eq? v1 v2)))
  ;; representation of terms and term lists
  
  (define (adjoin-term term list)
       ((apply-generic 'adjoin-term-proc list) term)
  )
  (define (first-term terms)
    (apply-generic 'first-term terms)
  )
  (define (rest-terms terms)
    (apply-generic 'rest-terms terms)
  )
  (define (empty-termlist? terms)
    (apply-generic 'empty-termlist? terms)
  )
  (define (make-term order coeff) (list order coeff))
  (define (order term) (car term))
  (define (coeff term) (cadr term))
  
  (define (add-poly p1 p2)
      (if (same-variable? (variable p1) (variable p2))
          (make-poly (variable p1)
                     (add-terms (term-list p1)
                            (term-list p2)
                     )
          )
          (error "Polys not in same var -- ADD-POLY" (list p1 p2))
      )
  )
  (define (mul-poly p1 p2)
      (if (same-variable? (variable p1) (variable p2))
          (make-poly (variable p1)
                     (mul-terms (term-list p1)
                                (term-list p2)
                     )
          )          
          (error "Polys not in same var -- MUL-POLY" (list p1 p2))
      )
  )
  (define (sub-poly p1 p2) (add-poly p1 (negate-poly p2)))
  (define (negate-poly p) (make-poly (variable p) (negate-termlist (term-list p))))

  (define (negate-termlist terms)
    (if (empty-termlist? terms)
        terms        
        (adjoin-term (make-term (order (first-term terms)) (apply-generic 'negate (coeff (first-term terms)))) (negate-termlist (rest-terms terms)))
    )
  )
  (define (add-terms L1 L2)
     (cond ((empty-termlist? L1) L2)
        ((empty-termlist? L2) L1)
        (else
           (let ((t1 (first-term L1)) (t2 (first-term L2)))
                (cond ((> (order t1) (order t2))
                           (adjoin-term
                                t1 (add-terms (rest-terms L1) L2))
                      )
                      ((< (order t1) (order t2))
                      (adjoin-term t2 (add-terms L1 (rest-terms L2))))
                      (else
                           (adjoin-term
                                (make-term (order t1)
                                           (add (coeff t1) (coeff t2))
                                )
                                (add-terms (rest-terms L1)
                                     (rest-terms L2)
                                )
                           )
                      )
                 )
             )
          )
        )
    )

    (define (mul-terms L1 L2)
        (if (empty-termlist? L1)
            L1
            (add-terms (mul-term-by-all-terms (first-term L1) L2)
                       (mul-terms (rest-terms L1) L2)
            )
        )
    )
    (define (mul-term-by-all-terms t1 L)
        (if (empty-termlist? L)
            L
            (let ((t2 (first-term L)))
                 (adjoin-term
                     (make-term (+ (order t1) (order t2))
                                (mul (coeff t1) (coeff t2))
                     )
                     (mul-term-by-all-terms t1 (rest-terms L))
                 )
            )
        )
    )

   ;; interface to rest of the system
   (define (tag p) (attach-tag 'polynomial p))
   (put 'add '(polynomial polynomial) 
        (lambda (p1 p2) (tag (add-poly p1 p2))))
   (put 'sub '(polynomial polynomial) 
        (lambda (p1 p2) (tag (add-poly p1 (negate-poly p2)))))
   (put 'mul '(polynomial polynomial) 
        (lambda (p1 p2) (tag (mul-poly p1 p2))))
   (put 'make 'polynomial
        (lambda (var terms) (tag (make-poly var terms))))
   (put 'make-term 'polynomial make-term)
   (put 'order 'polynomial order)
   (put 'coeff 'polynomial coeff)
   (put 'negate '(polynomial) (lambda (p) (tag (negate-poly p))))


   (define (=is-zero? poly)
       (define (iter terms)
         (if (apply-generic 'empty-termlist? terms)
             #t
             (and (=zero? (coeff (first-term terms))) (iter (rest-terms terms)))
         )
       )
       (iter (term-list poly))
   )
  
   (put '=zero? '(polynomial) =is-zero?)
  
  
  'done)

(define (make-polynomial var terms)
  ((get 'make 'polynomial) var terms))

(define (make-term order coeff)
  ((get 'make-term 'polynomial) order coeff))

(define (order term)
  ((get 'order 'polynomial) term))
    
(define (coeff term)
  ((get 'coeff 'polynomial) term))
        

;dense-termlist package
(define (install-dense-termlist-package)

    (define (adjoin-term-dense term term-list)
        (define (iter count terms)
            (if (= count 0)
                terms
                (iter (- count 1) (cons 0 terms))
            )
        )
        (let ((cof (coeff term))
              (count (- (order term) (length term-list)))
             )
             (cond
                ((=zero? cof) term-list)
                ((< count 0) (error "Can not add term - order of passed term is already present in the list"))
                (else (cons cof (iter count term-list)))
             )
        )
    )
    (define (first-term term-list) (make-term (- (length term-list) 1) (car term-list)))

       ;; interface to rest of the system
    (define (tag tl) (attach-tag 'dense-termlist tl))
  
    (put 'empty-dense-termlist 'dense-termlist (lambda () (tag '())))    
    (put 'first-term '(dense-termlist) first-term)
    (put 'rest-terms '(dense-termlist) (lambda (tl) (tag (cdr tl))))
    (put 'empty-termlist? '(dense-termlist) null?)
    (put 'adjoin-term-proc '(dense-termlist) (lambda(tl) (lambda(term) (tag (adjoin-term-dense term tl)))))
  
  'done)

(define (empty-dense-termlist)
  ((get 'make 'dense-termlist))
)

;sparse-termlist package
(define (install-sparse-termlist-package)
    (define (adjoin-term-sparse term term-list)
        (if (=zero? (coeff term))
            term-list
            (cons term term-list)
        )
    )
    
       ;; interface to rest of the system
    (define (tag tl) (attach-tag 'sparse-termlist tl))
  
    (put 'empty-sparse-termlist 'dense-termlist (lambda () (tag '())))    

    (put 'first-term '(sparse-termlist) (lambda (tl) (car tl)))
    (put 'rest-terms '(sparse-termlist) (lambda (tl) (tag (cdr tl))))
    (put 'empty-termlist? '(sparse-termlist) null?)
    (put 'adjoin-term-proc '(sparse-termlist) (lambda(tl) (lambda(term) (tag (adjoin-term-sparse term tl)))))
  
  'done)

(define (empty-sparse-termlist)
  ((get 'make 'sparse-termlist))
)

; Code below this is the arithmetic package we built in the last section
; Arithmetic Package


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
   (if (equal? 'scheme-number type-tag)
       contents
       (cons type-tag contents)
   )
)

(define (has-type-tag? datum) 
  (cond 
        ((number? datum) #t)
        ((pair? datum)
                (contains (car datum) '(int complex rational))
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
  (cond 
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

(define (list-and proc list)
    (define (iter list)
        (if (null? list)
            #t
            (let ((rs (proc (car list))))
              (if (boolean? rs)
                  (if rs (iter (cdr list)) #f)
                  (error "Proc should return boolean")
              )
            )
        )
    )
  
    (cond ((null? list) (error "Operation not defined for 0 items"))
          ((not (pair? list)) (error "Operation works only for lists"))
          (else (iter list))
    )
)                              
(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence)))
  )
)


;;;;;;;;;;;;;;;;;;;;;;;;

(define (install-int-package)
  (define (tag x)
    (attach-tag 'int x))
  (put 'add '(int int)
       (lambda (x y) (tag (+ x y))))
  (put 'sub '(int int)
       (lambda (x y) (tag (- x y))))
  (put 'mul '(int int)
       (lambda (x y) (tag (* x y))))
  (put 'div '(int int)
       (lambda (x y) (tag (/ x y))))
  (put 'make 'int
       (lambda (x) (tag x)))  
  ;equ?
  (put 'equ? '(int int) =)
  (put 'negate '(int) -)
  
  ; raise operation
  (put-raise 'int (lambda(x) (make-rational (contents x) 1)))
  ; set parent
  (put-parent 'int 'rational)  
 
  (put '=zero? '(int) (lambda (x) (= x 0)))

  'done
)

(define (make-integer n)
  ((get 'make 'int) n)
)



;;;;;;;;;;;;;;;;;;;;;;;;
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
  (put 'negate '(scheme-number) -)
  
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
 
  (put '=zero? '(scheme-number) (lambda (x) (= x 0)))

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
    (if (and (integer? n) (integer? d))
        (let ((nn (inexact->exact n))
              (dd (inexact->exact d))
             )
             (let ((g (gcd nn dd)))
                 (cons (/ nn g) (/ dd g))
             )
        )
        (error "Number and Denom shoud be integers" n d)
     )
  )
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
  (put 'negate '(rational) (lambda (r) (make-rat (- (numer r)) (denom r))))

  ; raise operation
  (put-raise 'rational (lambda(r) (make-number (/ (numer (contents r)) (denom (contents r))))))
  ; set parent
  (put-parent 'rational 'scheme-number)

  ; project operation
  (put-projection 'rational (lambda(r) (make-integer (floor (/ (numer (contents r)) (denom (contents r)))))))
  ; set child
  (put-child 'rational 'int)
  
  ; uncomment this and comment above raise to make rational as child of complex instead of number
  ; (put-raise 'rational (lambda(r) (make-complex-from-real-imag (/ (numer (contents r)) (denom (contents r))) 0)))
  ; uncomment this and comment above raise to make rational as child of complex instead of number
  ; (put-parent 'rational 'complex)

  (put '=zero? '(rational) (lambda (x) (= (numer x) 0)))
  
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

  (define (complex-negate z)
      (make-from-real-imag
           (apply-generic 'negate (apply-generic 'real-part z))
           (apply-generic 'negate (apply-generic 'real-part z))
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
  (put `nagate '(complex) complex-negate)

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

   ;; complex package:
   (define (=is-zero? z) 
       (and
           (= (apply-generic 'real-part z) 0)
           (= (apply-generic 'imag-part z) 0)
       )
   )
  (put '=zero? '(complex) =is-zero?)
  
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

(define (=zero? x) (apply-generic '=zero? x))
(define (negate x) (apply-generic 'negate x))


(install-rectangular-package)
(install-polar-package)
(install-scheme-number-package)
(install-rational-package)
(install-int-package)
(install-complex-package)
(install-sparse-termlist-package)
(install-dense-termlist-package)
(install-polynomial-package)

{% endhighlight %}


Test/Sample Output:

Note that - my integer representation adds tag - integer and drop is dropping to int when 'add is performed. Thus `(int 5)` actually means `5`.

{% highlight racket linenos %}

> (display (add (make-polynomial 'x (attach-tag 'sparse-termlist '((5 2) (3 2)))) (make-polynomial 'x (attach-tag 'sparse-termlist '((5 3) (3 6))))))
(polynomial x sparse-termlist (5 (int . 5)) (3 (int . 8)))
> (display (add (make-polynomial 'x (attach-tag 'dense-termlist '(1 2 3))) (make-polynomial 'x (attach-tag 'dense-termlist '(4 5 6)))))
(polynomial x dense-termlist (int . 5) (int . 7) (int . 9))
> (display (add (make-polynomial 'x (attach-tag 'dense-termlist '(1 2 3))) (make-polynomial 'x (attach-tag 'sparse-termlist '((2 4) (1 5) (0 6))))))
(polynomial x sparse-termlist (2 (int . 5)) (1 (int . 7)) (0 (int . 9)))
> (display (sub (make-polynomial 'x (attach-tag 'dense-termlist '(1 2 3))) (make-polynomial 'x (attach-tag 'dense-termlist '(4 5 6)))))
(polynomial x dense-termlist (int . -3) (int . -3) (int . -3))
> (display (sub (make-polynomial 'x (attach-tag 'dense-termlist '(1 2 3))) (make-polynomial 'x (attach-tag 'sparse-termlist '((2 4) (1 5) (0 6))))))
(polynomial x sparse-termlist (2 (int . -3)) (1 (int . -3)) (0 (int . -3)))
> (display (add (make-polynomial 'x (attach-tag 'sparse-termlist '((5 2) (3 2)))) (make-polynomial 'x (attach-tag 'sparse-termlist '((5 3) (3 6))))))
(polynomial x sparse-termlist (5 (int . 5)) (3 (int . 8)))
> (display (mul (make-polynomial 'x (attach-tag 'sparse-termlist '((1 1) (0 1)))) (make-polynomial 'x (attach-tag 'sparse-termlist '((1 1) (0 1))))))
(polynomial x sparse-termlist (2 (int . 1)) (1 (int . 2)) (0 (int . 1)))
> (display (mul (make-polynomial 'x (attach-tag 'dense-termlist '(1 1))) (make-polynomial 'x (attach-tag 'dense-termlist '(1 1)))))
(polynomial x dense-termlist (int . 1) (int . 2) (int . 1))
> (display (mul (make-polynomial 'x (attach-tag 'dense-termlist '(1 1))) (make-polynomial 'x (attach-tag 'sparse-termlist '((1 1) (0 1))))))
(polynomial x sparse-termlist (2 (int . 1)) (1 (int . 2)) (0 (int . 1)))
{% endhighlight %}
