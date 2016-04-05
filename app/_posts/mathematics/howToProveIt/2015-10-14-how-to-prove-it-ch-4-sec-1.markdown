---
layout: blog
title:  "How To Prove It, Ch-4 Sec-4.1, Ordered Pairs and Cartesian Products"
description:  "Inchmeal - Velleman's How To Prove It Solutions, Ch-4 Sec-4.1, Ordered Pairs and Cartesian Products"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 4, Section - 4.1, Ordered Pairs and Cartesian Products from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

- Ordered Pair:     
  - Lets take an example. Suppose $$ P(x,y) $$ means "x is capital city of country y". The pair $$ (x,y) $$ is considered as an ordered pair since 
  $$ (x,y) \ne (y,x) $$.
  - In an ordered pair $$ (a,b) $$, $$ a $$ is called first coordinate and $$ b $$ is called second coordinate.
- Cartesian Product:    
  Suppose $$ A $$ and $$ B $$ are sets. Then the Cartesian product of $$ A $$ and $$ B $$, denoted $$ A \times B $$, is the set of all ordered 
  pairs in which the first coordinate is an element of A and the second is an element of B. In other words,    
    $$ A \times B = \{(a, b) \vert a \in A \land b \in B \} $$.
- Suppose $$A, B, C$$ and $$ D $$ are sets, then:
  - $$ A \times (B \cap C) = (A \times B) \cap (A \times C) $$.
  - $$ A \times (B \cup C) = (A \times B) \cup (A \times C) $$.
  - $$ (A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D) $$.
  - $$ (A \times B) \cup (C \times D) \subseteq (A \cup C) \times (B \cup D) $$.
  - $$ A \times \phi = \phi \times A = \phi $$.
- Suppose $$ A $$ and $$ B $$ are sets. Then $$ A \times B $$ = $$ B \times A $$ iff either $$ A = ∅, B = ∅,$$ or $$A = B$$.
- Truth set of a statement:    
  Suppose $$ P(x, y) $$ is a statement with two free variables in which $$ x $$ ranges over a set $$ A $$ and $$ y $$ ranges over another set $$ B $$. 
  Then $$ A \times B $$ is the set of all assignments to $$ x $$ and $$ y $$ that make sense in the statement $$ P(x, y) $$. The truth set of $$ P(x, y) $$ 
  is the subset of $$ A \times B $$ consisting of those assignments that make the statement come out true. Thus,         
  truth set of $$ P(x, y) = \{(a, b) \in A \times B \vert P(a, b) \} $$
<hr/>

**Soln1** 

**(a)** $$ \{(x,y) \; \vert P \; \times P \; \vert \; \text{x is a parent of y} \} $$

**(b)** $$ \{(x,y) \; \vert \; C \times U \; \vert \; \text{Someone lives in x and attends y} \} $$

<hr/>

**Soln2**

**(a)** $$ \{(x,y) \vert P \times C \; \vert \; \text{x lives in y} \} $$.

**(b)** $$ \{(x,y) \; \vert \; C \times \mathbb N \; \vert \; \text{x is the population of y} \} $$.

<hr/>

**Soln3**

It requires plotting points in the plane. So leaving it :)

<hr/>

**Soln4**

$$ A = \{1,2,3 \}$$, $$B = \{1,4\}$$, $$C = \{3,4\}$$, and $$ D = \{5\} $$

$$ B \cap C = \{ 4 \} $$.    
$$ B \cup C = \{ 1, 3, 4 \} $$.    

$$ A \cap C = \{ 3 \} $$.    
$$ A \cup C = \{ 1, 2, 3, 4 \} $$.    

$$ B \cap D = \phi $$.    
$$ B \cup D = \{ 1, 4, 5 \} $$.    

$$ A \times B = \{ \{1,1\}, \{1,4\}, \{2,1\}, \{2,4\}, \{3,1\}, \{3,4\} \} $$.    
$$ A \times C = \{ \{1,3\}, \{1,4\}, \{2,3\}, \{2,4\}, \{3,3\}, \{3,4\} \} $$.    
$$ C \times D = \{ \{3,5\}, \{4,5\}\} $$.    

**(a)**

