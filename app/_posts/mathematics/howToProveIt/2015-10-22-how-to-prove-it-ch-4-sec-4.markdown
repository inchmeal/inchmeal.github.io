---
layout: blog
title:  "How To Prove It, Ch-4 Sec-4.4, Ordering Relations"
tags: mathematics howToProveIt
---
This post contains exercises of Chapter - 4, Section - 4.4, Ordering Relations.

<!--more-->

<hr/>

### Summary
   
- Antisymmetric Relation: 
    - Suppose $$ R $$ is a relation on a set $$ A $$. Then $$ R $$ is said to be antisymmetric if 
    $$ \forall x \in A \forall y \in A((xRy \land yRx) \to x = y) $$.
    - For example: 
        1. $$ x \le y $$, where $$ x,y \in \mathbb R $$. 
        2. $$ x \subseteq y $$, where $$ x,y \subseteq A $$.
    - It can be seen from the above examples, that $$ y $$ is atleast as $$ x $$ . Thus antisymmetric relation gives a sense of ordering. 
- Partial Order: Consider $$ R $$ a relation defined on set $$ A $$. $$ R $$ will be called *partial order* on $$ A $$, if $$ R $$ is reflexive,
  transitive and antisymmetric.
- Total Order: Consider $$ R $$ a relation defined on set $$ A $$. $$ R $$ will be called *total order*, if $$ R $$ is partial order and
  $$ \forall x \in A \forall y \in A(xRy \lor yRx) $$. As it can be seen from the definition, every two elements of the set $$ A $$ are in $$ R $$. Also,
  since $$ R $$ is antisymmetric, everyone of these elements/objects have a sense of ordering with respect to every other element/object.
- If $$ R $$ is a partial order on a set $$ A $$. Suppose $$ B \subseteq A $$:
    - Smallest and Minimal element(s): 
        - Suppose $$ b \in B $$. If $$ \forall x \in B(bRx) $$, then $$ b $$ is called $$R$$-smallest element of $$ B $$. Also, if 
        $$ \lnot \exists x \in B(xRb \land x \ne b) $$ is called an $$R$$-minimal element of $$ B $$.
        - If $$ B $$ has a smallest element then this element is unique.
        - If $$ b $$ is the smallest element of B, then $$ b $$ is also a minimal element of $$ B $$, and it is the only minimal element.
        - If $$ R $$ is a total order and $$ b $$ is a minimal element of $$ B $$, then $$ b $$ is the smallest element of $$ B $$. 
    - Largest and Maximal element(s): 
        - If $$ \forall x \in B(xRb) $$, then $$ b $$ is called $$R$$-largest element of $$ B $$. Also, if $$ \lnot \exists x \in B(bRx \land x \ne b) $$ is 
          called an $$R$$-maximal element of $$ B $$.
        - Other properties of largest and maximal are similar to smallest and minimal as above.
- Lower Bound and Upper Bound: 
    - Suppose $$ R $$ is a partial order on $$ A $$, $$ B \subseteq A $$, and $$ a \in A $$. Then $$ a $$ is called a lower bound for $$ B $$
      if $$ \forall x \in B(aRx) $$. Similarly, it is an upper bound for $$ B $$ if $$ \forall x \in B(xRa) $$.
    - Thus there can be multiple lower bounds or upper bounds for a set.
    - Note that lower/upper bound need not be part of the set $$ B $$. However, smallest/largest element of $$ B $$ must be the part of set $$ B $$.
- Least Upper Bound and Greatest Lower Bound:    
    Suppose $$ R $$ is a partial order on $$ A $$ and $$ B \subseteq A $$. Let $$ U $$ be the set of all upper bounds for $$ B $$, and let $$ L $$ be the
    set of all lower bounds. If $$ U $$ has a smallest element, then this smallest element is called the least upper bound of $$ B $$. If $$ L $$ has a largest 
    element, then this largest element is called the greatest lower bound of $$ B $$. The phrases least upper bound and greatest lower bound are sometimes 
    abbreviated l.u.b. and g.l.b.
- Suppose $$ A $$ is a set, $$ \mathcal F \subseteq P (A) $$, and $$ \mathcal F \ne \phi $$. Then the least upper bound of $$ \mathcal F $$ (in the subset partial order) 
  is $$ \cup \mathcal F $$ and the greatest lower bound of $$ \mathcal F $$ is $$ \cap \mathcal F $$.

<hr/>

**Soln1** 

**(a)** 

Reflexive: True
Transitive: True
Antisymmetric: True

Thus it is partial order. It is not total order since $$ (a,c) \notin R $$.

**(b)**

Reflexive: True
Transitive: True
Antisymmetric: False, Because $$ (-1,1) \in R \land (1,-1) \in R $$ but $$ -1 \ne 1 $$.

Thus it is not partial order.
  
**(c)**

Reflexive: True
Transitive: True
Antisymmetric: True

Thus it is partial order. It is not total order because $$ (-1,1) \notin R $$.

<hr/>

**Soln2**

**(a)**

Reflexive: True
Transitive: True
Antisymmetric: True

Thus it is partial order. It is also total order because every two english words, say $$ x $$ and $$ y $$, 
then either $$ (x,y) \in R $$ or $$ (y,x) \in R $$.

**(b)**

Reflexive: True
Transitive: True
Antisymmetric: False. For example $$ (apple,ape) \in R \land (ape,apple) \in R $$ but $$ apple != ape $$.

**(c)**

Reflexive: True
Transitive: True
Antisymmetric: False. Suppose $$ x $$ and $$ y $$ are two different countries with same population. Then $$ (x,y) \in R \land (y,x) \in R $$ but $$ x != y $$.

<hr/>

**Soln3**

**(a)**

$$ R = \{ (1,1),(1,2),(1,3),(1,4),(2,2),(2,3),(2,4),(3,3),(4,4) \}, B = \{2,3,4\} $$.

Minimal elements = $$ \{ 2 \} $$.    
Smallest element = $$ 2 $$    
Greatest Lower Bound = 2.    

Maximal elements = $$ \{3, 4 \} $$.    
Largest = N.A.    
Least Upper Bound = N.A.    

**(b)**

$$ R=\{(x,y) \in R \times R \, \vert \, x \le y\}, B=\{x \in R \, \vert \, 1 \le x < 2 \} $$.

Minimal elements = $$ \{ 1 \} $$.    
Smallest element = $$ 1 $$    
Greatest Lower Bound = 1.    

