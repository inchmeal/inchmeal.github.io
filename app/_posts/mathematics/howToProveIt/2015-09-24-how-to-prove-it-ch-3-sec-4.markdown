---
layout: blog
title:  "How To Prove It, Ch-3 Sec-3.4, Proofs Involving Conjunctions and Biconditionals"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 3, Section - 3.4, Proofs Involving Conjunctions and Biconditionals from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

- To prove a goal of the form $$ P ∧ Q $$:    
  Prove $$ P $$ and $$ Q $$ separately.
- To use a given of the form $$ P ∧ Q $$:    
  Treat this given as two separate givens: $$ P $$, and $$ Q $$.
- To prove a goal of the form $$ P ↔ Q $$ :     
  Prove $$ P → Q $$ and $$ Q → P $$ separately.
- To use a given of the form $$ P ↔ Q $$ :    
  Treat this as two separate givens: $$ P → Q $$, and $$ Q → P $$.
- Sometimes in a proof of a goal of the form $$ P ↔ Q $$ the steps in the proof of $$ Q → P $$ are the same as the steps 
  used to prove $$ P → Q $$, but in reverse order. These two directions can be summed up by proving equivalences(biconditional) 
  in the steps involved. For eg: If such proof involves R, then it can be summed up as: P ↔ R ↔ Q.
- To prove equivalences of sets, say $$ A = B $$, most of the proofs involve either of the following approaches:
    - $$ \forall x (x \in A ↔ x \in B) $$.
    - $$ (A \subseteq B) \land (B \subseteq A) $$. 

<hr/>

**Soln1**

($$ \to $$) Suppose $$ y $$ is arbitrary. Since $$ \forall x (P(x) \land Q(x)) $$, it follows that $$ P(y) \land Q(y) $$. Now since $$ P(y) $$, 
and $$ y $$ is arbitrary, it follows that $$ \forall x P(x) $$. Similarly since $$ Q(y) $$, and $$ y $$ is arbitrary, it follows that $$ \forall x Q(x) $$.
Thus we can conclude that $$ \forall x P(x) \land \forall x Q(x) $$. 


$$( \leftarrow $$) Suppose $$ y $$ is arbitrary. Since $$ \forall x P(x) $$, it follows that  $$ P(y) $$. Similarly, since $$ \forall x Q(x) $$, it follows that  $$ Q(y) $$.
Thus we have $$ P(y) \land Q(y) $$. Now as $$ y $$ is arbitrary, we can conclude that $$ \forall x (P(x) \land Q(x)) $$.

<hr/>

**Soln2**

Suppose $$ x \in A $$. Since $$ A \subseteq B $$, it follows that $$ x \in B $$. Also since $$ A \subseteq C $$, it follows that $$ x \in C $$.
Now since $$ x \in B $$ and $$ x \in C $$, it follows that $$ x \in A \to x \in B \cap C $$. As $$ x $$ is arbitrary, we can conclude that $$ A \subseteq (B \cap C) $$.

<hr/>

**Soln3**

Suppose $$ x \in C \setminus B $$. Thus we have $$ x \in C \land x \notin B $$. Since $$ A \subseteq B $$ and $$ x \notin B $$, it follows that $$ x \notin A $$.
Thus we have $$ x \in C \land x \notin A $$. Thus we can say $$ x \in C \setminus B \to x \in C \setminus A $$. As $$ x $$ is arbitrary, we can conclude that $$  C \setminus B \subseteq C \setminus A $$.

<hr/>

**Soln4**

Given that $$ A \subseteq B $$ and $$ A \nsubseteq C $$. Since $$ A \nsubseteq C $$, suppose $$ x $$ is an arbitrary variable such that $$ x \in A \land x \notin C $$. Since $$ A \subseteq B $$, it follows that $$ x \in B $$.
Thus $$ x \in B \land x \notin C $$. As $$ x $$ is arbitrary, we can conclude that $$ B \nsubseteq C $$.

<hr/>

**Soln5**

