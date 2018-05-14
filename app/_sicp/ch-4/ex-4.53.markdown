---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.53"
order: "053"
date: 2018-03-26 
---

{% highlight scheme linenos %}
;;; Amb-Eval value:
((8 35) (3 110) (3 20))
{% endhighlight %}

Why they appear in this order? Because first we find `(3 20)` and it gets added in the end because of this statement `(permanent-set! pairs (cons p pairs))`.

Note that `prime-sum-pair` is the procedure given at the beginning of this section in the book.
