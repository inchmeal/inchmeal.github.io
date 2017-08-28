---
chapterName: "Proofs"
sectionName: "3.6 - Existence and Uniqueness Proofs"
chapter: 3
section: "3.6"
order: "006"
date: 2015-10-10
redirect_from:
  - /2015/10/10/how-to-prove-it-ch-3-sec-6.html
---

### Summary

- $$ \exists ! x P(x) $$ means there exists only one value of $$ x $$ for which $$ P (x) $$ is true.
- $$ \exists ! x P(x) $$ is equivalent to all of the following:
    - $$ \exists x (P(x) \land \forall y(P(y) \to y = x)) $$.
    - $$ \exists x \forall y(P(y) \leftrightarrow  y = x) $$.
    - $$ \exists x P(x) \land \forall y \forall z((P(y) \land P(z)) \to y = z) $$.
- To prove a goal of the form of $$ \exists ! x P(x) $$:    
    - Strategy 1: Prove $$ \exists x P(x) $$ and $$ \forall y \forall z((P(y) \land P(z)) \to y = z) $$. The first of these goals
      shows that there exists an $$ x $$ such that P(x) is true, and the second shows that it is unique. The two parts of the proof 
      are therefore sometimes labeled existence and uniqueness.     
    - Strategy 2: Prove $$ \exists x(P(x) \land \forall y(P(y) \to y = x)) $$, using strategies from previous
      sections.       
- To use a given of the form of $$ \exists ! x P(x) $$:    
    Consider it as two given statements, $$ \exists x P(x) $$ and $$ \forall y \forall z((P(y) \land P(z)) \to y = z) $$. To use the 
    first statement you should probably choose a name, say $$ x_0 $$, to stand for some object such that $$ P(x_0) $$ is true. The second
    tells you that if you ever come across two objects $$ y $$ and $$ z $$ such that $$ P(y) $$ and $$ P(z) $$ are both true, you can 
    conclude that $$ y = z $$.
    
<hr/>

**Soln1** 

Suppose $$ x $$ is arbitrary. Lets say $$ P(y) = x^2y = x - y $$. Thus we have to prove $$ \exists ! y P(y) $$:

<u>Existence:</u>

Suppose $$ y = \frac x {1 + x^2} $$. Then $$ x^2y = \frac {x^3} {1 + x^2} $$. Also $$ x - y = \frac {x^3} {1 + x^2} $$.
Thus we have $$ x^2y = x - y $$. Since $$ x $$ is arbitrary, we can say that for all values of $$ x $$, there exists a $$ y =  \frac x {1 + x^2} $$ such that
$$ x^2y = x - y $$. Thus we can conclude $$  \exists y P(y) $$.

<u>Uniqueness:</u>

Suppose $$ P(z_1) $$, then $$ x^2z_1 = x - z_1 $$, which give $$ z_1 = \frac x {1 + x^2} $$. Similarly suppose $$ P(z_2) $$, gives
 $$ z_2 = \frac x {1 + x^2} $$. Thus $$ z_1 = z_2 $$. Thus we can conclude that $$ \forall y \forall z((P(y) \land P(z)) \to y = z) $$ $$.
 
Thus we can say $$  \exists y P(y) \land \forall y \forall z((P(y) \land P(z)) \to y = z) $$. Thus we can conclude $$ \exists ! y P(y) $$.
Since $$ x $$ is arbitrary, we can conclude that for every value of $$ x $$, $$ \exists ! y P(y) $$ is true.

<hr/>

**Soln2**

Suppose $$ P(x) = xy + x - 4 = 4y $$. Then we have to prove $$ \forall y \exists ! x P(x) $$. 
 
<u>Existence:</u>

There are two possible cases:

- Case 1: Suppose $$ y = -1 $$. Suppose $$ x = 0 $$. Then $$ xy + x - 4 = -4 $$, and $$ 4y = -4 $$. Thus LHS = RHS, or 
 $$ xy + x - 4 = 4y $$.
 
