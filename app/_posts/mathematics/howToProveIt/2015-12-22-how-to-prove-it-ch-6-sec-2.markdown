---
layout: blog
title:  "How To Prove It, Ch-6 Sec-6.2, More Examples"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 6, Section - 6.2, More Examples.

<!--more-->

<hr/>

### Summary

- This section covers more examples for mathematical induction to show that this proof technique is just not limited to natural numbers as shown in last section. 
  It covers examples to show a wide range of uses of proof by mathematical induction.
 
<hr/>

**Soln1**

Given: 

- $$ A $$ is a set consisiting of $$ n+1 $$ elements.     
- $$ R $$ is a partial order on $$ A $$.     
- From first example of this section in book, we know there must exist a minimal element in $$ R $$. Lets call that minimal element as $$ a $$.     
- $$ A' = A \setminus \{a\} $$.     
- $$ R' = R \cap A' \times A' $$.     

Once we proved in part(a) that $$ R' $$ is a partial order. Then by induction *hypothesis* there must exist some relation $$ T' $$ such that it is a 
total order on $$ A' $$.      
- $$ T' $$ is a total order on $$ A' $$.    
- $$ T = T' \cup (\{a\} \times A) $$.     

**(a)**

To prove that $$ R' $$ is partial order we need to prove that $$ R' $$ is reflexive, transitive and antisymmetric.
 
<u>Reflexive:</u>

Suppose $$ x \in A' $$. Then $$ x \in A $$. Since $$ R $$ is reflexive, it follows $$ (x,x) \in R $$. Since $$ x \in A' $$, it follows
$$ (x,x) \in A' \times A' $$. Thus $$ (x,x) \in R \cap (A' \times A') $$, or $$ (x,x) \in R' $$. Thus $$ R' $$ is reflexive.

<u>Antisymmetric:</u>

Suppose $$ (x,y) \in R' $$. Thus $$ (x,y) \in R $$. Since $$ R $$ is partial order, it follows $$ (y,x) \notin R $$. Thus $$ (y,x) \notin R' $$.
It follows $$ R' $$ is antisymmetric.

<u>Transitive:</u>

Suppose $$ (x,y) \in R' $$ and $$ (y,z) \in R' $$. Thus $$ (x,y) \in R \land (y,z) \in R $$. Since $$ R $$ is partial order, thus $$ R $$ is transitive.
It follows $$ (x,z) \in R $$. Since $$ (x,y) \in R' $$ and $$ (y,z) \in R' $$, it follows $$ x,y,z \in A' $$. Since $$ (x,z) \in R $$ and $$ x,z \in A' $$,
it follows $$ (x,z) \in R' $$. Thus $$ R' $$ is transitive.

**(b)**

To prove $$ T $$ is total order, we need to prove $$ T $$ is partial order and $$ \forall x \in A \forall y \in A(xTy \lor yTx) $$. To prove $$ T $$ is
 partial order, we need to prove $$ T $$ is reflexive, transitive and antisymmetric:
 
<u>Reflexive:</u>

Suppose $$ x \in A $$. We have two possible cases:

- Case 1: $$ x = a $$      
Thus $$ (a,a) \in \{a\} \times A $$. It follows $$ (x,x) \in T $$.

- Case 2: $$ x \ne a $$      
Thus $$ x \in A' $$. Since $$ T' $$ is total order on $$ A' $$, it follows $$ T' $$ is reflexive and $$ (x,x) \in T' $$. Thus $$ (x,x) \in T $$.
 
Thus from both cases $$ (x,x) \in T $$. Thus $$ T $$ is reflexive.

<u>Transitive:<u>

Suppose $$ (x,y) \in T \land (y,z) \in T $$. We have following possible cases:

- Case 1: $$ x = a $$     
Since $$ x = a $$ and $$ z \in A $$, it follows $$ (x,z) = (a,z) \in \{a\} \times A $$. Thus $$ (x,z) \in T $$.

- Case 2: $$ x \ne a $$      
Since $$ x \ne a $$. It follows $$ (x,y) \notin \{a\} \times A $$ and $$ (x,y) \in T' $$. Thus $$ y \in A' $$. Thus $$ y \ne a $$. Since $$ (y,z) \in T $$
and $$ y \ne a $$, it follows $$ (y,z) \in T' $$ and $$ z \ne a $$. Thus $$ (x,y) \in T' $$ and $$ (y,z) \in T' $$. Since $$ T' $$ is total order, it follows
$$ (x,z) \in T' $$. Thus $$ (x,z) \in T $$.

Thus from all possible cases $$ (x,z) \in T $$, or $$ T $$ is transitive.

Note that here we need not to consider possible values of $$ y,z $$ as cases: $$ x = a $$ and $$ x \ne a $$ already covers those possible values.

<u>Antisymmetric:</u>

Suppose $$ (x,y) \in T $$. Thus we have two possible cases:

- Case 1: $$ x = a $$     
Thus $$ (x,y) \in \{a\} \times A $$. It follows directly that if $$ (y,x) \in \{a\} \times A $$ then $$ y = x = a $$.  

- Case 2: $$ x \ne a $$     
Thus $$ (x,y) \in T' $$. Since $$ T' $$ is total order. It follows if $$ (y,x) \in T' $$ then $$ x = y $$.

