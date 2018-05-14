---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.4"
order: "004"
date: 2018-04-18 
---

(skipping the diagrams)

#### (a)

Note that the recursive process implemented using register machine is a bit more involved compared to iterative process. 

Few points that helped me in understanding:

- We solve the procedure call at a lower level(using stack) than replicating an exact procedure call.
- Instead of thinking of it as a procedure call, think of it as: save some work for later when we have enough values.
- This work which is postponed to be done later needs some context for which we use stack. Why stack? Because we want to come to the previous most recent place which *needed* the value just computed.
- We save the context by saving `n` and `continue`.
- Why after saving `n` and `continue` we continue to loop using `(goto (label loop))`? Why we not jump to `after` like a procedure invocation? Because we are not doing procedure invocation but carrying out the task using stack. We come to `after` in a bottom up way! First we keep looping and saving the context till we reach the base case. Then from the base case we *unwind* the stack.

{% highlight scheme linenos %}
(controller
 (assign continue (label done))
 loop
   (test (op =) (reg n) (const 0))
   (branch (label base-case))
   (save continue)
   (assign continue (label after))
   (assign n (op -) (reg n) (const 1))
   (goto (label loop))
 after
   (restore continue)
   (assign val (op *) (reg val) (reg b))
   (goto (reg continue))
 base-case
   (assign val (const 1))   
   (goto (reg continue))
 done)
{% endhighlight %}

#### (b)

{% highlight scheme linenos %}
(controller
 (assign product (const 1))
 loop
   (test (op =) (reg n) (const 0))
   (branch (label done))
   (assign n (op -) (reg n) (const 1))
   (assign product (op *) (reg product) (reg b))
   (goto (label loop))
 done)
{% endhighlight %}