- Case 2: Suppose $$ y \ne -1 $$. Suppose $$ x = 4 $$. Then $$ xy + x - 4 = 4y $$. Thus LHS = RHS, or $$ xy + x - 4 = 4y $$.

Thus from both cases we have for any arbitrary $$ y $$, $$ \exists x P(x) $$ is true.

<u>Uniqueness:</u>

Suppose for a value z $$ P(z) $$, then $$ P(z) = zy + z -4 = 4y $$, or $$ z = \frac {4(y+1)} {y+1} $$. Also suppose for a value $$ x $$, 
$$ P(x) $$. We have two possible cases:

- Case 1: $$ y = -1 $$. Then we have $$ -z + z - 4 = -4 $$, which says that for any value of $$ z $$, $$ P(z) $$ is true. 
Similarly, it can be shown that for $$ P(x) $$ is true for any value of $$ x $$.
 
- Case 2: $$ y \ne 1 $$. Then we have $$ z = \frac {4(y+1)} {y+1} $$, or $$ z = 4 $$. Similarly it can be proved that, if $$ P(x) $$, then 
$$ x = 4 $$. Or we can say that
 $$ \forall x \forall z((P(x) \land P(z)) \to x = z) $$.
 
Thus from both cases, if $$ y \ne 1 $$, then $$ \forall y \exists ! x P(x) $$ is true.

<hr/>

**Soln3**

Suppose $$ x $$ is arbitrary. Suppose $$ P(y) = \frac y x = y - x $$.

<u>Existence:</u>

Suppose $$ y = \frac {x^2} {x - 1} $$. Thus $$ \frac y x = \frac {x^2} {x - 1} \times \frac 1 x $$. Since $$ x \ne 0 $$, we get 
$$ \frac x {x - 1} $$. Also $$ y - x = \frac {x^2} {x - 1} - x = \frac x {x-1} $$. Thus $$ \frac y x = y - x $$. It follows that
$$ \exists y P(y) $$.

<u>Uniqueness:</u>

Suppose $$ P(z) \land P(y) $$ for values $$ z $$ and $$ y $$ respectively. Since $$ P(z) $$, then $$ \frac z x = z - x $$. Since 
$$ x \ne 0 \land x \ne 1 $$, it can be simplified to $$ z = \frac {x^2} {x - 1} $$.     
Similarly, since $$ P(y) $$, we can get $$ y = \frac {x^2} {x - 1} $$.

Thus we have $$ y = z = \frac {x^2} {x - 1} $$. It follows that $$ \forall y \forall z((P(y) \land P(z)) \to y = z) $$.
 
Thus we can conclude that for all $$ x $$, $$ \exists ! y P(y) $$.
 
<hr/>

**Soln4**

<u>Existence:</u>

Suppose $$ x \ne 0 $$, then $$ \frac 1 x $$ is defined. Suppose $$ y = \frac 1 x $$. Suppose $$ z $$ is arbitrary, then $$ zy = z \times \frac 1 x = \frac z x $$.
Thus there exists a $$ y = \frac 1 x $$ such that for all $$ x \ne 0 $$ and for all $$ z $$, we have $$ zy = \frac z x $$.

<u>Uniqueness:</u>

Suppose $$ y_1 $$, such that $$ zy_1 = \frac z x $$. Multiplying each side by $$ \frac 1 z $$, we get $$ y_1 = \frac 1 x $$. Thus $$ y_1 = y = \frac 1 x $$.
Thus we can say that $$ y = \frac 1 x $$ is a unique value of $$ y $$ for the given statement is to be correct.

<hr/>

**Soln5**

**(a)**

Suppose $$ x \in \cup ! \mathcal F $$. Then there exists a set $$ A \in \mathcal F $$ such that $$ x \in \mathcal F $$. Thus we can also say 
that $$ x \in \cup \mathcal F $$. Since $$ x $$ is arbitrary, it follows that $$ \cup ! \mathcal F \subseteq \cup \mathcal F $$.
  
