---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.72"
order: "072"
date: 2016-06-22
---

We need to look at maximum of $$ n $$ levels.
 
At each level we search in ordered set of symbols. Also at first node we search in $$ n $$ symbols then we search in $$ n/2 $$ symbols and so on.

Worst case time in a search for $$ k $$ symbols is $$ k $$.

If an element is not found in left branch, we look for it in right branch. Thus total search time in this case is $$ n + n = 2n $$.

Since $$ n $$ is worst case search time as well as *on average* we shall only be looking in only left branch half of the time.

On average we can say that $$ 2n/2 = n $$ will be the time to lookup in a step where $$ n $$ is the number of symbols present in left or right node(assuming they will be equal).

Each time when a branch is selected, number of symbols in branch are reduced by half.

Thus in first step we shall be looking in $$ n $$ symbols.

In second, we shall lookup in $$ n/2 $$ symbols.

and so on.

  
Thus total complexity should be:        
$$ = n + n/2 + (n/2)/2 + ((n/2)/2)/2 ... 1 $$       
$$ = n(1 + 1/2 + 1/4 + 1/8 + 1/(2^{\log n}) $$       
$$ = n \times \frac { 1 - {(1/2)}^{\log n} } { 1 - 1/2 } $$      
$$ = 2 \times n \times ( { 1 - {(1/2)}^{\log n} } ) $$      
$$ = 2 \times n \times ( 1 - 1/n ) $$      
$$ = 2 \times n \times ( (n - 1)/n ) $$      
$$ = 2 \times (n - 1)$$      

Thus average complexity shall be $$ O(2n) $$.




         
         


