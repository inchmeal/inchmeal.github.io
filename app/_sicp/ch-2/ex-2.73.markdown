---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.73"
order: "073"
date: 2016-06-25
---

**(a)**

Like the complex number example, expression is considered to be of multiple types depending on the *operator*.

Thus *operator* serves as tag for differentiating different implementations of expression.

Each expression has an operator and operands.

Each expression can be differentiated wrt a variable.

The implementation of *derivative* procedure of an expression is based on the type of expression.

Each *derivative* procedure is assumed to be stored in *table* corresponding to the *operator*.

The *generic* derivative of an expression is implemented by looking up procedure from the table, using operator and invoking it using *operands*. Or in other words
*data directed dispatch*.
 
Notice that `number` and `variable` can be considered as expression but both have no operators. Thus we cant differentiate between the two using operator. Thus we need 
a separate way to deal with them, which in this case we are using predicates `number?` and `variable?` and `same-variable?` to deal with them instead of *fitting* them
with the *generic* way of lookup in table and invoke.

**(b)**

**(c)**
    
I am combining parts(b) and (c).

Here is the complete code including all helper functions:
    
{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))
(#%require (only racket/base make-hash))
(#%require (only racket/base hash-set!))
(#%require (only racket/base hash-ref))

(define *op-table* (make-hash))

(define (put op type proc)
  (hash-set! *op-table* (list op type) proc)
)

(define (get op type)
  (hash-ref *op-table* (list op type) '())
)

(define (variable? x) (symbol? x))

(define (same-variable? v1 v2)
     (and (variable? v1) (variable? v2) (eq? v1 v2)))

(define (=number? exp num)
(and (number? exp) (= exp num)))

(define (operator exp) (car exp))
(define (operands exp) (cdr exp))

(define (install-sum-pkg)
  (define (make a1 a2)
     (cond ((=number? a1 0) a2)
        ((=number? a2 0) a1)
        ((and (number? a1) (number? a2)) (+ a1 a2))
        (else (list '+ a1 a2))
     )
  )  

  (define (derivative operands var)
    ((get 'make '+) 
             (deriv (car operands) var)
             (deriv (cadr operands) var)
    )    
  )
  (put 'make '+ make)
  (put 'deriv '+ derivative)  
)  

(define (install-product-pkg)
  (define (make m1 m2)
    (cond ((or (=number? m1 0) (=number? m2 0)) 0)
          ((=number? m1 1) m2)
          ((=number? m2 1) m1)
          ((and (number? m1) (number? m2)) (* m1 m2))
          (else (list '* m1 m2))
    )
  )
  
  (define (derivative operands var)
    ((get 'make '+) 
            ((get 'make '*) 
                 (car operands)
                 (deriv (cadr operands) var)
            )
            ((get 'make '*) 
                 (deriv (car operands) var)
                 (cadr operands)
            )
    )
  )

  (put 'make '* make)
  (put 'deriv '* derivative)
)

(define (install-exp-pkg)
  (define (make base exp)
      (cond ((=number? exp 0) 1)
         ((=number? exp 1) base)
         (else (list '^ base exp))
      )
  )
  
  (define (derivative operands var)
    ((get 'make '*)
        ((get 'make '*)
           (cadr operands)
           ((get 'make '^) (car operands) (- (cadr operands) 1))
        )
        (deriv (car operands) var)
    )
  )

  (put 'make '^ make)
  (put 'deriv '^ derivative)
)

(install-sum-pkg)
(install-product-pkg)
(install-exp-pkg)

(define (deriv exp var)
   (cond ((number? exp) 0)
         ((variable? exp) (if (same-variable? exp var) 1 0))
         (else ((get 'deriv (operator exp)) (operands exp)
var))))

{% endhighlight %}

Test/Output:    

{% highlight racket linenos %}
>  (display (deriv '(^ (+ x 3) 5) 'x))
(* 5 (^ (+ x 3) 4))
>  (display (deriv '(^ (+ x 3) 2) 'x))
(* 2 (+ x 3))
> (display (deriv '(^ (+ x 3) 0) 'x))
0
> (display (deriv '(^ (+ x 3) 1) 'x))
1
> (display (deriv '(^ 3 5) 'x))
0
> (display (deriv '(* (+ x 3) (+ x 5)) 'x))
(+ (+ x 3) (+ x 5))
> (display (deriv '(* (+ (* 5 x) 3) (+ x 5)) 'x))
(+ (+ (* 5 x) 3) (* 5 (+ x 5)))
> (display (deriv '(* (^ x 3) (+ x 5)) 'x))
(+ (^ x 3) (* (* 3 (^ x 2)) (+ x 5)))
> 
{% endhighlight %}

 
**(d)**

We only need to change the order of arguments while invoking `put`.




         
         


