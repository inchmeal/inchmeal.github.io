---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.64"
order: "064"
date: 2018-03-28 
---

Let's first see the rule:

{% highlight scheme linenos %}
(rule (outranked-by ?staff-person ?boss)
      (or (supervisor ?staff-person ?boss)
          (and (outranked-by ?middle-manager ?boss)
               (supervisor ?staff-person ?middle-manager))))
{% endhighlight %}

What happens when we execute `(outranked-by (Bitdiddle Ben) ?who)`?

In evaluation process, when we evaluate the recursive rule query `(outranked-by ?middle-manager ?boss)`, both variables `?middle-manager` and `?boss` are not bounded to any contants in the frame. 

This results in an infinite loop of evaluation because no evaluation steps later results in bounding these variables and evaluator keeps searching/matching recursively and hopelessly!

Why this does not happen in the earlier version?

Because now, in every recursive evaluation of the rule `out-ranked-by`, the variable `?staff-person` is bound to some constant in the frame. This stops the recurson at the point when there is no supervisor found for `?staff-person`.
