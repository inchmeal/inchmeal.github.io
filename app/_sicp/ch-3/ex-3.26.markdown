---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.26"
order: "026"
date: 2018-01-05 
---

We need two things:

1. Make the tree-set implementation from previous chapter - mutable.
2. Use Tree-Set in table for records.

I created an entry data-structure which is nothing but a pair of key and value.

Note how abstractions play an insteresting part here - We changed the internal data-structure to tree but the external api to access table remains same.

First lets check the output:

{% highlight scheme linenos %}
> (define tbl (make-table))
> ((tbl 'insert-proc!) 100 'hundred)
> ((tbl 'insert-proc!) 200 '2hundred)
> ((tbl 'insert-proc!) 50 'fifty)
> ((tbl 'lookup-proc) 50)
(mcons 50 'fifty)
> ((tbl 'lookup-proc) 90)
#f
> ((tbl 'insert-proc!) 50 'fiftish)
> tbl
#<procedure:...icp/ch-3/3.1.rkt:50:4>
> ((tbl 'lookup-proc) 50)
(mcons 50 'fiftish)
> ((tbl 'lookup-proc) 100)
(mcons 100 'hundred)
> 
{% endhighlight %}

Note that, for for better readability I am returning the entry from the lookup procedure instead of returning only the value. If needed, this is a small change to return the value only.

Code:

{% highlight scheme linenos %}
#lang sicp

(define (make-tree entry left right)
  (list entry left right))

(define (entry tree) (car tree))
(define (left-branch tree) (cadr tree))
(define (right-branch tree) (caddr tree))

(define (set-left-branch! tree left) (set-car! (cdr tree) left))
(define (set-right-branch! tree right) (set-car! (cddr tree) right))

(define (make-entry key value) (cons key value))
(define (key-entry entry) (car entry))
(define (value-entry entry) (cdr entry))

(define (set-key-entry! entry key) (set-car! entry key))
(define (set-value-entry! entry value) (set-cdr! entry value))

(define (adjoin-set! key value tree-set)
  (cond ((null? tree-set) (make-tree (make-entry key value) '() '()))
        ((= key (key-entry (entry tree-set))) (set-value-entry! (entry tree-set) value))
        ((< key (key-entry (entry tree-set)))
         (if (null? (left-branch tree-set))
             (set-left-branch! tree-set (make-tree (make-entry key value) '() '()))
             (adjoin-set! key value (left-branch tree-set))))
        (else (if (null? (right-branch tree-set))
                  (set-right-branch! tree-set (make-tree (make-entry key value) '() '()))
                  (adjoin-set! key value (right-branch tree-set))))))
              
(define (lookup key tree-set)
  (cond ((null? tree-set) #f)
        ((= key (key-entry (entry tree-set))) (entry tree-set))
        ((< key (key-entry (entry tree-set))) (lookup key (left-branch tree-set)))
        (else (lookup key (right-branch tree-set)))))

(define (make-table)
  
  (let ((local-table (list '*table*)))

    (define (lookup-local key)
      (lookup key (cdr local-table)))
      
    (define (insert! key value)
      (let ((records (cdr local-table)))
        (if (null? records)
            (set-cdr! local-table (make-tree (make-entry key value) '() '()))
            (adjoin-set! key value records))))
      
    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup-local)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))
{% endhighlight %}


