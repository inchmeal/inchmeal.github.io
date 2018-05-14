---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.68"
order: "068"
date: 2018-02-26 
---

Let me first write the Louis code:

{% highlight scheme linenos %}
(define (pairs s t)
  (interleave
   (stream-map (lambda (x) (list (stream-car s) x))
               t)
   (pairs (stream-cdr s) (stream-cdr t))))
{% endhighlight %}

Note that pairs procedure requires invocation of `interleave`.  To invoke `interleave`, first it is required to evaluate the arguments passed to it. 

Thus `(pairs (stream-cdr s) (stream-cdr t))` is called. Now again, inside the `pairs` procedure to invoke `interleave`, procedure `pairs` is called again and which will again call `interleave` and so on. Thus it will go into **infinite loop without ever entering into `interleave` procedure**!

In the book's version this does not happen because the calls to `interleave` is inside the `cdr` part of the `cons-stream`. Thus this call will happen only when needed.

Well, I think this infinite loop happens only because of *applicative order evaluation*(see chapter 1, check ex-1.5). If the arguments were first expanded then reduced or *normal order evaluation* then it would have worked fine!
