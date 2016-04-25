---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.3"
order: "003"
date: 2016-04-20
---

Lets define procedures for `area` and `parameter`:
 
{% highlight racket linenos %}
(define (area rect)
  (*
    (width-rect rect)
    (length-rect rect)
  )
)

(define (parameter rect)
  (* 2
       (+
         (width-rect rect)
         (length-rect rect)
       )
  )
)
{% endhighlight %} 

We need to implement two rectangle implementation such that same area and parameter procedure will work for both.

My first implementation represents a rectangle by two line segments: one along the width(breadth) and other along the length.

Clearly we can compute width(breadth) by finding the distance between two point of the width segment.

Similarly length can be computed using length segment.

Here is the complete code, including above procedures(area, parameter) and constructors and selectors for rectangle as well as procedures 
for segments from previous exercise.

{% highlight racket linenos %}
#lang sicp

(define (area rect)
  (*
    (width-rect rect)
    (length-rect rect)
  )
)

(define (parameter rect)
  (* 2
       (+
         (width-rect rect)
         (length-rect rect)
       )
  )
)

(define (make-rect seg-width seg-length)
  (cons seg-width seg-length)
)

(define (seg-width-rect rect)
  (car rect)
)

(define (seg-length-rect rect)
  (cdr rect)
)  

(define (square x) (* x x))

(define (distance p1 p2)
 (sqrt
      (+
        (square
               (-
                 (x-point p1)
                 (x-point p2)
               )
        )
        (square
               (-
                 (y-point p1)
                 (y-point p2)
               )
        )
     )
  )
)  

(define (width-rect rect)
  (let
      ((seg (seg-width-rect rect)))
      (distance
           (x-point seg)
           (y-point seg)
      )
  )  
)

(define (length-rect rect)
  (let
      ((seg (seg-length-rect rect)))
      (distance
           (x-point seg)
           (y-point seg)
      )
  )  
)

(define (make-segment st end)
        (cons st end)
)

(define (start-segment seg)
  (car seg)
)

(define (end-segment seg)
  (cdr seg)
)

(define (make-point x y)
  (cons x y)
)

(define (x-point point)
  (car point)
)

(define (y-point point)
  (cdr point)
)
{% endhighlight %}


My second implementation is to create rectangle using any 3 *consecutive* points(clockwise or anti-clockwise) of the rectangle.

{% highlight racket linenos %} 
(define (make-rect-by-points p1 p2 p3)
  (cons (make-segment p1 p2)
        (make-segment p2 p3)
  )      
) 
{% endhighlight %}


Note that this new rectangle constructor uses the old rectangle constructor. Another way is to implement all the selectors to 
find width and length using these points.

But if we implement procedures `width-rect` and `length-rect` for both rectangles, one using line-segments and other using points
 then we have to separate them so that compiler can figure out that they are different procedures. One way is to create
 procedures with different names like `width-rect-v1` and `width-rect-v2`. Other way is to write them in separate files and include
 only one of the implementation at a time.
 
As of now in the book till this point second approach is not described. I am not sure even if it is possible with scheme version R5RS.
 
Thus if the requirement is to implement two separate rectangles such that they are internally different from each other (unlike above 
where one is using the other), we are left with only one option to create two versions of the procedures like `width-rect-v1` and `width-rect-v2`
 for each implementation.
 
But this introduces a new problem that we need to change `area` and `parameter` procedures. As required in the book we need
 to implement only one version of these procedures, we can solve the problem by passing the length and width procedure as arguments.
Thus new `area` and `parameter` will look like following:
 
{% highlight racket linenos %}
(define (area proc-width proc-length rect)
  (*
    (proc-width rect)
    (proc-length rect)
  )
)

(define (parameter proc-width proc-length rect)
  (* 2
       (+
         (proc-width rect)
         (proc-length rect)
       )
  )
)
{% endhighlight %}

I am too lazy to write two versions for `width-rect` and `length-rect` :)

Note that OOPs solves this problem using virtual functions/late-binding/polymorphism.
 
 
 
 