**(b)**

($$ \cup ! \mathcal F \subseteq \cup \mathcal F $$)

This is already proved in first part.

($$ \cup \mathcal F \subseteq \cup ! \mathcal F $$)

Suppose $$ x \in \cup \mathcal F $$. Thus there atleast exists one set, say $$ A $$, in $$ \mathcal F $$ such that $$ x \in A $$.
Now suppose there is one more set, say $$ B $$, such that $$ B \in \mathcal F $$ and $$ x \in B $$. Since $$ x \in A \land x \in B $$,
it follows that $$ A \cap B \ne \phi $$. But it contradicts with the given that all sets of $$ \mathcal F $$ are disjoint. Thus $$ A = B $$.
Or we can say that only one set exists such that $$ x \in A \land A \in \mathcal F $$. It follows that $$ x \in \cup ! \mathcal F $$.
Now since $$ x $$ is arbitrary, it follows $$ \cup \mathcal F \subseteq \cup ! \mathcal F $$.

Thus from both directions, we can say that $$ \cup \mathcal F = \cup ! \mathcal F $$.

<hr/>

**Soln6**

**(a)**

<u>Existence:</u>     
Suppose $$ A = \phi $$. Clearly $$ \phi \in \mathcal P(U) $$. Also $$ \phi \cup B = B $$. Thus there exist a set, $$ A = \phi \in \mathcal P(U) $$
such that for every set $$ B \in \mathcal P(U) $$, $$ A \cup B = B $$.

<u>Uniqueness:</u>    
Suppose there is another set say, $$ A' \in \mathcal P(U) \land A' \cup B = B $$. Now for $$ B = \phi $$, $$ A' \cup \phi = \phi $$.
Thus we can say that $$ A' = A $$. Thus $$ A $$ is unique set such that $$ A \in \mathcal P(U) \land A \cup B = B $$.

**(b)**

<u>Existence:</u>     
Suppose $$ A = U $$. Clearly $$ U \in \mathcal P(U) $$. Also $$ U \cup B = U $$. Thus there exist a set, $$ A = U \in \mathcal P(U) $$
such that for every set $$ B \in \mathcal P(U) $$, we have $$ A \cup B = A $$.

<u>Uniqueness:</u>    
Suppose there is another set say, $$ A' \in \mathcal P(U) \land A' \cup B = A' $$. Now for $$ B = U $$, $$ A' \cup U = A' $$. Since 
$$ A' \in \mathcal P(U) $$, it follows $$ A' \subseteq U $$. Thus it follows that $$ A' \cup U = U $$. Since $$ A' \cup U = A' $$,
 it follows that $$ A' = U $$, or $$ A' = A = U $$. Thus $$ A $$ is unique set such that $$ A \in \mathcal P(U) \land A \cup B = A $$.

<hr/>

**Soln7**

**(a)**

<u>Existence:</u>     
Suppose $$ B $$ is arbitrary and $$ B \in \mathcal P(U) $$, or $$ B \subseteq U $$. Suppose $$ A = U $$. Clearly $$ U \in \mathcal P(U) $$. Also since $$ B \subseteq U $$, it follows that 
$$ U \cap B = B $$. Thus there exist a set, $$ A = U \in \mathcal P(U) $$ such that for every set $$ B \in \mathcal P(U) $$, and $$ A \cap B = B $$.

<u>Uniqueness:</u>    
Suppose $$ A' \in \mathcal P(U) $$ such that $$ A' \cap B = B $$.  Now for $$ B = U $$, we have $$ A' \cap U = U $$. But since $$ A' \subseteq U $$, $$ A' \cap U = A' $$.
It follows that $$ A' = U $$. Thus $$ A' = A = U $$.

**(b)**

<u>Existence:</u>     

