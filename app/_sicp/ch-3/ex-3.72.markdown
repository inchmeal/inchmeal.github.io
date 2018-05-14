---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.72"
order: "072"
date: 2018-02-27 
---

We can use the procedure implemented in last exercise(which I implemented such that it can be reused here).

{% highlight scheme linenos %}
(define square-ramanujan-numbers
  (interesting-numbers
   (lambda (pair)
	 (+ (square (car pair)) (square (cadr pair))))
  3))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (display (get-n-items-of-stream square-ramanujan-numbers 10))
((((1 18) (6 17) 10 15) => 325) (((5 20) (8 19) 13 16) => 425) (((5 25) (11 23) 17 19) => 650) (((7 26) (10 25) 14 23) => 725) (((2 29) (13 26) 19 22) => 845) (((3 29) (11 27) 15 25) => 850) (((5 30) (14 27) 21 22) => 925) (((1 32) (8 31) 20 25) => 1025) (((5 35) (17 31) 25 25) => 1250) ((2 36) (12 34) 20 30) => 1300)
{% endhighlight %}


I am also putting the complete code till now for streams for future reference:

{% highlight scheme linenos %}
(define (cube x) (* x x x))

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

(define square-ramanujan-numbers
  (interesting-numbers
   (lambda (pair)
	 (+ (square (car pair)) (square (cadr pair))))
  3))

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

(define pairs-by-sum (weighted-pairs
					  integers
					  integers
					  (lambda (pair)
						(+ (car pair) (cadr pair)))))

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

(define (get-n-items-of-stream s n)
  (if (= n 1)
      (stream-car s)
      (cons (stream-car s) (get-n-items-of-stream (stream-cdr s) (- n 1)))))

(define (triples a b c)
  (cons-stream
   (list (stream-car a) (stream-car b) (stream-car c))
   (interleave
	(stream-map (lambda (pair)
				  (list (stream-car a) (car pair) (cadr pair)))
				(stream-cdr (pairs b c)))
	(triples (stream-cdr a) (stream-cdr b) (stream-cdr c)))))

(define py-triplets
  (stream-filter (lambda (triple)
				   (= (+ (square (car triple))
						 (square (cadr triple)))
					  (square (caddr triple))))
				 (triples integers integers integers)))
  
(define (interleave s1 s2)
  (if (stream-null? s1)
      s2
      (cons-stream (stream-car s1)
                   (interleave s2 (stream-cdr s1)))))

(define (pairs s t)
  (cons-stream
   (list (stream-car s) (stream-car t))
   (interleave
    (stream-map (lambda (x) (list (stream-car s) x))
                (stream-cdr t))
    (pairs (stream-cdr s) (stream-cdr t)))))

(define all (pairs integers integers))

(define ln2-stream
  (partial-sums (ln2-summands 1)))

(define ln2-stream-euler
  (euler-transform ln2-stream))

(define ln2-accelerated
  (accelerated-sequence euler-transform ln2-stream))

(define (ln2-summands n)
  (cons-stream (/ 1.0 n)
               (stream-map - (ln2-summands (+ n 1)))))

(define (partial-sums stream)
  (define ps
	(cons-stream
	 (stream-car stream)
	 (add-streams (stream-cdr stream) ps)))
  ps)

(define (stream-limit s tolerance)
  (let ((x1 (stream-car s))
		(x2 (stream-car (stream-cdr s))))
	(if (< (abs (- x2 x1)) tolerance)
		x2
		(stream-limit (stream-cdr s) tolerance))))

(define (euler-transform s)
  (let ((s0 (stream-ref s 0))           ; Sn-1
        (s1 (stream-ref s 1))           ; Sn
        (s2 (stream-ref s 2)))          ; Sn+1
    (cons-stream (- s2 (/ (square (- s2 s1))
                          (+ s0 (* -2 s1) s2)))
                 (euler-transform (stream-cdr s)))))

(define (make-tableau transform s)
  (cons-stream s
               (make-tableau transform
                             (transform s))))

(define (accelerated-sequence transform s)
  (stream-map stream-car
              (make-tableau transform s)))

(define (sqrt x tolerance)
  (stream-limit (sqrt-stream x) tolerance))

(define (sqrt-improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (sqrt-stream x)
  (define guesses
    (cons-stream 1.0
                 (stream-map (lambda (guess)
                               (sqrt-improve guess x))
                             guesses)))
    guesses)

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
    ((_ exp)  (memo-proc (lambda () exp)))))

(define (memo-proc proc)
  (let ((already-run? false) (result false))
    (lambda ()
      (if (not already-run?)
          (begin (set! result (proc))
                 (set! already-run? true)
                 result)
          result))))
{% endhighlight %}
