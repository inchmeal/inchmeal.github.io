---
chapterName: "Proofs"
sectionName: "3.3 - Proofs Involving Quantifiers"
chapter: 3
section: "3.3"
order: "003"
date: 2015-09-22
redirect_from:
  - /2015/09/22/how-to-prove-it-ch-3-sec-3.html
---

### Summary

- To prove a goal of the form $$ \forall x P(x) $$:
    - Let $$ x $$ stand for an arbitrary object and prove $$ P(x) $$. If x is already being used in the proof for something, then choose an unused variable, say $$ y $$, for the arbitrary object, and prove $$ P(y) $$.
    - Scratch work will look as:    
      Given:    
      Goal: $$ \forall x P(x) $$    
      It will be transformed to:     
      Given:    
      Goal: $$ P(x) $$    
    - Formal proof will look as:    
      Let x be arbitrary.    
      \[Proof of $$ P(x) $$ goes here.\]    
      Since $$ x $$ was arbitrary, we can conclude that $$ \forall x P (x) $$.    
- To prove a goal of the form $$ \exists x P(x) $$:
    - Try to find a value of $$ x $$ for which $$ P(x) $$ will be true. Then start
      the proof with “Let x = (the value decided)” and proceed to prove $$ P(x) $$ for this value of $$ x $$.
    - Scratch work will look as:    
      Given:    
      Goal: $$ \exists x P(x) $$    
      It will be transformed to:     
      Given:    
      Goal: $$ P(x) $$   
       x = (the value decided)     
    - Formal proof will look as:    
      Let x = (the value decided).    
      \[Proof of $$ P(x) $$ goes here.\]    
      Thus $$ \exists x P (x) $$.    
- To use a given of the form $$ \exists x P(x) $$:
    - Introduce a new variable, say $$ x_0 $$, into the proof for which $$ P(x_0) $$ is true. Thus it can be assumed that P(x_0) is true. 
      This rule of inference is called *existential instantiation*.
    - Using a given of the form $$ \exists x P(x) $$ is very different from proving a goal of the form $$ \exists x P(x)$$, because when using a given of the form $$ \exists x P(x) $$, there is no choosing for the value of $$ x $$.
- To use a given of the form $$ \forall x P(x) $$:
    - Plug in any value, say a, for x and use this given to conclude that P(a) is true. This rule is called *universal instantiation*.
    - It will be useful for cases when particular value, say $$ a $$, of $$ x $$ is already known or considered and thus it can be assumed that $$ P(a) $$ is true.      

<hr/>

**Soln1**

Suppose $$ \exists x(P(x) \to Q(x)) $$ is true at $$ x = x_0 $$. Thus we have $$ P(x_0) \to Q(x_0) $$. 
Suppose $$ \forall x P(x) $$. Then $$ P(x_0) $$ is true. Since  $$ P(x_0) \to Q(x_0) $$ and $$ P(x_0) $$ then $$ Q(x_0) $$ is true. Thus $$ \exists x Q(x) $$ is true.
If follows that $$ \forall x P(x) \to \exists Q(x) $$ is true.

<hr/>

**Soln2**

Suppose $$ x $$ is arbitrary and $$ x \in A \cap B $$, then $$ x \in A $$ and $$ x \in B $$. Suppose $$ x \notin C $$. Since $$ x \in B $$ 
and $$ x \notin C $$, it follows that $$ x \in B \setminus C $$. Now since $$ x \in A $$ and $$ x \in B \setminus C $$, 
it follows that $$ x \in (A \cap (B \setminus C)) $$. But $$ A \cap (B \setminus C) = \phi $$. Thus the assumption $$ x \notin C $$ is not correct.
It follows that if $$ x \in A \cap B $$, then $$ x \in C $$. As $$ x $$ is arbitrary, we have $$ A \cap B \subseteq C $$.
 
<hr/>

**Soln3**

Suppose $$ x \in A $$ and $$ x \in C $$. Since $$ A \subseteq (B \setminus C) $$, it follows $$ x \in B \setminus C $$. Thus $$ x \in B $$ and $$ x \notin C $$. This contradicts the assumptions that $$ x \in A cap C $$. 
As $$ x $$ is artibrary, $$ A \cap C = \phi $$.

