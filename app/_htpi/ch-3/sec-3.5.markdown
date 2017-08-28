---
chapterName: "Proofs"
sectionName: "3.5 - Disjunctions"
chapter: 3
section: "3.5"
order: "005"
date: 2015-09-30
redirect_from:
  - /2015/09/30/how-to-prove-it-ch-3-sec-5.html
---

### Summary

- To use a given of the form $$ P \lor Q $$:
    - Break proof into cases. For case 1, assume that $$ P $$ is true and use this assumption to prove the goal.
      For case 2, assume $$ Q $$ is true and give another proof of the goal.
    - Another strategy can be: If it is also given $$ \lnot P $$, or it can also be proved that $$ P $$is false, then
      use this given to conclude that Q is true. Similarly, if it is given $$ \lnot Q $$ or it can be proved that $$ Q $$ 
      is false, then it can be used to conclude that $$ P $$ is true.
- To prove a goal of the form $$ P ∨ Q $$:
    - Break the proof into cases. In each case, either prove P or prove Q.
    - Another strategy can be: If $$ P $$ is true, then clearly the goal $$ P \lor Q $$ is true, so only need to worry
      about the case in which $$ P $$ is false. Thus for the case $$ P $$ is false, complete the proof by proving that $$ Q $$ is true. 
      Point to note here is this strategy is same as proving the goal $$ \lnot P \to Q $$. Similarly it $$ Q $$ can be used instead 
      of $$ P $$. 
<hr/>

**Soln1**

Suppose $$ x \in A \cap (B \cup C) $$. Thus $$ x \in A $$ and $$ x \in B \lor x \in C $$. Thus we have two cases:

Case 1: Suppose $$ x \in B $$. Since $$ x \in A $$, it follows that $$ x \in (A \cap B) $$. Thus $$ x \in (A \cap B) \cup C $$.

Case 2: Suppose $$ x \in C $$. Thus $$ x \in (A \cap B) \cup C $$.

Thus in all the cases, $$ x \in (A \cap B) \cup C $$. Since $$ x $$ is arbitrary, $$ A \cap (B \cup C) \subseteq (A \cup B) \cap C $$.

<hr/>

**Soln2**

Suppose $$ x \in (A \cup B) \setminus C $$. Thus either $$ x \in A \setminus C $$ or $$ x \in B \setminus C $$. Thus we have two cases:
 
Case 1: Suppose $$ x \in A \setminus C $$. Thus $$ x \in A $$. Since $$ x \in A $$, it follows that $$ x \in ( A \cup (B \setminus C) ) $$.

Case 2: Suppose $$ x \in B \setminus C $$. Clearly it follows that $$ x \in ( A \cup (B \setminus C) ) $$.

Thus in all the possible cases, $$ x \in ( A \cup (B \setminus C) ) $$. Since $$ x $$ is arbitrary, we can conclude
that $$ (A \cup B) \; \subseteq \; A \cup (B \setminus C) $$.

<hr/>

**Soln3**

Suppose $$ x \in (A \setminus (A \setminus B)) $$. Thus we have: 

$$ x \in A \land \lnot (x \in (A \setminus B)) $$.     
$$ \quad = x \in A \land \lnot(x \in A \land x \notin B) $$.    
$$ \quad = x \in A \land (x \notin A \lor x \in B) $$.    
$$ \quad = x \in A \land x \in B $$.    
$$ \quad = x \in (A \cap B) $$.

Since $$ x $$ is arbitrary, we can conclude that $$ A \setminus (A \setminus B) = A \cap B $$.

<hr/>

**Soln4**

Suppose  A ∩ C ⊆ B ∩ C   and    A ∪ C ⊆ B ∪ C.     Prove that   A ⊆ B.

Suppose $$ x \in A $$. Then $$ x \in A \cup C $$. Since $$ A \cup C \subseteq B \cup C $$, it follows that $$ x \in B \cup C $$.
Thus either $$ x \in B $$ or, $$ x \in C $$. So we have following cases:

Case 1: Suppose $$ x \in B $$, then it follows $$ x \in A \to x \in B $$.

Case 2: Suppose $$ x \in C $$. Thus $$ x \in A \land x \in C $$. Since $$ A \cap C \subseteq B \cap C $$, it follows that $$ x \in B $$.

Thus from all the cases, if $$ x \in A $$, then $$ x \in B $$. Since $$ x $$ is arbitrary, it follows that $$ A \subseteq B $$.

<hr/>

**Soln5**

We shall prove this using contra-positive. Suppose $$ x \notin A $$. Since $$ ((A \setminus B) \cup (B \setminus A)) \subseteq A $$, it 
follows that $$ x \notin ((A \setminus B) \cup (B \setminus A)) $$. Thus $$ x \notin (A \setminus B) $$ as well as $$ x \notin (B \setminus A) $$.
Since $$ x \notin A $$, then clearly $$ x \notin (A \setminus B) $$. Thus we are left with $$ x \notin (B \setminus A) $$. This can be simplified
into $$ \lnot (x \in B \land x \notin A) $$  which is equivalent to $$ x \notin B \lor x \in A $$. Since $$ x \notin A $$, and $$ x \notin B \lor x \in A $$, 
it follows that $$ x \notin B $$. Thus we have if $$ x \notin A $$ then $$ x \notin B $$. By contra-positive, we can say if $$ x \in B $$ 
then $$ x \in A $$. Since $$ x $$ is arbitrary, we can conclude that $$ B \subseteq A $$.
 
<hr/>

**Soln6**

($$ \to $$)Suppose $$ A \cup C \subseteq B \cup C $$. Suppose $$ x \in A \setminus C $$. Thus $$ x \in A \cup C $$. Since $$ A \cup C \subseteq B \cup C $$,
it follows that $$ x \in B \cup C $$. And since $$ x \in B \setminus C $$, it follows that $$ x \in B $$. Thus we have $$ x \in B \land x \notin C $$. Since $$ x $$
is arbitrary, we can conclude that $$ A \setminus C \subseteq B \setminus C $$.

($$ \leftarrow $$)Suppose $$ A \setminus C \subseteq B \setminus C $$. Suppose $$ x \in A \cup C $$. Thus we have two cases:

Case 1: Suppose $$ x \in C $$. Then clearly $$ x \in B \cup C $$.
 
