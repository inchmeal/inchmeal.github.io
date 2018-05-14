---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.32"
order: "032"
date: 2018-03-18 
---

I implemented a simple example which shows the difference between streams and lazier lazy lists, the example just demostrates that even 'car' is not evaluated unless it is accessed.

**Streams:**

{% highlight scheme linenos %}
1 ]=> (define test (lambda() (display 'invoked) 1))

;Value: test

1 ]=> (cons-stream (test) (test))
invoked
;Value 76: (1 . #[compound-procedure 77])
{% endhighlight %}

{% highlight scheme linenos %}

{% endhighlight %}

**Lazier lazy:**

{% highlight scheme linenos %}
;;; L-Eval input:
(define test (lambda() (display 'invoked) 1))

;;; L-Eval value:
ok

;;; L-Eval input:
(cons (test) (test))

;;; L-Eval value:
(compound-procedure (m) ((m x y)) <procedure-env>)
{% endhighlight %}

#### Take advantage of extra laziness

First, I thought of **infinite lists in both directions** but soon realised that this can be done with streams too. Similarly we can implement infinite trees too using streams(hint: cons of cons).

So, the only case where I found that *extra laziness* is giving extra advantage is **circular dependencies** which in the text is already demonstrated for solving first order differential equations.
