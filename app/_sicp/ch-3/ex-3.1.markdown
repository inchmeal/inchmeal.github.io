---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.1"
order: "001"
date: 2017-12-29 
---

{% highlight racket linenos %}
#lang sicp

(define (make-accumulator total)
  (lambda (amt)
    (set! total (+ total amt))
    total
  )
)
{% endhighlight %}