Case 2: Suppose $$ x \notin C $$. Then since $$ x \in A \cup C $$, we have $$ x \in A $$. Thus $$ x \in A \setminus C $$. Since $$ A \setminus C \subseteq B \setminus C $$,
 it follows that, $$ x \in (B \setminus C) $$. Since $$ x \notin C $$, it follows that $$ x \in B $$. Thus we can say that $$ x \in (B \cup C) $$.
  
Thus from all the possible cases, if $$ x \in A \cup C $$ then $$ x \in B \cup C $$. Since $$ x $$ is arbitrary, we can conclude that $$ A \cup C \subseteq B \cup C $$.

<hr/>

**Soln7**

Suppose $$ x \in \mathcal P(A) \cup \mathcal P(B) $$. Thus we have two possible cases:

Case 1: Suppose $$ x \in \mathcal P(A) $$. Then $$ x \subseteq A $$. Suppose $$ y \in x $$, then $$ y \in A $$. Since $$ y \in A $$, then $$ y \in A \cup B $$. 
Since $$ y $$ is arbitrary, it follows that $$ x \subseteq (A \cup B) $$. Thus we have $$ x \in \mathcal P(A \cup B) $$.

Case 2: Suppose $$ x \in \mathcal P(B) $$. Then $$ x \subseteq B $$. Suppose $$ y \in x $$, then $$ y \in B $$. Since $$ y \in B $$, then $$ y \in A \cup B $$. 
Since $$ y $$ is arbitrary, it follows that $$ x \subseteq (A \cup B) $$. Thus we have $$ x \in \mathcal P(A \cup B) $$.

Thus from all cases, if $$ x \in \mathcal P(A) \cup \mathcal P(B) $$, then $$ x \in \mathcal P(A \cup B) $$. Since $$ x $$ is arbitrary, it follows 
that $$ \mathcal P(A) \cup \mathcal P(B) \subseteq \mathcal P(A \cup B) $$.

<hr/>

**Soln8**

Suppose $$ \mathcal P(A) \cup \mathcal P(B) = \mathcal P(A \cup B) $$. Then $$ A \cup B \in \mathcal P(A \cup B) $$. Since $$ \mathcal P(A \cup B)  = \mathcal P(A) \cup \mathcal P(B) $$, it
follows that $$ A \cup B \in \mathcal P(A) \cup \mathcal P(B) $$. Thus we have following cases:

Case 1: Suppose $$ A \cup B \in \mathcal P(A) $$. Then $$ A \cup B \subseteq A $$. It follows that $$ B \subseteq A $$.
 
Case 2: Suppose $$ A \cup B \in \mathcal P(B) $$. Then $$ A \cup B \subseteq B $$. It follows that $$ B \subseteq B $$.

Thus we have either $$ A \subseteq B $$ or $$ B \subseteq A $$.

<hr/>

**Soln9** 

Suppose $$ y + \frac 1 x = 1 + \frac y x $$. It is equivalent to:    
$$ \leftrightarrow \frac {xy + 1} x = \frac {x + y} x $$    
$$ \leftrightarrow xy + 1 = x + y $$    
$$ \leftrightarrow xy - x - y + 1 = 0 $$    
$$ \leftrightarrow x(y - 1) - 1(y - 1) = 0 $$    
$$ \leftrightarrow (x - 1)(y - 1) = 0 $$    
$$ \leftrightarrow x = 1 \lor y = 1 $$    

<hr/>

**Soln10**

Suppose $$ \vert x - 3 \vert > 3 $$. Then we have two cases:

Case 1: Suppose $$ x - 3 > 0 $$. Then $$ x - 3 > 3 $$. It follows that $$ x > 6 $$. Multiplying both sides by $$ x $$, we get $$ x^2 > 6x $$.

Case 2: Suppose $$ x - 3 < 0 $$. Then $$ 3 - x > 3 $$. It follows that $$ x < 0 $$. Since $$ x < 0 $$, $$ x^2 > 0 $$ and $$ 6x < 0 $$. Thus $$ x^2 > 6x $$.
 
<hr/>

**Soln11**

($$ \to $$)Suppose $$ \vert 2x - 6 \vert > x $$. Then we have two cases:

Case 1: Suppose $$ 2x - 6 > 0 $$, then $$ 2x - 6 > x $$.    
$$ \leftrightarrow x > 6 $$.    
$$ \leftrightarrow x - 4 > 2 $$.    
Since $$ x - 4 > 0 $$, it follows that \vert x - 4 \vert > 2 $$.

Case 2: Suppose $$ 2x - 6 < 0 $$, then $$ 6 - 2x > x $$    
$$ \leftrightarrow 6 > 3x $$    
$$ \leftrightarrow x < 2 $$    
$$ \leftrightarrow x - 4 < -2 $$    
$$ \leftrightarrow 4 - x > 2 $$    
Since $$ x - 4 < 0 $$, it follows that \vert x - 4 \vert > 2.

($$ \leftarrow $$)Suppose $$ \vert x - 4 \vert > 2 $$. Then we have two cases:
 
Case 1: Suppose $$ x - 4 > 0 $$, then $$ x - 4 > 2 $$.    
$$ \leftrightarrow x > 6 $$.    
$$ \leftrightarrow x - 6 > 0 $$.    
$$ \leftrightarrow 2x - 6 > x $$.    
Since $$ x > 6 $$, so $$ 2x - 6 > 0 $$.    
Thus $$ \vert 2x - 6 \vert > x $$.
 
Case 2: Suppose $$ x - 4 < 0 $$, then $$ 4 - x > 2 $$.    
$$ \leftrightarrow -x > -2 $$.    
$$ \leftrightarrow x < 2 $$.    
$$ \leftrightarrow 3x < 6 $$.    
$$ \leftrightarrow 3x - 6 < 0 $$.    
$$ \leftrightarrow 2x - 6 < 0 - x $$.    
$$ \leftrightarrow 2x - 6 < -x $$.    
Since $$ x < 2 $$, it follows that $$ 2x - 6 < 0 $$.    
And since $$ 2x - 6 < 0 $$, it follows that $$ 6 - 2x > x $$, Or $$ \vert 2x - 6 \vert > x $$.   

<hr/>

**Soln12**

**(a)**

($$ \to $$)Suppose $$ \vert a \vert \le b $$. Then we have two cases:

Case 1: Suppose $$ a > 0 $$, then $$ a \le b $$.

Case 2: Suppose $$ a < 0 $$, then $$ -a \le b $$. Or $$ a \ge -b $$.

Thus from both cases, $$ -b \le a \le b $$.

