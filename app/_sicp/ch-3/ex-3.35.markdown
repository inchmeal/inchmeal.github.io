---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.35"
order: "035"
date: 2018-02-13 
---

Here goes the completed code:

{% highlight scheme linenos %}
(define (squarer a b)
  (define (process-new-value)
    (if (has-value? b)
        (if (< (get-value b) 0)
            (error "square less than 0 -- SQUARER" (get-value b))
            (set-value! a (sqrt (get-value b)) me))
        (if (has-value? a)
			(set-value! b (* (get-value a) (get-value a)) me))))
  (define (process-forget-value)
	(forget-value! a me)
	(forget-value! b me)
	(process-new-value))
  (define (me request)
	(cond ((eq? request 'I-have-a-value) (process-new-value))
		  ((eq? request 'I-lost-my-value) (process-forget-value))
		  (else (error "Unknown request -- SQUARER request"))))
  (connect a me)
  (connect b me)
  me)


;; Some initializations for testing
(define X (make-connector))
(define SQR (make-connector))

(squarer X SQR)

(probe "X" X)
(probe "SQR" SQR)
{% endhighlight %}


Output:

{% highlight scheme linenos %}
1 ]=> (set-value! SQR 169 'ovais)

Probe: SQR = 169
Probe: X = 13
;Value: done

1 ]=> (forget-value! SQR 'ovais)

Probe: SQR = ?
Probe: X = ?
;Value: done

1 ]=> (set-value! X 25 'ovais)

Probe: X = 25
Probe: SQR = 625
;Value: done

1 ]=> 
{% endhighlight %}

