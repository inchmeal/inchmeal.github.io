---
chapterName: "Quantificational Logic"
sectionName: "2.1 - Quantifiers"
chapter: 2
section: "2.1"
order: "001"
date: 2015-09-04
description:  "Inchmeal - Velleman's How To Prove It Solutions, Ch-2 Sec-2.1, Quantifiers"
redirect_from:
  - /2015/09/04/how-to-prove-it-ch-2-sec-1.html
---


- $$ \forall $$ is used for statements which are true for all possible input values.
- $$ \exists $$ is used for statements which are true for atleast one input value.
- Quantifiers binds a variable. A variable that is bound by a quantifier can always be replaced with a new variable without 
changing the meaning of the statement, and it is often possible to paraphrase the statement without mentioning the bound variable at all.
- Changing the order of quantifiers can change the meaning of the sentence. $$ \forall x \exists y (x + y = 10) $$ is not same as $$ \exists x \forall y (x + y = 10) $$ .
- However, Changing the order of quantifiers will not change the meaning of the sentence if all the quantifiers are same. $$ \exists x \exists y (x + y = 10) $$ is not same as $$ \exists y \exists x (x + y = 10) $$ .

<hr/>

### Solutions

**Soln1**
    
**(a)** $$ \forall x ( \exists y F( x, y) \to S(x) ) $$       
where $$ F(x,y) $$ means x has forgiven y.     
and $$ S(x) $$ means x is a Saint.

**(b)** $$ \lnot \exists x ( C(x) \land \forall y (D(y) \to S(x,y) ) $$     
 where $$ C(x) $$ means x is student of calculus class.    
 and $$ D(y) $$ means y is student of descrete class.    
 and $$ S(x, y) $$ means x is smarter than y.
 
**(c)** $$ \forall x (\lnot(x = mary) \to L(x,mary)) $$    
 where $$ L(x,y) $$ means x likes Mary.
 
**(d)** $$ \exists y (P(y) \land S(J, y)) \land \exists y (P(y) \land S(R, y)) $$    
 where $$ S(J,y) $$ means Jane saw y.    
 where $$ S(R,y) $$ means Roger saw y.    
 where $$ P(y) $$ means y is a Police officer.    
    
**(e)** $$ \exists y (P(y) \land S(J, y) \land S(R, y)) $$    
 where $$ S(J,y) $$ means Jane saw y.    
 where $$ S(R,y) $$ means Roger saw y.    
 where $$ P(y) $$ means y is a Police officer.    

<hr/>

**Soln2**

**(a)** $$ \forall x (BRC(x) \to \exists y (U(y,x) \land R(y)) $$    
 where $$ BRC(x) $$ means Bought Rolls Royce with cash.    
 and $$ R(x) $$ means x is Rich.    
 and $$ U(y,x) $$ means y is uncle of x.
 
**(b)**  $$ \exists x(D(x) \land M(x)) \to \forall y( \exists x (D(x) \land F(y,x)) \to Q(y)) $$    
where $$ D(x) $$ means x lives in Dome,    
and $$ M(x) $$ means x has Measles,    
and $$ F(y,x) $$ y is a friend of x,    
and $$ Q(y) $$ y is quarantined.

**(c)** $$ \lnot \exists x F(x) \to \forall x(A(x) \to \exists y (D(y) \land T(x,y)) $$    
 where $$ F(x) $$ means x is failed,    
 and $$ A(x) $$ means x got A,    
 and $$ D(x) $$ means x got D,    
 and $$ T(x,y) $$ means x teaches y.
 
**(d)**  $$ \forall x D(x) \to D(Jones) $$     
where $$ D(x) $$ x can do it.
 
**(e)** $$ D(Jones) \to \forall x D(x) $$    
 where $$ D(x) $$ means x can do it.

<hr/>

**Soln3** 

**(a)** $$ \forall z (z > x \to z > y) $$. Here $$ z $$ is a free variable as it is not bound to any quantifiers.

**(b)** $$ \forall a ((a \ge -2) \leftrightarrow \exists x (a{x^2} + 4x - 2 = 0)) $$. No free variables.
  
**(c)** $$ \forall x ((x^3 - 3x \lt 3) \to (x < 10)) $$. No free variables.
   
**(d)** $$ \exists x \exists y ((x^2 + 5x = w) \land (4-y^2 = w)) \to (-10 \lt w \lt 10) $$. w is a free variable.

<hr/>

**Soln4**
   
**(a)** All unmarried man are unhappy.
   
**(b)** y is sister of x's parent.

<hr/>

**Soln5**
   
**(a)** All primes numbers except 2 are odd.
   
**(b)** There exists a perfect number which is greater than or equal to all other perfect numbers.

<hr/>

**Soln6**

**(a)** There is at-least one person who is parent of everyone. False.

**(b)** Everyone is a parent of atleast one person. False.

**(c)** There are no parents. False.

**(d)** There at-least exists one person who is not a parent of anyone. True.

**(e)** There at-least exists some person who is not a parent of someone. True.

<hr/>

**Soln7**
 
**(a)** For all $$ x $$ there exists a $$ y $$ such that $$ 2x - y = 0 $$. As $$ y = 2x $$. For every natural 
number $$ x $$, We have a $$ y $$ which is also natural number. True

**(b)** There exists a $$ y $$ such that for every value of $$ x $$, $$ 2x - y = 0 $$. False. 

**(c)** For all $$ x $$ there exists a $$ y $$ such that $$ x - 2y = 0 $$. As $$ x = 2y $$. For every natural 
number $$ x $$, We dont have y as a natural number. eg: x = 3, y is not natural number. False.

**(d)** It is clear from the statement that if x < 10 then y must be < 9. True.

**(e)** There exists y and z such that sum of y and z is 100. True.

**(f)** For x = 200. y > 200. Thus clearly z must be negative for statement to become true. But x,y,z are natural numbers. Thus False.

<hr/>

**Soln8**

**(a)** True

**(b)** False

**(c)** True. y can take fractional values.

**(d)** False. Here y can take values like 91/100(9.1), 92/100(9.2).. Thus y < 9 is not true.

**(e)** True

**(f)** True. Compared to last question, Now z can be negative. Thus statement is true.

<hr/>

**Soln9**

**(a)** True

**(b)** False

**(c)** False

**(d)** True

**(e)** True

**(f)** True
