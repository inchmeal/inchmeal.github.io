---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.6"
order: "006"
date: 2016-03-30
---

{% highlight racket linenos %}
(define (sqrt-iter guess x)
  (new-if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x)
                     x)))
{% endhighlight %}

If the interpreter evaluates the function call `new-if` in *applicative order* then this function is *doomed* for infinite recursive calls.
On the other hand if it is *normal order evaluation* then it will work as expected.
   
   

