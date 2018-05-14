---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.36"
order: "036"
date: 2018-03-21 
---

Simply replacing won't be an adequate solution because, our amb-evaluator when reaches a dead-end, re-tries from the last point it failed.

This means that the evaluator will keep trying by incrementing the last counter. Since the last-counter won't exhaust, we won't ever try other possible paths. 

----

To implement the procedure which generates all possible triplets, I thought of using something like `interleave` but as I saw the solution provided my *meteorgan* on [wiki][wiki], I think his solution is very elegant and demonstrates the main point of the exercise that how ordering of expressions plays an important role.

Here is my solution, which is slightly modified version of *meteorgan*'s solution:

{% highlight scheme linenos %}
(define (a-pythagorean-triple-from low)
  (let ((k (an-integer-starting-from low)))
    (let ((j (an-integer-between low k)))
      (let ((i (an-integer-between low j)))
        (require (= (+ (* i i) (* j j)) (* k k)))
        (list i j k)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(a-pythagorean-triple-from 1)

;;; Starting a new problem 
;;; Amb-Eval value:
(3 4 5)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(6 8 10)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(5 12 13)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(9 12 15)

;;; Amb-Eval input:
{% endhighlight %}

I noticed that the first triplet generated from this version took less time than the first triplet in the previous version(with 1 and 100 as inputs). This is because in this solution, there are fewer elements in the third list compared to the previous solution and thus it exhausts faster.

[wiki]: http://community.schemewiki.org/?sicp-ex-4.36