Maximal elements = N.A.    
Largest = N.A.    
Least Upper Bound = 2    

**(c)**

Minimal elements = $$ \{ \phi \} $$.    
Smallest element = $$ \phi $$    
Greatest Lower Bound = $$ \phi $$.    

Maximal elements = $$ \{x \in \mathcal P(\mathbb N) \, \vert \, \text{x contains exactly 5 elements.} \}$$     
Largest = N.A.    
Least Upper Bound = N.A.    

<hr/>

**Soln4**

($$ \to $$)Suppose $$ R $$ is symmetric and antisymmetric. Suppose $$ (x,y) $$ in $$ R $$. Since $$ R $$ is symmetric $$ xRy \land yRx $$.
Since $$ xRy \land yRx $$ and $$ R $$ is antisymmetric, it follows that $$ x = y $$. Thus $$ (x,y) \in i_A $$. Since $$ (x,y) $$ is arbitrary,
it follows that $$ R \subseteq i_A $$.

($$ \leftarrow $$)Suppose $$ R \subseteq i_A $$. Suppose $$ (x,y) \in R $$, thus $$ (x,y) \in i_A $$. Since $$ (x,y) \in i_A $$, it follows $$ (x,y) \in i_A \land (y,x) \in i_A $$.
Thus $$ R $$ is symmetric. Now to prove antisymmetric, suppose $$ (x,y) \in R \land (y,x) \in R $$. Since $$ R \subseteq i_A $$, it follows $$ (x,y) \in i_A $$.
since $$ (x,y) \in i_A $$, it follows that $$ x = y $$. Thus $$ R $$ is antisymmetric.

<hr/>

**Soln5**

Suppose $$ R $$ is a partial order on $$ A $$ and $$ B \subseteq A $$. 

<u>Reflexive:</u>    

Suppose $$ x $$ is arbitrary element of $$ B $$. Since $$ B \subseteq A $$, $$ x \in A $$. Since $$ R $$ is reflexive, if follows that
$$ (x,x) \in R $$. Since $$ x \in B $$, it follows $$ (x,x) \in B \times B $$. Thus if $$ x \in B $$, then $$ (x,x) \in R \cap (B \times B) $$. 
Since $$ x $$ is arbitrary, we can conclude that $$ R \cap (B \times B) $$ is reflexive.
  
<u>Transitive:</u>

Suppose $$ x,y,z $$ are arbitrary elements of $$ B $$ such that $$ (x,y) \in R \cap (B \times B) \land (y,z) \in R \cap (B \times B) $$. Thus $$ (x,y) \in R \land (y,z) \in R $$. Since $$ R $$ is transitive, 
it follows $$ (x,z) \in R $$. Since $$ x \in B \land z \in B $$, thus $$ (x,z) \in B \times B $$. Thus if $$ (x,y) \in R \cap (B \times B) \land (y,z) \in R \cap (B \times B) $$, then $$ (x,z) \in R \cap (B \times B) $$.
Since $$ x,y,z $$, are arbitrary, we can conclude that $$ R \cap (B \times B) $$ is transitive.
 
<u>Antisymmetric:</u>

Suppose $$ x,y $$ are arbitrary elements of $$ B $$ such that $$ (x,y) \in R \cap (B \times B) \land (y,x) \in R \cap (B \times B) $$. Thus $$ (x,y) \in R \land (y,x) \in R $$. Since $$ R $$ is antisymmetric, 
it follows $$ x = y $$. Thus if $$ (x,y) \in R \cap (B \times B) \land (y,x) \in R \cap (B \times B) $$, then $$ x = y $$. Since $$ (x,y) $$, is 
arbitrary, we can conclude that $$ R \cap (B \times B) $$ is antisymmetric.

Since $$ R \cap (B \times B) $$ is reflexive, transitive, antisymmetric, it follows that $$ R \cap (B \times B) $$ is partial order on $$ B $$.

<hr/>

**Soln6** 

**(a)** Suppose $$ R_1 $$ and $$ R_2 $$ are partial orders on $$ A $$. 

Suppose $$ x \in A $$. Since $$ R_1 $$ is reflexive, $$ (x,x) \in R_1 $$. Similarly since $$ R_2 $$ is reflexive, $$ (x,x) \in R_2 $$.
Thus $$ (x,x) \in R_1 \cap R_2 $$. Since $$ x $$ is arbitrary, $$ R_1 \cap R_2 $$ is <u>reflexive</u>.

Suppose $$ x,y,z $$ are arbitrary elements of $$ A $$ such that $$ (x,y) \in R_1 \cap R_2 \land (y,z) \in R_1 \cap R_2 $$. It follows
that $$ (x,y) \in R_1 \land (y,z) \in R_1 $$. Since $$ R_1 $$ is transitive, it follows $$ (x,z) \in R_1 $$. Similarly since $$ (x,y) \in R_2 \land (y,z) \in R_2 $$ 
and $$ R_2 $$ is transitive, it follows that $$ (x,z) \in R_2 $$. Thus we have $$ (x,z) \in R_1 \cap R_2 $$. Since $$ x,y,z $$ are arbitrary,
it follows that $$ R_1 \cap R_2 $$ is <u>transitive</u>.

Suppose $$ x,y $$ are arbitrary elements of $$ A $$ such that $$ (x,y) \in R_1 \cap R_2 \land (y,x) \in R_1 \cap R_2 $$. Thus $$ (x,y) \in R_1 \land (y,x) \in R_1 $$. 
Since $$ R_1 $$ is antisymmetric, it follows $$ x = y $$. Thus if $$ (x,y) \in R_1 \cap R_2 \land (y,x) \in R_1 \cap R_2 $$, then $$ x = y $$. Since $$ (x,y) $$, is 
arbitrary, we can conclude that $$ R_1 \cap R_2 $$ is <u>antisymmetric</u>.

Thus $$ R_1 \cap R_2 $$ is partial order on $$ A $$.

**(b)** False. Counter example:

$$ A = \{ 1, 2, 3 \}, R_1 = \{ (1,1), (2,2), (3,3), (1,2) \}, R_2 = \{ (1,1), (2,2), (3,3), (2,3) \} $$.

$$ R_1 \cup R_2 = \{ (1,1), (2,2), (3,3), (1,2), (2,3) \} $$.

As we can see $$ R_1 $$ and $$ R_2 $$ are partial order. But $$ R_1 \cup R_2 $$ is not partial order because it is not transitive.

<hr/>

**Soln7**

