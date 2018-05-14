---
chapterName: "Building Abstractions with Data"
chapter: 2
sectionName: "2.5 - Systems with Generic Operations"
solution: "2.87"
order: "087"
date: 2017-12-22 
---

We just need to add the following in polynomial package:

{% highlight racket linenos %}
(define (=is-zero? poly)
    (let ((terms (term-list poly)))
         (if (empty-termlist? terms)
		     #t
             (list-and (lambda (term) (=zero? (coeff term))) terms)
         )
    )
)
(put '=zero? '(polynomial) =is-zero?)
{% endhighlight %}

I used 'list-and' here. There have been many times, I felt its need in earlier exercises too. The `list-and` returns true checks if all the elements passed to it returns true on applying proc. Here is the code:

{% highlight racket linenos %}
(define (list-and proc list)
    (define (iter list)
        (if (null? list)
            #t
            (let ((rs (proc (car list))))
              (if (boolean? rs)
                  (if rs (iter (cdr list)) #f)
                  (error "Proc should return boolean")
              )
            )
        )
    )
  
    (cond ((null? list) (error "Operation not defined for 0 items"))
          ((not (pair? list)) (error "Operation works only for lists"))
          (else (iter list))
    )
)
{% endhighlight %}
