---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.3"
order: "003"
date: 2018-04-18 
---

#### Data flow diagrams

In the second diagram, I have used several registers to store intermediate results. Even one register can suffice instead of multiple such registers because each such register is used one at a time. However, it was causing some clutter in the diagrams. So I used multiple temporary registers for demonstration.

<img src="/assets/img/sicp/5.3.jpg"/>


------

#### Controller Definition

Assuming `good?` and `improve` are *primitive* operations. 

{% highlight scheme linenos %}
(controller
 (assign guess (const 1))
 loop
   (test (op good?) (reg guess) (reg x))
   (branch (label done))
   (assign (op improve) (reg guess) (reg x))
   (goto (label loop))
 done)
{% endhighlight %}

Expanded versions of `improve` and `good?`:

{% highlight scheme linenos %}
(controller
 (assign guess (const 1))
 loop
   (assign g2 (op *) (reg guess) (reg guess))
   (assign diff (op -) (reg g2) (reg x))
   (assign error (op abs) (reg diff))
   (test (op <) (reg error) (const 0.001))
   (branch (label done))
   (assign q (op /) (reg x) (reg guess))
   (assign sum (op +) (reg q) (reg guess))
   (assign guess (op /) (reg sum) (const 2))
   (goto (label loop))
   done)
{% endhighlight %}

Notice that all the temporary registers `g2`, `diff`, `error`, `q`, `sum` can be replaced with a single temp register `t`:

{% highlight scheme linenos %}
(controller
 (assign guess (const 1))
 loop
   (assign t (op *) (reg guess) (reg guess))
   (assign t (op -) (reg t) (reg x))
   (assign t (op abs) (reg t))
   (test (op <) (reg t) (const 0.001))
   (branch (label done))
   (assign t (op /) (reg x) (reg guess))
   (assign t (op +) (reg t) (reg guess))
   (assign guess (op /) (reg t) (const 2))
   (goto (label loop))
   done)
{% endhighlight %}
