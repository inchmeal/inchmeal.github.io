---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.30"
order: "030"
date: 2016-04-27
---

- Without using `map`:

{% highlight racket linenos %}
#lang sicp

(define (square-tree tree)
(cond ((null? tree) nil)
     ((not (pair? tree)) (* tree tree))
     (else
         (cons
              (square-tree (car tree))
              (square-tree (cdr tree)))
     )
)
)
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (display 
   (square-tree
       (list 
            1
            (list 
                 2 
                 (list 3 4)
                 5
            )
            (list 6 7)
       )
   )
)

(1 (4 (9 16) 25) (36 49))
 
{% endhighlight %}


- With using `map`:

{% highlight racket linenos %}
#lang sicp

(define (square-tree tree)
(map
    (lambda (x)
       (if (not (pair? x))
           (* x x)
           (square-tree x)             
       )
    )  
    tree
)
)
{% endhighlight %}
  
