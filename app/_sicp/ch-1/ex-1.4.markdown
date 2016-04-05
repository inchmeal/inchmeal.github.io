---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.4"
order: "004"
date: 2016-03-29
---

{% highlight racket linenos %}
(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))
{% endhighlight %}
  
Clearly the procedure returns: $$ a + \vert \; b \; \vert $$.  