($$ \leftarrow $$)Suppose $$ -b \le a \le b $$. Then we have following possible cases:

Case 1: Suppose $$ a > 0 $$, then $$ \vert a \vert = a $$. Since $$ a \le b $$, it follows that $$ \vert a \vert \le b $$.
  
Case 2: Suppose $$ a < 0 $$, then $$ \vert a \vert = -a $$. Since $$ -b \le a $$, or $$ b \ge -a $$, it follows that $$ b \ge \vert a \vert $$.

Thus form both cases, we have $$ \vert a \vert \le b $$.


**(b)**

First lets prove $$ x <= \vert x \vert $$, because:

- if $$ x >= 0 $$ then $$ \vert x \vert = x $$, thus $$ x <= \vert x \vert $$ is true.
- if $$ x < 0 $$ then $$ \vert x \vert = x $$, thus $$ x <= -x $$ is true, it follows $$ x <= \vert x \vert $$ is true.

Thus we have $$ x <= \vert x \vert $$.
 
We know that(from (a)), $$ \vert a \vert \le b \leftrightarrow -b \le a \le b $$. Suppose $$ b = \vert x \vert $$ and $$ a = \vert x \vert $$.
Since $$ x <= \vert x \vert $$, it follows that, $$ - \vert x \vert \le x \le \vert x \vert $$.
 
**(c)**

We have following all possible cases:

- Case 1: $$ x \ge 0 \land y \ge 0$$.

As $$ x + y \ge 0 $$, $$\vert x + y \vert = x + y $$.

Also since $$ x \ge 0 $$, $$ \vert x \vert = x $$.    
Similarly since $$ y \ge 0 $$, $$ \vert y \vert = y $$.    
Thus $$ \vert x \vert + \vert y \vert = x + y $$.

From above we can conclude $$ \vert x + y \vert = \vert x \vert + \vert y \vert $$.

- Case 2: $$ x < 0 \land y < 0$$.

As $$ x + y < 0 $$, $$ \vert x + y \vert = - (x + y) $$.

Also since $$ x < 0 $$, $$ \vert x \vert = -x $$.    
Similarly since $$ y < 0 $$, $$ \vert y \vert = -y $$.    
Thus $$ \vert x \vert + \vert y \vert = -(x + y) $$.

We can conclude $$ \vert x + y \vert = \vert x \vert + \vert y \vert $$.

- Case 3: $$ x \ge 0 \land y \le 0 $$: Here we have following further cases:

    - Case a: $$ x + y >= 0 $$:     
     LHS:    
     Since $$ x + y \ge 0 $$, $$ \vert x + y \vert = x + y $$.   
     As $$ x + y > 0 \land x >= 0 \land y <= 0 $$, it follows that $$ x + y \le x $$.    
     Thus we have $$ \vert x + y \vert \le x $$.     
     RHS:          
     Since $$ x >= 0 $$, $$ \vert x \vert = x $$.    
     Also, since $$ y <=0 $$, $$ \vert y \vert = -y $$.    
     Thus $$ \vert x \vert + \vert y \vert  = x - y $$. Since $$ x >= 0 \land y <= 0 $$, it follows $$ x - y >= x $$.     
     Thus we have $$ \vert x \vert + \vert y \vert  >= x $$    
     So,    
     we can conclude that $$ \vert x + y \vert \le \vert x \vert + \vert y \vert $$.

    - Case b: $$ x + y < 0 $$:
     LHS:    
     Since $$ x + y < 0 $$, $$ \vert x + y \vert = -(x + y) $$.    
     As $$ x + y < 0 \land x >= 0 \land y <= 0 $$, it follows that $$ (x + y) \ge y $$ or $$ -(x+y) \le y $$.         
     Thus we have $$ \vert x + y \vert \le y $$.     
     RHS:          
     Since $$ x >= 0 $$, $$ \vert x \vert = x $$.    
     Also, since $$ y <=0 $$, $$ \vert y \vert = -y $$.    
     Thus $$ \vert x \vert + \vert y \vert  = x - y $$. Since $$ x >= 0 \land y <= 0 $$, it follows $$ x - y >= y $$.     
     Thus we have $$ \vert x \vert + \vert y \vert  >= y $$    
     So,    
     we can conclude that $$ \vert x + y \vert \le \vert x \vert + \vert y \vert $$.
    

- Case 4: $$ x \le 0 \land y \ge 0 $$:     
    This case is similar to Case 3. By swapping $$ x $$ and $$ y $$, proof will be same as in Case 3.
    
    
Thus from all the cases above: $$ \vert x + y \vert \le \vert x \vert + \vert y \vert $$.

<hr/>

**Soln13**

Suppose $$ x $$ is an integer. Thus $$ x $$ can either be even or odd. We have following cases:

- Case 1: $$ x $$ is even. Then $$ x = 2k $$, where $$ k $$ is any integer. Thus $$ x^2 + x = 4k^2 + 2k = 2(2k^2 + k) $$. Since $$ k $$ is integer,
it follows that $$ 2k^2 + k $$ is also an integer. Thus $$ 2(2k^2 + k) $$ is an even integer. Thus we can conclude if $$ x $$ is even, then
$$ x^2 + x $$ is also an even integer.

- Case 2: $$ x $$ is odd. Then $$ x = 2k + 1 $$, where $$ k $$ is any integer. Thus $$ x^2 + x = 4k^2 + 4k + 1 + 2k + 1 = 2(2k^2 + 3k + 1) $$. Since $$ k $$ is integer,
it follows that $$ 2k^2 + 3k + 1$$ is also an integer. Thus $$ 2(2k^2 + 3k + 1) $$ is an even integer. Thus we can conclude if $$ x $$ is odd, then
$$ x^2 + x $$ is also an even integer.

Thus from both cases, $$ x^2 + x $$ is even integer.

<hr/>

**Soln14**

Suppose $$ x $$ is an integer. We have following possible cases:

Case 1: $$ x $$ is even, or $$ x = 2k $$ where $$ k $$ is even. $$ x^4 = 16k^4 = 8 \times 2k^4 $$. Thus $$ x^4 $$ is a multiple of $$ 8 $$ and
 remainder is zero.
 
Case 2: $$ x $$ is odd, or $$ x = 2k + 1 $$ where $$ k $$ is odd. $$ x^4 = 16k^4 + 32k^3 + 24k^2 + 8k + 1= 8 \times (2k^4 + 4k^3 + 3k^2 + k) + 1 $$. 
Thus $$ x^4 $$ is not a multiple of $$ 8 $$ and clearly remainder is one.

