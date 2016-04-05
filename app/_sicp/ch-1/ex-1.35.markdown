---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.35"
order: "035"
date: 2016-04-04
---

From sec-1.2.2, we know that:

$$ { \phi }^2 = 1 + \phi $$       
Dividing both sides by $$ \phi $$, we get:
$$ \phi = { \frac 1 \phi } + 1 $$.

This is the same equation given in the problem. Thus golden ration $$ \phi $$ is indeed the fixed point of the transformation $$ x \mapsto 1 + { \frac 1 x } $$.

{% highlight racket linenos %}
> (fixed-point (lambda (x) (+ 1 (/ 1 x))) 1.0)
1.6180327868852458
{% endhighlight %}
 