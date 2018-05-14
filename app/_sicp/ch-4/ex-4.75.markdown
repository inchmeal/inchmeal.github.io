---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.75"
order: "075"
date: 2018-04-04 
---

Code:

{% highlight scheme linenos %}
;;Add this line in the initialize-database procedure    
;; (put 'unique 'qeval uniquely-asserted)

(define (unique-query exps) (car exps))

(define (uniquely-asserted operands frame-stream)
  (simple-stream-flatmap
   (lambda (frame)
	 (let ((matched-frame-stream (qeval (unique-query operands)
								  (singleton-stream frame))))
	   (if (or (stream-null? matched-frame-stream)
			   (not (stream-null? (stream-cdr matched-frame-stream))))
		   the-empty-stream
		   matched-frame-stream)))
   frame-stream))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;; Query input:
(unique (job ?x (computer wizard)))

;;; Query results:
(unique (job (bitdiddle ben) (computer wizard)))

;;; Query input:
(unique (job ?x (computer programmer)))

;;; Query results:

;;; Query input:
(and (job ?x ?j) (unique (job ?anyone ?j)))

;;; Query results:
(and (job (aull dewitt) (administration secretary)) (unique (job (aull dewitt) (administration secretary))))
(and (job (cratchet robert) (accounting scrivener)) (unique (job (cratchet robert) (accounting scrivener))))
(and (job (scrooge eben) (accounting chief accountant)) (unique (job (scrooge eben) (accounting chief accountant))))
(and (job (warbucks oliver) (administration big wheel)) (unique (job (warbucks oliver) (administration big wheel))))
(and (job (reasoner louis) (computer programmer trainee)) (unique (job (reasoner louis) (computer programmer trainee))))
(and (job (tweakit lem e) (computer technician)) (unique (job (tweakit lem e) (computer technician))))
(and (job (bitdiddle ben) (computer wizard)) (unique (job (bitdiddle ben) (computer wizard))))

;;; Query input:
{% endhighlight %}
