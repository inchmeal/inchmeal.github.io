---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.19"
order: "019"
date: 2016-04-25
---

{% highlight racket linenos %}
#lang sicp

(define (cc amount coin-values)
    (cond ((= amount 0) 1)
        ((or (< amount 0) (no-more? coin-values)) 0)
        (else
           (+ (cc amount
                (except-first-denomination coin-values)
              )
              (cc (- amount
                     (first-denomination coin-values)
                  )
                  coin-values
              )
           )
       )
    )
)

(define first-denomination car)

(define except-first-denomination cdr)
  
(define no-more? null?)
{% endhighlight %}

Order of coins does not matter. If order of coin had any role then they should have also effected to the original solution which does
not use list because there also `first-denomination` returns value of coin corresponding to a number.

To understand why it does not depend on order, we shall outline the approach to find total ways for change for
amount $$ amt $$ using given denominations: $$ D $$

Lets take any random denomination, say $$ d_r $$ from $$ D $$. Now total number of ways is the sum of:

- number of ways for coin-change for amount, $$ amt $$, without using denomination $$ d $$. Thus we are using denominations: $$ D \setminus \{ d \} $$.
- number of ways for coin-change for amount, $$ amt - d $$, using denominations $$ D $$. 

Thus we choose any random denomination and proceed recursively. Since we are *free* to choose any denomination, we proceed choosing
the first from the list as it helps in simplifying our procedure.