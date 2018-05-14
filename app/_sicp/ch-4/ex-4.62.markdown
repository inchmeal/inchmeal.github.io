---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.62"
order: "062"
date: 2018-03-27 
---

Code:

{% highlight scheme linenos %}
(assert! (rule (last-pair (?x . ()) (?x . ()))))
(assert! (rule (last-pair (?x ?y . ?z) ?r)
			   (last-pair (?y . ?z) ?r)))
{% endhighlight %}

Output/Test:

{% highlight scheme linenos %}
;;; Query input:
(last-pair (3) ?x)

;;; Query results:
(last-pair (3) (3))

;;; Query input:
(last-pair (1 2 3) ?x)

;;; Query results:
(last-pair (1 2 3) (3))

;;; Query input:
(last-pair (2 ?x) (3))

;;; Query results:
(last-pair (2 3) (3))

;;; Query input:
{% endhighlight %}

On executing `(last-pair ?x (3))` the code outputs an error: `;Aborting!: maximum recursion depth exceeded`

In last case, I wonder how it even matches because there is nothing to match against! I guess the reason for it going to so much recursion can be answered only after understanding the query evaluator implementation.