From both cases above, we can conclude that $$ x^4 $$ when divided by $$ 8 $$, remainder will either be zero or one.

<hr/>

**Soln15**

**(a)**

Suppose $$ x $$ is arbitrary element and $$ x \in \cup ( \mathcal F \cup \mathcal G ) $$. 

$$ \leftrightarrow \exists P \in  (\mathcal F \cup \mathcal G)( x \in P) $$.     
$$ \leftrightarrow \exists P  (P \in  (\mathcal F \cup \mathcal G) \land x \in P) $$.     
$$ \leftrightarrow \exists P  ((P \in  \mathcal F \lor P \in \mathcal G) \land x \in P) $$.     
$$ \leftrightarrow \exists P  ((P \in  \mathcal F \land x \in P) \lor (P \in \mathcal G \land x \in P)) $$.     
$$ \leftrightarrow \exists P (P \in  \mathcal F \land x \in P) \lor \exists P (P \in \mathcal G \land x \in P)) $$.     
$$ \leftrightarrow x \in \cup \mathcal F \lor x \in \cup \mathcal G $$.     
$$ \leftrightarrow x \in (\cup \mathcal F) \cup (\cup \mathcal G) $$.     

Since $$ x $$ is arbitrary, it follows that $$ \cup ( \mathcal F \cup \mathcal G ) = (\cup \mathcal F) \cup (\cup \mathcal G) $$.

**(b)**

Suppose $$ x \in \cap(\mathcal F \cup \mathcal G) $$.

$$ \leftrightarrow \forall P \in \mathcal F \cup \mathcal G (x \in P) $$    
$$ \leftrightarrow \forall P (P \in \mathcal F \cup \mathcal G \to x \in P) $$    
$$ \leftrightarrow \forall P ((P \in \mathcal F \lor  P \in \mathcal G) \to x \in P) $$    
$$ \leftrightarrow \forall P (\lnot (P \in \mathcal F \lor  P \in \mathcal G) \lor x \in P) $$    
$$ \leftrightarrow \forall P ((P \notin \mathcal F \land  P \notin \mathcal G) \lor x \in P) $$    
$$ \leftrightarrow \forall P ((P \notin \mathcal F \lor x \in P) \land  (P \notin \mathcal G \lor x \in P)) $$    
$$ \leftrightarrow \forall P ((P \in \mathcal F \to x \in P) \land  (P \in \mathcal G \to x \in P)) $$    
$$ \leftrightarrow \forall P (P \in \mathcal F \to x \in P) \land  \forall P (P \in \mathcal G \to x \in P) $$    
$$ \leftrightarrow x \in \cap \mathcal F \land x \in \cap \mathcal G $$    
$$ \leftrightarrow x \in (\cap \mathcal F) \cap (\cap \mathcal G) $$    

Thus we can conclude, $$ \cap(\mathcal F \cup \mathcal G) = (\cap \mathcal F) \cap (\cap \mathcal G) $$.

<hr/>

**Soln16**

**(a)**

($$ \to $$)Suppose $$ x \in B \cup (\cup \mathcal F) $$. Suppose $$ \mathcal G = \{ B \} $$. Now we have two cases:

- Case 1: $$ x \in B $$. Since $$ G = \{ B \} $$, It follows that $$ x $$ exist in atleast one of the sets of $$ G $$. 
   Or we can also say that $$ x $$ exists in atleast one of the sets of $$ \mathcal F \cup \mathcal G $$.
   Thus it follows that $$ x \in \cup (\mathcal F \cup \mathcal G) $$, or $$ x \in \cup (\mathcal F \cup \mathcal \{ B \} ) $$.
   
- Case 2: $$ x \in \cup \mathcal F $$. It follows that $$ x $$ exists in atleast one of the sets of $$ F $$. 
  Or we can also say that $$ x $$ exists in atleast one of the sets of $$ \mathcal F \cup \mathcal G $$.
     Thus it follows that $$ x \in \cup (\mathcal F \cup \mathcal G) $$, or $$ x \in \cup (\mathcal F \cup \mathcal \{ B \} ) $$.

From both cases above, since $$ x $$ is arbitrary, we can conclude: $$ B \cup (\cup \mathcal F) \subseteq \cup (\mathcal F \cup \{ B \} ) $$.

($$ \leftarrow $$)Suppose $$ x \in \cup (\mathcal F \cup \{ B \} ) $$. It follows that $$ x $$ exists in atleast 
one of the sets, say $$ A $$, of $$ \mathcal F \cup \mathcal G $$. Thus we have two cases:
 
- Case 1: $$ A \in \mathcal G $$. Since $$ x \in A $$ and $$ \mathcal G $$ contains only one set $$ B $$, it follows $$ A = B $$. Thus $$ x \in B $$.

- Case 2: $$ A \in \mathcal F $$. Thus there exists atleast one set in $$ \mathcal F $$ such that $$ x \in A $$. Thus we can say that $$ x \in \cup \mathcal F $$.

Thus from above cases, we have $$ x \in B \lor x \in \cup \mathcal F $$. Since $$ x $$ is arbitrary we can say that:
$$ \cup (\mathcal F \cup \{ B \} ) \subseteq B \cup (\cup \mathcal F) $$.

Thus we can conclude that $$ B \cup (\cup \mathcal F) = \cup (\mathcal F \cup \{ B \} ) $$.


**(b)**

B ∪ (∩F) = ∩A∈F (B ∪ A)

($$ \to $$)Suppose $$ x \in B \cup (\cap \mathcal F) $$. Thus we have following possible cases:

- Case 1: $$ x \in B $$. Suppose $$ A \in \mathcal F $$. Since $$ x \in B $$, it follows that $$ x \in A \cup B $$.
Also since $$ A $$ is arbitrary, it follows that $$ \forall A \in \mathcal F ( x \in (A \cup B)) $$. 
Or $$ x \in \cap_{A \in \mathcal F}(A \cup B) $$.

- Case 2: $$ x \in \cap \mathcal F $$. Thus $$ x $$ must exist in all the sets of  $$ \mathcal F $$. Thus we can also
 say that $$ \forall A \in \mathcal F (x \in A) $$. Since $$ \forall A \in \mathcal F (x \in A) $$, it follows that 
  $$ \forall A \in \mathcal F (x \in A \cup B) $$ is also true. Thus we can say that $$ x \in \cap_{A \in \mathcal F}(A \cup B) $$.
  