Suppose $$ R_1 $$ is partial order on $$ A_1 $$ and $$ R_2 $$ is partial order on $$ A_2 $$.

**(a)** 

<u>Reflexive:</u>

Suppose $$ x \in A_1 \cup A_2 $$. Two possible cases:
  
- Case 1: $$ x \in A_1 $$    
  Since $$ R_1 $$ is partial order, $$ (x,x) \in R_1 $$. Or we can also say $$ (x,x) \in R_1 \cup R_2 $$.
  
- Case 2: $$ x \in A_2 $$    
  Since $$ R_2 $$ is partial order, $$ (x,x) \in R_2 $$. Or we can also say $$ (x,x) \in R_1 \cup R_2 $$.
  
Thus from all cases, $$ R_1 \cup R_2 $$ is reflexive on $$ A_1 \cup A_2 $$.

<u>Transitive:<u>

Suppose $$ x,y,z $$ are arbitrary elements of $$ A_1 \cup A_2 $$ such that $$ (x,y) \in R_1 \cup R_2 \land (y,z) \in R_1 \cup R_2 $$. 
We have following possible cases:

- Case 1: $$ (x,y) \in R_1 \land (y,z) \in R_1 $$:    
  Since $$ R_1 $$ is transitive, it follows $$ (x,z) \in R_1 $$. We can also say $$ (x,z) \in R_1 cup R_2 $$.

- Case 2: $$ (x,y) \in R_2 \land (y,z) \in R_2 $$:    
  Since $$ R_2 $$ is transitive, it follows $$ (x,z) \in R_2 $$. We can also say $$ (x,z) \in R_1 cup R_2 $$.

- Case 3: $$ (x,y) \in R_1 \land (y,z) \in R_2 $$:    
- Case 4: $$ (x,y) \in R_2 \land (y,z) \in R_1 $$:    
  Both cases(3 & 4) are not possible, since both of them require $$ y \in A_1 \cap A_ 2 $$. But $$ A_1 \cap A_2 = \phi $$, so these cases
  do not exist.
  
Thus from all cases, $$ R_1 \cup R_2 $$ is transitive on $$ A_1 \cup A_2 $$.
  
<u>Antisymmetric:</u>

Suppose $$ x,y $$ are arbitrary elements of $$ A_1 \cup A_2 $$ such that $$ (x,y) \in R_1 \cup R_2 \land (y,x) \in R_1 \cup R_2 $$. 
we have following possible cases:

- Case 1: $$ (x,y) \in R_1 \land (y,x) \in R_1 $$:    
  Since $$ R_1 $$ is antisymmetric, it follows $$ x = y $$.

- Case 2: $$ (x,y) \in R_2 \land (y,x) \in R_2 $$:    
  Since $$ R_2 $$ is antisymmetric, it follows $$ x = y $$.

- Case 3: $$ (x,y) \in R_1 \land (y,x) \in R_2 $$:    
- Case 4: $$ (x,y) \in R_2 \land (y,x) \in R_1 $$:    
  Both cases(3 & 4) are not possible, since both of them require $$ y \in A_1 \cap A_ 2 $$. But $$ A_1 \cap A_2 = \phi $$, so these cases
  do not exist.

Thus from both cases, $$ R_1 \cup R_2 $$ is antisymmetric on $$ A_1 \cup A_2 $$.

As we can see now, $$ R_1 \cup R_2 $$ is reflexive, transitive and antisymmetric, it follows that $$ R_1 \cup R_2 $$ is partial order on 
$$ A_1 \cup A_2 $$.

**(b)**

<u>Reflexive:</u>

Suppose $$ x \in A_1 \cup A_2 $$. Two possible cases:
  
- Case 1: $$ x \in A_1 $$    
  Since $$ R_1 $$ is partial order, $$ (x,x) \in R_1 $$. Or we can also say $$ (x,x) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$.
  
- Case 2: $$ x \in A_2 $$    
  Since $$ R_2 $$ is partial order, $$ (x,x) \in R_2 $$. Or we can also say $$ (x,x) \in R_1 \cup R_2 \cup (A_1 \times A_2)$$.
  
Thus from all cases, $$ R_1 \cup R_2 \cup (A_1 \times A_2)$$ is reflexive on $$ A_1 \cup A_2 $$.

<u>Transitive:<u>

Suppose $$ x,y,z $$ are arbitrary elements of $$ A_1 \cup A_2 $$ such that $$ (x,y) \in (R_1 \cup R_2) \cup (A_1 \times A_2) \land (y,z) \in (R_1 \cup R_2) \cup (A_1 \times A_2) $$. 
We have following possible cases:

- Case 1: $$ (x,y) \in (R_1 \cup R_2) \land (y,z) \in (R_1 \cup R_2) $$:    
  Since $$ R_1 \cup R_2 $$ is transitive(proved in part (a)), it follows $$ (x,z) \in R_1 \cup R_2 $$. We can also say $$ (x,z) \in (R_1 \cup R_2) \cup (A_1 \times A_2) $$.

- Case 2: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in A_1 \times A_2 $$:    
  Thus $$ y \in A_1 \land y \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 
  
- Case 3: $$ (x,y) \in (R_1 \cup R_2) \land (y,z) \in A_1 \times A_2 $$:    
  Here two further cases are possible:
  - Case a: $$ (x,y) \in R_1 \land (y,z) \in A_1 \times A_2 $$:    
    Thus $$ x \in A_1 \land y \in A_1 \land z \in A_2 $$. Clearly $$ (x,z) \in A_1 \times A_2 $$. Or we can also say $$ (x,z) \in (R_1 \cup R_2) \cup (A_1 \times A_2) $$.
    
  - Case b: $$ (x,y) \in R_2 \land (y,z) \in A_1 \times A_2 $$:    
    Thus $$ y \in A_2 \land y \in A_1 $$. Clearly $$ (x,z) \in A_1 \times A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$.

- Case 4: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in (R_1 \cup R_2) $$:    
  Here two further cases are possible:
  - Case a: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in R_1 $$:    
    Thus $$ y \in A_1 \land y \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 
    
  - Case b: $$ (x,y) \in A_1 \times A_2 \land (y,z) \in R_2 $$:    
    Thus $$ x \in A_1 \land y \in A_2 \land z \in A_2 $$. Clearly $$ (x,z) \in A_1 \times A_2 $$. Or we can also say $$ (x,z) \in (R_1 \cup R_2) \cup (A_1 \times A_2) $$.
  
