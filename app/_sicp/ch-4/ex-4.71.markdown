---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.71"
order: "071"
date: 2018-04-04 
---

#### simple-query example

In simple query, `delay` ensures that we first find/match assertions and then *on demand* we evaluate rules. This behaviour will be same even if the underlying scheme is evaluates arguments right to left!

In some cases, using delay, postpones the infinite loop and even produce some result(if there are any assertions matched) while going into infinite loop.

Consider the following:

{% highlight scheme linenos %}
(assert! (tmp1 a))
(assert! (rule (tmp1 ?x) (tmp1 ?x)))
{% endhighlight %}

Evaluating the query `(tmp1 a)`

- With delay(original):
  
{% highlight scheme linenos %}
(tmp1 a)
(tmp1 a)
(tmp1 a)
(tmp1 a)
(tmp1 a)
(tmp1 a)
....
;;infinite loop
{% endhighlight %}

- Without delay(as suggested in exercise):

{% highlight scheme linenos %}
;;; Query results:
;Aborting!: maximum recursion depth exceeded
{% endhighlight %}

-------

#### disjunction example

Our `and` works procedurally in left to right order so should be the case with `or`. Thus if any clause in `or` can return some answer from a clause then instead of first evaluating all the clauses it would be better to first generate the first answer found!

Again like above this ensures left to right order as well as generates answers if found in earlier clauses even if later clauses result in infinite loop.

Consider the following example:

{% highlight scheme linenos %}
(assert! (tmp3 a))
(assert! (rule (tmp2 ?x) (or (tmp3 ?x)
							 (tmp2 ?x))))
{% endhighlight %}

Evaluating the query `(tmp2 a)`

- With delay(origninal):
  
{% highlight scheme linenos %}
(tmp2 a)
(tmp2 a)
(tmp2 a)
(tmp2 a)
(tmp2 a)
(tmp2 a)
....
;;infinite loop
{% endhighlight %}

- Without delay(as suggested in exercise):

{% highlight scheme linenos %}
;;; Query results:
;Aborting!: maximum recursion depth exceeded
{% endhighlight %}
