---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.71"
order: "071"
date: 2018-02-27 
---

Since next exercise also require similar functionality, I implemented a generic procedure that can solve both exercises.

{% highlight scheme linenos %}
(define (skip-until cond-proc s)
  (define (iter ss count)
	(if (cond-proc (stream-car ss))
		(iter (stream-cdr ss) (+ count 1))
		(cons count ss)))
  (iter s 0))

(define (interesting-numbers weight-proc count)
	 
  (define interesting-pairs
	(weighted-pairs integers
					integers
					weight-proc))
  (define (iter s)
	(let ((w (weight-proc (stream-car s))))
	  (let ((res (skip-until
				    (lambda (pair)
					    (= w (weight-proc pair)))
					(stream-cdr s)
				  )))
		(if (= count (+ (car res) 1))
			(cons-stream
			 (list (get-n-items-of-stream s count) "=>" w)
			 (iter (cdr res)))
			(iter (cdr res))))))
	 
  (iter interesting-pairs))

(define ramanujan-numbers
  (interesting-numbers
   (lambda (pair)
	 (+ (cube (car pair)) (cube (cadr pair)))
	 )
   2))

(define (get-n-items-of-stream s n)
  (if (= n 1)
      (stream-car s)
      (cons (stream-car s) (get-n-items-of-stream (stream-cdr s) (- n 1)))))

{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (display (get-n-items-of-stream ramanujan-numbers 10))
((((1 12) 9 10) => 1729) (((2 16) 9 15) => 4104) (((2 24) 18 20) => 13832) (((10 27) 19 24) => 20683) (((4 32) 18 30) => 32832) (((2 34) 15 33) => 39312) (((9 34) 16 33) => 40033) (((3 36) 27 30) => 46683) (((17 39) 26 36) => 64232) ((12 40) 31 33) => 65728)
{% endhighlight %}
