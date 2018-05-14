---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.59"
order: "059"
date: 2018-03-27 
---

#### (a)

{% highlight scheme linenos %}
;;; Query input:
(meeting ?div (Friday ?time))

;;; Query results:
(meeting administration (friday 1pm))
{% endhighlight %}

#### (b)

{% highlight scheme linenos %}
;;; Query input:
(assert! (rule (meeting-time ?person ?day-and-time)
			   (or (meeting whole-company ?day-and-time)
				   (and (job ?person (?div . ?sub))
						(meeting ?div ?day-and-time)))))

Assertion added to data base.

;;; Query input:
{% endhighlight %}

#### (c)

{% highlight scheme linenos %}
;;; Query input:
(meeting-time (Hacker Alyssa P) (Wednesday ?time))

;;; Query results:
(meeting-time (hacker alyssa p) (wednesday 4pm))
(meeting-time (hacker alyssa p) (wednesday 3pm))

;;; Query input:

{% endhighlight %}
