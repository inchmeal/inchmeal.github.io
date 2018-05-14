---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.27"
order: "027"
date: 2018-03-15 
---

First note when we get *actual value* for an expression:

- When we invoke the procedure, then operator i.e. the name or lambda expression gets called for *actual value*.
- When we pass some argument to primitive procedure like `cons`.
- When we access that variable from the terminal prompt.
- When we force the evaluation by calling `(force-it <exp>)` in our program.

And as implemented in the book, all the arguments to compound procedure are delayed. Now we can solve the exercise:

------

{% highlight scheme linenos %}
(define w (id (id 10)))
{% endhighlight %}

- On defining w, we invoke `id` with argument `(id 10)`. 
- Since we have normal order evaluation, the argument `(id 10)` does not get evaluated. 
- The procedure then returns `x` contains *delayed argument* `(id 10)`. 
- Since we do not access `x`, the `w` variable is binds it to `x` which contains `(id 10)`.

{% highlight scheme linenos %}
;;; L-Eval input:
count
;;; L-Eval value:
1
{% endhighlight %}

- Clearly, count is 1, because `id` is invoked only once till now.
- Now when, if we print `w`, this means it will print actual value stored in `w`, which causes the evaluation `(id 10)`.(This is actually `'thunk (id 10)`).
- Since `id` is invoked again, we have `x` as 10(this is actually `'thunk 10`) and count becomes 2.(Note that `+` has applicative order evaluation)
- Because `actual-value` is recursive - it calls 'force-it' which again calls 'actual-value' untill all thunks are evaluated - we get the value 10.

{% highlight scheme linenos %}
;;; L-Eval input:
w
;;; L-Eval value:
10
;;; L-Eval input:
count
;;; L-Eval value:
2
{% endhighlight %}

One important and interesting thing to note is that without memoization in `force-it`, `w` still contains `'thunk (id 10)`. Thus every access of `w` would have caused invocation of `id` and thus `count` would have changed with each access!

With memoization, `w` would have contained `evaluated-thunk 10`, so it won't generate calls to `id`.
