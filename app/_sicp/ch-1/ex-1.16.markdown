---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.16"
order: "016"
date: 2016-03-31
---


{% highlight racket linenos %}
(define (fast-expt-itr b n)
  (define (f-itr a x n)
    (cond ((= n 0) a)
          ((even? n) (f-itr a (square x) (/ n 2)))
          (else (f-itr (* a x) x (- n 1)))
     )
  )
  (f-itr 1 b n)
)  
    
(define (square x)
          (* x x)
)
{% endhighlight %}
