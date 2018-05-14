---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.18"
order: "018"
date: 2018-01-04 
---

Lets first check the output:

{% highlight racket linenos %}
> (define z (make-cycle (list 'a 'b 'c)))
> (has-cycle? z)
#t
> (has-cycle? (list 'a 'b 'c))
#f
> (has-cycle? (list 'z 'z 'z))
#f
> (define cc (make-cycle (list 'z 'z 'z)))
> (has-cycle? cc)
#t
> 
{% endhighlight %}


Here goes the code:

{% highlight racket linenos %}
#lang sicp

(define (has-cycle? l)
  (define (check l aux)
    (if (null? l)
        #f
        (if ((aux 'visited) l)
            #t
            (check (cdr l) (begin ((aux 'add) l) aux)))))
  (check l (pairs-list)))
            
(define (make-cycle x)
  (set-cdr! (last-pair x) x)
  x)

(define (pairs-list)
  (let ((pairs '()))
    (define (visited pair)
      (accumulate (lambda(cur-pair rs) (or rs (eq? pair cur-pair))) #f pairs))
    (define (add pair)
      (if (pair? pair)
          (if (null? pairs)
              (set! pairs (list pair))
              (append! pairs (list pair)))
          (error "Only pairs can be added")))
    (define (dispatch m)
      (cond
        ((eq? 'visited m) visited)
        ((eq? 'add m) add)
        (else (error "Invalid operation" m))))
    dispatch))
      

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence))
      )
  )
)

(define (last-pair x)
  (if (null? (cdr x))
      x
      (last-pair (cdr x))))

(define (append! x y)
  (set-cdr! (last-pair x) y)
  x)

{% endhighlight %}

