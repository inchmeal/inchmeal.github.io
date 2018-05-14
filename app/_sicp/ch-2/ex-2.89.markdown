---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.89"
order: "089"
date: 2017-12-23 
---

I got something interesting to learn here. The `=zero?` procedure I implemented for polynomial in solution 2.87 was not working correctly!. Because I was using internal representation of the term-list in `=zero?` implementation(iterating it using car and cadr - inside list-and). The lesson learned is the code/procedures which are external to term-list api shoud not use the internal representation. Well, it seems obvious to not do such bad things :)

Here are the required changes:

{% highlight racket linenos %}
(define (adjoin-term term term-list)
      (define (iter count terms)
          (if (= count 0)
              terms
              (iter (- count 1) (cons 0 terms))
          )
       )
       (let ((cof (coeff term))
             (count (- (order term) (length term-list)))
            )
            (cond
                ((=zero? cof) term-list)
                ((< count 0) (error "Can not add term - order of passed term is already present in the list"))
                (else (cons cof (iter count term-list)))
            )
       )
)
(define (first-term term-list) (make-term (- (length term-list) 1) (car term-list)))
;all other procedures of term-list will remain same
{% endhighlight %}

And here goes the new `=zero?` implementation:

{% highlight racket linenos %}
(define (=is-zero? poly)
       (define (iter terms)
         (if (empty-termlist? terms)
             #t
             (and (=zero? (coeff (first-term terms))) (iter (rest-terms terms)))
         )
       )
       (iter (term-list poly))
)
{% endhighlight %}

Test:

{% highlight racket linenos %}
> (display (add (make-polynomial 'x (list 2 3)) (make-polynomial 'x (list 4 5))))

(polynomial x (int . 6) (int . 8))
> (display (add (make-polynomial 'x (list 2 3)) (make-polynomial 'x (list 4 5 6))))

(polynomial x 4 (int . 7) (int . 9))
> 
{% endhighlight %}
