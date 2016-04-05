---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.43"
order: "043"
date: 2016-04-05
---

{% highlight racket linenos %}
(define (repeated f n)
    (define (repeat rs k)
       (if (= k 1) rs (repeat (compose rs f) (dec k)))
    )
    (repeat f n)
)
{% endhighlight %}


Output:

{% highlight racket linenos %}
> ((repeated square 2) 5)
625
{% endhighlight %}

As mentioned in the problem we can see that $$ 5^{(2^2)} = 5^4 = 625 $$ i.e. number five is raised to the $$ 2^n$$-th power where $$ n $$
  is the number of repetitions.
  
  

