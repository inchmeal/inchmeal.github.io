---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.52"
order: "052"
date: 2016-05-14
---

**(a)**

I added eyes and mouth.

{% highlight racket linenos %}
(define wave 
   (segments->painter 
        (list 
           (make-segment (make-vect .25 0) (make-vect .35 .5)) 
           (make-segment (make-vect .35 .5) (make-vect .3 .6)) 
           (make-segment (make-vect .3 .6) (make-vect .15 .4)) 
           (make-segment (make-vect .15 .4) (make-vect 0 .65)) 
           (make-segment (make-vect 0 .65) (make-vect 0 .85)) 
           (make-segment (make-vect 0 .85) (make-vect .15 .6)) 
           (make-segment (make-vect .15 .6) (make-vect .3 .65)) 
           (make-segment (make-vect .3 .65) (make-vect .4 .65)) 
           (make-segment (make-vect .4 .65) (make-vect .35 .85)) 
           (make-segment (make-vect .35 .85) (make-vect .4 1)) 
           (make-segment (make-vect .4 1) (make-vect .6 1)) 
           (make-segment (make-vect .6 1) (make-vect .65 .85)) 
           (make-segment (make-vect .65 .85) (make-vect .6 .65)) 
           (make-segment (make-vect .6 .65) (make-vect .75 .65)) 
           (make-segment (make-vect .75 .65) (make-vect 1 .35)) 
           (make-segment (make-vect 1 .35) (make-vect 1 .15)) 
           (make-segment (make-vect 1 .15) (make-vect .6 .45)) 
           (make-segment (make-vect .6 .45) (make-vect .75 0)) 
           (make-segment (make-vect .75 0) (make-vect .6 0)) 
           (make-segment (make-vect .6 0) (make-vect .5 .3)) 
           (make-segment (make-vect .5 .3) (make-vect .4 0)) 
           (make-segment (make-vect .4 0) (make-vect .25 0))
           (make-segment (make-vect 0.43 0.9) (make-vect 0.45 0.9))  ;new segment
           (make-segment (make-vect 0.53 0.9) (make-vect 0.55 0.9))  ;new segment
           (make-segment (make-vect 0.47 0.75) (make-vect 0.51 0.75)) ;new segment
        )
   )
)
{% endhighlight %}

**(b)**

{% highlight racket linenos %}
; using only one image as suggested in exercise
(define (corner-split-alt1 painter n)
  (if (= n 0)
      painter
      (let (
             (up (up-split painter (- n 1)))
             (right (right-split painter (- n 1)))
             (corner (corner-split painter (- n 1)))
           )
           (beside
               (below painter up)
               (below right corner)
           )
     )
  )
)

; here i swapped below and beside of the original cornet split
(define (corner-split-alt2 painter n)
  (if (= n 0)
      painter
      (let ((up (up-split painter (- n 1)))
            (right (right-split painter (- n 1))))
        (let ((top-left (beside up up))
              (bottom-right (below right right))
              (corner (corner-split painter (- n 1))))
          (below (beside painter top-left)
                  (beside bottom-right corner))))))
{% endhighlight %}

**(c)**

{% highlight racket linenos %}
(define (square-limit-alt painter n) 
   (let (
          (combine4
                (square-of-four
                            flip-vert
                            rotate180 
                            identity
                            flip-horiz
                )
          )
        ) 
        (combine4
              (corner-split painter n)
        )
   )
)
{% endhighlight %}