Thus from both cases if $$ (y,x) \in T $$ then $$ x = y $$.

Thus we have proved that $$ T $$ is partial order.

Now to prove $$ T $$ is total order, we need to further prove that: $$ \forall x \in A \forall y \in A(xTy \lor yTx) $$.

Suppose $$ x \in A $$ and $$ y \in A $$. Thus we have following possible cases:

- Case 1: $$ x = a $$.     
Thus $$ (x,y) \in \{a\} \times A $$. It follows $$ (x,y) \in T $$. 

- Case 2: $$ y = a $$.    
Thus $$ (y,x) \in \{a\} \times A $$. It follows $$ (y,x) \in T $$.
 
- Case 3: $$ x \ne a \land y \ne a $$.    
Thus $$ (x,y) \in A' \times A' $$. Since $$ T' $$ is total order on $$ A' $$, it follows $$ (x,y) \in T' $$. Thus $$ (x,y) \in T $$.

Thus from all possible cases $$ (x,y) \in T \lor (y,x) \in T $$.

Thus $$ T $$ is total order.

Now we are left to prove that $$ R \subseteq T $$.

Suppose $$ x,y \in A $$ such that $$ (x,y) \in R $$. Thus we have following cases:
 
- Case 1: $$ x = a $$.    
Thus $$ (x,y) \in \{a\} \times A $$. It follows $$ (x,y) \in T $$.

- Case 2: $$ x \ne a \land y = a $$.    
Thus $$ (x,a) \in R $$. But since $$ a $$ is $$ R- $$minimal element of $$ A $$, it follows that $$ (x,a) \notin R $$. Thus this case $$ x \ne a \land y = a $$ is
not possible.

- Case 3: $$ x \ne a \land y \ne a $$.    
Thus $$ (x,y) \in A' \times A' $$. Since $$ R' = R \cap (A' \times A') $$, it follows $$ (x,y) \in R' $$. Since $$ R' \subseteq T' \subseteq T $$, it follows that
$$ (x,y) \in T $$.

Thus from all the cases if $$ (x,y) \in R $$ then $$ (x,y) \in T $$. It follows that $$ R \subseteq T $$.

<hr/>

**Soln2**

Base Case: Suppose $$ B = \phi $$ and $$ T = R $$. Clearly $$ R \subseteq T $$. Since $$ T = R $$, $$ T $$ is partial order on $$ A $$. Since $$ B = \phi $$,
 it follows that $$ \forall x \in B \forall y \in A (xTy \lor yTx) $$ is true.
 
Induction Step: 

Suppose the conclusion is true for any set $$ B \subseteq A $$ with $$ n $$ elements. 

Now suppose $$ B \subseteq A $$ such that $$ B $$ has $$ n+1 $$ elements. Suppose $$ b $$ is an arbitrary element of $$ B $$. Consider the set $$ B' = B \setminus \{b\} $$.
Thus $$ B' $$ has $$ n $$ elements and thus by induction hypothesis, there exist a relation $$ T' $$ such that $$ T' $$ is partial order on $$ A $$ and $$ R \subseteq T' $$ and 
$$ \forall x \in B' \forall y \in B(xT'y \lor yT'x) $$. Suppose $$ A_1 = \{a \in A \, \vert \, aT'b \} $$ and $$ A_2 = A \setminus A_1 $$. Now consider the relation
$$ T = T' \cup (A_1 \times A_2) $$. Now to prove this step we shall prove the following:

- $$ T $$ is partial order on $$ A $$.     
- $$ R \subseteq T $$.      
- $$ \forall x \in B \forall y \in A(xTy \lor yTx) $$.     
 
To prove $$ T $$ is partial order on $$ A $$, we need to prove that it is reflexive, transitive and antisymmetric.
 
<u>Reflexive:</u>

Since $$ T' \subseteq T $$, and $$ T' $$ is reflexive, it follows that $$ T $$ is reflexive.

<u>Transitive:</u>

Suppose $$ (x,y) \in T \land (y,z) \in T $$. We have following possible cases:

- Case 1: $$ (x,y) \in T' \land (y,z) \in T' $$.      
Clearly since $$ T' $$ is transitive, $$ (x,z) \in T' $$. Thus $$ (x,z) \in T $$.

- Case 2: $$ (x,y) \in T' \land (y,z) \in A_1 \times A_2 $$.     
Since $$ (y,z) \in A_1 \times A_2 $$, it follows $$ y \in A_1 $$ and $$ z \in A_2 $$. Thus by the definition of $$ A_1 $$, $$ (y,b) \in T' $$. Since $$ (x,y) \in T' $$  and 
$$ (y,b) \in T' $$ and $$ T' $$ is transitive, it follows $$ (x,b) \in T' $$. Since $$ (x,b) \in T' $$, then by definition of $$ A_1 $$, $$ x \in A_1 $$. 
Since $$ x \in A_1 $$ and $$ z \in A_2 $$, it follows $$ (x,z) \in A_1 \times A_2 $$. Thus $$ (x,z) \in T $$.

- Case 3: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in A_1 \times A_2 $$.      
This case is not possible since $$ y \in A_2 $$ and $$ y \in A_1 $$. But $$ A_1 $$ and $$ A_2 $$ are disjoint by the definition.

