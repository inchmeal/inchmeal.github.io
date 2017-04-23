---
layout: blog
title:  "How To Prove It, Ch-2 Sec-2.2, Equivalences Involving Quantifiers"
description:  "Inchmeal - Velleman's How To Prove It, Ch-2 Sec-2.2, Equivalences Involving Quantifiers"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 2, Section - 2.2, Equivalences Involving Quantifiers from Velleman's book **How To Prove It**.
<!--more-->
<hr/>

### Summary

- Equivalances:
    - $$ \lnot \forall x P(x) = \exists x \lnot P(x) $$.
    - $$ \lnot \exists x P(x) = \forall x \lnot P(x) $$.
- $$ \exists ! x P(x) $$ means P(x) is true for exactly one value of x. It is equivalent to     
$$ \exists x (P(x) \land \lnot \exists y (P(y) \land \lnot (y = x))) $$. 
- Bounded Quantifiers:
    - $$ \exists x \in A P(x) = \exists x (x \in A \land P(x)) $$.
    - $$ \forall x \in A P(x) = \forall x (x \in A \to P(x)) $$.
- Similar to negation equivalances( in first point), Equivalences for Bounded Quantifiers:
    - $$ \lnot \forall x \in A P(x) = \exists x \in A \lnot P(x) $$.
    - $$ \lnot \exists x \in A P(x) = \forall x \in A \lnot P(x) $$.
- If $$ A = \phi $$ then:
    - $$ \exists x \in A P(x) $$ is always false irrespective of P(x).
    - $$ \forall x \in A P(x) $$ is true irrespective of P(x).
- Universal Quantifiers distributes over conjunction i.e. $$ \forall x (P(x) \land Q(x)) = \forall x P(x) \land \forall x Q(x)$$.
  But Universal Quantifiers does not distributes over disjunction. 
- Existential Quantifier distributes over disjunction but does not distributes over conjunction. 

<hr/>

**Soln1**

