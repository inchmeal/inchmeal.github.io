---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.37"
order: "037"
date: 2016-04-28
---

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

(define (accumulate-n op init seqs)
  (if (null? (car seqs))
      nil
      (cons (accumulate op init (map car seqs))
            (accumulate-n op init (map cdr seqs))
      )
  )
)

(define (dot-product v w)
   (accumulate + 0 (map * v w))
)

(define (matrix-*-vector m v)
   (map
       (lambda (x)
           (dot-product x v)   
       )
       m
   )
)

(define (transpose mat)
  (accumulate-n cons '() mat)
)

(define (matrix-*-matrix m n)
   (let (
         (cols (transpose n))
       )
       (map
           (lambda (v)
               (matrix-*-vector cols v)   
           )
           m
       )
   )
)
{% endhighlight %}


Example/Output:

{% highlight racket linenos %}
> (define zero-vector (list 0 0 0))
> (define one-vector (list 1 1 1))
> (define a (list 1 2 3))
> (display (dot-product zero-vector a))
0
> (display (dot-product one-vector a))
6
> (define b (list 10 20 30))
> (display (dot-product a b))
140
> (define one-matrix (list (list 1 1 1) (list 1 1 1) (list 1 1 1)))
> (define zero-matrix (list (list 0 0 0) (list 0 0 0) (list 0 0 0)))
> (define A (list (list 2 3 0) (list -3 4 5) (list 6 -2 1)))
> (define B (list (list 7 2 3 8) (list 9 -1 -4 4) (list 5 -3 1 0)))
> (display (matrix-*-vector A zero-vector))
(0 0 0)
> (display (matrix-*-vector A one-vector))
(5 6 5)
> (display (matrix-*-vector A a))
(8 20 5)
> (display (matrix-*-matrix A zero-matrix))
((0 0 0) (0 0 0) (0 0 0))
> (display (matrix-*-matrix A one-matrix))
((5 5 5) (6 6 6) (5 5 5))
> (display (matrix-*-matrix A B))
((41 1 -6 28) (40 -25 -20 -8) (29 11 27 40))
 
{% endhighlight %}


