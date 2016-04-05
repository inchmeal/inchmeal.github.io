---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.18"
order: "018"
date: 2016-03-31
---

It assumes $$ a,b \ge 0 $$.

{% highlight racket linenos %}

(define (ml-itr a b)
  (define (mitr r aa bb)
     (cond ((= bb 0) r)
         ((even? bb) (mitr r (double aa) (half bb)))
         (else (mitr (+ r aa) aa (- bb 1))))
  )
  (mitr 0 a b)
)  


(define (half a)
  (/ a 2)
)

(define (double a)
  (* a 2)
)

{% endhighlight %}
