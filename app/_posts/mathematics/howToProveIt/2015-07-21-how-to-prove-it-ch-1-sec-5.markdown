---
layout: blog
title:  "How To Prove It, Ch-1 Sec-1.5, The Conditional and Biconditional Connectives"
description:  "Inchmeal - Velleman's How To Prove It, Ch-1 Sec-1.5, The Conditional and Biconditional Connectives"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 1, Section - 1.5, The Conditional and Biconditional Connectives from Velleman's book **How To Prove It**.
<!--more-->
<hr/>

### Summary

- $$ P \to Q $$ is equivalent to : 
    - $$ \lnot P \lor Q $$.
    - $$ \lnot ( P \land \lnot Q) $$.
- $$ P \to Q $$ and $$ Q \to P $$ are not equivalent. They are called converse of each other.
- $$ P \to Q $$ and $$ \lnot Q \to \lnot P $$ are equivalent. They are called contrapositive of each other.
- $$ P \to Q $$ is equivalent to following:
    - $$P$$ implies $$Q$$.
    - $$Q$$, if $$P$$.
    - $$P$$, only if $$Q$$.
    - $$P$$ is a sufficient condition for $$Q$$.
    - $$Q$$ is necessary condition for $$P$$.
- $$ P \leftrightarrow Q $$ is equivalent to $$ (P \to Q) \land (Q \to P) $$. Thus it means:
    - $$P$$ is a necessary and sufficient condition for $$Q$$.
    - $$ P\,iff\,Q $$.

<hr/>

### Solutions

**Soln1**
    
**(a)**
    
$$ P $$ Gas has pleasant smell.    
$$ E $$ Gas is explosive.
$$ H $$ Gas is hydrogen.

$$ (\lnot P \lor \lnot E) \to \lnot G $$. This is equivalent to $$ \lnot (P \land E) \to \lnot H $$ which
is equivalent to $$ H \to (P \land Q) $$.

**(b)**

$$ F = $$ Fever, $$H = $$ Headache, $$D = $$ Doctor.     
$$ (F \land H) \to D $$.    

**(c)** $$ (F \to D) \land (H \to D) $$.
 
**(d)** $$ (x != 2) \to (P(x) \to O(x)) $$, where $$P(x)$$ is "x is prime" and $$O(x)$$ is "x is odd".

<hr/>

**Soln2**

**(a)** 

$$ G =$$ Good Price, $$ N =$$ Nice Apartment, $$ S =$$ Sell house.
   
$$ S \to (G \land N) $$.    

**(b)**

$$ G =$$ Good Credit History, $$ A =$$ Adequate down payment, $$ M $$ Getting mortgage.
 
$$ M \to (G \land A)$$.
 
**(c)**

If someone not stops John then he will kill himself. $$ \lnot S \to K $$.

**(d)** $$ D(x,4) \lor D(x,6) \to \lnot P(x) $$, where $$D(x,y)$$ means " x is divisible by y", $$P(x)$$ means x is prime.

<hr/>

**Soln3**

$$ R =$$ Raining, $$ W =$$ Windy, $$ S =$$ Shining.
 
**(a)** $$ R \to (W \land \lnot S) $$.
 
**(b)** $$ (W \land \lnot S) \to R $$. It is converse of (a).

**(c)** $$ R \to (W \land \lnot S) $$. It is equivalent to (a).

**(d)** $$ (W \land \lnot S) \to R $$. It is converse of (a).

**(e)** $$ (S \lor \lnot W) \to \lnot R$$. It is same as $$ \lnot (\lnot S \land W) \to \lnot R $$. It is equivalent to (a).
  
**(f)** $$ (R \to W) \land (R \to \lnot S) $$. It is equivalent to $$ R \to (W \land \lnot S) $$. It is equivalent to (a).
  
**(g)** $$ (W \to R) \lor (\lnot S \to R) $$.  IT is equivalent to $$ (W \land \lnot S) \to R $$. It is converse of (a).

<hr/>

**Soln4**

**(a)**

| $$ S $$ | $$ E $$ | $$ B $$ | $$ S \lor E $$ | $$ S \to B $$ | $$ E \to \lnot B $$ | $$ \lnot (S \land E) $$
| :-:
| true | true | true | true | true | false | false
| true | true | false | true | false | true | false
| true | false | true | true | true | true | true
| true | false | false | true | false | true | true 
| false | true | true | true | true | false | true
| false | true | false | true | true | true | true
| false | false | true | false | true | true | true
| false | false | false | false | true | true | true

From the table when all premises : $$ ( S \lor E),\,(S \to B),\,(E \to \lnot B) $$ are true then conclusion, $$ \lnot (S \land E) $$ is also true.

     
**(b)**
     
