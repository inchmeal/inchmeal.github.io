---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.59"
order: "059"
date: 2018-02-18 
---

This is nice. Very clean, simple, elegant! 

However to check manually, what will be the next number in the series is quite time taking - I tried with `sine-series` - it's interesting to see correct numbers coming up! Skipping the manual description - it will require too much typing :)

Code for both parts:

{% highlight scheme linenos %}
(define (integrate-series s)
  (stream-map / s integers))

(define exp-series
  (cons-stream 1
			   (integrate-series exp-series)))

(define sine-series
  (cons-stream 0
			   (integrate-series cosine-series)))
(define cosine-series
  (cons-stream 1
			   (integrate-series (scale-stream sine-series -1))))
{% endhighlight %}


Output:

{% highlight scheme linenos %}
1 ]=> (stream-ref exp-series 0)

;Value: memo-proc

1 ]=> 
;Value: 1

1 ]=> (stream-ref exp-series 1)

;Value: 1

1 ]=> (stream-ref exp-series 2)

;Value: 1/2

1 ]=> (stream-ref exp-series 3)

;Value: 1/6

1 ]=> (stream-ref exp-series 4)

;Value: 1/24

1 ]=> (stream-ref sine-series 0)

;Value: 0

1 ]=> (stream-ref sine-series 1)

;Value: 1

1 ]=> (stream-ref sine-series 2)

;Value: 0

1 ]=> (stream-ref sine-series 3)

;Value: -1/6
{% endhighlight %}
