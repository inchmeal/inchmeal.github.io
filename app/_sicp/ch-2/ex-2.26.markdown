---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.26"
order: "026"
date: 2016-04-26
---

{% highlight racket linenos %}
> (append x y)
(mcons 1 (mcons 2 (mcons 3 (mcons 4 (mcons 5 (mcons 6 '()))))))
 
> (cons x y)
(mcons (mcons 1 (mcons 2 (mcons 3 '()))) (mcons 4 (mcons 5 (mcons 6 '()))))

> (list x y)
(mcons (mcons 1 (mcons 2 (mcons 3 '()))) (mcons (mcons 4 (mcons 5 (mcons 6 '()))) '()))

{% endhighlight %}

