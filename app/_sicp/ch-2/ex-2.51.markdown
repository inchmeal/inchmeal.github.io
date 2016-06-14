---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.51"
order: "051"
date: 2016-05-14
---

Note that I am using `transform-painter` from the sicp package of Dr Racket. Its arguments are slightly different from the `transform-painter` code given in the book.

{% highlight racket linenos %}
(define (below painter1 painter2)
  (let ((split-point (make-vect 0.0 0.5)))
    (let ((paint-bot
                   ( (transform-painter 
                          (make-vect 0.0 0.0)
                          (make-vect 1.0 0.0)
                          split-point
                     )
                     painter1
                   )
          )
          (paint-up
                   ( (transform-painter
                          split-point
                          (make-vect 1.0 0.5)
                          (make-vect 0.0 1.0)
                     )
                     painter2
                   )
          )
         ) 
         (lambda (frame)
            (paint-bot frame)
            (paint-up frame)
         )
      )
   )
)
{% endhighlight %}


Alternative implementation of `below` using 'beside` and rotations:
        
{% highlight racket linenos %}
(define (below-alt painter1 painter2)
        (rotate90 (beside (rotate270 painter1) (rotate270 painter2)))
)
{% endhighlight %}