Suppose $$ B \in \mathcal P(U) $$. Suppose $$ A = \phi $$. Clearly $$ \phi \in \mathcal P(U) $$. Also $$ \phi \cap B = \phi $$. Thus there exist a set, $$ A = \phi \in \mathcal P(U) $$
such that for every set $$ B \in \mathcal P(U) $$, $$ A \cap B = A $$.

<u>Uniqueness:</u>    
Suppose there is another set say, $$ A' \in \mathcal P(U) \land A' \cap B = A' $$. Now for $$ B = \phi $$, $$ A' \cap \phi = \phi $$.
But $$ A' \cap \phi = A' $$, it follows that $$ A' = A = \phi $$. Thus we can conclude that $$ A $$ is unique.

<hr/>

**Soln8**

**(a)**

<u>Existence:</u>     

Suppose $$ A $$ is arbitrary and $$ A \in \mathcal P(U) $$. Also suppose $$ B = U \setminus A $$. Suppose $$ C \in \mathcal P (U) $$.
Suppose $$ x \in C \cap B $$. Then:

$$ \leftrightarrow x \in C \cap B $$    
$$ \leftrightarrow x \in C \land x \in B $$    
$$ \leftrightarrow x \in C \land (x \in U \setminus A) $$    
$$ \leftrightarrow x \in C \land (x \in U \land x \notin A) $$    
$$ \leftrightarrow x \in C \land x \in U \land x \notin A $$    
Since $$ C \subseteq U $$,     
$$ \leftrightarrow x \in C \land x \notin A $$    
$$ \leftrightarrow x \in C \setminus A $$    

Since $$ x $$ is arbitrary, we have $$ C \cap B = C \setminus A $$.

Thus there exists a set $$ B = U \setminus A $$ such that $$ C \setminus A = C \cap B $$.

<u>Uniqueness:</u>    

Now for uniqueness proof. Lets assume $$ B' \in P(U) $$ such that  $$ C \setminus A = C \cap B' $$. Suppose $$ C = U $$, it follows that 
$$ U \setminus A = U \cap B' $$. But since $$ B' \subseteq U $$, $$ U \cap B' = B' $$, it follows that $$ U \setminus A = B' $$. Thus we 
have $$ B' = B = U \setminus A $$.

**(b)**

<u>Existence:</u>     

Suppose $$ A $$ is arbitrary and $$ A \in \mathcal P(U) $$. Also suppose $$ B = U \setminus A $$. Suppose $$ C \in \mathcal P (U) $$.
Suppose $$ x \in C \setminus B $$. Then:

$$ \leftrightarrow x \in C \land x \notin B $$    
$$ \leftrightarrow x \in C \land \lnot (x \in U \setminus A )$$    
$$ \leftrightarrow x \in C \land \lnot (x \in U \land x \notin A )$$    
$$ \leftrightarrow x \in C \land (x \notin U \lor x \in A )$$    
Since $$ x \notin U $$ is always false as we assumed $$ x \in C \setminus B $$:    
$$ \leftrightarrow x \in C \land (false \lor x \in A )$$    
$$ \leftrightarrow x \in C \land x \in A $$    
$$ \leftrightarrow x \in C \cap A $$    

Since $$ x $$ is arbitrary, we have $$ C \setminus B = C \cap A $$.

<u>Uniqueness:</u>    

Now for uniqueness proof. Lets assume $$ B' \in P(U) $$ such that  $$ C \setminus B' = C \cap A $$. Suppose $$ C = U $$, it follows that 
$$ U \setminus B' = U \cap A $$. Since $$ A \subseteq U $$, it follows $$ U \cap A = A $$. Thus we have $$ U \setminus B' = A $$. Thus if 
if $$ x \in B' $$, then $$ x \notin A $$. Thus $$ B' $$ contains all the elements which are not in $$ A $$, or $$ B' = U \setminus A $$.
Thus $$ B' = B = U \setminus A $$.