Thus from both cases, $$ B \cup (\cap \mathcal F) \; \subseteq \; \cap_{A \in \mathcal F}(A \cup B) $$.

($$ \leftarrow $$)Suppose $$ x \in \cap_{A \in \mathcal F}(A \cup B) $$. Thus $$ x $$ must exist in all sets:  $$ A \cup B $$ such that $$ A \in \mathcal F $$.
It follows following two cases:

Case 1: $$ x \in B$$. Then it follows that $$ x \in B \cup (\cap \mathcal F) $$.

Case 2: $$ x \in A$$. Since $$ A $$ is arbitrary, it means $$ x $$ exists in all the sets of $$ \mathcal F $$. Or $$ x \in \cap \mathcal F $$.
 It follows that $$ x \in B \cup (\cap \mathcal F) $$.
 
Thus from both cases, $$ \cap_{A \in \mathcal F}(A \cup B) \; \subseteq \; B \cup (\cap \mathcal F)$$.


Thus from both directions, we can conclude $$ B \cup (\cap \mathcal F) \; = \; \cap_{A \in \mathcal F}(A \cup B) $$.

**(c)**

Suppose $$ x \in B \cap (\cap \mathcal F ) $$. It appears that $$ x $$ belongs to all the sets of $$ \mathcal F $$ as well as $$ x $$ belongs to 
$$ B $$. Thus it seems to be equivalent to $$ \cap_{A \in \mathcal F}(A \cap B) $$. Lets try to prove it:

($$ \to $$) Suppose $$ x \in B \cap (\cap \mathcal F ) $$. Thus $$ x $$ must exist in $$ B $$. Suppose $$ A \in \mathcal F $$.
Since $$ x $$ must exist in all the sets of $$ \mathcal F $$, it follows that $$ x \in A $$. Thus we can also say that $$ x \in A \land x \in B $$,
or $$ x \in A \cap B $$. Since $$ A $$ is arbitrary, $$ \forall A \in \mathcal F(x \in (A \cap B)) $$. It follows that $$ x \in \cap_{A \in \mathcal F}(A \cap B) $$.


($$ \leftarrow $$). Suppose $$ x \in \cap_{A \in \mathcal F}(A \cap B) $$. Since $$ x \in (A \cap B) $$,  $$ x $$ must exist in $$ B $$. Also, since $$ x \in (A \cap B) $$,  
$$ x $$ must exist in all the sets, $$ A $$, of $$ \mathcal F $$. Thus $$ x \in B \land x \in \cap \mathcal F $$. Or $$ x \in B \cap (\cap \mathcal F) $$.  

Thus from both directions we have $$ B \cap (\cap \mathcal F ) \; = \; \cap_{A \in \mathcal F}(A \cap B) $$.

<hr/>

**Soln17**

Suppose $$ x \in \cap \mathcal H $$. Suppose $$ A \in \mathcal F $$ and suppose $$ B \in \mathcal G $$, then $$ A \cup B \in \mathcal H $$.
Thus it follows that $$ x \in A \cup B $$. So we have two cases:

Case 1: $$ x \in A $$. Since $$ A $$ is arbitrary, it follows that $$ x \in \cap \mathcal F $$. Or $$ x \in (\cap \mathcal F) \cup (\cap \mathcal G) $$. 

Case 2: $$ x \in B $$. Since $$ B $$ is arbitrary, it follows that $$ x \in \cap \mathcal G $$. Or $$ x \in (\cap \mathcal F) \cup (\cap \mathcal G) $$. 

Thus from both cases if $$ x \in \cap \mathcal H $$, then $$ x \in (\cap \mathcal F) \cup (\cap \mathcal G) $$.
 
<hr/>

**Soln18**

Suppose $$ x \in A \triangle B $$. Thus we have:

$$ \leftrightarrow (x \in A \cup B) \land \lnot (x \in A \cap B) $$     
$$ \leftrightarrow (x \in A \lor x \in B) \land \lnot (x \in A \land x \in B) $$     
$$ \leftrightarrow (x \in A \lor x \in B) \land (x \notin A \lor x \notin B) $$     
$$ \leftrightarrow (x \notin B \to x \in A) \land (x \in A \to x \notin B) $$     

Now since $$ x $$ is arbitrary, we can conclude that $$ \forall x ( x \in A \triangle B \; \leftrightarrow (x \in A \leftrightarrow x \notin B)) $$    
 
<hr/>

**Soln19**

- ($$ ((A \triangle B) \cap C = \phi) \; \to \; (A \cap C = B \cap C) $$):     
  Suppose $$ (A \triangle B) \cap C = \phi $$. Now we shall prove $$ (A \cap C = B \cap C) $$ :
   
  - ($$ \to $$)Suppose $$ x \in A \cap C $$. Thus $$ x \in A $$ and $$ x \in C $$. We will prove by contradiction. Suppose $$ x \notin B $$. Since
     $$ x \in A $$, it follows that $$ x \in A \setminus B $$. Thus $$ x \in A \triangle B $$. Since $$ x \in C $$, it contradicts the given
    that $$ (A \triangle B) \cap C = \phi $$. Thus $$ x \in B $$. Now since $$ x \in C \land x \in B $$, it follows that $$ x \in B \cap C $$.
  - ($$ \leftarrow $$)Suppose $$ x \in B \cap C $$. Thus $$ x \in B $$ and $$ x \in C $$. We will prove by contradiction. Suppose $$ x \notin A $$. Since
     $$ x \in B $$, it follows that $$ x \in B \setminus A $$. Thus $$ x \in A \triangle B $$. Since $$ x \in C $$, it contradicts the *given*
    that $$ (A \triangle B) \cap C = \phi $$. Thus $$ x \in A $$. Now since $$ x \in C \land x \in A $$, it follows that $$ x \in A \cap C $$.
    
  Thus we can conclude that $$ A \cap C = B \cap C $$.
  