- Case 4: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in T' $$.     
Thus $$ x \in A_1 $$ and $$ y \in A_2 $$. We will prove by contradiction that $$ z \in A_2 $$. We have only two possibilities: either $$ z \in A_1 $$ or $$ z \in A_2 $$.
Suppose $$ z \in A_1 $$. Thus $$ (z,b) \in T' $$. Since $$ (y,z) \in T' $$ and $$ (z,b) \in T' $$ and $$ T' $$ is transitive, it follows $$ (y,b) \in T' $$. Since $$ (y,b) \in T' $$,
 then by definition of $$ A_1 $$, it follows $$ y \in A_1 $$. Since $$ A_1 $$ and $$ A_2 $$ are disjoint it follows $$ y $$ cant be in both sets $$ A_1 $$ and $$ A_2 $$. Thus
 it contradicts our assumption that $$ z \in A_1 $$. Thus $$ z \in A_2 $$. Since $$ x \in A_1 $$ and $$ z \in A_2 $$, it follows $$ (x,z) \in A_1 \times A_2 $$. Thus
 $$ (x,z) \in T $$.

Thus from all cases $$ (x,z) \in T $$. Thus $$ T $$ is transitive.

<u>Antisymmetric:</u>

Suppose $$ (x,y) \in T $$ and $$ (y,x) \in T $$. Thus we have following cases:

- Case 1: $$ (x,y) \in T' \land (y,x) \in T' $$.      
Since $$ T' $$ is antisymmetric, it follows that $$ x = y $$. 

- Case 2: $$ (x,y) \in T' \land (y,x) \in A_1 \times A_2 $$.      
Since $$ y \in A_1 $$, it follows $$ (y,b) \in T' $$. Since $$ (x,y) \in T' $$ and $$ (y,b) \in T' $$, it follows $$ (x,b) \in T' $$. Thus $$ x \in A_1 $$.
But it contradicts with $$ x \in A_2 $$. Thus this case is not possible.

- Case 3: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in T' $$.      
Since $$ x \in A_1 $$, it follows $$ (x,b) \in T' $$. Since $$ (y,x) \in T' $$ and $$ (x,b) \in T' $$, it follows $$ (y,b) \in T' $$. Thus $$ y \in A_1 $$.
But it contradicts with $$ y \in A_2 $$. Thus this case is not possible.

- Case 4: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in A_1 \times A_2 $$.      
This case is not possible since $$ A_1 \cap A_2 = \phi $$, thus $$ y $$ can not belong to both $$ A_1 $$ and $$ A_2 $$.

Thus from all possible cases, $$ T $$ is antisymmetric.

Since $$ T $$ is reflexive, transitive and antisymmetric, it follows that $$ T $$ is partial order on $$ A $$.
 
Also clearly since $$ T = T' \cup A_1 \times A_2 $$ and $$ R \subseteq T' $$, it follows $$ R \subseteq T $$.

Now we shall prove the last part: $$ \forall x \in B \forall y \in A(xTy \lor yTx) $$.      
 
Suppose $$ x \in B $$ and $$ y \in A $$. We have two cases:

- Case 1: $$ x = b $$ and $$ y \in A_1 $$.     
Since $$ y \in A_1 $$, it follows $$ (y,b) \in T' $$. Since $$ x = b $$, it follows $$ (y,x) \in T' $$. Since $$ T' \subseteq T $$, it follows $$ (y,x) \in T $$.
 
- Case 2: $$ x = b $$ and $$ y \in A_2 $$.       
Since $$ b \in A_1 $$, it follows $$ (b,y) \in A_1 \times A_2 $$. Since $$ A_1 \times A_2 \subseteq T $$, it follows $$ (b,y) \in T $$. Since $$ x = b $$, it follows $$ (x,y) \in T $$.
 
- Case 3: $$ x \ne b $$.     
Since $$ x \in B $$ and $$ x \ne b $$, it follows $$ x \in B' $$. Thus by induction hypothesis for set $$ B' $$ of $$ n $$ elements, we have $$ xT'y \lor yT'x $$.
Since $$ T' \subseteq T $$, it follows $$ xTy \lor yTx $$.

Thus from all the possible cases we have $$ xTy \lor yTx $$. Since $$ x,y $$ are arbitrary, it follows $$ \forall x \in B \forall y \in A(xTy \lor yTx) $$.
 
<hr/>

**Soln3**

Base Case:

Suppose $$ B \subseteq A $$ and it contains only one element say $$ a $$. Thus clearly $$ \forall x \in B(aRx) $$ is true. Thus $$ a $$ is the $$ R$$-smallest element.
  
Induction Step:

Suppose if $$ B \subseteq A $$ contains $$ n $$ elements then conclusion is true i.e. there exist a $$ R $$-smallest element of $$ B $$.
 
Now suppose $$ B \subseteq A $$ and it contains $$ n+1 $$ elements. Suppose $$ b $$ is arbitrary element of $$ B $$ and $$ B' = B \setminus \{b\} $$.
Thus $$ B' $$ contains $$ n $$ elements. Thus by induction hypothesis, $$ B' $$ has a $$ R $$-smallest element say $$ s $$.

Since $$ R $$ is total order on $$ A $$, we have following possible cases:

