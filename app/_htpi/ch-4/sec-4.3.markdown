---
chapterName: "Relations"
sectionName: "4.3 - More About Relations"
chapter: 4
section: "4.3"
order: "003"
date: 2015-10-16
redirect_from:
  - /2015/10/16/how-to-prove-it-ch-4-sec-3.html
---

### Summary

- In last section, relations were described as subsets of cartesian products. Another alternative notation for relations can be:    
    - A point $$ (a,b) $$ in a relation R, or $$ (a,b) \in R $$, can be also be described by notation: $$ a R b $$.
    - This notation is similar to the way in mathematics where relationships between two objects are expressed by placing a symbol
      between these two objects. Eg: $$ x > y $$, or $$ A \subseteq B $$.
- Another way to see relations, is drawing their pictures. To describe a relation $$ R $$ from $$ A $$ to $$ B $$. Two closed curves can
  be drawn adjacent to each other without touching. Draw points/vertices in one curve containing all the points from $$ A $$ and similarly
  in other curve containing all points of $$ B $$. Now if $$ x \in A $$ and $$ y \in B $$ and $$ (x,y) \in R $$, then draw an edge pointing 
  from $$ A $$ to $$ B $$.
- For relations like $$ R \subseteq A \times A $$, directed graphs can be used to described the relation. Such relations may also be called
  as: $$ R $$ is a relation on set $$ A $$.
- Suppose $$ R $$ is a relation on $$ A $$, then:
    - $$ R $$ is reflexive on $$ A $$ (or just reflexive, if $$ A $$ is clear from context) if $$ \forall x \in A(x R x), $$ or in other
       words $$ \forall x \in A((x,x) \in R) $$.
    - $$ R $$ is symmetric if $$ \forall x \in A \forall y \in A(x R y \to y R x) $$.
    - $$ R $$ is transitive if $$ \forall x \in A \forall y \in A \forall z \in A((x R y ∧ y R z) \to x R z) $$.
- Suppose $$ A $$ is a set. Let $$ i_A = \{(x, y) \in A \times A \, \vert \, x = y \} $$. Then $$ i_A $$ is called identity relation on $$ A $$.
- Suppose $$ R $$ is a relation on a set $$ A$$, then:
    - $$ R $$ is reflexive iff $$ i_A \subseteq R $$, where $$ i_A $$ is the identity relation on A. 
    - $$ R $$ is symmetric iff $$ R = R^{−1} $$.
    - $$ R $$ is transitive iff $$ R \circ R \subseteq R $$.
   
<hr/>

Skipping problems 1 to 3 as they need diagrams.

**Soln4**

**(a)** $$ \{ (a,c), (c,c), (d,a), (d,b), (b,d) \} $$. 
 
**(b)** $$ \{ (a,b), (b,a), (a,d), (b,d) \} $$.

**(c)** $$ \{ (a,a), (b,b), (c,c), (d,d), (b,d), (d,b) \} $$. Set is reflexive, symmetric and transitive.

**(d)** $$ \{ (a,b), (a,c), (a,d), (c,d), (b,d) \} $$. Set is transitive.

<hr/>

**Soln5** $$ \{ (a,y), (a,z), (b,x), (c,y), (c,z) \} $$.

<hr/>

**Soln6** 

$$ D_r \circ D_s = \{ (a,c) \, \vert \, \exists b((a,b) \in D_s \land (b,c) \in D_r) \} $$.    
$$ D_r \circ D_s = \{ (a,c) \, \vert \, \exists b( \vert a - b \vert < s \land  \vert b - c \vert < r ) \} $$.    

Since $$ \vert a - c \vert = \vert (a-b) + (b-c) \vert $$. Thus by triangular inequality, we have:    
 
$$ \vert a - c \vert < \vert a-b \vert + \vert b-c \vert $$.    
Since $$ \vert a - b \vert < s $$ and $$ \vert b - c \vert < r $$, we have:    
$$ \vert a - c \vert < r + s $$.    

