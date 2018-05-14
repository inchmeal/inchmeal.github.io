---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.70"
order: "070"
date: 2018-02-26 
---

There are two points to consider while writing `weighted-pairs` and `weighted-merge`:

- In `weighted-merge` when sum is same, we do not skip, unlike the normal merge because otherwise we will miss few pairs.
- In `weighted-pairs` the first pair is formed using first element of both streams(s and t) passed to it. This means that our weight function must always give highest priority(lowest weight) to this pair. It was tempting to use Louis code of ex-3.68 because then we no longer need to think of this case. The good news is that this will always be the case on our requirements i <= j and weight function (weight i) <= (weight j) if i <= j.

The code for `weighted-pairs` and `weighted-merge`:

{% highlight scheme linenos %}
(define (weighted-merge s1 s2 weight)
  (cond ((stream-null? s1) s2)
        ((stream-null? s2) s1)
        (else
         (let ((s1car (stream-car s1))
               (s2car (stream-car s2)))
           (cond ((<= (weight s1car) (weight s2car))
                  (cons-stream s1car (weighted-merge (stream-cdr s1) s2 weight)))
                 (else
                  (cons-stream s2car (weighted-merge s1 (stream-cdr s2) weight))))))))

(define (weighted-pairs s t weight)
  (cons-stream
   (list (stream-car s) (stream-car t))
   (weighted-merge
    (stream-map (lambda (x) (list (stream-car s) x))
                (stream-cdr t))
    (weighted-pairs (stream-cdr s) (stream-cdr t) weight)
	weight)))
{% endhighlight %}

#### Part (a)

{% highlight scheme linenos %}
(define pairs-by-sum (weighted-pairs
					  integers
					  integers
					  (lambda (pair)
						(+ (car pair) (cadr pair)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (get-n-items-of-stream pairs-by-sum 20)

;Value 15: ((1 1) (1 2) (1 3) (2 2) (1 4) (2 3) (1 5) (2 4) (3 3) (1 6) (2 5) (3 4) (1 7) (2 6) (3 5) (4 4) (1 8) (2 7) (3 6) (4 5) 1 9)
{% endhighlight %}

#### Part (b)

{% highlight scheme linenos %}
(define non-2-3-5-multiples
  (stream-filter
   (lambda (x)
	 (not
	  (or
	   (= 0 (remainder x 2))
	   (= 0 (remainder x 3))
	   (= 0 (remainder x 5)))))
   integers))

(define pairs-by-custom-wt (weighted-pairs
							non-2-3-5-multiples
							non-2-3-5-multiples
							(lambda (pair)
							  (let ((i (car pair))
									(j (cadr pair)))
							  (+ (* 2 i) (* 3 j) (* 5 i j))))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (get-n-items-of-stream pairs-by-custom-wt 20)

;Value 14: ((1 1) (1 7) (1 11) (1 13) (1 17) (1 19) (1 23) (1 29) (1 31) (7 7) (1 37) (1 41) (1 43) (1 47) (1 49) (1 53) (7 11) (1 59) (1 61) (7 13) 1 67)

{% endhighlight %}
