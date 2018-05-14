---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.73"
order: "073"
date: 2018-04-04 
---

For infinite streams, `flatten-stream` goes into infinite recursion without printing anything!

There's a subtle difference between this infinite streams and in ex-4.71. When we combine the stream of streams using `flatten-stream`, then it might be the case we have infinite stream of finite(or infinite) streams. For such infinite stream of streams, we should be delaying else recursion with scheme's applicative order evaluation will cause it to keep computing the infinite stream of streams!

It took me some time to come up with an example to demonstrate the situation for infinite stream of infinite stream. The example turned out to be quite simple.

Using the same rules which i used in ex-4.72:

{% highlight scheme linenos %}
(assert! (ones ()))
(assert! (rule (ones (1 . ?x)) (ones ?x)))

(assert! (twos ()))
(assert! (rule (twos (2 . ?x)) (twos ?x)))
{% endhighlight %}

Unlike the previous exercise, now i used `and` query instead of `or` query:

{% highlight scheme linenos %}
(and (ones ?x) (twos ?y))
{% endhighlight %}

Why `and`?

Because `and` passes the stream of resulting frames from each clause to the next clause! `or` does not do so. So, if first clause can generate infinite frames, then we can produce the context required to demonstrate `flatten-stream` getting infinite stream of stream!

#### With the change suggested in book:

{% highlight scheme linenos %}
;;; Query input:
(and (ones ?x) (twos ?y))

;;; Query results:
;Aborting!: maximum recursion depth exceeded
{% endhighlight %}

#### With the original version

{% highlight scheme linenos %}
;;; Query input:

(and (ones ?x) (twos ?y))

;;; Query results:
(and (ones ()) (twos ()))
(and (ones (1)) (twos ()))
(and (ones ()) (twos (2)))
(and (ones (1 1)) (twos ()))
(and (ones ()) (twos (2 2)))
(and (ones (1)) (twos (2)))
(and (ones ()) (twos (2 2 2)))
(and (ones (1 1 1)) (twos ()))
(and (ones ()) (twos (2 2 2 2)))
(and (ones (1)) (twos (2 2)))
(and (ones ()) (twos (2 2 2 2 2)))
(and (ones (1 1)) (twos (2)))
(and (ones ()) (twos (2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2)))
(and (ones (1 1 1 1)) (twos ()))
(and (ones ()) (twos (2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2)))
(and (ones (1 1)) (twos (2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1 1)) (twos (2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1)) (twos (2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1 1 1 1)) (twos ()))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1)) (twos (2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1 1)) (twos (2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1)) (twos (2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1 1 1)) (twos (2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1)) (twos (2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1 1 1)) (twos (2 2 2)))
(and (ones ()) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
(and (ones (1)) (twos (2 2 2 2 2 2 2 2 2 2 2 2 2 2)))
....
{% endhighlight %}
