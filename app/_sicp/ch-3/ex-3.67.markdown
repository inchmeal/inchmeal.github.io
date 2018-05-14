---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.67"
order: "067"
date: 2018-02-26 
---

{% highlight scheme linenos %}
(define (pairs s t)
  (cons-stream
   (list (stream-car s) (stream-car t))
   (interleave
	(interleave
	 (stream-map (lambda (x) (list (stream-car s) x))
                 (stream-cdr t))
	 (stream-map (lambda (x) (list (stream-car t) x))
                 (stream-cdr s))
	 )
    (pairs (stream-cdr s) (stream-cdr t)))))
{% endhighlight %}