$$ A \times (B \cap C) = \{ \{1, 4\}, \{2, 4\}, \{3, 4\} \} $$    
$$ (A \times B) \cap (A \times C) = \{ \{1, 4\}, \{2, 4\}, \{3, 4\} \} $$

Thus, $$ A \times (B \cap C) = (A \times B) \cap (A \times C) $$.

**(b)**

$$ A \times (B \cup C) = \{ \{1, 1\}, \{1, 3\}, \{1, 4\}, \{2, 1\}, \{2, 3\}, \{2, 4\}, \{3, 1\}, \{3, 3\}, \{3, 4\} \}$$    
$$ (A \times B) \cup (A \times C) = \{  \{1, 1\}, \{1, 3\}, \{1, 4\}, \{2, 1\}, \{2, 3\}, \{2, 4\}, \{3, 1\}, \{3, 3\}, \{3, 4\} \} $$.    

Thus, $$ A \times (B \cup C) = (A \times B) \cup (A \times C) $$

**(c)**

$$ (A \times B) \cap (C \times D) = \phi $$    
$$ (A \cap C) \times (B \cap D) = (A \cap C) \times \phi = \phi $$    

Thus, $$ (A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D) $$.

**(d)**

$$ (A \times B) \cup (C \times D) = \{ \{1,1\}, \{1,4\}, \{2,1\}, \{2,4\}, \{3,1\}, \{3,4\}, \{3,5\}, \{4,5\} \} $$    
$$ (A \cup C) \times (B \cup D) = \{ \{1, 1\}, \{1, 4\}, \{1, 5\}, \{2, 1\}, \{2, 4\}, \{2, 5\}, \{3, 1\}, \{3, 4\}, \{3, 5\}, \{4, 1\}, \{4, 4\}, \{4, 5\} \}$$

Thus, $$ (A \times B) \cup (C \times D) \subseteq (A \cup C) \times (B \cup D) $$

**(e)** $$ A \times \phi = \phi $$ and $$ \phi \times A = \phi $$, thus $$ A \times \phi = \phi \times A = \phi $$.

<hr/>

**Soln5**

**Proof for: $$ A \times (B \cup C) \, = \, (A \times B) \cup (A \times C) $$**     

($$ \to $$)Let $$ p $$ be an arbitrary element of $$ A \times (B \cap C) $$. Thus $$ p = (x,y) $$ is an ordered pair with in first coordinate $$ x \in A $$ and 
second coordinate in $$ y \in (B \cap C) $$. Thus $$ y $$ can be either in $$ B $$ or in $$ C $$. Thus we have following cases:
 
- Case 1: $$ x \in A \land y \in B $$:    
  Thus we can say that $$ p = (x,y) \in (A \times B) $$. It follows that $$ p \in (A \times B) \cup (A \times C) $$.
   
- Case 2: $$ x \in A \land y \in C $$:    
  Thus we can say that $$ p = (x,y) \in (A \times C) $$. It follows that $$ p \in (A \times B) \cup (A \times C) $$.

Thus from both cases, if $$ p \in A \times (B \cup C) $$, then $$ p \in (A \times B) \cup (A \times C) $$.

($$ \leftarrow $$)Suppose $$ p = (x,y) \in (A \times B) \cup (A \times C) $$. Thus we have two cases:
 
- Case 1: $$ p \in (A \times C) $$:    
  Thus $$ x \in A $$ and $$ y \in C $$. Since $$ y \in C $$, it follows that $$ y \in B \cup C $$. Now since $$ x \in A $$ and $$ y \in B \cup C $$,
  it follows that $$ p \in A \times (B \cup C) $$.
  
- Case 2: $$ p \in (A \times B) $$:    
  Thus $$ x \in A $$ and $$ y \in B $$. Since $$ y \in B $$, it follows that $$ y \in B \cup C $$. Now since $$ x \in A $$ and $$ y \in B \cup C $$,
  it follows that $$ p \in A \times (B \cup C) $$.
  
Thus from both cases, if $$ p \in (A \times B) \cup (A \times C) $$, then $$ p \in A \times (B \cup C) $$.
  
