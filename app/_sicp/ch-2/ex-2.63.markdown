---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.63"
order: "063"
date: 2016-06-17
---

**(a)**

Yes, they will produce same results for every tree.

Looking closely reveals that both algorithms are similar in the following way:

- Convert left tree to list, lets call the result left-list.
- Convert right tree to list, lets call the result right-list.
- Create a combined list as (left-list, current-entry, right-list)
 
They differ only in the way left and right lists are merged. The first procedure uses `append` while other procedure does it employing the *recursive process*.

**(b)**

Clearly both procedures are invoked $$ n $$ number of times, where $$ n $$ is number of leaves in the tree.

While in the first procedure, there is an additional invocation of `append`. In the second procedure there is no other function call(assuming null?, cons etc will 
take constant time) that changes the time complexity. Thus complexity of second procedure is $$ O(n) $$.

Lets compute the complexity of first procedure.

Assuming tree is balanced, the additional call `append` takes $$ O(m/2) $$ in each step, where $$ m $$ is the number of nodes present in the tree in that step.
Since in each step, number of nodes are halved, the total time taken by compute is:
   
$$ = n/2 + n/4 + n/8 + ... n/(2^{\log n}) $$             
$$ = n(1/2 + 1/4 + 1/8 + ... 1/(2^{\log n}) $$             
$$ = n(\frac {1 - { {\frac 1 2} }^{\log n} } {1 - \frac 1 2} $$      
$$ = n(\frac {2 (n-1) } n $$       
$$ = 2(n-1) $$       
$$ \approx 2n $$.

Thus total time will be $$ n + 2n = 3n $$.

Thus first procedure is roughly 3 times more costly than second procedure but note that both have same order of growth $$ O(n) $$.

