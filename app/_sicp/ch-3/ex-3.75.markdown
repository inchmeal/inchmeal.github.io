---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.75"
order: "075"
date: 2018-02-27 
---

Well, Louis is introducing quite subtle bugs/inefficiencies(as he did in ex-3.63) :)

What we need is to use average values when calling sign-change-detector.

Louis mixed the average value and the values coming from input-stream. He passed `avpt` as `last-value` which makes the calculation of `avpt` wrong! Because `avpt` is the average of two values of the input stream and **not** the average of current value of input-stream and previous avpt!

This bug is quite difficult to spot because the variable name(last-value) and the value it holds are not in sync. It claims to be a value of input-stream but contains avpt!

Here is the fixed code:

{% highlight scheme linenos %}
(define (make-zero-crossings input-stream last-value last-avpt)
  (let ((avpt (/ (+ (stream-car input-stream) last-value) 2)))
    (cons-stream (sign-change-detector avpt last-avpt)
                 (make-zero-crossings (stream-cdr input-stream)
                                      (stream-car input-stream) avpt))))
{% endhighlight %}
