---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.61"
order: "061"
date: 2018-02-19 
---

{% highlight scheme linenos %}
(define (invert-unit-series s)
  (cons-stream 1
			   (scale-stream
				 (mul-series (stream-cdr s)
							 (invert-unit-series s))
				 -1)))
{% endhighlight %}

Test:

The product of a series by itself should return 1.

{% highlight scheme linenos %}
1 ]=> (define rexp (invert-unit-series exp-series))

;Value: memo-proc

1 ]=> 
;Value: rexp

1 ]=> (stream-ref rexp 0)

;Value: 1

1 ]=> (stream-ref rexp 1)

;Value: -1

1 ]=> (stream-ref rexp 2)

;Value: 1/2

1 ]=> (define prod (mul-series exp-series rexp))

;Value: prod

1 ]=> (stream-ref prod 0)

;Value: 1

1 ]=> (stream-ref prod 1)

;Value: 0

1 ]=> (stream-ref prod 2)

;Value: 0

1 ]=> (stream-ref prod 3)

;Value: 0
{% endhighlight %}
