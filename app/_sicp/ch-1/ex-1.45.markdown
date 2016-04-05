---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.45"
order: "045"
date: 2016-04-05
---

I tried to fing the value for number of damping but unable to do so. Thus I have written the procedure that takes number of dampings
also as an argument.

Here is the complete program including all the required other procedures:

{% highlight racket linenos %}
#lang sicp

(define tolerance 0.00001)
(define (fixed-point f first-guess)
  (define (close-enough? v1 v2)
      (< (abs (- v1 v2)) tolerance)
  )
  (define (try guess)
     (let ((next (f guess)))
        (if (close-enough? guess next)
           next
           (try next)
        )
     )
  ) 
  (try first-guess)
)

(define (expt b n)
  (expt-iter b n 1))
(define (expt-iter b counter product)
  (if (= counter 0)
      product
      (expt-iter b
                (- counter 1)
                (* b product)
      )
  )
)

(define (average a b) (/ (+ a b) 2))

(define (average-damp f)
  (lambda (x) (average x (f x)))
)

(define (sqrt x)
  (fixed-point (average-damp (lambda (y) (/ x y))) 1.0)
)

(define (nth-root x n d)
  (fixed-point (repeated (average-damp (lambda (y) (/ x (expt y (- n 1))))) d) 1.0)
)

(define (compose f g)
  (lambda (x) (f (g x)))
)

(define (repeated f n)
    (define (repeat rs k)
       (if (= k 1) rs (repeat (compose rs f) (dec k)))
    )
    (repeat f n)
)
{% endhighlight %}


I verfied that 4th root requires twice damping as mentioned in exercise. Then I checked till 12th root and twice damping works fine.
 
But at 13th root I tried with $$ 3, 4 $$ but program was not returning. There may be following cases:
 
- Either program is actually taking too much time for converging.
- Or the damping is not enough and program is going into infinite loop.

One way to figure out if it is going to infinite loop, is to modify the procedure fixed-point to store all the in between states. And
 as soon as a state is repeated we can report that and exit the program.
 
I have not implemented the said way because of shortage of time.
  
Here is the sample that I have tried:
  
{% highlight racket linenos %}
> (nth-root 4 2 1)
2.000000000000002
>  (nth-root 16 4 1)
. . user break
> (nth-root 16 4 2)
1.9829851551723494
> (nth-root 32 4 2)
2.3593094400395302
> (nth-root 32 5 2)
2.880431566615636
> (nth-root 64 6 2)
1.6880168356784016
> (nth-root 64 6 2)
1.6880168356784016
> (nth-root 64 7 2)
1.5563420802638785
> (nth-root 64 8 2)
2.9011991693926418
> (nth-root 64 9 2)
1.587407910960035
> (nth-root 64 10 2)
1.5157217915986738
> (nth-root 64 12 2)
1.2905943261680461
> (nth-root 10000000000 10 2)
. . user break
> (nth-root 10000000000 9 2)
12.915487872561545
> (nth-root 10000000000 10 3)
16.357875254120504
> (nth-root 10000000000 10 4)
8.8252937823063
> (nth-root 10000000000 10 5)
27.27799717247438
> (nth-root 10000000000 10 2)
9.999999377157861
> (nth-root 100000000000 11 2)
9.999996259502574
> (nth-root 1000000000000 12 2)
9.125893472950704
> (nth-root 10000000000000 13 2)
. . user break
> (nth-root 10000000000000 13 3)
. . user break
> (nth-root 10000000000000 13 4)
. . user break
> (nth-root 1000 13 2)
. . user break
> (nth-root 10000 13 3)
. . user break
> (nth-root 10000 13 4)
. . user break
> (nth-root 10000000000000 13 5)
. . user break
> (nth-root 10000000000000 13 1)
. . user break
> (nth-root 100000 12 2)
4.760492124974238
> (nth-root 100000 12 3)
2.3487475654398975
> (nth-root 100000 12 2)
4.760492124974238
> (nth-root 100000 13 2)
. . user break
> (nth-root 10000000 10 2)
8.957522092165945
> (nth-root 10000000000 10 2)
9.999999377157861
> (nth-root 10000000000 11 2)
7.341666504082071
> (nth-root 10000000000 12 2)
6.217396596725342
> (nth-root 10000000000 13 2)
. . user break
> (nth-root 10000000000 13 3)
. . user break
> (nth-root 10000000000 13 4)
. . user break
> (nth-root 10000000000 13 5)
. . user break

; And to my surprise, it works for 32nd power :(

> (nth-root 10000000000 32 4)
3.7737871042519613
> 
{% endhighlight %}  

