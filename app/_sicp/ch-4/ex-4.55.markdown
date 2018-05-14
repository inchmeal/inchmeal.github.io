---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.55"
order: "055"
date: 2018-03-27 
---

Using the query evaluator provided [here][mit-code].

Note that after loading the evaluator, we need to do two things:

- First, Initialize databse by executing this on repl: `(initialize-data-base microshaft-data-base)`
- Then, Start execute `(query-driver-loop)`

{% highlight scheme linenos %}
;;; Query input:
(supervisor ?x (Bitdiddle Ben))

;;; Query results:
(supervisor (tweakit lem e) (bitdiddle ben))
(supervisor (fect cy d) (bitdiddle ben))
(supervisor (hacker alyssa p) (bitdiddle ben))

;;; Query input:
(job ?name (accounting . ?job))

;;; Query results:
(job (cratchet robert) (accounting scrivener))
(job (scrooge eben) (accounting chief accountant))

;;; Query input:
(address ?name (Slumerville . ?addr))

;;; Query results:
(address (aull dewitt) (slumerville (onion square) 5))
(address (reasoner louis) (slumerville (pine tree road) 80))
(address (bitdiddle ben) (slumerville (ridge road) 10))
{% endhighlight %}

[mit-code]: https://mitpress.mit.edu/sicp/code/ch4-query.scm
