---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.17"
order: "017"
date: 2018-01-04 
---

Here first I have pasted the output by running the modified procedure on the same inputs as in last exercise:

{% highlight racket linenos %}
> (define p1 (cons 'a '()))
> (define p2 (cons 'b '()))
> (define p3 (cons 'c '()))
> (set-cdr! p2 p3)
> (set-cdr! p1 p2)
> (count-pairs p1)
3
> (display p1)
(a b c)
> (set-car! p1 p2)
> (display p1)
((b c) b c)
> (count-pairs p1)
3
> (set-car! p1 p3)
> (display p1)
((c) b c)
> (count-pairs p1)
3
> (set-car! p2 p3)
> (display p2)
((c) c)
> (set-car! p1 p2)
> (display p1)
(((c) c) (c) c)
> (count-pairs p1)
3
> (set-car! p1 p1)
> (count-pairs p1)
3
> 
{% endhighlight %}

The auxillary data-structure I have used is list of pairs. Although, it is not ideal and a set/hash like structure would be more efficient. Since hashes are not yet introduced formally in the book, so using list. Here goes the code:

{% highlight racket linenos %}
#lang sicp

(define (count-pairs x)
  (define (counter x aux)
    (if (not (pair? x))
        0
        (if ((aux 'visited) x)
            0
            (begin ((aux 'add) x)
                   (+
                     (counter (car x) aux)
                     (counter (cdr x) aux)
                     1)))))
  (counter x (pairs-list)))

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


