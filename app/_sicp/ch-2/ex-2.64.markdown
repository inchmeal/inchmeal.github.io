---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.64"
order: "064"
date: 2016-06-17
---

**(a)**

This is quite good!!

To check how it works, I shall write to make it look similar to mathematical induction.

- For $$ n = 0 $$,
 
  It is clear that `partial-tree` returns cons with first element as empty and second element containing the list passed. 
   
  This is correct as empty tree is balanced :) with zero nodes and the second element of cons contains list of the remaining elements which happens to be the original
   list passed.
   
- For $$ n = 1 $$,
   
  In this case calls to build left tree and right tree are done using $$ n = (1 - 1)/2 = 0 $$ and $$ n = 1 - (0+1) = 0 $$ respectively. We know from previous step
  that these calls will return in empty tree. 
  
  But notice that call for creating the left tree is done by passing the complete list to it *while* call to create right tree is done by removing one element from 
  the list returned from the result of call to left tree.
  
  Now the call for creating right tree will return the same list passed to it(because it was called with  $$ n = 0  $$). Since list passed to this call was one created
   by removing the first element from it. This same list is returned.
   
  Thus the result returned will be contains a cons with first element containing a tree with only one element and second element of the cons will contain the list with
   first element removed.
   
  Clearly this is what is expected from the partial tree to do for $$ n = 1 $$.
   
- For $$ n = 2 $$,
   
  In this case call for creating left tree will be done with $$ n = (2-1)/2 = 0 $$ and right-tree with $$ n = 2 - (0+1) = 1 $$. 
     
  The call for creating left tree will return the same list as it was passed because $$ n = 0 $$.
  
  As noted in the previous case that call to right-tree will again be done with the remaining list, with one element removed from it.
     
  The call for building right tree will result in a cons with first element containing tree with one element and second element of cons will contain the 
  remaining list except the item that was added in the tree.(this can be verified by n = 1 case).
        
  Thus the result will be a cons with first element is a tree with two nodes and second element with the list with first two elements removed.
        
- For $$ n \ge 3 $$.

  Now here comes the fun part, lets assume that for for all $$  0 \ge k < n $$, the procedure works as expected.
   
  Call to create left tree is done with $$ n_l = (n-1)/2 $$. Since $$ n \ge 3 $$, it follows $$ n_l \ge 1 $$. Thus $$ 0 \le n_l < n $$. By our hypothesis this will
  result in a cons with first element a tree with $$ n_l $$ nodes and second element containing $$ n - n_l $$.
  
  Call to create right tree is done with $$ n_r = n - (n_l + 1) $$ and the list with first $$ n_l + 1 $$ elements removed. Clearly $$ n_r \ge 2 $$. Thus 
  $$ 0 \le n_r < n $$. By our hypothesis this will result in a cons with first element a tree with $$ n_r $$ nodes and second element a list which has first $$ n_r $$ elements
   removed from it. Thus effectively the list returned is the list with first $$ n_l + 1 +  n_r = n_l + 1 + n - (n_l + 1) = n $$ elements removed.
   
  Thus the result will be a cons with first element with a tree with $$ n_l $$ element in left and $$ n_r $$ elements in right.
   And the second element of the cons will be the remaining list with first $$ n $$ elements removed.
           
**(b)**

We can note that for each element in the tree, procedure is invoked only once. Assuming all other calls are of constant order we can conclude that the overall time 
complexity is of the order $$ O(n) $$.
