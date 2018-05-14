---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.82"
order: "082"
date: 2018-02-28 
---

MIT scheme does not seem to provide a method similar to `random-update`. It's implementation in previous exercise is also not accurate. So, I am using MIT scheme `random` instead of `random-update`. This comes with a small issue of how to create a random stream. I used a *quick workaround*: `(stream-map (lambda (dummy) (random-in-range x1 x2)) ones)`. 

Here goes the code:

{% highlight scheme linenos %}
(define (random-in-range low high)
  (let ((range (- high low)))
    (+ low (random range))))

(define (circle-test cx cy r)
  (lambda (x y)
          (let ((d2 (+ (square (- x cx)) (square (- y cy))))
                (r2 (square r)))
            (< d2 r2))))

(define (monte-carlo experiment-stream passed failed)
  (define (next passed failed)
    (cons-stream
     (/ passed (+ passed failed))
     (monte-carlo
      (stream-cdr experiment-stream) passed failed)))
  (if (stream-car experiment-stream)
      (next (+ passed 1) failed)
      (next passed (+ failed 1))))

(define (estimate-integral experiment-stream x1 x2 y1 y2)
  (let ((rect-area (* (- x2 x1) (- y2 y1))))
    (scale-stream (monte-carlo experiment-stream 0 0) rect-area)))

(define (estimate-pi)
  (let ((x1 -1.0)
        (x2 1.0)
        (y1 -1.0)
        (y2 1.0))
	
     (let ((unit-circle-test-stream
                 (stream-map
				  (circle-test 0.0 0.0 1.0)
				  (stream-map (lambda (dummy) (random-in-range x1 x2)) ones)
				  (stream-map (lambda (dummy) (random-in-range y1 y2)) ones)
				  )))
       (estimate-integral unit-circle-test-stream x1 x2 y1 y2))))

(define pi-stream (estimate-pi))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (stream-ref pi-stream 100)

;Value: 3.089108910891089

1 ]=> (stream-ref pi-stream 1000)

;Value: 3.104895104895105

1 ]=> (stream-ref pi-stream 3000)

;Value: 3.1189603465511495

1 ]=> (stream-ref pi-stream 5000)

;Value: 3.1369726054789044

1 ]=> (stream-ref pi-stream 8000)

;Value: 3.11411073615798

1 ]=> (stream-ref pi-stream 10000)

;Value: 3.1112888711128885

1 ]=> (stream-ref pi-stream 100000)

;Value: 3.138408615913841

1 ]=> (stream-ref pi-stream 1000000)

;Aborting!: out of memory

{% endhighlight %}
