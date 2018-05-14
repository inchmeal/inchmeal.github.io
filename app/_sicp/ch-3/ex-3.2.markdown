---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.2"
order: "002"
date: 2017-12-31 
---

{% highlight racket linenos %}
#lang sicp

(define (make-monitored proc)
   (let ((calls-count 0))
      (lambda (arg)
         (cond
            ((equal? arg 'howmany-calls?) calls-count)
            ((equal? arg 'reset-count) (set! calls-count 0) calls-count)
            (else (set! calls-count (+ calls-count 1)) (proc arg))
         )
      )
   )
)
{% endhighlight %}
