---
layout: blog
title:  "How To Prove It, Ch-4 Sec-4.6, Equivalence Relations"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 4, Section - 4.6, Equivalence Relations from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

- *Equivalence Relation:* Suppose $$ R $$ is a relation on a set $$ A $$. Then $$ R $$ is called an equivalence relation on $$ A $$ if it is reflexive, 
  symmetric, and transitive.    
- Suppose $$ A $$ is a set and $$ \mathcal F \subseteq \mathcal P(A) $$. We will say that $$ \mathcal F $$ is pairwise disjoint if every pair of distinct 
  elements of $$ \mathcal F $$ are disjoint, or in other words $$ \forall X \in \mathcal F \forall Y \in \mathcal F(X \ne Y \to X \cap Y = \phi) $$. $$ \mathcal F $$ is
  called a partition of $$ A $$ if it has the following properties:
    - $$ \cup \mathcal F $$ = A.
    - $$ \mathcal F $$ is pairwise disjoint. 
    - $$ \forall X \in \mathcal F(X \ne \phi) $$.                                
- Suppose $$ R $$ is an equivalence relation on a set $$ A $$, and $$ x \in A $$. Then the equivalence class of $$ x $$ with respect to $$ R $$ is the set:
  - $$ [x]_R = \{ y \in A \, \vert \, yRx \} $$.
  If $$ R $$ is clear from context, then we can use $$ [x] $$ instead of $$ [x]_R $$. The set of all equivalence classes of elements of $$ A $$ is called $$ A $$ modulo $$ R $$, 
  and is denoted $$ A \, / \,  R $$. Thus,    
  - $$ A \, / \,  R = \{ [x]_R \, \vert \, x \in A \} = \{ X \subseteq A \, \vert \, \exists x \in A(X = [x]_R) \} $$.
- Suppose $$ R $$ is an equivalence relation on a set $$ A $$. Then $$ A \, / \,  R $$ is a partition of $$ A $$. This is proved using following lemmas:
    - For every $$ x \in A, x \in [x] $$.
    - For every $$ x \in A $$ and $$ y \in A $$, $$ y \in [x] $$ iff $$ [y] = [x] $$.    
- Suppose $$ A $$ is a set and $$ \mathcal F $$ is a partition of $$ A $$. Then there is an equivalence relation $$ R $$ on $$ A $$ such that $$ A \, / \,  R = \mathcal F $$. It uses
  the following lemma:
    - Suppose $$ A $$ is a set and $$ \mathcal F $$ is a partition of $$ A $$. Let $$ R = \cup X \in \mathcal F (X \times X) $$. Then $$ R $$ is an equivalence relation on $$ A $$.  
    
<hr/>

**Soln1** 

$$ \{ \{1\}, \{2\}, \{3\} \}$$,    
$$\{ \{1\}, \{2,3\} \}$$,    
$$ \{ \{1,2\}, \{3\} \}$$,     
$$ \{ \{1,3\}, \{2\} \}$$,    
$$ \{ \{1,2,3\} \} $$.

<hr/>
 
**Soln2** 

For $$ \mathcal F = \{ \{1\}, \{2\}, \{3\} \}$$, $$ R = \{ (1,1), (2,2), (3,3) \} $$     
For $$ \mathcal F = \{ \{1\}, \{2,3\} \}$$, $$ R = \{ (1,1), (2,2), (3,3), (2,3), (3,2) \} $$     
For $$ \mathcal F = \{ \{1,2\}, \{3\} \}$$, $$ R = \{ (1,1), (2,2), (1,2), (2,2), (3,3) \} $$      
For $$ \mathcal F = \{ \{1,3\}, \{2\} \}$$, $$ R = \{ (1,1), (3,3), (1,3), (3,1), (2,2) \} $$    
For $$ \mathcal F = \{ \{1,2,3\} \} $$,  $$ R = \{ (1,1), (2,2), (3,3), (1,2), (2,1), (2,3), (3,2), (1,3), (3,1) \} $$.

<hr/>

**Soln3**

**(a)** Yes it is a equivalence relation. Equivalence classes = $$ \{ X \subseteq W, X \ne \phi \, \vert \, \text{ if }x \in X \text{ and } w \in W \text{ and}, (w \text{ and } x \text{ both starts with same letter}), \text{ then } w \in X\} $$.

**(b)** It is not an equivalence relation.

**(c)** This is an equivalence relation.  Equivalence classes = $$ \{ X \subseteq W, X \ne \phi \, \vert \, \text{ if }x \in X \text{ and } w \in W \text{ and}, (w \text{ and } x \text{ both contains same number of letters }), \text{ then } w \in X\} $$.

<hr/>

**Soln4**

**(a)** It is not a equivalence relation.

**(b)** It is an equivalence relation. To find equivalence classes, we know that :

- Difference of two rational numbers is always rational.
- If we have two real numbers such that one is irrational and other number is rational, then their difference will be irrational.
- If we have two irrational numbers then either their difference can be rational or irrational. But clearly this case will not be a equivalence relation.
    
Thus equivalence classes contains all rational numbers: $$ \{ x \in Q \} $$.    
       
**(c)** It is an equivalence relation. Its equivalnce classes are: $$ \{[x] \, \vert \, x \in R \} $$, where $$ [x] = \{... x^{-3}, x^{-2}, x^{-1}, x^{0}, x^{1}, x^{2}, x^{3}, ...\} $$.
   
<hr/>

**Soln5**

We are given that $$ \mathcal F = \{ P_d \, \vert \, d \in D \} $$.

- $$ \cup \mathcal F = P $$:
 
($$ \to $$). Suppose $$ x \in \cup \mathcal F $$. Thus there exist atleast one set $$ P_d $$, where $$ d \in D $$, such that $$ x \in P_d $$. Thus $$ x $$ is a person
must be be born on day $$ d $$. It follows that $$ x \in P$$. Thus $$ \cup \mathcal F \subseteq P $$.
  
($$ \leftarrow $$). Suppose $$ x \in P $$. Thus $$ x $$ must/will be born on some day $$ d $$. Thus $$ x \in P_d $$. It follows that $$ x \in cup \mathcal F $$. 
Thus $$ P \subseteq \cup \mathcal F $$.

- $$ P_{d_1} \cap P_{d_2} = \phi $$, where $$ d_1 \ne d_2 $$.

Suppose $$ P_{d_1} \cap P_{d_2} \ne \phi $$. Thus there must exist atleast one person who is born on $$ d_1 $$ and on $$ d_2 $$. But this is not possible for a person to take birth
 on two different dates. Thus it contradicts the assumption $$ P_{d_1} \cap P_{d_2} \ne \phi $$. Thus $$ P_{d_1} \cap P_{d_2} = \phi $$.
 
- $$ \forall X \in \mathcal F(X \ne \phi) $$.

Suppose $$ P_d \in \mathcal F$$. We can assume here that there is atleast one person born on every day. Thus atleast one person is born on $$ P_d $$, $$ P_d \ne \phi $$.
Thus $$ \forall X \in \mathcal F(X \ne \phi) $$.

Now see that $$ [x]_B = \{ y \, \vert \, x \text{ and } y \text{ are born on same day } \} = \{ y \, \vert \, x \text{ and } y \text{ are born on some day } d \} = P_d $$.

Thus $$ P \, \ \, B $$ satisfies all the conditions of a partition.
 
<hr/>

**Soln6**

Suppose $$ x \in T $$. Since all the angles of $$ x $$ are equal to itself, $$ (x,x) \in S $. Thus $$ S $$ is reflexive.
 
Suppose $$ (x,y) \in S $$. Thus all angles of $$ x $$ are equal to $$ y $$. Or we can also say that all angles of $$ y $$ are equal to $$ x $$, or $$ (y,x) \in S $$.
 Thus $$ S $$ is symmetric.
 
Suppose $$ (x,y) \in S \land (y,z) \in S $$. Thus all angles of $$ x $$ are equal to $$ y $$. Also all angles of $$ y $$ are equal to $$ z $$. Thus all angles of $$ x $$ are
 equal to $$ z $$. Thus $$ (x,z) \in S $$. We can conclude that $$ S $$ is transitive.
 
Thus $$ S $$ is reflexive, symmetric and transitive, we can conclude that $$ S $$ is equivalence relation.

<hr/>

**Soln7**

To complete the proof, we need to prove that $$ R $$ is symmetric and transitive.

