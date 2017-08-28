---
chapterName: "Relations"
sectionName: "4.2 - Relations"
chapter: 4
section: "4.2"
order: "002"
date: 2015-10-15
description:  "Inchmeal - Velleman's How To Prove It Solutions, Ch-4 Sec-4.2, Relations"
redirect_from:
  - /2015/10/15/how-to-prove-it-ch-4-sec-2.html
---

### Summary

- Relation: Suppose $$ A $$ and $$ B $$ are sets. Then a set $$ R \subseteq A \times B $$ is called a relation from $$ A $$ to $$ B $$.
- Suppose $$ R $$ is a relation from $$ A $$ to $$ B $$, then:
    - Domain of relation $$ R $$ is a set:     
        $$ dom(R) = \{a \in A \, \vert \, \exists b \in B((a, b) \in R)\} $$.
    - Range of relation $$ R $$ is a set:     
        $$ Ran(R) = \{b \in B \, \vert \, \exists a \in A((a, b) \in R)\} $$.
    - The inverse of $$ R $$ is the relation $$ R^{−1} $$ from $$ B $$ to $$ A $$:    
        $$ R^{−1} = \{(b,a) \in B \times A \, \vert \, (a,b) \in R \} $$.
- Composition: Suppose $$ R $$ is a relation from $$ A $$ to $$ B $$ and $$ S $$ is a relation from $$ B $$ to $$ C $$. Then the composition of $$ S $$
  and $$ R $$ is the relation $$ S \circ R $$ from $$ A $$ to $$ C $$ defined as follows:    
        $$ S \circ R = \{ (a, c) \in A \times C \, \vert \, \exists b \in B((a, b) \in R and (b, c) \in S) \} $$.
- If $$ R $$ is a relation from $$ A $$ to $$ B $$, $$ S $$ is a relation from $$ B $$ to $$ C $$, and $$ T $$ is a relation from $$ C $$ to $$ D $$. Then:    
    - $$ (R^{−1})^{−1} = R $$.
    - $$ Dom(R^{−1}) = Ran(R) $$.
    - $$ Ran(R^{−1}) = Dom(R) $$.
    - $$ T \circ (S \circ R) = (T \circ S) \circ R $$. 
    - $$ (S \circ R)^{−1} = R^{−1} \circ S^{−1} $$.

<hr/>

**Soln1**

**(a)** Domain is the set of living persons who are parents of some living people and Range is the set of all living persons who have a living parent.

**(b)** Domain is the set of all real numbers, $$ \mathbb R $$. Range is the set of all positive numbers, $$ \mathbb R^+ $$.

<hr/>

**Soln2**

**(a)** Domain is the set of all living persons who are brother of some living person. Range is the set of all living persons who have a living brother.
  
**(b)** Domain : $$ \{ x \in \mathbb R \, \vert \, x =< -1 \lor x >= 1 \} $$. Note that if domain lies in $$ (-1, 1) $$ then $$ 1- \frac 2 {1 + x^2} $$
    will be negative. Thus there will be no $$ y \in \mathbb R $$ such that $$ y^2 $$ is negative.    
    Range: $$ \{ x \in \mathbb R \, \vert \, 0 \ge x < 1 \} $$.
    
<hr/>

**Soln3**

**(a)** $$ L $$ is a relation from $$ S $$ to $$ R $$. $$ L^{-1} $$ is a relation from $$ R $$ to $$ S $$. Thus:    
    $$ L^{-1} \circ L = \{ (m,n) \in S \times S \, \vert \, \exists o \in R((m,o) \in L \land (o,n) \in L^{-1}) \} $$.    
    $$ \quad = \{ (m,n) \in S \times S \, \vert \, \text{There exists a room o such that m lives in that room and also n lives in that room.} \} $$.    
    $$ \quad = \{ (m,n) \in S \times S \, \vert \, \text{There exists a room such that m, and n both lives in that room} \} $$.
    
**(b)** $$ L^{-1} \circ L $$ is a relation from $$ S $$ to $$ S $$. $$ E $$ is a relation from $$ S $$ to $$ C $$. Thus:     
    $$ E \circ (L^{−1} \circ L) = \{ (m,n) \in S \times C \, \vert \, \exists s \in S((m,s) \in L^{−1} \circ L \land (s,n) \in E) \} $$.    
    $$ E \circ (L^{−1} \circ L) = \{ (m,n) \in S \times C \, \vert \, \text{There exists a student s such that m and s lives in same room and s is doing course n} \} $$.    
    $$ E \circ (L^{−1} \circ L) = \{ (m,n) \in S \times C \, \vert \, \text{There exists a student s who lives in dorm which has a student doing course n} \} $$.
    
