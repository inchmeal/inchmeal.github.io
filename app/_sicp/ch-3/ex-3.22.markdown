---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.22"
order: "022"
date: 2018-01-04 
---

This version of code looked simple as the operations like `insert-queue`, `delete-queue` need not to be passed with the queue parameter. It is just available to them!

For using it, I think it is individual choice whether one likes calling the operation by passing the object/context. Or by sending a message/operation to the object.

Note that I returned front-ptr(inside insert and delete operations) instead of dispatch, as it simplified printing. Perhaps it is better to return dispatch because it can help in combining multiple operations in a single statement.

{% highlight racket linenos %}
#lang sicp

(define (make-queue)
  (let ((front-ptr '())
        (rear-ptr '()))
    (define (set-front-ptr! item) (set! front-ptr item))
    (define (set-rear-ptr! item) (set! rear-ptr item))

    (define (empty-queue?) (null? front-ptr))
    
    (define (front-queue)
      (if (empty-queue?)
          (error "FRONT called with an empty queue")
          (car front-ptr)))

    (define (insert-queue! item)
      (let ((new-pair (cons item '())))
        (cond ((empty-queue?)
               (set-front-ptr! new-pair)
               (set-rear-ptr! new-pair)
               front-ptr)
              (else
               (set-cdr! rear-ptr new-pair)
               (set-rear-ptr! new-pair)
               front-ptr))))

    (define (delete-queue!)
      (cond ((empty-queue?)
             (error "DELETE! called with an empty queue"))
            (else
             (set-front-ptr! (cdr front-ptr))
             front-ptr)))
    
    (define (dispatch m)
      (cond ((eq? m 'empty-queue?) (empty-queue?))
            ((eq? m 'front-queue) (front-queue))
            ((eq? m 'insert-queue!) insert-queue!)
            ((eq? m 'delete-queue!) (delete-queue!))
            (else (error "Invalid operation: " m))))
    dispatch))
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
> (define q1 (make-queue))
> (display ((q1 'insert-queue!) 'a))
(a)
> (display ((q1 'insert-queue!) 'b))
(a b)
> (display (q1 'front-queue))
a
> (display (q1 'delete-queue!))
(b)
> (display (q1 'delete-queue!))
()
> (display ((q1 'insert-queue!) 'hello))
(hello)
> (display ((q1 'insert-queue!) 'world))
(hello world)
> 
{% endhighlight %}
