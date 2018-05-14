---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.47"
order: "047"
date: 2018-02-15 
---

#### Using mutex

Here goes the code:

{% highlight scheme linenos %}
(define (make-semaphore n)
  (let ((lock (make-mutex))
		(wait (make-mutex))
		(current-count 0))

	(define (acquire-semaphore)
	  (if (< current-count n) ;checking without acquiring lock - somewhat more efficeint
		  (begin (lock 'acquire)
				 (if (< current-count n)
					 (begin (set! current-current (+ current-count 1))
							(if (= current-count n);no else for this if
								(wait 'acquire))
							(lock 'release)) ;; here the programs returns after succefully acquiring semaphore
				   (begin (lock 'release) (acquire-semaphore))))
		(begin (wait 'acquire) (acquire-semaphore))))

	(define (release-semaphore)
	  (lock 'acquire)
	  (if (> current-count 0) ;;to avoid if someone accidentally releases multiple times.
		  (set! current-count (- current-count 1))
		  (error "Inconsistent counts - check your acquires/releases" current-count))
	  (wait 'release)
	  (lock 'release))

	(define (dispatch message)
	  (cond ((eq? message 'acquire) (acquire-semaphore))
			((eq? message 'release) (release-semaphore))
			(else (error "Invalid operation - semaphore"))))

	dispatch))
{% endhighlight %}

Code is simple except how to avoid busy-wait - Using two mutex objects solve the purpose. One mutex is basically for the count checks - lock.

The 'wait' mutex is slightly difficult to understand - I hope it is correct :)

The `wait` mutex gets acquired when semaphore runs in full capacity i.e. total processes having the exclusive access using our semaphore is equal to n. Now when a new process comes and check that there is no capacity for further processes then it waits on `wait` mutex.

When any process releases the semaphore - the `wait` lock gets released - Then any process(es) waiting on this mutex now again check if access can be taken by calling the `acquire-semaphore` again.

#### Using atomic test-and-set!

{% highlight scheme linenos %}
(define (make-semaphore n)
  (let ((cell (list false))
		(current-count 0))

	(define (acquire-semaphore)
	  (if (test-and-set! cell)
		  (acquire-semaphore)
		  (if (< current-count n)
			  (begin (set! current-count (+ current-count 1))
					 (clear! cell))
			  (begin (clear! cell)
					 (acquire-semaphore)))))

	(define (release-semaphore)
	  (if (test-and-set! cell)
		  (release-semaphore)
		  (if (> current-count 0)
			  (begin (set! current-count (- current-count 1))
					 (clear! cell))
			  (error "Inconsistent counts - check your acquires/releases" current-count))))
	  
	(define (dispatch message)
	  (cond ((eq? message 'acquire) (acquire-semaphore))
			((eq? message 'release) (release-semaphore))
			(else (error "Invalid operation - semaphore"))))
	
	dispatch))

(define (test-and-set! cell)
  (if (car cell)
      true
      (begin (set-car! cell true)
             false)))
{% endhighlight %}