<hr/>

**Soln4**

**(a)** $$ S \circ R = \{ \{1, 5\}, \{1, 6\}, \{1, 4\}, \{2, 4\}, \{3, 6\} \} $$. 

**(b)** 

$$ S^{-1} = \{ \{5, 4\}, \{6, 4\}, \{4, 5\}, \{6, 6\}\} $$.    
$$ S \circ S^{-1} = \{ \{5, 5\}, \{5, 6\}, \{6, 5\}, \{6, 6\}, \{4, 4\} \} $$.
 
<hr/>
 
**Soln5**

**(a)** 
    
$$ S^{-1} = \{ \{7, 4\}, \{8, 4\}, \{6, 5\}\} $$.    
$$ S^{-1} \circ R = \{ \{1, 4\}, \{3, 5\}, \{3, 4\}\} $$.
    
**(b)**

$$ R^{-1} = \{ \{7, 1\}, \{6, 3\}, \{7, 3\} \} $$.    
$$ R^{-1} \circ S = \{ \{4, 1\}, \{4, 3\}, \{5, 3\}\} $$.

<hr/>

**Soln6**

**(a)**

$$ Ran(R^{-1}) $$ and $$ Dom(R) $$ are both subsets of $$ A $$. Let $$ a $$ is an arbitrary element of $$ A $$. Then,    

$$ a \in Ran(R^{−1}) $$ iff $$ \exists b \in B((b,a) \in R^{−1}) $$.    
$$ iff \exists a ∈ A((a,b) ∈ R) $$ iff $$ b ∈ Ran(R) $$.

Since $$ a $$ is arbitrary, $$ Ran(R^{-1}) = Dom(R) $$.

**(b)**