Suppose $$ (x,y) \in R $$. Since $$ R = \cup_{X \in \mathcal F}(X \times X) $$, it follows that there exist an $$ X $$ such that $$ (x,y) \in X \times X $$.
Thus $$ x \in X $$ and $$ y \in X $$. Thus $$ (y,x) \in X \times X $$. It follows that $$ (y,x) \in \cup_{X \in \mathcal F}(X \times X) $$. Thus $$ (y,x) \in R $$.
We can conclude that $$ R $$ is symmetric.

Suppose $$ (x,y) \in R \land (y,x) \in R $$. Thus $$ (x,y) \in X $$ and $$ (y,z) \in Y $$ for some $$ X \in \mathcal F $$ and $$ Y \in \mathcal F $$. Thus $$ x \in X $$ and $$ x \in Y $$. Since $$ \mathcal F $$
 is a partition of $$ A $$, it follows that $$ X \cap Y = \phi $$. Thus only if $$ X = Y $$, then $$ x \in X $$ and $$ x \in Y $$ is possible. Thus $$ z \in X \times X $$. It follows that $$ (x,z) \in \cup_{X \in \mathcal F}(X \times X) $$.
Thus $$ S $$ is transitive.

<hr/>

**Soln8**

Suppose $$ A \, / \, R = A \, / \, S $$.

