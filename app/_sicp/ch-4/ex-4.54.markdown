---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.54"
order: "054"
date: 2018-03-26 
---

{% highlight scheme linenos %}
(define (analyze-require exp)
  (let ((pproc (analyze (require-predicate exp))))
    (lambda (env succeed fail)
      (pproc env
             (lambda (pred-value fail2)
               (if (not (true? pred-value))
                   (fail2)
                   (succeed 'ok fail2)))
             fail))))
{% endhighlight %}

I tested it by simply executing the previous example after commenting the `require` procedure.