<hr/>

**Soln9**

**(a)**

<u>Existence:</u>     

Suppose $$ X = \phi $$. Now suppose $$ x \in A \triangle \phi $$, then it follows that $$ x \in A $$. Similarly if $$ x \in A $$, then
 $$ x \in A \triangle \phi $$. Since $$ x $$ is arbitrary, $$ A \triangle \phi = \phi $$.
 
<u>Uniqueness:</u>    

Suppose $$ X' $$ is a set such that $$ A \triangle X' = A $$. Now for $$ A = \phi $$, we have $$ \phi \triangle X' = \phi $$. But $$  \phi \triangle X' = X' $$.
It follows that $$ X' = X = \phi $$. Or we can say that $$ X $$ is unique.
 
**(b)**

Suppose $$ A $$ is arbitrary. From last part we know that $$ X = \phi $$. 
 
<u>Existence:</u>     

Suppose $$ B = A $$. Then $$ A \triangle B = A \triangle A $$. Since $$ A \triangle A $$ contains all element which exists in $$ A \setminus A $$.
But clearly $$ A \setminus A = \phi $$. Thus $$ A \triangle A = \phi $$. Thus there exists a set $$ B = A $$ such that $$ A \triangle B = \phi $$.

<u>Uniqueness:</u>    

Suppose $$ B' $$ is a set such that $$ A \triangle B' = \phi $$. Now for $$ A = \phi $$, we have $$ \phi \triangle B' = \phi $$. But since 
$$ \phi \triangle B' = B' $$, it follows that $$ B' = \phi $$. Or we can conclude that $$ B $$ is unique.

**(c)**

<u>Existence:</u>     

Suppose $$ C = A \triangle B $$. Then we have $$ A \triangle C $$:
$$ \leftrightarrow= A \triangle ( A \triangle B) $$      
$$ \leftrightarrow= (A \triangle  A) \triangle B $$      
$$ \leftrightarrow= \phi \triangle B $$      
$$ \leftrightarrow= B $$      

<u>Uniqueness:</u>    

Suppose $$ C' $$ is a set such that $$ A \triangle C' = B $$. Suppose $$ A = C' \triangle B $$. Thus we have $$ A \triangle B $$ :
$$ \leftrightarrow (C' \triangle B) \triangle B $$    
$$ \leftrightarrow C' \triangle (B \triangle B) $$    
$$ \leftrightarrow C' \triangle \phi $$    
$$ \leftrightarrow C' $$    

Thus we have $$ C' = A \triangle B $$. Or we can say that $$ C $$ is unique.

<hr/>

**(d)**

Suppose $$ A $$ is arbitrary. 

<u>Existence:</u>     

Suppose $$ B = A $$. Suppose $$ C \subseteq A $$. Then we have $$ B \triangle C $$ : 
$$ \leftrightarrow A \triangle C $$.    
$$ \leftrightarrow A \setminus C \cup C \setminus A $$.    
Since $$ C \subseteq A $$, $$ C \setminus A = \phi $$:    
$$ \leftrightarrow A \setminus C \cup \phi $$.    
$$ \leftrightarrow A \setminus C $$.    

Thus there exists a $$ B = A $$, such that $$ B \triangle C = A \setminus C $$.

<u>Uniqueness:</u>    

Suppose $$ B' $$ is a set such that $$ B' \triangle C = A \setminus C $$. Since this is true for all sets $$ A $$ and all sets $$ C $$ such that 
$$ C \subseteq A $$, this must be true for $$ C = \phi $$. Thus $$ B' \triangle \phi = A \setminus \phi $$, which is equivalent to $$ B' = A $$.
Thus we can conclude that $$ B' $$ is unique.

<hr/>

**Soln10**

We can have following cases:

Case 1: $$ A = \phi $$.     
Suppose $$ \mathcal F $$ does not contain any set. Thus $$ \cup \mathcal F = \phi $$. But since $$ \mathcal F $$ is empty, $$ A \in \mathcal F $$ 
is false. Thus if $$ A = \phi $$ then $$ \cup \mathcal F = A \to A \in \mathcal F $$ is false. Or by contra-positive, we can conclude that if 
$$ \cup \mathcal F = A \to A \in \mathcal F $$ then $$ A \ne \phi $$.
 
Case 2: $$ A $$ contains more than one element:    
Suppose $$ x \in A $$. Suppose $$ \mathcal F = \{ A_1, A_2 \} $$ such that sets $$ A_1 = \{ x \} $$ and $$ A_2 = A \setminus  A_1 $$. Thus $$ A = A_1 \cup A_2 $$.
Or we can say that $$ \cup \mathcal F = A $$. But clearly $$ A \notin \mathcal F $$. Or $$ \cup \mathcal F = A \to A \in \mathcal F $$ is false.
Thus by contrapositive we can say that if $$ \cup \mathcal F = A \to A \in \mathcal F $$ then $$ A $$ does not contains more then one element.

Thus combining both cases 1 and 2, there is only one possibility that $$ A $$ contains only one element.

<hr/>

**Soln11**

<u>Existence:</u>     
Suppose $$ A = \cup \mathcal F $$. Since $$ \mathcal F \subseteq \mathcal F $$, it follows that $$ \cup \mathcal F \in \mathcal F $$. Suppose $$ P \in \mathcal F $$, 
then if $$ x \in P $$, it follows that $$ x \in \cup \mathcal F $$. Thus $$ P \subseteq \cup \mathcal F $$. Since $$ P $$ is arbitrary, 
$$ \forall P \in \mathcal F (P \subseteq \cup \mathcal F)) $$.
 
