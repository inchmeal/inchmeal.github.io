---
layout: blog
title:  "Every rule has an exception"
tags: personal-views
sitemap:
    priority: 0.7
---

<!--more-->
  
Not so long ago, I came up with a rule that *Every rule has an exception.* At first glance, the rule is a contradiction in itself as there seems to be no exception to this rule. I gave up after few failed attempts at coming up with a consistent definition for the rule.
    
Recently I went through an [awesome explanation][alon] of [Gödel's incompleteness theorems][godel] in a [Quora][quora] answer. A must read for anyone even remotely interested in the subject.

By the self-referential nature of the examples given in the said answer, it reminded me of the rule again.
  
To proceed further, let's make some assumptions.  

Assumptions:

- A rule is a set of statement(s) about rules or some general phenomenon.
- An exception to a rule is any statement that contradicts with one or more statements of the rule.
- A set $$ S $$ such that all the rules inside this set have one or more exceptions.
- Rule $$ R $$ which says that - Every rule in set S has one or more exception. 
   
Clearly if $$ R \notin S $$ then there is no problem with the rule $$ R $$. For the case when the set is empty rule $$ R $$ will be vacuously correct.
   
Things get interesting when rule $$ R $$ is also made an element of $$ S $$.

- $$ R \in S $$.
   
*Is Rule R correct?* 

No? Because, apparently, there are no exceptions to $$ R $$. Since $$ R \in S $$, for $$ R $$ to be true, all rules in $$ S $$ including $$ R $$ must have one or more exception.

Wait a minute. All rules in $$ S $$ have exceptions and rule $$ R $$ is the only one without exception! The rule $$ R $$ is the only *exceptional* rule without exception!
  
Having no exceptions made an exception for rule $$ R $$. So the rule is correct!
 
Well, it does not stop here.
 
Because if rule $$ R $$ has an exception then all the rules in the set $$ S $$ including $$ R $$ have exceptions. Thus rule $$ R $$ is correct without any exception!
  
What I just said? Rule $$ R $$ has no exception? But it has an exception?

To summarize,

The absence of exception was an exception of $$ R $$ which in turn made $$ R $$ true for all elements in $$ S $$ and which in turn again contradicted with $$ R $$ because $$ R $$ must have an exception.

Or more clearly, for $$ R $$ to be correct, it means:

- $$ R $$ has no exception.
- Every rule in $$ S $$ has one or more exception.

Thus they can't both be true at the same time!

Let's try to update the rule:

*Every rule has an exception, except this rule.*

Is it correct?

The updated rule states that apart from rule $$ R $$, every rule in $$ S $$ has an exception. Thus there must be no exception to rule $$ R $$.

In the *previous case*, Because the absence of exception became an exception which made $$ R $$ true but in this case, it makes $$ R $$
 false in the first check! Because in this case $$ R $$ must not have any exception by its definition!
 
Eh?

The updated part - *except this rule* - of $$ R $$ can be interpreted in two ways:

- Every rule except $$ R $$ inside the set $$ S $$ has an exception but $$ R $$ is without exception.
- Every rule except $$ R $$ inside the set $$ S $$ has an exception and $$ R $$ can or can not have an exception. It does not say anything for itself.

The second interpretation is almost as good as saying that $$ R \notin S $$. Thus removing $$ R $$ from $$ S $$ seems to be the only way which can make this rule correct!  

[alon]: https://www.quora.com/How-can-Godel%E2%80%99s-Incompleteness-Theorem-make-such-an-amazing-statement-that-on-the-surface-seems-unprovable
[quora]: https://www.quora.com
[godel]: https://en.wikipedia.org/wiki/G%C3%B6del's_incompleteness_theorems