| $$ T $$ | $$ U $$ | $$ G $$ | $$ R $$ | $$ T \land U $$ | $$ (T \land U) \to R $$ | $$ G \to \lnot R $$ | $$ G \land T $$ | $$ \lnot U $$ 
| :-:
| true | true | true | true | true | true | false | true | false
| true | true | true | false | true | false | true | true | false
| true | true | false | true | true | true | true | false | false
| true | true | false | false | true | false | true | false | false
| true | false | true | true | false | true | false | true | true
| true | false | true | false | false | true | true | true | true
| true | false | false | true | false | true | true | false | true
| true | false | false | false | false | true | true | false | true
| false | true | true | true | false | true | false | false | false
| false | true | true | false | false | true | true | false | false
| false | true | false | true | false | true | true | false | false
| false | true | false | false | false | true | true | false | false
| false | false | true | true | false | true | false | false | true
| false | false | true | false | false | true | true | false | true
| false | false | false | true | false | true | true | false | true
| false | false | false | false | false | true | true | false | true


It can be seen that when all premises are true then conclusion is also true. Thus argument is valid.

**(c)**

$$ W =$$ Warning Light is on, $$ P =$$ Pressure is too high, $$ R =$$ Relief valve is clogged.

| $$ W $$ | $$ P $$ | $$ R $$ | $$ W \leftrightarrow (P \land R) $$ | $$ \lnot R $$| $$ W \leftrightarrow P $$    
| :-:
| true | true | true | true | false | true
| true | true | false | false | true | true
| true | false | true | false | false | false
| true | false | false | false | true | false
| false | true | true | false | false | false
| false | true | false | true | true | false
| false | false | true | true | false | true
| false | false | false | true | true | true

It can be seen that in one row above, when all premises are true, then corr. conclusion is not true. Thus argument is not valid.

<hr/>

**Soln5**

**(a)**

$$ P \leftrightarrow Q $$ is equivalent to    
$$\; = (P \to Q) \land (Q \to P) $$    
$$\; = (\lnot P \lor Q) \land (\lnot Q \lor P) $$    
$$\; = ((\lnot P \lor Q) \land \lnot Q) \lor ((\lnot P \lor Q) \land P) $$    
$$\; = ((\lnot P \land \lnot Q) \lor (Q \land \lnot Q)) \lor ((\lnot P \land P) \lor (Q \land P)) $$    
$$\; = ((\lnot P \land \lnot Q) \lor false) \lor (false \lor (Q \land P)) $$    
$$\; = (\lnot P \land \lnot Q) \lor (Q \land P) $$    
$$\; = (P \land Q) \lor (\lnot P \land \lnot Q)$$  
    
**(b)**
  
$$ (P \to Q) \lor (P \to R) $$    
$$\quad = (\lnot P \lor Q) \lor (\lnot P \lor R) $$    
$$\quad = \lnot P \lor (Q \lor R) $$    
$$\quad =  P \leftrightarrow (Q \lor R) $$.
  
<hr/>
 
**Soln6**
 
**(a)**
 
$$ (P \to R) \land (Q \to R) $$    
$$\quad = (\lnot P \lor R) \land (\lnot Q \lor R) $$    
$$\quad = (\lnot P \land \lnot Q) \lor R $$    
$$\quad = \lnot ( P \lor Q) \lor R $$    
$$\quad = ( P \lor Q) \to R $$.
    
**(b)**
    
$$ (P \to R) \lor (Q \to R) $$    
$$\quad = (\lnot P \lor R) \lor (\lnot Q \lor R) $$    
$$\quad = (\lnot P \lor \lnot Q) \lor R $$    
$$\quad = \lnot ( P \land Q) \lor R $$    
$$\quad = ( P \land Q) \to R $$.

<hr/>

**Soln7**

**(a)**

RHS:

$$ (P \to R) \land [(P \leftrightarrow Q) \lor (R \leftrightarrow Q)] $$    
$$\quad = ( P \to R )(((P \land Q) \lor (\lnot P \land \lnot Q)) \lor ((R \land Q) \lor (\lnot R \land \lnot Q))) $$     
$$\quad = ( P \to R )(((P \land Q) \lor (R \land Q)) \lor ((\lnot P \land \lnot Q) \lor (\lnot R \land \lnot Q))) $$     
$$\quad = ( P \to R )(((P \land Q) \lor (R \land Q)) \lor ((\lnot P \land \lnot Q) \lor (\lnot R \land \lnot Q))) $$     
$$\quad = ( \lnot P \lor R )(((P \lor R) \land Q) \lor ((\lnot P \lor \lnot R) \land \lnot Q)) $$     
$$\quad = (( \lnot P \lor R ) \land (P \lor R) \land Q) \lor (( \lnot P \lor R ) \land (\lnot P \lor \lnot R) \land \lnot Q) $$     
$$\quad = ((( \lnot P \land P ) \lor R) \land Q) \lor ((( R \lor \land R) \lor \lnot P) \land \lnot Q) $$     
$$\quad = ((R) \land Q) \lor ((\lnot P) \land \lnot Q) $$         
$$\quad = (R \land Q) \lor (\lnot P \land \lnot Q) $$     
$$\quad = ((R \land Q) \lor \lnot P) \land ((R \land Q) \lor \lnot Q) $$    
$$\quad = ((R \lor \lnot P) \land (Q \lor \lnot P)) \land ((R \lor \lnot Q) \land (Q \lor \lnot Q)) $$    
$$\quad = ((R \lor \lnot P) \land (Q \lor \lnot P)) \land ((R \lor \lnot Q)) $$    
$$\quad = (R \lor \lnot P) \land (Q \lor \lnot P) \land (R \lor \lnot Q) $$    
$$\quad = (R \lor \lnot P) \land (\lnot P \lor Q) \land (R \lor \lnot Q) $$    

Consider:

- In above equation, Q is present two times, $$ (\lnot P \lor Q) $$ and $$ (R \lor \lnot Q) $$.    
- The equation will be true when all of the terms  $$ (R \lor \lnot P) $$ and $$ (\lnot P \lor Q) $$ and $$ (R \lor \lnot Q) $$ are true.    
- That means $$ (\lnot P \lor Q) $$ and $$ (R \lor \lnot Q) $$ should be true. Here $$ Q $$ is present in both terms, $$ Q $$ and $$ \lnot Q $$. So for both terms to become true, $$ \lnot P $$ and $$ R $$ must be true.
- Thus we have from the two terms containing $$ Q $$, that $$ (R \lor \lnot P) $$ must be true, for these two terms to become true.
- That means we can safely remove the term $$ (R \lor \lnot P) $$ from the equation as it will be true if next two terms are also true. 

Thus we have:
 
$$\quad = (\lnot P \lor Q) \land (R \lor \lnot Q) $$        
$$\quad = (\lnot P \lor Q) \land (\lnot Q \lor R) $$    
$$\quad = ( P \to Q) \land ( Q \to R) $$ = LHS.
    
**(b)**

$$ (P \to Q) \lor (Q \to R) $$    
$$\quad = (\lnot P \lor Q) \lor (\lnot Q \lor R) $$        
$$\quad = \lnot P \lor Q \lor \lnot Q \lor R $$        
$$\quad = \lnot P \lor true \lor R $$        
$$\quad = true $$.
       
<hr/>
       
**Soln8**
       
$$ P \to Q = \lnot (P \land \lnot Q) $$           
$$\quad \Rightarrow P \to Q = \lnot (P \land \lnot Q) $$               
$$\quad \Rightarrow \lnot (P \land \lnot Q) = P \to Q $$               
$$\quad \Rightarrow (P \land \lnot Q) = \lnot (P \to Q) $$               
$$\quad \Rightarrow (P \land Q) = \lnot (P \to \lnot Q) $$.
               
<hr/>

**Soln9**

$$ P \leftrightarrow Q = (P \to Q) \land (Q \to P) $$    
Using Soln8,               
$$\quad \Rightarrow P \leftrightarrow Q =  \lnot((P \to Q) \to \lnot (Q \to P))$$.

<hr/>

**Soln10**
                
**(a)** 
               
$$ P \to (Q \to R)$$    
$$\quad = \lnot P \lor (\lnot Q \lor R)$$    
$$\quad = \lnot P \lor \lnot Q \lor R$$.
    
**(b)**
    
$$ Q \to (P \to R) = \lnot Q \lor \lnot P \lor R $$. This is equivalent to (a).
    
**(c)**
    
$$ (P \to Q) \land (P \to R) $$    
$$\quad =  (\lnot P \lor Q) \land (\lnot P \lor R) $$    
$$\quad =  \lnot P \lor (Q \land R) $$    

     
**(d)**
     
$$ (P \land Q) \to R $$          
$$\quad = \lnot (P \land Q) \lor R $$     
$$\quad = (\lnot P \lor \lnot Q) \lor R $$     
$$\quad = \lnot P \lor \lnot Q \lor R $$. This is equivalent to (a).
     
**(e)**
     
$$ P \to (Q \land R) $$    
$$\quad = \lnot P \lor (Q \land R) $$. This is equivalent to (c).     
     
 
      
      
 

     

    
 
    

        
    
