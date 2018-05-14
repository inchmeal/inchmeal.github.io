---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.19"
order: "019"
date: 2018-01-04 
---

I got this asked in an interview - so already know the solution - use two pointers - slow and fast. slow pointer traverses the list one at a time and fast traverses the list two elements at a time.

If there is a cycle then slow and fast will become equal!

First we check the output:

{% highlight racket linenos %}
> (has-cycle? '())
#f
> (has-cycle? (list 'a))
#f
> (has-cycle? (list 'a 'b 'c))
#f
> (define z (make-cycle (list 'a 'b 'c)))
> (has-cycle? z)
#t
> 
{% endhighlight %}


Now here goes the code:

{% highlight racket linenos %}
#lang sicp

(define (has-cycle? l)
  (define (check slow fast)
    (if (or (null? fast) (null? (cdr fast)))
        #f
        (if (eq? slow fast)
            #t
            (check (cdr slow) (cdr (cdr fast))))))
  (cond ((null? l) #f)
        ((null? (cdr l)) #f)
        (else (check (cdr l) (cdr (cdr l))))))
        
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

