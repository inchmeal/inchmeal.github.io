---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.93"
order: "093"
date: 2017-12-28 
---

This is straighthorward. 

Note that I removed *drop* call from `apply-generic` procedure as there is nothing mentioned on drop for rational polynomials. Also commented raise and projection operations from the rational package.

Here goes the rational package:

{% highlight racket linenos %}
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
        (cons n d)
     )
  )
  (define (add-rat x y)
    (make-rat (add (mul (numer x) (denom y))
                 (mul (numer y) (denom x)))
              (mul (denom x) (denom y))))
  (define (sub-rat x y)
    (make-rat (sub (mul (numer x) (denom y))
                 (mul (numer y) (denom x)))
              (mul (denom x) (denom y))))
  (define (mul-rat x y)
    (make-rat (mul (numer x) (numer y))
              (mul (denom x) (denom y))))
  (define (div-rat x y)
    (make-rat (mul (numer x) (denom y))
              (mul (denom x) (numer y))))

  ;; equ?
  (define (equ? x y) 
    (and (apply-generic 'equ? (numer x) (numer y)) (apply-generic 'equ? (denom x) (denom y)))) 
     
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
  (put 'negate '(rational) (lambda (r) (make-rat (apply-generic 'negate (numer r)) (denom r))))

  ;commented this so that rational now can not be raised as complex number - because rational can be polynomials as part
  ; of ex-2.93 onwards.
  ; raise operation
  ; (put-raise 'rational (lambda(r) (make-number (/ (numer (contents r)) (denom (contents r))))))
  ; set parent
  ; (put-parent 'rational 'scheme-number)

  ; project operation
  ;(put-projection 'rational (lambda(r) (make-integer (floor (/ (numer (contents r)) (denom (contents r)))))))
  ; set child
  ;(put-child 'rational 'int)
  
  (put '=zero? '(rational) (lambda (x) (apply-generic '=zero? (numer x))))
  
  'done
  )

(define (make-rational n d)
  ((get 'make 'rational) n d)
  )
{% endhighlight %}

Test:

{% highlight racket linenos %}
> (define p1 (make-polynomial 'x (attach-tag 'sparse-termlist '((2 1)(0 1)))))
> (define p2 (make-polynomial 'x (attach-tag 'sparse-termlist '((3 1)(0 1)))))
> (define rf (make-rational p2 p1))
> (display (add rf rf))
(rational (polynomial x sparse-termlist (5 2) (3 2) (2 2) (0 2)) polynomial x sparse-termlist (4 1) (2 2) (0 1))
{% endhighlight %}