- $$ bRs $$.     
 Suppose $$ x \in B $$. Now if $$ x \ne b $$ then $$ x \in B' $$. Since $$ s $$ is smallest element in $$ B' $$, it follows $$ sRx $$. Since $$ bRs $$ and $$ sRx $$,
 it follows $$ bRx $$.     
 Now suppose if $$ x = b $$. Since $$ R $$ is total order, it follows $$ bRb $$. Since $$ x = b $$, it follows $$ bRx $$.     
 Thus in either case, $$ bRx $$. Since $$ x $$ is arbitrary, it follows that $$ b $$ is the $$ R $$-smallest element of $$ B $$.
 
- $$ sRb $$.      
 Suppose $$ x \in B $$. Now if $$ x \ne b $$ then $$ x \in B' $$. Since $$ s $$ is smallest element in $$ B' $$, it follows $$ sRx $$.      
 Now for the case if $$ x = b $$, then clearly $$ sRb $$ is equivalent to $$ sRx $$.     
 Thus from either case $$ sRx $$. Since $$ x $$ is arbitrary, it follows $$ s $$ is the smallest element of $$ B $$.
 
Thus from all possible cases, there exist an smallest element of $$ B $$.

<hr/>

**Soln4**

Base Case:

Suppose $$ B \subseteq A $$ such that it contains only one element say $$ x $$. Since $$ R $$ is reflexive, $$ (x,x) \in R $$. It follows $$ (x,x) \in R \circ R $$.
Since $$ x $$ is the only element in $$ B $$, it follows $$ \forall y \in B((x,y) in R \circ R $$. 

Induction Step:

Suppose conclusion is true if $$ B \subseteq A $$ such that it contains $$ n $$ elements. 

Now consider $$ B \subseteq A $$ consisiting of $$ n+1 $$ elements. Suppose $$ b \in B $$ and $$ B' = B \setminus \{b \} $$. Thus $$ B' $$ consists of $$ n $$ elements.
Thus by induction hypothesis, there exist some $$ x \in B' $$ such that $$ \forall y \in B'((x,y) \in R \circ R) $$. Now we have following possible cases:

- $$ (x,b) \in R \circ R $$.      
Thus clearly $$ \forall y \in B((x,y) \in R \circ R) $$ is true. Thus there exist $$ x \in B $$ such that $$ \forall y \in B((x,y) \in R \circ R) $$.

- $$ (x,b) \notin R \circ R $$.      
Suppose $$ y \in B $$. Now either $$ y = b $$ or $$ y \ne b $$. If $$ y = b $$, then since $$ R $$ is reflexive, $$ (b,y) = (b,b) \in R \circ R $$.     

 Now for the case when $$ y \ne b $$, then $$ y \in B' $$. Thus $$ (x,y) \in R \circ R $$. Thus there exist some element $$ z $$ such that $$ (x,z) \in R $$
  and $$ (z,y) \in R $$. Since we are given that $$ \forall x \in A \forall y \in B(xRy \lor yRx) $$, it follows either $$ zRb $$ or $$ bRz $$. Suppose
  $$ (z,b) \in R $$. Then since $$ (x,z) \in R $$ and $$ (z,b) \in R $$, it follows $$ (x,b) \in R \circ R $$. But $$ (x,b) \notin R \circ R $$. Thus
 the assumption  $$ (z,b) \in R $$ is wrong. Thus $$ (b,z) \in R $$. Since $$ (b,z) \in R $$ and $$ (z,y) \in R $$, it follows $$ (b,y) \in R \circ R $$.
  
Since $$ y $$ is arbitrary, it follows $$ \forall y \in B((b,y) \in R \circ R) $$.

Thus from both cases, there exist some element $$ p \in B $$ such that $$ \forall y \in B((p,y) \in R \circ R) $$ is true.

**(b)**

Suppose $$ A = B = $$ the set of contestants. 

Suppose $$ R = \{(x, y) \in A \times A \, \vert \, x \text{ beats } y \} \cup i_A $$. Clearly $$ \forall x \in A \forall y \in B(xRy \lor yRx) $$. Thus
we can apply part(a). Thus there exist a contestant say $$ x $$ such that $$ \forall x \in B((b,x) \in R \circ R) $$.

Clearly $$ x $$ is an excellent contestant.

<hr/>

**Soln5**

Base Case:

For $$ n = 1 $$, we have: $$ F_1 = 2^{2^1} + 1 = 5 $$. Also $$ F_1 = F_0 + 2 = (2^{2^0} + 1) + 2 = 3+2 = 5 $$. Thus $$ P(1) $$ is true.
   
Induction Step:

Suppose for $$ n $$ theorem is correct. Thus $$ F_n = (F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1}) + 2 $$ is true.
Thus $$ F_n - 2 = F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1} $$.    

Now consider for $$ n+1 $$,

$$ F_{n+1} = 2^{2^{n+1}} + 1 $$.     
$$ \Rightarrow F_{n+1} = 2^{2 \cdot 2^n} + 1 $$.     
$$ \Rightarrow F_{n+1} = 2^{2^n} \cdot 2^{2^n} + 1 $$.     
Since $$ F_n = 2^{2^n} $$,      
$$ \Rightarrow F_{n+1} =  (F_n - 1) \cdot (F_n - 1) + 1 $$.     
$$ \Rightarrow F_{n+1} =  {F_n}^2 - 2F_n + 1 + 1 $$.     
$$ \Rightarrow F_{n+1} =  (F_n - 2) \cdot F_n + 2 $$.     
But by induction hypothesis, $$ F_n - 2 = (F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1}) $$.         
$$ \Rightarrow F_{n+1} =  (F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1}) \cdot F_n + 2 $$.     
$$ \Rightarrow F_{n+1} =  F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1} \cdot F_n + 2 $$.     

