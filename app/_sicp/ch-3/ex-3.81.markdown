---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.81"
order: "081"
date: 2018-02-28 
---

This is an interesting example to see the difference between imperative approach and stream based approach.

I created an auxillary procedure for to help in creating streams from lists. 

Let's first check the output:

{% highlight scheme linenos %}
1 ]=> (define
       requests
        (list->stream
		 '((reset 512)
		   generate
		   generate
		   (reset 512)
		   generate
		   generate
		   generate
		   reset
		   generate
		   generate
		   reset
		   generate
		   generate
		   generate)))

;Value: requests

1 ]=> (define random-stream-gen (make-rand-gen 729 1000))

;Value: random-stream-gen

1 ]=> (define random-stream (random-stream-gen requests))

;Value: random-stream

1 ]=> (get-n-items-of-stream random-stream 14)

;Value 55: (871 282 201 871 282 201 852 164 779 614 164 779 614 . 829)
{% endhighlight %}

Now, I think it is easier to understand the code:

{% highlight scheme linenos %}
(define (make-rand-gen default-seed upper-bound)
  ;Using foot-note 6 from chapter-3 to implement rand-update
  (define (rand-update x)
	(remainder (+ (* 29 x) 23) upper-bound))

  (define (gen request old-val)
	(cond ((and (pair? request) (eq? 'reset (car request))) (rand-update (cadr request)))
		  ((eq? 'reset request) (rand-update default-seed))
		  ((eq? 'generate request) (rand-update old-val))
		  (else 'invalid)
		  ))

  (define (make-rand-stream requests)
	(define s
	  (cons-stream
	   (gen (stream-car requests) default-seed)
	   (stream-map gen
				   (stream-cdr requests)
				   s)))
	s)
  make-rand-stream)
			  
(define (list->stream l)
  (cons-stream (car l) (list->stream (cdr l))))  
{% endhighlight %}