Thus from all cases, $$ R_1 \cup R_2 \cup (A_1 \times A_2)$$ is transitive on $$ A_1 \cup A_2 $$.
  
<u>Antisymmetric:</u>

Suppose $$ x,y $$ are arbitrary elements of $$ A_1 \cup A_2 $$ such that $$ (x,y) \in (R_1 \cup R_2) \cup (A_1 \times A_2) \land (y,x) \in (R_1 \cup R_2) \times (A_1 \cup A_2) $$. 
we have following possible cases:

- Case 1: $$ (x,y) \in R_1 \cup R_2 \land (y,x) \in R_1 \cup R_2 $$:    
    Since we know from last part that $$ R_1 \cup R_2 is antisymmetric, thus $$ x = y $$.

- Case 2: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in A_1 \times A_2 $$:    
  Thus $$ y \in A_1 \land y \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 

- Case 3: $$ (x,y) \in R_1 \cup R_2 \land (y,x) \in A_1 \times A_2 $$:    
  Here two further cases are possible:
  - Case a: $$ (x,y) \in R_1 \land (y,x) \in A_1 \times A_2 $$:    
    Thus $$ x \in A_1 \land x \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 

  - Case b: $$ (x,y) \in R_2 \land (y,x) \in A_1 \times A_2 $$:    
    Thus $$ y \in A_2 \land y \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 

- Case 4: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in R_1 \cup R_2 $$:    
  Here two further cases are possible:
  - Case a: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in R_1 $$:    
    Thus $$ y \in A_2 \land y \in A_1 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 

  - Case b: $$ (x,y) \in A_1 \times A_2 \land (y,x) \in R_2 $$:    
    Thus $$ x \in A_1 \land x \in A_2 $$. This is not possible since $$ A_1 \cap A_2 = \phi $$. 

Thus from all cases, $$ R_1 \cup R_2 \cup (A_1 \times A_2)$$ is antisymmetric on $$ A_1 \cup A_2 $$.

Thus from $$ R_1 \cup R_2 \cup (A_1 \times A_2)$$  is partial order.

**(c)**

Suppose $$ R_1 $$ and $$ R_2 $$ are total order on $$ A_1 $$ and $$ A_2 $$ respectively.

$$ R_1 \cup R_2 $$ is not total order on $$ A_1 \cup A_2 $$. Counter example: Suppose $$ x \in A_1 \land y \in A_2 $$, then $$ x,y \text{are both} \in A_1 \cup A_2 $$
but $$ (x,y) \notin R_1 $$, and also $$ (x,y) \notin R_2 $$ because $$ A_1 \cap A_2 = \phi $$.

Now suppose $$ (x,y) \in A_1 \cup A_2 $$, then we have following possible cases:

- Case 1: $$ x \in A_1 \land y \in A_1 $$:    
  Since $$ R_1 $$ is total order on $$ A_1 $$, $$ (x,y) \in R_1 $$ or $$ (y,x) \in R_1 $$. Thus we can also say $$ (x,y) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$ or $$ (y,x) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$. 

- Case 2: $$ x \in A_2 \land y \in A_2 $$:    
  Since $$ R_2 $$ is total order on $$ A_2 $$, $$ (x,y) \in R_2 $$ or $$ (y,x) \in R_2 $$. Thus we can also say $$ (x,y) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$ or $$ (y,x) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$. 

- Case 3: $$ x \in A_1 \land y \in A_2 $$:    
  Thus $$ (x,y) \in A_1 \times A_2 $$. Thus we can also say $$ (x,y) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$ or $$ (y,x) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$. 

- Case 4: $$ x \in A_2 \land y \in A_1 $$:    
  Thus $$ (y,x) \in A_1 \times A_2 $$. Thus we can also say $$ (x,y) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$ or $$ (y,x) \in R_1 \cup R_2 \cup (A_1 \times A_2) $$.
   
Thus from all the cases, we can conclude that $$ R_1 \cup R_2 \cup (A_1 \times A_2) $$ is total order.
   
<hr/>

**Soln8**

<u>Reflexive:</u>
Suppose $$ (a,b) \in A \times B $$. Since $$ R $$ is reflexive, it follows $$ (a,a) \in R $$. Similarly since $$ S $$ is reflexive, it
follows that $$ (b,b) \in S $$. Thus $$ ((a,b),(a,b)) \in T $$. Since $$ (a,b) $$ is arbitrary, it follows that $$ T $$ is reflexive.
 
<u>Transitive:</u>

Suppose $$ (a,b),(c,d),(e,f) \in A \times B $$ such that $$ ((a,b),(c,d)) \in T \land ((c,d),(e,f)) \in T $$. Since $$ ((a,b),(c,d)) \in T $$,
it follows $$ (a,c) \in R \land (c,e) \in R $$. Since $$ R $$ is transitive, $$ (a,e) \in R $$. Similarly, since $$ S $$ is transitive, and 
$$ (b,d) \in S \land (d,f) \in A $$, follows that $$ (b,f) \in S $$. Now since $$ (a,e) \in R \land (b,f) \in S $$, it follows that $$ ((a,b),(e,f)) \in T $$.
Since $$ (a,b),(c,d),(e,f) $$ is arbitrary, we can conclude that $$ T $$ is transitive.

<u>Antisymmetric:</u>

Suppose $$ (a,b),(c,d) \in A \times B $$ such that $$ ((a,b),(c,d)) \in T \land ((c,d),(a,b)) \in T $$. Thus $$ (a,c) \in R \land (c,a) \in R $$. Since $$ R $$
is antisymmetric, it follows that $$ a = c $$. Similarly since $$ (b,d) \in S \land (d,b) \in S $$ and $$ S $$ is transitive, it follows that
$$ b = d $$. Thus $$ (a,b) = (c,d) $$. Since $$ (a,b), (c,d) $$ are arbitrary, it follows that $$ T $$ is partial order.

Thus $$ T $$ is partial order.

<u>Total Order:</u>

$$ T $$ is not total order even if $$ R $$ and $$ S $$ are full order. Suppose $$ (x,y) \in R \land (y,x) \notin R $$ and $$ (a,b) \in S \land (b,a) \notin S $$. 
Then neither $$ ((y,a),(x,b)) \in T $$ and nor $$ ((x,b),(y,a)) \in T $$ is true.
 
<hr/>

**Soln9**

