---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.64"
order: "064"
date: 2018-02-23 
---

{% highlight scheme linenos %}
(define (stream-limit s tolerance)
  (let ((x1 (stream-car s))
		(x2 (stream-car (stream-cdr s))))
	(if (< (abs (- x2 x1)) tolerance)
		x2
		(stream-limit (stream-cdr s) tolerance))))
{% endhighlight %}

Example:

{% highlight scheme linenos %}
1 ]=> (sqrt 4.0 0.0000001)

;Value: 2.000000000000002

1 ]=> (sqrt 4.0 0.0000000000000000000000000000001)

;Value: 2.

1 ]=> (sqrt 2 0.0000000000000000000001)

;Value: 1.414213562373095

1 ]=> (* (sqrt 2 0.0000000000000001) (sqrt 2 0.00000000000001))

;Value: 1.9999999999999996
{% endhighlight %}
