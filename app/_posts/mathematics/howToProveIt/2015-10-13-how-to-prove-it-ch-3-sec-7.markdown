---
layout: blog
title:  "How To Prove It, Ch-3 Sec-3.7, More Examples of Proofs"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 3, Section - 3.7, More Examples of Proofs from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

It contains few more examples to outline proofs which may contain multiple strategies.   
    
<hr/>

**Soln1** 

<u>Existence:</u>

Suppose $$ A = \cup \mathcal F $$. 

Proof for: $$ \mathcal F \subseteq \mathcal P(A) $$:    

Suppose $$ X \in \mathcal F $$. Suppose $$ x \in X $$, then $$ x \in \cup \mathcal F $$. Since $$ x $$ is 
arbitrary, we can say $$ X \subseteq \cup \mathcal F $$. Since $$ X \subseteq \cup \mathcal F $$, it follows that $$ X \in \mathcal P(\cup \mathcal F) $$.
Thus we have, if $$ X \in \mathcal F $$, then $$ X \in \mathcal P(\cup \mathcal F) $$. Since $$ X $$ is arbitrary, it follows that $$ \mathcal F \subseteq \mathcal P(\cup \mathcal F) $$.

Proof for: $$ \forall B(\mathcal F \subseteq \mathcal P(B) \to A ⊆ B) $$:

Suppose $$ B $$ is arbitrary. Suppose $$ \mathcal F \subseteq \mathcal P(B) $$. Suppose $$ x \in A $$, or $$ x \in \cup \mathcal F $$. Then there must
exist some set, say $$ X \in \mathcal F $$ such that $$ x \in \mathcal F $$. Since $$ \mathcal F \subseteq \mathcal P(B) $$, it follows that $$ X \subseteq B $$.
Thus $$ x \in B $$. Thus we have $$ x \in A \to x \in B $$. Since $$ x $$ is arbitrary, we can conclude $$ A \subseteq B $$.
 
<u>Uniqueness:</u>    

