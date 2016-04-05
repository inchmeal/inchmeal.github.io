---
chapterName: "Building Abstractions with Procedures"
sectionName: "Formulating Abstractions with Higher-Order Procedures"
chapter: 1
solution: "1.38"
order: "038"
date: 2016-04-04
---

We need to generate denominators in the following way: 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, 1, 1...
 
If we look closely, ignoring the first two terms of the series, then:
 
$$ (position - 2)\mod 3 = 0 $$ for all the terms which are **not** equal to $$ 1 $$.
   
Similarly note that the values can also be derived for this position:
   
if $$ position > 2 $$ and its value is *not* equal to $$ 1 $$, than it is: $$ 2 \times (1 + (position-2)/3) $$.
      
Now we can easily write the procedure for computing $$ e $$ using `cont-frac` from previous exercise:

{% highlight racket linenos %}
(define (e n)
  (define (den k)
      (cond ((< k 3) k)
            ((= (remainder (- k 2) 3) 0) (* 2 (+ (quotient (- k 2) 3) 1)))
            (else 1)
      )
  )
  (+ 2 (cont-frac (lambda (x) 1.0) den n))
)
{% endhighlight %}


Note that we are also adding 2 as call to `cont-frac` returns $$ e - 2 $$.
 
Sample invocation using $$ k = 20 $$:

{% highlight racket linenos %} 
> (e 20)
2.718281828459045 
{% endhighlight %}
 
       
       