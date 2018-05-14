---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.69"
order: "069"
date: 2018-03-29 
---

The interesting part of this exercise is that the first element in the conclusion of a rule which looked like a rule-name is just a member of the list to be matched against.

The code uses two rules `find-son` and `find-grandson` from in ex-4.63 and `last-pair` from in ex-4.62

{% highlight scheme linenos %}
;;; Query input:
(assert! (rule ((grandson) ?g ?s) (find-grandson ?g ?s)))

Assertion added to data base.

;;; Query input:
(assert! (rule ((great . ?rel) ?gg ?s)
			   (and (find-son ?gg ?g)
					(?rel ?g ?s)
					(last-pair ?rel (grandson)))))

Assertion added to data base.

;;; Query input:
((great grandson) ?g ?ggs)

;;; Query results:
((great grandson) mehujael jubal)
((great grandson) irad lamech)
((great grandson) mehujael jabal)
((great grandson) enoch methushael)
((great grandson) cain mehujael)
((great grandson) adam irad)

;;; Query input:
(?relationship Adam Irad)

;;; Query results:
((great grandson) adam irad)

;;; Query input:
{% endhighlight %}


Output:

{% highlight scheme linenos %}
;;; Query input:
((great grandson) ?g ?ggs)

;;; Query results:
((great grandson) mehujael jubal)
((great grandson) irad lamech)
((great grandson) mehujael jabal)
((great grandson) enoch methushael)
((great grandson) cain mehujael)
((great grandson) adam irad)

;;; Query input:
(?relationship Adam Irad)

;;; Query results:
((great grandson) adam irad)

;;; Query input:
{% endhighlight %}
