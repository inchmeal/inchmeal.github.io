---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.55"
order: "055"
date: 2016-05-15
---

{% highlight racket linenos %}
> (car ''abracadabra)
'quote
> 
{% endhighlight %}

As mentioned in the book `'a` is equivalent to `(quote a)`.

Thus `''abracadabra` is equivalent to `(quote (quote abracadabra))`. That means `(quote abracadabra)` is considered as a list of symbols `'quote` and `'abracadabra`. 
Thus `car (quote (quote abracadabra))` returns `'quote`.

