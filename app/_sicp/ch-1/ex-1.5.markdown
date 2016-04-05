---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.5"
order: "005"
date: 2016-03-29
---

{% highlight racket linenos %}
(define (p) (p))

(define (test x y)
  (if (= x 0)
      0
      y)
)

(test 0 (p))
{% endhighlight %}


#### Normal Order Evaluation ####

Here we *fully expand and then reduce*, thus expanding it we get:

{% highlight racket linenos %}
(if (= 0 0)
      0
      (p))
{% endhighlight %}

Now *if* is a special form, and scheme interpreter will first check for the predicate and evaluate the expression based on the result
of predicate.

Note that here `(p)` is not expanded again because as per the description of `if`, the interpreter will first check the predicate and
 then depending on it evaluates the expression.
 
Clearly the result of predicate is true. Thus it will output: $$ 0 $$.

#### Applicative Order Evaluation ####

*Evaluate the arguments and then apply*. Now evaluating `(p)` will go into a infinite loop of recursive calls. Thus the program will
never terminate by itself.




 
 

        

