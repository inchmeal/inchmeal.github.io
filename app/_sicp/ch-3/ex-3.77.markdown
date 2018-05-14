---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.77"
order: "077"
date: 2018-02-27 
---

{% highlight scheme linenos %}
(define (integral delayed-integrand initial-value dt)
  (cons-stream initial-value
			   (let ((integrand (force delayed-integrand)))
				 (if (stream-null? integrand)
					 the-empty-stream
                     (integral (delay (stream-cdr integrand))
                               (+ (* dt (stream-car integrand))
                                  initial-value)
                               dt)))))
{% endhighlight %}
