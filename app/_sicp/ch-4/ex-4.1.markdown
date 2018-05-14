---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.1"
order: "001"
date: 2018-03-04 
---

Left to right irrespective of the implmenting language order:

{% highlight scheme linenos %}
(define (list-of-values exps env)
  (if (no-operands? exps)
	  '()
	  (let ((first (eval (first-operand exps) env)))
		(let ((remaining (list-of-values (rest-operands exps) env)))
		  (cons first remaining)))))
{% endhighlight %}

Right to left irrespective of the implementing language order:

{% highlight scheme linenos %}
(define (list-of-values exps env)
  (if (no-operands? exps)
	  '()
	  (let ((remaining (list-of-values (rest-operands exps) env)))
		(let ((first (eval (first-operand exps) env)))
		  (cons first remaining)))))
{% endhighlight %}

Well, this can not be tested at this point as other methods are not yet implemented.
