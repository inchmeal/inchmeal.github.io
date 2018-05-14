---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.73"
order: "073"
date: 2018-02-27 
---

{% highlight scheme linenos %}
(define (RC R C dt)
  (lambda (vo i)
	(add-streams
	 (scale-stream i R)
	 (scale-stream (integral i vo dt) (/ 1 C)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (define RC1 (RC 5 1 0.5))
;Value: rc1

1 ]=> (get-n-items-of-stream (RC1 0 ones) 5)
;Value 40: (5 5.5 6. 6.5 . 7.)
{% endhighlight %}
