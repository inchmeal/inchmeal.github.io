---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.55"
order: "055"
date: 2018-02-17 
---

Denoting the terms of the series as $$\, P_1, P_2, ... P_i ...  \,$$ and denoting the series from which we generate as $$\, S_1, S_2, ... S_i ..., S_n \,$$. Then the series can be defined as:

$$\,
\begin{align*}
  P_0 &= S_0 \\
  P_{i+1} &= P_{i} + S_{i+1} \\
\end{align*}
\,$$

Now, its simple to write the procedure:

{% highlight scheme linenos %}
(define (partial-sums stream)
  (cons-stream (stream-car stream) (add-streams (stream-cdr stream) (partial-sums stream))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (define S (partial-sums integers))

;Value: s

1 ]=> (stream-ref S 0)

;Value: 1

1 ]=> (stream-ref S 1)

;Value: 3

1 ]=> (stream-ref S 2)

;Value: 6

1 ]=> (stream-ref S 3)

;Value: 10

1 ]=> (stream-ref S 4)

;Value: 15

1 ]=> (stream-ref S 5)

;Value: 21

1 ]=> (stream-ref S 6)

;Value: 28

{% endhighlight %}
