---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.29"
order: "029"
date: 2018-02-11 
---

{% highlight scheme linenos %}
(define (or-gate a1 a2 output)
  (let ((na1 (make-wire))
		(na2 (make-wire))
		(nout (make-wire)))
	(inverter a1 na1)
	(inverter a2 na2)
	(and-gate na1 na2 nout)
	(inverter nout output))
  'ok)
{% endhighlight %}

Note that here it is not required to call `add-delay` since `inverter` and `and-gate` already takes care of that.

The delay would ofcourse = 3 inverter delays + 1 and-gate delay.
