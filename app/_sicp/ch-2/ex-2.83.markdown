---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.83"
order: "083"
date: 2017-12-19
---

{% highlight racket linenos %}
(define (raise n)
  (apply-generic 'raise n)
)

; Now every package will install raise procedure For eg:
(define (install-scheme-number-package)
   (put 'raise '(scheme-number)
       (lambda (x) (make-rational x 1)) ; using primitive expt
   )
  'done
)
{% endhighlight %}
