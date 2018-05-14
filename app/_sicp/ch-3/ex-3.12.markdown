---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.12"
order: "012"
date: 2018-01-04 
---

{% highlight racket linenos %}
#lang sicp

(define (append! x y)
  (set-cdr! (last-pair x) y)
  x)


(define (last-pair x)
  (if (null? (cdr x))
      x
      (last-pair (cdr x))))


(define x (list 'a 'b))
(define y (list 'c 'd))
(define z (append x y))
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (display z)
(a b c d)
> (display (cdr x))
(b)
> (define w (append! x y))
> (display w)
(a b c d)
> (display x)
(a b c d)
> (display (cdr x))
(b c d)
> 
{% endhighlight %}

