---
layout: blog
title:  "How To Prove It, Ch-5 Sec-5.4, Images and Inverse Images: A Research Project"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 5, Section - 5.4, Images and Inverse Images: A Research Project from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

- Suppose $$ f : A → B $$ and $$ X \subseteq A $$. Then the image of $$ X $$ under $$ f $$ is the set $$ f(X) $$ defined as follows:    
  $$ f(X) = \{ f(x) \, \vert \, x \in X \} = \{ b \in B \, \vert \, \exists x \in X ( f(x) = b) \} $$.    
- If $$ Y \subseteq B $$, then the inverse image of $$ Y $$ under $$ f $$ is the set $$ f^{−1}(Y) $$ defined as follows:     
  $$ f^{−1}(Y ) = \{ a \in A \, \vert \, f(a) \in Y \} $$.
- In this section, we also learned a way to come up with counter examples. It might not help always for finding counter examples but it may
    atleast give a starting point. The outline is as follows:
    - Try to prove the theorem.
    - If theorem is not correct, we will get stuck at some point.
    - Try to use the information gathered from the point where we are stuck in the proof to come up with counter example.

<hr/>

**Soln1**

**(a)**

Yes it will always be true. Proof:

($$ \to $$)Suppose $$ y \in f(W \cup X) $$. Thus for some $$ x \in W \cup X $$, $$ f(x) = y $$. Thus we have two cases:

Case 1: $$ x \in X $$    
Thus $$ y = f(x) $$ and $$ x \in X $$, it follows $$ y \in f(X) $$. Or we can also say $$ y \in (f(X) \cup f(W)) $$.
  
Case 2: $$ x \in W $$     
Thus $$ y = f(x) $$ and $$ x \in W $$, it follows $$ y \in f(W) $$. Or we can also say $$ y \in (f(X) \cup f(W)) $$.

Thus from both cases, $$ y \in (f(X) \cup f(W)) $$. Since $$ y $$ is arbitrary, it follows that $$ f(W \cup X) \; \subseteq \; f(W) \cup f(X) $$.

($$ \rightarrow $$) Suppose $$ y \in f(W) \cup f(X) $$. Thus we have two possible cases:

Case 1: $$ y \in f(W) $$.    
Thus for some $$ x \in W $$, $$ f(x) = y $$. Since $$ x \in W $$, it follows $$ x \in W \cup X $$. Since $$ x \in W \cup X $$ and $$ f(x) = y $$,
 it follows $$ y \in f(W \cup X) $$.
 
Case 2: $$ y \in f(X) $$.    
Thus for some $$ x \in X $$, $$ f(x) = y $$. Since $$ x \in X $$, it follows $$ x \in W \cup X $$. Since $$ x \in W \cup X $$ and $$ f(x) = y $$,
 it follows $$ y \in f(W \cup X) $$.

Thus from both cases $$ y \in f(W \cup X) $$. Since $$ y $$ is arbitrary, it follows that $$ f(W) \cup f(X) \; \subseteq \; f(W \cup X) $$.

Since $$ f(W \cup X) \; \subseteq \; f(W) \cup f(X) $$ and $$ f(W) \cup f(X) \; \subseteq \; f(W \cup X) $$, it follows that $$ f(W \cup X) \; = \; f(W) \cup f(X) $$.

**(b)**

No, it is not true. Counter example:

Suppose $$ f = \{ (1,a), (2,b), (3,a) \} $$.     
$$ W = \{1, 2\}, X = \{ 2, 3\} $$.    
      
Thus, $$ f(W) = \{ a,b\} $$.     
 $$ f(X) = \{b,a\} $$.     
 $$ f(W) \setminus f(X) = \phi $$.     
 
 Also, $$ W \setminus X = \{1 \} $$, Thus $$ f(W \setminus X) = \{a\} $$.
 
 Clearly $$ f(W \setminus X) \; \ne \; f(W) \setminus f(X) $$.
  
**(c)**

No, it is not true. Counter example:

Suppose $$ f = \{ (1,a), (2,b) \} $$.     
$$ W = \{1\}, X = \{ 1, 2\} $$.
    
Clearly $$ W \subseteq X $$.

Now, $$ f(W) = \{a\} $$ and $$ f(X) = \{a, b\} $$. Clearly $$ f(W) \nsubseteq f(X) $$. Thus $$ W \subseteq X $$ but $$ f(W) \nsubseteq f(X) $$.
 
<hr/>

**Soln2**

**(a)**

Yes, it will be always true. Proof:

($$ \to $$)Suppose $$ x \in f^{-1}(Y \cap Z) $$. Thus $$ x \in A $$ and $$ f(x) \in Y \land f(x) \in Z $$. Since $$ x \in A $$ and $$ f(x) \in Y $$,
it follows $$ x \in f^{-1}(Y) $$. Similarly, since $$ x \in A $$ and $$ f(x) \in Z $$, it follows $$ x \in f^{-1}(Z) $$. Thus $$ x \in f^{-1}(Y) \cap f^{-1}(Z) $$.
Since $$ x $$ is arbitrary, it follows $$ f^{-1}(Y \cap Z) \; \subseteq \; f^{-1}(Y) \cap f^{-1}(Z) $$.

($$ \leftarrow $$)Suppose $$ x \in f^{-1}(Y) \cap f^{-1}(Z) $$. Thus $$ x \in f^{-1}(Y) $$ and $$ x \in f^{-1}(Z) $$. It follows that $$ x \in A $$ and
$$ f(x) \in Y $$ and $$ f(x) \in Z $$. It follows $$ f(x) \in Y \cap Z $$. Since $$ x \in A $$ and $$ f(x) \in Y \cap Z $$, it follows that $$ x \in f^{-1}(Y \cap Z) $$.
Since $$ x $$ is arbitrary, it follows $$ f^{-1}(Y) \cap f^{-1}(Z) \; \subseteq \; f^{-1}(Y \cap Z) $$.

Thus from both directions, we can conclude $$ f^{-1}(Y \cap Z) \; = \; f^{-1}(Y) \cap f^{-1}(Z) $$ 


**(b)**

Yes, it will be always true. Proof:

($$ \to $$)Suppose $$ x \in f^{-1}(Y \cup Z) $$. Thus $$ x \in A $$ and f(x) \in Y \lor f(x) \in Z $$. Thus we have two cases:

Case 1: $$ f(x) \in Y $$     
Since $$ x \in A $$ and $$ f(x) \in Y $$, it follows $$ x \in f^{-1}(Y) $$.

Case 2: $$ f(x) \in Z $$     
Since $$ x \in A $$ and $$ f(x) \in Z $$, it follows $$ x \in f^{-1}(Z) $$.

Thus we have $$ x \in f^{-1}(Y) $$ or $$ x \in  f^{-1}(Z) $$. It follows $$ x \in f^{-1}(Y) \cup f^{-1}(Z) $$. 

Since $$ x $$ is arbitrary, it follows $$ f^{-1}(Y \cup Z) \; \subseteq \; f^{-1}(Y) \cup f^{-1}(Z) $$.

($$ \leftarrow $$)Suppose $$ x \in f^{-1}(Y) \cup f^{-1}(Z) $$. Thus $$ x \in f^{-1}(Y) $$ or $$ x \in f^{-1}(Z) $$. It follows we have following cases:
 
Case 1: $$ x \in f^{-1}(Y) $$     
Thus $$ x \in A $$ and $$ f(x) \in Y $$. Or we can also say $$ f(x) \in Y \cup Z $$.
 
Case 2: $$ x \in f^{-1}(Z) $$     
Thus $$ x \in A $$ and $$ f(x) \in Z $$. Or we can also say $$ f(x) \in Y \cup Z $$.

It follows from all possible cases that $$ x \in A $$ and $$ f(x) \in Y \cup Z $$. Thus $$ x \in f^{-1}(Y \cup Z) $$. Since $$ x $$ is arbitrary, it 
follows that $$ f^{-1}(Y) \cup f^{-1}(Z) \; \subseteq \; f^{-1}(Y \cup Z) $$.
 
Thus we have $$ f^{-1}(Y \cup Z) \; \subseteq \; f^{-1}(Y) \cup f^{-1}(Z) $$ and $$ f^{-1}(Y) \cup f^{-1}(Z) \; \subseteq \; f^{-1}(Y \cup Z) $$. We can conclude
that $$ f^{-1}(Y \cup Z) \; = \; f^{-1}(Y) \cup f^{-1}(Z) $$.

**(c)**

Yes, it will be always true. Proof:

($$ \to $$)Suppose $$ x \in f^{-1}(Y \setminus Z) $$. Thus $$ x \in A $$ and $$ f(x) \in Y \setminus Z $$. Thus $$ f(x) \in Y \land f(x) \notin Z $$.
 Since $$ x \in A $$ and $$ f(x) \in Y $$, it follows $$ x \in f^{-1}(Y) $$. Also, since $$ x \in A $$ and $$ f(x) \notin Z $$, it follows $$ x \notin f^{-1}(Z) $$.
 Since $$ x \in f^{-1}(Y) $$ and  $$ x \notin f^{-1}(Z) $$, it follows that $$ x \in  f^{-1}(Y) \setminus  f^{-1}(Z) $$. Since $$ x $$ is arbitrary, it follows
 $$ f^{-1}(Y \setminus Z) \; \subseteq \; f^{-1}(Y) \setminus  f^{-1}(Z) $$.
 
