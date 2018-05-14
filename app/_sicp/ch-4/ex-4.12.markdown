---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.12"
order: "012"
date: 2018-03-08 
---

That's interesting. 

**Note:** I implemented it on top of previous exercise.

I think the way book has given the code, it seemed that they already hinted that we **traverse** in environment and frame to **find** the correct pair.

So, implementing a generic **find** is the way to go!

`find` excepts 3 arguments:

- `contains?`: when an element is passed it checks whether that element contains the required "thing"! If found, it returns that "thing" or returns false.
- `next`: thats to go to the next element - in our case we need this to go to next environment, or next pair.
- `data`

Now, an interesting happened! I realised that `assoc` can be implemented using `find`! So, need not to use mit scheme's version or ch-3 code for `assoc`

`find-pair`, implemented using `find` again, returns the pair that contains the variable else returns false.

{% highlight scheme linenos %}
(define (find contains? next data)
  (if (null? data)
	  #f
	  (let ((found (contains? data)))
		(if found
			found
			(find contains? next (next data))))))

(define (assoc var table)
  (find (lambda(tbl)
		  (let ((pair (car tbl)))
			(if (eq? (car pair) var)
				pair
				#f)))
		 cdr
		 table))

(define (find-pair var env)
  (find (lambda(e)
		  (assoc var (frame-pairs (first-frame e))))
		enclosing-environment
		env))

(define (lookup-variable-value var env)
  (let ((pair (find-pair var env)))
	(if pair
		(cdr pair)
		(error "Unbound variable" var))))

(define (set-variable-value! var val env)
  (let ((pair (find-pair var env)))
	(if pair
		(set-cdr! pair val)
		(error "Unbound variable" var))))

(define (define-variable! var val env)
  (let ((pair (assoc var (frame-pairs (first-frame env)))))
	(if pair
		(set-cdr! pair val)
		(add-binding-to-frame! var val (first-frame env))
		)))
{% endhighlight %}

-----

Output:

Well, I tried few examples from previous exercise that involves creation of variables, lambdas...

{% highlight scheme linenos %}
;;; M-Eval input:
(define (fib n)
  (let fib-iter ((a 1)
                 (b 0)
                 (count n))
    (if (= count 0)
        b
        (fib-iter (+ a b) a (- count 1)))))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
ok

;;; M-Eval input:
(fib 10)

;;; M-Eval value:
55

;;; M-Eval input:
(for iter '(a b) iter)

;;; M-Eval value:
b

;;; M-Eval input:
(define proc (lambda () '((1 a) (2 b))))

;;; M-Eval value:
ok

;;; M-Eval input:
(for item (proc) (display item))
(1 a)(2 b)
;;; M-Eval value:
#!unspecific

;;; M-Eval input:
(for item (proc) (display item) 'done)
(1 a)(2 b)
;;; M-Eval value:
done

;;; M-Eval input:
(fib 5)

;;; M-Eval value:
5
{% endhighlight %}
