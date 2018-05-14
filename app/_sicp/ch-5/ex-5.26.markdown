---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.26"
order: "026"
date: 2018-05-03 
---

(Note that i reverted all the changes made in previous exercises in the evaluator because lazy evaluator results in different number of stack-pushes)

Lets first check the for some values of `n`:

{% highlight scheme linenos %}
;;; EC-Eval input:
(factorial 1)

(total-pushes = 64 maximum-depth = 10)
;;; EC-Eval value:
1

;;; EC-Eval input:
(factorial 2)

(total-pushes = 99 maximum-depth = 10)
;;; EC-Eval value:
2

;;; EC-Eval input:
(factorial 3)

(total-pushes = 134 maximum-depth = 10)
;;; EC-Eval value:
6

;;; EC-Eval input:
(factorial 4)

(total-pushes = 169 maximum-depth = 10)
;;; EC-Eval value:
24

;;; EC-Eval input:
(factorial 5)

(total-pushes = 204 maximum-depth = 10)
;;; EC-Eval value:
120

;;; EC-Eval input:
{% endhighlight %}

(a) Clearly maximum-depth = 10. Note that this is not a mathamttical argument that maximum-depth = 10 independent of `n`. For that we need to go into the code of evaluator while executing each instruction of `fibonacci`. Well, this is not asked and neither it's interesting so i will skip that :)

(b) Well, again from the observation we can see the formulae is $$\, \text{total-pushes} = 35n + 29 \,$$. Again this is not mathematical proof. For that we first need to prove that each invocation of an iterative procedure results in a constant number of stack pushes. And then we can just directly use the observation above ti come up with formulae.
