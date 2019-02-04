---
chapterName: "Proofs"
sectionName: "3.2 - Proofs Involving Negations and Conditionals"
chapter: 3
section: "3.2"
order: "002"
date: 2015-09-19
title:  "How To Prove It, Ch-3 Sec-3.2, Proofs Involving Negations and Conditionals"
redirect_from:
  - /2015/09/19/how-to-prove-it-ch-3-sec-2.html
---

### Summary

- There can be following ways to prove a *goal* of the form $$ \lnot P $$ :
    - Convert or re-express the *goal* to some other form and then use one of the proof strategies for this other goal form. This is generally possible when the original goal is complex goal(containing many components).
    - Proof by contradiction: by assuming the *goal* $$ P $$ is true and try to reach a contradiction. On a contradiction, it can be concluded that P must be false. 
- *Proof by contradiction* is vague as it requires to produce a contradiction by proving something that is known to be false. One approach can be:
    - To use a *given* of the form $$ \lnot P $$: Try making $$ P $$ as *goal*. Now, If $$ P $$ can be proved, then the proof will be complete, because $$ P $$ contradicts the given $$ \lnot P $$.
- If *not* using the strategy to prove by contradiction, One approach can be:
    - To re-express/convert a *given* of the form of $$ \lnot P $$, to some other form.
- In previous section, strategy to prove *goal* of the form of $$ P \to Q $$ was described.
- Apart from all the above strategies, One more strategy can be:
    - To use a *given* of the form of $$ P \to Q $$. Many strategies for using givens suggests ways for drawing inferences from the givens. These strategies are called *rules of inference*. There can be following two *Rules of inference* for using given of the form of $$ P \to Q $$:
        - Rule *modus ponens* : If both $$ P $$ and $$ P \to Q $$ are true, then $$ Q $$ must also be true.
        - Rule *modus tollens* : If $$ P → Q $$ is true and $$ Q $$ is false, then $$ P $$ must also be false.  
- Till now following strategies are covered:
    - To prove a *goal* of the form $$ \lnot P $$.
    - To use a *given* of the form of $$ \lnot P $$.
    - To prove a *goal* of the form of $$ P \to Q $$.
    - To use a *given* of the form of $$ P \to Q $$.

<hr/>

**Soln1**

**(a)** 

Suppose $$ P $$. Since $$ P \to Q $$, it follows $$ Q $$. Similarly, since $$ Q \to R $$, it follows $$ R $$. Thus if $$ P $$ then $$ R $$, or $$ P \to R $$.
  
**(b)** Suppose $$ P $$. For $$ Q \to R $$, using contra-positive for proof. Suppose $$\lnot R$$, it follows $$ P \to \lnot Q $$. Since $$ P $$, it follows $$ \lnot Q $$. Thus $$ \lnot R \to \lnot Q $$, or $$ Q \to R $$. It follows that $$ P \to (Q \to R) $$.
 
<hr/>

**Soln2**

**(a)** 

Suppose $$ P $$. Since $$ P \to Q $$, it follows $$ Q $$. Since $$ R \to \lnot Q $$, using contrapositive $$ Q \to \lnot R $$, it follows $$ \lnot R $$. Thus, $$ P \to \lnot R $$.
  
**(b)** 
   
Simplifying $$ Q \to \lnot(Q \to ¬P) $$, gives $$ Q \to (Q \land P) $$. Since P, it follows $$ Q \to Q $$, which is always true.

<hr/>

**Soln3**

Suppose $$ x \in A $$. Since $$ A \subseteq C $$, it follows that $$ x \in C $$. Now since $$ B \cap C = \phi $$, it follows that $$ x \notin B $$. Thus $$ x \in A \to x \notin B $$.

<hr/>

**Soln4**

Suppose $$ x \in C $$. Since $$ (A \setminus B) \cap C = \phi $$, it follows that $$ x \notin A \setminus B $$. And $$ x \notin A \setminus B $$ is equivalent to $$ x \notin A \lor x \in B $$. Since $$ x \in A $$, it follows that $$ x \in B $$. Thus $$ x \in C \to x \in B $$.
  
<hr/>

**Soln5**

Suppose $$ a \in A \setminus B $$, which means $$ a \in A $$ and $$ a \notin B $$. Since $$ a \in C $$, it follows that $$ a \in (A \cap C) $$. Since  $$ a \in (A \cap C) $$ and $$ a \notin B $$, it follows that $$ A \cap C \nsubseteq B $$. This contradicts the *given*: $$ A \cap C \subseteq B $$. Thus $$ a \notin A \setminus B $$.
 
