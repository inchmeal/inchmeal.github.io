---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.49"
order: "049"
date: 2016-05-13
---

Note that in all the exercises, we can use coordinates of a unit square i.e. $$ 0 \le x \le 1 $$ and $$ 0 \le y \le 1 $$.
Now the method `frame-coord-map` will maps our coordinates to the given frame.

(a)

As shown in the book, if we take $$ x = 0 $$ and $$ y = 0 $$, in the unit square it will be transformed to origin of the designated frame. Similarly it follows
for any value of $$ x $$ and $$ y $$.

Thus, to draw the outline of the frame, we just need to draw outline of unit square. The method  `frame-coord-map` will take care to transform our points to 
the points in the designated frame.


{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define draw-frame  
  (
    (lambda ()
       (let (
            (v1 (make-vect 0 0))
            (v2 (make-vect 0 0.99))
            (v3 (make-vect 0.99 0.99))
            (v4 (make-vect 0.99 0))                  
           )        
           (let (
                  (sgm1 (make-segment v1 v2))
                  (sgm2 (make-segment v2 v3))
                  (sgm3 (make-segment v3 v4))
                  (sgm4 (make-segment v4 v1))             
                )
                (segments->painter (list sgm1 sgm2 sgm3 sgm4))       
           )
       )
    )
  ) 
)
{% endhighlight %}


Output/Test:
        
{% highlight racket linenos %}
> (paint draw-frame)
; A unit square is drawn
{% endhighlight %}

Ideally `(draw-frame (make-frame (make-vect 0 0) (make-vect 5 5) (make-vect 10 10)))` should also draw the outline of the passed frame. It apparently does not work.
It seems the `draw-line` procedure is works correctly only while using `paint`.
 
The problem with `paint` is it draws only in a unit square frame. Thus to actually verify that points are correctly transformed and can outline any frame is possible 
only if procedure `segments-painter` are implemented without using `draw-line`. Thus instead of `draw-line`, use some new procedure which invokes Racket Graphics package
to draw line.

Currently because of time constraint, I am using `segments-painter` currently available with sicp package of Dr Racket.

(b)

{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define draw-X  
  (
    (lambda ()
      (let (
            (v1 (make-vect 0 0))
            (v2 (make-vect 0 0.99))
            (v3 (make-vect 0.99 0.99))
            (v4 (make-vect 0.99 0))                  
           )        
           (let (
                  (sgm1 (make-segment v1 v3))
                  (sgm2 (make-segment v2 v4))
                )
                (segments->painter (list sgm1 sgm2))       
           )
      )
    )
  ) 
)
{% endhighlight %}


Output/Test:
        
{% highlight racket linenos %}
> (paint draw-X)
; X is drawn 
{% endhighlight %}

(c)

{% highlight racket linenos %}
#lang sicp

(#%require sicp-pict)

(define draw-diamond  
  (
    (lambda ()
      (let (
            (v1 (make-vect 0 0.5))
            (v2 (make-vect 0.5 0.99))
            (v3 (make-vect 0.99 0.5))
            (v4 (make-vect 0.5 0))                  
           )        
           (let (
                  (sgm1 (make-segment v1 v2))
                  (sgm2 (make-segment v2 v3))
                  (sgm3 (make-segment v3 v4))
                  (sgm4 (make-segment v4 v1))             
                )
                (segments->painter (list sgm1 sgm2 sgm3 sgm4))       
           )
      )
    )
  ) 
)
{% endhighlight %}

(d)

It is too time consuming and similar to earlier exercises. As it is used in next exercise, I am using a solution from [wiki][wiki]:

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
        )
   )
) 
{% endhighlight %}


[wiki]: http://community.schemewiki.org/?sicp-ex-2.49