Thus $$ F_{n+1} = F_0 \cdot F_1 \cdot F_2 \cdot \cdot \cdot F_{n-1} \cdot F_n + 2 $$.     
Thus $$ P(n+1) $$ is true.

<hr/>

**Soln6**

Base Case:

For $$ n = 1 $$, clearly $$ \vert a_1 \vert \le \vert a_1 \vert $$.

Induction step:

Suppose $$ \vert a_1 + a_2 + \cdot \cdot \cdot a_n \vert \; \le \; \vert a_1 \vert + \vert a_2 \vert + \cdot \cdot \cdot + \vert a_n \vert $$
 
Now consider $$ \vert a_1 + a_2 + \cdot \cdot \cdot a_n + a_{n+1} \vert $$. By triangle inequality:      
$$ \vert a_1 + a_2 + \cdot \cdot \cdot a_n + a_{n+1} \vert  \; \le \; \vert a_1 + a_2 + \cdot \cdot \cdot a_n \vert + \vert a_{n+1} \vert $$.       
Thus by induction hypothesis:       
$$ \vert a_1 + a_2 + \cdot \cdot \cdot a_n + a_{n+1} \vert \; \le \; \vert a_1 \vert + \vert a_2 \vert + \cdot \cdot \cdot + \vert a_n \vert + \vert a_{n+1} \vert $$.       

Thus $$ P(n+1) $$ is true if $$ P(n) $$ is true.      

<hr/>

**Soln7**

**(a)**

Suppose $$ a,b $$ are positive real numbers. It follows that $$ (a-b)^2 > 0 $$. Thus $$ a^2 + b^2 - 2ab > 0 $$.     
Or $$ a^2 + b^2 > 2ab $$. We know that $$ ab > 0 $$. Dividing both sides by $$ ab $$, we get:     
 $$ \Rightarrow a/b + b/a > 2 $$.
  
**(b)**

Suppose $$ 0 < a \le b \le c $$. Thus $$ (c-a) \ge 0 $$ and $$ (c-b) \ge 0 $$. Thus:     
$$ (c-a)(c-b) \ge 0 $$.     
$$ \Rightarrow c^2 -cb -ac + ab \ge 0 $$. Dividing by $$ ca $$, we get:     
$$ \Rightarrow c/a - b/a -1 + b/c \ge 0 $$.      
$$ \Rightarrow b/c + c/a - b/a \ge 1 $$.      

**(c)**

Base Case:

For $$ n = 2 $$, we have $$ P(2) = a_1/a_2 + a_2/a_1 $$. Clearly from part(a) we can say that $$ a_1/a_2 + a_2/a_1 \ge 2 $$.

Induction Step:

Now suppose $$ P(n) $$ is true. Thus $$ a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_1 \ge n $$.

Now consider $$ a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_{n+1} + a_{n+1}/a_1 $$. This is equivalent to:
 
$$ a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_{n+1} + a_{n+1}/a_1 + a_n/a_1 - a_n/a_1 $$.    
$$ \Rightarrow a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_1 + a_n/a_{n+1} + a_{n+1}/a_1 - a_n/a_1 $$.    
Using induction hypothesis for $$ a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_1 \ge n $$, we get:     
$$ \Rightarrow \ge n + a_n/a_1 + a_n/a_{n+1} + a_{n+1}/a_1 - a_n/a_1 $$.     
Since $$ 0 < a_1 < a_n < a_{n+1} $$. By part(b) of the solution $$ a_n/a_{n+1} + a_{n+1}/a_1 - a_n/a_1 \ge 1 $$. Thus:     
$$ \Rightarrow \ge n + 1 $$.    

Thus $$ a_1/a_2 + a_2/a_3 + \cdot \cdot \cdot + a_{n-1}/a_n + a_n/a_{n+1} + a_{n+1}/a_1 \; \ge \; n+1 $$. Thus $$ P(n+1) $$ is true if
$$ P(n) $$ is true.

<hr/>

**Soln8**

**(a)**

We know that $$ {(a-b)}^2 \ge 0 $$. Thus:
 
$$ \Rightarrow a^2 + b^2 -2ab \ge 0 $$.     
$$ \Rightarrow a^2 + b^2 -2ab + 4ab \ge 0 + 4ab $$.     
$$ \Rightarrow a^2 + b^2 +2ab \ge 4ab $$.     
$$ \Rightarrow {(a+b)}^2 \ge 4ab $$.     
$$ \Rightarrow {(a+b)}^2/4 \ge ab $$.     
$$ \Rightarrow {((a+b)/2)}^2 \ge ab $$.     
Since $$ a, b > 0 $$, it follows $$ ab > 0 $$. Thus:     
$$ \Rightarrow (a+b)/2 \ge \sqrt {ab} $$.     

**(b)**

Base Case:

Clearly for $$ n = 2 $$ from part(a) theorem is correct.

Induction Step:

