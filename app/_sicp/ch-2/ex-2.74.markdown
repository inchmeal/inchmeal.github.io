---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.74"
order: "074"
date: 2016-06-25
---

**(a)**

{% highlight racket linenos %}
(define (make-generic-file division specific-file)
  (cons division specific-file)
)

(define (division-of-generic-file generic-file)
  (car generic-file)
)

(define (specific-file-of-generic-file generic-file)
  (cadr generic-file)
)  

(define (get-record name generic-file)
  (let (
         (division (division-of-generic-file generic-file))
         (specific-file (specific-file-of-generic-file generic-file))
       )
       ( (get 'get-record division) specific-file)
  )
)
{% endhighlight %}

**(b)**

{% highlight racket linenos %}
(define (make-generic-record division specific-record)
  (cons division specific-record)
)

(define (division-of-generic-record generic-record)
  (car generic-record)
)

(define (specific-record-of-generic-record generic-record)
  (cadr generic-record)
)  

(define (get-salary name generic-record)
  (let (
         (division (division-of-generic-record generic-record))
         (specific-record (specific-record-of-generic-record generic-record))
       )
       ( (get 'get-record division) specific-record)
  )
)
{% endhighlight %}

**(c)**

{% highlight racket linenos %}
(define (find-employee-record name files)
   (cond ((null? files) '())
         ((pair? files) (let
                            ((rs (get-record name files)))
                            (if (null? rs)
                                (find-employee-record name (cdr files))
                                rs
                            )
                        )
         )
         (else (error "Invalid files, list expected"))
  )
)
{% endhighlight %}

**(d)**

- add the procedures to *tag* their files and employee-records with correct division.
- procedure `get-record`, `get-salary`, `get-address` etc corresponding to their data records.
- Submit/Store these procedures to the table using `put`.
  
  