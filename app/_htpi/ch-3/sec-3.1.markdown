---
chapterName: "Proofs"
sectionName: "3.1 - Proof Strategies"
chapter: 3
section: "3.1"
order: "001"
date: 2015-09-14
description:  "Inchmeal - Velleman's How To Prove It solutions, Ch-3 Sec-3.1, Proof Strategies"
redirect_from:
  - /2015/09/14/how-to-prove-it-ch-3-sec-1.html
---

<hr/>

### Summary

- A [theorem][wiki] is a statement that has been proven on the basis of previously established statements, such as other theorems—and generally accepted statements, such as axioms.
- A theorem that says that if certain assumptions called the hypotheses of the theorem are true, then some conclusion must also be true.
- The hypothesis and conclusion of a theorem often contains free variables. When values are substituted/assigned for these variables, it is called an instance of the theorem. 
- A proof of a theorem is simply a deductive argument whose premises are the hypotheses of the theorem and whose conclusion is the conclusion of the theorem.
- To prove a conclusion of the form of $$ P \to Q $$, there can be two strategies: 
    - Assuming $$ P $$ is true, Prove $$ Q $$. In this way this strategy transformed the problem  of proving $$ P \to Q $$ to proving $$ Q $$. After this transformation, $$ P $$ is now the part of the hypothesis.
    - Prove contra-positive: assuming $$ \lnot Q $$ is true, prove $$ \lnot P $$. Similarly here also problem is transformed from proving  $$ P \to Q $$ to proving $$ \lnot P $$.
- Thus multiple transformations can be applied to convert the problem to simpler one.
- At any point of the proof:
    - *givens* are the set of statements that are known or assumed to be true till that point.
    - *goal* is the final statement that remains to be proven.
    - Thus at the start of a proof, givens will be the initial hypothesis and goal will be the final conclusion.
    - In the course of the proof, the list of hypothesis will increase(during transformation). 
    - Similarly, conclusion will change during the course of the proof.
- In writing final proof:
    - Reasoning used for figuring the the proof are not used/written. 
    - Steps to justify the conclusions are used/written but no explanations on how the steps were thought of.
    - Similarly *Goals* and *Givens* are also not part of the final proof.
- Explanations are avoided in proofs to maintains the distinction between:
    - Explanation of thought process.
    - Justifying the conclusions.    
- Thus proof of the goal $$ P \to Q $$ will look as follows:
    - Given: ,     
      Goal $$ P \to Q $$
    - Using strategy-1: 
        - Scratch work will look as:    
            Given: $$ P $$ ,    
            Goal $$ Q $$.
        - Final proof will look as:    
           Suppose $$ P $$ is true.    
           \[Proof of $$ Q $$ \]    
           Therefore $$ P \to Q $$. 
    - Using strategy-2: 
        - Scratch work will look as:    
            Given: $$ \lnot Q $$ ,    
            Goal $$ \lnot P $$.
        - Final proof will look as:
           Suppose $$ Q $$ is false.    
           \[Proof of $$ \lnot P $$ \]    
           Therefore $$ P \to Q $$. 
<hr/>

**Soln1**

**(a)** 

Hypothesis:

- $$ n $$ is an integer and $$ n > 1 $$.
- $$ n $$ is not prime.

Conclusion:    
    $$ 2^n - 1 $$ is not prime.
    
- For $$ n = 6 $$, hypothesis is true.
- Conclusion is $$ 2^6 - 1 = 63 $$ is not prime. This is also true.

**(b)** 

- For $$ n = 15 $$, hypothesis is true.
- Conclusion is $$ 2^{15} - 1 = 32767 $$ is not prime. This is also true: $$ 32767 = 7 * 4681 $$.
 
**(c)**

- For $$ n = 11 $$, hypothesis is *not* true.
- Thus theorem does not say anything.

<hr/>

**Soln2**

**(a)**

Hypothesis: $$ b^2 > 4ac $$.