Thus we have,    
$$ D_r \circ D_s = \{ (a,c) \, \vert \,  \vert a - c \vert < r + s \} $$.    

<hr/>

**Soln7**

($$ \to $$)Suppose $$ R $$ is reflexive. Suppose $$ (x,x) \in i_A $$. Since $$ i_A $$ is a relation on $$ A $$, it follows that 
$$ x \in A $$. Since $$ R $$ is reflexive and $$ R $$ is defined on $$ A $$, it follows that $$ (x,x) \in R $$. Thus if $$ (x,x) \in i_A $$,
 then $$ (x,x) \in R $$. Since $$ (x,x) $$ is arbitrary, we can conclude that $$ i_A \subseteq R $$. 

($$ \leftarrow $$)Suppose $$ i_A \subseteq R $$. Suppose $$ x \in A $$. Since $$ x \in A $$, $$ (x,x) \in i_A $$. Since $$ i_A \subseteq R $$,
it follows that $$ (x,x) \in R $$. Thus if $$ x \in A $$, then $$ (x,x) \in R $$. Since $$ x $$ is arbitrary, we can conclude that
$$ \forall x \in A((x,x) \in R) $$, which is equivalent to saying that $$ R $$ is reflexive.

Thus from both directions we can conclude that: $$ R $$ is reflexive, iff, $$ i_A \subseteq R $$.

<hr/>

**Soln8**

($$ \to $$)Suppose $$ R $$ is transitive. Suppose $$ (a,c) \in R \circ R $$. Thus there exist an element $$ b \in A $$ such that $$ (a,b) \in R $$
and $$ (b,c) \in R $$. Now since $$ R $$ is transitive and $$ (a,b) \in R \land (b,c) \in R $$, it follows that $$ (a,c) \in R $$. Thus
if $$ (a,c) \in R \circ R $$, then $$ (a,c) \in R $$. Since $$ (a,c) $$ is arbitrary, we can conclude that $$ R \circ R \subseteq R $$.
 
($$ \leftarrow $$)Suppose $$ R \circ R \subseteq R $$. Suppose $$ a,b,c $$ are three elements in $$ A $$ such that $$ (a,b) \in R \land (b,c) \in R $$.
 Now since $$ (a,b) \in R $$ and $$ (b,c) \in R $$, it follows $$ (a,c) \in R \circ R $$. Since $$ R \circ R \subseteq R $$, it follows
 that $$ (a,c) \in R $$. Since $$ a,b,c $$ are arbitrary, we can conclude that $$ \forall a \in A \forall b \in A \forall c \in A((a,b) \in R \land (b,c) \in R \to (a,c) \in R) $$,
 which is equivalent to saying that $$ R $$ is transitive.
 
 <hr/>
 
 **Soln9**
 
 **(a)**
 
 ($$ \to $$)Suppose $$ (a,c) \in R \circ i_A $$. Thus there exist an element $$ b \in A $$ such that $$ (a,b) \in i_A \land (b,c) \in R $$. Since
 $$ (a,b) \in i_A $$, it follows $$ a = b $$. Thus $$ (b,c) \in R $$ is equivalent to $$ (a,c) \in R $$. It follows that if $$ (a,c) \in R \circ i_A $$,
 then $$ (a,c) \in R $$. Since $$ (a,c) $$ is arbitrary, we can conclude that $$ R \circ i_A \subseteq R $$.
 
 ($$ \leftarrow $$)Suppose $$ (a,c) \in R $$. Thus $$ a \in A \land c \in B $$. Since $$ a \in A $$, it follows that $$ (a,a) \in i_A $$.
 Now since $$ (a,a) \in i_A $$ and $$ (a,c) \in R $$, it follows that $$ (a,c) \in R \circ i_A $$. Thus if $$ (a,c) \in R $$, then $$ (a,c) \in R \circ i_A $$.
 Since $$ (a,c) $$ is arbitrary, we can conclude that $$ R \subseteq R \circ i_A $$.
 
