---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.35"
order: "035"
date: 2018-03-21 
---

Since, amb-evaluator is implemented later(as always in sicp), I first read the complete section.

I do like this approach of top down presentation of the concepts in SICP. It helps in designing systems from the perspective of how they will be used. Also, I feel it also helps in building abstractions. However, I generally get more confident of my understanding by reading till the bottom. 

To do these exercises, we have to use the amb-evaluator. Thus I am using the mit scheme code for sicp from [here][mit-amb].

Since this is a very different style of programming, Let me mention that as per my understanding the most fundemental change, which I had missed initially, is the following: 

**Every expression in the new evaluator can evaluate to many results, one at a time.**

After running the evaluator, I evaluated the following code:

{% highlight scheme linenos %}
(define (require p)
    (if (not p) (amb)))

(define (an-integer-between low high)
    (require (> high low))
    (amb (+ low 1) (an-integer-between (+ low 1) high)))

(define (a-pythagorean-triple-between low high)
  (let ((i (an-integer-between low high)))
    (let ((j (an-integer-between i high)))
      (let ((k (an-integer-between j high)))
        (require (= (+ (* i i) (* j j)) (* k k)))
        (list i j k)))))

{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(a-pythagorean-triple-between 0 100)

;;; Starting a new problem 
;;; Amb-Eval value:
(3 4 5)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(5 12 13)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(6 8 10)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(7 24 25)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(8 15 17)

{% endhighlight %}


[mit-amb]: https://mitpress.mit.edu/sicp/code/ch4-ambeval.scm