Given that $$ A \subseteq B \setminus C $$. Suppose $$ x \in A$$. Then $$ x \in B \land x \notin C $$. Thus there exists an element such that $$ x \in B \land x \notin C $$, so
we can conclude that $$ B \nsubseteq C $$.

<hr/>

**Soln6**

Suppose $$ x \in (A \setminus (B \cap C)) $$. Thus we have:    
$$\quad = x \in A \land \lnot (x \in (B \cap C)) $$    
$$\quad = x \in A \land \lnot (x \in B \land x \in C) $$    
$$\quad = x \in A \land (x \notin B \lor x \notin C) $$    
$$\quad = (x \in A \land x \notin B) \lor (x \in A \land x \notin C) $$    
$$\quad = x \in (A \setminus B) \lor x \in (A \setminus C) $$    
$$\quad = x \in (A \setminus B) \cup (A \setminus C)) $$    

Since $$ x $$ is arbitrary, we can say that $$ A \setminus (B \cap C) = (A \setminus B) \cup (x \in A \setminus C) $$.

<hr/>

**Soln7**

($$ \to $$)Suppose $$ x \in \mathcal P(A \cap B) $$. Then we have $$ x \subseteq (A \cap B)$$. Suppose $$ y \in x$$, then $$ y \in (A \cap B) $$. 
Or we can say that $$ y \in A $$ and $$ y \in B $$. Since $$ y $$ is arbitrary, $$ x \subseteq A \land x \subseteq B $$.    
Since $$ x \subseteq A $$, then $$ x \in \mathcal P(A) $$. Similarly, since $$ x \subseteq B $$, then $$ x \in \mathcal P(B) $$    
Thus we can conclude that $$ x \in (\mathcal P (A) \cap \mathcal P(B)) $$.

($$ \leftarrow $$)Suppose $$ x \in \mathcal P (A) \cap \mathcal P(B) $$. Since $$ x \in \mathcal P (A) $$, it follows that $$ x \subseteq A $$. 
 Similarly it can be seen that $$ x \subseteq B $$. Now suppose $$ y \in x $$. Then we have $$ y \in A $$ and $$ y \in B $$. Or we can say 
 $$ y \in A \cap B $$. As $$ y $$ is arbitrary, we can say that $$ x \subseteq A \cap B $$. Thus we can conclude $$ x \in \mathcal P(A \cap B) $$.
 
<hr/>

**Soln8**

($$ \to $$)Suppose $$ x \in \mathcal P(A) $$, then $$ x \subseteq A $$. Since $$ A \subseteq B $$, it follows that $$ x \subseteq B $$. 
Now since $$ x \subseteq B $$, then $$ x \in \mathcal P(B) $$. Thus if $$ x \in \mathcal P(A) $$ then $$ x \in \mathcal P(B) $$. We can conclude 
that $$ \mathcal P(A) \subseteq \mathcal P(B) $$.

($$ \leftarrow $$ )Suppose $$ x \in A $$. Suppose $$ y $$ is a set in $$ \mathcal P(A) $$ such that $$ x \in y $$. Since $$ \mathcal P(A) \subseteq \mathcal P(B) $$,
it follows that $$ y \in \mathcal P(B) $$. Thus $$ y \subseteq B $$. Now since $$ x \in y $$, it follows that $$ x \in B $$. Thus we can conclude $$ x \in A \to x \in B $$. 
As $$ x $$ is arbitrary, thus we have $$ A \subseteq B $$.

<hr/>

**Soln9**

Suppose $$ x = 2i + 1$$ and $$ y = 2j + 1 $$ where $$ i,\,j $$ are integers. Then $$ xy = (2i+1)(2j+1) = 4ij + 2i + 2j + 1 = 2(2ij + i + j) + 1 $$. Suppose 
$$ k = (2ij + i + j) $$, then $$ k $$ is an integer. Thus $$ xy = 2k + 1 $$, is odd.

<hr/>

**Soln10**

($$ \to $$)Suppose $$ n $$ is even. Then $$ n = 2i $$, where $$ i \in \mathbb Z $$. Thus $$ n^3 = {(2i)}^3 = 8i^3 $$.
Suppose $$ j = 4i^3 $$, then $$ n^3 = 2j $$. Since $$ j \in \mathbb Z $$, it follows that $$ n^3 $$ is even.