Suppose theorem is correct for $$ 2^n $$. Thus $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{2^n}} {2^n} \ge \sqrt[2^n] {a_1 \cdot a_2 \cdot \cdot \cdot a_{2^n}} $$.
 
Now consider the sum $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{2^n} + a_{2^n+1} + a_{2^n+2} + \cdot \cdot \cdot + a_{2^n + 2^n}} {2^n + 2^n} $$.
 
By induction hypothesis, clearly $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{2^n}} {2^n} \ge \sqrt[2^n] {a_1 \cdot a_2 \cdot \cdot \cdot a_{2^n}} $$.

Also by induction hypothesis, $$ \frac {a_{2^n+1} + a_{2^n+2} + \cdot \cdot \cdot + a_{2^n + 2^n}} {2^n} \ge \sqrt[2^n] {a_{2^n+1} \cdot a_{2^n+2} \cdot \cdot \cdot a_{2^n+2^n}} $$.

Thus we have:

$$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{2^n} + a_{2^n+1} + a_{2^n+2} + \cdot \cdot \cdot + a_{2^n + 2^n}} {2^n + 2^n} \ge \sqrt[2^n] {a_1 \cdot a_2 \cdot \cdot \cdot a_{2^n}} + \sqrt[2^n] {a_{2^n+1} \cdot a_{2^n+2} \cdot \cdot \cdot a_{2^n+2^n}} $$.     

Suppose $$ p = \sqrt[2^n] {a_1 \cdot a_2 \cdot \cdot \cdot a_n} $$ and $$ q = \sqrt[2^n] {a^{2^n+1} \cdot a^{2^n+1} \cdot \cdot \cdot a^{2^n+2^n}} $$.

Thus $$ p,q > 0 $$, it follows from part(a) that $$ p + q \ge 2 \sqrt {pq} $$.

It follows:

$$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{2^n} + a_{2^n+1} + a_{2^n+2} + \cdot \cdot \cdot + a_{2^n + 2^n}} {2^n + 2^n} \ge p + q $$.     
$$ \ge 2 \sqrt {pq} $$.      
$$ = 2 \sqrt {\sqrt[2^n] {a_1 \cdot a_2 \cdot \cdot \cdot a_n} \cdot \sqrt[2^n] {a^{2^n+1} \cdot a^{2^n+1} \cdot \cdot \cdot a^{2^n+2^n}} } $$.     
$$ = 2 \cdot \sqrt[2^{n+1}] {a_1 \cdot a_2 \cdot \cdot \cdot a_n \cdot a^{2^n+1} \cdot a^{2^n+1} \cdot \cdot \cdot a^{2^n+2^n} } $$.     
$$ = 2 \cdot \sqrt[2^{n+1}] {a_1 \cdot a_2 \cdot \cdot \cdot a_n \cdot a^{2^n+1} \cdot a^{2^n+1} \cdot \cdot \cdot a^{2^{n+1}} } $$.     
$$ \ge \sqrt[2^{n+1}] {a_1 \cdot a_2 \cdot \cdot \cdot a_n \cdot a^{2^n+1} \cdot a^{2^n+1} \cdot \cdot \cdot a^{2^{n+1}} } $$.
     
Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

**(c)**

Base Case:

This directly follows from the assumption in the problem at $$ n = n_0 $$. Thus:

$$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n_0}} {n_0} < \sqrt[n_0] {a_1 \cdot a_2 \cdot \cdot \cdot a_{n_0}} $$.

Induction step:

Suppose theorem is true for $$ n > n_0 $$. Thus $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n}} {n} < \sqrt[n] {a_1 \cdot a_2 \cdot \cdot \cdot a_{n}} $$.     

Now suppose $$ m = \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n}} {n} $$ and $$ a_{n+1} = m $$.
 
Thus $$ m < \sqrt[n] {a_1 \cdot a_2 \cdot \cdot \cdot a_{n}} $$.    
Or $$ m^n < a_1 \cdot a_2 \cdot \cdot \cdot a_{n} $$.     
Or $$ m^n \cdot m < a_1 \cdot a_2 \cdot \cdot \cdot a_{n} \cdot m $$.     
Or $$ m^{n+1} < a_1 \cdot a_2 \cdot \cdot \cdot a_{n} \cdot a_{n+1} $$.     
Or $$ m < \sqrt [n+1] {a_1 \cdot a_2 \cdot \cdot \cdot a_{n} \cdot a_{n+1}} $$.    


Also since $$ m = \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n}} {n} $$, it follows $$ mn = a_1 + a_2 + \cdot \cdot \cdot + a_{n} $$.    

Thus we have $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n} + a_{n+1}} {n+1} = \frac {mn + m} {n+1} = \frac {m(n+1)} {n+1} = m $$.

Thus $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_{n} + a_{n+1}} {n+1} < \sqrt [n+1] {a_1 \cdot a_2 \cdot \cdot \cdot a_{n} \cdot a_{n+1}} $$.     

Thus $$ P(n+1) $$ is true if $$ P(n) $$ is true.

**(d)**

We shall prove this by contradiction. Suppose the inequality is not correct for some $$ n_0 $$. Now suppose $$ n $$ is an integer such that $$ 2^n > n_0 $$. Thus by 
part(c) it follows theorem fails for $$ 2^n $$. But from part(b) contradicts this as it says theorem is correct for $$ 2^n $$. Thus our assumption is wrong and the
 theorem is correct for all values of $$ n $$.
 
