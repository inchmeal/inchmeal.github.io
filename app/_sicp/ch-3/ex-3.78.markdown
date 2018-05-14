---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.78"
order: "078"
date: 2018-02-27 
---

Note: I can not test the exercises in this section as MIT scheme is giving an error for forward references: ;Premature reference.

{% highlight scheme linenos %}
(define (solve-2nd a b dt y0 dy0)
  (define y (integral (delay dy0) y0 dt))
  (define dy (integral (delay ddy) dy0 dt))
  (define ddy (add-streams
			   (scale-stream dy a)
			   (scale-stream y b)))
  y)
{% endhighlight %}

I am not sure if in the dy integral we should use `(* dt dt)` instead of `dt`.
