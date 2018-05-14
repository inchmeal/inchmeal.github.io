---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.18"
order: "018"
date: 2018-03-12 
---

We have procedure:

{% highlight scheme linenos %}
(define (solve f y0 dt)
  (define y (integral (delay dy) y0 dt))
  (define dy (stream-map f y))
  y)
{% endhighlight %}

As shown in this exercise, this will get converted to:

{% highlight scheme linenos %}
(define (solve f y0 dt)
  (let ((y '*unassigned*)
		(dy '*unassigned*))
	(let ((a (integral (delay dy)) y0 dt)
		  (b (stream-map f y)))
	  (set! y a)
	  (set! dy b))))
{% endhighlight %}

**Assuming** that `delay` is implemented as special form in our evaluator such that it behaves as described in chapter-3, i.e. arguments to `delay` are not evaluated until it is accessed.

For `b` we require `dy` to be correctly defined because there is no `(delay y)` in `b` expression. Thus it won't work.

However, it **will** work with the way we implemented transformation described in the text because now before evaluating `dy`, `y` will be already defined.