<hr/>

**Soln6**

Since $$ a \in A $$ and $$ A \subseteq B $$, it follows that $$ a \in B $$. Suppose $$ a \notin C $$, then it follows that $$ a \in B \setminus C $$. But it contradicts with the given $$ a \notin B \setminus C $$. Thus $$ a \in C $$.

<hr/>

**Soln7**

Suppose $$ y = 0 $$. Since $$ y + x = 2y - x $$, it follows that $$ x = 0 $$. But this contradicts the *given* that $$ x \neq 0 \land y \neq 0 $$. Thus $$ y \neq 0 $$.

<hr/>

**Soln8**

Suppose $$ a < \frac 1 a < b < \frac 1 b $$. Since $$ a < \frac 1 a $$, it follows that $$ a \in (-\infty, -1) \lor (0, 1) $$.
Similarly, $$ b \in (-\infty, -1) \lor (0, 1) $$. Thus there are four possible cases:
 
- Case 1: $$ a \in (-\infty, -1) $$ and $$ b \in (-\infty, -1) $$. (Earlier I missed this case. As pointed out in comments this case is not possible either). Since $$\, a \text{ and } b \,$$ are both negative(same sign) and $$\, \frac 1 a < \frac 1 b \,$$, it follows that $$\, a > b \,$$ which contradicts with $$\, a < b \,$$.  

- Case 2: $$ a \in (-\infty, -1) $$ and $$ b \in (0, 1) $$. This case is possible. For example, when $$\, a = -2 \,$$ and $$\, b = 0.5 \,$$, the inequality holds. 

- Case 3: $$ a \in (0, 1) $$ and $$ b \in (-\infty, -1) $$. This is not possible because $$ \frac 1 a > 1 $$ and $$ \frac 1 a < b $$. But in this case $$ b < -1 $$.

- Case 4: $$ a \in (0, 1) $$ and $$ b \in (0, 1) $$. This is also not possible because $$ \frac 1 a > 1 $$ and $$ \frac 1 a < b $$. But in this case $$ 0 < b < 1 $$.

Thus only Case 2 is possible. It follows that $$ a < -1 $$.

<hr/>

**Soln9**

Suppose $$ x^2y = 2x + y $$. We will prove $$(y \neq 0 \to x \neq 0)$$, using contra-positive. Suppose $$ x = 0 $$, it follows that $$ y = 0 $$. Thus we have $$ y \neq 0 \to x \neq 0 $$.
 
<hr/>

**Soln10**

Simplifying $$ y = \frac {3x^2 + 2y} {x^2 + 2} $$, gives $$ (y - 3)x^2 = 0 $$.
Suppose $$ x \neq 0 $$. Suppose $$ (y - 3)x^2 = 0 $$, it follows that $$ y - 3 = 0 $$, or $$ y = 3 $$.
Thus we have $$ x \neq 0 \to (y = \frac {3x^2 + 2y} {x^2 + 2} \to y = 3) $$.

<hr/>

**Soln11**

**(a)** Reverse of $$ x \neq 3 \land y \neq 8 $$, is $$ x = 3 \lor x = 8 $$. Thus reverse of the conclusion used in proof is wrong.

**(b)** Using $$ x = 2 $$, and $$ y = 8 $$, gives $$ x + y = 10 $$. Thus conclusion is not correct for the given $$ x $$, and $$ y $$.

<hr/>

**Soln12**

**(a)** Statement:    
    Since $$ x \notin B $$ and $$ B ⊆ C $$, then $$ x \notin C $$.    
    is not *correct*.

**(b)** Lets say $$ A = \{1,2\} $$, $$ B = \{3, 4\} $$ and $$ C = \{1, 2, 3, 4\} $$. Now if $$ x = 1 $$, the theorem is not correct.

<hr/>

Leaving Problems 13 to 16, as all involve truth tables and such problems were already solved in earlier chapters.

<hr/>

**Soln17**

Suppose $$ x^2 + y = 13 $$. Suppose $$ y = 4 $$, it follows that $$ x^2 + 4 = 13 $$, or $$ x = 3 $$ or $$ x = -3 $$. Thus for $$ y = 4 $$ and $$ x = -3 $$, there is no contradiction.
Thus theorem is not correct.




