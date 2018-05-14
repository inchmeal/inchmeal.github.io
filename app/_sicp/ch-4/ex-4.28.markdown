---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.28"
order: "028"
date: 2018-03-15 
---

Because operator might be a thunk, or allow me to call it delayed expression! For eg:

Consider tha 'lambda' passed as an argument.

{% highlight scheme linenos %}
(map (lambda (x) (+ x 1)) '(1 2 3 4)')
{% endhighlight %}

Let's first view how a `map` procedure might look:

{% highlight scheme linenos %}
(define (map proc items)
  (if (null? items)
      '()
      (cons (proc (car items))
            (map proc (cdr items)))))
{% endhighlight %}

With normal order evaluation, `proc` is a thunk and it contains `thunk (lambda (x) (+ x 1))`.

Now since it is a `thunk`, so we need to force its evaluation and need to we call `actual-value`.

Also, `actual-value` can work in both cases, either we pass a thunk or not. If thunk is passed then it first get the expression inside the thunk and evaluates it else it directly evaluates the expression.

So, we can *always* call `actual-value` instead of `eval`, because it will work for both cases either when operator is a thunk or not.

-------

#### Note

I think it's better to explain the logical/conceptual reason for why something might work or not instead of explaining that what will happen if that code is executed. It's better to explain why by saying **because it is this thing we need to do this** instead of saying **because code won't work correctly in that way**. 

The reason is that latter explains why it won't work in a certain way but it won't explain why it would would work in the proposed way.

For eg: in the above code, another way to explain is

If we had used `eval`, then this code `(proc (car items))` won't work because evaluating `proc` would not work because proc contains `'thunk` and when we pass this to `eval` then `eval` will try to lookup the procedure `thunk` instead of executing `lambda`.

Notice that this explanation only explained why *calling* `eval` won't work it did not explained why calling `actual-value` would work.

I might have done similar explanation earlier, I hope I will stick to *logical* way to explain instead of *implementation* way of explaining things.
