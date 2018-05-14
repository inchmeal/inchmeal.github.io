---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.56"
order: "056"
date: 2018-03-27 
---

#### (a)

{% highlight scheme linenos %}
;;; Query input:
(and (supervisor ?name (Bitdiddle Ben)) (address ?name ?addr))

;;; Query results:
(and (supervisor (tweakit lem e) (bitdiddle ben)) (address (tweakit lem e) (boston (bay state road) 22)))
(and (supervisor (fect cy d) (bitdiddle ben)) (address (fect cy d) (cambridge (ames street) 3)))
(and (supervisor (hacker alyssa p) (bitdiddle ben)) (address (hacker alyssa p) (cambridge (mass ave) 78)))

{% endhighlight %}

#### (b)

{% highlight scheme linenos %}
;;; Query input:
(and (salary (Bitdiddle Ben) ?ben-sal) (and (salary ?name ?sal) (lisp-value < ?sal ?ben-sal)))

;;; Query results:
(and (salary (bitdiddle ben) 60000) (and (salary (aull dewitt) 25000) (lisp-value < 25000 60000)))
(and (salary (bitdiddle ben) 60000) (and (salary (cratchet robert) 18000) (lisp-value < 18000 60000)))
(and (salary (bitdiddle ben) 60000) (and (salary (reasoner louis) 30000) (lisp-value < 30000 60000)))
(and (salary (bitdiddle ben) 60000) (and (salary (tweakit lem e) 25000) (lisp-value < 25000 60000)))
(and (salary (bitdiddle ben) 60000) (and (salary (fect cy d) 35000) (lisp-value < 35000 60000)))
(and (salary (bitdiddle ben) 60000) (and (salary (hacker alyssa p) 40000) (lisp-value < 40000 60000)))

{% endhighlight %}

#### (c)

{% highlight scheme linenos %}
;;; Query input:
(and (supervisor ?name ?sup) (job ?sup ?sup-job) (not (job ?sup (computer . ?comp))))

;;; Query results:
(and (supervisor (aull dewitt) (warbucks oliver)) (job (warbucks oliver) (administration big wheel)) (not (job (warbucks oliver) (computer . ?comp))))
(and (supervisor (cratchet robert) (scrooge eben)) (job (scrooge eben) (accounting chief accountant)) (not (job (scrooge eben) (computer . ?comp))))
(and (supervisor (scrooge eben) (warbucks oliver)) (job (warbucks oliver) (administration big wheel)) (not (job (warbucks oliver) (computer . ?comp))))
(and (supervisor (bitdiddle ben) (warbucks oliver)) (job (warbucks oliver) (administration big wheel)) (not (job (warbucks oliver) (computer . ?comp))))
{% endhighlight %}