($$ \leftarrow $$ )As an integer can either be even or odd but not both, we shall prove this by contrapositive. Thus we shall prove that If $$ n $$ is not even(odd) then $$ n^3 $$ is also not even(odd).
Suppose $$ n $$ is odd, then $$ n = 2i + 1 $$. Thus $$ n^3 = {(2i + 1)}^3 = 8i^3 + 12i^2 + 6i + 1 = 2(4i^3 + 6i^2 + 3i) + 1 $$. Suppose $$ j = 4i^3 + 6i^2 + 3i $$, then $$ j \in \mathbb Z $$.
Thus $$ n^3 = 2j + 1 $$ is odd. Thus we can conclude that if $$ n $$ is even then $$ n^3 $$ is also even. 


<hr/>

**Soln11**

**(a)**

The problem with the proof is with the usage of variable $$ k $$ in $$ m = 2k $$ and $$ n = 2k + 1 $$. Value of $$ k $$ may not be same.
 
**(b)**

For $$ m = 0 $$ and $$ n = 3 $$, then $$ n^2 - m^2 = 9 $$ while $$ m + n = 3 $$. Thus $$ n^2 - m^2 \neq m + n $$.
 
<hr/>

**Soln12**

($$ \to $$) Suppose $$ x $$ is arbitrary. Suppose $$ y = \frac x {x-1} $$, then $$ x + y = x + \frac x {x-1}$$    
 $$ \quad = \frac {x(x-1) + x} {x-1} $$    
 $$ \quad = \frac {x^2} {x-1} $$    
 $$ \quad = x \times \frac x {x-1} $$    
 $$ \quad = xy $$    
 
 Thus the equation: $$ \exists y (x + y = xy) $$ is correct for $$ y = \frac x {x-1} $$. Now since $$ y = \frac x {x-1} $$, it follows that $$ x \neq 1 $$.
   
($$ \leftarrow $$ ). We shall prove contra-positive. Suppose $$ x = 1 $$. Now $$ x + y = 1 + y $$ and $$ xy = y $$. Since $$ 1 + y \neq y $$, it follows that $$ \exists y (x + y = xy) $$ is not correct. 
 Thus if $$ x + y = xy $$, then $$ x \neq 1 $$.
 
<hr/>

**Soln13**

($$ \to $$)Suppose $$ z = 1 $$. Suppose $$ x \in {\mathbb R}^+ $$. Suppose $$ \exists y (y - x = \frac y x) $$, then $$ y = \frac {x^2} {x-1} $$.
Now $$ y = \frac {x^2} {x-1} $$ is defined only if $$ x \neq 1 $$. Thus there exists a $$ z $$ such that $$ x \neq z $$. Now since $$ x $$ is arbitrary, it follows
 that $$ \exists z \forall x \in {\mathbb R}^+[\exists y (y - x = \frac y x) \to x \neq z ] $$.
   
($$ \leftarrow $$ ). Suppose $$ z = 1 $$. Suppose $$ x \in {\mathbb R}^+ $$ and $$ x \neq 1 $$. Since $$ x \neq 1 $$, we can assume $$ y = \frac {x^2} {x-1} $$. Then $$ y - x = \frac y x $$ is correct(can be verified by putting the value of $$ y $$).
 Thus there exists a $$ z = 1 $$ for which $$ x \neq z $$ and $$ \exists y (y - x = \frac y x) $$ is correct. We can conclude $$ \exists z \forall x \in {\mathbb R}^+[x \neq z \to \exists y (y - x = \frac y x)] $$.
  
<hr/>

**Soln14**

