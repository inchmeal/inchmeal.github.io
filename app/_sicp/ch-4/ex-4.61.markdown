---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.61"
order: "061"
date: 2018-03-27 
---

{% highlight scheme linenos %}
;;; Query input:
(?x next-to ?y in (1 (2 3) 4))

;;; Query results:
((2 3) next-to 4 in (1 (2 3) 4))
(1 next-to (2 3) in (1 (2 3) 4))

;;; Query input:
(?x next-to 1 in (2 1 3 1))

;;; Query results:
(3 next-to 1 in (2 1 3 1))
(2 next-to 1 in (2 1 3 1))

;;; Query input:

{% endhighlight %}

Note that we can speculate from the last two output that search happens in depth first search order.
