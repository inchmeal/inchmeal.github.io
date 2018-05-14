---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.28"
order: "028"
date: 2018-02-11 
---

This is just replica of `and-gate`:

{% highlight scheme linenos %}
(define (or-gate a1 a2 output)
  (define (or-action-procedure)
	(let ((new-value
		   (logical-or (get-signal a1) (get-signal a2))))
	  (after-delay or-gate-delay
				   (lambda ()
					 (set-signal! output new-value)))))
  (add-action! a1 or-action-procedure)
  (add-action! a2 or-action-procedure)
  'ok)
{% endhighlight %}