Thus we have $$ R \circ i_A \subseteq R $$ as well as $$ R \subseteq R \circ i_A $$. It follows that $$ R = R \circ i_A $$.
 
**(b)**

($$ \to $$)Suppose $$ (a,c) \in i_B \circ R $$. Thus there exist an element $$ b \in B $$ such that $$ (a,b) \in R \land (b,c) \in i_B $$.
 Since $$ (b,c) \in i_B $$, it follows that $$ b = c $$. Thus $$ (a,b) \in R $$ is equivalent to saying that $$ (a,c) \in R $$. Thus
 if $$ (a,c) \in i_B \circ R $$, then $$ (a,c) \in R $$. Since $$ (a,c) $$ is arbitrary, we can conclude that $$ i_B \circ R \subseteq R $$.
 
($$ \leftarrow $$)Suppose $$ (a,b) \in R $$. Thus $$ a \in A \land b \in B $$. Since $$ b \in B $$, it follows that $$ (b,b) \in i_B $$.
Now since $$ (a,b) \in R $$ and $$ (b,b) \in i_B $$, it follows that $$ (a,b) \in i_B \circ R $$. Thus if $$ (a,b) \in R $$, then $$ (a,b) \in i_B \circ R $$.
Since $$ (a,b) $$ is arbitrary, we can conclude that $$ R \subseteq i_B \circ R $$.

Thus we have $$ i_B \circ R \subseteq R $$ as well as $$ R \subseteq i_B \circ R $$. It follows that $$ R = i_B \circ R $$.

<hr/>

**Soln10**

- $$ i_D \subseteq S^{-1} \circ S $$     
  Suppose $$ (x,x) \in i_D $$. Thus $$ x \in D $$, or $$ Dom(S) $$. Since $$ x \in Dom(S) $$, there must exist an element $$ y $$ such
  that $$ (x,y) \in S $$. It follows that $$ (y,x) \in S^{-1} $$. Since $$ (x,y) \in S $$ and $$ (y,x) \in S^{-1} $$, it follows that
  $$ (x,x) \in S^{-1} \circ S $$. Thus if $$ (x,x) \in i_D $$, then $$ (x,x) \in S^{-1} \circ S $$. Since $$ (x,x) $$ is arbitrary, we
  can conclude that $$ i_D \subseteq S^{-1} \circ S $$.
   
- $$ i_R \subseteq S \circ S^{−1} $$     
  Suppose $$ (b,b) \in i_R $$. Thus $$ b \in R $$, or $$ Ran(S) $$. Since $$ b \in Ran(S) $$, there must exist an element $$ a $$ such
  that $$ (a,b) \in S $$. It follows that $$ (b,a) \in S^{-1} $$. Since $$ (a,b) \in S^{-1} $$ and $$ (a,b) \in S $$, it follows that
  $$ (b,b) \in S \circ S^{-1} $$. Thus if $$ (b,b) \in i_D $$, then $$ (b,b) \in S \circ S^{-1} $$. Since $$ (b,b) $$ is arbitrary, we
  can conclude that $$ i_R \subseteq S \circ S^{-1} $$.
  
<hr/>

**Soln11**

Suppose $$ (x,y) \in R $$. Thus $$ x \in A \land y \in A $$. Since $$ R $$ is reflexive and $$ y \in A $$, it follows $$ (y,y) \in R $$.
Now since $$ (x.y) \in R $$ and $$ (y,y) \in R $$, it follows $$ (x,y) \in R \circ R $$. Thus if $$ (x,y) \in R $$, then $$ (x,y) \in R \circ R $$.
Since $$ (x,y) $$ is arbitrary, it follows that $$ R \subseteq R \circ R $$.

<hr/>

**Soln12**

