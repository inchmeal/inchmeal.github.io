---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.25"
order: "025"
date: 2018-01-05 
---

This is also simple. Just using the variable arguments in method parameter. Also note that in `insert` procedure, unlike the earlier version, now we first pass the value and then the keys as variable number of arguments. `equal?` procedure works for lists too, so thats it.

Code:

{% highlight racket linenos %}
#lang sicp

(define (make-table)
  
  (let ((local-table (list '*table*)))

    (define (assoc key records)
      (cond ((null? records) false)
            ((equal? key (caar records)) (car records))
            (else (assoc key (cdr records)))))
    
    (define (lookup . keys)
      (let ((record (assoc keys (cdr local-table))))
        (if record
            (cdr record)
            false)))

    (define (insert! value . keys)
      (let ((record (assoc keys (cdr local-table))))
        (if record
            (set-cdr! record value)
                  (set-cdr! local-table
                            (cons (cons keys value)
                                  (cdr local-table)))))
      'ok)

    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))

{% endhighlight %}


Example/Output:

{% highlight racket linenos %}
> (define tbl (make-table))
> ((tbl 'insert-proc!) 43 'math '+)
'ok
> ((tbl 'lookup-proc) 'math '+)
43
> ((tbl 'insert-proc!) 5000 'math 'poly 'constant)
'ok
> ((tbl 'lookup-proc) 'math)
#f
> ((tbl 'lookup-proc) 'math 'poly)
#f
> ((tbl 'lookup-proc) 'math 'poly 'constant)
5000
> 
{% endhighlight %}
