---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.96"
order: "096"
date: 2017-12-28 
---

I have done both parts in the same code. Procedure `divide-all-coeffs-by-their-gcd` is for part b.

Following are the new code/changes:

{% highlight racket linenos %}
  (define (gcd-terms a b)
     (if (empty-termlist? b)
         (divide-all-coeffs-by-their-gcd a)
         (gcd-terms b (pseudoremainder-terms a b))
     )
  )

  (define (pseudoremainder-terms p q)
    (let ((o1 (order (first-term p)))
          (o2 (order (first-term q)))
          (c (coeff (first-term q))))
      (let ((factor (expt c (+ 1 (- o1 o2)))))
        (let ((pp (mul-term-by-all-terms (make-term 0 factor) p)))
          (remainder-terms pp q)
        )
      )
    )
  )
  
  (define (remainder-terms a b)
      (cadr (div-terms a b))
  )

  (define (divide-all-coeffs-by-their-gcd terms)
    (define (get-coeffs-list terms)
      (if (empty-termlist? terms)
          '()
          (cons (coeff (first-term terms)) (get-coeffs-list (rest-terms terms)))
      )
    )
    (if (empty-termlist? terms)
        terms
        (let ((all-coeff (get-coeffs-list terms)))
          (let ((gcd-of-all-coeffs (apply gcd all-coeff)))
            (mul-term-by-all-terms (make-term 0 (/ 1 gcd-of-all-coeffs)) terms)
          )
        )
    )
  )
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define p1 (make-polynomial 'x (attach-tag 'sparse-termlist '((2 1) (1 -2) (0 1)))))
> (define p2 (make-polynomial 'x (attach-tag 'sparse-termlist '((2 11) (0 7)))))
> (define p3 (make-polynomial 'x (attach-tag 'sparse-termlist '((1 13) (0 5)))))
> (define q1 (mul p1 p2))
> (define q2 (mul p1 p3))
> (display (greatest-common-divisor q1 q2))
(polynomial x sparse-termlist (2 1) (1 -2) (0 1))
> 
{% endhighlight %}