<u>Reflexive:</u>
Suppose $$ (a,b) \in A \times B $$. Since $$ R $$ is reflexive, it follows $$ (a,a) \in R $$. Similarly since $$ S $$ is reflexive, it
follows that $$ (b,b) \in S $$. Thus $$ ((a,b),(a,b)) \in L $$. Since $$ (a,b) $$ is arbitrary, it follows that $$ T $$ is reflexive.

<u>Transitive:</u>

Suppose $$ (a,b),(c,d),(e,f) \in A \times B $$ such that $$ ((a,b),(c,d)) \in L \land ((c,d),(e,f)) \in L $$. Since $$ ((a,b),(c,d)) \in L $$,
it follows $$ (a,c) \in R \land (c,e) \in R $$. Since $$ R $$ is transitive, $$ (a,e) \in R $$. Now we have following cases:

Case 1: $$ a = c \land c = e $$
Since  $$ ((a,b),(c,d)) \in L \land a = c $$, it follows $$ (b,d) \in S $$. Similarly since $$ ((c,d),(e,f)) \in L \land c = e $$, it follows $$ (d,f) \in S $$.
Now since $$ (a,e) \in R $$ and $$ a = e $$ and $$ (b,f) in S $$, it follows $$ ((a,b),(e,f)) \in L $$.

Case 2: $$ a = c \land c \ne e $$
Since $$ a = c \land c \ne e $$, it follows $$ a \ne e $$. Since $$ (a,e) \in R $$, it follows $$ ((a,b),(e,f)) \in L $$.

Case 3: $$ a \ne c \land c = e $$
Since $$ a \ne c \land c = e $$, it follows $$ a \ne e $$. Since $$ (a,e) \in R $$, it follows $$ ((a,b),(e,f)) \in L $$.

Case 4: $$ a \ne c \land c \ne e $$
Since $$ a \ne c \land c \ne e $$, it may be either $$ a = e $$, or $$ a \ne e $$. Suppose $$ a = e $$, then since $$ (c,e) \in R $$, it follows $$ (c,a) \in R $$.
Thus $$ (a,c) \in R \land (c,a) \in R $$ and $$ R $$ is antisymmetric, it follows $$ a = c $$. But we have $$ a \ne c $$. Thus our assumption $$ a = e $$ is not correct.
Or $$ a \ne e $$. Now since $$ (a,e) \in R \land a \ne e $$, it follows $$ ((a,b),(e,f)) \in L $$.

Thus from all cases $$ L $$ is transitive.

<u>Antisymmetric:</u>

Suppose $$ (a,b),(c,d) \in A \times B $$ such that $$ ((a,b),(c,d)) \in L \land ((c,d),(a,b)) \in L $$. Since $$ ((a,b),(c,d)) \in L $$,
it follows $$ (a,c) \in R $$. Similarly since $$ ((c,d),(a,b)) \in L $$, it follows $$ (c,a) \in R $$. Since $$ (a,c) \in R \land (c,a) \in R $$
and $$ R $$ is antisymmetric, it follows $$ a = c $$. Since $$ a = c $$ and $$ ((a,b),(c,d)) \in L $$, it follows $$ (b,d) \in S $$. Also,
since $$ ((c,d),(a,b)) \in L $$ and $$ a = c $$, it follows $$ (d,b) \in S $$. Since $$ S $$ is antisymmetric, it follows $$ b = d $$. Thus 
$$ a = c \land b = d $$, or we can say $$ (a,b) = (c,d) $$. Thus $$ L $$ is antisymmetric.

Thus $$ L $$ is partial order.

<u>Total Order:</u>

Suppose $$ R $$ and $$ S $$ are total orders.

Now suppose $$ (x,y),(a,b) $$ are in  $$ A \times B $$. Thus $$ a $$ and $$ x $$ are in $$ A $$ and $$ y $$ and $$ b $$ are in $$ B $$.
Since $$ R $$ is total order on $$ A $$ and $$ S $$ is total order on $$ B $$. Thus we have $$ (x,a) \in R \lor (a,x) \in R $$ and 
$$ (y,b) \in S \lor (b,y) \in S $$. Thus we have following cases:
 
