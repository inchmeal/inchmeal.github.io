---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.41"
order: "041"
date: 2016-04-28
---

I used procedure `unique-pairs` from previous exercise.

{% highlight racket linenos %}
(define (unique-triples n s)
  (filter
     (lambda (triplet)
          (let (
                  (p1 (car triplet))
                  (p2 (cadr triplet))
                  (p3 (cadr (cdr triplet)))
                )
                (and (not (> p3 n)) (> p3 p1) (> p3 p2))
          )
      )       
      (map
       (lambda(pair)
            (list (car pair) (cadr pair) (- s (+ (car pair) (cadr pair))))
       )  
       (unique-pairs n)
     )
 )
)
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
> (display (unique-triples 5 8))
((1 2 5) (1 3 4))
> (display (unique-triples 5 9))
((1 3 5) (2 3 4))
> (display (unique-triples 5 10))
((2 3 5) (1 4 5))
> (display (unique-triples 5 12))
((3 4 5))
> (display (unique-triples 5 13))
()
> (display (unique-triples 6 13))
((3 4 6) (2 5 6))
>
{% endhighlight %}

Note that this method can be further optimized if we have a different form of `map` in which it discards `nil` elements or it also accepts a predicate by which we can select or reject.

{% highlight racket linenos %}
(define (unique-triples-1 n s)        
      (map
       (lambda(pair)
         (let (
                  (p1 (car pair))
                  (p2 (cadr pair))
                  (p3 (- s (+ (car pair) (cadr pair))))
                )
                (if
                   (and (not (> p3 n)) (> p3 p1) (> p3 p2))
                   (list p1 p2 p3)
                   nil
                )
          )            
       )
       (unique-pairs n)
     )
)

; Output
> (display (unique-triples-1 5 8))
((1 2 5) (1 3 4) () () () () () () () ())
; Thus we need a way to remove these empty elements.
{% endhighlight %}

