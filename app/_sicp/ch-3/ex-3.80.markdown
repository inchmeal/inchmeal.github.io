---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.80"
order: "080"
date: 2018-02-27 
---

I can not test the exercises in this section as MIT scheme is giving an error for forward references: **;Premature reference**. 

{% highlight scheme linenos %}
(define (RLC R L C dt)
  (lambda (vc0 il0)
	(define vc (integral (delay dvc) vc0 dt))
	(define dvc (scale il (/ -1 C)))
	(define il (integral (delay dil) il0 dt))
	(define dil (add-streams
				 (scale-stream vc (/ 1 L))
				 (scale-stream il (/ (- R) L))))
	(cons vc il)))

(define RLC1 ((RLC 1 0.2 1 0.1) 0 10))
{% endhighlight %}
