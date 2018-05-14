---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.2"
order: "002"
date: 2018-04-18 
---

{% highlight scheme linenos %}
(controller
 (assign product (const 1))
 (assign counter (const 1))
 fact-loop
   (test (op >) (reg counter) (reg n))
   (branch (label fact-done))
   (assign product (op *) (reg product) (reg counter))
   (assign counter (op +) (reg counter) (const 1))
   (goto (label fact-loop))
 fact-done)
{% endhighlight %}