Suppose $$ x \in \cup \{A \setminus B \;\vert\;A \in \mathcal F \} $$. Thus there exists a set, say $$ A $$, in $$ \mathcal F $$ such that $$ x \in A$$. 
Since $$ x \in A \land x \notin B $$, it follows that $$ A \nsubseteq B $$. Since $$ A \nsubseteq B $$, then $$ A \notin \mathcal P(B) $$. Thus we have
$$ A \in \mathcal F \land A \notin \mathcal P(B) $$. Since $$ x \in A $$, it follows that $$ x \in \cup(\mathcal F \setminus \mathcal P(B)) $$.
Since $$ x $$ is arbitrary, we can conclude $$ \cup \{A \setminus B \vert\;A \in F \} \subseteq \cup(\mathcal F \setminus \mathcal P(B)) $$.

<hr/>

**Soln15**

Suppose $$ \cup \mathcal F $$ and $$ \cap \mathcal G $$ are not disjoint. Then there must be an element, say $$ x $$, such that 
$$ x \in \cup \mathcal F $$ and $$ x \in \cap \mathcal G $$. Since $$ x \in \cup \mathcal F $$, then there must exist a set, say $$ A $$, 
in $$ \mathcal F $$ such that $$ x \in A $$. Also since $$ x \in \cap \mathcal G  $$, it follows that $$ x $$ must exist in all the sets of $$ \mathcal G $$.
Thus there exist a set $$ A $$ such that it is not disjoint with any of the sets of $$ \mathcal G $$. But this contradicts the given that there is no such set.
Thus we can conclude that $$ \cup \mathcal F $$ and $$ \cap \mathcal G $$ are disjoint.

<hr/>

**Soln16**

($$ \to $$)Suppose $$ x \in A $$. Then $$ x $$ exists in atleast one of the subsets of $$ A $$. Thus $$ x $$ must exists in $$ \cup\{ $$ all subsets of 
$$ A \} $$. It follows that $$ x \in \cup \mathcal P(A) $$. Since $$ x $$ is arbitrary, we can conclude that $$ A \subseteq \cup \mathcal P(A) $$.

($$ \leftarrow $$ ). Suppose $$ x \in \cup \mathcal P(A) $$. Thus $$ x $$ exists in atleast one of the subsets of $$ A $$. It follows that $$ x \in A $$.
 Since $$ x $$ is arbitrary, we can conclude that $$ \cup \mathcal P(A) \subseteq A $$.
 
Thus we can say that $$ A = P(A) $$.

<hr/>

**Soln17**

**(a)** 

Suppose that $$ x \in \cup(\mathcal F \cap \mathcal G) $$. Thus there exist a set, say $$ A $$, such that $$ x \in A $$ and $$ A \in \mathcal F $$ and $$ A \in \mathcal G $$. 
Since $$ A \in \mathcal F $$, it follows that $$ x \in \cup \mathcal F $$. Similarly since $$ A \in \mathcal G $$, it follows that $$ x \in \cup \mathcal G $$. Thus $$ x \in \cup F \land x \in \cup G $$. 
It follows that $$ x \in (\cup \mathcal F \cap \cup \mathcal G) $$. Since $$ x $$ is arbitrary, we can conclude that $$ \cup(\mathcal F \cap \mathcal G) \subseteq (\cup \mathcal F \cap \cup \mathcal G) $$. 

**(b)**

The issue is that set $$ A $$ may not be same in $$ \mathcal F $$ and $$ \mathcal G $$.

**(c)**

$$ \mathcal F = \{ A_1, A_2 \} $$ where $$ A_1 = \{ 1 \} $$ and $$ A_2 = \{ 3, 4 \} $$    

$$ \mathcal G = \{ B_1, B_2, A_2 \} $$ where $$ B_1 = \{ 2 \} $$, $$ B_2 = \{ 1 , 2 \} $$ and $$ A_2 = \{ 3, 4 \} $$    

$$ \cup(\mathcal F \cap \mathcal G) = \{ 3, 4 \} $$  .  

$$ \cup \mathcal F \cap \cup \mathcal G  = \{1, 3, 4 \} \cap \{1, 2, 3, 4 \} = \{1, 2, 3, 4 \} $$.

<hr/>

**Soln18**

