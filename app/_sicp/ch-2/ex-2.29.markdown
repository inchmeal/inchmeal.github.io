---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.29"
order: "029"
date: 2016-04-26
---

#### (a) ####

{% highlight racket linenos %}
#lang sicp

(define (make-mobile left right)
  (list left right)
)

(define (left-branch mobile)
  (car mobile)
)

(define (right-branch mobile)
  (car (cdr mobile))
)  

(define (make-branch length structure)
  (list length structure)
)

(define (branch-length branch)
  (car branch)
)

(define (branch-structure branch)
  (car (cdr branch))
)
{% endhighlight %}

#### (b) ####

{% highlight racket linenos %}
(define (total-weight mobile)
  (cond ((null? mobile) 0)
        ((not (pair? mobile)) mobile)
        (else (+
                 (total-weight (branch-structure (left-branch mobile)))
                 (total-weight (branch-structure (right-branch mobile)))
              )
        )
  )
)
{% endhighlight %}

Example/Test:

{% highlight racket linenos %}
> (define mob
    (make-mobile
       (make-branch
             100
             (make-mobile
                   (make-branch 100 1)
                   (make-branch 
                         100 
                         (make-mobile 
                               (make-branch 100 2) 
                               (make-branch 100 3)
                         )
                   )
             )
       )
       (make-branch
             100
             (make-mobile
                   (make-branch 
                         100 
                         (make-mobile 
                               (make-branch 100 4) 
                               (make-branch 100 5)
                         )
                   )
                   (make-branch 100 6)                         
             )
       )
    )
 )
                         
> (total-weight mob)
21

> (total-weight '())
0

{% endhighlight %}

#### (c) ####

I attempted in writing procedure that visits each branch of the mobile only once.

To do that a procedure `chk-balance` is written which returns weight of the mobile if mobile is balanced else it returns a negative 
number. As can be seen in code this helps in avoiding multiple visits to each branch.

{% highlight racket linenos %}
(define (balanced? m)  
  (define (chk-balance mobile)
     (cond ((null? mobile) 0)
        ((not (pair? mobile)) mobile)
        (else
              (let (
                     (left-wt (chk-balance (branch-structure (left-branch mobile))))
                     (right-wt (chk-balance (branch-structure (right-branch mobile))))
                   )            
                   (if (and
                           (>= left-wt 0)
                           (>= right-wt 0)
                           (=
                              (* left-wt (branch-length (left-branch mobile)))
                              (* right-wt (branch-length (right-branch mobile)))
                           )
                       )    
                       (+ left-wt right-wt)
                       -1
                   )    
              )
        )
     )    
  )
  (>= (chk-balance m) 0)
)
{% endhighlight %}

Example/Test:

{% highlight racket linenos %}
> (define mob
    (make-mobile
       (make-branch
             100
             (make-mobile
                      (make-branch 100 1)
                      (make-branch 100 (make-mobile (make-branch 100 2) (make-branch 100 3)))
             )
       )
       (make-branch
             100
             (make-mobile
                      (make-branch 100 (make-mobile (make-branch 100 4) (make-branch 100 5)))
                      (make-branch 100 6)                         
             )
       )
  )
)
> (balanced? mob)
#f
> (define mob
    (make-mobile
       (make-branch
             100
             (make-mobile
                      (make-branch 100 16)
                      (make-branch 100 (make-mobile (make-branch 100 8) (make-branch 100 8)))
             )
       )
       (make-branch
             100
             (make-mobile
                      (make-branch 100 (make-mobile (make-branch 100 8) (make-branch 100 8)))
                      (make-branch 100 16)                         
             )
       )
  )
)
> (balanced? mob)
#t
{% endhighlight %}

#### (d) ####

The modified constructors will cause changes only in selectors `right-branch` and `branch-structure`.