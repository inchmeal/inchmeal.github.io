---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.23"
order: "023"
date: 2018-03-14 
---

This is interesting.

Eva already explained it better than I can explain :)

The main difference is that loop in Alyssa's version is executed at the time of **execution** but in the book's version loop gets executed during **analyze**.

To understand it simply, let's say we have 2 expressions e1, e2.

What book's version will give after analyze:

{% highlight scheme linenos %}
(lambda(env)
(e1 env)
(e2 env))
{% endhighlight %}

What if we have 3 expression's e1, e2, e3, then book's version will give:

{% highlight scheme linenos %}
(lambda(env)
((
  (lambda (env)
    (e1 env)
    (e2 env))
  env)
 (e3 env)))
{% endhighlight %}

Now, note what will happen during **analyze** in Alyssa's code:

In both cases(two expressions or 3 expressions), it will return a lambda procdure that will *loop* through the sequence/expressions. *This looping does not happen in analysis phase!* This looping will happen in the *execution* phase instead.


But...

During execution, even if there is no looping, there are still extra invocations of the `lambda` which were not there in Alyssa's version. Does these extra 'lambda' will incur less cost then the looping?

Initially, I thought that number of `lambda` invocations in book's version is small because we are combining two in `sequentially` but if we look closely(try 4, 5, or more expressions) it becomes clear that number of these `lambda` is always = number of expressions - 1.

So, the other possible reason is in the book's version there are no extra expressions like `null?`, `cond`, `car`, `cdr` etc. In Alyssa's version we have these extra expressions in every invocation of the `loop`. 
