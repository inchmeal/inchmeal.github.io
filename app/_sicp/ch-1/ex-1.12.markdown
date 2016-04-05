---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.12"
order: "012"
date: 2016-03-31
---

Assuming row and col are greater than one.

{% highlight racket linenos %}
(define (psc row col)
  (cond 
        ((<= col 0) 0)
        ((> col row) 0)
        ((< row 3) 1)
        (else (+
                (psc (- row 1)
                    (- col 1))
                (psc (- row 1)
                    col)
              )
        )
  )
)  
{% endhighlight %}
  