<hr/>

**Soln9**

From Soln8, we have $$ \frac {a_1 + a_2 + \cdot \cdot \cdot + a_n} {n} \ge \sqrt[n] {a_1 \cdot a_2 \cdot \cdot \cdot a_n} $$.

We know that if $$ x \ge y $$ then $$ \frac 1 x \le \frac 1 y $$. Thus:
  
$$ \Rightarrow \frac {n} {a_1 + a_2 + \cdot \cdot \cdot + a_n} \le \frac 1 {\sqrt[n] {a_1 \cdot a_2 \cdot \cdot \cdot a_n}} $$.     

Suppose $$ b_1 = \frac 1 {a_1}, b_2 = \frac 1 {a_2}, \cdot \cdot \cdot b_n = \frac 1 {a_n} $$.

$$ \Rightarrow \frac {n} { {\frac 1 {b_1} } + {\frac 1 {b_2} } + \cdot \cdot \cdot + {\frac 1 {b_n} } } \le \frac 1 {\sqrt[n] { {\frac 1 {b_1} } \cdot {\frac 1 {b_2} } \cdot \cdot \cdot {\frac 1 {b_n} } } } $$.    

$$ \Rightarrow \frac {n} { {\frac 1 {b_1} } + {\frac 1 {b_2} } + \cdot \cdot \cdot + {\frac 1 {b_n} } } \le \sqrt[n] {b_1 \cdot b_2 \cdot \cdot \cdot b_n} $$.    

<hr/>

**Soln10**

Base Case:

Suppose $$ A $$ has $$ n = 0 $$. Then $$ \mathcal P(A) = \{ \phi \} $$. Thus $$ \mathcal P(A) $$ contains $$ 2^0 = 1 $$ element.
  
Induction Step:

Suppose the theorem is true for $$ n $$. Thus for a set $$ A $$ containing $$ n $$ elements, number of elements in $$ \mathcal P(A) $$ equals to $$ 2^n $$.
 
Suppose $$ A $$ contains $$ n+1 $$ elements. Suppose $$ a \in A $$ is an arbitrary element of $$ A $$. Suppose $$ A' = A \setminus \{a\} $$. Thus $$ \mathcal P(A') $$
contains $$ 2^n $$ elements. Since $$ A' \subseteq A $$, it follows $$ \mathcal P(A') \subseteq \mathcal P(A) $$. Every subset of $$ A $$ may either 
contain $$ a $$ or not. Thus half of the subsets of $$ A $$ will contain $$ a $$ and other half will not. Since $$ A' = A \setminus \{a\} $$, subsets os $$ A $$ 
that does not contain $$ a $$ are also the subsets of $$ A' $$. Since number of subsets of $$ A' = 2^n $$, it follows number of subsets of $$ A $$ not 
 containing $$ a $$ is also $$ 2^n $$. It follows number of subsets of $$ A $$ containing $$ a $$ is also $$ 2^n $$. Thus total subsets of $$ A = 2^n + 2^n = 2^{n+1} $$.
 
Thus if P(n) is true then $$ P(n+1) $$ is also true.

<hr/>

**Soln11**

Base Case:

For $$ n = 0 $$, $$ A $$ has $$ 0 $$ elements. Also $$ n(n-1)/2 = 0(0-1)/2 = 0 $$.

Induction Step:

Suppose theorem is correct for $$ n $$ elements. Thus $$ \mathcal P_2(A) $$ contains $$ n(n-1)/2 $$ elements.

Suppose $$ A $$ contains $$ n+1 $$ elements. Suppose $$ a \in A $$ is an arbitrary element of $$ A $$. Suppose $$ A' = A \setminus \{a\} $$.
Thus $$ A' $$ contains $$ n $$ elements. Thus by induction hypothesis $$ \mathcal P_2(A') $$ contains $$ n(n-1)/2 $$ elements.