<u>Uniqueness:</u>    

Suppose $$ Q_1 \subseteq \mathcal F $$ and $$ Q_2 \subseteq \mathcal F $$ are two different sets such that $$ \forall P \in \mathcal F (P \subseteq Q_1 )) $$ and 
$$ \forall P \in \mathcal F (P \subseteq Q_2 )) $$. Since $$ Q_1 \subseteq \mathcal F $$, we can replace $$ P $$ with $$ Q_1 $$ in $$ \forall P \in \mathcal F (P \subseteq Q_2 )) $$ 
and $$ P $$ with $$ Q_2 $$ in $$ \forall P \in \mathcal F (P \subseteq Q_1 )) $$. Thus we get $$ Q_1 \subseteq Q_2 $$ and $$ Q_2 \subseteq Q_1 $$. It follows that
$$ Q_1 = Q_2 $$.

<hr/>

**Soln12**

**(a)**

Required statement: $$ \exists x \exists y ( P(x) \land P(y) \land x \ne y \land \forall z (P(z) \to (z = x \lor z = y)) ) $$.

**(b)**

We shall prove it in two steps:

<u>Existence Proof:</u> First prove two such value exists so that $$ P(x) $$ is true.

<u>Uniqueness Proof:</u> Prove if there is any value, say $$ z $$ so that $$ P(z) $$ is true, then this value must be equal to any of the two values find in previous step. 

**(c)**

<u>Existence:</u>     

Suppose $$ x = 0 $$, then we have $$ x^3 = x^2 = 0 $$.

Also suppose $$ x = 1 $$, then we have $$ x^3 = x^2 = 1 $$.

<u>Uniqueness:</u>    

Suppose for a value $$ x = z $$ such that $$ z \ne 0 \land z \ne 1 $$, and $$ x^3 = x^2 $$. Thus $$ z^3 = z^2 $$. Since $$ z \ne 0 $$, multiplying both
sides by $$ \frac 1 {z^2} $$, we get $$ z = 1 $$. Thus it contradicts with the assumption $$ z \ne 1 $$. So we can conclude that $$ 0 $$ and 
$$ 1 $$ are the only possible values for $$ x $$.


