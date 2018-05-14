---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.60"
order: "060"
date: 2018-03-27 
---

Duplication can be explained by looking at the rule:

{% highlight scheme linenos %}
(rule (lives-near ?person-1 ?person-2)
      (and (address ?person-1 (?town . ?rest-1))
           (address ?person-2 (?town . ?rest-2))
           (not (same ?person-1 ?person-2))))
{% endhighlight %}

We lookup for `?person-1` and `?person-2` such that they have same `?town`. This can happen even when `?person1` and `?person2` are same so we removed that possibility with `(not (same ?person1 ?person2))`.

But we still have not removed the possibility that we can have two combinations `(x y)` and `(y x)`, where `x` and `y` are two person sharing the same address and:

- `?person1` is instantiated to `x` and `?person2` instantiated to `y`.
- `?person1` is instantiated to `y` and `?person2` instantiated to `x`.

How to avoid this?

Similar to the check of `(not (same ..))`, we can instead use something like `(less-than ?person1 ?person2)` such that `less-than** is defined for symbols.

Not doing the implementation as it is not asked and it's not interesting too :)

-----

-----

*Note* that if we implement the above change than, `lives-near` won't work for cases like `(lives-near ?x (Fect Cy D))` because `Hacker Alyssa P` is *greater than* `Fect Cy D`!

This can be fixed by implementing a new `lives-near` that calls the above change version say `lives-near-ordered` like this:

{% highlight scheme linenos %}
(rule (lives-near ?x ?y)
 (or (lives-near-ordered ?x ?y) (lives-near-ordered ?y ?x)))
{% endhighlight %}

Well these are *speculations* because unlike last section(non-deterministic computing), I have not read the implementation details of query evaluator before using it!

-----

-----

So far, this approach of first understanding the *use* and then the *implementation* is also having its own advantages. For example: I changed a rule in one of the previous exercise and without restarting/cleanup the code/database the rule seems not to work.

This made me to speculate that *evaluator* does some preprocessing and save those results in database. These results don't get removed even when the rule is modified.

Else, I might had different answers if i had some idea of the implementation! This gives me slightly different perspective.
