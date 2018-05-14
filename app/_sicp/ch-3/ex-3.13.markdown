---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.13"
order: "013"
date: 2018-01-04 
---

Clearly it creates a circle and when we call `last-pair?` it should get stuck in loop.

{% highlight racket linenos %}
#lang sicp

(define (append! x y)
  (set-cdr! (last-pair x) y)
  x)


(define (last-pair x)
  (if (null? (cdr x))
      x
      (last-pair (cdr x))))

(define (make-cycle x)
  (set-cdr! (last-pair x) x)
  x)
{% endhighlight %}


Output:

{% highlight racket linenos %}
> (define z (make-cycle (list 'a 'b 'c)))
> (display z)
#0=(a b c . #0#)
> z
#0=(mcons 'a (mcons 'b (mcons 'c #0#)))
> (last-pair z)
. . user break
> 
{% endhighlight %}

