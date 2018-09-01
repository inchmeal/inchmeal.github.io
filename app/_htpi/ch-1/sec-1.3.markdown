---
chapterName: "Sentential Logic"
sectionName: "1.3 - Variable and Sets"
chapter: 1
section: "1.3"
order: "003"
date: 2015-07-18
description:  "Inchmeal - Velleman's How To Prove It, Ch-1 Sec-1.3 Solutions, Variable and Sets"
redirect_from:
  - /2015/07/18/how-to-prove-it-ch-1-sec-3.html
---

### Summary

- Statements with Variables. For eg: "x is divisible by 9", "y is a person" are statements. Here x, and y are variables.
- These statements are true or false based on the value of variables.
- Sets,  a collection of objects.
- Bound and Unbound variables. Eg: $$ y ∈ \{x\,\vert\,x^3 < 9\} $$ , $$ y $$ is a free variable, whereas $$ x $$ is a bound variable.
- Free variables in a statement are for objects for which statement is talking about. 
- Bound variables are just dummy variables to help express the idea. Thus bound variables dont represent any object of the statement.
- The truth set of a statement P(x) is the set of all values of x that make the statement P(x) true.
- The set of all possible values of variables is call *universe of discourse*. Or variables *range* over this universe. 
- In general, $$ y ∈ \{x ∈ A\,\vert\,P(x)\} $$ means the same thing as $$ y ∈ A ∧ P(y) $$.

<hr/>

### Solutions

**Soln1**

**(a)** $$ D(6,3) \land D(9,3) \land D(15, 3) $$ where $$ D(x, y) $$ means $$ x $$ is divisible by $$ y $$.
  
**(b)** $$ D(x,2) \land D(x,3) \land \lnot D(x, 4) $$ where $$ D(x, y) $$ means $$ x $$ is divisible by $$ y $$.

**(c)** $$ (\lnot P(x) \land P(y)) \lor (P(x) \land \lnot P(y) $$ where $$ P(x) = \{ x \in \mathbb{N}\,\vert\, x \text{ is prime} \} $$. 
  
<hr/>

**Soln2**

**(a)** $$ M(x) \land M(y) \land (T(x,y) \lor T(y,x)) $$ where $$ M(x) $$ is "x is men", $$ T(x, y) $$ means "x is taller than y".

**(b)** $$ [(B(x) \lor B(y)) \land (R(x) \lor R(y)] $$ where $$ B(x)\text{ and }R(x) $$ means "x has brown eyes" and "x has brown hairs" respectively.
 
**(c)** $$ [(B(x) \land R(x)) \lor (B(y) \land R(y)] $$ where $$ B(x)\text{ and }R(x) $$ means "x has brown eyes" and "x has brown hairs" respectively.

<hr/>

**Soln3**

**(a)** $$ \{ x\,\vert\,x\text{ is a planet }\} $$
 
**(b)** $$ \{ x\,\vert\,x\text{ is a university }\} $$

**(c)** $$ \{ x\,\vert\,x\text{ is a state in US }\} $$

**(d)** $$ \{ x\,\vert\,x\text{ is a province in Canada }\} $$

<hr/>

**Soln4**

**(a)** $$ \{ x^2\,\vert\, x > 0 \text{ and } x \in \mathbb{N} \} $$

**(b)** $$ \{ 2^x\,\vert\, x \in \mathbb{N} \} $$

**(c)** $$ \{ x \in \mathbb{N}\,\vert\, 10 \le x \le 19 \} $$ 

<hr/>

**Soln5**

**(a)** $$ −3 ∈ \{x ∈ \mathbb{R}\vert\,13 − 2x > 1\} \Rightarrow -3 \in \mathbb{R} \land 19 > 1$$. No free variables in the statement. Statement is true.

**(b)** $$ 4 ∈ \{x ∈ \mathbb{R^+}\vert\,13 − 2x > 1\} \Rightarrow 4 \in \mathbb{R^+} \land 5 > 1$$. No free variables in the statement. Statement is false.

**(c)** $$ 5 \notin \{x ∈ \mathbb{R}\vert\,13 − 2x > c\} \Rightarrow \lnot{ \{ 5 \in \mathbb{R} \land 3 > c \}} \Rightarrow 5 \notin \mathbb{R} \lor 3 \le c $$. One free variable(c) in the statement. (Thanks Maxwell for the correction)

<hr/>

**Soln6**

**(a)** $$ (w ∈ \mathbb{R}) \land (13 - 2w > c) $$. There are two free variables $$ w $$ and $$ c $$.

**(b)** $$ (4 \in \mathbb{R}) \land (13 - 2 \times 4 \in P) \Rightarrow (4 \in \mathbb{R}) \land (5 \in P) $$. The statement has no free variables. It is a true statement. 

**(c)** $$ (4 \in P) \land (13 - 2 \times 4 > 1) \Rightarrow (4 \in P) \land (5 > 1)$$.  The statement has no free variables. It is a false statement.

<hr/>

**Soln7**

**(a)** {Conrad Hilton Jr., Michael Wilding, Michael Todd, Eddie Fisher, Richard Burton, John Warner, Larry Fortensky}.

**(b)** $$ \{ \lor, \land, \lnot \} $$ 

**(c)** { Daniel Velleman }

<hr/>

**Soln8**

**(a)** {1, 3}

**(b)** $$ \phi $$

**(c)** 

Update:

As pointed out in comments, I got this wrong first time. Here is the correct answer:

$$ \{ x ∈ R \,\vert\, x^2 < 25 \} $$ or, equivalently $$ \,\vert x \vert\, \lt 5 $$. 

Old Answer:

$$ \{1, 2, 3, 4, 5, 6, 7 \} $$
