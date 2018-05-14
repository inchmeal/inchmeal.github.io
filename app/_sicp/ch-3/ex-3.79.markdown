---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.79"
order: "079"
date: 2018-02-27 
---

{% highlight scheme linenos %}
(define (generic-solve-2nd a b dt y0 dy0)
  (define y (integral (delay dy0) y0 dt))
  (define dy (integral (delay ddy) dy0 dt))
  (define ddy (stream-map f dy y))
  y)
{% endhighlight %}
