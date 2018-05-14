---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.63"
order: "063"
date: 2018-02-20 
---

This took me quite some time to figure out. I also used the Louis style in few exercises before - well, it turns out to be very expensive way and should not be used.

I used `trace-entry` which turns out very useful.

{% highlight scheme linenos %}
(trace-entry sqrt-stream)
(trace-entry sqrt-stream-1) ;Louis version -renamed to avoid conflict 
(trace-entry stream-map)
(trace-entry sqrt-improve)
{% endhighlight %}

It will take quite a lot of writing to explain the exact behaviour. Instead I will just put the output from trace and give some pointers.

In Summary - its a bad idea to go with Louis version. And without memoize it gets worse!

#### Using memoize
		
{% highlight table linenos %}
|-----------------------------------------|------------------------------------------|
| Original                                | Louis                                    |
|-----------------------------------------|------------------------------------------|
| 1 ]=> (define orig (sqrt-stream 2))     | 1 ]=> (define louis (sqrt-stream-1 2))   |
|                                         |                                          |
| [Entering #[comp-proc 169 sqrt-stream]  | [Entering #[comp-proc 175 sqrt-stream-1] |
| ;Value: orig                            | Args: 2]                                 |
|                                         | ;Value: louis                            |
| 1 ]=> (stream-ref orig 0)               |                                          |
|                                         | 1 ]=> (stream-ref louis 0)               |
| ;Value: 1.                              |                                          |
|                                         | ;Value: 1.                               |
| 1 ]=> (stream-ref orig 1)               |                                          |
|                                         | 1 ]=> (stream-ref louis 1)               |
| [Entering #[comp-proc 170 stream-map]   |                                          |
| Args: #[comp-proc 171]                  | [Entering #[comp-proc 175 sqrt-stream-1] |
| ((1. . #[comp-proc 172]))]              | Args: 2]                                 |
| [Entering #[comp-proc 173 sqrt-improve] | [Entering #[comp-proc 170 stream-map]    |
| Args: 1.                                | Args: #[comp-proc 176]                   |
| 2]                                      | ((1. . #[comp-proc 177]))]               |
| ;Value: 1.5                             | [Entering #[comp-proc 173 sqrt-improve]  |
|                                         | Args: 1.                                 |
| 1 ]=> (stream-ref orig 2)               | 2]                                       |
|                                         | ;Value: 1.5                              |
| [Entering #[comp-proc 170 stream-map]   |                                          |
| Args: #[comp-proc 171]                  | 1 ]=> (stream-ref louis 2)               |
| ((1.5 . #[comp-proc 174]))]             |                                          |
| [Entering #[comp-proc 173 sqrt-improve] | [Entering #[comp-proc 175 sqrt-stream-1] |
| Args: 1.5                               | Args: 2]                                 |
| 2]                                      | [Entering #[comp-proc 170 stream-map]    |
| ;Value: 1.4166666666666665              | Args: #[comp-proc 178]                   |
|                                         | ((1. . #[comp-proc 179]))]               |
|                                         | [Entering #[comp-proc 173 sqrt-improve]  |
|                                         | Args: 1.                                 |
|                                         | 2]                                       |
|                                         | [Entering #[comp-proc 170 stream-map]    |
|                                         | Args: #[comp-proc 176]                   |
|                                         | ((1.5 . #[comp-proc 180]))]              |
|                                         | [Entering #[comp-proc 173 sqrt-improve]  |
|                                         | Args: 1.5                                |
|                                         | 2]                                       |
|                                         | ;Value: 1.4166666666666665               |
|                                         |                                          |
|-----------------------------------------|------------------------------------------|

{% endhighlight %}

Clearly, as we can see, Louis version computation do not take advantage of the previous values computed/accessed and accessing nth element of the stream requires O(n) operations *always*. 

While Original also requires O(n) operations to access nth element for the **first time** but if earlier element is already accessed then it uses that result. for eg accessing 3rd element after accessing second element will only require O(1) operations but if no element is accessed before and we access 3rd element first time then it rquires O(n) operations.

------

#### Without Memoize

{% highlight table linenos %}
|-----------------------------------------|-------------------------------------------|
| Original                                | Louis                                     |
|-----------------------------------------|-------------------------------------------|
| 1 ]=> (define nm-orig (sqrt-stream 2))  | 1 ]=> (define nm-louis (sqrt-stream-1 2)) |
|                                         |                                           |
| [Entering #[comp-proc 182 sqrt-stream]  | [Entering #[comp-proc 190 sqrt-stream-1]  |
| Args: 2]                                | Args: 2]                                  |
| ;Value: nm-orig                         | ;Value: nm-louis                          |
|                                         |                                           |
| 1 ]=> (stream-ref nm-orig 0)            | 1 ]=> (stream-ref nm-louis 0)             |
|                                         |                                           |
| ;Value: 1.                              | ;Value: 1.                                |
|                                         |                                           |
| 1 ]=> (stream-ref nm-orig 1)            | 1 ]=> (stream-ref nm-louis 1)             |
|                                         |                                           |
| [Entering #[comp-proc 183 stream-map]   | [Entering #[comp-proc 190 sqrt-stream-1]  |
| Args: #[comp-proc 184]                  | Args: 2]                                  |
| ((1. . #[comp-proc 185]))]              | [Entering #[comp-proc 183 stream-map]     |
| [Entering #[comp-proc 186 sqrt-improve] | Args: #[comp-proc 191]                    |
| Args: 1.                                | ((1. . #[comp-proc 192]))]                |
| 2]                                      | [Entering #[comp-proc 186 sqrt-improve]   |
| ;Value: 1.5                             | Args: 1.                                  |
|                                         | 2]                                        |
| 1 ]=> (stream-ref nm-orig 2)            | ;Value: 1.5                               |
|                                         |                                           |
| [Entering #[comp-proc 183 stream-map]   | 1 ]=> (stream-ref nm-louis 2)             |
| Args: #[comp-proc 187]                  |                                           |
| ((1. . #[comp-proc 185]))]              | [Entering #[comp-proc 190 sqrt-stream-1]  |
| [Entering #[comp-proc 186 sqrt-improve] | Args: 2]                                  |
| Args: 1.                                | [Entering #[comp-proc 183 stream-map]     |
| 2]                                      | Args: #[comp-proc 193]                    |
| [Entering #[comp-proc 183 stream-map]   | ((1. . #[comp-proc 194]))]                |
| Args: #[comp-proc 188]                  | [Entering #[comp-proc 186 sqrt-improve]   |
| ((1. . #[comp-proc 185]))]              | Args: 1.                                  |
| [Entering #[comp-proc 186 sqrt-improve] | 2]                                        |
| Args: 1.                                | [Entering #[comp-proc 190 sqrt-stream-1]  |
| 2]                                      | Args: 2]                                  |
| [Entering #[comp-proc 183 stream-map]   | [Entering #[comp-proc 183 stream-map]     |
| Args: #[comp-proc 187]                  | Args: #[comp-proc 195]                    |
| ((1.5 . #[comp-proc 189]))]             | ((1. . #[comp-proc 196]))]                |
| [Entering #[comp-proc 186 sqrt-improve] | [Entering #[comp-proc 186 sqrt-improve]   |
| Args: 1.5                               | Args: 1.                                  |
| 2]                                      | 2]                                        |
| ;Value: 1.4166666666666665              | [Entering #[comp-proc 183 stream-map]     |
|                                         | Args: #[comp-proc 193]                    |
|                                         | ((1.5 . #[comp-proc 197]))]               |
|                                         | [Entering #[comp-proc 186 sqrt-improve]   |
|                                         | Args: 1.5                                 |
|                                         | 2]                                        |
|                                         | ;Value: 1.4166666666666665                |
|-----------------------------------------|-------------------------------------------|

{% endhighlight %}

Note that here Louis has become exponential - accessing nth element requires $$\, \sum_{i=1}^{n-1} g(i) \,$$ where g(i) is the cost of accessing ith element. This is similar to the fibonacci recursive process complexity as we have seen earlier and it requires similar run time - exponential.

The original process is now, always O(n) irrespective of the case that whether any element being accessed before. Thus this is still better then Louis - even when we are not using memoize. Note that memoized Louis and non-memoized original are of same comlexity.

------

Some pointers/outline to understand:

First ignore the memoize part and undertand how Louis works:

Note that `(sqrt-stream-1 2)` always returns same object, lets call it **C**.

Let's assume we already defined the object, `louis` as `(define louis (sqrt-stream-1 2))`. And we access 0th, 1st and 2nd element of louis in that order.

- When we access **0th element** of `louis`- We get 1 and a promise to to evaluate `(stream-map (lambda(guess) (sqrt-improve x guess)) (sqrt-stream-1 2))`. Lets call this promise as **X**.

- When we access **1st element** of `louis` - We evaluate **X** which requires first to invoke `(sqrt-stream-1 2)`(this call returns **C**) and then `stream-map` is invoked on **C**. Then we get `(1/2, promise-1)` where `promise-1` means/represents calling `stream-map` with `sqrt-improve` on **cdr**(stream-cdr) of `(sqrt-stream-1 2)`. Thus the final result becomes `(1, 1/2, promise-1)` (for representation purpose only - the final result will not be like this but contains promises/memoize-proc wrapper).

- Now, when we access **2nd element** of `louis` - we evaluate `promise-1`:
	- we first need to access cdr of  the result of **(sqrt-stream-1 2)**(this results a call to sqrt-stream-1) - which is (1/2, promise-1) - as we saw while accessing **1st element** above - lets call this *res2*
	- then `stream-map` is invoked on the *res2*, the result of last step.
	- `cons-stream` is created with following parts:
		- result of applying `sqrt-improve` on first element of *res2* - thus applying `sqrt-improve` on 1/2.
		- `promise-2` to apply `stream-map` on *cdr* of *res2* - thus *cdr* of `promise-1` - which means *cdr* of *cdr* of **C**(result of `(sqrt-stream 2)`).

Now, it is simple to understand while considering of adding/removing memoize.

memoize comes into picture only with **cdr**(stream-cdr).
