---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.22"
order: "022"
date: 2018-03-14 
---

{% highlight scheme linenos %}
((let? exp) (analyze (let->combination exp)))
{% endhighlight %}

For testing it, I used the code given for analyzing evaluator [here][code]. This uses the simple evaluator. Thus in this exercise no other additions/changes from previous exercises were present in the simple evaluator. However, I had to add the `let` code from ex-4.8(named let) in the original version of evaluator for testing.

[code]: https://mitpress.mit.edu/sicp/code/ch4-analyzingmceval.scm
