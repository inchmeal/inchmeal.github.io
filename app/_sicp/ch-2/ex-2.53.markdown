---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.53"
order: "053"
date: 2016-05-15
---

{% highlight racket linenos %}
> (list 'a 'b 'c)
(mcons 'a (mcons 'b (mcons 'c '())))
; (a b c)
> (list (list 'george))
(mcons (mcons 'george '()) '())
; ((george))
> (cdr '((x1 x2) (y1 y2)))
(mcons (mcons 'y1 (mcons 'y2 '())) '())
; ((y1 y2))
> (cadr '((x1 x2) (y1 y2)))
(mcons 'y1 (mcons 'y2 '()))
; (y1 y2)
> (pair? (car '(a short list)))
#f
; false
> (memq 'red '((red shoes) (blue socks)))
#f
; false
> (memq 'red '(red shoes blue socks))
(mcons 'red (mcons 'shoes (mcons 'blue (mcons 'socks '()))))
; (red shoes blue socks)
> 
{% endhighlight %}