- ($$ (A \cap C = B \cap C) \; \to \; ((A \triangle B) \cap C = \phi) $$):     
    We will prove this by contra-positive. Suppose $$ (A \triangle B) \cap C \ne \phi $$ and lets say $$ x \in (A \triangle B) \cap C $$. Thus $$ x \in A \triangle B $$ and $$ x \in C $$. Since
    $$ x \in A \triangle B $$, we have following cases:
    
    - Case 1: If $$ x \in A \setminus B $$, then $$ x \in A \land x \notin B $$. Since $$ x \in A \land x \in C $$, it follows $$ x \in A \cap C $$. Also
      since $$ x \notin B $$, it follows that $$ x \notin B \cap C $$. Thus $$ A \cap C \neq B \cap C $$.

    - Case 2: If $$ x \in B \setminus A $$, then $$ x \in B \land x \notin A $$. Since $$ x \in B \land x \in C $$, it follows $$ x \in B \cap C $$. Also
      since $$ x \notin A $$, it follows that $$ x \notin A \cap C $$. Thus $$ A \cap C \neq B \cap C $$.
      
     Thus we can conclude from contra-positive that $$ (A \cap C = B \cap C) \; \to \; ((A \triangle B) \cap C = \phi) $$.
     
Thus from both directions, the condition is true. So we can conclude $$ (A \cap C = B \cap C) \; \leftrightarrow \; ((A \triangle B) \cap C = \phi) $$.
     
<hr/>

**Soln20**

- ($$ ((A \triangle B) \subseteq C) \; \to \; (A \cup C = B \cup C) $$):    
    Suppose $$ (A \triangle B) \subseteq C $$. Now we will prove  $$ A \cup C = B \cup C $$ : 
    
    - $$ A \cup C \to B \cup C $$:    
      Suppose $$ x \in A \cup C $$. Thus we have two exhaustive cases:      
      
        - Case 1: If $$ x \in C $$, then $$ x \in B \cup C $$.
        
        - Case 2: if $$ x \in A \land x \notin C $$. Since $$ (A \triangle B) \subseteq C $$, it follows that $$ x \notin (A \triangle B) $$.
        It follows that $$ \lnot ((x \in A \land x \notin B) \lor (x \in B \land x \notin A)) $$     
        $$ \leftrightarrow (\lnot (x \in A \land x \notin B) \land \lnot (x \in B \land x \notin A)) $$    
        $$ \leftrightarrow (x \notin A \lor x \in B) \land (x \notin B \lor x \in A)) $$    
        Since $$ x \in A $$, then $$ x \in B $$. Thus we can also say that $$ x \in B \cup C $$.
        
      Thus from both cases above, we can conclude that $$ (A \cup C) \to (B \cup C) $$.
      
    - $$ B \cup C \to A \cup C $$:    
      This proof is will be exactly similar to the proof above for $$ (A \cup C) \to (B \cup C) $$ by just swapping $$ A $$ and $$ B $$.
          
    Thus from both directions above, we can conclude that if $$ (A \triangle B) \subseteq C $$, then $$ A \cup C = B \cup C $$.
         
- ($$ (A \cup C = B \cup C) \; \to \; ((A \triangle B) \subseteq C)$$):    
    Suppose $$ A \cup C = B \cup C $$. Suppose $$ x \in A \triangle B $$, or $$ x \in (A \setminus B) \lor x \in (B \setminus A) $$. 
    Thus we have two possible cases:
    
    - Case 1: if $$ x \in A \setminus B $$, then $$ x \in A \land x \notin B $$. Since $$ x \in A $$, it follows $$ x \in A \cup C $$.
    And since $$ x \in A \cup C $$, it follows that $$ x \in B \cup C $$. Since $$ x \notin B $$, it follows that $$ x \in C $$.
    
    - Case 2: if $$ x \in B \setminus A $$,  then $$ x \in B \land x \notin A $$. Since $$ x \in B $$, it follows $$ x \in B \cup C $$.
    And since $$ x \in B \cup C $$, it follows that $$ x \in A \cup C $$. Since $$ x \notin A $$, it follows that $$ x \in C $$.
    
    Thus from both cases above, it follows that if $$ x \in A \triangle B $$, then $$ x \in C $$. Since $$ x $$ is arbitrary, it follows
    that $$ A \triangle B \subseteq C $$.
    
  Thus from both directions above, we can conclude that $$ ((A \triangle B) \subseteq C) \; \leftrightarrow \; (A \cup C = B \cup C) $$.
   
<hr/>
  
**Soln21**
  
- $$ (C \subseteq (A \triangle B)) \; \to \; ((C \subseteq A \cup B) \land A \cap B \cap C = \phi) $$:    
  Suppose $$ C \subseteq (A \triangle B) $$. 
  
  Proof of $$ C \subseteq A \cup B $$:
  
  Suppose $$ x \in C $$. Since $$ C \subseteq (A \triangle B) $$, it follows that $$ x \in A \triangle B $$.
  Thus $$ x \in A \setminus B \lor x \in B \setminus A $$. Thus we have two cases:
  
  - Case 1: if $$ x \in A \setminus B$$, then $$ x \in A \land x \notin B$$. Since $$ x \in A$$, then $$ x \in A \cup B$$.
    
  - Case 2: if $$ x \in B \setminus A$$, then $$ x \in B \land x \notin A$$. Since $$ x \in B$$, then $$ x \in A \cup B$$.
    
  Since $$ x $$ is arbitrary, we can conclude from both the cases above that if $$ C \subseteq A \cup B $$.
  
  Proof of $$ A \cap B \cap C = \phi $$:
  
  Now, suppose $$ A \cap B \cap C \ne \phi $$. Suppose $$ x \in A \cap B \cap C $$. Since $$ x \in C $$, it follows $$ x \in A \triangle B $$.
  Thus $$ x \notin A \cap B $$. But it contradicts with assumption that $$ x \in A \cap B \cap C $$. Thus $$ A \cap B \cap C = \phi $$.
   
- $$ (C \subseteq A \cup B) \land A \cap B \cap C = \phi)  \; \to \; (C \subseteq (A \triangle B)) $$:
  Suppose $$ ((C \subseteq A \cup B) \land A \cap B \cap C = \phi) $$. Suppose $$ x \in C $$. Since $$ C \subseteq A \cup B $$, we have following cases:
   
  - Case 1: if $$ x \in A $$. Since $$ A \cap B \cap C = \phi $$ and $$ x \in A \land x \in C $$, it follows that $$ x \notin B $$. Thus $$ x \in A \land x \notin B $$, 
  or $$ x \in A \setminus B $$. Since $$ x \in A \setminus B $$, it follows $$ x \in A \triangle B $$.
  
  - Case 2: if $$ x \in B $$. Since $$ A \cap B \cap C = \phi $$ and $$ x \in B \land x \in C $$, it follows that $$ x \notin A $$. Thus $$ x \in B \land x \notin A $$, 
  or $$ x \in B \setminus A $$. Since $$ x \in B \setminus A $$, it follows $$ x \in A \triangle B $$.
  
  Thus if $$ x \in C $$, then $$ x \in A \triangle B $$. Since $$ x $$ is arbitrary, we can conclude that $$ C \subseteq (A \triangle B) $$. 

