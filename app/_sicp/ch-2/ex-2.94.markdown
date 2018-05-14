---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.94"
order: "094"
date: 2017-12-28 
---

Following are the required changes:

{% highlight racket linenos %}
; gcd polynomial functions
(define (gcd-terms a b)
     (if (empty-termlist? b)
         a
         (gcd-terms b (remainder-terms a b))
     )
)

(define (remainder-terms a b)
      (cadr (div-terms a b))
)

(define (gcd-poly p1 p2)
    (if (same-variable? (variable p1) (variable p2))
        (make-poly (variable p1) (gcd-terms (term-list p1) (term-list p2)))
        (error "Polynomials are not in same variable")
    )
)


;changes for installing gcd

; generic gcd (outside all packages or global)
(define (greatest-common-divisor a b)
  (apply-generic 'greatest-common-divisor a b)
)

;in polynomial package
(put 'greatest-common-divisor '(polynomial polynomial) (lambda (a b) (tag (gcd-poly a b))))

; in integer package
(put 'greatest-common-divisor '(int int) (lambda (a b) (tag (gcd a b))))

; in 'scheme-number package
(put 'greatest-common-divisor '(scheme-number scheme-number) gcd)

{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define p1 (make-polynomial 'x (attach-tag 'sparse-termlist '((4 1) (3 -1) (2 -2) (1 2)))))
> (define p2 (make-polynomial 'x (attach-tag 'sparse-termlist '((3 1) (1 -1)))))
> (display (greatest-common-divisor p1 p2))
(polynomial x sparse-termlist (2 -1) (1 1))
{% endhighlight %}

Thus the gcd of $$ x^4 - x^3 - 2x^2 + 2x $$ and $$ x^3 - x $$ is $$ -x^2 + x $$. Manually I got the same gcd but with opposite sign i.e. $$ x^2 - x $$.

Note that I also found a bug in my old `div-terms` procedure where I should be using `cadr` but was using `cdr` instead.