Conclusion: $$ ax^2 + bx + c = 0 $$ has exactly 2 solutions.

**(b)** $$ a,\,b,\, c $$ are free variables. $$ x $$ is not a free variable.

**(c)** Substituting the values: $$ (-5)^2 > 4 \times 2 \times 3 $$ gives $$ 25 > 24 $$. This is true. Thus hypothesis is true.    

Conclusion is $$ 2x^2 -5x + 3 = 0 $$    
$$\quad = 2x^2 -3x -2x + 3 = 0 $$    
$$\quad = x(2x - 3) -3(x - 1) = 0 $$    
$$\quad = (2x - 3)(x - 1) = 0 $$    

Thus $ x = 1$$ and $$ x = 3/2 $$ are two solutions. That means conclusion is also correct.

**(d)** Substituting the values: $$ (4)^2 > 4 \times 2 \times 3 $$ gives $$ 16 > 24 $$. This is false. Thus hypothesis is false.    
Theorem does not say anything as hypothesis is not true.

<hr/>

**Soln3**

Hypothesis:

- $$ n $$ is a natural number and $$ n > 2 $$.
- $$ n $$ is not prime.

Conclusion:    
    $$ 2n + 13 $$ is not prime.

For $$ n = 9 $$, Hypothesis is true. Conclusion: $$ 2 \times 9 + 13 = 31 $$, which is a prime number. Thus conclusion is not true.

<hr/>

**Soln4**

Suppose $$ 0 < a < b $$. Then $$ b−a > 0 $$.    
Also $$ a + b > 0 $$. Multiplying $$ b−a > 0 $$ by $$ b + a $$    
We get $$(b-a)(b+a) > 0$$. Which gives:    
$$b^2 - a^2 > 0$$.    
Since $$ b^2 − a^2 > 0 $$, it follows that $$ a^2 < b^2 $$.

<hr/>

**Soln5** 

if $$ a < b < 0 $$ then $$ b - a > 0 $$ and $$ b + a < 0 $$     
Thus, the product $$ (b-a)(b+a) < 0 $$ because product of a positive and negative number is negative.    
Expanding the product, we get $$ b^2 - a^2 < 0 $$.    
Now since $$ b^2 - a^2 < 0 $$, It follows that $$ b^2 < a^2 $$. 

<hr/>

**Soln6**

if $$ 0 < a < b $$, Multiplying both sides by positive number $$ \frac 1 {ab} $$.    
$$\quad = \frac a {ab} < \frac b {ab} $$    
$$\quad = \frac 1 b < \frac 1 a $$    

<hr/>

**Soln7**

Suppose $$ a^3 > a $$. Subtracting $$ a $$ from both sides:    
 $$\quad a^3 - a > 0$$.    
 Multiplying by $$ a^2 + 1 $$ on both sides:    
 $$ \quad = (a^3 - a)(a^2 + 1) > 0$$   
 Simplifying:    
 $$ \quad = a^5 - a^3 + a^3 - a > 0 $$      
 $$ \quad = a^5 - a > 0 $$    
 Thus we have: $$ a^5 > a $$.
 
<hr/>

**Soln8**

We are given that $$ A \setminus B \subseteq C \cap D $$ and $$ x \in A $$.    
Thus we have $$ \forall y (y \in A \land y \notin B) \to (y in C \land y \in D) $$    
For $$ y = x $$, we have:    
 $$ x \in A \land x \notin B \to (x \in C \land x \in D) $$      
As $$ x \in A $$ and suppose $$ x \notin D $$, then we get:    
 $$ true \land x \notin B \to (x \in C \land false) $$    
 Simplifying:    
 $$ x \notin B \to false $$    
 It follows that $$ x \notin B = false $$, or $$ x \in B $$.
 
<hr/>
 
**Soln9**

Given that $$ a < b $$, then adding $$ b $$ to both sides:

$$ a + b < b + b $$    
$$ \quad = a + b < 2b $$    
Dividing both sides by 2:    
$$ \frac {a+b} 2 < b $$

<hr/>

**Soln10**

We shall prove it by proving contra-positive.    
Suppose $$ x = 8 $$, we get    
$$ \frac {\sqrt[3]{8} + 5} {8^2 + 6} = \frac 1 8 $$    
Simplifying:    
$$\quad \frac {7} {70} = \frac 1 8 $$    
$$\quad \frac {1} {10} = \frac 1 8 $$    
Clearly which is not correct. Thus if $$ x = 8 $$, then  $$ \frac {\sqrt[3]{x} + 5} {8^2 + 6} \neq \frac 1 x $$    
Thus if $$ \frac {\sqrt[3]{x} + 5} {8^2 + 6} = \frac 1 x $$, then $$ x \neq 8 $$

<hr/>

**Soln11**

We shall prove this using contra-positive.
Given that $$ 0 < a < b $$, and $$ d > 0 $$    
Multiplying $$ a < b $$, by $$ d $$ on both sides: $$ ad < bd $$   
Suppose that $$ c <= d $$, Multiplying both sides by $$ a $$ gives: $$ ac <= ad $$    
Thus we have $$ ad < bd $$ and $$ ac <= ad $$, which gives $$ ac <= ad < bd $$   
Or we can say that: $$ ac < bd $$.

Thus we proved that if $$ c <= d $$, then $$ ac < bd $$.    
It follows that if $$ ac >= bd $$, then $$ c > d $$.

<hr/>

**Soln12**

Suppose $$ x > 1 $$, then $$ 3x > 3 $$    
Adding 2 on both sides:    
$$ 3x + 2 > 5 $$, or $$ 2 > 5 - 3x $$, which is same as $$ 5 - 3x < 2 $$    

Also, given that $$ 3x + 2y \le 5 $$    
Subtracting 3x from both sides:    
$$ 2y \le 5 - 3x $$   

Thus we have $$ 2y \le 5 - 3x < 2 $$    
Simplifying:    
$$ 2y < 2$$, or $$ y < 1$$    

<hr/>

**Soln13**

Given that $$ x^2 + y = −3 $$ and $$ 2x − y = 2 $$    
Adding both:    
$$ x^2 + y + 2x - y = -3 + 2 $$    
Simplifying:    
$$ x^2 + 2x + 1 = 0 $$    
Or $$ {(x+1)}^2 = 0 $$    
which means $$ x = -1 $$.

<hr/>

**Soln14**

Given that $$ x > 3 $$    
As $$ x > 0 $$ and $$ 3 > 0 $$, we can apply the theorem: If $$ 0 < a < b $$, then $$ a^2 < b^2 $$    
Thus we have $$ x^2 > 9 $$    

Also, it is givem that $$ y < 2 $$.    
Multiplying both sides by -2, and reverting the sign of inequality:    
$$ -2y > -4 $$    
 
Adding both inequalities: 
$$ x^2 - 2y > 9 - 4 $$    
Or $$ x^2 - 2y > 5 $$.

<hr/>

**Soln15**

**(a)**

The proof is for: if $$ x = 7 $$, then $$ \frac {2x-5} {x -4} = 3 $$    
while the required proof was for: if $$ \frac {2x-5} {x -4} = 3 $$, then $$ x = 7 $$.    

**(b)**

Given that $$ \frac {2x-5} {x -4} = 3 $$    
Cross multiplying:    
$$ 2x - 5 = 3x - 12 $$    
Simplifying:    
$$ x = 7 $$.

<hr/>

**Soln16**

**(a)**

The issue is that value of $$ x = -3 $$ is not taken into consideration. As for this value $$ x^2 = 9 $$.

**(b)**

If x = -3, then the equation gives $$ y = 1$$, thus theorem is not correct as it says if $$ x \ne 3 $$, then $$ y = 0$$.





[wiki]: https://en.wikipedia.org/wiki/Theorem.

