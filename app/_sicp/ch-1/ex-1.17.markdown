---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.17"
order: "017"
date: 2016-03-31
---

It assumes $$ a,b \ge 0 $$.

{% highlight racket linenos %}

(define (ml a b)
  (cond ((= b 0) 0)
         ((even? b) (double (ml a (half b))))
         (else (+ a (ml a (- b 1))))
  )
)  

(define (half a)
  (/ a 2)
)

(define (double a)
  (* a 2)
)

{% endhighlight %}