($$ \to $$)Suppose $$ \forall A \in \mathcal F\;\forall B \in \mathcal G (A \cap B) \subseteq \cup (\mathcal F \cap \mathcal G)$$. Suppose $$ x \in (\cup \mathcal F) \cap (\cup \mathcal G) $$. 
Thus there exist some set, say $$ P  \in \mathcal F $$ such that $$ x \in P $$. Similarly there  exist some set, say $$ Q \in \mathcal G $$, such that $$ x \in Q $$. Thus $$ x \in P \cap Q$$. 
As $$ P \in F $$ and $$ Q \in G $$, then $$ P \cap Q \subseteq \cup (\mathcal F \cap \mathcal G) $$. It follows that if $$ x \in (\cup \mathcal F) \cap (\cup \mathcal G) $$, then $$ x \in \cup (\mathcal F \cap \mathcal G) $$. 
Since $$ x $$ is arbitrary, $$ (\cup \mathcal F) \cap (\cup \mathcal G) \subseteq \cup (\mathcal F \cap \mathcal G) $$. Thus we can conclude 
that: $$ \forall A \in \mathcal F\;\forall B \in \mathcal G (A \cap B) \subseteq \cup (\mathcal F \cap \mathcal G) \quad \to \quad (\cup \mathcal F) \cap (\cup \mathcal G) \subseteq \cup (\mathcal F \cap \mathcal G) $$. 

($$ \leftarrow $$) Suppose $$ (\cup \mathcal F) \cap (\cup \mathcal G) \subseteq \cup (\mathcal F \cap \mathcal G) $$. Suppose that $$ x \in A \cap B $$ where $$ A \in \mathcal F $$
and $$ B \in \mathcal G $$. Since $$ x \in A $$ and $$ A \in \mathcal F $$, it follows that $$ x \in \cup \mathcal F $$. Similarly, since $$ x \in B $$ and $$ B \in \mathcal G $$, it follows that $$ x \in \cup \mathcal G $$.
Thus $$ x \in (\cup \mathcal F) \cap (\cup \mathcal G) $$. Since $$ (\cup \mathcal F) \cap (\cup \mathcal G) \subseteq \cup (\mathcal F \cap \mathcal G) $$, it follows that 
 $$ x \in \cup (\mathcal F \cap \mathcal G) $$. Since $$ x $$ is arbitrary, it follows that $$ \forall A \in \mathcal F\;\forall B \in \mathcal G (A \cap B) \subseteq \cup (\mathcal F \cap \mathcal G) $$.
Thus we can conclude that $$ (\cup \mathcal F) \cap (\cup \mathcal G) \subseteq \cup (\mathcal F \cap \mathcal G) \quad \to \quad \forall A \in \mathcal F\;\forall B \in \mathcal G (A \cap B) \subseteq \cup (\mathcal F \cap \mathcal G)$$.

<hr/>

**Soln19**

($$ \to $$)Suppose $$ A $$ and $$ B $$ are not disjoint. Then there must exist an element, say $$ x $$, such that $$ x \in A $$ and $$ x \in B $$.
Since $$ A \in \mathcal F $$, it follows that $$ x in \cup \mathcal F $$. Similarly since $$ B \in \mathcal G $$, it follows that $$ x in \cup \mathcal G $$.
Thus $$ x \in (\cup \mathcal F) \cap (\cup \mathcal G ) $$. But it is a contradiction to the given that $$ (\cup \mathcal F) \cap (\cup \mathcal G ) = \phi $$.
Thus $$ \forall A \in \mathcal F\; \forall B \in \mathcal G (A \cap B) = \phi $$.

($$ \leftarrow $$)Suppose $$ \cup \mathcal F $$ and $$ \cup \mathcal G $$ are not disjoint. Then there must exist an element, say $$ x $$, such that $$ x \in \cup \mathcal F $$
and $$ x \in \cup \mathcal G $$. Thus there must exist a set, say $$ A $$ in $$ \mathcal F $$ such that $$ x \in A $$. Similarly there must exist a set, say $$ B $$,  in $$ \mathcal G $$ such 
that $$ x \in B $$. Thus $$ x \in A \cap B $$. This contradicts to the given that $$ A \cap B = \phi $$. Thus $$ \cup \mathcal F $$ and $$ \cup \mathcal G = \phi $$.

<hr/>