Thus from both directions $$ A \times (B \cup C) \; = \; (A \times B) \cup (A \times C) $$.

**Proof for: $$ (A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D) $$**    

($$ \to $$)Let $$ p = (x,y) $$ be an arbitrary element of $$ (A \times B) \cap (C \times D) $$. Thus $$ (x,y) \in (A \times B) $$ and $$ (x,y) \in (C \times D) $$.
It follows that $$ x \in A \land x \in C $$, or $$ x \in A \cap C $$. Similarly, since $$ y \in B \land y \in D $$, it follows $$ y \in B \cap D $$. Thus
$$ (x,y) \in (A \cap C) \times (B \cap D) $$.

($$ \leftarrow $$)Let $$ p = (x,y) $$ be an arbitrary element of $$ (A \cap C) \times (B \cap D) $$. Thus $$ x \in A \land y \in B $$, it follows that
$$ (x,y) \in A \times B $$. Similarly, since $$ x \in C \land y \in D $$, it follows that $$ (x,y) \in (C \times D) $$. Thus we have $$ p = (x,y) in (A \times B) \cap (C \times D) $$.

Thus from both directions we have $$ (A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D) $$.

<hr/>

**Soln6**

It does not cover all the possible cases. Following cases are missed:

- Case 1: $$ x \in A \land y \in D $$.
- Case 2: $$ x \in C \land y \in B $$.

<hr/>

**Soln7** $$ m \times n $$.

<hr/>

**Soln8**

Theorem is correct.

A×(B\C) = (A×B)\(A×C)

($$ \to $$)Suppose $$ p=(x,y) \in A \times (B \setminus C) $$. Thus $$ x \in A $$ and $$ y \in B \land y \notin C $$. It follows that $$ (x,y) \in A \times B $$,
but $$ (x,y) \notin A \times C $$. Thus $$ (x,y) \in (A \times B) \setminus (A \times C) $$.

($$ \leftarrow $$)Suppose $$ p=(x,y) \in (A \times B) \setminus (A \times C) $$. Thus $$ (x,y) \in A \times B $$ and $$ (x,y) \notin A \times C $$.
Since $$ x \in A $$ and $$ (x,y) \notin A \times C $$, it follows that $$ y \notin C $$. Thus $$ x \in A $$ and $$ y \in B \land y notin C$$ , or 
$$ y \in B \setminus C $$. Thus we have $$ (x,y) \in A \times (B \times C) $$.

Since $$ p=(x,y) $$ is arbitrary, we can conclude that $$ A \times (B \setminus C) = (A \times B) \setminus (A \times C) $$.

<hr/>

**Soln9**

($$ \to $$)Suppose $$ p=(x,y) \in (A \times B) \setminus (C \times D) $$. Thus $$ (x,y) \in (A \times B) $$ and $$ (x,y) \notin (C \times D) $$.
Since $$ (x,y) \in (A \times B) $$, it follows that $$ x \in A $$ and $$ y \in B $$. Since $$ (x,y) \notin (C \times D) $$, we can have following 
possible cases:
 
- Case 1: $$ x \notin C $$:    
 Since $$ x \in A $$ and $$ y \in B $$, it follows that $$ (x,y) \in (A \setminus C) \times B $$. Thus $$ (x,y) \in [((A \setminus C) \times B) \cup (A \times (B \setminus D))] $$.
 
- Case 2: $$ y \notin D $$:    
 Since $$ x \in A $$ and $$ y \in B $$, it follows that $$ (x,y) \in A \times (B \setminus D) $$. Thus $$ (x,y) \in [((A \setminus C) \times B) \cup (A \times (B \setminus D))] $$.

Thus from both cases, $$ p=(x,y) \in [((A \setminus C) \times B) \cup (A \times (B \setminus D))] $$.

($$ \leftarrow $$)Suppose $$ p=(x,y) \in [((A \setminus C) \times B) \cup (A \times (B \setminus D))] $$. Thus we have following cases:
 
- Case 1: $$ (x,y) \in ((A \setminus C) \times B) $$.    
  Here since $$ x \in A $$ and $$ y \in B $$, it follows that $$ (x,y) \in A \times B $$. Also since $$ x \notin C $$, it follows that $$ (x,y) \notin C \times D $$.
  Thus we have, $$ (x,y) \in A \times B $$ and $$ (x,y) \notin C \times D $$. It follows that $$ (x,y) \in (A \times B) \setminus (C \times D) $$.
   