Suppose $$ A' $$ is a set such that $$ \mathcal F \subseteq \mathcal P(A') $$ and $$ \forall B(\mathcal F \subseteq \mathcal P(B) \to A' ⊆ B) $$ are true.
Now since this is true for all possible values of $$ B $$ and we know that if $$ B = \cup \mathcal F $$ then $$ \mathcal F \subseteq \mathcal P(B) $$ is true.
Thus if $$ B = \cup \mathcal F $$, it follows that $$ A' \subseteq B $$, or $$ A' \subseteq \cup \mathcal F $$. Now suppose $$ x \in \cup \mathcal F $$.
Then there exists some set, say $$ X \in \mathcal F $$ such that $$ x \in X $$. But since $$ \mathcal F \subseteq \mathcal P(A') $$, 
 it follows that $$ X \in P(A') $$, or $$ X \subseteq A' $$. Thus $$ x \in A' $$. Since $$ x $$ is arbitrary, it follows that $$ \cup \mathcal F \subseteq A' $$.
 Thus we have $$ A' \subseteq \cup \mathcal F \land \cup \mathcal F \subseteq A' $$. It follows that $$ A' = \cup \mathcal F $$.
  
<hr/>

**Soln2**

<u>Existence:</u>

Suppose $$ X \in \mathcal P(A \setminus B) \setminus (\mathcal P(A) \setminus \mathcal P(B)) $$. Thus we have:    
$$ \leftrightarrow X \in P(A \setminus B) \land \lnot (X \in \mathcal P(A) \land X \notin \mathcal P(B)) $$     
$$ \leftrightarrow X \in P(A \setminus B) \land (X \notin \mathcal P(A) \lor X \in \mathcal P(B)) $$     

We know that every power set contains a set with empty element, or $$ \{ \phi \} $$. Thus one possible value of $$ X = \{ \phi \} $$ and it clearly
satisfies the above statement.

<u>Uniqueness:</u>    

Suppose if $$ X \ne \{ \phi \} $$, then,    
$$ \leftrightarrow X \in P(A \setminus B) \land (X \notin \mathcal P(A) \lor X \in \mathcal P(B)) $$     
is equivalent to:    
$$ \leftrightarrow X \subseteq (A \setminus B) \land (X \nsubseteq A \lor X \subseteq B) $$     
$$ \leftrightarrow (X \subseteq A \land X \nsubseteq B) \land (X \nsubseteq A \lor X \subseteq B) $$     

This can be true only in following cases:

- $$ X \subseteq A \land X \nsubseteq B \land X \nsubseteq A $$:     
 Clearly this is not possible.
 
- $$ X \subseteq A \land X \nsubseteq B \land X \subseteq B $$:
 Clearly this is also not possible.

Thus it contradicts the assumption that such set $$ X \ne  \{ \phi \} $$ exists. 

Thus there is only one such set $$ X = \{ \phi \} $$.

<hr/>

**Soln3**

We shall prove this as follows : 

1. if (a) then (b).
2. if (b) then (c).
3. if (c) then (a).

where (a), (b) and (c) are the parts given in the problem.

*<u>- if (a) then (b).</u>*

Suppose (a), is true. Thus $$ (A \triangle C) \cap (B \triangle C) = \phi $$ is true. 

We will prove this part : $$ A \cap B \subseteq C $$ by contradiction. Suppose $$ x \in A \cap B $$. Suppose $$ x \notin C $$. Since $$ x \in A \land x \notin C $$,
it follows that $$ x \in A \triangle C $$. Similarly, since $$ x \in B \land x \notin C $$, it follows $$ x \in B \triangle C $$. Thus $$ A \triangle C) \cap (B \triangle C) \ne \phi $$.
But this contradicts with the assumption $$ (A \triangle C) \cap (B \triangle C) = \phi $$. Thus we have if $$ x \in A \cap B $$, then $$ x \in C $$. Since
$$ x $$ is arbitrary, we can conclude $$ A \cap B \subseteq C $$.

Now we will prove part : $$ C \subseteq A \cup B $$ by contradiction. Suppose $$ x \in C $$. Suppose $$ x \notin (A \cup B) $$. It follows that $$ \lnot (x \in A \lor x \in B $$,
 which is equivalent to $$ x \notin A \land x \notin B $$. Since $$ x \in C \land x \notin A $$, it follows that $$ x \in A \triangle C $$. Similarly, since
 $$ x \in C \land x \notin B $$, it follows that $$ x \in B \triangle C $$. Thus $$ (A \triangle C) \cap (B \triangle C) \ne \phi $$, which contradicts our assumption.
 Thus if $$ x \in C $$, then $$ x \in (A \cup B) $$. Since $$ x $$ is arbitrary, we can say that $$ C \subseteq A \cup B $$.
 
*<u>- if (b) then (c).</u>*

Suppose (b) is true. Thus $$ A \cap B \subseteq C \subseteq A \cup B $$ is true. Suppose $$ x \in A \triangle C $$, then we have following possible cases:

 - Case 1: $$ x \in A $$, $$ x \notin C $$, $$ x \in B $$: This case is not possible because we know that if $$ x \in A \cap B $$, then $$ x \in C $$.
    
 - Case 2: $$ x \in A $$, $$ x \notin C $$, $$ x \notin B $$: Thus $$ x \in A \setminus B $$. It follows that $$ x \in A \triangle B $$.
      
 - Case 3: $$ x \in C $$, $$ x \notin A $$, $$ x \in B $$:  Thus $$ x \in B \setminus A $$. It follows that $$ x \in A \triangle B $$.
    
 - Case 4: $$ x \in C $$, $$ x \notin A $$, $$ x \notin B $$:  This case is not possible because we know that if $$ x \in C $$, then $$ x \in A \cup B $$.
    
Thus from all the cases, if $$ x \in A \triangle C $$, then $$ x \in A \triangle B $$. Since $$ x $$ is arbitrary, we can conclude that $$ A \triangle C \subseteq A \triangle B $$.

*<u>- if (c) then (a).</u>*

Suppose (c) is true. Thus $$ A \triangle C \subseteq B \triangle C $$ is true.  Suppose $$ x \in A \triangle C $$. It follows that $$ x \in A \triangle B $$.
Thus we have following cases:

 - Case 1: $$ x \in A \setminus C $$, $$ x \in A \setminus B $$: In this case $$ x \notin B \setminus C $$. It follows that $$ x \notin B \triangle C $$. 
 
 - Case 2: $$ x \in A \setminus C $$, $$ x \in B \setminus A $$: This case is not possible as $$ x \in A \land x \notin A $$ is not possible.

 - Case 3: $$ x \in C \setminus A $$, $$ x \in A \setminus B $$: This case is also not possible as $$ x \notin A \land x \in A $$ is not possible.

 - Case 4: $$ x \in C \setminus A $$, $$ x \in B \setminus A $$: Since $$ x \in B \land x \in C $$, it follows that $$ x \notin B \triangle C $$.
 
Thus from all the cases we have, $$ x \notin B \triangle C $$. Since $$ x $$ is arbitrary, we can conclude that $$ (A \triangle C) \cap (B \triangle C) = \phi $$.
 
<hr/>

**Soln4**

Suppose $$ \mathcal P(\cup_{i \in I} A_i) \subseteq \cup_{i \in I} \mathcal P(A_i) $$. Thus if $$ X \in \mathcal P(\cup_{i \in I} A_i) $$, then $$ X \in \cup_{i \in I} \mathcal P(A_i) $$.
Since $$ \cup_{i \in I} A_i \in P(\cup_{i \in I} A_i) $$, it follows that $$ \cup_{i \in I} A_i \in \cup_{i \in I} \mathcal P(A_i) $$. Thus $$ \cup_{i \in I} A_i $$ exists in at-least 
one of the sets, say $$ \mathcal P(A_i) $$ in $$ \cup_{i \in I} \mathcal P(A_i) $$. Thus we have $$ \cup_{i \in I} A_i \subseteq A_i $$. Now suppose $$ j \in I $$, then
$$ A_j \subseteq \cup_{i \in I} A_i $$. And since $$ \cup_{i \in I} A_i \subseteq A_i $$, we can conclude that $$ A_j \subseteq A_i $$. Since $$ j $$ is arbitrary, we
can conclude that $$ \forall j \in I (A_j \subseteq A_i) $$.

<hr/>

**Soln5**

**(a)** 

Suppose $$ x \in \cup_{i \in I} A_i $$. Thus we have:    
$$ \leftrightarrow \exists i \in I ( x \in A_i ) $$    
$$ \leftrightarrow \exists i(i \in I \land x \in A_i ) $$    
Since $$ I = \cup \mathcal F $$,    
$$ \leftrightarrow \exists i(i \in \cup \mathcal F \land x \in A_i ) $$    
$$ \leftrightarrow \exists i(\exists X \in \mathcal F(i \in X) \land x \in A_i ) $$    
$$ \leftrightarrow \exists i(\exists X (X \in \mathcal F \land i \in X) \land x \in A_i ) $$    
$$ \leftrightarrow \exists i(\exists X (X \in \mathcal F \land i \in X \land x \in A_i )) $$    
$$ \leftrightarrow \exists i \exists X (X \in \mathcal F \land i \in X \land x \in A_i ) $$    
$$ \leftrightarrow \exists X \exists i (X \in \mathcal F \land (i \in X \land x \in A_i )) $$    
$$ \leftrightarrow \exists X (X \in \mathcal F \land \exists i (i \in X \land x \in A_i )) $$    
$$ \leftrightarrow \exists X (X \in \mathcal F \land x \in \cup_{i \in X}A_i) $$    
$$ \leftrightarrow \exists X \in \mathcal F(x \in \cup_{i \in X}A_i) $$    
$$ \leftrightarrow x \in \cup_{X \in \mathcal F} (\cup_{i \in X}A_i) $$    

Since $$ x $$ is arbitrary, we can conclude $$ \cup_{i \in I} A_i = \cup_{X \in \mathcal F} (\cup_{i \in X}A_i) $$.

**(b)**

Suppose $$ x \in \cap_{i \in I} A_i $$. Thus we have:    
$$ \leftrightarrow \forall i \in I ( x \in A_i ) $$    
$$ \leftrightarrow \forall i(i \in I \to x \in A_i ) $$    
Since $$ I = \cup \mathcal F $$,    
$$ \leftrightarrow \forall i(i \in \cup \mathcal F \to x \in A_i ) $$    
$$ \leftrightarrow \forall i( \exists X \in \mathcal F(i \in X) \to x \in A_i ) $$    
$$ \leftrightarrow \forall i( \exists X(X \in \mathcal F \land i \in X) \to x \in A_i ) $$    
$$ \leftrightarrow \forall i( \lnot \exists X(X \in \mathcal F \land i \in X) \lor x \in A_i ) $$    
$$ \leftrightarrow \forall i( \forall X \lnot (X \in \mathcal F \land i \in X) \lor x \in A_i ) $$    
$$ \leftrightarrow \forall i( \forall X (X \notin \mathcal F \lor i \notin X) \lor x \in A_i ) $$    
$$ \leftrightarrow \forall i( \forall X (X \notin \mathcal F \lor i \notin X \lor x \in A_i )) $$    
$$ \leftrightarrow \forall i \forall X (X \notin \mathcal F \lor i \notin X \lor x \in A_i ) $$    
$$ \leftrightarrow \forall X \forall i (X \notin \mathcal F \lor (i \notin X \lor x \in A_i) ) $$    
$$ \leftrightarrow \forall X (X \notin \mathcal F \lor \forall i(i \notin X \lor x \in A_i) ) $$    
$$ \leftrightarrow \forall X (X \notin \mathcal F \lor \forall i(i \in X \to x \in A_i) ) $$    
$$ \leftrightarrow \forall X (X \notin \mathcal F \lor x \in \cap_{i \in X}A_i ) $$    
$$ \leftrightarrow \forall X (X \in \mathcal F \to x \in \cap_{i \in X}A_i ) $$    
$$ \leftrightarrow x \in \cap_{X \in \mathcal F}(\cap_{i \in X}A_i )) $$    

Since $$ x $$ is arbitrary, we can conclude $$ \cap_{i \in I} A_i = \cap_{X \in \mathcal F} (\cap_{i \in X}A_i) $$.


**(c)**

Suppose $$ x \in \cup_{i \in J}A_i $$. Thus $$ x $$ exist in atleast one of the sets, say $$ A_k $$,  such that $$ k \in \cap \mathcal F $$.
Thus $$ k $$ exist in all the sets of $$ \mathcal F $$. Thus for any set, say $$ X \in \mathcal F $$, we have $$ k \in X $$. Thus if $$ x \in A_k $$,
 then $$ x \in \cup_{i \in X}A_i $$ because $$ k \in X $$. Since $$ X $$ can be any set such that $$ X \in F $$, it follows that $$ x $$ exists in
 all the sets $$ \cup_{i \in X}A_i $$ such that $$ X \in \mathcal F $$. Thus $$ x $$ also exists in $$ \cap_{X \in \mathcal F} (\cup_{i \in X}A_i) $$.
Since $$ x $$ is arbitrary, we can conclude that $$ \cup_{i \in J}A_i \subseteq \cap_{X \in \mathcal F} (\cup_{i \in X}A_i) $$.

Counterexample for:  $$\cap_{X \in \mathcal F} (\cup_{i \in X}A_i) \subseteq \cup_{i \in J}A_i $$:

Suppose $$ \mathcal F = \{ \{1, 2\}, \{1, 3\} \} $$    
$$ I = \cup \mathcal F = \{1, 2, 3\} $$    
$$ J = \cap \mathcal F = \{1\} $$    

Suppose $$ A_1 = \{a, b, c\} $$, $$ A_2 = \{b, c, d\}$$, $$ A_3 = \{d, e, f\} $$.
 
Thus $$ \cup_{i \in J}A_i = A_1 = \{a, b, c\} $$    
And $$ \cap_{X \in \mathcal F} (\cup_{i \in X}A_i) = (A_1 \cup A_2) \cap (A_1 \cup A_3) = \{a, b, c, d\} \cap \{a, b, c, d, e, f\} = \{a, b, c, d\} $$.

Thus $$\cap_{X \in \mathcal F} (\cup_{i \in X}A_i) \nsubseteq \cup_{i \in J}A_i $$.

**(d)**

We shall prove the theorem $$ \cup_{X \in \mathcal F}(\cap_{i \in X} A_i ) \subseteq \cap_{i \in J} A_i$$.

Suppose $$ x \in \cup_{X \in \mathcal F}(\cap_{i \in X} A_i) $$. Thus $$ x $$ must exist in atleast one of the set, $$ \cap_{i \in P} A_i $$, such that
 $$ P \in \mathcal F $$. Since $$ x \in \cap_{i \in P} A_i $$, and $$ J \subseteq P $$, it follows that $$ x $$ must exist in $$ \cap_{i \in J} A_i $$.
Thus we can conclude that if $$ x \in \cup_{X \in \mathcal F}(\cap_{i \in X} A_i ) $$, then $$ x \in \cap_{i \in J} A_i $$.

Suppose $$ \mathcal F = \{ \{1, 2\}, \{1, 3\} \} $$    
$$ I = \cup \mathcal F = \{1, 2, 3\} $$    
$$ J = \cap \mathcal F = \{1\} $$    

Suppose $$ A_1 = \{a, b, c\} $$, $$ A_2 = \{b, c, d\}$$, $$ A_3 = \{b, d, e\} $$.
 
Thus $$ \cap_{i \in J}A_i = A_1 = \{a, b, c\} $$    
And $$ \cup_{X \in \mathcal F} (\cap_{i \in X}A_i) = (A_1 \cap A_2) \cup (A_1 \cap A_3) = \{b, c\} \cup \{b\} = \{b, c\} $$.

Thus $$ \cap_{i \in J} A_i \nsubseteq \cup_{X \in \mathcal F}(\cap_{i \in X} A_i ) $$.

<hr/>

**Soln6**

Suppose $$ \varepsilon > 0 $$ is arbitrary. Suppose $$ \delta = \frac {\varepsilon} 3 $$. Suppose $$ x $$ is an arbitrary real number and $$ 0 < \vert x - 2 \vert < \delta $$.
Then we have: $$ \vert \, \frac {3x^2 - 12} {x-2} - 12 \, \vert $$, is equivalent to:    
$$ \leftrightarrow \vert \, \frac {3x^2 - 12x + 12} {x-2} \, \vert $$    
$$ \leftrightarrow \vert \, \frac {3(x^2 - 4x + 4)} {x-2} \, \vert $$    
$$ \leftrightarrow \vert \, \frac {3(x - 2)^2} {x-2} \, \vert $$    
Since $$ 0 < \vert\,x - 2\,\vert < \delta $$, thus $$ x - 2 \ne 0 $$     
$$ \leftrightarrow \vert \, 3(x - 2) \, \vert $$    
Since $$ 0 < \vert\,x - 2\,\vert < \delta $$:     
$$ \vert \, 3(x - 2) \, \vert < 3 \delta $$    
$$ \leftrightarrow \vert \, 3(x - 2) \, \vert < 3 \times \frac {\varepsilon} 3 $$    
$$ \leftrightarrow \vert \,3(x - 2) \, \vert < \varepsilon $$    

Thus, $$ \vert \, \frac {3x^2 - 12x + 12} {x-2} \, \vert < \varepsilon $$    

<hr/>

**Soln7**

Suppose that $$ \lim_{x \to c} f(x) = L $$. Thus for all $$ \varepsilon > 0 $$, there exists a $$ \delta $$ such that for all $$ x $$, if $$ 0 < \vert\,x - c\,\vert < \delta $$, then

$$ \vert f(x) - L \vert < \varepsilon $$.     
Since $$ L > 0 $$, if $$ \varepsilon = L $$, then:     
$$ \vert f(x) - L \vert < L $$.     
$$ = -L < f(x) - L < L $$.     
$$ = 0 < f(x) < 2L $$.     

Thus $$ f(x) > 0 $$.

<hr/>

**Soln8**

Suppose that $$ \lim_{x \to c} f(x) = L $$. Thus for all $$ \varepsilon > 0 $$, there exists a $$ \delta $$ such that for all $$ x $$, if $$ 0 < \vert\,x - c\,\vert < \delta $$, then

$$ \vert f(x) - L \vert < \varepsilon $$.     
$$ \leftrightarrow 7 \times \vert f(x) - L \vert < 7 \times \varepsilon $$.     
$$ \leftrightarrow \vert 7f(x) - 7L \vert < 7 \varepsilon $$.     

Since $$ \varepsilon > 0 $$, $$ 7 \varepsilon > 0 $$.

Thus, if $$ 0 < \vert\,x - c\,\vert < \delta $$, then $$ \leftrightarrow \vert 7f(x) - 7L \vert < \varepsilon' $$, where $$ \varepsilon' = 7 \varepsilon > 0 $$.

Thus $$ \lim_{x \to c} 7 f(x) = 7L $$.

<hr/>

**Soln9**

The proof and theorem both are correct. Following strategies are used:
  
1. To prove a goal of the form of $$ \exists x P(x) $$. Here existential instantiation is used.
2. To prove a goal of the form of $$ P \lor Q $$, all possible cases are considered.

<hr/>



