---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.72"
order: "072"
date: 2018-04-04 
---

If a rule evaluation results in an infinite stream, then without interleave in an `or`, we will never see the results from the other parts of the `or`.

For example, consider the following rules:

{% highlight scheme linenos %}
(assert! (ones ()))
(assert! (rule (ones (1 . ?x)) (ones ?x)))

(assert! (twos ()))
(assert! (rule (twos (2 . ?x)) (twos ?x)))
{% endhighlight %}

#### With interleave:

{% highlight scheme linenos %}
;;; Query input:
(or (ones ?x) (twos ?y))

;;; Query results:
(or (ones ()) (twos ?y))
(or (ones ?x) (twos ()))
(or (ones (1)) (twos ?y))
(or (ones ?x) (twos (2)))
(or (ones (1 1)) (twos ?y))
(or (ones ?x) (twos (2 2)))
(or (ones (1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2)))
(or (ones (1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2)))
(or (ones (1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2)))
(or (ones (1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones ?x) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
...
{% endhighlight %}

-----

#### Without interleave(replaced interleave-delayed in disjoin with stream-append-delayed):

{% highlight scheme linenos %}
;;; Query input:
(or (ones ?x) (twos ?y))

;;; Query results:
(or (ones ()) (twos ?y))
(or (ones (1)) (twos ?y))
(or (ones (1 1)) (twos ?y))
(or (ones (1 1 1)) (twos ?y))
(or (ones (1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
(or (ones (1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1)) (twos ?y))
...
{% endhighlight %}



