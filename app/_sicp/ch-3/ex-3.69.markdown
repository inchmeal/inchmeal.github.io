---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.69"
order: "069"
date: 2018-02-26 
---

{% highlight scheme linenos %}
(define (triples a b c)
  (cons-stream
   (list (stream-car a) (stream-car b) (stream-car c))
   (interleave
	(stream-map (lambda (pair)
				  (list (stream-car a) (car pair) (cadr pair)))
				(stream-cdr (pairs b c)))
	(triples (stream-cdr a) (stream-cdr b) (stream-cdr c)))))

(define py-triplets
  (stream-filter (lambda (triple)
				   (= (+ (square (car triple))
						 (square (cadr triple)))
					  (square (caddr triple))))
				 (triples integers integers integers)))
{% endhighlight %}

Example:

{% highlight scheme linenos %}
1 ]=> (stream-ref py-triplets 0)

;Value: memo-proc

1 ]=> 
;Value 4: (3 4 5)

1 ]=> (stream-ref py-triplets 1)

;Value 5: (6 8 10)

1 ]=> (stream-ref py-triplets 2)

;Value 6: (5 12 13)

1 ]=> (stream-ref py-triplets 3)

;Value 7: (9 12 15)

1 ]=> (stream-ref py-triplets 3)

;Value 7: (9 12 15)
{% endhighlight %}