**Soln20**

**(a)**

Suppose $$ x \in (\cup \mathcal F) \setminus (\cup \mathcal G) $$. Thus $$ x $$ is in $$ (\cup \mathcal F) $$ and $$ x $$ is not in $$ (\cup \mathcal G) $$.
Since $$ x \in (\cup \mathcal F) $$, there must exist a set, say $$ A $$, in $$ \mathcal F $$ such that $$ x \in A $$. Also since $$ x $$ not in $$ (\cup \mathcal G) $$, 
there is no set, say $$ B $$, in $$ \mathcal G $$, such that $$ x \in B $$. It follows that $$ x $$ can exist in only those sets in $$ \mathcal F $$ which are not present in $$ G $$.
Or we can say that $$ x $$ exists in atleast one of the sets in $$ \mathcal F \setminus \mathcal G $$. It follows that $$ x \in \cup (\mathcal F \setminus \mathcal G) $$.
Since $$ x $$ is arbitrary, we can conclude that $$ (\cup \mathcal F) \setminus (\cup \mathcal G) \subseteq \cup (\mathcal F \setminus \mathcal G) $$.
 
**(b)**

Statement $$ x ∈ A $$ and $$ A \notin G $$, then $$ x \notin \cup G $$ is wrong. It is possible that $$ x $$ belongs to some other set($$ \neq A $$) of $$ \mathcal G $$.
 
**(c)**

Lets first prove direction $$ \to $$:

 $$ \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G ((A \cap B) = \phi) \; \to \; \cup (\mathcal F \setminus \mathcal G)\subseteq (\cup \mathcal F) \setminus (\cup \mathcal G) $$.
 
Suppose $$ \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G (A \cap B) = \phi $$. Suppose $$ x \in \cup (\mathcal F \setminus \mathcal G) $$.
Thus there exist a set, say $$ P $$, such that $$ P \in \mathcal F $$ and $$ P \notin \mathcal G $$ , and $$ x \in P $$. As $$ P \notin \mathcal G $$, there may exist some other set, say $$ Q $$, such that $$ Q \in \mathcal G $$, and $$ x \in Q $$.
Thus if such set $$ Q $$ exists, then $$ P \cap Q \neq \phi $$, because $$ x $$ exists in both $$ P $$ and $$ Q $$. But since 
$$ \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G (A \cap B) = \phi $$ it follows that $$ P \cap Q = \phi $$. Thus there is no such set $$ Q $$.
It follows that $$ x $$ does not exist in any of the sets of $$ \mathcal G $$. Or we can say that $$ x \notin \cup \mathcal G $$. Since $$ x \in P $$, it follows that $$ x \in \cup \mathcal F $$.
Thus it follows that $$ x \in \cup \mathcal F \land x \notin \cup \mathcal G $$, or we can say that $$ x \in (\cup \mathcal F) \setminus (\cup \mathcal G) $$.
 
Now proof for direction $$ \leftarrow $$:

 $$ \cup (\mathcal F \setminus \mathcal G)\subseteq (\cup \mathcal F) \setminus (\cup \mathcal G) \; \to \; \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G (A \cap B = \phi) $$.

