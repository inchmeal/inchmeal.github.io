---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.54"
order: "054"
date: 2016-05-15
---

{% highlight racket linenos %}
#lang sicp

(define (equal? x y)
   (cond (
          (null? x) (null? y))
          ((null? y) false)
          ((pair? x)
                 (if (pair? y)                         
                        (and (equal? (car x) (car y)) (equal? (cdr x) (cdr y)))
                        false
                 )
          )
          ((pair? y) false)
          (else (eq? x y))
   )
)  
{% endhighlight %}

{% highlight racket linenos %}
> (equal? '1 '2)
#f
> (equal? '1 '1)
#t
> (equal? '(1 2 3) '(1 2 5))
#f
>  (equal? '(1 2 3) '(1 2 3))
#t
>  (equal? '(1 (12 13)) '(1 12 13))
#f
>  (equal? '(1 (12 13)) '(1 (12 13)))
#t
>  (equal? '(1 (12 13)) '(1 (13 12)))
#f
> (equal? '() nil)
#t
> (equal? '() '1)
#f
> 
{% endhighlight %}