Thus from both directions above, we can conclude that $$ (C \subseteq (A \triangle B)) \; \leftrightarrow \; ((C \subseteq A \cup B) \land A \cap B \cap C = \phi) $$.

<hr/>

**Soln22**

**(a)**

A\C ⊆ (A\B) ∪ (B\C)

Suppose $$ x \in A \setminus C $$. Thus $$ x \in A \land x \notin C $$. Now we have following possible cases:

- Case 1: $$ x \notin B $$. Since $$ x \in A \land x \notin B $$, it follows $$ x \in A \setminus B$$. Since $$ x \in A \setminus B $$, it follows 
 $$ x \in (A \setminus B) \cup (B \setminus C) $$.
 
- Case 2: $$ x \in B $$. Since $$ x \in B \land x \notin C $$, it follows $$ x \in B \setminus C$$. Since $$ x \in B \setminus C $$, it follows 
 $$ x \in (A \setminus B) \cup (B \setminus C) $$.

Thus from both cases above, $$ A \setminus C \; \subseteq \; (A \setminus B) \cup (B \setminus C) $$.

**(b)**

Suppose $$ x \in A \triangle C $$. Thus $$ x \in A \setminus C \lor x \in C \setminus A $$. Thus we have two cases:

- Case 1: $$ x \in A \setminus C $$. Using (a), since $$ x \in A \setminus C $$, then $$ x \in (A \setminus B) \cup (B \setminus C) $$.     
    Thus we have two cases:
    
    - Case a: $$ x \in A \setminus B $$, it follows that $$ x \in (A \triangle B) $$, or we can say $$ x \in (A \triangle B) \cup (B \triangle C) $$.
    
    - Case b: $$ x \in B \setminus C $$, it follows that $$ x \in (B \triangle C) $$, or we can say $$ x \in (A \triangle B) \cup (B \triangle C) $$.
    
    Thus from both cases, $$ x \in (A \triangle B) \cup (B \triangle C) $$.

- Case 2: $$ x \in C \setminus A $$. Using (a), since $$ x \in C \setminus A $$, then $$ x \in (C \setminus B) \cup (B \setminus A) $$.    
    Thus we have two cases:
    
    - Case a: $$ x \in C \setminus B $$, it follows that $$ x \in (C \triangle B) $$, or we can say $$ x \in (A \triangle B) \cup (B \triangle C) $$.
    
    - Case b: $$ x \in B \setminus A $$, it follows that $$ x \in (B \triangle A) $$, or we can say $$ x \in (A \triangle B) \cup (B \triangle C) $$.
    
    Thus from both cases, $$ x \in (A \triangle B) \cup (B \triangle C) $$.

Thus from both cases above, we have if $$ x \in A \triangle C $$, then $$ x \in (A \triangle B) \cup (B \triangle C) $$.

<hr/>

**Soln 23**

**(a)**

Suppose $$ x \in (A \cup B) \triangle C $$. Thus we have following cases:

- Case 1: $$ x \in (A \cup B) \setminus C $$.    
  Thus we have following cases:    
  - Case a: $$ x \in A \land x \notin C $$. Thus $$ x \in A \setminus C $$, it follows that $$ x \in A \triangle C $$. Or we can
  also say that $$ x \in (A \triangle C) \cup (B \triangle C) $$.
  
  - Case b: $$ x \in B \land x \notin C $$. Thus $$ x \in B \setminus C $$, it follows that $$ x \in B \triangle C $$. Or we can
  also say that $$ x \in (A \triangle C) \cup (B \triangle C) $$.
  
- Case 2: $$ x \in C \setminus (A \cup B) $$.    
  Thus $$ x \in C \land x \notin (A \cup B) $$, or $$ x \in C \land x \notin A \land x \notin B $$. Thus $$ x \in C \setminus A $$ and
  $$ x \in C \setminus B $$. Thus $$ x \in C \triangle A $$ and $$ x \in C \triangle B $$. It follows that $$ x \in (A \triangle C) \cup (B \triangle C) $$.
  
Thus from both cases above, $$ (A \cup B) \triangle C \; \subseteq \; (A \triangle C) \cup (B \triangle C) $$.

**(b)**
  
Lets say $$ A = \{ 1, 2\} , B = \{2, 3\}, C = \{ 1, 3 \} $$.

Then $$ A \cup B = \{1,2,3\}, $$ and $$ (A \cup B) \triangle C = \{2\} $$.
 
And $$ A \triangle C = \{2,3\} $$, and $$ B \triangle C = \{1,2\} $$.
Thus $$  (A \triangle C) \cup (B \triangle C) = \{1,2,3\} $$.

We can see that $$ (A \cup B) \triangle C \; \neq \; (A \triangle C) \cup (B \triangle C) $$.

<hr/>

**Soln24**

**(a)**