- Case 1: $$ (x,a) \in R \land (y,b) \in S $$.
    - Case a: $$ x = a $$    
    Thus $$ ((x,y),(a,b)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.
    - Case b: $$ x \ne a $$    
    Thus $$ ((x,y),(a,b)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

- Case 2: $$ (x,a) \in R \land (b,y) \in S $$.
    - Case a: $$ x = a $$    
    Since $$ x = a $$, if follows $$ (a,x) \in R $$. Thus $$ ((a,b),(x,y)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

    - Case b: $$ x \ne a $$    
    Thus $$ ((x,y),(a,b)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

- Case 3: $$ (a,x) \in R \land (y,b) \in S $$.
    - Case a: $$ x = a $$    
    Since $$ x = a $$, if follows $$ (x,a) \in R $$. Thus $$ ((x,y),(a,b)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

    - Case b: $$ x \ne a $$    
    Thus $$ ((a,b),(x,y)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

- Case 4: $$ (a,x) \in R \land (b,y) \in S $$.
    - Case a: $$ x = a $$    
    Thus $$ ((a,b),(x,y)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

    - Case b: $$ x \ne a $$    
    Thus $$ ((a,b),(x,y)) \in L $$. We can also say $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$.

Thus from all the cases, $$ ((x,y),(a,b)) \in L \lor ((a,b),(x,y)) \in L $$. Since $$ (x,y),(a,b) $$ are arbitrary, we can conclude that
$$ L $$ is total order.

<hr/>

**Soln10**

Suppose $$ x,y $$ are arbitrary elements of $$ A $$.

($$ \to $$) Suppose $$ xRy $$. Suppose $$ a \in P_x $$. Since $$ a \in P_x $$, it follows $$ aRx $$.
 Since $$ aRx $$ and $$ xRy $$ and $$ R $$ is partial order, it follows $$ aRy $$. Thus $$ a \in P_y $$. Since $$ a $$ is arbitrary,
 it follows that $$ P_x \subseteq P_y $$.
  
($$ \leftarrow $$)Suppose $$ P_x \subseteq P_y $$. Since $$ R $$ is partial order, xRx. Thus $$ x \in P_x $$. Since $$ P_x \subseteq P_y $$, it follows
$$ x \in P_y $$, thus $$ xRy $$.

Since $$ x $$ and $$ y $$ are arbitrary elements, we can conclude that $$ \forall x \in A \forall y \in A (xRy \leftrightarrow P_x \subseteq P_y) $$.
 
<hr/>

**Soln11**

Minimal elements: $$ \{ x \in B \, \vert \, x \text{ is prime} \} $$.
Smallest element: N.A.

<hr/>

**Soln12**

We shall prove this by contradiction. Suppose $$ \mathcal F = \{X \subseteq \mathbb R \, | \, X \ne \phi \; and \; \forall x \forall y((x \in X \land x < y) \to y \in X)\} $$ has a 
minimal element, say $$ M $$. Thus $$ \forall x \forall y((x \in M \land x < y) \to y \in M) $$. Also since $$ M $$ is minimal, it follows $$ \lnot \exists X \in F (X \subseteq M )$$. 
Since $$ X \ne \phi $$, suppose $$ x_0 $$ is an element in $$ M $$. Then $$ M $$ contains all elements of set $$ \forall y(x_0 < y) $$. Now consider the set $$ N = \{ y \in \mathbb R \, \vert \, x_0 < y \} $$. 
Clearly $$ N \in \mathcal F $$. Also all the elements that exist in $$ N $$ are greater than $$ x_0 $$, thus $$ N \subseteq M $$. Also, since $$ x_0 \in M \land x_0 \notin N $$, $$ M \ne N $$.
Thus $$ N \in \mathcal F \land N \subseteq M $$. But it contradicts our assumption that $$ \lnot \exists X \in F (X \subseteq M )$$. Thus we can conclude that there does not exist
any minimal element in $$ \mathcal F $$.

<hr/>

**Soln13**

Suppose $$ R $$ is partial order on $$ A $$.

<u>Reflexive:</u>

Suppose $$ x \in A $$. Since $$ R $$ is partial order, $$ (x,x) \in R $$. Thus $$ (x,x) \in R^{-1} $$. Since $$ x $$ is arbitrary, we can conclude that $$ R^{-1} $$
is reflexive.

<u>Transitive:</u>

Suppose $$ x, y, z $$ are arbitrary elements of $$ A $$ such that $$ (x,y) \in R^{-1} \land (y,z) \in R^{-1} $$. It follows that $$ (y,x) \in R \land (z,y) \in R $$.
 Since $$ R $$ is transitive, it follows that $$ (z,x) \in R $$. Thus $$ (x,z) in R^{-1} $$. Since $$ x,y,z $$ are arbitrary, we can conclude the $$ R^{-1} $$ is transitive.
 
<u>Antisymmetric:</u>

Suppose $$ x, y  $$ are arbitrary elements of $$ A $$ such that $$ (x,y) \in R^{-1} \land (y,x) \in R^{-1} $$. It follows that $$ (y,x) \in R \land (x,y) \in R $$.
Since $$ R $$ is antisymmetric, it follows that $$  y = x $$. Since $$ x,y $$ are arbitrary, we can conclude the $$ R^{-1} $$ is antisymmetric.

Thus $$ R $$ is reflexive, transitive and antisymmetric, we can conclude that $$ R $$ is partial order.

<u>Total Order:</u>

Suppose $$ R $$ is total order. Suppose $$ x,y $$ are arbitrary elements of $$ A $$. Since $$ R $$ is total order we have two possible cases:

- Case 1: $$ (x,y) \in R $$.    
    Thus $$ (y,x) \in R^{-1} $$. We can also say that $$ (x,y) \in R^{-1} \lor (y,x) \in R^{-1} $$.
     
- Case 2: $$ (y,x) \in R $$.    
    Thus $$ (x,y) \in R^{-1} $$. We can also say that $$ (x,y) \in R^{-1} \lor (y,x) \in R^{-1} $$.
    
Since $$ x,y $$ are arbitrary, we can conclude that $$ R^{-1} $$ is total order.

<hr/>

**Soln14**

**(a)** 

Suppose $$ b $$ is the $$R$$-largest element of $$ B $$, iff    
$$ \forall x \in B(xRb) $$ iff    
$$ \forall x \in B((x,b) \in R)) $$ iff    
$$ \forall x \in B((b,x) \in R^{-1}) $$ iff    
$$ \forall x \in B(b R^{-1} x) $$ iff    
$$ x $$ is the $$R^{-1}$$-smallest element of $$ B $$.

**(b)**

Suppose $$ b $$ is the $$R$$-maximal element of $$ B $$. iff    
$$ \lnot \exists x \in B(bRx \land b \ne x) $$. iff      
$$ \lnot \exists x \in B(x R^{-1} b \land b \ne x) $$. iff     
$$ x $$ is the $$R^{-1}$$-minimal element of $$ B $$.

<hr/>

**Soln15**

**(a)**

Suppose $$ b $$ is the $$R_11$$-smallest element of $$ B $$. Suppose $$ x $$ is arbitrary element in $$ B $$. Since $$ b $$ is $$R_1$$-smallest element in $$ B $$,
it follows that $$ (b,x) \in R_1 $$. Since $$ R_1 \subseteq R_2 $$, it follows $$ (b,x) \in R_2 $$. Since $$ x $$ is arbitrary, it follows $$ \forall x \in B(b R_2 x) $$.
Thus $$ b $$ is also the $$R_2$$-smallest element of $$ B $$.

**(b)**

Suppose $$ b $$ is an $$R_2$$-minimal element of $$ B $$. Suppose $$ x $$ is arbitrary element in $$ B $$ such that $$ x \ne b $$. Then $$ (x,b) \notin R_2 $$. Since
$$ R_1 \subseteq R_2 $$, it follows that such element $$ (b,x) $$ must also not exist in $$ R_1 $$. Thus $$ \lnot \exists x \in B(x R_1 b \land x != b $$. It follows
that $$ b $$ is the $$ R_1$$-minimal element of $$ B $$.

<hr/>

**Soln16**

Suppose $$ b $$ is the $$R$$-largest element of $$ B $$. Suppose $$ b $$ is not a maximal element of $$ B $$. Thus there exist an element $$ x \in B $$ such 
that $$ bRx $$. But it contradicts with the given that $$ b $$ is the largest element of $$ B $$. Thus assumption $$ b $$ is not a maximal element is not correct.
Hence, $$ b $$ is a maximal element of $$ B $$.

Suppose $$ c $$ is also a maximal element of $$ B $$. Thus $$ \lnot \exists x \in B(cRx \land c \ne x) $$, or $$ \forall x \in B(cRx \to c = x) $$. Also since 
$$ b $$ is largest element of $$ B $$, $$ cRb $$. Thus $$ c = b $$. Thus we can conclude that $$ b $$ is the only maximal element.
 
<hr/>

**Soln17** (Using the hint from book as not able to do it myself).

False. Counter example:

Suppose $$ A = \mathbb R \times \mathbb R $$, and let $$ R = \{((x, y), (x', y')) \in A \times A \, \vert \, x \le x' and y \le y' \} $$.

This can be proved directly using excercise - 8 that it is partial order. 
 
Now, suppose $$ B = \{ (0, 0) \} \cup (\{1\} \times \mathbb R) $$.
 
Thus, $$ R $$ contains elements like .... $$ ((1,-3),(1,0))$$, $$((1,-2),(1,0))$$, $$((1,-1),(1,0))$$, $$((1,0),(1,0))$$, $$((0,0),(0,0))$$, $$((0,0),(1,0))$$, $$((0,0),(1,1))$$,
 $$((0,0),(1,2))$$, $$((0,0),(1,3))$$, $$((0,0),(1,3))$$,.....     

Thus it can be noticed here, how might this example is developed. $$ B $$ got created in such a way that $$ R $$ looks like it will contain two minimals but
because other minimal moves towards infinity, we only get one defined minimal. There is no element such that $$ x R (0,0) $$ is defined, so $$ (0,0) $$
is the only minimal.

Now since elements like $$ ((0,0),(1,-1)), ((0,0),(1,-2)), ((0,0),(1,-3)) $$ .... are not present in $$ R $$(which can be seen that it is because of the particular choice of B), 
$$ (0,0) $$ is not the smallest element as an element $$ s $$ is smallest iff $$ \forall x \in B(s R x) $$. Thus in our example, this is not the case that for
all values, say $$ (x,y) $$, of $$ B $$, $$ (0,0) R (x,y) $$.

<hr/>

**Soln18** 

**(a)**

($$ \to $$)Suppose $$ x $$ is upper bound on $$ B_1 $$. Suppose $$ b_2 $$ is arbitrary element of $$ B_2 $$. Since it is given that $$ \forall x \in B_2 \exists y \in B_1(x R y) $$,
if suppose for $$ m \in B_1 $$, we have $$ \forall x \in B_2 (x R m) $$. Since $$ b_2 \in B_2 $$, it follows $$ b_2 R m $$. But since $$ x $$ is upper bound for
 $$ B_1 $$ and $$ m \in B_1 $$, it follows $$ (m R x ) $$. Since $$ R $$ is partial order on $$ A $$ and $$ (b_2 R m) \land (m R x) $$, it follows $$ b_2 R x $$. Since $$ b_2 $$ is
 arbitrary element of $$ B_2 $$, it follows that $$ x $$ is upper bound for $$ B_2 $$.
 
($$ \leftarrow $$)Suppose $$ x $$ is upper bound on $$ B_2 $$. Suppose $$ b_1 $$ is arbitrary element of $$ B_1 $$. Since it is given that $$ \forall x \in B_1 \exists y \in B_2(x R y) $$,
if suppose for $$ m \in B_2 $$, we have $$ \forall x \in B_1 (x R m) $$. Since $$ b_1 \in B_1 $$, it follows $$ b_1 R m $$. But since $$ x $$ is upper bound for
$$ B_2 $$ and $$ m \in B_2 $$, it follows $$ (m R x ) $$. Since $$ R $$ is partial order on $$ A $$ and $$ (b_1 R m) \land (m R x) $$, it follows $$ b_1 R x $$. Since $$ b_1 $$ is
arbitrary element of $$ B_1 $$, it follows that $$ x $$ is upper bound for $$ B_1 $$.

**(b)**

We will prove this by contra-positive. Suppose $$ m $$ is a maximal element of $$ B_1 $$. Similarly, suppose $$ n $$ is a maximal element of $$ B_2 $$.    

Since it is given that $$ \forall x \in B_1 \exists y \in B_2(x R y) $$, suppose for the value $$ b_2 \in B_2 $$, we have $$ \forall x \in B_1 (x R b_2) $$. Similarly, since it is given 
that $$ \forall x \in B_2 \exists y \in B_1(x R y) $$, suppose for the value $$ b_1 \in B_2 $$, we have $$ \forall x \in B_2 (x R b_1) $$. 
Now since $$ b_1 \in B_1 $$ and $$ \forall x \in B_1 (x R b_2) $$, it follows that $$ b_1 R b_2 $$. Similarly, since $$ b_2 \in B_2 $$ and $$ \forall x \in B_2 (x R b_1) $$, it follows that $$ b_2 R b_1 $$.
Thus $$ b_1 R b_2 \land b_2 R b_1 $$ and since $$ R $$ is partial order, it follows that $$ b_1 = b_2 $$. 

Since $$ m $$ is a maximal element of $$ B_1 $$, it follows $$ b_1 R m $$. Also since  $$ \forall x \in B_1 (x R b_2) $$, it follows, $$ m R b_2 $$. Since $$ b_2 = b_1 $$, it follows $$ m R b_1 $$.
But $$ m $$ is a maximal element of $$ B_1 $$, thus $$ m = b_1 = b_2 $$.

Since $$ n $$ is a maximal element of $$ B_2 $$, it follows $$ b_2 R n $$. Also since  $$ \forall x \in B_2 (x R b_1) $$, it follows, $$ n R b_1 $$. Since $$ b_2 = b_1 $$, it follows $$ n R b_2 $$.
But $$ n $$ is a maximal element of $$ B_2 $$, thus $$ n = b_2 = b_1 $$.

Thus $$ m = n = b_1 = b_2 $$. Thus $$ B_1 $$ and $$ B_2 $$ are not disjoint. Thus by contra-positive, if $$ B_1 $$ and $$ B_2 $$ are disjoint, then there is 
no element $$ b_1 \in B_1 $$ and $$ b_2 \in B_2 $$ such that $$ b_1 = b_2 $$. And if there is no such element, then $$ B_1 $$ and $$ B_2 $$ does not have a maximal element.

Note: I am not confident of this proof. As from the givens it can be easily seen that $$ B_1 $$ and $$ B_2 $$ are not disjoint. Or the other cases might be that
$$ B_1 $$ and $$ B_2 $$ are empty.

<hr/>

**Soln19**

**(a)** The proof is not correct. The problem with the proof is conclusion in both cases are wrong i.e.:

- Case 1: $$ bRx $$. Since $$ x $$ was arbitrary, we can conclude that $$ \forall x \in B(bRx) $$, so $$ b $$ is the smallest element of $$ R $$.

Here the conclusion is wrong, because $$ bRx $$ is not true for all values of $$ x $$. it does not consider the other case, $$ xRb $$. Similarly, in
the other case $$ xRb $$, we can not conclude that $$ xRb $$ is true for all $$ x $$ because it does not consider the case when $$ bRx $$.

**(b)** Theorem is not correct. Counter example:
 
$$ A = \{1,2,3\}, B = \{1,2,3\}, R = \{(1,1),(2,2),(3,3),(1,2),(1,3),(2,3)\} $$. Clearly $$ B \subseteq A $$ and $$ R $$ is partial order on $$ A $$.
Note that $$ 2 \in B $$ but $$ 2 $$ is niether $$R$$-largest element of $$B$$ nor the $$R$$-smallest element of $$ B $$.
 
<hr/>

**Soln20**

**(a)** Suppose $$ b $$ is smallest element of $$ B $$. Thus $$ \forall x \in B(bRx) $$. Thus the set of all lower bound elements of $$ B $$ is $$ \forall x \in A(xRb) $$
Since $$ B \subseteq A $$, $$ b \in A $$, and clearly in the set $$ \forall x \in A(xRb) $$, $$ b $$ is the greatest element. Thus $$ b $$ is the greatest lower
bound element of $$ B $$.

**(b)** Suppose $$ b $$ is largest element of $$ B $$. Thus $$ \forall x \in B(xRb) $$. Thus the set of all upper bound elements of $$ B $$ is $$ \forall x \in A(bRx) $$
Since $$ B \subseteq A $$, $$ b \in A $$, and clearly in the set $$ \forall x \in A(xRb) $$, $$ b $$ is the least element. Thus $$ b $$ is the least upper 
bound element of $$ B $$.

<hr/>

**Soln21**

**(a)** Suppose $$ U $$ is the set of upper bound elements of $$ B $$. Suppose $$ x \in U $$ and suppose $$ y \in A $$ such that $$ xRy $$. Since $$ x \in U $$,
 it follows that $$ \forall b \in B(bRx) $$. Thus for any arbitrary element $$ b \in B $$, $$ bRx $$. Since $$ bRx \land xRy $$, and $$ R $$ is partial order,
 it follows $$ bRy $$. Since $$ b $$ is arbitrary, it follows $$ \forall b \in B(bRy) $$. Thus $$ y $$ is upper bound of $$ B $$, or $$ y \in U $$.
 
**(b)** Suppose $$ x $$ is an arbitrary element of $$ B $$. Suppose $$ y \in U $$. Since $$ U $$ is the set of upper bound of $$ B $$, it follows that
 $$ xRy $$. Since $$ y $$ is arbitrary, it follows $$ \forall y \in U(xRy) $$. Since $$ x \in A $$(because $$ B \subseteq A $$) and $$ \forall y \in U(xRy) $$, it follows $$ x $$ is a lower 
 bound of $$ U $$. Since $$ x $$ is arbitrary, it follows every element of $$ B $$ is lower bound element of $$ U $$.
 
**(c)** Suppose $$ x $$ is the greatest lower bound of $$ U $$. Suppose $$ y $$ is an arbitrary element of $$ B $$. Then from part (b), $$ y $$ is lower
   bound for $$ U $$. Since $$ x $$ is greatest lower bound of $$ U $$, it follows $$ yRx $$. Since $$ y $$ is arbitrary, it follows that $$ \forall y \in B(yRx) $$.
   Thus $$ x $$ is upper bound of $$ B $$. Thus $$ x \in U $$. Since $$ x $$ is lower bound of $$ U $$, it follows $$ \forall y \in U(xRy) $$. Thus $$ x $$
   is the lowest element in $$ U $$. Since $$ U $$ is the set of all upper bounds of $$ B $$, it follows that $$ x $$ is least upper bound of $$ B $$.
    
<hr/>

**Soln22**

Suppose $$ B_1 \subseteq B_2 $$. Since $$ B_1 \subseteq B_2 $$, $$ x_2 $$ is also the upper bound of $$ B_1 $$. But since $$ x_1 $$ is the **least** upper bound of $$ B_1 $$, it must be smaller than all other upper
bounds of $$ B_1 $$. Thus $$ x_1 R x_2 $$.

<hr/>

**Soln23**

- Proof of  $$ \cup \mathcal F $$ is l.u.b. of $$ \mathcal F $$:
  
Suppose $$ X \in \mathcal F $$. Suppose $$ x \in X $$. Since $$ \forall X \in \mathcal F(x \in X \to x \in \cup \mathcal F) $$, it follows that $$ x \in \cup \mathcal F $$. 
Since $$ x $$ is arbitrary, it follows $$ X \subseteq \cup \mathcal F $$. Since $$ X $$ is arbitrary, it follows that $$ \forall X \in \mathcal F(X \subseteq \cup \mathcal F) $$, 
or $$ \cup \mathcal F $$ is the largest subset element of $$ \mathcal F $$. Thus all the upper bounds of $$ \mathcal F $$ must be larger than $$ \cup \mathcal F $$.
Thus $$ \cup \mathcal F $$ is the smallest element in all the uppper bounds of $$ \mathcal F $$. Thus $$ \cup \mathcal F $$ is the least upper bound of $$ \mathcal F $$.

- Proof of  $$ \cap \mathcal F $$ is g.l.b. of $$ \mathcal F $$:

Suppose $$ X \in \mathcal F $$. Suppose $$ x \in \cap \mathcal F $$. Then $$ \forall X \in \mathcal F(x \in X) $$. Thus if $$ x \in \cap \mathcal F $$, then $$ x \in X $$. 
Since $$ x $$ is arbitrary $$ \cap \mathcal F \subseteq X $$. Since $$ X $$ is arbitrary, it follows that $$ \forall X \in \mathcal F (\cap \mathcal F \subseteq X) $$. Thus
 $$ \cap \mathcal F $$ is the smallest element(wrt subset relation) in $$ \mathcal F $$. Thus all the lower bounds of $$ \mathcal F $$ must be lesser than $$ \cap \mathcal F $$.
 Thus $$ \cap \mathcal F $$ is the largest element in all the lower bounds of $$ \mathcal F $$. Thus $$ \cap \mathcal F $$ is the greatest lower bound of $$ \mathcal F $$.
 
<hr/>











