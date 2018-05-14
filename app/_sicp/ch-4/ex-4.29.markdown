---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.29"
order: "029"
date: 2018-03-15 
---

#### Time taken:

Non memoized time: 13    
Memoized time: 0

Here, is the code i used in both versions:

{% highlight scheme linenos %}
;;; L-Eval input:
((lambda()
    (define (fact n) (if (= n 1) 1 (* n (fact (- n 1)))))
    (define (dummy b) (+ b b b b b b b b b b b b b b b b b b b b b b b b b b b b))
    (dummy (fact 100))
    'done))
;;; L-Eval value:
done
{% endhighlight %}

Code changes for Time:

{% highlight scheme linenos %}
(define (driver-loop)
  (prompt-for-input input-prompt)
  (let ((input (read)))
	(define stime (get-universal-time))
    (let ((output
           (actual-value input the-global-environment)))
	  (newline)
	  (display (list "Time Taken: " (- (get-universal-time) stime)))
	  (newline)
      (announce-output output-prompt)
      (user-print output)))
  (driver-loop))
{% endhighlight %}

-------

#### output

This is similar as ex-4.27. There I already thought of the difference between memoized and non-memoized which this exercise elaborates now.

Memoized:

{% highlight scheme linenos %}
;;; L-Eval input:
(square (id 10))

;;; L-Eval value:
100

;;; L-Eval input:
count

;;; L-Eval value:
1

{% endhighlight %}

Non-memoized:

{% highlight scheme linenos %}
;;; L-Eval input:
(square (id 10))

;;; L-Eval value:
100

;;; L-Eval input:
count

;;; L-Eval value:
2

{% endhighlight %}
