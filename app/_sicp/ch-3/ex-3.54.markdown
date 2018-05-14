---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.54"
order: "054"
date: 2018-02-17 
---

Lets first check the output:

Note we need, $$ n^{th} $$ element to be $$ (n+1)! $$.

{% highlight scheme linenos %}
1 ]=> (stream-ref factorials 4)

;Value: 120

1 ]=> (stream-ref factorials 3)

;Value: 24

1 ]=> (stream-ref factorials 2)

;Value: 6

1 ]=> (stream-ref factorials 1)

;Value: 2

1 ]=> (stream-ref factorials 0)

;Value: 1

1 ]=> (stream-ref factorials 5)

;Value: 720

1 ]=> (stream-ref factorials 20)

;Value: 51090942171709440000

1 ]=> (stream-ref factorials 30)

;Value: 8222838654177922817725562880000000

1 ]=> (stream-ref factorials 40)

;Value: 33452526613163807108170062053440751665152000000000

1 ]=> (stream-ref factorials 60)

;Value: 507580213877224798800856812176625227226004528988036003099405939480985600000000000000

1 ]=> (stream-ref factorials 100)

;Value: 9425947759838359420851623124482936749562312794702543768327889353416977599316221476503087861591808346911623490003549599583369706302603264000000000000000000000000
{% endhighlight %}

The code relevant for this exercise is at the top. However I am including the complete code.

{% highlight scheme linenos %}
(define factorials (cons-stream 1 (mul-streams factorials (integers-starting-from 2))))

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
