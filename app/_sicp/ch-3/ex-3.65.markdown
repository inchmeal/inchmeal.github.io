---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.65"
order: "065"
date: 2018-02-23 
---

{% highlight scheme linenos %}
(define ln2-stream
  (partial-sums (ln2-summands 1)))

(define ln2-stream-euler
  (euler-transform ln2-stream))

(define ln2-accelerated
  (accelerated-sequence euler-transform ln2-stream))

(define (ln2-summands n)
  (cons-stream (/ 1.0 n)
               (stream-map - (ln2-summands (+ n 1)))))

{% endhighlight %}


Output:

{% highlight scheme linenos %}
1 ]=> (stream-ref ln2-stream 0)

;Value: memo-proc

1 ]=> 
;Value: 1.

1 ]=> (stream-ref ln2-stream 1)

;Value: .5

1 ]=> (stream-ref ln2-stream 2)

;Value: .8333333333333333

1 ]=> (stream-ref ln2-stream 3)

;Value: .5833333333333333

1 ]=> (stream-ref ln2-stream 4)

;Value: .7833333333333332

1 ]=> (stream-ref ln2-stream 5)

;Value: .6166666666666666

1 ]=> (stream-ref ln2-stream 6)

;Value: .7595238095238095

1 ]=> (stream-ref ln2-stream 7)

;Value: .6345238095238095

1 ]=> (stream-ref ln2-stream 8)

;Value: .7456349206349207

1 ]=> (stream-ref ln2-stream 9)

;Value: .6456349206349207

1 ]=> (stream-ref ln2-stream 10)

;Value: .7365440115440116

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

1 ]=> (stream-ref ln2-stream-euler 0)

;Value: .7

1 ]=> (stream-ref ln2-stream-euler 1)

;Value: .6904761904761905

1 ]=> (stream-ref ln2-stream-euler 2)

;Value: .6944444444444444

1 ]=> (stream-ref ln2-stream-euler 3)

;Value: .6924242424242424

1 ]=> (stream-ref ln2-stream-euler 4)

;Value: .6935897435897436

1 ]=> (stream-ref ln2-stream-euler 5)

;Value: .6928571428571428

1 ]=> (stream-ref ln2-stream-euler 6)

;Value: .6933473389355742

1 ]=> (stream-ref ln2-stream-euler 7)

;Value: .6930033416875522

1 ]=> (stream-ref ln2-stream-euler 8)

;Value: .6932539682539683

1 ]=> (stream-ref ln2-stream-euler 9)

;Value: .6930657506744464

1 ]=> (stream-ref ln2-stream-euler 10)

;Value: .6932106782106783



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



1 ]=> (stream-ref ln2-accelerated 0)

;Value: 1.

1 ]=> (stream-ref ln2-accelerated 1)

;Value: .7

1 ]=> (stream-ref ln2-accelerated 2)

;Value: .6932773109243697

1 ]=> (stream-ref ln2-accelerated 3)

;Value: .6931488693329254

1 ]=> (stream-ref ln2-accelerated 4)

;Value: .6931471960735491

1 ]=> (stream-ref ln2-accelerated 5)

;Value: .6931471806635636

1 ]=> (stream-ref ln2-accelerated 6)

;Value: .6931471805604039

1 ]=> (stream-ref ln2-accelerated 7)

;Value: .6931471805599445

1 ]=> (stream-ref ln2-accelerated 8)

;Value: .6931471805599427

1 ]=> (stream-ref ln2-accelerated 9)

;Value: .6931471805599454

1 ]=> (stream-ref ln2-accelerated 10)

;Value: #[NaN]
{% endhighlight %}
