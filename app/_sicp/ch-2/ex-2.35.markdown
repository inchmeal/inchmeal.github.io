---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.35"
order: "035"
date: 2016-04-28
---

Number of leaves in a tree, $$ t $$, is:

- if $$ t $$ is leaf, $$ num\_of\_leaves(t) = 1 $$.    
- else     
    $$ num\_of\_leaves(t) = \sum_{ b \in (\text{ all branches of } t) } num\_of\_leaves(b) $$.
    
The above approach can be directly translated into the following procedure:
        
{% highlight racket linenos %}
(define (count-leaves tree)
  (accumulate
       (lambda (x y)
           (if (pair? x)
               (+ (count-leaves x) y)
               (+ 1 y)
           )
       )
       0 
       tree
  )
)
{% endhighlight %}

As we can see, `accumulate` maps to $$ \sum $$ and $$ num\_of\_leaves $$ maps to `count-leaves`. 

But it does not fit with the exercise, as it expects to use map:

{% highlight racket linenos %}
#lang sicp

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence))
      )
  )
)

(define (count-leaves t)
    (accumulate
               +
               0
               (map
                   (lambda (x)
                     (if (pair? x)
                         (count-leaves x)
                         1
                     )    
                   )
                   t
               )
    )
)

(define (count-leaves-orig x)
  (cond ((null? x) 0)
        ((not (pair? x)) 1)
        (else (+ (count-leaves-orig (car x))
                 (count-leaves-orig (cdr x))))))

{% endhighlight %}

Here, `map` is used to convert(maps) each branch of the tree passed to it to(into) number of leaves.
And procedure `accumulate` computes total number of leaves by adding the number of leaves of each branch.

Procedure `count-leaves-orig` is the recursive procedure for counting leaves given in book.



Example/Output:

{% highlight racket linenos %}
> (define tree (list 1 (list 2 3 (list (list 5 (list 7)) (list 8 9)) (list 10 (list 11))) 12 13 (list 14 (list 16 17 (list 18 (list 19 20))) (list 21 22))))
> (count-leaves tree)
19
> (count-leaves-orig tree)
19
> 
{% endhighlight %}

