---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.68"
order: "068"
date: 2018-03-29 
---

{% highlight scheme linenos %}
;;; Query input:

(assert! (rule (reverse () ())))

Assertion added to data base.

;;; Query input:

(assert! (rule (reverse (?x . ?y) ?r)
			   (and (reverse ?y ?ry)
					(append-to-form ?ry (?x) ?r))))

Assertion added to data base.

;;; Query input:

(reverse (1 2 3) ?x)

;;; Query results:
(reverse (1 2 3) (3 2 1))

;;; Query input:
(reverse (1) ?x)

;;; Query results:
(reverse (1) (1))

;;; Query input:

{% endhighlight %}

This `(reverse (1 2 3) ?x)` won't work as it generates an infinite loop when the rule `reverse` is evaluated recursively. This happens because the recursive evaluation have both variables unbound and there is nothing to bound those variables in the recursive evaluations that happen later. Thus we keep evaluating the same rule again and again!

Suppose if I try to remedy this problem by writing the rule:

{% highlight scheme linenos %}
(assert! (rule (reverse ?x ?r) (reverse ?r ?x)))
{% endhighlight %}

This is similar to the way, book tries to *fix* the rule `marriage`.

Thus similar to the reasoning in book, it will go to infinite loop and this time both versions `(reverse ?x (1 2 3))` as well as `(reverse (1 2 3) ?x)` can lead to infinite loop.

At this point I have postponed the previous exercise for detecting loop. Perhaps that solution would have fixed this and the above *fix* might have worked.