<hr/>

**Soln4**

Suppose $$ x \in \mathcal P(A) $$. Then $$ x \subseteq A $$. Since it is given that $$ A \subseteq \mathcal P(A) $$, it follows that $$ x \subseteq \mathcal P(A) $$. 
Thus if $$ x \in \mathcal P(A) $$ then $$ x \in \mathcal P ( \mathcal P(A)) $$. As $$ x $$ is arbitrary, we get $$ \mathcal P(A) \subseteq \mathcal P( \mathcal P(A) ) $$.

<hr/>

**Soln5**

**(a)** Empty set: $$ \phi $$.

**(b)** No. there is no other such set.

<hr/>

**Soln6**

**(a)**

Suppose $$ y = \frac {2x + 1} {x - 1} $$. Putting the value of $$ y $$ in $$ \frac {y+1}{y-2} $$. We get:

$$\quad = \frac {\frac {2x + 1} {x-1} + 1 } {\frac {2x + 1} {x-1} - 2} $$    

$$\quad = \frac {2x + 1 + x - 1 } {2x + 1 - 2x + 2} $$    

$$\quad = \frac {3x} {3} $$    

$$\quad = x $$    

Thus $$ \exists y (\frac {y+1}{y-2} = x)$$

**(b)**

Given that $$ \frac {y+1}{y-2} = x $$. Solving this for $$ y $$, we get $$ y = \frac {2x + 1} {x - 1} $$.
Since $$ y $$ is a real number, then $$ \frac {2x + 1} {x - 1} $$ is real. Thus $$ x \neq 1 $$. 

<hr/>

**Soln7**

Suppose $$ x > 2 $$ and $$ y = \frac {x + \sqrt {x^2 - 4}} {2} $$. Putting this value of $$ y $$ in $$ y + \frac 1 y $$, we get:

$$\quad = \frac {x + \sqrt {x^2 - 4}} {2} + \frac {2} {x + \sqrt {x^2 - 4}} $$    
$$\quad = \frac { {(x + \sqrt{x^2-4})}^2 + 4} {2(x + \sqrt {x^2 - 4})} $$    
$$\quad = x $$    

Thus $$ y + \frac 1 y = x $$.

<hr/>

**Soln8**

Suppose $$ x \in A $$. Since $$ A \in \mathcal F $$, then $$ x $$ must belongs to $$ \cup \mathcal F $$. Thus we have 
$$ x \in A \to x \in \cup \mathcal F $$. Since $$ x $$ is arbitrary, we have $$ A \subseteq \cup \mathcal F $$.
 
<hr/>

**Soln9**

Suppose $$ x \in \cap \mathcal F $$. Since $$ x \in \cap \mathcal F $$, then $$ x $$ must belongs to all the set of $$ \mathcal F $$. 
Now since $$ A \in \mathcal F $$, it follows that $$ x \in A $$. Thus we have $$ x \in \cap \mathcal F  \to x \in A $$. Since $$ x $$ is arbitrary, we have $$ \cap \mathcal F \subseteq  A$$.

<hr/>

**Soln10**

Suppose $$ x \in B $$. Since $$ \forall A \in \mathcal F(B \subseteq A) $$, it follows that $$ \forall A \in \mathcal F(x \in A) $$.
Thus $$ x $$ belongs to all the sets of $$ \mathcal F $$. Or we can say that $$ x \in \cap \mathcal F $$. It follows that $$ x \in B \to x \in \cap \mathcal F $$. Now since $$ x $$ is arbitrary, $$ B \subseteq \cap \mathcal F $$.

<hr/>

**Soln11**

Suppose that $$ x \in \cap \mathcal F $$. Thus $$ x $$ belongs to all the sets of $$ \mathcal F $$. Since $$ \phi \in \mathcal F $$, then $$ x \in \phi $$.
But there is no such element that $$ x \in \phi $$. Thus such $$ x $$ does not exist. Or $$ \cap \mathcal F = \phi $$.

