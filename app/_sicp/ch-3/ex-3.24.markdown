---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.24"
order: "024"
date: 2018-01-05 
---

It only require a small change, just make `assoc` part of the procedure object i.e. declare `assoc` inside procedure object `make-table` and except an argument `same-key?` and use this inplace of `equal` inside `assoc`.

The code with the changes required:

{% highlight racket linenos %}
#lang sicp

(define (make-table same-key?)
  
  (let ((local-table (list '*table*)))
    (define (assoc key records)
      (cond ((null? records) false)
            ((same-key? key (caar records)) (car records))
            (else (assoc key (cdr records)))))
    
    (define (lookup key-1 key-2)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (cdr record)
                  false))
            false)))

    (define (insert! key-1 key-2 value)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (set-cdr! record value)
                  (set-cdr! subtable
                            (cons (cons key-2 value)
                                  (cdr subtable)))))
            (set-cdr! local-table
                      (cons (list key-1
                                  (cons key-2 value))
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
> (define tbl (make-table equal?))
> ((tbl 'insert-proc!) 'math '+ 43)
'ok
> ((tbl 'insert-proc!) 'math '- 45)
'ok
> ((tbl 'insert-proc!) 'math '* 42)
'ok
> ((tbl 'insert-proc!) 'letters 'a 97)
'ok
> ((tbl 'insert-proc!) 'letters 'b 98)
'ok
> ((tbl 'lookup-proc) 'math '+)
43
> ((tbl 'lookup-proc) 'letters 'b)
98
> ((tbl 'lookup-proc) 'math '/)
#f
> ((tbl 'lookup-proc) 'random '+)
#f
> 
{% endhighlight %}
