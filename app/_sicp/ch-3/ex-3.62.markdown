---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.62"
order: "062"
date: 2018-02-19 
---

To implement `div-series` we just need to multiply `num` by `1/den`. We can use `invert-unit-series` to compute `1/den`. There is only one caveat that `invert-unit-series` works when the constant term is 1. To work around this we can do the following:

$$\, den = C \times \frac {den} C \,$$, where C is the constant/first term in denominator. Now the series $$\, \frac {den} C \,$$ has 1 as a constant term and can be inverted.

{% highlight scheme linenos %}
(define (div-series num den)
  (let ((C (stream-car den)))
	(if (= C 0)
		(error "Constant term of denom should not be 0")
		(mul-series num
					(scale-stream
					   (invert-unit-series (scale-stream den (/ 1 C)))
					   C)))))

(define tan-series (div-series sine-series cosine-series))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (stream-ref tan-series 0)

;Value: memo-proc

1 ]=> 
;Value: 0

1 ]=> (stream-ref tan-series 1)

;Value: 1

1 ]=> (stream-ref tan-series 2)

;Value: 0

1 ]=> (stream-ref tan-series 3)

;Value: 1/3

1 ]=> (stream-ref tan-series 5)

;Value: 2/15

1 ]=> (stream-ref tan-series 7)

;Value: 17/315

1 ]=> (stream-ref tan-series 9)

;Value: 62/2835

{% endhighlight %}


I am also including the complete code - thus including all the code for series as well as stream operations that we have used till now.

{% highlight scheme linenos %}
(define (div-series num den)
  (let ((C (stream-car den)))
	(if (= C 0)
		(error "Constant term of denom should not be 0")
		(mul-series num
					(scale-stream
					   (invert-unit-series (scale-stream den (/ 1 C)))
					   C)))))

(define tan-series (div-series sine-series cosine-series))

(define (invert-unit-series s)
  (cons-stream 1
			   (scale-stream
				 (mul-series (stream-cdr s)
							 (invert-unit-series s))
				 -1)))

(define (mul-series s0 s1)
  (cons-stream (* (stream-car s0)
				  (stream-car s1))
               (add-streams
				  (scale-stream
				       (stream-cdr s1)
				       (stream-car s0)) 
                  (mul-series (stream-cdr s0) s1))))

(define (integrate-series s)
  (stream-map / s integers))

(define exp-series
  (cons-stream 1
			   (integrate-series exp-series)))

(define sine-series
  (cons-stream 0
			   (integrate-series cosine-series)))
(define cosine-series
  (cons-stream 1
			   (integrate-series (scale-stream sine-series -1))))

(define (scale-stream stream factor)
  (stream-map (lambda (x) (* x factor)) stream))

(define (mul-streams s1 s2)
  (stream-map * s1 s2))

(define integers (cons-stream 1 (add-streams ones integers)))

(define (add-streams s1 s2)
  (stream-map + s1 s2))

(define ones (cons-stream 1 ones))

(define (integers-starting-from n)
  (cons-stream n (integers-starting-from (+ n 1))))

(define (display-stream s)
  (stream-for-each display-line s))

(define (display-line x)
  (newline)
  (display x))

(define (stream-ref s n)
  (if (= n 0)
      (stream-car s)
      (stream-ref (stream-cdr s) (- n 1))))
(define (stream-map proc s)
  (if (stream-null? s)
      the-empty-stream
      (cons-stream (proc (stream-car s))
                   (stream-map proc (stream-cdr s)))))
(define (stream-for-each proc s)
  (if (stream-null? s)
      'done
      (begin (proc (stream-car s))
             (stream-for-each proc (stream-cdr s)))))

(define (stream-map proc . argstreams)
  (if (stream-null? (car argstreams))
      the-empty-stream
      (cons-stream
       (apply proc (map stream-car argstreams))
       (apply stream-map
              (cons proc (map stream-cdr argstreams))))))

(define (stream-enumerate-interval low high)
  (if (> low high)
      the-empty-stream
      (cons-stream
       low
       (stream-enumerate-interval (+ low 1) high))))

(define (stream-filter pred stream)
  (cond ((stream-null? stream) the-empty-stream)
        ((pred (stream-car stream))
         (cons-stream (stream-car stream)
                      (stream-filter pred
                                     (stream-cdr stream))))
        (else (stream-filter pred (stream-cdr stream)))))

(define (stream-car stream) (car stream))

(define (stream-cdr stream) (force (cdr stream)))

(define (force exp) (exp))

(define-syntax cons-stream
  (syntax-rules ()
    ((_ a b) (cons a (delay b)))))

(define-syntax delay
  (syntax-rules ()
    ((_ exp) (memo-proc (lambda () exp)))))

(define (memo-proc proc)
  (let ((already-run? false) (result false))
    (lambda ()
      (if (not already-run?)
          (begin (set! result (proc))
                 (set! already-run? true)
                 result)
          result))))
{% endhighlight %}


