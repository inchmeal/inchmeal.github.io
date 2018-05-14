---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.2"
order: "002"
date: 2018-03-04 
---

#### (a)

How do we check if something is an application? As per the code given, we do this by simply checking if it is a pair!

Thus if we follow the Louis's idea then anything which is a pair will be considered as an application! 

#### (b)

We just need to change the code for `application?` and selectors:

{% highlight scheme linenos %}
(define (application? exp) (tagged-list? exp 'call))
(define (operator exp) (cadr exp))
(define (operands exp) (cddr exp))
{% endhighlight %}