Clearly $$ \mathcal P_2(A) $$ contains all the elements of $$ \mathcal P_2(A') $$. In addition $$ \mathcal P_2(A) $$ contains all the subsets of $$ A $$ containing
 exactly two elements such that each subset contains $$ a $$. If $$ a $$ is combined with every element of $$ A' $$ then the result is the same as
all the subsets of $$ A $$ containing exactly two elements that contains $$ a $$. Since number of elements in $$ A $$ is $$ n $$, it follows number of
subsets of $$ A $$ containing exactly two elements such that each set contains $$ a $$ is equal to $$ n $$. Thus number of elements in $$ \mathcal P_2(A) $$ is
equal to sum of number of elements in $$ \mathcal P_2(A') $$ and $$ n $$(number of elements in $$ A $$). Thus number of elements in $$ \mathcal P_2(A) $$ is
equal to $$ n(n-1)/2 + n = n(n+1)/2 = (n+1)(n+1-1)/2 $$.
  
Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>

**Soln12**

Base Case:

For $$ n = 1 $$, we have $$ 4^n = 4 $$. Clearly if any of the four triangles(thus any corner) is removed then the remaining shape is same as the trapezoidal tile.
Thus for $$ n = 1 $$ theorem is correct.

Induction step:

Suppose theorem is correct for $$ n $$. Thus if any equilateral triangle triangle is split into $$ 4^n $$ small congruent triangles and one of them is removed, then the resulting shape can be covered
 with trapezoidal tiles.
 
Now consider a equilateral triangle is cut into $$ 4^{n+1} $$ small congruent equilateral triangles. Thus the equilateral triangle is cut into $$ 4 \cdot 4^n $$ smaller
 equilateral triangles. Thus we can also say there are $$ 4 $$ congruent equlateral triangle say $$ A,B,C,D $$ with each of the $$ 4 $$ triangle contains $$ 4^n $$ small triangles.
This can be imagined easily with one triangle on each corner(say $$ A,B,C $$) of the equilateral triangle and one at the center(say $$ D $$. Thus in a way this center triangle 
is splitting the main triangle into 4 equal triangles and each corner of the center triangle touches midpoint of each side of the main triangle. 
 
Now suppose a triangle of the $$ 4^{n+1} $$ equal triangles is removed from the corner of the main equilateral triangle. Thus this small triangle must belong
 to one of the three equilateral triangle $$ A,B $$ or $$ C $$. Lets assume the small triangle is removed from $$ A $$.
 
Since $$ A $$ contains $$ 4^n $$ equal triangles, then by induction hypothesis $$ A $$ can be covered by trapezoidal tiles. Thus we need to prove that the remaining
3 triangles $$ B,C,D $$ can also be covered by trapezoidal tiles.

Now consider that we place trapezoidal tile on triangles $$ B,C,D $$ such that trapzoidal tiles covers exactly one small triangle of each triangle $$ B,C,D $$.
This placement will result in each triangle $$ B,C,D $$ with one smaller triangle of the corner covered. Thus now we need to cover only $$ 4^n - 1 $$ triangles
of $$ B,C,D $$. Thus by induction hypothesis this can be done.
 
Thus whole main triangle can be covered with trapezoidal tiles.
  
<hr/>

**Soln13**

Base Case:

For $$ n = 1 $$, total number of regions by one chord in the circle $$ = 2 = (1^2 + 1 + 2)/2 $$. 

Induction Step:

Suppose this is true for $$ n $$. Thus number of regions by $$ n $$ chords $$ = (n^2 + n + 2)/2 $$.

Now consider for $$ n + 1 $$ chords. Clearly, the way in which chord is drawn it will intersect every other chord(total $$ n $$) at one point. And after 
the starting point of the chord, on every point of intersection, that region is divided into two parts. Thus after drawing $$ n $$ chords, when we draw 
$$ (n + 1) $$-th chord, it will divide $$ (n + 1) $$ regions into two parts. Thus extra $$ n+1 $$ regions are added. Thus total number of regions will be 
sum of number of regions created by $$ n $$ chords and $$ n+1 $$. By induction hypothesis number of regions by $$ n $$ chords $$= (n^2 + n + 2)/2 $$. Thus 
total regions created by $$ n + 1 $$ chords are $$ (n^2 + n + 2)/2 + (n + 1) = (n^2 + 3n + 4)/2 = ({(n+1)}^2 + (n+1) + 2)/2 $$.

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln14**

Base Case:

For $$ n = 1 $$, clearly it can be colored in the way required.

Induction Step:

Suppose theorem is correct for $$ n $$ chords. 

Every new chord we draw divides the circle into two parts. Also every new chord divides each region from which it passes  into two parts. 
Now suppose a circle has $$ n $$ chords and we draw the $$(n+1)$$-th chord. Thus this $$ (n+1) $$-th chord will divide the circle 
in two parts say $$ A $$ and $$ B $$.  Also this $$ (n+1) $$-th chord divides every previous region which it passes into two parts.
Clearly this division of the region is such that one region lies in $$ A $$ and other lies in $$ B $$. 

Now by hypothesis when $$ n $$ chords were drawn, the region was colored correctly. It follows that after dividing the corcle in two parts then
each individual part is colored correctly. Thus $$ A $$ and $$ B $$ are colored correctly. But when we see $$ A $$ and $$ B $$ combined then 
colors are not correct. 

Since both $$ A $$ and $$ B $$ are correct individually, we can invert all the colors and they will still be correctly colored. Thus if we 
invert all the colors of only one part say $$ A $$. Then $$ A $$ and $$ B $$ both are correctly colored. Also because of the inverse of colors they
will be correctly colored even if we combine them to form the circle.

Thus if $$ n $$ is true then $$ n+1 $$ is also true.

<hr/>

**Soln15**

The flaw is in deducing that every natural number is an element of $$ A $$. Clearly $$ n $$ was selected such that it belongs to both $$ \mathbb N $$
and $$ A $$, thus it is not necessary that any other $$ n $$, $$ n+1 $$ in particular, which belongs to $$ \mathbb N $$ also belongs to $$ A $$.

<hr/>

**Soln16**

Base case is correct.

In the induction step it assumed it is correct for $$ n \ge 1 $$. Then it proceeded for $$ n + 1 $$ elements. Now while working with $$ n + 1 $$
elements it is assumed that $$ n + 1 \ge 3 $$. But this assumption is not correct as it can also be the case when $$ n + 1 = 2 $$. Since the assumption
$$ n + 1 \ge 3 $$ is wrong, it follows that induction step is not correct.

<hr/>








  
 