<hr/>

**Soln12**

Suppose $$ x \in \cup \mathcal F $$. Thus $$ x $$ must exist in atleast one of the sets of $$ \mathcal F $$. Suppose that $$ A_0 \in \mathcal F $$ and $$ x \in A_0 $$. 
Since $$ \mathcal F \subseteq G $$, then $$ A_0 \in G $$. Thus x also exist in atleast one of the sets of $$ \mathcal G $$. Or $$ x \in \cup \mathcal G $$.
Since $$ x $$ is arbitrary, $$ \cup \mathcal F \subseteq \cup \mathcal G $$.

<hr/>

**Soln13**

Suppose $$ x \in \cap \mathcal G $$, then $$ x $$ belongs to all the sets of $$ \mathcal G $$. Since $$ \mathcal F \subseteq \mathcal G $$, it follows that $$ x $$ must belongs to all the sets of $$ \mathcal F $$.
Thus $$ x \in \cap \mathcal G  \to x \in \cap \mathcal F $$. Since $$ x $$ is arbitrary, it follows that $$ \cap \mathcal G \subseteq \cap \mathcal F $$.

<hr/>

**Soln14**

Suppose $$ x \in {\cup}_{i \in I} \mathcal P(A_i) $$. Suppose $$ x $$ exists in $$ \mathcal P(A_t) $$ where $$ t \in I $$. Thus $$ x \in \mathcal P(A_t) $$. 
It follows that $$ x \subseteq A_t $$. Now since $$ x \subseteq A_t $$, it follows that $$ x \subseteq {\cup}_{i \in I} A_i $$. Thus $$ x \in \mathcal P({\cup}_{i \in I} A_i) $$.
Or we can say that if $$ x \in {\cup}_{i \in I} \mathcal P(A_i) $$ then $$ x \in \mathcal P({\cup}_{i \in I} A_i) $$. Since $$ x $$ is arbitrary, we can conclude that $$ {\cup}_{i \in I} \mathcal P(A_i) \subseteq \mathcal P({\cup}_{i \in I} A_i)  $$.

<hr/>

**Soln15**

Suppose $$ x \in {\cap}_{i \in I} \mathcal P(A_i) $$, then $$ \forall i \in I(x \in \mathcal P(A_i))$$. Thus $$ x $$ is a subset of all the sets of $$ A_i $$ where $$ i \in I $$.
Or we can say that $$ x = {\cap}_{i \in I} A_i $$. Thus $$ {\cap}_{i \in I} A_i = {\cap}_{i \in I} \mathcal P(A_i) $$.

<hr/>

**Soln16**

Given that $$ \mathcal F \subseteq \mathcal P(B) $$. Thus all the sets of A are subset of $$ B $$. Suppose $$ x \in \cup \mathcal F $$, then $$ x $$ belongs to atleast one of the set of $$ \mathcal F $$.
Since all the sets of $$ \mathcal F $$ are subsets of $$ B $$, it follows that $$ x \in B $$. Thus if $$ x \in \cup \mathcal F $$, then $$ x \in B $$. Since $$ x $$ is arbitrary, it can be concluded that
$$ \cup \mathcal F \subseteq B $$.

<hr/>

**Soln17**

Suppose $$ x \in \cup \mathcal F $$, then $$ x $$ belongs to atleast one of the sets of $$ \mathcal F $$. Since it is given that all the sets of $$ \mathcal F $$ are 
subsets of every set of $$ \mathcal G $$, it follows that $$ x $$ exists in all the sets of $$ \mathcal G $$. Or we can say that $$ x \in \cap \mathcal G $$.
Thus if $$ x \in \cup \mathcal F $$, then $$ x \in \cap \mathcal G $$. Since $$ x $$ is arbitrary, we can conclude that $$ \cup \mathcal F \subseteq \cap \mathcal G $$.

<hr/>

**Soln18**

**(a)**

It is given that $$ b = ma $$ and $$ c = na $$, where $$ m, n$$ are integers. Adding the equations, we have $$ b + c = (m+n)a $$. Since $$m + n $$ is also integer, it can be concluded that $$ a \vert (b+c) $$.  