Suppose $$ S = R^{-1} $$, then $$ S^{-1} = (R^{-1})^{-1} = R $$. Since $$ Dom(R^{−1}) = Ran(R) $$, it follows that $$ Dom(S) = Ran(S^{-1}) $$,
or $$ Ran(S^{-1} = Dom(S) $$.

<hr/>

**(c)**

Clearly $$ (T \circ S) \circ R $$ and $$ T \circ (S \circ R) $$ are both relations from $$ A $$ to $$ D $$. Let $$ (a, d) $$ be an arbitrary element of $$ A \times D $$.

Suppose $$ (a,d) \in (T \circ S) \circ R $$. Thus there must exist an element $$ b $$ such that $$ (a, b) \in R $$ and $$ (b,d) \in T \circ S $$. Since 
$$ (b,d) \in T \circ S $$, there must exist a n element $$ c $$ such that $$ (b,c) \in S $$ and $$ (c,d) \in T $$. Now since $$ (a,b) \in R $$ and
$$ (b,c) \in S $$, it follows that $$ (a,c) \in S \circ R $$. Thus we have $$ (a,c) \in S \circ R $$ and $$ (c,d) \in T $$, thus it follows that
$$ (a,d) \in T \circ (S \circ R) $$. Since $$ (a,d) $$ is arbitrary, it follows that $$ (T \circ S) \circ R \subseteq T \circ (S \circ R) $$.
 
**(d)**

Clearly $$ S \circ R $$ is a relation from $$ A $$ to $$ C $$. Thus $$ (S \circ R)^{-1} $$ is a relation from $$ C $$ to $$ A $$. Also, it can be noted 
that $$ R^{−1} \circ S^{−1} $$ is also a relation from $$ C $$ to $$ A $$. Suppose $$ (c,a) $$ is an arbitrary element of $$ C $$ to $$ A $$.

($$ \to $$)Suppose $$ (c,a) \in (S \circ R)^{-1} $$. It follows that $$ (a,c) \in (S \circ R) $$. Thus there exist an element $$ b $$ such that $$ (a,b) \in R $$
and $$ (b,c) \in S $$. Since $$ (a,b) \in R $$, it follows that $$ (b,a) \in R^{-1} $$. Similarly, since $$ (b,c) \in S $$, it follows that $$ (c,b) \in S^{-1} $$.
Now, we have $$ (c,b) \in S^{-1} $$ and $$ (b,a) \in R^{-1} $$, it follows $$ (c,a) \in R^{-1} \circ S^{-1} $$. Now since $$ (c,a) $$ is arbitrary,
 it follows that $$ (S \circ R)^{-1} \subseteq R^{-1} \circ S^{-1} $$.
 
($$ \leftarrow $$)Similarly, suppose $$ (c,a) \in R^{-1} \circ S^{-1} $$. Thus there exists an element $$ b \in B $$ such that $$ (c,b) \in S^{-1} $$
and $$ (b,a) \in R^{-1} $$. Thus it follows that $$ (a,b) \in R $$ and $$ (b,c) \in S $$. Now since $$ (a,b) \in R $$ and $$ (b,c) \in S $$, it follows
that $$ (a,c) \in S \circ R $$. And since $$ (a,c) \in S \circ R $$, it follows that $$ (c,a) \in (S \circ R )^{-1} $$. Since $$ (c,a) $$ is arbitrary,
we can conclude that $$ R^{-1} \circ S^{-1} \subseteq (S \circ R)^{-1} $$.

Thus from both directions, we can conclude that $$ (S \circ R)^{-1} = R^{-1} \circ S^{-1} $$.

<hr/>

**Soln7**

Suppose $$ p $$ is the enemy of $$ q $$ and $$ q $$ is the enemy of $$ r $$, then it is given that $$ p $$ is the friend of $$ r $$. Thus we have
if $$ (p,q) \in E $$ and $$ (q,r) \in E $$, then $$ (p,r) \in F $$. Now since $$ (p,q) \in E $$ and $$ (q,r) \in E $$, it follows $$ (p,r) \in E \circ E $$.
Thus the given statement says: if $$ (p,r) \in E \circ E $$, then $$ (p,r) \in F $$, or Enemy of an enemy is a friend. Since $$ (p,r) $$ is arbitrary,
it follows that $$ E \circ E \subseteq F $$.

<hr/>

**Soln8**

**(a)**

Suppose $$ a \in Dom(S \circ R) $$. Thus there exist a pair $$ (b,c) \in S $$ such that $$ (a,b) \in R $$. Since $$ (a,b) \in R $$, it follows that 
$$ a \in Dom(R) $$. Thus if $$ a \in Dom(S \circ R) $$, then $$ a \in Dom(R) $$. Since $$ a $$ is arbitrary, we can conclude that $$ Dom(S \circ R) \subseteq Dom(R) $$.

**(b)**

Suppose $$ Ran(R) \subseteq Dom(S) $$. Suppose $$ a \in Dom(R) $$. Thus there must exist an element $$ b \in B $$ such that $$ (a,b) \in R $$. Thus
$$ b \in Ran(R) $$. Since $$ Ran(R) \subseteq Dom(S) $$, it follows that $$ b \in Dom(S) $$. Thus there must exist an element $$ c \in C $$ such that
$$ (b,c) \in S $$. Now since $$ (a,b) \in R $$ and $$ (b,c) \in S $$, it follows that $$ (a,c) \in (S \circ R) $$. Thus $$ a \in Dom(S \circ R) $$.
Thus we have, if $$ a \in Dom(R) $$, then $$ a \in Dom(S \circ R) $$. Since $$ a $$ is arbitrary, we can conclude that $$ Dom(R) \subseteq Dom(S \circ R) $$.

Thus from part (a) and this proof we can conclude that $$ Dom(S ◦ R) = Dom(R) $$.

**(c)**

- $$ Ran(S \circ R) \subseteq Ran(S) $$.    
Suppose $$ c \in (S \circ R) $$. Thus there must exist a pair $$ (a,c) \in S \circ R $$. Since $$ (a,c) \in S \circ R $$, there must exist an element
$$ b \in B $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in S $$. Now since $$ (b,c) \in S $$, it follows that $$ c \in Ran(S) $$. Since $$ c $$ is arbitrary,
we can conclude that $$ Ran(S \circ R) \subseteq Ran(S) $$.
 
-  $$ Ran(S \circ R) = Ran(S) $$.    
Suppose $$ Dom(S) \subseteq Ran(R) $$. Suppose $$ c \in Ran(S) $$. Thus there must exist an element $$ b \in B $$ such that $$ (b,c) \in Ran(S) $$.
Thus $$ b \in Dom(S) $$. Now since $$ Dom(S) \subseteq Ran(R) $$, it follows that $$ b \in Ran(R) $$. Thus there must exist an element $$ a \in A $$ such
that $$ (a,b) \in R $$. Thus we have $$ (a,b) \in R $$ and $$ (b,c) \in S $$, it follows that $$ (a,c) \in S \circ R $$. Thus $$ c \in Ran(S \circ R) $$.
Thus we have, if $$ c \in Ran(S) $$, then $$ c \in Ran(S \circ R) $$. Since $$ c $$ is arbitrary, we can conclude that $$ Ran(S) \subseteq Ran(S \circ R) $$.

Since $$ Ran(S \circ R) \subseteq Ran(S) $$ and $$ Ran(S) \subseteq Ran(S \circ R) $$, we can conclude that $$ Ran(S \circ R) = Ran(S) $$.
   
<hr/>

**Soln9**

**(a)**. True.

Suppose $$ (a,b) \in R $$. Then $$ a \in Dom(R) $$ and $$ b \in Ran(R) $$. Thus $$ (a,b) \in Dom(R) \times Ran(R) $$. Thus we can say that, if $$ (a,b) \in R $$,
then $$ (a,b) \in Dom(R) \times Ran(R) $$. Since $$ (a,b) $$ is arbitrary, we can conclude that $$ R \subseteq Dom(R) \times Ran(R) $$.
 
**(b)** True.

Suppose $$ R \subseteq S $$. Suppose $$ (b,a) \in R^{-1} $$. Thus $$ (a,b) \in R $$. Since $$ R \subseteq S $$, it follows $$ (a,b) \in S $$. Now since
$$ (a,b) \in S $$, it follows $$ (b,a) \in S^{-1} $$. Thus if $$ (b,a) \in R^{-1} $$, then $$ ((b,a) \in S^{-1} $$. Since $$ (b,a) $$ is arbitrary, we 
can conclude that $$ R^{-1} \subseteq S^{-1} $$.

**(c)** True.

Suppose $$ (a,b) \in (R \cup S)^{−1} $$.    
 iff $$ (b,a) \in (R \cup S) $$.    
 iff $$ ((b,a) \in R) \lor ((b,a) \in S) $$.    
 iff $$ ((a,b) \in R^{-1}) \lor ((a,b) \in S^{-1}) $$.    
 iff $$ (a,b) \in (R^{-1} \cup \in S^{-1}) $$.    

Since $$ (a,b) $$ is arbitrary, we can conclude that $$ (R \cup S)^{-1} = R^{-1} \cup S^{-1} $$. 

<hr/>

**Soln10**

We will prove it by contra-positive. 

($$ \to $$)Suppose $$ Ran(R) \cap Dom(S) \ne \phi $$. Thus there must exist some element $$ b \in Ran(R) $$ and $$ b \in Dom(S) $$. Since $$ b \in Ran(R) $$,
there must exist an element $$ a \in A $$ such that $$ (a,b) \in R $$. Similarly, since $$ b \in Dom(S) $$, there must exist an element $$ c \in C $$ such that
$$ (b,c) \in S $$. Thus we have $$ (a,b) \in R $$ and $$ (b,c) \in S $$, it follows that $$ (a,c) \in S \circ R $$. Thus $$ S \circ R \ne \phi $$. Hence by 
contrapositive we can conclude that if $$ S \circ R = \phi $$, then $$ Ran(R) \cap Dom(S) = \phi $$.

($$ \leftarrow $$)Suppose $$ S \circ R \ne \phi $$. Thus there exist atleast one pair $$ (a,c) \in S \circ R $$. Thus there exist an element $$ b \in B $$
such that $$ b \in Ran(R) $$ and $$ b \in Dom(S) $$. Thus it follows $$ b \in Ran(R) \cap Dom(S) $$, or $$ Ran(R) \cap Dom(S) \ne \phi $$. Hence by contrapositive,
we can conclude that if $$ Ran(R) \cap Dom(S) = \phi $$, then $$ S \circ R = \phi $$.

<hr/>

**Soln11**

**(a)**

Clearly $$ S \circ R $$, $$ T \circ R $$, and $$ (S \setminus T) \circ R $$ are relations from $$ A $$ \to $$ C $$. Suppose $$ (a,c) $$ is an arbitrary
element in $$ (S \circ R)\setminus(T \circ R) $$. Thus $$ (a,c) \in S \circ R $$ and $$ (a,c) \notin T \circ R $$. It follows that $$ a \in Dom(R) $$
and $$ c \in Ran(S) $$ and $$ c \notin Ran(T) $$. Thus $$ c \in Ran(S) \setminus Ran(T) $$, which is equivalent to saying that $$ c \in Ran(S \setminus T) $$.
Now since $$ a \in Dom(R) $$ and $$ c \in Ran(S \setminus T) $$, there exist an element $$ b \in B $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in S \setminus T $$.
Thus it follows that $$ (a,c) \in (S \setminus T) \circ R $$. Sicne $$ (a,c) $$ is arbitrary, we can conclude that $$ (S \circ R)\setminus(T \circ R) \, \subseteq \, (S \setminus T) \circ R $$. 

**(b)**

The theorem and proof both not correct. In the proof, incorrect statement is:
 
 Since $$ (a,b) \in R $$ and $$ (b,c) \notin T, (a,c) \notin T \circ R $$.
 
The problem is, there might exist some other element $$ b' $$ such that $$ (a,b') \in R $$ and $$ (b',c) \in T $$. Thus even if $$ (b,c) \notin T $$,
it might be a case that $$ (a,c) $$ may still is in $$ T \circ R $$.

**(c)**

As noted in the above part b, we can easily find such element:

$$ R = \{ \{ 1, 2\}, \{1, 1\} \} $$.    
$$ S = \{ \{ 2, 7\} \} $$.    
$$ T = \{ \{ 1, 7\} \} $$.

$$ (S \setminus T) \circ R = \{ 1, 7 \} $$.    

$$ S \circ R = \{ 1, 7 \} $$.    
$$ T \circ R = \{ 1, 7 \} $$.    
$$ (S \circ R) \setminus (T \circ R) = \phi $$.    

<hr/>

**Soln12**

**(a)** True.
 
Suppose $$ S \subseteq T $$. Suppose $$ (a,c) \in S \circ R $$. Thus there exists an element $$ b \in B $$ such that $$(a,b) \in R $$ and $$ (b,c) \in S $$.
Since $$ S \subseteq T $$, it follows that $$ (b,c) \in T $$. Now since $$ (a,b) \in R $$ and $$ (b,c) \in T $$, it follows $$ (a,c) \in T \circ R $$.
Thus if $$ (a,c) \in S \circ R $$, then $$ (a,c) \in T \circ R $$. Since $$ (a,c) $$ is arbitrary, we can conclude $$ S \circ R \subseteq T \circ R $$.

**(b)** True.

Suppose $$ (a,c) \in (S \cap T) \circ R $$. Thus there exists an element $$ b \in B $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in S \cap T $$. It follows that
$$ (b,c) \in S $$ and $$ (b,c) \in T $$. Since $$ (a,b) \in R $$ and $$ (b,c) \in S $$, $$ (a,c) \in S \circ R $$. Similarly, since $$ (a,b) \in R $$ and 
$$ (b,c) \in T $$, $$ (a,c) \in T \circ R $$. Thus $$ (a,c) \in (S \circ R) \cap (T \circ R) $$.

**(c)** False.

$$ R = \{ \{ 1, 2\}, \{1, 1\} \} $$.    
$$ S = \{ \{ 2, 7\} \} $$.    
$$ T = \{ \{ 1, 7\} \} $$.

$$ S \circ R = \{ 1, 7 \} $$.    
$$ T \circ R = \{ 1, 7 \} $$.    
$$ (S \circ R) \cap (T \circ R) = \{ 1, 7 \} $$.    

$$ S \cap T = \phi $$    
$$ (S \cap T) \circ R = \phi $$    

Thus, $$ (S \circ R) \cap (T \circ R) \ne (S \cap T) \circ R  $$.    
 
**(d)** 

Suppose $$ (a,c) \in (S \cup T) \circ R $$. Thus, 

iff, $$ \exists b \in B, $$ such that, $$ (a,b) \in R \land ((b,c) \in S \lor (b,c) \in T)$$.    
iff, $$ ((a,b) \in R \land (b,c) \in S) \lor ((a,b) \in R \land (b,c) \in T)$$.    
iff, $$ ((a,c) \in S \circ R) \lor ((a,c)\in T \circ R)$$.    
iff, $$ (a,c) \in (S \circ R) \cup (T \circ R)$$.    

Since, $$ (a,c) $$ is arbitrary, we can conclude that $$ (S \cup T) \circ R \, = \, (S \circ R) \cup (T \circ R) $$.