**(a)** Suppose $$ R $$ is reflexive. Suppose $$ (x,y) \in i_A $$. Thus $$ x = y $$, and we can also say that $$ (y,x) \in i_A $$. Since $$ R $$ is reflexive, $$ i_A \subseteq R $$. 
Thus $$ (x,y) \in R $$. Since $$ (x,y) \in R $$, it follows $$ (y,x) \in R^{-1} $$. Thus we have: if $$ (y,x) \in i_A $$, then $$ (y,x) \in R^{-1} $$.
Or we can conclude that $$ i_A \subseteq R^{-1} $$, which is equivalent to saying that $$ R^{-1} $$ is reflexive.

**(b)** Suppose $$ R $$ is symmetric. Suppose $$ (x,y) \in R^{-1} $$. It follows that $$ (y,x) \in R $$. Since $$ R $$ is symmetric,
it follows that $$ (x,y) \in R $$. Now since $$ (x,y) \in R $$, it follows $$ (y,x) \in R^{-1} $$. Thus if $$ (x,y) \in R^{-1} $$, then
$$ (y,x) \in R^{-1} $$. Since $$ (x,y) $$ is arbitrary, we can conclude that $$ R^{-1} $$ is symmetric.
 
**(c)** Suppose $$ R $$ is transitive. Suppose $$ (a,c) \in R^{-1} $$. It follows that $$ (c,a) \in R $$. Since $$ R $$ is transitive,
it follows that $$ \exists b \in A ((c,b) \in R \land (b,a) \in R) $$. Thus we have $$ (a,b) \in R^{-1} $$ and $$ (b,c) \in R^{-1} $$.
Now if $$ (a,c) \in R^{-1} $$, then $$ \exists b \in A((a,b) \in R^{-1} \land (b,c) \in R^{-1} $$. Since $$ (a,c) $$ is arbitrary, we
can conclude that $$ R $$ is transitive.

<hr/>

**Soln13**

**(a)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are reflexive. Suppose $$ (x,y) \in i_A $$. Since $$ R_1 $$ is reflexive, it follows $$ (x,y) \in R_1 $$.
 Thus we can also say $$ (x,y) \in R_1 \cup R_2 $$. It follows that if $$ (x,y) \in i_A $$, then $$ (x,y) \in R_1 \cup R_2 $$. Since 
 $$ (x,y) $$ is arbitrary, we can conclude that $$ i_A \subseteq R_1 \cup R_2 $$. Thus $$ R_1 \cup R_2 $$ is reflexive.
 
**(b)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are symmetric. Suppose $$ (x,y) \in R_1 \cup R_2 $$. Thus we have two cases:

- Case 1: $$ (x,y) \in R_1 $$    
  Since $$ R_1 $$ is symmetric, it follows $$ (y,x) \in R_1 $$. Thus we can also say $$ (y,x) \in R_1 \cup R_2 $$.
  
- Case 2: $$ (x,y) \in R_2 $$    
  Since $$ R_2 $$ is symmetric, it follows $$ (y,x) \in R_2 $$. Thus we can also say $$ (y,x) \in R_1 \cup R_2 $$.
  
Thus from both cases $$ (y,x) \in R_1 \cup R_2 $$. Since $$ (x,y) $$ is arbitrary, we can conclude that $$ R_1 \cup R_2 $$ is symmetric.
 
**(c)** False. Counter Example: $$ A = \{1, 2, 3 \}, R_1 = \{ \{1,2\}, \{2, 2\} \}, R_2 = \{ \{2,3\} \} $$. Clearly $$ R_1 $$ and $$ R_2 $$
  are transitive but $$ R_1 \cup R_2 $$ is not transitive. Because $$ \{1,2\} \in R_1 \cup R_2 $$ and $$ \{2,3\} \in R_1 \cup R_2 $$ 
  but $$ \{1,3\} \notin R_1 \cup R_2 $$.
  
<hr/>

**Soln14** 

**(a)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are reflexive. Suppose $$ x \in A $$. Since $$ R_1 $$ is reflexive, it follows that $$ (x,x) \in R_1 $$.
Similarly, since $$ R_2 $$ is reflexive, it follows that $$ (x,x) \in R_2 $$. Thus $$ (x,x) \in R_1 \cap R_2 $$. Thus if $$ x \in A $$ then 
$$ (x,x) \in R_1 \cap R_2 $$. Since $$ x $$ is arbitrary, we can conclude that $$ R_1 \cap R_2 $$ is reflexive.
  
**(b)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are symmetric. Suppose $$ (x,y) \in R_1 \cap R_2 $$. Thus $$ (x,y) \in R_1 $$. Since $$ R_1 $$
 is symmetric, it follows that $$ (y,x) \in R_1 $$. Similarly, since $$ (x,y) \in R_2 $$ and $$ R_2 $$ is symmetric, it follows that $$ (y,x) \in R_2 $$.
 Thus we have $$ (y,x) \in R_1 \cap R_2 $$. Since $$ (x,y) $$ is arbitrary, we can conclude that $$ R_1 \cap R_2 $$ is symmetric.
  
**(c)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are transitive. Suppose $$ a,b,c $$ are elements in $$ A $$ such that $$ (a,b) \in R_1 \cap R_2 $$ and 
$$ (b,c) \in R_1 \cap R_2 $$. Thus $$ (a,b) \in R_1 \land (b,c) \in R_1 $$ and $$ (a,b) \in R_2 \land (b,c) \in R_2 $$. Since $$ R_1 $$
is transitive, it follows that $$ (a,c) \in R_1 $$. Similarly since $$ R_2 $$ is transitive, it follows that $$ (a,c) \in R_2 $$. Thus
$$ (a,c) \in R_1 \cap R_2 $$. Since $$ a,b,c $$ are arbitrary, we can conclude that $$ R_1 \cap R_2 $$ is transitive.

<hr/>

**Soln15**

**(a)** False. $$ A = \{1\}, R_1 = \{ \{1,1\} \}, R_2 = \{ \{1,1\} \} $$. Thus $$ R_1 \setminus R_2 = \phi $$. Clearly, R_2 is not reflexive,
since $$ 1 \in A $$ but $$ (1,1) \notin R_1 \setminus R_2 $$.

**(b)** True. Suppose $$ R_1 $$ and $$ R_2 $$ are symmetric. Suppose $$ (x,y) \in R_1 \setminus R_2 $$. Thus $$ (x,y) \in R_1 $$. Since $$ R_1 $$
 is symmetric, it follows that $$ (y,x) \in R_1 $$. Similarly, since $$ (x,y) \notin R_2 $$ and $$ R_2 $$ is symmetric, it follows that $$ (y,x) \notin R_2 $$.
 Thus we have $$ (y,x) \in R_1 \setminus R_2 $$. Since $$ (x,y) $$ is arbitrary, we can conclude that $$ R_1 \cap R_2 $$ is symmetric.
 
**(c)** False. Counter Example: $$ A = \{1, 2, 3 \}, R_1 = \{ \{1,2\}, \{2, 3\}, \{1, 3\} \}, R_2 = \{ \{1,3\} \} $$. Thus $$ R_1 \setminus R_2 =  \{ \{1,2\}, \{2, 3\} \} $$.   
 Clearly $$ R_1 $$ and $$ R_2 $$ are transitive but $$ R_1 \setminus R_2 $$ is not transitive. Because $$ \{1,2\} \in R_1 \setminus R_2 $$ and $$ \{2,3\} \in R_1 \setminus R_2 $$ 
 but $$ \{1,3\} \notin R_1 \setminus R_2 $$.
                
<hr/>
                
**Soln16**
                
Suppose $$ R $$ and $$ S $$ are reflexive. Suppose $$ x \in A $$. Since $$ R $$ is reflexive, $$ (x,x) \in R $$. Similarly, since $$ S $$ is reflexive, $$ (x,x) \in S $$. 
Since $$ (x,x) \in S $$ and $$ (x,x) \in R $$, it follows that $$ (x,x) \in R \circ S $$. Thus if $$ x \in A $$, then $$ (x,x) \in R \circ S $$. Since $$ x $$ is arbitrary, 
we can conclude that $$ R \circ S $$ is reflexive.

<hr/>

**Soln17**

Suppose $$ R $$ and $$ S $$ are symmetric.

($$ \to $$)Suppose $$ R \circ S $$ is symmetric. Suppose $$ (x, z) \in R \circ S $$. 

Since $$ R \circ S $$ is symmetric,
$$ (x, z) \in R \circ S $$ iff    
$$ (z, x) \in R \circ S $$ iff  
$$ \exists y \in A((z,y) \in S \land (y,x) \in R $$. iff    
Since $$ S $$ and $$ R $$ are symmetric,     
$$ \exists y \in A((y,z) \in S \land (x,y) \in R $$. iff    
$$ \exists y \in A((x,y) \in R \land (y,z) \in S $$. iff    
$$ (x,z) \in S \circ R $$     
 
Thus if $$ (x,z) \in R \circ S $$, iff $$ (x,z) \in S \circ R $$. Since $$ (x,z) $$ is arbitrary, we can conclude that $$ R \circ S = S \circ R $$.

($$ \leftarrow $$)Suppose $$ R \circ S = S \circ R $$. Suppose $$ (x,z) \in S \circ R $$. Since $$ (x,z) \in S \circ R $$, there must exist an element $$ y \in A $$ such that 
$$ (x,y) \in R \land (y,z) \in S $$. Since $$ R $$ and $$ S $$ are symmetric, it follows that $$ (z,y) \in S $$ and $$ (y,x) \in R $$. It follows that $$ (z,x) \in R \circ S $$. 
Since $$ R \circ S = S \circ R $$, it follows $$ (z,x) \in S \circ R $$. Thus if $$ (x,z) \in S \circ R $$, then $$ (z,x) \in S \circ R $$. Since $$ (x,z) $$ is arbitrary, we can
conclude that $$ S \circ R $$ is symmetric.

<hr/>

**Soln18**

Suppose $$ R $$ and $$ S $$ are transitive. Suppose $$ S \circ R \subseteq R \circ S $$. Suppose $$ x,y,z $$ are elements in $$ A $$ such that
$$ (x,y) \in R \circ S $$ and $$ (y,z) \in R \circ S $$. Since $$ (x,y) \in R \circ S $$, it follows $$ \exists p \in A((x,p) \in S \land (p,y) \in R $$.  
Similarly since $$ (y,z) \in R \circ S $$, it follows $$ \exists q \in A((y,q) \in S \land (q,z) \in R $$. Since $$ (p,y) \in R $$ and $$ (y,q) \in S $$,
it follows that $$ (p,q) \in S \circ R $$. Since $$ S \circ R \subseteq R \circ S $$, it follows $$ (p,q) \in R \circ S $$.     
Since $$ (p,q) \in R \circ S $$, it follows that $$ \exists m \in A((p,m) \in S \land (m,q) \in R) $$.     

Since $$ (x,p) \in S $$ and $$ (p,m) \in S $$ and since $$ S $$ is transitive, it follows $$ (x,m) \in S $$.     
Similarly, since $$ R $$ is transitive, and $$ (m,q) \in R \land (q,z) \in R $$, it follows $$ (m,z) \in R $$.     

Thus since $$ (x,m) \in S \land (m,z) \in R $$, it follows that $$ (x,z) \in R \circ S $$. Thus if $$ (x,y) \in R \circ S \land (y,z) \in R \circ S $$, then
$$ (x,z) \in R \circ S $$. Since $$ x,y,z$$ are arbitrary, it follows that $$ R \circ S $$ is transitive.

<hr/>

**Soln19**

**(a)**

Proof and Theorem both are not correct. Problem with proof is, it is not using the existential instantiation properly. In the proof,
if $$ (X,Y) \in S $$, then there exists $$ x $$ and $$ y $$ such that $$ x \in X $$ and $$ y \in Y $$. Also if $$ (Y,Z) \in S $$, then
  there exists $$ y $$ and $$ z $$ such that $$ y \in Y $$ and $$ z \in Z $$. Now here former $$ y $$ may not be equal to latter $$ y $$.
But in the proof, it was wrongly assumed.

**(b)**

Counter example:

$$ A = \{ 1, 2, 3 \} $$.    
$$ R = \{ \{1, 2\}, \{2, 2\} \} $$.

$$ \{ \{1,2\}, \{2,3\} \} \in S $$, since $$ 1 \in \{1,2\} \land 2 \in \{2,3\} $$ and $$ 1 R 2 $$.    
$$ \{ \{2,3\}, \{1,3\} \} \in S $$, since $$ 2 \in \{2,3\} \land 1 \in \{1,3\} $$ and $$ 1 R 2 $$.    

But $$ \{ \{1,2\}, \{1,3\} \} \notin S $$.

<hr/>

**Soln20**

Suppose $$ R $$ is transitive. Suppose $$ (X,Y) \in S $$ and $$ (Y, Z) \in S $$. Since $$ X,Y, Z $$ are not empty, suppose $$ x \in X $$, $$ y \in Y $$,
$$ z \in Z $$ are arbitrary elements. Then by the definition of $$ S $$, $$ xRy $$ and $$ yRz $$. Since $$ xRy $$, $$ yRz $$, and $$ R $$ is transitive, $$ xRz $$. 
But then since $$ x \in X $$ and $$ z \in Z $$, it follows from the definition of $$ S $$ that $$ (X, Z) \in S $$. Thus, $$ S $$ is transitive.

Consider the case that $$ B $$ may contain empty sets. Suppose $$ (X,Y) \in S $$, then $$ \forall x \in X \forall y \in Y(xRy) $$. It follows
$$ \forall x( x \in X \to \forall y(y \in Y \to xRy)) $$. This can be true if $$ X = \phi \lor Y = \phi $$. Thus we can have the following
counter example:

Suppose $$ X \ne \phi $$ and $$ Y = \phi $$ and $$ Z \ne \phi $$, also suppose there is an element $$ x \in X $$ and an element $$ z \in Z $$
such that $$ (x,z) \notin R $$.

Since $$ Y = \phi $$, $$ (X,Y) \in S $$. Similarly $$ (Y,Z) \in S $$. But since $$ (x,z) \notin R $$, it follows $$ (X,Z) \notin S $$.
Thus $$ S $$ is not transitive if $$ B $$ contains empty sets.

<hr/>

**Soln21**

**(a)** True. Suppose $$ R $$ is reflexive. Suppose $$ X \in P(A)$$. Suppose $$ x \in X $$. Thus there exist an element $$ y \in X $$ such that
$$ y = x $$. Thus $$ x = y $$ and since $$ R $$ is reflexive, $$ xRy $$. Since $$ x $$ is arbitrary, we can say that $$ \forall x \in X \exists y \in X(xRy) $$.
It follows that $$ (X,X) \in S $$. Thus if $$ X \in P(A) $$, then $$ (X,X) \in S $$. Thus $$ S $$ is reflexive.

**(b)** False. Counter example:

$$ A = \{ 1, 2, 3 \}, R = \{ \{1,2\}, \{2,1\}, \{2,2\} \} $$. 

Now we can easily see that $$ ( \{1,2\}, \{2,3\} ) \in S $$ but $$ ( \{2,3\}, \{1,2\} ) \notin S $$.
   
**(c)** True. Suppose $$ R $$ is transitive. Suppose $$ (X,Y) \in S \land (Y,Z) \in S $$. Since $$ (X,Y) \in S $$, there exist an element $$ y_0 \in Y $$ such that
 $$ \forall x \in X(xRy_0) $$. Also since $$ (Y,Z) \in S $$, there exist an element $$ z_0 \in Z $$ such that $$ \forall y \in Y(yRz_0) $$. Thus
 $$ y_0Rz_0 $$. Since $$ R $$ is transitive, it follows that $$ \forall x \in X(xRz_0) $$. Thus $$ (X,Z) \in S $$. Since $$ X,Y,Z $$ are arbitrary,
 it follows that $$ S $$ is transitive.
 
<hr/>

**Soln22** Proof and theorem both are false. The flaw in the proof is there may not exist any element $$ y $$ such that $$ (x,y) \in R $$.
 Counter example:
 
 $$ A = \{1,2,3\}, R = \{ \{1,1\}, \{1,2\}, \{2,1\}, \{2,2\} \} $$. Thus $$ R $$ is symmetric and transitive. But since $$ \{3,3\} \notin R $$, it is not reflexive.
  
<hr/>

**Soln23** 
    
Suppose $$ aRb $$ and $$ bRc$$. Suppose $$ X \subseteq A \setminus \{a,c\} $$. To prove $$ R $$ is transitive,we need to prove $$ aRc $$.
To prove $$ aRc $$, we have to prove that if $$ X \cup \{a\} \in \mathcal F $$, then $$ X \cup \{c\} \in \mathcal F $$. Suppose $$ X \cup \{a\} \in \mathcal F $$.
Now consider two exhaustive cases:

Case 1: $$ b \notin X $$. Thus $$ X \subseteq A \setminus \{a,b,c \} $$. Since $$ aRb $$ and $$ X \cup \{a\} \in \mathcal F $$, it follows
 that $$ X \cup \{b\} \in \mathcal F $$. Also, since $$ bRc $$, and $$ X \cup \{b\} \in \mathcal F $$, it follows that $$ X \cup \{c\} \in \mathcal F $$.
 
Case 2: $$ b \in X $$. Suppose $$ X' = (X \cup \{a\}) \setminus \{b\} $$. Now since $$ b \in X $$ and $$ X' = (X \cup \{a\}) \setminus \{b\} $$, it follows that
$$ X' \cup b = X \cup \{a\} $$. Since $$ X \cup \{a\} \in \mathcal F$$, it follows $$ X' \cup b \in \mathcal F $$. Since $$ bRc $$ and $$ X' \cup b \in \mathcal F $$, 
it follows that  $$ X' \cup \{c\} \in \mathcal F $$. Since $$ X' = (X \cup \{a\}) \setminus \{b\} $$, it follows $$ ((X \cup \{a\}) \setminus \{b\}) \cup \{c\} \in \mathcal F $$,
or $$ (X \cup \{a\} \cup \{c\}) \setminus \{b\} \in \mathcal F$$.    
 Now consider $$ X'' = (X \cup \{c\})\setminus \{b\} $$. Thus $$ X'' \cup \{a\} = ((X \cup \{c\})\setminus \{b\}) \cup \{a\} = (X \cup \{a\} \cup \{c\}) \setminus \{b\} $$. But 
 $$ (X \cup \{a\} \cup \{c\}) \setminus \{b\} \in \mathcal F$$, it follows that $$ X'' \cup \{a\} \in \mathcal F $$. Since $$ a \notin X $$, it follows
 $$ a \notin X'' $$. Thus we have $$ a \notin X'' \land b \notin X'' $$ and $$ X'' \subseteq A $$ and $$ X'' \cup \{a\} \in \mathcal F $$, it follows that $$ X'' \cup \{b\} \in \mathcal F $$.
 Since $$ X'' = (X \cup \{c\})\setminus \{b\} $$ and $$ b \in X $$, it follows that $$ X \cup \{c\} = X'' \cup \{b\} $$. Since $$ X \cup \{c\} = X'' \cup \{b\} $$ and $$ X'' \cup \{b\} \in \mathcal F $$,
 it follows that $$ X \cup \{c\} \in \mathcal F $$.
 
Thus from both cases $$ X \cup \{c\} \in \mathcal F $$.
