---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.23"
order: "023"
date: 2018-01-04 
---

To do it in constant time, double linked list is required. Similar to `queue`, here also we use front and rear pointers. 

Used a structure which I referred as `ptr` that contains 3 items `next` which points to next `ptr`, `prev` which points to previous `ptr` and `data` which contains the actual data/item.

After establishing the above concepts, implementation is straighforward, just managing the pointers carefully(having some background in C helped me). Lets first see the output/examples:

Note that `display-deque` is a procedure to display contents of deque. It prints `~` to mark the end of the list.

{% highlight racket linenos %}
> (define d1 (make-deque))
> (display-deque (front-insert-deque! d1 '1))
1 ~
> (display-deque (front-delete-deque! d1))
~
> (display-deque (front-insert-deque! d1 '1))
1 ~
> (display-deque (front-insert-deque! d1 '2))
2 1 ~
> (display-deque (rear-delete-deque! d1))
2 ~
> (display-deque (front-insert-deque! d1 '1))
1 2 ~
> (display-deque (front-insert-deque! d1 '0))
0 1 2 ~
> (display-deque (rear-insert-deque! d1 'c))
0 1 2 c ~
> (display-deque (rear-insert-deque! d1 'd))
0 1 2 c d ~
> (display-deque (rear-insert-deque! d1 'e))
0 1 2 c d e ~
> (display-deque (rear-delete-deque! d1))
0 1 2 c d ~
> (display-deque (front-delete-deque! d1))
1 2 c d ~
> (display-deque (rear-delete-deque! d1))
1 2 c ~
> (display-deque (front-delete-deque! d1))
2 c ~
> (display-deque (front-delete-deque! d1))
c ~
> (display-deque (rear-delete-deque! d1))
~
> (display-deque (front-delete-deque! d1))
. . Delete called with an empty deque
> (display-deque (rear-delete-deque! d1))
. . Delete called with an empty deque
> (display-deque (rear-insert-deque! d1 'hello))
hello ~
> (display-deque (front-insert-deque! d1 'world))
world hello ~
> (display-deque (front-delete-deque! d1))
hello ~
> (display-deque (rear-insert-deque! d1 'world))
hello world ~
> (display-deque (front-delete-deque! d1))
world ~
> (display-deque (rear-delete-deque! d1))
~
> 
{% endhighlight %}

Now here goes the code:

{% highlight racket linenos %}
#lang sicp

(define (make-deque) (cons '() '()))

  (define (display-deque deque)
    (define (display-iter ptr)
      (cond ((null? ptr) (display "~"))
            (else
             (display (data ptr))
             (display " ")
             (display-iter (next ptr)))))
    (display-iter (front-ptr deque)))

  (define (front-ptr deque) (car deque))
  (define (rear-ptr deque) (cdr deque))
  (define (set-front-ptr! deque item) (set-car! deque item))
  (define (set-rear-ptr! deque item) (set-cdr! deque item))

  (define (make-new-ptr item) (list '() item '()))

  (define (next ptr) (car ptr))
  (define (data ptr) (cadr ptr))
  (define (prev ptr) (caddr ptr))

  (define (set-next! ptr next) (set-car! ptr next))
  (define (set-data! ptr dat) (set-car! (cdr ptr) dat))
  (define (set-prev! ptr prev) (set-car! (cddr ptr) prev))

  (define (empty-deque? deque) (or (null? (front-ptr deque)) (null? (rear-ptr deque))))

  (define (front-deque deque)
    (if (empty-deque? deque)
        (error "Deque is empty")
        (data (front-ptr deque))))

  (define (rear-deque deque)
    (if (empty-deque? deque)
        (error "Deque is empty")
        (data (rear-ptr deque))))    
  
  (define (front-insert-deque! deque item)
    (let ((new-ptr (make-new-ptr item)))
      (cond ((empty-deque? deque)
             (set-front-ptr! deque new-ptr)
             (set-rear-ptr! deque new-ptr)
             deque)
            (else
              (set-next! new-ptr (front-ptr deque))
              (set-prev! (front-ptr deque) new-ptr)
              (set-front-ptr! deque new-ptr)
              deque))))    

  (define (rear-insert-deque! deque item)
    (let ((new-ptr (make-new-ptr item)))
      (cond ((empty-deque? deque)
             (set-front-ptr! deque new-ptr)
             (set-rear-ptr! deque new-ptr)
             deque)
            (else
             (set-prev! new-ptr (rear-ptr deque))
             (set-next! (rear-ptr deque) new-ptr)
             (set-rear-ptr! deque new-ptr)
             deque))))

  (define (front-delete-deque! deque)
    (cond ((empty-deque? deque)
           (error "Delete called with an empty deque"))
          (else (set-front-ptr! deque (next (front-ptr deque)))
                (if (empty-deque? deque)
                    (set-rear-ptr! deque '())
                    (set-prev! (front-ptr deque) '()))
                deque)))

  (define (rear-delete-deque! deque)
    (cond ((empty-deque? deque)
           (error "Delete called with an empty deque"))
          (else (set-rear-ptr! deque (prev (rear-ptr deque)))
                (if (empty-deque? deque)
                    (set-front-ptr! deque '())
                    (set-next! (rear-ptr deque) '()))
                deque)))
{% endhighlight %}