- Case 2: $$ (x,y) \in (A \times (B \setminus D) $$.    
  Here since $$ x \in A $$ and $$ y \in B $$, it follows that $$ (x,y) \in A \times B $$. Also since $$ y \notin D $$, it follows that $$ (x,y) \notin C \times D $$.
  Thus we have, $$ (x,y) \in A \times B $$ and $$ (x,y) \notin C \times D $$. It follows that $$ (x,y) \in (A \times B) \setminus (C \times D) $$.

Thus from both cases, $$ p=(x,y) \in (A \times B) \setminus (C \times D) $$.

Thus from both directions, we have $$ (A \times B) \setminus (C \times D) = [((A \setminus C) \times B) \cup (A \times (B \setminus D))] $$.

<hr/>

**Soln10**

Suppose $$ A \times B \cap C \times D = \phi $$. Suppose $$ (x,y) \in A \times B $$. It follows that $$ (x,y) \notin C \times D $$. Thus there are following
cases:

- Case 1: $$ x \notin C $$:    
 Since $$ x \in A $$, it follows that $$ A \cap C = \phi $$. 
 
- Case 2: $$ y \notin D $$:
 Since $$ y \in B $$, it follows that $$ B \cap D = \phi $$.

Thus either $$ A \cap C = \phi $$, or $$ B \cap D = \phi $$.

<hr/>

**Soln11**

**(a)** 

Suppose $$ (x,y) \in \cup_{i \in I}(A_i \times B_i) $$. Thus there atleast exists an $$ p \in I $$ such that $$ (x,y) \in (A_p \times B_p) $$. Thus $$ x \in A_p $$
and $$ y \in B_p $$. Since $$ x \in A_p $$, it follows $$ x \in \cup_{i \in I}A_i $$. Similarly, since $$ y \in B_p $$, it follows $$ y \in \cup_{i \in I}B_i $$.
Thus $$ (x,y) \in \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$. Since $$ (x,y) $$ is arbitrary, it follows that $$ \cup_{i \in I}(A_i \times B_i) \subseteq \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$.
 
**(b)**

∪p∈PCp =(∪i∈IAi)×(∪i∈IBi)

($$ \to $$)Suppose $$ (x,y) \in \cup_{p \in P}C_p $$. Thus $$ (x,y) $$ exist in atleast one of the set, say $$ C_k $$ such that $$ k \in P $$.
Thus $$ x \in A_k $$ and $$ y \in B_k $$. It follows that $$ x \in \cup_{i \in I}A_i $$ and $$ y \in \cup_{i \in I}B_i $$. Thus we have
$$ (x,y) \in \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$. Since $$ (x,y) $$ is arbitrary, it follows that 
$$ \cup_{p \in P}C_p \subseteq \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$.

($$ \leftarrow $$)Suppose $$ (x,y) \in \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$. Thus $$ x \in A_m $$ such that $$ m \in I $$ and $$ y \in B_n $$
such that $$ n \in I $$. Thus $$ (x,y) \in A_m \times B_n $$, or $$ (x,y) \in C_t $$ where $$ C_t=(A_m \times B_n) $$. Since $$ m \in I $$ and $$ n \in I $$, it
follows that $$ t = (m,n) \in I \times I $$, or $$ t \in P $$. Now, since $$ (x,y) \in C_t $$ and $$ t \in P $$, it follows that $$ (x,y) \in \cup_{p \in P}C_p $$.
Since $$ (x,y) $$ is arbitrary, it follows that $$ \cup_{i \in I}A_i \times \cup_{i \in I}B_i \subseteq \cup_{p \in P}C_p $$.

Thus, from both directions we have: $$ \cup_{p \in P}C_p = \cup_{i \in I}A_i \times \cup_{i \in I}B_i $$.

<hr/>

**Soln12**

The theorem and proof both are not correct. It does not consider if some of the sets $$ A, B, C, $$ or $$ D $$ are empty.

