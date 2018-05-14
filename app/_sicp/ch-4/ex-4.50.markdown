---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.50"
order: "050"
date: 2018-03-26 
---

I used dreaded assignment to move a random element at the beginning of the list and then using that as the next amb value.

{% highlight scheme linenos %}
;;add the below line in analyze
;; ((ramb? exp) (analyze-ramb exp))

(define (ramb? exp) (tagged-list? exp 'ramb))

(define (list-cons-ref l index)
  (define (iter l index)
	(if (= index 0)
		l
		(iter (cdr l) (- index 1))))
  
  (if (< index 0)
	  (error "index can not be negative!")
	  (iter l index)))

(define (move-random-to-first! l length)
  (if (<= length 1)
	  l
	  (let ((random-index (random length))
			(first-elem (car l)))
		(let ((list-ref (list-cons-ref l random-index)))
		  (let ((random-elem (car list-ref)))
			(set-car! l random-elem)
			(set-car! list-ref first-elem))))))

(define (analyze-ramb exp)
  (let ((cprocs (map analyze (amb-choices exp))))
    (lambda (env succeed fail)
	  (define (try-next choices length)
        (if (null? choices)
            (fail)
			(begin
			  (move-random-to-first! choices length)
			  ((car choices)
			   env
               succeed
               (lambda ()
                 (try-next
				  (cdr choices)
				  (- length 1)))))))
	  (try-next cprocs (length cprocs)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(ramb 10 20 30 40 50)

;;; Starting a new problem 

;;; Amb-Eval value:
30

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
20

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
10

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
50

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
40

;;; Amb-Eval input:
try-again

;;; There are no more values of
(ramb 10 20 30 40 50)
{% endhighlight %}

-----

#### Improvement in Alyssa's approach

As noted in last exercise, we have to find some way so that the words generation do not keep going in infinite loop only in one branch of possibilities. This was happening because we keep adding new prepositions because of the way `amb` works.

Now, if we replace all the `amb` with `ramb` in our parsing code then it will **not** keep going in one direction but it will try random directions.

Thus we don't depend on input length condition that i used in previous exercise. 

Here's how the new `parse-word` will now look:(note that now we no longer use '*unparsed*')

{% highlight scheme linenos %}
(define (parse-word word-list)
  ;(require (not (null? *unparsed*)))
  (let ((found-word (list-amb (cdr word-list))))
    ;(set! *unparsed* (cdr *unparsed*))
    (list (car word-list) found-word)))
{% endhighlight %}

With this and the replacing all the `amb` with `ramb`, we can get better sentences with variable lengths!