**(a)** $$ \forall x (M(x) \to \exists y(F(x, y) \land H(y)) $$    
where $$ M(x) $$ means $$ x $$ is maths major,    
and $$ F(x,y) $$ means $$ x $$ is a friend of $$ y $$,    
and $$ H(y) $$ means $$ y $$ needs help in homework.

Negation of the above statement:

$$ \quad \lnot \forall x (M(x) \to \exists y(F(x, y) \land H(y)) $$    
$$ \quad = \exists x \lnot (M(x) \to \exists y(F(x, y) \land H(y)) $$    
$$ \quad = \exists x \lnot (\lnot M(x) \lor \exists y(F(x, y) \land H(y)) $$    
$$ \quad = \exists x (\lnot \lnot M(x) \land \lnot \exists y(F(x, y) \land H(y)) $$    
$$ \quad = \exists x ( M(x) \land \forall y \lnot(F(x, y) \land H(y)) $$    
$$ \quad = \exists x ( M(x) \land \forall y (\lnot F(x, y) \lor \lnot H(y)) $$    
$$ \quad = \exists x ( M(x) \land \forall y ( F(x, y) \to \lnot H(y)) $$    

There exists a maths major and all of his friends don't need help in their homework.

**(b)** $$ \forall x \exists y(R(x,y) \land \forall z \lnot L(y,z))$$    
where $$ R(x,y) $$ means $$ x $$ is the roommate of $$ y $$,    
and $$ L(y,z) $$ means $$ y $$ likes $$ z $$.

Negation of the above statement:

$$ \lnot \forall x \exists y(R(x,y) \land \forall z \lnot L(y,z))$$    
$$ \quad = \exists x \lnot \exists y(R(x,y) \land \forall z \lnot L(y,z))$$    
$$ \quad = \exists x \forall y \lnot (R(x,y) \land \forall z \lnot L(y,z))$$    
$$ \quad = \exists x \forall y (\lnot R(x,y) \lor \lnot \forall z \lnot L(y,z))$$    
$$ \quad = \exists x \forall y (\lnot R(x,y) \lor \exists z \lnot \lnot L(y,z))$$    
$$ \quad = \exists x \forall y (\lnot R(x,y) \lor \exists z L(y,z))$$    
$$ \quad = \exists x \forall y (R(x,y) \to \exists z L(y,z))$$    

There exists someone whose all roommates likes atleast one person.

**(c)** Required statement is:     
    $$ \lnot \forall x ((x \in A \lor x \in B) \to (x \in C \land x \notin D)) $$      
    $$ \quad = \exists x \lnot ((x \in A \lor x \in B) \to (x \in C \land x \notin D)) $$      
    $$ \quad = \exists x \lnot (\lnot (x \in A \lor x \in B) \lor (x \in C \land x \notin D)) $$      
    $$ \quad = \exists x (\lnot \lnot (x \in A \lor x \in B) \land \lnot (x \in C \land x \notin D)) $$      
    $$ \quad = \exists x ((x \in A \lor x \in B) \land (x \notin C \lor x \in D)) $$      


**(d)** Required statement is:
    $$ \lnot \exists x \forall y[ y > x \to \exists z(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \lnot \forall y[ y > x \to \exists z(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \exists y \lnot [ y > x \to \exists z(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \exists y \lnot [ \lnot (y > x) \lor \exists z(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \exists y [ \lnot \lnot (y > x) \land \lnot \exists z(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \exists y [ (y > x) \land \forall z \lnot(z^2 + 5z = y)] $$    
    $$ \quad = \forall x \exists y [ (y > x) \land \forall z (z^2 + 5z \neq y)] $$    

<hr/>

**Soln2**

**(a)** $$ \exists x (F(x) \land \lnot \exists y R(x,y)) $$.

 Negation of above statement:
 
 $$ \quad = \lnot \exists x (F(x) \land \lnot \exists y R(x,y)) $$    
 $$ \quad = \forall x \lnot (F(x) \land \lnot \exists y R(x,y)) $$    
 $$ \quad = \forall x (\lnot F(x) \lor \lnot \lnot \exists y R(x,y)) $$    
 $$ \quad = \forall x (\lnot F(x) \lor \exists y R(x,y)) $$    
 $$ \quad = \forall x ( F(x) \to \exists y R(x,y)) $$.
 
 where $$ F(x) $$ means $$ x $$ is a freshman.    
 and $$ R(x,y) $$ means $$ x $$ and $$ y $$ are roommates.
 
**(b)** $$ \forall x \exists y L(x,y) \land  \lnot \exists x \forall y L(x,y) $$
 
 Negation of above statement:
  
 $$ \lnot (\forall x \exists y L(x,y) \land  \lnot \exists x \forall y L(x,y)) $$    
 $$ \quad = (\lnot (\forall x \exists y L(x,y)) \lor  \lnot (\lnot \exists x \forall y L(x,y))) $$    
 $$ \quad = (\exists x \lnot \exists y L(x,y)) \lor  \exists x \forall y L(x,y) $$    
 $$ \quad = (\exists x \forall y \lnot L(x,y)) \lor  \exists x \forall y L(x,y) $$
     
 Either there exists someone who does not like anyone or there exists someone who likes everyone.

**(c)** $$ \forall a \in A \exists b \in B (a \in C \leftrightarrow b \in C) $$.

This is equivalent to:

$$ \forall a \in A \exists b \in B (a \in C \to b \in C)  \land \forall a \in A \exists b \in B (b \in C \to a \in C) $$.

Negation of the above statement:

$$ \lnot (\forall a \in A \exists b \in B (a \in C \to b \in C)  \land \forall a \in A \exists b \in B (b \in C \to a \in C)) $$    
$$ \lnot \forall a \in A \exists b \in B (a \in C \to b \in C)  \lor \lnot \forall a \in A \exists b \in B (b \in C \to a \in C) $$    
$$ \exists a \in A \lnot \exists b \in B (a \in C \to b \in C)  \lor \exists a \in A \lnot \exists b \in B (b \in C \to a \in C) $$    
$$ \exists a \in A \forall b \in B \lnot (a \in C \to b \in C)  \lor \exists a \in A \forall b \in B \lnot(b \in C \to a \in C) $$    
$$ \exists a \in A \forall b \in B \lnot (a \notin C \lor b \in C)  \lor \exists a \in A \forall b \in B \lnot(b \notin C \lor a \in C) $$    
$$ \exists a \in A \forall b \in B (a \in C \land b \notin C)  \lor \exists a \in A \forall b \in B(b \in C \land a \notin C) $$    

There exists an a in A such that for all values of b in B, either a is in C and b is not in C, or a is not in C and b is in C.
 
**(d)** Required statement is:

 $$ \lnot \forall y \gt 0 \exists x (ax^2 + bx + c = y) $$     
 $$ \exists y \gt 0 \lnot \exists x (ax^2 + bx + c = y) $$     
 $$ \exists y \gt 0 \forall x \lnot (ax^2 + bx + c = y) $$     
 $$ \exists y \gt 0 \forall x (ax^2 + bx + c \neq y) $$     

<hr/>

**Soln3**

**(a)** All possible values of x are 0,1,2,3,4,5,6. It can be easily verified that there exists a,b and c such that $$ a^2 + b^2 + c^2 = x $$ for all possible values of x. Thus statement is True. 

**(b)** False. x has two possible values 1 and 7.

**(c)** True. x has two values -1 and 9. But as x is Natural number. Thus only x has one posssible value 9.
 
**(d)** True. x = 9 and y = 9.

<hr/>

**Soln4**

Given: $$ \lnot \exists x P(x) = \forall x \lnot P(x) $$.

To Prove: $$ \lnot \forall x P(x) = \exists x \lnot P(x) $$.

Putting $$ P(x) = \lnot Q(x) $$ in the given equivalence:    
$$ \lnot \exists x \lnot Q(x) = \forall x Q(x) $$    
Taking negation on both sides:    
$$ \lnot \lnot \exists x \lnot Q(x) = \lnot \forall x Q(x) $$    
$$ \exists x \lnot Q(x) = \lnot \forall x Q(x) $$    
Hence Proved.

<hr/>

**Soln5**

To Prove: $$ \lnot \exists x \in A P(x) $$ is equivalent to $$ \forall x \in A \lnot P(x) $$.    

LHS: $$ \lnot \exists x \in A P(x) $$    
$$ \quad = \lnot \exists x (x \in A \land P(x)) $$    
$$ \quad = \forall x \lnot (x \in A \land P(x)) $$    
$$ \quad = \forall x (x \notin A \lor \lnot P(x)) $$    
$$ \quad = \forall x (x \in A \to \lnot P(x)) $$    
$$ \quad = \forall x \in A \lnot P(x) $$ Hence Proved.

<hr/>

**Soln6**

To Prove $$ \exists x(P(x) \lor Q(x)) $$ is equivalent to $$ \exists x P(x) \lor \exists x Q(x) $$.

Taking LHS: $$ \exists x(P(x) \lor Q(x)) $$    
$$ \quad = \lnot \lnot \exists x(P(x) \lor Q(x)) $$    
$$ \quad = \lnot \forall x \lnot (P(x) \lor Q(x)) $$    
$$ \quad = \lnot \forall x (\lnot P(x) \land \lnot Q(x)) $$    
$$ \quad = \lnot (\forall x \lnot P(x) \land \forall x \lnot Q(x)) $$    
$$ \quad = \lnot \forall x \lnot P(x) \lor \lnot \forall x \lnot Q(x)) $$    
$$ \quad = \exists x \lnot \lnot P(x) \lor \exists x \lnot \lnot Q(x)) $$    
$$ \quad = \exists x P(x) \lor \exists x Q(x)) $$ Hence Proved.

<hr/>

**Soln7**

To Prove $$ \exists x (P(x) \to Q(x)) $$ is equivalent to $$ \forall x P(x) \to \exists x Q(x) $$.

Starting from LHS $$ \exists x (P(x) \to Q(x)) $$    
$$ \quad = \exists x (\lnot P(x) \lor Q(x)) $$    
$$ \quad = \exists x \lnot P(x) \lor \exists x Q(x) $$    
$$ \quad = \lnot \forall x P(x) \lor \exists x Q(x) $$    
$$ \quad = \forall x P(x) \to \exists x Q(x) $$ Hence Proved.    

<hr/>

**Soln8**

To Prove: $$ (\forall x \in A P(x)) \land (\forall x \in B P(x)) $$ is equivalent to $$ \forall x \in (A \lor  B)P(x) $$    

Starting from LHS:

$$ (\forall x \in A P(x)) \land (\forall x \in B P(x)) $$    
$$ \quad = (\forall x (x \in A \to P(x))) \land (\forall x (x \in B \to P(x))) $$    
$$ \quad = \forall x ((x \in A \to P(x)) \land (x \in B \to P(x))) $$    
$$ \quad = \forall x ((x \notin A \lor P(x)) \land (x \notin B \lor P(x))) $$    
Applying reverse distributive law:    
$$ \quad = \forall x ((x \notin A \land x \notin B) \lor P(x)) $$    
$$ \quad = \forall x ((\lnot(x \in A \lor x \in B)) \lor P(x)) $$    
$$ \quad = \forall x ((x \in A \lor x \in B) \to P(x)) $$    
$$ \quad = \forall (x \in A \lor x \in B) P(x)) $$    
$$ \quad = \forall x \in (A \lor B) P(x)) $$ Hence Proved.
 
<hr/>
 
**Soln9**

Statement $$ \forall x (P(x) \lor Q(x)) $$ is *not* equivalent to $$ \forall x P(x) \lor  \forall xQ(x) $$.

Assigning $$ P(x) = true $$, if x is even.    
and $$ Q(x) = true $$, if x is odd.

Lets have Universe as all Natural Numbers.
 
Clearly $$ \forall x (P(x) \lor Q(x)) $$ is true as Every number is either even or odd.     
But $$ \forall x P(x) \lor  \forall xQ(x) $$ is not true. A neither all numbers are even not all numbers are odd.

<hr/>

**Soln10**

**(a)** $$ \exists x \in A P(x) \lor \exists x \in B P(x) $$    
$$ \quad = \exists x (x \in A \land P(x)) \lor \exists x (x \in B \land P(x)) $$    
$$ \quad = \exists x ((x \in A \land P(x)) \lor (x \in B \land P(x))) $$    
Using Law of distribution in reverse:    
$$ \quad = \exists x ((x \in A \lor x \in B) \land P(x)) $$    
$$ \quad = \exists x ((x \in (A \lor B)) \land P(x)) $$    
$$ \quad = \exists x \in (A \lor B) P(x)) $$ Hence Proved.

**(b)**

$$ \exists x \in A P(x) \land \exists x \in B P(x) $$ is not equivalent to $$ \exists x \in (A \land B) P(x) $$.

If A and B are disjoint set, then clearly RHS will be false as $$ A \land B = \phi $$. But even in this case 
for some values of x LHS can be true.

<hr/>

**Soln11**

$$ A \subseteq B $$ is equivalent to    
$$ \quad = \forall x (x \in A \to x \in B) $$    

Also, $$ A \setminus B = \phi $$    
No elements exist in the $$ A \setminus B $$ set. Thus it is equivalent to:    
$$ \lnot \exists x (x \in (A \setminus B)) $$    
$$ \quad = \lnot \exists x (x \in A \land x \notin B) $$    
$$ \quad = \forall x \lnot (x \in A \land x \notin B) $$    
$$ \quad = \forall x (x \notin A \lor x \in B) $$    
$$ \quad = \forall x (x \in A \to x \in B) $$    

Thus both are same.

<hr/>

**Soln12**

**(a)** There is exactly one student who is taught by x.

**(b)** There exists atleast one teacher having exactly one student.

**(c)** There is exactly one teacher having at-least one student. 

**(d)** There atleast exist one student having exactly one teacher.

**(e)** There is only one teacher having only one student.

**(f)** There is exactly one teacher having only one student.

Clearly (e) and (f) are same.


