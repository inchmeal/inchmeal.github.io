---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.95"
order: "095"
date: 2017-12-28 
---

{% highlight racket linenos %}
> (define p1 (make-polynomial 'x (attach-tag 'sparse-termlist '((2 1) (1 -2) (0 1)))))
> (define p2 (make-polynomial 'x (attach-tag 'sparse-termlist '((2 11) (0 7)))))
> (define p3 (make-polynomial 'x (attach-tag 'sparse-termlist '((1 13) (0 5)))))
> (define q1 (mul p1 p2))
> (define q2 (mul p1 p3))
> (display (greatest-common-divisor q1 q2))
(polynomial x sparse-termlist (2 1458/169) (1 -2916/169) (0 1458/169))
> (define pd1 (make-polynomial 'x (attach-tag 'dense-termlist '(1 -2 1))))
> (define pd2 (make-polynomial 'x (attach-tag 'dense-termlist '(11 0 7))))
> (define pd3 (make-polynomial 'x (attach-tag 'dense-termlist '(13 5))))
> (define q1 (mul pd1 pd2))
> (define q2 (mul pd1 pd3))
> (display (greatest-common-divisor q1 q2))
(polynomial x dense-termlist 1458/169 -2916/169 1458/169)
>
{% endhighlight %}

The fractions are appearing because of the integer divisions of coefficients in `div-terms` procedure. Perhaps this is the same reason that in last solution my manual gcd is of opposite sign compared to gcd given by the program.
