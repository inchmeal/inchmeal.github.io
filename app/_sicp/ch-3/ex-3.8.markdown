---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.8"
order: "008"
date: 2017-12-31 
---

The idea is to save the new value and return the new value. And if called first time then use 0 as old-value.

{% highlight racket linenos %}
(define f ((lambda(old) (lambda(x) (let ((temp old)) (set! old x) temp))) 0)) 
{% endhighlight %}

Output:
{% highlight racket linenos %}
0
{% endhighlight %}

Thus DrRacket evaluates from left to right.



