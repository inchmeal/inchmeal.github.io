---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.76"
order: "076"
date: 2018-02-27 
---

{% highlight scheme linenos %}
(define (smooth s)
  (stream-map
    (lambda (last-value curr-value)
	  (/ (+ last-value curr-value) 2))
	s
	(stream-cdr s)
	))
{% endhighlight %}

Now, Louis code in ex-3.75 is not needed. We just need this line modified in the Alyssa's code in ex-3.74:

{% highlight scheme linenos %}
(define zero-crossings (make-zero-crossings (smooth sense-data) 0))
{% endhighlight %}

Or in the suggestion given by Eva Lu Ator in ex-3.74, we just need to do the following:

{% highlight scheme linenos %}
(define zero-crossings
  (let ((smoothed (smooth sense-data)))
	(stream-map sign-change-detector smoothed (cons-stream 0 smoothed))))
{% endhighlight %}
