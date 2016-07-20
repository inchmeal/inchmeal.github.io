---
chapterName: "Building Abstractions with Data"
sectionName: "2.4 Multiple Representations for Abstract Data"
chapter: 2
solution: "2.75"
order: "075"
date: 2016-06-25
---

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define (make-from-mag-ang r a) 
   (define (dispatch op) 
         (cond ((eq? op 'real-part) (* r (cos a)))
               ((eq? op 'imag-part) (* r (sin a))) 
               ((eq? op 'magnitude) r) 
               ((eq? op 'angle) a) 
               (else (error "Invalid operation" op))
         )
   ) 
   dispatch
) 
{% endhighlight %}
