---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.16"
order: "016"
date: 2016-04-24
todo: true
---

We know from previous exercise that this problem arises because we expect that an interval-variable should take same value in all
the occurrences in an expression. Thus to fix this we have to make sure that an an interval-variable should takes same value in all
the occurrences in an expression while doing the interval arithmetic.

This problem can be approached in two ways:

- Convert the expression so that each interval variable occurs only once. This is however not possible. For eg: $$ I^n + I^{n-1} $$
  can not be converted to an expression containing $$ I $$ only once.
  
- To do *interval-arithmetic* in such a way that when a variable is repeated then all occurrences of an interval variable takes same
   value. 
   
Thus we have only second approach as first approach will not work. I will try to outline my approach how we may do it:

Note: I think there are high chances that it is an incorrect approach. I wrote it to remember so that if I  ever visit again I may get
some direction from this approach.

We will do *lazy-evaluation* i.e. we will not perform computation till we get the whole expression and after analyzing the whole expression
we will be able to come up with a formulae for lower-bound and upper-bound.

Instead of computing lower-bound and upper-bound while doing *interval arithmetic* we will *remember* the interval-variables used for
computing the lower-bounds and upper-bounds and the corresponding operation. For eg:
        
In case of addition of $$ I_1 + I_2 $$, remember that $$ \text{ lower-bound } = \text{ lower-bound}( I_1 ) + \text{ lower-bound}(I_2) $$.
Note that we are not computing the sum, but we rememeber that the lower-bound of $$ I_1 + I_2 $$ is sum of lower-bounds of $$ I_1 $$ and $$ I_2 $$.
Similarly we store for upper-bounds.

Same process can be repeated for multiplication: $$ I_1 \times I_2 $$, we will follow the same process to remember which values are used
of the intervals to compute lower or upper bounds.

Thus we can extend the same process of remembering for finding upper-bound of $$ I_1 + I_2 + ... I_n $$ or $$ I_1 \times I_2 \times ... I_n $$.
 
Extending further we *recursively* keep remembering the overall formula for computing without actually computing the lower-bound and upper-bound till
we are done reading the complete expression.

For eg: $$ I_1 \times I_2 + I_2 \times I_3 $$, may be we have lower-bound = $$ lb(I_1) \times ub(I_2) + lb(I_1) \times lb(I_3) $$ where
 $$ lb = $$ lower-bound and $$ ub = $$ upper-bound.

Once we are done, we have the formulas for computing lower-bound and upper-bound(one for each). Now we can compute the final value of lower-bound and
upper-bound using these formulas as follows:

If a variable is repeated multiple times in the formula then we only need to worry when some repetitions are using lower-bound of the
repeated variable and other using upper-bound. Otherwise if all repetitions uses same bound then we can use that value while computing the
overall value of the bound(lower or upper).

For the case, we compute the bound(lower or uppert) two times, one by using lower-bound and other by using upper-bound. And depending on
 which bound, lower or upper, we are computing, we will pick the bound-value(lower or upper) of the repetitive variable which results in
 smallest or largest value accordingly. We can use arbitrary values for other variables(obviously from the corresponding interval range only) 

          
    
   