($$ \leftarrow $$)Suppose $$ x \in f^{-1}(Y) \setminus  f^{-1}(Z) $$. Thus $$ x \in  f^{-1}(Y) $$ and $$ x \notin f^{-1}(Z) $$. Since $$ x \in  f^{-1}(Y) $$,
 it follows $$ x \in A $$ and $$ f(x) \in Y $$. Since $$ x \in A $$ and $$ x \notin f^{-1}(Z) $$, it follows $$ f(x) \notin Z $$. Thus we have $$ f(x) \in Y $$
 and $$ f(x) \notin Z $$. It follows $$ f(x) \in Y \setminus Z $$. Since $$ x \in A $$ and $$ f(x) \in Y \setminus Z $$, it follows that $$ x \in f^{-1}(Y \setminus Z) $$.
 Since $$ x $$ is arbitrary, it follows that $$ f^{-1}(Y) \setminus  f^{-1}(Z) \; \subseteq \; f^{-1}(Y \setminus Z) $$.

Now we can conclude from both directions that $$ f^{-1}(Y \setminus Z) \; = \; f^{-1}(Y) \setminus  f^{-1}(Z) $$.

**(d)**

No, it is not always true. Counter example:
 
Suppose $$ A=\{a,b\}, B = \{1,2,3\}, Y = \{1\}, Z = \{1,2\},  f = \{(a,1), (b,3) \} $$.

Thus $$ Y \subseteq Z $$.

Also, $$ f^{-1}(Y) = \{a\} $$ and $$ f^{-1}(Z) = \{a\} $$. Thus $$  f^{-1}(Y) \subseteq f^{-1}(Z) $$.

Thus even if $$  f^{-1}(Y) \subseteq f^{-1}(Z) $$, $$ Y \nsubseteq Z $$.

<hr/>

**Soln3** False.

Suppose $$ A = \{1,2,3\}, X = \{1,3\}, f = \{(1,a), (2,a), (3,b) \} $$.

Thus $$ f(X) = \{a,b\} $$ and $$ f^{-1}(f(X)) = \{1,2,3\} $$. Thus $$ f^{-1}(f(X)) \ne X $$. Thus if $$ f $$ is not one-to-one, theorem is not correct.
 
<hr/>

**Soln4** False.

Suppose $$ A=\{a,b\}, B = \{1,2,3\}, Y = \{1\}, Z = \{1,2\},  f = \{(a,1), (b,3) \} $$.

Also, $$ f^{-1}(Y) = \{a\} $$ and $$ f(f^{-1}(Y)) = \{1,3\} $$. Thus $$ f(f^{-1}(Y)) = \{1,3\} \ne Y $$. Thus if $$ f $$ is not onto, theorem is incorrect.

<hr/>

**Soln5** TODO

<hr/>

**Soln6**

Suppose $$ P $$ denotes inverse image of $$ Y $$ under $$ f $$. Thus $$ P = \{ a \in A \, \vert \, f(a) \in Y \} $$.

Also suppose $$ Q $$ denotes image of $$ Y $$ under $$ f^{-1} $$. Thus $$ Q = \{ a \in A \, \vert \, \exists y \in Y(f^{-1}(y) = a) \} $$. 

($$ \to $$)Suppose $$ x \in P $$. Thus $$ x \in A $$ and $$ f(x) \in Y $$. Suppose $$ y = f(x) $$. Thus $$ y \in Y $$ and $$ f^{-1}(y) = x $$. Thus there exists an
  element $$ y \in Y $$ such that $$ f^{-1}(y) = x $$. It follows that $$ x \in Q $$. Thus $$ P \subseteq Q $$.
   
($$ \leftarrow $$)Suppose $$ x \in Q $$. Thus for some element $$ y \in Y $$ we have $$ f^{-1}(y) = x $$. Since $$ f $$ is one-to-one and onto, and $$ f^{-1}(y) = x $$, it follows $$ f(x) = y $$. 
 Since $$ x \in Q $$, it follows $$ x \in A $$. Since $$ x \in A $$ and $$ f(x) = y \in Y $$, it follows $$ x \in P $$. Thus $$ Q \subseteq P $$.
 
Since $$ P \subseteq Q $$ and $$ Q \subseteq P $$, we can conclude that $$ P = Q $$.

<hr/>

 