Here we shall prove by contra-positive. Suppose that $$ \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G ((A \cap B) \neq \phi) $$. 
Suppose that $$ x \in A \cap B $$, where $$ A \in (\mathcal F \setminus \mathcal G) $$ and $$ B \in \mathcal G $$. Thus there exist a set($$ A $$) in $$ \mathcal F \setminus \mathcal G $$ such
that $$ x $$ belongs to that set. It follows that $$ x \in \cup (\mathcal F \setminus \mathcal G) $$. Also, since $$ x \in B $$ and $$ B \in \mathcal G $$, it 
follows that $$ x \in \cup \mathcal G $$. Since $$ x \in \cup \mathcal G $$, it follows that $$ x \notin (\cup \mathcal F) \setminus (\cup \mathcal G) $$. 
Thus $$ \cup (\mathcal F \setminus \mathcal G)\nsubseteq (\cup \mathcal F) \setminus (\cup \mathcal G) $$.Thus by contrapositive we can conclude that if $$ (\cup \mathcal F) \setminus (\cup \mathcal G) \subseteq (\cup \mathcal F) \setminus (\cup \mathcal G) $$, then 
$$ \forall A \in (\mathcal F \setminus \mathcal G)\, \forall B \in \mathcal G (A \cap B = \phi $$.
 
**(d)**

$$ \mathcal F = \{ A_1, A_2 \} $$, where $$ A_1 = \{ 1 \} $$ and $$ A_2 = \{ 10, 20 \} $$.
 
$$ \mathcal G = \{ B_1, B_2 \} $$, where $$ B_1 = \{ 1, 3 \} $$ and $$ B_2 = \{ 10, 30 \} $$.

$$ \cup (\mathcal F \setminus \mathcal G) = \{ 1, 10, 20 \} $$.

$$ (\cup \mathcal F) \setminus (\cup \mathcal G) = \{ 20 \} $$.

<hr/>

**Soln21**

Suppose $$ \cup \mathcal F \nsubseteq \cup \mathcal G $$. Suppose $$ x \in \cup \mathcal F $$, then $$ x \notin \cup \mathcal G $$. Since $$ x \in \cup \mathcal F $$,
it follows that there exist a set, say $$ P $$, in $$ \mathcal F $$ such that $$ x \in P $$. Also since $$ x \notin \cup \mathcal G $$, it follows that $$ x $$
 does not belong to any of the sets of $$ \mathcal G $$. Thus $$ \exists P \in \mathcal F \, \forall Q \in \mathcal G\,(P \nsubseteq Q) $$.
 
<hr/>

**Soln22**

**(a)**

- Strategy to prove a goal of the form $$ P \leftrightarrow Q $$.
- Strategy to prove $$ P \to Q $$.
- Strategy to prove $$ P \land Q $$.
- Strategy for $$ \forall x P(x) $$.
 
**(b)**

Suppose $$ x \in B \setminus (\cup_{i \in I} A_i) $$    
It is equivalent to:     
$$ \quad = x \in B \land \lnot \exists i \in I (x \in A_i) $$     
$$ \quad = x \in B \land \forall i \in I (x \notin A_i) $$    
$$ \quad = \forall i \in I (x \in B \land x \notin A_i) $$    
$$ \quad = \forall i \in I (x \in B \setminus A_i) $$    
$$ \quad = x \in \cap_{i \in I}(B \setminus A_i) $$    

Since $$ x $$ is arbitrary, it follows that $$ B \setminus (\cup_{i \in I} A_i) = \cup_{i \in I}(B \setminus A_i) $$.

**(c)**

Suppose $$ x \in B \setminus (\cap_{i \in I} A_i ) $$    
It is equivalent to:    
$$ \quad = x \in B \land \lnot \forall i \in I ( x \in A_i) $$    
$$ \quad = x \in B \land \exists i \in I (x \notin A_i) $$    
$$ \quad = \exists i \in I (x \in B \land x \notin A_i) $$    
$$ \quad = \exists i \in I (x \in B \setminus A_i) $$    
$$ \quad = x \in \cup_{i \in I}(B \setminus A_i) $$    

Since $$ x $$ is arbitrary, it follows that $$  B \setminus (\cap_{i \in I} A_i ) = \cup_{i \in I}(B \setminus A_i) $$.

<hr/>

**Soln23**

**(a)** 

Suppose $$ x \in \cup_{i \in I}(A_i \setminus B_i) $$. Thus there must exist a set, say $$ A_k $$,  in $$ \{ A_i \, \vert \, i \in I \} $$ such that $$ x \in A_k $$.
Thus $$ x \in \cup_{i \in I} A_i $$. Now suppose $$ x $$ exist in some set $$ B_l $$ where $$ i = l $$. Now if $$ A_l $$ also contain $$ x $$ then $$ x $$, 
which is clearly not possible as then $$ x $$ can not exist in $$ A_l \setminus B_l $$. Else if $$ A_l $$ does not contain $$ x $$, then clearly $$ x $$ can not exist 
in $$ A_l \setminus B_l $$. Thus $$ x $$ does not exist in any set $$ B_i $$. It follows that $$ x \notin \cap_{i \in I} B_i $$. Thus we can conclude that 
$$ x \in \cup_{i \in I} A_i \land x \notin \cap_{i \in I} B_i $$, or $$ x \in \cup_{i \in I} A_i \setminus \cap_{i \in I} B_i $$. Since $$ x $$ is arbitrary, we
can conclude that $$ \cup_{i \in I}(A_i \setminus B_i) \; \subseteq \; \cup_{i \in I} A_i \setminus \cap_{i \in I} B_i $$.

**(b)**

$$ A_1 = \{ 1, 2 \} $$, $$ A_2 = \{3, 4\} $$    
$$ B_1 = \{ 2, 5 \} $$, $$ B_2 = \{3, 8\} $$    

$$ \cup_{i \in I}(A_i \setminus B_i) = \{1, 4 \}$$    
$$ \cup_{i \in I} A_i \setminus \cap_{i \in I} B_i = \{ 1, 2, 3, 4 \} $$    

<hr/>

**Soln24**

**(a)**

Suppose $$ x \in \cup_{i \in I}(A_i \cap B_i) $$. Then there must exist atleast an $$ i = k $$, such that $$ x \in A_k \land x \in B_k $$. Since $$ x \in A_k $$, 
it follows that $$ x \in \cup_{i \in I} A_i $$. Similarly, since $$ x \in B_k $$, it follows that $$ x \in \cup_{i \in I} B_i $$. Thus we have 
$$ x \in \cup_{i \in I} A_i \land x \in \cup_{i \in I} B_i $$, or $$ x \in (\cup_{i \in I} A_i) \cap (\cup_{i \in I} B_i) $$. Since $$ x $$ is arbitrary, 
it follows that $$ \cup_{i \in I}(A_i \cap B_i) \; \subseteq \; (\cup_{i \in I} A_i) \cap (\cup_{i \in I} B_i) $$.

**(b)**

$$ A_1 = \{ 1, 2, 8 \} $$, $$ A_2 = \{3, 4\} $$    
$$ B_1 = \{ 2, 5 \} $$, $$ B_2 = \{3, 8\} $$    

$$ \cup_{i \in I}(A_i \cap B_i) = \{ 2, 3\} $$    
$$ (\cup_{i \in I} A_i) \cap (\cup_{i \in I} B_i) = \{ 2, 3, 8\}$$
 
<hr/>

**Soln25**

Suppose $$ c = ab $$, then both $$ a\,\vert\,c $$ and $$ b\,\vert\,c $$ are true.
 
<hr/>

**Soln26**

**(a)**

($$ \to $$)Suppose $$ 15\,\vert\,n $$. Then $$ n = 15 \times k $$ where $$ k \in \mathbb N $$. It follows that $$ n = 3 \times 5k $$, thus $$ 3\,\vert\,n $$. Similarly,
$$ n = 5 \times 3k $$, thus $$ 5\,\vert\,n $$.

($$ \leftarrow $$)Suppose $$ 3\,\vert\,n $$ and $$ 5\,\vert\,n $$. Thus $$ n = 3k $$ and $$ n = 5l $$, where $$ k,l \in \mathbb N $$. Thus $$ 3k = 5l $$.
Since $$k, l $$ are natural numbers and $$ 3 $$ and $$ 5 $$ does not divide, it follows that $$ 5\,\vert\,k $$ and  $$ 3\,\vert\,l $$. Or we can say
that $$ 5p = k $$ and $$ 3q = l $$, where $$ p, q \in \mathbb N $$. Thus we have $$ n = 3k = 15 p $$ as well as $$ n = 5l = 15 q $$. Thus $$ p = q $$ and 
$$ n = 15p $$. Thus we can conclude $$ 15\,\vert\,n $$.

**(b)**

Suppose $$ n = 90 $$, then $$ 6\,\vert\,n $$ as well as $$ 10\,\vert\,n $$ are true, but $$ 60\,\vert\,n $$ is not true.

<hr/>







 
  