($$ \to $$). Suppose $$ (x,y) \in R $$. Since $$ R $$ is equivalence relation, it follows that $$ y \in [x]_R $$ and $$ [x]_R \in A \, / \, R $$. Since $$ A \, / \, R = A \, / \, S $$, it
follows that $$ [x]_R \in A \, / \, S $$. Since $$ S $$ is equivalence relation, $$ x $$ must exist in $$ [x]_S $$. Also since $$ A \, / \, S $$ is a partition and
$$ x \in [x]_R $$ and $$ x \in [x]_S $$ and $$ [x]_R \in A \, / \, S $$ and $$ [x]_S \in A \, / \, S $$, it follows that $$ [x]_R = [x[_S $$. Since $$ y \in [x]_R $$, it follows $$ y \in [x]_S $$. Thus $$ (x,y) \in S $$.
Since $$ (x,y) $$ is arbitrary, it follows that $$ R \subseteq S $$.

($$ \leftarrow $$). Suppose $$ (x,y) \in S $$. Since $$ S $$ is equivalence relation, it follows that $$ y \in [x]_S $$ and $$ [x]_S \in A \, / \, S $$. Since $$ A \, / \, R = A \, / \, S $$, it
follows that $$ [x]_S \in A \, / \, R $$. Since $$ R $$ is equivalence relation, $$ x $$ must exist in $$ [x]_R $$. Also since $$ A \, / \, R $$ is a partition and
$$ x \in [x]_R $$ and $$ x \in [x]_S $$, it follows that $$ [x]_R = [x[_S $$. Since $$ y \in [x]_S $$, it follows $$ y \in [x]_R $$. Thus $$ (x,y) \in R $$.
Since $$ (x,y) $$ is arbitrary, it follows that $$ S \subseteq R $$.

Thus $$ R \subseteq S $$ and $$ S \subseteq R $$, it follows that $$ R = S $$.

<hr/>

**Soln9** Since $$ S $$ is an equivalence relation on $$ \mathcal F $$, it follows that $$ \mathcal F = A \, / \, S $$. Since it is given that $$ \mathcal F = = A \, / \, R $$, it follows that
  $$ A \, / \, R  = A \, / \, S $$. Thus by using the result of Soln8, we have $$ R = S $$.
    
<hr/>

**Soln10**

**(a)**

<u>Reflexive:</u>

Suppose $$ x $$ is an integer. Thus $$ x - x = 0 $$, or $$ (x-y) = 0 \times m $$. Thus for $$ k = 0 $$, $$ x \equiv x (mod \; m) $$. It follows that $$ (x,x) \in C_m $$.
Thus $$ C_m $$ is reflexive.

<u>Symmetric:</u>

Suppose $$ x,y $$ are integers such that $$ (x,y) \in C_m $$. Thus $$ x - y = k \times m $$ where $$ k \in \mathbb Z $$. It follows that $$ -(x-y) = - km $$, or
$$ y - x = -k \times m $$. Since $$ k \in \mathbb Z $$, it follows $$ -k \in \mathbb Z $$. Thus $$ (y,x) \in C_m $$. It follows that $$ C_m $$ is symmetric.

**(b)**

Equivalence classes of $$ C_2 $$:

$$ \{..., -3, -1, 1, 3, 5, 7, .... \}$$,    
$$ \{..., -2, 0, 2, 4, 6, 8, .... \}$$,    

Equivalence classes of $$ C_3 $$:

$$ \{...,-2, 1, 4, 7, 10, 13, .... \}$$,    
$$ \{...,-1, 2, 5, 8, 11, 14, .... \}$$,    
$$ \{...,0,  3, 6, 9, 12, 15, .... \}$$,    

Clearly there are $$ m $$ equivalence classes of $$ C_m $$.

<hr/>

**Soln11**

Suppose $$ n $$ is integer, then $$ n $$ is either even or odd. We have following cases:

Case 1: $$ n $$ is even.    
Thus $$ n = 2t $$, where $$ t $$ is any integer. It follows that $$ n^2 = 4t^2 $$. Thus $$ 4t^2 - 0 = k \times 4 $$, where $$ k = t^2 $$. Thus
$$ 4t^2 \equiv 0 (mod \; 4) $$, or $$ n^2 \equiv 0(mod \; 4) $$. Thus we can also say $$ n^2 \equiv 0(mod \; 4) \lor n^2 \equiv 1 (mod \; 4) $$.

Case 2: $$ n $$ is odd.
Thus $$ n = 2t + 1 $$, where $$ t $$ is any natural number. It follows that $$ n^2 = 4(t^2 + t) + 1 $$. Thus $$ 4(t^2 + t) + 1 - 1 = k \times 4 $$, where $$ k = t^2 + t $$. 
Thus $$ 4(t^2 + t) + 1 \equiv 1 (mod \; 4) $$, or $$ n^2 \equiv 1 (mod \; 4) $$. Thus we can also say $$ n^2 \equiv 0 (mod \; 4) \lor n^2 \equiv 1 (mod \; 4) $$.

Thus from both cases, we have $$ n^2 - 1 \equiv (mod \; 4) $$ or $$ n^2 - 1 \equiv (mod \; 4) $$.

<hr/>

**Soln12**

Suppose $$ a,b,c,d $$ are integers such that $$ a \equiv c (mod \; m) $$ and $$ b \equiv d(mod \; m) $$. Thus we have $$ a - c = k_1m $$ and $$ b - d = k_2m $$.
Thus $$ a = c + k_1m $$ and $$ b = d + k_2m $$.

Thus $$ a + b = c + k_1m + d + k_2m $$, which means $$ a + b = c + d + (k_1 + k_2)m $$, or $$ (a+b) - (c+d) = km $$, where $$ k = k_1 + k_2 $$. Thus $$ a+b \equiv (c+d) (mod \; m) $$.
 

Similarly, we have $$ ab = (c + k_1m)(d + k_2m) = cd + ck_2m + dk_1m + k_1k_2m = cd + (ck_2 + dk_1 + k_1k_1)m $$. It follows that $$ ab - cd = km $$ where $$ k = ck_2 + dk_1 + k_1k_1 $$.
Thus $$ ab \equiv cd(mod \; m ) $$.

<hr/>

**Soln13**

Clearly $$ S $$ is a relation on $$ B $$.

**(a)**

Suppose $$ x $$ in B. Thus $$ (x,x) \in B \times B $$. Since $$ B \subseteq A $$, and $$ R $$ is reflexive, it follows that $$ (x,x) \in R $$. Thus $$ (x,x) \in R \cap (B \times B) $$.
Thus $$ S $$ is reflexive.

Suppose $$ (x,y) \in S $$. Since $$ S = R \cap (B \times B) $$, it follows $$ (x,y) \in R $$ and $$ (x,y) \in B \times B $$. Since $$ (x,y) \in R $$ and $$ R $$ is symmetric,
it follows that $$ (y,x) \in R $$. Also since $$ (x,y) \in B \times B $$, it follows $$ (y,x) \in B \times B $$. Thus $$ (y,x) \in R \land (y,x) \in B \times B $$.
Thus $$ (y,x) \in S $$. We can conclude that $$ S $$ is symmetric.

Suppose $$ (x,y) \in S \land (y,z) \in S $$. Thus $$ (x,y) \in R $$ and $$ (y,z) \in R $$ and $$ x,y,z \in B $$. Since $$ R $$ is transitive, it follows that $$ (x,z) \in R $$.
Also since $$ x,y,z \in B $$, it follows that $$ (x,z) \in B \times B $$. Thus $$ (x,z) \in R \cap (B \times B) $$. Thus $$ (y,z) \in S $$. Thus we can conclude that $$ S $$ is transitive.

Since $$ S $$ is reflexive, symmetric and transitive, it follows that $$ S $$ is equivalence relation.

**(b)**

Suppose $$ x \in B $$. Since $$ S $$ is an equivalence relation on $$ B $$, it follows that $$ [x]_S \subseteq B $$. 

($$ \to $$)Suppose $$ y \in [x]_S $$. It follows that $$ (y,x) \in S $$. Since $$ S = R \cap (B \times B) $$, $$ (y,x) \in R $$, thus, $$ y \in [x]_R $$. Also since $$ (y,x) \in S $$, 
it follows that $$ (y,x) \in B \times $$, thus, $$ y \in B $$. Thus $$ y \in [x]_R \cap B $$. Since $$ y $$ is arbitrary, it follows that $$ [x]_S \subseteq [x]_R \cap B $$.

($$ \leftarrow $$)Suppose $$ y \in [x]_R \cap B $$. Thus $$ y \in B $$ and $$ (y,x) \in [x]_R $$. Since $$ x \in B $$(given), and $$ y \in B $$, it follows $$ (y,x) \in B \times B $$. 
Thus we have $$ (y,x) \in R $$ and $$ (y,x) \in B \times B $$, it follows that $$ (y,x) \in R \cap (B \times B) $$. Thus $$ (y,x) \in S $$. It follows that $$ y \in [x]_S $$.
Since $$ y $$ is arbitrary, we can conclude that $$  [x]_R \cap B \subseteq [x]_S $$.

Since $$ [x]_S \subseteq [x]_R \cap B $$ and $$ [x]_R \cap B \subseteq [x]_S $$. We can conclude $$ [x]_S = [x]_R \cap B $$.  

<hr/>

**Soln14**

**(a)**

Suppose $$ X \in \mathcal P(A) $$. Then clearly, $$ X \triangle X = \phi $$. Since $$ \phi \subseteq B $$, it follows that $$ (X,X) \in R $$. Thus $$ R $$ is reflexive.

Suppose $$ (X,Y) \in R $$. Thus $$ X \triangle Y \subseteq B $$. Since $$ X \triangle Y = Y \triangle X $$, it follows $$ Y \triangle X \subseteq B $$. Thus $$ (Y,X) \in R $$. 
It follows that $$ R $$ is symmetric.
 
Suppose $$ (X,Y) \in R \land (Y,Z) \in R $$. Suppose $$ x \in X \triangle Z $$. Thus $$ x \in (X \setminus Z) $$ or $$ x \in Z \setminus X $$. Thus we have
following possible cases:

- Case 1: $$ x \in X \setminus Z $$ and $$ x \in Y $$.
    Since $$ x \in Y \land x \notin Z $$, it follows $$ x \in Y \triangle Z $$. Since $$ (Y,Z) \in R $$, it follows $$ x \in B $$.  

- Case 2: $$ x \in X \setminus Z $$ and $$ x \notin Y $$.    
    Since $$ x \in X \land x \notin Y $$, it follows $$ x \in X \triangle Y $$. Since $$ (X,Y) \in R $$, it follows $$ x \in B $$. 

- Case 3: $$ x \in Z \setminus X $$ and $$ x \in Y $$.    
    Since $$ x \in Y \land x \notin X $$, it follows $$ x \in X \triangle Y $$. Since $$ (X,Y) \in R $$, it follows $$ x \in B $$. 

- Case 4: $$ x \in Z \setminus X $$ and $$ x \notin Y $$.    
    Since $$ x \in Y \land x \notin Z $$, it follows $$ x \in Y \triangle Z $$. Since $$ (Y,Z) \in R $$, it follows $$ x \in B $$.  

Thus if $$ x \in X \triangle Z $$, then form all the possible cases above $$ x \in B $$. Thus $$ (X,Z) \subseteq B $$. It follows that $$ (X,Z) \in R $$.

Thus $$ R $$ is symmetric.

**(b)**

<u>Existence:</u>

Suppose $$ X \in P(A)$$. Suppose $$ Y = X \setminus B $$. Clearly $$ Y \cap B = \phi $$ because $$ Y $$ contains only those elements which are in $$ X $$ but not in $$ B $$. 
Now we will prove that $$ Y \in [X]_R $$. Suppose $$ x \in X \triangle Y $$. Thus we have:

$$ x \in (X \setminus Y) \lor x \in (Y \setminus X) $$ iff.      
$$ (x \in X \land x \notin (X \setminus B)) \lor (x \in (X \setminus B) \land x \notin X) $$ iff.      
$$ (x \in X \land \lnot (x \in X \land x \notin B)) \lor ((x \in X \land x \notin B) \land x \notin X) $$ iff.      
$$ (x \in X \land (x \notin X \lor x \in B)) \lor (x \in X \land x \notin B \land x \notin X) $$ iff.      
Since $$ x \in X \land x \notin X $$ is always false.    
$$ x \in X \land (x \notin X \lor x \in B) $$ iff.      
$$ (x \in X \land x \notin X) \lor (x \in X \land x \in B) $$ iff.      
Since $$ x \in X \land x \notin X $$ is always false.    
$$ x \in X \land x \in B $$      

Thus if $$ x \in X \triangle Y $$, then $$ x \in B $$. Thus if $$ Y = X \setminus B $$, then $$ X \triangle Y \subseteq B $$.
And we already prove that for $$ Y = X \setminus B $$, $$ Y \cap B = \phi $$.
 
<u>Uniqueness:</u>

Suppose $$ Y, Z \in \mathcal P(A) $$, and $$ Y \in [X]_R $$ and $$ Z \in [X]_R $$ and $$ Y \cap B = Z \cap B = \phi $$ such that $$ Y \ne Z $$. 
First we will prove that $$ Y $$ and $$ Z $$ are not empty. Suppose $$ Y $$ is empty. Thus $$ X \triangle \phi \subseteq B $$. But $$ X \triangle \phi = X $$.
Thus $$ X \subseteq B $$. Since $$ X $$ is arbitrary, it follows $$ \forall X \in \mathcal P(A) (X \subseteq B) $$. Since $$ A \in P(A) $$, it follows $$ A \subseteq B $$.
But it contradicts with the given that $$ B \subseteq A $$. Thus $$ Y $$ is not empty. Similarly we can show that $$ Z $$ is not empty.

Since $$ R $$ is symmetric and $$ YRX $$, thus $$ XRY $$. Since $$ R $$ is transitive and $$ ZRX \land XRY $$, it follows $$ ZRY $$. Thus $$ Z \triangle Y \subseteq B $$. 
This is true for $$ Y = Z $$, but that is not that the case since we assumed $$ Y = Z $$. Since $$ Y $$ and $$ Z $$ are not empty, we have following possible cases:
Suppose $$ x \in Z \triangle Y $$. Thus either $$ x \in Z \setminus Y $$ or $$ x \in Y \setminus Z $$. Thus we have following cases:

- Case 1: $$ x \in Z \setminus Y $$    
  Thus $$x \in Z$$. Since $$ x \in Z $$ and we have from above that $$ Z \cap B = \phi $$, it follows that $$ x \notin B $$.

- Case 2: $$ x \in Y \setminus Z $$    
  Thus $$x \in Y$$. Since $$ x \in Y $$ and we have from above that $$ Y \cap B = \phi $$, it follows that $$ x \notin B $$.

Thus from both cases if $$ x \in Y \triangle Z $$ then $$ x \notin B $$. Thus $$ (Y,Z) \notin R $$. But it contradicts with $$ (Y,Z) \in R $$.
 Thus the assumtion that $$ Y \ne Z $$ is wrong. Thus $$ Y = Z $$.
  
Thus there exist a unique $$ Y $$ such that $$ Y \in [X]_R $$ and $$ Y \cap B = \phi $$.

<hr/>

**Soln15**

To Prove $$ \mathcal F \cup \mathcal G $$ is a partition of $$ A \cup B $$, we need to prove the following three things:

- $$ \cup (\mathcal F \cup \mathcal G) = A \cup B $$.
- if $$ X \in (\mathcal F \cup \mathcal G) $$ and $$ Y \in (\mathcal F \cup \mathcal G) $$ and $$ X \ne Y $$, then $$ X \cap Y = \phi $$.
- $$ \forall X \in (\mathcal F \cup \mathcal G)(X \ne \phi ) $$.

Following are the proofs for each of them: 

**Proof of** $$ \cup (\mathcal F \cup \mathcal G) = A \cup B $$.

($$ \to $$)Suppose $$ x \in \cup (\mathcal F \cup \mathcal G) $$. Thus there exist an $$ X \in (\mathcal F \cup \mathcal G)$$ such that $$ x \in X $$.
Since $$ X \in (\mathcal F \cup \mathcal G) $$, it follows that either $$ X \in \mathcal F $$ or $$ X \in \mathcal G $$. Thus we have the following cases:

- Case 1: $$ X \in \mathcal F $$.
Since $$ x \in X $$ and $$ X \in \mathcal F $$, it follows that $$ x \in \cup \mathcal F $$. Since $$ \mathcal F $$ is a partition on $$ A $$, $$ \cup \mathcal F = A $$.
Thus $$ x \in A $$. Or we can also say $$ x \in A \cup B $$.

- Case 2: $$ X \in \mathcal G $$.
Since $$ x \in X $$ and $$ X \in \mathcal G $$, it follows that $$ x \in \cup \mathcal G $$. Since $$ \mathcal G $$ is a partition on $$ B $$, $$ \cup \mathcal G = B $$.
Thus $$ x \in B $$. Or we can also say that $$ x \in A \cup B $$.

Thus if $$ x \in \cup (\mathcal F \cup \mathcal G) $$, then $$ x \in A \cup B $$. Thus $$ \cup (\mathcal F \cup \mathcal G) \subseteq (A \cup B) $$.

($$ \leftarrow $$)Suppose $$ x \in (A \cup B) $$. Since $$ \cup \mathcal F = A $$ and $$ \cup \mathcal G = B $$, it follows that either $$ x \in \cup \mathcal F $$ or 
 $$ x \in \cup \mathcal G $$.  Thus we can also say $$ x \in (\cup \mathcal F) \cup (\cup \mathcal G) $$, which is equivalent to $$ x \in \cup (\mathcal F \cup \mathcal G) $$.
 Since $$ x $$ was arbitrary, it follows that $$ A \cup B \subseteq \cup (\mathcal F \cup \mathcal G) $$.
 
Since $$ \cup (\mathcal F \cup \mathcal G) \subseteq (A \cup B) $$ and $$ A \cup B \subseteq \cup (\mathcal F \cup \mathcal G) $$, it follows that
$$ A \cup B \subseteq = (\mathcal F \cup \mathcal G) $$.

**Proof of:**  if $$ X \in (\mathcal F \cup \mathcal G) $$ and $$ Y \in (\mathcal F \cup \mathcal G) $$ and $$ X \ne Y $$, then $$ X \cap Y = \phi $$.

Suppose $$ X \in (\mathcal F \cup \mathcal G) $$ and $$ Y \in (\mathcal F \cup \mathcal G) $$ and $$ X \ne Y $$. Thus we have following possible cases:

- Case 1: $$ X \in \mathcal F $$ and $$ Y \in \mathcal F $$

Since $$ X \ne Y $$ and $$ \mathcal F $$ is a partition on $$ A $$, it follows that $$ X \cap Y = \phi $$.

- Case 2: $$ X \in \mathcal G $$ and $$ Y \in \mathcal F $$

Since $$ \mathcal G $$ is a partition on $$ B $$, it follows that $$ X \subseteq B $$. Similarly since $$ \mathcal F $$ is a partition on $$ A $$, it follows that 
$$ Y \subseteq A $$. Since $$ A \cap B = \phi $$, it follows that $$ X \cap Y = \phi $$.
  
- Case 3: $$ X \in \mathcal G $$ and $$ Y \in \mathcal G $$

Since $$ X \ne Y $$ and $$ \mathcal G $$ is a partition on $$ B $$, it follows that $$ X \cap Y = \phi $$.

- Case 4: $$ X \in \mathcal F $$ and $$ Y \in \mathcal G $$

Since $$ \mathcal F $$ is a partition on $$ A $$, it follows that $$ X \subseteq A $$. Similarly since $$ \mathcal G $$ is a partition on $$ B $$, it follows that 
$$ Y \subseteq B $$. Since $$ A \cap B = \phi $$, it follows that $$ X \cap Y = \phi $$.

Thus from all the cases above $$ X \cap Y = \phi $$.

**Proof of** $$ \forall X \in (\mathcal F \cup \mathcal G)(X \ne \phi ) $$.    

Suppose $$ X \in (\mathcal F \cup \mathcal G) $$. Thus either $$ X \in \mathcal F $$ or $$ X \in \mathcal G $$. If $$ X \in \mathcal F $$, then $$ X \ne \phi $$ because $$ \mathcal F $$ is a partition on $$ A $$.
Similarly if $$ X \in \mathcal G $$, $$ X \ne \phi $$ since $$ \mathcal G $$ is a partition on $$ B $$.

<hr/>

**Soln16**

**(a)** Since $$ R $$ is an equivalence relation on $$ A $$, it follows that $$ A \, / \, R $$ is a partition of $$ A $$. Similarly since $$ S $$ is an equivalence relation on $$ B $$, it follows that $$ B \, / \, S $$ is a partition of $$ B $$.
 Thus we have $$ A \, / \, R $$ is a partition of $$ A $$ and $$ B \, / \, S $$ is a partition of $$ B $$ and $$ A \land B $$ are disjoint, then from the soln15, it follows that $$ (A \, / \, R) \cup (B \, / \, S) $$ is a partition of $$ A \cup B $$.
 We know that from theorems in this section that if $$ A \, / \, R $$ is a partition of $$ A $$, then $$ R $$ is an equivalence relation on $$ A $$. Thus, since $$ (A \, / \, R) \cup (B \, / \, S) $$ is a partition on $$ A \cup B $$, it follows that $$ R \cup S $$ is an equivalence
 relation on $$ A \cup B $$.
 
**(b)** 

Suppose $$ x \in A $$. 

($$ \to $$)Suppose $$ y \in [x]_{R \cup S} $$. Thus $$ (y,x) \in (R \cup S) $$. It follows that $$ (y,x) \in R $$ or $$ (y,x) \in S $$. Since $$ A \cap B = \phi $$ and $$ x \in A $$, it
follows that $$ x \notin B $$. Since $$ S $$ is a relation on $$ B $$ and $$ x \notin B $$, it follows that $$ (y,x) \notin S $$. Thus $$ (y,x) \in R $$, or $$ y \in [x]_R $$.
 Since $$ y $$ is arbitrary, it follows that $$ [x]_{R \cup S} \subseteq [x]_R $$.
 
($$ \leftarrow $$)Suppose $$ y \in [x]_R $$. Thus $$ (y,x) \in R $$. Since $$ x \in A $$, it follows that $$ x \in (A \cup B) $$. Since $$ (y,x) \in R $$, it follows $$ y \in A $$.
Thus $$ y \in A \cup B $$. Thus we can also say that $$ (y,x) \in (R \cup S) $$, where $$ y,x \in (A \cup B) $$. Thus $$ y \in [x]_{R \cup S} $$. Since $$ y $$ is arbitrary, it follows
 that $$ [x]_R \subseteq [x]_{R \cup S} $$.
 
Since $$ [x]_{R \cup S} \subseteq [x]_R $$ and $$ [x]_R \subseteq [x]_{R \cup S} $$, it follows that $$ [x]_R = [x]_{R \cup S} $$.

Proof of if $$ x \in B $$, then $$ [x]_S = [x]_{R \cup S} $$ is exactly similar.
 
**(c)**

($$ \to $$)Suppose $$ X \in (A \cup B) \, / \, (R \cup S) $$. Suppose $$ x \in X $$. Since $$ R \cup S $$, is an equivalence relation on $$ A \cup B $$, it follows
 $$ X = [x]_{R \cup S} $$. Since $$ X \in (A \cup B) \, / \, (R \cup S) $$, it follows $$ X \subseteq (A \cup B) $$. Thus $$ x \in A \cup B $$. It follows 
that either $$ x \in A $$ or $$ x \in B $$. If $$ x \in A $$, then from part(b), $$ [x]_{R \cup S} = [x]_R $$. Similarly if $$ x \in B $$, then from part(b)
$$ [x]_S = [x]_{R \cup S} $$. Thus $$ [x]_{R \cup S} = [x]_R $$ or $$ [x]_{R \cup S} = [x]_S $$. Since $$ X = [x]_{R \cup S} $$, it follows that either
 $$ X = [x]_R $$ or $$ X = [x]_S $$. If $$ X = [x]_R $$, then $$ X \in (A \, / \, R) $$ because $$ [x]_R \in (A \, / \, R) $$. Similarly if 
$$ X = [x]_S $$, then $$ X \in (B \, / \, S) $$ because $$ [x]_S \in (B \, / \, S) $$. Thus $$ X \in (A \, / \, R) \cup (B \, / \, S) $$. Since $$ X $$ is
arbitrary, it follows that $$ (A \cup B) \, / \, (R \cup S) \subseteq (A \, / \, R) \cup (B \, / \, S) $$.

($$ \leftarrow $$)Suppose $$ X \in (A \, / \, R) \cup (B \, / \, S) $$. Suppose $$ x \in X $$. Thus either $$ X \in (A \, / \, R) $$ or $$ X \in (B \, / \, S) $$.
 If $$ X \in (A \, / \, R) $$, then $$ X = [x]_R $$, then from part(b), $$ X = [x]_{R \cup S} $$. Similarly if $$ X \in (B \, / \, S)$$, then $$ X = [x]_{R \cup S} $$.
Thus from both cases $$ X = [x]_{R \cup S} $$. Since $$ R \cup S $$ is equivalence relation on $$ A \cup B $$, it follows that $$ X \in (A \cup B) \, / \, (R \cup S) $$.
Thus $$ (A \, / \, R) \cup (B \, / \, S) \subseteq (A \, / \, R) \cup (B \, / \, S) $$.

Thus from both directions, $$ (A \cup B) \, / \, (R \cup S) = (A \, / \, R) \cup (B \, / \, S) $$.

<hr/>

**Soln17**

**Proof of** $$ \cup \mathcal F \cdot \mathcal G = A $$.

($$ \to $$)Suppose $$ x \in \cup \mathcal F \cdot \mathcal G $$. Thus there exist an $$ T $$ in $$ \mathcal F \cdot \mathcal G $$ such that $$ x \in T $$. Thus $$ T \in \mathcal P(A) $$.
This follows that $$ T \subseteq A $$. Since $$ x \in T $$, $$ x \in A $$. Thus $$ \cup \mathcal F \cdot \mathcal G \subseteq A $$.

($$ \leftarrow $$)Suppose $$ x \in A $$. Since $$ \mathcal F $$ is a partition on $$ A $$, it follows that there exist an $$ X \in \mathcal F $$ such that
$$ x \in X $$. Similarly since $$ \mathcal G $$ is a partition on $$ B $$, it follows that there exist a $$ Y \in \mathcal G $$, such that $$ x \in Y $$.
Thus $$ x \in X \land x \in Y $$, or $$ x \in X \cap Y $$. If $$ T = X \cap Y $$, then $$ T \in \mathcal F \cdot \mathcal G $$. Since $$ x \in T $$ and $$ T \in \mathcal F \cdot \mathcal G $$,
it follows that $$ x \in \cup (\mathcal F \cdot \mathcal G) $$. Thus $$ A \subseteq  (\cup \mathcal F \cdot \mathcal G) $$.

Thus from both sides, $$ \cup \mathcal F \cdot \mathcal G = A $$.

**Proof of** $$ \mathcal F \cdot \mathcal G $$ is pairwise disjoint.

Suppose $$ T_0 \in  \mathcal F \cdot \mathcal G $$ and $$ T_0 \in  \mathcal F \cdot \mathcal G $$ such that $$ T_0 \ne T_1 $$. Thus there exist $$ X_0 \in \mathcal F $$ and $$ Y_0 \in \mathcal G $$ such that $$ T = X_0 \cap Y_0 $$.
Similarly there must be $$ X_1 \in \mathcal F $$ and $$ Y_1 \in \mathcal G $$ such that $$ T_1 = X_1 \cap Y_1 $$. Since $$ \mathcal F $$ is a partition, it follows $$ X_0 \cap X_1 = \phi $$.
Similarly $$ Y_0 \cap Y_1 = \phi $$. Suppose $$ T_0 \cap T_1 \ne \phi $$. Thus there exist an $$ x $$ such that $$ x $$ in $$ T_0 \cap T_1 $$. Thus $$ x \in X_0 \cap Y_0 $$
and $$ x \in X_1 \cap Y_1 $$. Thus $$ x \in X_0 \cap X_1 $$. Thus $$ X_0 \cap X_1 \ne \phi $$. This is a contradiction thus $$ T_0 \cap T_1 = \phi $$.

**Proof of** $$ \forall X \in \mathcal F \cdot \mathcal G (X \ne \phi) $$. This is clear from the definition of $$ \mathcal F \cdot \mathcal G $$.

Thus $$ \mathcal F \cdot \mathcal G $$ is a partition of $$ A $$.

<hr/>

**Soln18**

$$ \mathcal F \cdot \mathcal G = \{ \mathbb R^- \cap \mathbb Z, \mathbb R^- \cap \mathbb (R \setminus Z), \mathbb R^+ \cap \mathbb Z, \mathbb R^+ \cap \mathbb (R \setminus Z), 0 \cap \mathbb Z, 0 \cap \mathbb (R \setminus Z) \} $$.        
$$ \leftrightarrow \mathcal F \cdot \mathcal G = \{ Z^-, (R^- \setminus Z), Z^+, (R^+ \setminus Z), \{0\}, \{0\} \} $$.        
$$ \leftrightarrow \mathcal F \cdot \mathcal G = \{ Z^-, (R^- \setminus Z), Z^+, (R^+ \setminus Z), \{0\} \} $$.        

<hr/>

**Soln19**

**(a)**

**Proof of** $$ R \cap S $$ **is reflexive**

Suppose $$ x \in A $$. Since $$ R $$ is reflexive, it follows that $$ (x,x) \in R $$. Similarly since $$ R $$ is reflexive, it follows that $$ (x,x) \in S $$.
Thus $$ (x,x) \in R \cap S $$. Thus $$ R \cap S $$ is reflexive.

**Proof of** $$ R \cap S $$ **is symmetric**

Suppose $$ (x,y) \in R \cap S $$. Thus $$ (x,y) \in R $$ and $$ (x,y) \in S $$. Since $$ R $$ and $$ S $$ are both symmetric, it follows that $$ (y,x) \in R \cap S $$.
Thus $$ R \cap S $$ is symmetric.

**Proof of** $$ R \cap S $$ **is transitive**

Suppose $$ (x,y) \in R \cap S $$ and $$ (y,z) \in R \cap S $$. Thus $$ (x,y) \in R \land (y,z) \in S $$. Since $$ R $$ is transitive, it follows that $$ (x,z) \in R $$.
 Similarly since $$ (x,y) \in S \land (y,z) \in S $$ and $$ S $$ is transitive, it follows that $$ (x,z) \in S $$. Thus we have $$ (x,z) \in R \cap S $$. Thus
$$ R \cap S $$ is transitive.

Since $$ R \cap S $$ is reflexive, symmetric and transitive, it follows that $$ R \cap S $$ is equivalence relation.

**(b)**

Suppose $$ x \in A $$.

($$ \to $$)Suppose $$ y \in [x]_T $$. Thus $$ (y,x) \in (R \cap S) $$. Thus $$ (y,x) \in R $$ and $$ (y,x) \in S $$. Since $$ R $$ is equivalence relation on
$$ A $$ and $$ x \in A $$ and $$ (y,x) \in R $$, it follows that $$ y \in [x]_R $$. Similarly since $$ S $$ is equivalence relation on $$ A $$ and $$ x \in A $$ 
and $$ (y,x) \in S $$, it follows that $$ y \in [x]_S $$. Thus $$ y \in [x]_R \cap [x]_S $$. Thus $$ [x]_T \subseteq [x]_R \cap [x]_S $$.
 
($$ \leftarrow $$)Suppose $$ y \in [x]_R \cap [x]_S $$. Thus $$ (y,x) \in R $$ and $$ (y,x) \in S $$. Thus $$ (y,x) \in R \cap S $$. Since $$ R \cap S $$ is
 an equivalence relation on $$ A $$ and $$ x \in A $$ and $$ (y,x) \in R \cap S $$, it follows that $$ y \in [x]_{R \cap S} $$, or $$ y \in [x]_T $$. Thus
$$ [x]_R \cap [x]_S \subseteq [x]_T $$.

Since $$ [x]_T \subseteq [x]_R \cap [x]_S $$ and $$ [x]_R \cap [x]_S \subseteq [x]_T $$, it follows that $$ [x]_T = [x]_R \cap [x]_S $$. 

**(c)**

Suppose $$ X \in A \, / \, T $$. Thus we have:

$$ X \in A \, / \, T $$. iff    
$$ \exists x \in A (X = [x]_T) $$. iff    
Since from last part, if $$ x \in A $$ then $$ [x]_T = [x]_R \cap [x]_S $$, we have:     
$$ \exists x \in A (X = [x]_R \cap [x]_S) $$. iff        
$$ X \in (A \, / \, R) \land X \in (A \, / \, S) $$. iff        
$$ X \in ( A \, / \, R) \cdot ( A \, / \, S) $$. 
    
Since $$ X $$ is arbitrary, it follows that $$ A \, / \, T = (A \, / \, R) \cdot (A \, / \, S) $$.

<hr/>

**Soln20**

**Proof of** $$ \cup (\mathcal F \otimes \mathcal G) = A \times B $$. 

($$ \to $$)Suppose $$ (x,y) \in  \cup (\mathcal F \otimes \mathcal G) $$. Thus there exist an element $$ Z \in \mathcal F \otimes \mathcal G $$ such that $$ (x,y) \in Z $$. 
Since $$ Z \in P(A) \times P(B) $$, it follows that there exist an $$ X \in \mathcal P(A) $$ and $$ Y \in \mathcal P(B) $$ such that $$ Z = X \times Y $$. Since
$$ X \in \mathcal P(A) $$, $$ X \subseteq A $$. Similarly since $$ Y \in \mathcal P(B) $$, $$ Y \subseteq B $$. Thus $$ (x,y) \in A \times B $$. Thus $$ \cup (\mathcal F \otimes \mathcal G) \subseteq A \times B $$.
 
($$ \leftarrow $$)Suppose $$ (x,y) \in A \times B $$. Thus for some set, say,  $$ X \subseteq A $$, $$ x \in X $$. Similarly for some set $$ Y \subseteq B $$, $$ y \in Y $$.
Thus $$ (x,y) \in X \times Y $$. Thus $$ (x,y) \in Z $$ where $$ Z \in \mathcal P(A) \times \mathcal P(A) $$. Thus $$ (x,y) \in \cup (\mathcal F \otimes \mathcal G) $$.
Thus $$ A \times B \subseteq \cup (\mathcal F \otimes \mathcal G) $$.

**Proof of** $$ \mathcal F \otimes \mathcal G $$ is pairwise disjoint.

Suppose $$ Z_1 \in \mathcal F \otimes \mathcal G $$ and $$ Z_2 \in \mathcal F \otimes \mathcal G $$ and $$ Z_1 \ne Z_2 $$. We will prove by contradiction. Suppose $$ Z_1 \cap Z_2 \ne \phi $$.
Thus there atleast exist a pair $$ (x,y) $$ such that $$ (x,y) \in Z_1 $$ and $$ (x,y) \in Z_2 $$. Since $$ Z_1 \in \mathcal F \otimes \mathcal G  $$, it
follows that for some $$ X_1 \in \mathcal F $$ and $$ Y_1 \in \mathcal G $$, $$ Z_1 = X_1 \times Y_1 $$. Similarly since $$ Z_2 \in \mathcal F \otimes \mathcal G $$, it
follows that for some $$ X_2 \in \mathcal F $$ and $$ Y_2 \in \mathcal G $$, $$ Z_2 = X_2 \times Y_2 $$. Since $$ (x,y) \in Z_1 $$ and $$ Z_1 = X_1 \times Y_1 $$, it follows
that $$ x \in X_1 $$ and $$ y \in Y_1 $$. Similarly since $$ (x,y) \in Z_2 $$, it follows that $$ x \in X_2 $$ and $$ y \in Y_2 $$. Thus $$ x \in X_1 \cap X_2 $$ and
$$ y \in Y_1 \cap Y_2 $$. Since $$ X_1 \in \mathcal F $$ and $$ \mathcal F $$ is a partition on $$ A $$, ans since $$ x $$ exist in both $$ X_1 $$ and $$ X_2 $$, it follows that
$$ X_1 = X_2 $$. Similarly $$ Y_1 \in \mathcal G $$ and $$ Y_2 \in \mathcal G $$, and $$ \mathcal G $$ is a partition on $$ B $$, it follows that $$ Y_1 = Y_2 $$. Since $$ Z_1 = X_1 \times Y_1 $$
and $$ Z_2 = X_2 \times Y_2 $$, it follows that $$ Z_1 = Z_2 $$ because $$ X_1 = X_2 $$ and $$ Y_1 = Y_2 $$. This contradicts with $$ Z_1 \ne Z_2 $$. Thus $$ Z_1 \cap Z_2 = \phi $$.

**Proof of** $$ \forall Z \in (\mathcal F \otimes \mathcal G)(Z \ne \phi) $$.

Suppose $$ Z \in \mathcal F \otimes \mathcal G $$. Thus for some $$ X \in \mathcal F $$ and $$ Y \in \mathcal G $$, $$ Z = X \times Y $$. Since $$ \mathcal F $$ is a partition on $$ A $$,
it follows that $$ X \ne \phi $$. Similarly since $$ \mathcal G $$ is a partition on $$ B $$, $$ Y \ne \phi $$. Thus $$ Z \ne \phi $$. Since $$ Z $$ is arbitrary, it follows that
$$ \forall Z \in (\mathcal F \otimes \mathcal G)(Z \ne \phi) $$.
 
<hr/>
 
**Soln21**

$$ \mathcal F \otimes \mathcal F = \{ R^- \times R^-, R^- \times R^+, R^- \times 0, R^+ \times R^-, R^+ \times R^+, R^+ \times 0, 0 \times R^-, 0 \times R^+, \{ 0 \times 0 \} \} $$.    

$$ R^- \times R^- $$: Bottom left quadrant.     
$$ R^- \times R^+ $$: Top Right quadrant.     
$$ R^- \times 0 $$: Negative $$ x $$ axis    
$$ R^+ \times R^- $$: Bottom left quadrant.      
$$ R^+ \times R^+ $$: Top left quadrant.     
$$ R^+ \times 0 $$: Positive $$ x $$ axis    
$$ 0 \times R^- $$: Negative $$ y $$ axis    
$$ 0 \times R^+ $$: Positive $$ y $$ axis.    
$$ 0 \times 0 $$: Origin    

<hr/>

**Soln22**

**(a)** 

<u>Reflexive</u>

Suppose $$ (x,y) \in A \times B $$. Thus $$ x \in A $$ and $$ y \in B $$. Since $$ R $$ is equivalence relation on $$ A $$, it follows that $$ (x,x) \in R $$.
Similarly since $$ S $$ is equivalence relation on $$ B $$, it follows $$ (y,y) \in S $$. Thus $$ ((x,y),(x,y)) \in T $$ because $$ xRx $$ and $$ yRy $$.
Thus $$ T $$ is reflexive.

<u>Symmetric</u>

Suppose $$ ((x,y),(x',y')) \in T $$. Thus $$ xRx' $$ and $$ ySy' $$. Since $$ R $$ and $$ S $$ are symmetric, it follows that
$$ x'Rx $$ and $$ y'Ry $$. Thus $$ ((x',y'),(x,y)) \in T $$. Thus $$ T $$ symmetric.

<u>Transitive</u>

Suppose $$ ((x,y),(x',y')) \in T $$ and $$ ((x',y'),(x'',y'')) \in T $$. Thus $$ (x,x') \in R $$, $$ (x',x'') \in R $$, $$ (y,y') \in S $$, $$ (y',y'') \\in S $$.
Since $$ (x,x') \in R $$ and $$ (x',x'') \in R $$, it follows that $$ (x,x'') \in R $$ because $$ R $$ is transitive. Similarly since $$ (y,y') \in S $$ and 
$$ (y',y'') \in S $$, it follows that $$ (y,y'') \in S $$ because $$ S $$ is transitive. Thus $$ ((x,y),(x'',y'')) \in T $$. Thus $$ T $$ is transitive.

**(b)**

Suppose $$ a \in A, b \in B $$. Suppose $$ (x,y) \in [(a,b)]_T $$. Thus,        

$$ (x,y) \in [(a,b)]_T $$. iff     
$$ ((x,y),(a,b)) \in T $$. iff     
$$ xRa \land ySb $$. iff     
$$ x \in [a]_R \land y \in [b]_S $$. iff      
$$ (x,y) \in [a]_R \times [b]_S $$.     

Since $$ (x,y) $$ is arbitrary, it follows that $$ [(a,b)]_T = [a]_R \times [b]_S $$.

**(c)**

Suppose $$ Z \in (A \times B)/T $$. Thus,     

$$ Z \in (A \times B)/T $$. iff    
$$ \exists (x,y) \in A \times B (Z = [(x,y)]_T) $$. iff    
Using part(b),    
$$ \exists (x,y) \in A \times B (Z = ([x]_R \times [y]_S)) $$. iff    
Since $$ [x]_R \in A/R $$ and $$ [y]_S \in B/R $$ and using the definition of $$ \mathcal F \otimes \mathcal G $$.     
$$ Z \in (A/R) \otimes (B/S) $$    

Since $$ Z $$ is arbitrary, it follows that $$ (A \times B)/T = (A/R) \otimes (B/R) $$.

<hr/>

**Soln23**

**(a)**

For uniqueness proofs, we need to prove two things: Existence and Uniqueness.

We shall prove this using the following strategy: $$ \exists x (P(x) \land \forall y (P(y) \to y = x) ) $$.
Here $$ P(x) $$ denotes there is a relation $$ T $$ such that $$ [x]_S T [y]_S \leftrightarrow xRy $$.

To understand what it means by compatible:    
Suppose $$ x,y,x',y' \in A $$ such that $$ xSx' $$ and $$ ySy' $$. Then if $$ xRy $$ iff $$x'Ry' $$.   

<u>Existence:</u>

Suppose $$ T = \{ (X,Y) \in A/S \times A/S \, \vert \, \exists x \in X \exists y \in Y (xRy) \} $$.

Suppose $$ R $$ is compatible with $$ S $$.

($$ \to $$)Suppose $$ [x]_S T [y]_S $$. Thus by our definition of $$ T $$, $$ \exists x' \in [x]_S \land y' \in [y]_S (x'Ry') $$. Thus $$ x'Sx \land y'Sy $$ and $$ xRy $$. 
Because $$ R $$ is compatible with $$ S $$ and $$ x'Rx and y'Ry $$ and $$ x'Ry' $$, it follows that $$ xRy $$. Thus $$ ([x]_S T [y]_S) \to xRy $$.
 
($$ \leftarrow $$)Suppose $$ x,y \in A $$ such that $$ xRy $$. Since $$ S $$ is an equivalence relation, we have $$ x \in [x]_S, y \in [y]_S $$. Thus
$$ \exists x \in [x]_S \exists y \in [y]_S (xRy) $$. Thus we can also say $$ [x]_S T [y]_S $$. Thus $$ xRy \to ([x]_S T [y]_S) $$.

Thus from both directions we have: $$ ([x]_S T [y]_S) \leftrightarrow xRy $$.
 
<u>Uniqueness:</u>

Suppose that there is some relation $$ T' $$ such that $$ [x]_S T' [y]_S \to xRy $$. Now we will prove that $$ T' = T $$ for proving uniqueness. Suppose $$ x,y \in A $$
such that $$ [x]_S T' [y]_S $$ is true. It follows that $$ xRy $$ must be true. Since $$ x \in A $$ and $$ y \in A $$ and $$ S $$ is a equivalence relation, it follows that
$$ [x]_S \in A/S $$ and $$ [y]_S \in A/S $$. Also we know that $$ x \in [x]_S $$ and $$ y \in [y]_S $$. Since $$ xRy $$, thus there atleast exist an element in $$ [x]_S $$
and there exist atleast an element in $$ [y]_S $$ such that $$ xRy $$. Thus we can also say, $$ \exists x' \in [x]_S \exists y' \in [y]_S (x' R y') $$. But this is
 same as relation $$ T $$. Thus $$ T' = T $$.
 
Note: Not sure about the correctness of this proof.

**(b)**

Suppose $$ x,y,x',y' \in A $$ such that $$ xSx'$$ and $$ ySy' $$. Thus $$ xRy $$ iff $$ [x]_S T [y]_S $$. Since $$ S $$ is equivalence relation, $$ [x]_S =[x′]_S $$. Also $$ [y]_S = [y′]_S $$. Thus
$$ xRy $$ iff $$ [x′]_S T [y′]_S $$. But $$ [x′]_S T [y′]_S $$,  iff $$ x′Ry′ $$. Thus $$ xRy $$ iff $$ x'Ry' $$. 
 
<hr/>

**Soln24**

**(a)**

<u>Reflexive</u>

Suppose $$ x $$ in $$ A $$. Since $$ R $$ is reflexive, $$ (x,x) \in R $$. Thus $$ (x,x) \in R^{-1} $$. Thus $$ (x,x) \in R \cap R^{-1} $$. Thus $$ R \cap R^{-1} $$ is reflexive.

<u>Symmetric</u>

Suppose $$ (x,y) \in R \cap R^{-1} $$. Thus $$ (x,y) \in R $$ and $$ (x,y) \in R^{-1} $$. Since $$ R $$ and $$ R^{-1} $$ are inverse of each other, and $$ (x,y) \in R $$ and $$ (x,y) \in R^{-1} $$,
 it follows that $$ (y,x) \in R^{-1} $$ and $$ (y,x) \in R $$. Thus $$ (y,x) \in R^{-1} \cap R $$, or $$ (y,x) \in R \cap R{-1} $$. Thus $$ R \cap R{-1} $$ is symmetric.
 
<hr/>

<u>Transitive</u>

Suppose $$(x,y) \in R \cap R{-1} \land (y,z) \in R^{-1} \cap R $$. Thus  $$ (x,y) $$ in $$ R^{-1} \land (y,z) \in R^{-1} $$ and $$ (x,y) $$ in $$ R \land (y,z) \in R $$. Since $$ R $$ is transitive, 
it follows $$ (x,z) $$ in $$ R $$. Since $$ R $$ is transitive, it follows that $$ R^{-1} $$ is also transitive, Thus since $$ (x,y) $$ in $$ R^{-1} \land (y,z) \in R^{-1} $$, it follows $$ (x,z) \in R^{-1} $$.
Thus $$ (x,z) \in R \cap R^{-1} $$. Thus $$ R \cap R^{-1} $$ is transitive.

Since $$ R \cap R^{-1} $$ is reflexive, symmetric and transitive, it follows that $$ R \cap R^{-1} $$ is an equivalence relation.

**(b)**

From Soln23(a), we know that if $$ R $$ is compatible with $$ S $$, then there exist a unique relation $$ T $$  such that $$ [x]_S T [y]_S $$. Thus if we 
prove that $$ R $$ is compatible with $$ S $$, then such relation exist can be followed from Soln23(a).

Suppose $$ x,y,x',y' \in A $$ such that $$ xSx' $$ and $$ ySy' $$. 

($$ \to $$)Suppose $$ (x,y) \in R $$. Since $$ xSx' $$, it follows $$ x'Sx $$. Since $$ S = R \cap R^{-1} $$, it follows that $$ (x',x) \in R $$.
Since $$ (x',x) \in R $$ \land $$ (x,y) \in R $$, and $$ R $$ is transitive, it follows that $$ (x',y) \in R $$. Since $$ ySy' $$, it follows $$ (y,y') \in R $$.
Since $$ R $$ is transitive, it follows $$ (x',y') \in R $$. Thus $$ xRy \to x'Ry' $$.
  
($$ \leftarrow $$)Suppose $$ (x',y') \in R $$. Then it can be proved similarly that $$ x'Ry' \to xRy $$.

Thus from both direction we have $$ xRy \leftrightarrow x'Ry' $$. Thus we can conclude that if $$ xSx' \land ySy' $$, then $$ xRy \leftrightarrow x'Ry' $$.
 Thus $$ R $$ is compatible with $$ S $$.
 
**(c)**

To prove $$ T $$ partial order on $$ A/S $$, we need to prove that $$ T $$ is reflexive, transitive and antisymmetric.

<u>Reflexive:/u>

Suppose $$ X \in A/S $$. Since $$ S $$ is equivalence relation, $$ X \ne \phi $$. Suppose $$ x \in X $$. Thus $$ x = [x]_S $$. Since $$ R $$ is reflexive,
it follows $$ xRx $$. Thus $$ [x]_S T [x]_S $$. Thus $$ X $$ is reflexive.

<u>Transitive</u>

Suppose $$ X,Y,Z \in A/S $$ such that $$ XTY \land YTZ $$. Suppose $$ x \in X, y \in Y, z \in Z $$. Thus $$ X = [x]_S, Y = [y]_S, Z = [z]_S $$. Since $$ [x]_S T [y]_S $$,
it follows $$ xRy $$. Similarly since $$ [y]_S T [z]_S $$ it follows $$ yRz $$. Since $$ R $$ is transitive, it follows $$ xRz $$. Since $$ xRz $$ it follows $$ [x]_S T [z]_S $$.
 Thus $$ XTZ $$. Thus $$ T $$ is transitive.
 
<u>Antisymmetric</u>

Suppose $$ X,Y \in A/S $$ such that $$ XTY \land YTX $$. Suppose $$ x \in X \land y \in Y $$. Thus $$ x \in [x]_S $$ and $$ y \in [y]_S $$. Since $$ [x]_S T [y]_S $$,
  it follows $$ xRy $$. Similarly since $$ [y]_S T [x]_S $$, it follows $$ yRx $$. Since $$ yRx $$, it follows that $$ xR^{-1}y $$. Thus we have $$ (x,y) \in R $$ and
  $$ (x,y) \in R^{-1} $$. Thus $$ (x,y) \in R \cap R^{-1} $$. Thus $$ (x,y) \in S $$. Since $$ S $$ is an equivalence relation, it follows that $$ [x]_S = [y]_S $$. 
  Thus $$ X = Y $$. Thus $$ T $$ is antisymmetric.
  
<hr/>

**Soln25**

**(a)**

To prove that $$ R $$ is preorder we need to prove that $$ R $$ is reflexive and transitive.

Suppose $$ X \in A $$. Thus $$ (X,X) \in R $$ since $$ X $$ has atleast as many elements as $$ X $$. Thus $$ R $$ is reflexive.

Suppose $$ X,Y,Z \in A $$ such that $$ (X,Y) \in A \land (Y,Z) \in A $$. Thus $$ Y $$ has atleast as many elements as $$ X $$. Also $$ Z $$ has atleast as many elements as $$ Y $$.
 Thus $$ Z $$ has atleast as many elements as $$ X $$. Thus $$ (X,Z) \in R $$. Thus $$ R $$ is transitive.
 
Since $$ R $$ is reflexive and transitive, it follows that $$ R $$ is preorder.

**(b)**

Since $$ S = R \cap R^{-1} $$, it follows that $$ S = \{ (X,Y) \in A \times A \, \vert \, X and Y contains same number of elements. \} $$.

Since $$ S $$ is an equivalence relation as prove in Soln24, $$ A\S $$ is a partition of $$ A $$ on $$ S $$ with every parition containing equal number of elements.
Also since $$ S $$ creates a partioton on $$ A $$, no set in the partition is empty. Thus we will have many paritions with each partition containing sets with equal number
of elements.

Now consider $$ T $$, which is a partial order on $$ A/S $$. Suppose $$ [X]_S T [Y]_S$$. It follows that $$ XRY $$. Thus $$ Y $$ contains atleast as many elements as $$ X $$.
 Also since all elements of $$ [X]_S $$ have same number of elements, it follows that all the elements of $$ [Y]_S $$ will have atleast same number of elements as all elements of $$ [X]_S $$.
Thus partial order is giving a order to these sets, with initially only those sets having one element followed by the set having two, ... and so on.

Suppose $$ X,Y \in A $$. Then either $$ (X,Y) \in R $$ or $$ (Y,X) \in R $$. Thus either $$ [X]_S T [Y]_S $$ or $$ [Y]_S T [X]_S $$. Thus $$ T $$ is a total order.
 
$$ A/S $$ contains the maximum number of elements that $$ A $$ can have. I am not sure about the number. As I am not sure of the notation $$ A = \mathcal P(I) $$. It seems like
$$ A $$ may contain maximum 100 elements. but need to confirm this.

<hr/>

**Soln26**

**(a)**

<u>Reflexive:</u>

Suppose $$ \mathcal F \in P $$. Suppose $$ X \in \mathcal F $$. Thus $$ X \subseteq X $$. Thus $$ (\mathcal F, \mathcal F) \in R $$. Thus $$ R $$ is reflexive.
   
<u>Transitive:</u>

Suppose $$ \mathcal F, \mathcal G, \mathcal H \in P $$ such that $$ (\mathcal F, \mathcal G) \in R $$ and $$ (\mathcal G, \mathcal H) \in R $$. Thus for every set $$ X \in \mathcal F $$, there exist a 
 set $$ Y \in \mathcal G $$ such that $$ X \subseteq Y $$. Similarly for every set $$ S \in \mathcal G $$, there exist a set $$ T \in \mathcal H $$, such that $$ S \subseteq T $$.
  Thus clearly it follows that for every set $$ X \in \mathcal F $$ there exist a set $$ Y \in \mathcal H $$, such that $$ X \subseteq Y $$. Thus $$ (\mathcal F, \mathcal H) \in R $$.
  Thus $$ R $$ is transitive.
  
<u>Antisymmetric:</u>

Suppose $$ \mathcal F, \mathcal G \in P $$ such that $$ (\mathcal F, \mathcal G) \in R $$ and $$ (\mathcal G, \mathcal F) \in R $$. Thus $$ \forall X \in \mathcal F \forall Y \in \mathcal G(X \subseteq Y) $$ and $$ \forall X \in \mathcal G \forall Y \in \mathcal F(X \subseteq Y) $$.
This is possible only if $$ \mathcal F = \mathcal G $$. Thus $$ R $$ is antisymmetric.

Since $$ R $$ is reflexive, transitive and antisymmetric, it follows that $$ R $$ is partial order.

**(b)**

($$ \to $$)Suppose $$ S \subseteq T $$. Suppose $$ x \in A $$. Thus $$ [x]_S \in \mathcal F $$ and $$ [x]_T \in \mathcal G $$. Suppose $$ y \in [x]_S $$. Thus $$ (y,x) \in S $$.
 Since $$ S \subseteq T $$, it follows $$ (y,x) \in T $$. Thus $$ (y,x) \in [x]_T $$. Since $$ y $$ is arbitrary, it follows that $$ [x]_S \subseteq [y]_T $$.
 Since $$ x $$ is arbitrary, it follows that $$ \forall X \in \mathcal F \forall Y \in \mathcal G(X \subseteq Y) $$. Thus $$ \mathcal F $$ refines $$ \mathcal G $$.
 
($$ \leftarrow $$)Suppose $$ \mathcal F $$ refine $$ \mathcal G $$. Suppose $$ X \in \mathcal F $$ is an arbitrary partition in $$ \mathcal F $$. Since $$ \mathcal F $$ refines $$ \mathcal G $$, suppose $$ Y \in \mathcal G $$,
such that $$ X \subseteq Y $$. Suppose $$ y \in Y $$. Thus $$ Y = [y]_T $$. Since $$ X \subseteq Y $$, $$ y \in X $$. Thus $$ X = [y]_S $$. Suppose $$ x \in [y]_T $$. Thus
 $$ (x,y) \in T $$. Since $$ x \in Y $$, it follows $$ x \in X $$. Thus $$ (x,y) \in S $$. Thus if $$ (x,y) \in T $$ then $$ (x,y) \in S $$. Thus $$ S \subseteq T $$.
 
Thus from both directions, we have $$ S \subseteq T $$, iff $$ \mathcal F $$ refines $$ \mathcal G $$.
 
**(c)**

To prove that $$ \mathcal F \cdot \mathcal G $$ is the greatest lower bound of the set $$ \{ \mathcal F, \mathcal G \} $$, if we prove that $$ \mathcal F \cdot \mathcal G $$ is
 the $$R$$-smallest element in the set $$ \{ \mathcal F, \mathcal G \} $$, then it will also be the greatest lower bound.
  
Suppose $$ Z \in  \mathcal F \cdot \mathcal G  $$. Thus there exist a set $$ X \in \mathcal F $$ and $$ Y \in \mathcal G $$ such that $$ Z = X \cap Y $$.
 Thus $$ Z \subseteq X $$ and $$ Z \subseteq Y $$. Thus $$ \mathcal F \cdot \mathcal G $$ refines $$ \mathcal F $$ as well as $$  \mathcal F \cdot \mathcal G $$ refines $$ \mathcal G $$.
 Thus $$ ( \mathcal F \cdot \mathcal G, \mathcal F) \in R $$ and $$ ( \mathcal F \cdot \mathcal G, \mathcal G ) \in R $$. Thus $$  \mathcal F \cdot \mathcal G $$ is the smallest
 element of the set $$  \{ \mathcal F, \mathcal G \} $$. Thus $$ \mathcal F \cdot \mathcal G  $$ is greatest lower bound of the set $$ \mathcal F \cdot \mathcal G $$.
 

 