**(b)**

Given that $$ bc = mac $$. Since $$ c \neq 0 $$, it can be simplified to $$ b = ma $$. Thus $$ a \vert b $$.
 
<hr/>

**Soln19**

**(a)**

Suppose $$ z = \frac {y-x} 2 $$. Then $$ x + z = x + \frac {y-x} 2 = \frac {x + y} 2 $$. Similarly $$ y - z = y - \frac {y - x} 2 = \frac {x + y} 2 $$.
Thus for $$ z = \frac {y-x} 2 $$, then  $$ x + z = y - z = \frac {x+y} 2$$. Since $$ z = \frac {y-x} 2 $$ is real, the equation is correct.

**(b)**

No, statement will not be correct as $$ z = \frac {y-x} 2 $$ is not an integer. 

<hr/>

**Soln20**

The problem is negation of $$ \forall x (x^2 ≥ 0) $$ is $$ \exists x (x^2 < 0) $$. In the given proof, its negation is taken as $$ \forall x(x^2 < 0) $$.

<hr/>

**Soln21**

**(a)** The issue with the proof is it started with $$ x \in A $$ but in conclusion it is assumed that $$ x \in B $$.

**(b)** $$ A = \{1,2\} $$ , $$ B = \{0, 1, 2 \} $$.
 
<hr/>

**Soln22**

The issue with the proof is that $$ y $$ is fixed for the value of $$ x $$. But for the goal of the theorem it should be arbitrary.

<hr/>

**Soln23**

**(a)** 

It looks like theorem is correct except for only boundary case for empty set. If $$ A = \phi $$ then $$ A \in \cup \mathcal F $$ and $$ A \in \cup \mathcal G $$.
Thus for this case, we have no contradiction.

**(b)**

As seen above we can have only boundary case examples:

$$ \mathcal F = \{ \phi, \{1,2\}, \{3,5\} \} $$         
$$ \mathcal G = \{ \phi, \{4\}, \{8,9\} \} $$     

Thus $$ \mathcal F \cap \mathcal G = \{ \phi \} $$, are not disjoint.

But $$ \cup \mathcal F \cap \cup \mathcal G = \phi $$. Thus they are disjoint.

<hr/>

**Soln24**

**(a)**

Problem with the proof is $$ x $$ and $$ y $$ are considered equal, which may not be the case always.

**(b)**

Taking $$ x = 1 $$ and $$ y = 0 $$, the theorem is not correct.

<hr/>

**Soln25**

Let $$ x $$ be an arbitrary real number. Let $$ y = 2x $$. Now let $$ z $$ be an arbitrary real number.
Simplifying $$ {(x + z)}^2 − (x^2 + z^2) $$    
$$ \quad = x^2 + z^2 + 2xz - x^2 - z^2 $$    
$$ \quad = 2xz $$

Now taking $$ y = 2x $$, we have $$ yz = 2xz $$. Thus we can conclude that $$ yz = {(x + z)}^2 − (x^2 + z^2) $$.

<hr/>

**Soln26**

**(a)** 
    
- Goal: $$ \forall x P(x) $$ and Given: $$ \exists x P(x) $$:    
  For goal $$ \forall x P(x) $$, we introduce an arbitrary variable $$ x $$ and move forward.    
  For given $$ \exists x P(x) $$, we introduce a new variable, say $$ x_0 $$ for which $$ P(x_0) $$ is true and move forward for the proof.     
  Thus in both cases we move forward in the proof by introducing a variable.
   
- Goal: $$ \exists x P(x) $$ and Given: $$ \forall x P(x) $$:    
  For goal $$ \exists x P(x) $$, we move forward by finding a value for which $$ P(x) $$ is true.    
  For given $$ \forall x P(x) $$, we move forward by finding a value that can help further in proof as $$ P(x) $$ will be true for that value.    
  Thus in both cases we work on finding specific value to move forward with the proof.
  
**(b)** Not sure about the reason for these similarities.

