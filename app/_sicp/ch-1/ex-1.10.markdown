---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.10"
order: "010"
date: 2016-03-31
---

{% highlight racket linenos %}
(define (A x y)
  (cond ((= y 0) 0)
        ((= x 0) (* 2 y))
        ((= y 1) 2)
        (else (A (- x 1)
                 (A x (- y 1))))))
{% endhighlight %}
                 
Output returned by given statements:

{% highlight racket linenos %}
(A 1 10)
; 1024
(A 2 4)
; 65536
(A 3 3)
; 65536
{% endhighlight %}

Mathematical definition for:

{% highlight racket %}
(define (f n) (A 0 n))
{% endhighlight %}

Clearly it is: $$ 2n $$



Mathematical definition for:

{% highlight racket %}
(define (f n) (A 1 n))

; We expand the function until it reaches to the most primitive form.

(A 1 n)
(A 0 (A 1 n-1))
(A 0 (A 0 (A 1 n-2)))
(A 0 (A 0 (A 0 (A 1, n-3)))
....
....
(A 0 (A 0 .... (A 1 n - (n-1) ))))))
(A 0 (A 0 .... (A 1 1))))))
(A 0 (A 0 .... 2)))))
(A 0 (A 0 .... (* 2 2))))))
A(0, A(0, .... (* 2 (* 2 2)))))
...
(* 2 (* 2 (* 2 .... n times)))
{% endhighlight %}

Clearly it is: $$ 2^n $$.



Mathematical definition for:

{% highlight racket %}
(define (f n) (A 2 n))

; We expand the function until it reaches to the most primitive form.

(A 2 n)
(A 1 (A 2 n-1))
(A 1 (A 1 (A 2 n-2)))
...
(A 1 (A 1 ... (A 2 1)))
(A 1 (A 1 ... (A 1 2)))

; We know A(1, n) is 2^n

(A 1 (A 1 ... (A 1 2)))
(^ 2 (^ 2 (^ 2 ...) n times

{% endhighlight %}


Clearly it is:     

$$ = 2^{2^{2^ ... \text{ n times}}} $$


 
                 
                 
