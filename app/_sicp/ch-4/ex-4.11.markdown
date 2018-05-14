---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.11"
order: "011"
date: 2018-03-08 
---

One thing to note is use of `assoc` that we saw in chapter-3 for table lookup(list of pairs).

Another point is we need a dummy symbol 'table in frame - i forgot it and figured later when things didn't work :(

(On a side note - I *feel* `cons`, `car`, `cdr` for list manipulations are not very pleasant to work)

{% highlight scheme linenos %}
;; we need cons to contain list of pairs.
;; the reason is same as when we build tables in ch-3:
;; if we add at beginning of list or pairs
;; it will change the initial point of the pairs.
;; thus we need a place to point to the head of this list. 
(define (make-frame variables values)
  (cons 'table (map cons variables values)))

;;not required in this impl
;;(define (frame-variables frame) (car frame))
;;(define (frame-values frame) (cdr frame))

(define (frame-pairs frame) (cdr frame))

(define (add-binding-to-frame! var val frame)
  (set-cdr! frame (cons (cons var val) (cdr frame))))

(define (lookup-variable-value var env)
  (define (env-loop env)
	(if (eq? env the-empty-environment)
		(error "Unbound variable" var)
		;;assoc - we saw in ch-3 to lookup in a table.
		(let ((pair (assoc var (frame-pairs (first-frame env)))))
          (if pair
			  (cdr pair)
			  (env-loop (enclosing-environment env))))))
  (env-loop env))

(define (set-variable-value! var val env)
  (define (env-loop env)
	(if (eq? env the-empty-environment)
		(error "Unbound variable" var)
		;;assoc - we saw in ch-3 to lookup in a table.
		(let ((pair (assoc var (frame-pairs (first-frame env)))))
          (if pair
			  (set-cdr! pair val)
			  (env-loop (enclosing-environment env))))))
  (env-loop env))

(define (define-variable! var val env)
  (let ((pair (assoc var (frame-pairs (first-frame env)))))
	(if pair
		(set-cdr! pair val)
		(add-binding-to-frame! var val (first-frame env))
		)))
{% endhighlight %}

-------

For testing I executed few examples from previous exercises that I worked:

{% highlight scheme linenos %}
;;; M-Eval input:
(for iter '(a b) iter)

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
b

;;; M-Eval input:
(define (fib n)
  (let fib-iter ((a 1)
                 (b 0)
                 (count n))
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1)))))

;;; M-Eval value:
ok

;;; M-Eval input:
(fib 10)

;;; M-Eval value:
55
{% endhighlight %}
