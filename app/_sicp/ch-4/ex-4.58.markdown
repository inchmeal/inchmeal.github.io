---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.58"
order: "058"
date: 2018-03-27 
---

There are two cases: (i) Supervisor does not exist (ii) Supervisor exists but does not work in same div.

{% highlight scheme linenos %}
;;; Query input:
(assert! (rule (big-shot ?person ?div)
			   (and (job ?person (?div . ?sub))
					(or (not (supervisor ?person ?sup))
						(and (supervisor ?person ?sup)
							 (not (job ?sup (?div . ?sup-subdiv))))))))

Assertion added to data base.

;;; Query input:
(big-shot ?p ?d)

;;; Query results:
(big-shot (warbucks oliver) administration)
(big-shot (scrooge eben) accounting)
(big-shot (bitdiddle ben) computer)
{% endhighlight %}
