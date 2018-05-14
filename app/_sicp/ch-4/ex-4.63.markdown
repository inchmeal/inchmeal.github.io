---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.63"
order: "063"
date: 2018-03-28 
---

Two things to note is:

- Rule naming: Rule was going in infinite recursion when I named a rule as `son`. Thus rule name should not be in conflict with data.
- Rule to find grandson should use the results of the rule to find son.

{% highlight scheme linenos %}
;;; Query input:
(assert! (rule (find-son ?father ?son)
			   (or (son ?father ?son)
				   (and
					(son ?wife ?son)
					(wife ?father ?wife)))))

Assertion added to data base.

;;; Query input:
(assert! (rule (find-grandson ?grand ?son)
			   (and (find-son ?father ?son)
					(find-son ?grand ?father))))

Assertion added to data base.

;;; Query input:
(find-son ?f ?s)

;;; Query results:
(find-son ada jubal)
(find-son lamech jubal)
(find-son ada jabal)
(find-son lamech jabal)
(find-son methushael lamech)
(find-son mehujael methushael)
(find-son irad mehujael)
(find-son enoch irad)
(find-son cain enoch)
(find-son adam cain)

;;; Query input:
(find-grandson ?g ?s)

;;; Query results:
(find-grandson methushael jubal)
(find-grandson methushael jabal)
(find-grandson mehujael lamech)
(find-grandson irad methushael)
(find-grandson enoch mehujael)
(find-grandson cain irad)
(find-grandson adam enoch)

;;; Query input:
{% endhighlight %}
