---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.57"
order: "057"
date: 2018-03-27 
---

Rule:

Notice `assert!` for adding rules.

{% highlight scheme linenos %}
;;; Query input:
(assert!
 (rule (can-replace ?per1 ?per2)
	   (and (job ?per1 ?job1)
			(job ?per2 ?job2)
			(not (same ?per1 ?per2))
			(or (same ?job1 ?job2)
				(can-do-job ?job1 ?job2)))))

Assertion added to data base.

{% endhighlight %}

#### (a)

{% highlight scheme linenos %}
;;; Query input:
(can-replace ?per1 (Fect Cy D))

;;; Query results:
(can-replace (hacker alyssa p) (fect cy d))
(can-replace (bitdiddle ben) (fect cy d))
{% endhighlight %}


#### (b)

{% highlight scheme linenos %}
;;; Query input:
(and (can-replace ?p1 ?p2) (and (salary ?p1 ?s1) (salary ?p2 ?s2) (lisp-value < ?s1 ?s2)))

;;; Query results:
(and (can-replace (fect cy d) (hacker alyssa p)) (and (salary (fect cy d) 35000) (salary (hacker alyssa p) 40000) (lisp-value < 35000 40000)))
(and (can-replace (aull dewitt) (warbucks oliver)) (and (salary (aull dewitt) 25000) (salary (warbucks oliver) 150000) (lisp-value < 25000 150000)))
{% endhighlight %}