Suppose $$ x \in (A \triangle C) \cap (B \triangle C) $$. It is equivalent to:    
$$ \leftrightarrow (x  \in (A \setminus C) \lor x \in (C \setminus A)) \land ((x  \in (B \setminus C) \lor x \in (C \setminus B)) $$    

Thus we have ffollowing cases:

Case 1: $$ x \in (A \setminus C) \land x \in (B \setminus C) $$:    
Thus $$ x \in A \land x \in B $$ and $$ x \notin C$$, it follows that $$ x \in (A \cap B) \triangle C $$.

Case 2: $$ x \in (A \setminus C) \land x \in (C \setminus B) $$:
Here $$ x \in C \land x \notin C $$, which is not possible. Thus this case is not possible.

Case 3: $$ x \in (C \setminus A) \land x \in (B \setminus C) $$:
Here also $$ x \in C \land x \notin C $$, which is not possible. Thus this case is not possible.

Case 4: $$ x \in (C \setminus A) \land x \in (C \setminus B) $$:
Here $$ x \in C $$ and $$ x \notin A \land x \notin B $$. Or we can say $$ x \notin (A \cup B) $$. Since $$ x \notin A \cup B $$, 
it follows $$ x \notin A \cap B $$. Thus $$ x \in C $$ and $$ x \notin (A \cap C) $$. It follows that $$ x \in C \triangle (A \cap B) $$.
 
Thus from all the possible cases, $$ x \in (A \cap B) \triangle C $$.

**(b)**

Lets say $$ A = \{ 1, 2\} , B = \{2, 3\}, C = \{ 1, 3 \} $$.

Then $$ (A \triangle C) \cap (B \triangle C)  = \{2\} $$.    
And $$ (A \cap B) \triangle C = \{1, 2, 3 \} $$.

<hr/>

**Soln25**

We shall prove the conjecture $$ ((A \triangle C) \setminus (B \triangle C)) \; \subseteq \; ((A \setminus B) \triangle C) $$.
 
Suppose $$ x \in ((A \triangle C) \setminus (B \triangle C)) $$. It follows that $$ x \in A \triangle C $$ and $$ x \notin B \triangle C $$.

Since $$ x \notin B \triangle C $$, it follows:     
$$ (x \notin B \land x \notin C) \lor (x \in B \land x \in C) $$. 

Also, since $$ x \in A \triangle C $$, it follows that:    
$$ x \in A \setminus C \lor x \in C \setminus A $$.
 
Thus we have following possible cases:

- Case 1: $$ x \in A \setminus C $$ and $$ x \in B \land x \in C $$:    
This case is not possible as $$ x \notin C \land x \in C $$ is not possible.

- Case 2: $$ x \in C \setminus A $$ and $$ x \in B \land x \in C $$:    
Thus $$ x \in C \land x \notin A \land x \in B $$. Since $$ x \notin A $$, it follows: $$ x \notin A \setminus B $$.
 Further since $$ x \in C $$, it follows $$ x \in C \setminus (A \setminus B) $$. Thus we can also say $$ x \in (A \setminus B) \triangle C $$. 

- Case 3: $$ x \in A \setminus C $$ and $$ x \notin B \land x \notin C $$:    
Thus $$ x \in A \land x \notin C \land x \notin B $$. Since $$ x \in A \land x \notin B $$, it follows: $$ x \in A \setminus B $$.
 Further since $$ x \notin C $$, it follows: $$ x \in (A \setminus B) \setminus C $$. Thus we can also say $$ x \in (A \setminus B) \triangle C $$. 

- Case 4: $$ x \in C \setminus A $$ and $$ x \notin B \land x \notin C $$:    
This case is also not possible as $$ x \in C \land x \notin C $$ is not possible.

Thus from all the cases above, we can conclude that $$ ((A \triangle C) \setminus (B \triangle C)) \; \subseteq \; ((A \setminus B) \triangle C) $$.

However  $$ ((A \setminus B) \triangle C) \; \subseteq \; ((A \triangle C) \setminus (B \triangle C)) $$ is not correct.

One counter example is:    
$$ A = \{1\}, B = \{1\}, C = \{3\} $$.      
$$ (A \setminus B) \triangle C = \{3\} $$ and $$ ((A \triangle C) \setminus (B \triangle C)) = \phi $$.
 
<hr/>

**Soln26**

The proof is not correct as the proof actually shows $$ x > 0 \lor x < 6 $$. It can be corrected by changing the cases as follows:

- Case 1. $$ x − 3 \ge 0 $$. Then $$ \vert x − 3 \vert = x − 3 $$. Plugging this into the assumption that $$ \vert x − 3 \vert < 3 $$, we get $$ x − 3 < 3 $$, so clearly x < 6.
Also, since $$ x - 3 \ge 0 $$, it follows $$ x \ge 3 $$. Since $$  x \ge 3 $$, we can also say $$ x > 0 $$. Thus we have $$ x < 6 \land x > 0 $$.

- Case 2. $$ x − 3 < 0 $$. Then $$ \vert x − 3 \vert = 3 − x $$, so the assumption $$ \vert x − 3 \vert < 3 $$ means that $$ 3−x < 3 $$. Therefore $$ 3 < 3+x $$, so $$ 0 < x $$.
Also since $$ x − 3 < 0 $$, it follows $$ x < 3 $$. Or we can also say $$ x < 6 $$. Thus it follows that $$ 0 < x \land x < 6 $$.

Thus from both the cases: $$ x > 0 \land x < 6 $$. Thus we can conclude theorem is correct.

<hr/>

**Soln27**

Proof and theorem both are correct. The goal is of the form of $$ P \to Q $$.
 
Following strategies are used:

- To prove goal of the form of $$ P \to Q $$, $$ P $$ is assumed to be correct and then $$ Q $$ is proved.

- Given is of the form of $$ P \land Q $$. Thus these two are taken as separate givens.

- One of the given is of the form $$ \exists x P(x) $$. Thus existential instantiation is used.

<hr/>

**Soln28**

Proof and theorem both are correct. Following strategies are used:

- Strategy to prove a goal of the form of $$ \forall x P(x) $$.
- Strategy to prove a goal of the form of $$ \exists x P(x) $$. Existential instantiation is used.
- The goal is converted into $$ P \lor Q $$ and strategy to prove on case by case basis is used.

<hr/>

**Soln29**

Suppose $$ \forall x P(x) \to \exists x Q(x) $$. Thus we have:    
$$ \lnot (\forall x P(x)) \lor \exists x Q(x) $$    
$$ \exists x \lnot P(x) \lor \exists x Q(x) $$    
$$ \exists x (\lnot P(x) \lor Q(x)) $$    
$$ \exists x ( P(x) \to Q(x)) $$    

<hr/>

**Soln30**

Proof and theorem both are not correct. 

Counter example: $$ A = \{ 1, 2 \}, B = \{1\}, C = \{2\} $$. Thus niether $$ A \subseteq B $$ and nor $$ A \subseteq C $$.
   
In the proof, both cases are wrong. For eg: In Case 1,  $$ x \in A \to x \in B $$ is not true for all the elements of $$ A $$.

<hr/>

**Soln31**

For any statement $$ P(x) $$, we can have following possible cases:
 
- Case 1: P(x) is true for all values of $$ x $$. Or $$ \forall x P(x) $$. Thus we can also say that $$ \exists x (\lnot P(x) \lor \forall y P(y)) $$.

- Case 2: P(x) is false for atleast one value, say $$ x_0 $$, of $$ x $$. Or $$ \lnot P(x_0) $$ is true. Thus we can also say $$ \exists x (\lnot P(x) \lor \forall y P(y)) $$.

Thus from both the cases, we can conclude that $$ \exists x (\lnot P(x) \lor \forall y P(y)) $$.







