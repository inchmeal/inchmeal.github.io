---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.50"
order: "050"
date: 2018-02-16 
---

I added required stream preocedures from this [answer][answer]. Here goes the code:

{% highlight scheme linenos %}
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

Output:

{% highlight scheme linenos %}
1 ]=> (define s1 (stream-enumerate-interval 1 5))

;Value: s1

1 ]=> (define s2 (stream-enumerate-interval 1 5))

;Value: s2

1 ]=> (define sum-stream (stream-map + s1 s2))

;Value: sum-stream

1 ]=> (stream-car sum-stream)

;Value: 2

1 ]=> (stream-car (stream-car sum-stream))

;The object 2, passed as the first argument to car, is not the correct type.
;To continue, call RESTART with an option number:
; (RESTART 2) => Specify an argument to use in its place.
; (RESTART 1) => Return to read-eval-print level 1.

2 error> (restart 1)

;Abort!

1 ]=> (stream-car (stream-cdr sum-stream))

;Value: 4

1 ]=> (stream-car (stream-cdr (stream-cdr sum-stream)))

;Value: 6

1 ]=> (stream-car (stream-cdr (stream-cdr (stream-cdr sum-stream))))

;Value: 8

1 ]=> (stream-car (stream-cdr (stream-cdr (stream-cdr (stream-cdr sum-stream)))))

;Value: 10

1 ]=> (stream-car (stream-cdr (stream-cdr (stream-cdr (stream-cdr (stream-cdr sum-stream))))))

;The object (), passed as the first argument to car, is not the correct type.
;To continue, call RESTART with an option number:
; (RESTART 2) => Specify an argument to use in its place.
; (RESTART 1) => Return to read-eval-print level 1.

2 error> (stream-cdr (stream-cdr (stream-cdr (stream-cdr (stream-cdr sum-stream)))))

;Value: ()

1 ]=> (stream-cdr sum-stream)

;Value 4: (4 . #[compound-procedure 5])

{% endhighlight %}

[answer]: https://stackoverflow.com/questions/24529271/sicp-cons-stream
