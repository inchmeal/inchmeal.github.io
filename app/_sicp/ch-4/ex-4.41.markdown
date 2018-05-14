---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.41"
order: "041"
date: 2018-03-22 
---

Well, with the interesting results of previous exercises, I thought to mirror the previous solution without using `amb`. It took unneccessarily more time with only a slight improvement in performance. 

Later I wrote the permutation version too to check if there was indeed any performance gain.

The mirrored solution looks verbose but it is faster than the `permuation` based solution. Note that both solutions are faster than all the previous solutions.

First let's see the numbers:

|-------------------|------------|---------|
| Version           | Iterations | Time    |
|-------------------|------------|---------|
| Mirrored          | 10,000     | 6 secs  |
| Permutation based | 10,000     | 14 secs |
|-------------------|------------|---------|

Why mirrored version is faster? Because it is not trying every permutation.

Why this mirrored version is faster than the optimised `amb` version even when code is similar? Because (i)no backtracking as we discard the result as soon as it gets generated and move to next element unlike `amb` where we backtrack. (ii) Some minor optimizations like before combining possibilities there are some items which can be removed.(which was not possible in previous exercise).

Now, first the code for mirrored solution(Its too big compared to concise permutation based which is presented later):

Note: I used MIT scheme version of `remove` which requires to pass `lambda` instead of the element.

{% highlight scheme linenos %}
;; This procedure all the combinations such that each combination is
;; formed by selecting one item from each set. Then this combination is accumulated/added in results
;; if it passes the predicate? test.
(define (combinations predicate? . sets)

  (define (go-to-next positions)
	(define (iter rem-positions rem-sets)
	  (if (null? rem-positions)
		  '()
		  (let ((current-set-position (car rem-positions))
				(current-set (car rem-sets)))
			(if (null? (cdr current-set-position))
				(let ((rem-result (iter (cdr rem-positions)
										(cdr rem-sets))))
				  (if (null? rem-result)
					  '()
					  (cons current-set rem-result)))
				(cons (cdr current-set-position)
					  (cdr rem-positions))))))
	  (iter positions sets))
    
  
  (define (iter positions)
	(if (null? positions)
		'()
		(let ((next-elem (map car positions))
			  (next-positions (go-to-next positions)))
		  (if (or (null? predicate?) (predicate? next-elem))
			  (cons next-elem (iter next-positions))
			  (iter next-positions)))))
		
  (iter sets))

(define (flatten l)
  (map (lambda(elem)
		 (append (car elem) (cons (cadr elem) '())))
	   l))

(define (multiple-dwelling)
  (let ((fletcher (list 1 2 3 4 5)))
    (set! fletcher (remove (lambda(e) (or (= e 1) (= e 5))) fletcher))
	(let ((cooper (list 1 2 3 4 5)))
      (set! cooper (remove (lambda(e) (= e 1)) cooper))
	  (define list-f-c
		(combinations (lambda(elem)
						(let ((f (car elem))
							  (c (cadr elem)))
						  (and (not (= c f))
							   (not (= (abs (- f c)) 1)))))
					  fletcher
					  cooper))
	  (define result-f-c list-f-c)
	  (let ((miller (list 1 2 3 4 5)))
		(define list-f-c-m
		  (combinations (lambda (elem)
						  ;;elem here will be like ((1 2) 3)
						  (let ((f-c (car elem))
								(m (cadr elem)))
							(let ((f (car f-c))
								  (c (cadr f-c)))
							  (and (not (or (= m f) (= m c)))
								   (> m c)))))
						result-f-c
						miller))

		;;since combinations simply combine the elements we need to flatten them.
		;;see the eg in above comment in lambda. It will convert each element like
		;; this: ((1 2) 3) to (1 2 3).
		(define result-f-c-m (flatten list-f-c-m))
	  
		(let ((smith (list 1 2 3 4 5)))
		  (define list-f-c-m-s
			(combinations (lambda(elem)
							(let ((f-c-m (car elem))
								  (s (cadr elem)))
							  (let ((f (car f-c-m))
									(c (cadr f-c-m))
									(m (caddr f-c-m)))
								(and (not (or (= s f) (= s m) (= s c)))
									 (not (= (abs (- s f)) 1))))))
						  result-f-c-m
						  smith))
		
		  (define result-f-c-m-s (flatten list-f-c-m-s))
		  
		  (let ((baker (list 1 2 3 4 5)))
			(set! baker (remove (lambda(e) (= e 5)) baker))
			(define list-f-c-m-s-b
			  (combinations (lambda(elem)
							  (let ((f-c-m-s (car elem))
									(b (cadr elem)))
								(let ((f (car f-c-m-s))
									  (c (cadr f-c-m-s))
									  (m (caddr f-c-m-s))
									  (s (cadddr f-c-m-s)))
								  (not (or (= b f) (= b m) (= b c) (= b s))))))
							result-f-c-m-s
							baker))
			
			(define result-f-c-m-s-b (flatten list-f-c-m-s-b))

			(map (lambda(elem)
				   (map list '(fletcher cooper miller smith baker) elem))
				 result-f-c-m-s-b)))))))
{% endhighlight %}

Here goes the 'permutation' based solution:

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (define (predicate? permutation)
	(let ((f (car permutation))
		  (c (cadr permutation))
		  (m (caddr permutation))
		  (s (cadddr permutation))
		  (b (car (cddddr permutation))))
	  (and
	   (not (or (= f 1) (= f 5)))
	   (not (= c 1))
	   (not (= b 5))
	   (not (= (abs (- s f)) 1))
	   (not (= (abs (- c f)) 1))
	   (> m c))))

  (define rs (filter predicate? (permutations (list 1 2 3 4 5))))
 
  (map (lambda(elem)
		 (map list '(fletcher cooper miller smith baker) elem))
	   rs))
{% endhighlight %}
