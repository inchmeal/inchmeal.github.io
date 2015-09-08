---
layout: blog
title:  "How To Prove It, Ch-1 Sec-1.2, Truth Tables"
tags: mathematics howToProveIt
---
This post contains exercises of Chapter - 1, Section - 1.2, Truth Tables.
<!--more-->
<hr/>

### Summary

- Truth Tables
- Argument Validation using Truth Tables. For all the rows in truth tables where "premises" are true, 
corresponding rows of "conclusion" must also be true.
- DeMorgan's Laws: 
    - \\( \lnot (P \land Q) \text{ is equivalent to } \lnot P \lor \lnot Q \\).
    - \\( \lnot (P \lor Q) \text{ is equivalent to } \lnot P \land \lnot Q \\).
- Commutative Laws:
    - \\( P \land Q \text{ is equivalent to } Q \land P \\).
    - \\( P \lor Q \text{ is equivalent to } Q \lor P \\).
- Associative Laws:
    - \\( P \land (Q \land R) \text{ is equivalent to } (P \land Q) \land R \\).
    - \\( P \lor (Q \lor R) \text{ is equivalent to } (P \lor Q) \lor R \\).
- Idemponent Laws:
    - \\( P \land P \text{ is equivalent to } P \\).
    - \\( P \lor P \text{ is equivalent to } P \\).
- Distributive Laws:
    - \\( P \land (Q \lor R) \text{ is equivalent to } (P \land Q) \lor (P \land R) \\).
    - \\( P \lor (Q \land R) \text{ is equivalent to } (P \lor Q) \land (P \lor R) \\).
- Absorption Laws:
    - \\( P \lor (P \land Q) \text{ is equivalent to } P \\). 
    - \\( P \land (P \lor Q) \text{ is equivalent to } P \\). 
- Double Negation Law:
    - \\( \lnot \lnot P \text{ is equivalent to } P \\).
- Tautologies: Formulas that are always true.
- Contradictions: Formulas that are always false.

<hr/>

### Solutions

**Soln.1**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot P \lor Q \\)
|:-:|:-:|:-:|:-:
| true | true | false | true
| true | false | false | false
| false | true | true | true
| false | false | true | true

**(b)**

|---
| \\( S \\) | \\( G \\) | \\( \lnot S \\) | \\( \lnot G \\) | \\( \lnot S \lor \lnot G \\) | \\( S \lor G \\) | \\( (S \lor G) \land (\lnot S \lor \lnot G) \\)
|:-:|:-:|:-:|:-:|:-:
| true | true | false | false | false | true | false 
| true | false | false | true | true | true | true
| false | true | true | false | true | true | true
| false | false | true | true | true | false | false

<hr/>

**Soln.2**

**(a)** 

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( Q \lor \lnot P \\) | \\( P \land (Q \lor \lnot P) \\) | \\( \lnot (P \land (Q \lor \lnot P))  \\) 
|:-:|:-:|:-:|:-:|:-:|:-:
| true | true | false | true | true | false 
| true | false | false | false | false | true 
| false | true | true | true | false | true 
| false | false | true | true | false | true 


**(b)**

|---
| \\( R \\) | \\( P \\) | \\( Q \\) | \\( P\lor Q \\) | \\( \lnot P \\) | \\( \lnot P \lor R \\) | \\( (P\lor Q) \land (\lnot P \lor R) \\) 
|:-:|:-:|:-:|:-:|:-:|:-:|:-: 
| true | true | true | true | false | true | true
| true | true | false | true | false | true | true
| true | false | true | true | true | true | true
| true | false | false | false | true | true | false
| false | true | true | true | false | false | false
| false | true | false | true | false | false | false
| false | false | true | true | true | true | true
| false | false | false | false | true | true | false

<hr/>

**Soln.3**

**(a)**

|---
| P | Q | P + Q
|:-:
| true | true | false
| true | false | true
| false | true | true
| false | false | false

**(b)**

We may proceed as follows:

   - P + Q is true only for two cases, P = true, Q = false and P = false, Q = true.
   - Similarly, P + Q is false only for two cases, P = Q = true anf P = Q = false.
    
A point to note:

   - We know that \\( \land \\) gives true only when all of its input are true. Or returns false only if any of the input is false.
   - Also \\( \lor \\) returns true if any of the inputs are true. Or returns false only if all the inputs are false.

We may see that to output a value true/false for a given input, we need to combine the values of input using operators, such that 
they will result the required the required output only for that input or else there is any change in input it will not return the desired output.
   
For eg, if we want false for input say P = true, Q = true:

   - To fix the values of input such that only for the given combination of input, we get the required result,
     we may use the point when all of the inputs are restricted by the operator.
   - Here we want false as output. We can see from the note above that false output is produced by both operators \\( \lor, \land \\)
     but only operator \\( \lor \\) restricts all of the inputs. As \\( \land \\) returns false if any of the input is false, hence putting
     no restriction on the input.
   - But current values of P and Q will not return false if we combine them with operator \\( lor \\).
   - Thus to get the required values we may revert the values of input using operator \\( \lnot \\).
   - So we have \\( \lnot P \lor \lnot Q \\). 
   - Now check that only for the above input P = true, Q = true,  \\( \lnot P \lor \lnot Q \\) will return the required output false, else 
     it will return true.
   
Similarly if we want true for input say P = true, Q = false, expression can be \\( P \land \lnot Q \\).   
   
Thus from above we created a way to form an expression that will result in required output only for the given input and for all other inputs
it will not return the required output.


Now to get the given set of outputs, for eg. in our case \\( P + Q \\), we can proceed as:

   - From the above method, we can create expression for each row. But we need to combine them such that
      resulting expression gives the required output.
   - To get true/false only in one of row(single row), we can use the our expression of that row as it will return the required output only
      for that row else it will return the opposite of the required output.
   - To get true or false only in the given set of rows(multiple row), we may combine the formula of the corresponding rows such that 
      it returns required output for only these rows else it will not return required output.
   - For eg, in our case, to get false as output, we need to combine formulas of 1st and 4th row such that it returns false for 1st and 4th
      row or else it returns true.
   - Or similarly the opposite eg can be, To get true, we need to combine formulas of 2nd and 3rd row such that it returns true for 2nd and 3rd
      row or else it returns false.
   - Noting again, that, Each row formulae returns the required output only for that row else it return opposite output. We can use this fact to combine the 
      these formulas.
   - To get false only in the required rows, we can combine formulas giving false output by operator \\( \land \\), than if any of the formulae returns false we will get false.
      Also this combined formula will return true for any other row. This is because all other rows are those rows where each of the formula
      returns true.
   - Similarly to get true only in the required rows, we can combine the formulas giving true output by operator \\( \lor \\), than if any of the formulae returns true we will get true.
      Also this combined formula will return false for any other row because all other rows are those rows where each of the formulae returns false.
   - Thus we can get the required results either by combining formulas returning true by operator \\( \lor \\) or combining formulas returning false by operator \\( \land \\).
   - Thus we can get two formulas will be correct and both will be correct.
  
From the method outlined, we can see that we have following two formulas:
  
   - \\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\). This is the resulting formula to get false in 1st row formula \\( (\lnot P \lor \lnot Q) \\) and 4th row formula \\( (P \lor Q) \\) and combining them by \\( \land \\).
   - \\( (P \land \lnot Q) \lor (\lnot P \land Q) \\). This is the resulting formula to get true in 2nd row formula \\( ( P \land \lnot Q) \\) and 3rd row formula \\( (\lnot P \land Q) \\) and combining them by \\( \lor \\).

Lets create truth table for both formulas:
    
\\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\) : 
    
|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( (\lnot P \lor \lnot Q) \\) | \\( (P \lor Q) \\) | \\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\)
|:-:
| true | true | false | false | false | true | false
| true | false | false | true | true | true | true
| false | true | true | false | true | true | true
| false | false | true | true | true | false | false

\\( (P \land \lnot Q) \lor (\lnot P \land Q) \\) : 

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( ( P \land \lnot Q) \\) | \\( (\lnot P \land Q) \\) | \\( (P \land \lnot Q) \lor (\lnot P \land Q) \\)
|:-:
| true | true | false | false | false | false | false
| true | false | false | true | true | false | true
| false | true | true | false | false | true | true
| false | false | true | true | false | false | false
      

As can be seen above both formulas returns the same result.    

<hr/>

**Soln.4**

We know that:

\\( P \lor Q  = \lnot \lnot (P \lor Q) \\)

Using Demorgans Law: \\( P \lor Q  = \lnot (\lnot P \land \lnot Q) \\)

Truth table for \\( \lnot (\lnot P \land \lnot Q) \\) : 

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( (\lnot P \land \lnot Q) \\) | \\( \lnot (\lnot P \land \lnot Q) \\) 
|:-:
| true | true | false | false | false | true
| true | false | false | true | false | true
| false | true | true | false | false | true
| false | false | true | true | true | false

As can be seen \\( \lnot (\lnot P \land \lnot Q) \\) is same as \\( P \lor Q \\).

<hr/>

**Soln.5**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( P \downarrow Q \\)
|:-:
| true | true | false
| true | false | false
| false | true | false
| false | false | true

**(b)**

To find formula for \\( P \downarrow Q \\) we can use the method outlined in Soln3-b above.

We can get two formulas:

   - \\( (\lnot P \lor \lnot Q) \land (\lnot P \lor Q) \land (\lnot P \lor Q) \\)
   - \\( \lnot P \land \lnot Q \\)
   
**(c)**
   
   It can be easily verified that \\( \lnot P = P \downarrow P \\) ....(i)
       
   From _Soln5(b)_, we have \\( P \downarrow Q = \lnot P \land \lnot Q \\).
   
   \\( \Rightarrow P \land Q = \lnot P \downarrow \lnot Q \\)
       
   \\( \Rightarrow P \land Q = (P \downarrow P) \downarrow (Q \downarrow Q) \\) ...(ii)    
   
   Also, using Demorgans law on _Soln5(b)_, \\( \lnot P \land \lnot Q \\) can be written as \\( \lnot ( P \lor Q ) \\).
   
   \\( \Rightarrow P \downarrow Q = \lnot ( P \lor Q ) \\)
      
   Or we can say,  \\( P \lor Q = \lnot (P \downarrow Q) = (P \downarrow Q) \downarrow (P \downarrow Q) \\) .....(ii)
       
   Thus (i), (ii) and (iii) are the desired answers.
      
<hr/>

**Soln6**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( P \vert Q \\)
|:-:
| true | true | false
| true | false | true
| false | true | true
| false | false | true

**(b)**

To find formula for \\( P \downarrow Q \\) we can use the method outlined in Soln3-b above.

Also, we can directly see that "“P and Q are not both true.” is equivalent to \\( \lnot (P \land Q) \\).

**(c)**

It can be easily verified that \\( \lnot P = P \vert P \\) ....(i)

Now from part(b), \\( P \vert Q = \lnot (P \land Q) \\)

\\( \Rightarrow P \land Q = \lnot (P \vert Q) = (P \vert Q) \vert (P \vert Q) \\) ...(ii)
 
Again from part(b), \\( P \vert Q = \lnot (P \land Q) = \lnot P \lor \lnot Q \\)

\\( \Rightarrow P \lor Q = \lnot P \vert \lnot Q = (P \vert P) \vert (Q \vert Q) \\) ...(iii)

Thus (i), (ii) and (iii) are the desired answers.

<hr/>

**Soln7**

**(a)**

|---
| \\( JM \\) | \\( PM \\) | \\( PC \\) | \\( \lnot (JM \land PM) \\) | \\( PM \lor PC \\)
| :-:
| true | true | true | false | true
| true | true | false | false | true
| true | false | true | true | true
| true | false | false | true | false
| false | true | true | true | true
| false | true | false | true | true
| false | false | true | false | true
| false | false | false | false | false

When values corresponding to all premises are true, than conclusion is also true. 

**(b)**

|---
| \\( B \\) | \\( F \\) | \\( P \\) | \\( C \\) | \\( B \lor F \\) | \\( P \lor C \\) | \\( \lnot (F \land C) \\) | \\( \lnot (B \land P) \\)
| :-:
| true | true | true | true | true | true | false | false
| true | true | true | false | true | true | true | true
| true | true | false | true | true | true | false | false
| true | true | false | false | true | false | true | true
| true | false | true | true | true | true | true | false
| true | false | true | false | true | true | true | true
| true | false | false | true | true | true | true | false
| true | false | false | false | true | false | true | true
| false | true | true | true | true | true | false | true
| false | true | true | false | true | true | true | true
| false | true | false | true | true | true | false | true
| false | true | false | false | true | false | true | true
| false | false | true | true | false | true | true | true
| false | false | true | false | false | true | true | true
| false | false | false | true | false | true | true | true
| false | false | false | false | false | false | true | true

It can be easily seen that when all premises are true, than also conclusion \\( \lnot (B \land P) \\) is not true.
 
**(c)**
 
|---
| \\( J \\) | \\( B \\) | \\( S \\) | \\( \lnot B \\) | \\( \lnot S \\) | \\( J \lor \lnot B \\) | \\( \lnot S \lor \lnot B \\) | \\( J \lor \lnot S \\)
| :-:
| true | true | true | false | false | true | false | true
| true | true | false | false | true | true | true | true
| true | false | true | true | false | true | true | true
| true | false | false | true | true | true | true | true
| false | true | true | false | false | false | false | false
| false | true | false | false | true | false | true | true
| false | false | true | true | false | true | true | false
| false | false | false | true | true | true | true | true

Thus it can be easily verified when premises are true, than conclusions are also true.

**(d)**

| \\( S \\) | \\( E \\) | \\( B \\) | \\( S \land B \\) | \\( \lnot B \\)  | \\( E \land \lnot B \\) | \\( (S \land B) \lor (E \land \lnot B) \\) | \\( S \land E \\) | \\( \lnot(S \land E) \\)
| :-:
| true | true | true | true | false |  false | true | true | false
| true | true | false | false | true | true | true | true | false
| true | false | true | true | false | false | true | false | true
| true | false | false | false | true | false | false | false | true
| false | true | true | false | false | false | false | false | true
| false | true | false | false | true | true | true | false | true
| false | false | true | false | false | false | false | false | true
| false | false | false | false | true | false | false | false | true


Thus argument is not valid because when premise is true, conclusion is not true.

<hr/>

**Soln8**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \land Q \\) | \\( \lnot P \land \lnot Q \\) | \\( (P \land Q) \lor (\lnot P \land \lnot Q) \\)
|:-:
| true | true | false | false | true | false | true 
| true | false | false | true | false | false | false
| false | true | true | false | false | false | false
| false | false | true | true | false | true | true


**(b)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot P \lor Q \\)
|:-:
| true | true | false | true
| true | false | false | false
| false | true | true | true
| false | false | true | true

**(c)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \lor \lnot Q \\) | \\( \lnot P \lor Q \\) | \\( (P \lor \lnot Q) \land (\lnot P \lor Q) \\) 
|:-:
| true | true | false | false | true | true | true
| true | false | false | true | true | false | false
| false | true | true | false | false | true | false
| false | false | true | true | true | true | true

**(d)**

|---
| \\( P \\) | \\( Q \\) | \\( P \lor Q \\) | \\( \lnot (P \lor Q) \\) 
|:-:
| true | true | true | false
| true | false | true | false
| false | true | true | false
| false | false | false | true

**(e)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( P \land Q \\) | \\( (P \land Q) \lor \lnot P \\) 
|:-:
| true | true | false | true | true
| true | false | false | false | false
| false | true | true | false | true
| false | false | true | false | true


Clearly (a) and (c) are equivalent. Also (b) and (e) are equivalent. (d) is not equivalent to any.

<hr/>

**Sol9**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \lor Q \\) | \\( \lnot P \lor \lnot Q \\) |  \\( (P \lor Q) \land (\lnot P \lor \lnot Q) \\)  
|:-:
| true | true | false | false | true | false | false
| true | false | false | true | true | true | true
| false | true | true | false | true |  true | true
| false | false | true | true | false | true | false

Thus it is niether a tautology nor a contradiction.

**(b)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \lor Q \\) | \\( \lnot P \land \lnot Q \\) |  \\( (P \lor Q) \land (\lnot P \land \lnot Q) \\)  
|:-:
| true | true | false | false | true | false | false
| true | false | false | true | true | false | false
| false | true | true | false | true |  false | false
| false | false | true | true | false | true | false

Thus it is a contradiction.

**(c)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \lor Q \\) | \\( \lnot P \lor \lnot Q \\) |  \\( (P \lor Q) \lor (\lnot P \lor \lnot Q) \\)  
|:-:
| true | true | false | false | true | false | true
| true | false | false | true | true | true | true
| false | true | true | false | true |  true | true
| false | false | true | true | false | true | true


Thus it is a tautology.

**(d)**

| \\( P \\) | \\( Q \\) | \\( R \\) | \\( \lnot P \\) | \\( \lnot R \\) | \\( \lnot P \lor R \\) | \\( Q \lor \lnot R \\) | \\( P \land (Q \lor \lnot R) \\) | \\( [P \land (Q \lor \lnot R)] \lor (\lnot P \lor R) \\) 
| :-:
| true | true | true | false | false | true | true | true | true
| true | true | false | false | true |  false | true | true | true
| true | false | true | false | false | true | false | false | true
| true | false | false | false | true | false | true | true | true
| false | true | true | true | false | true | true | false | true
| false | true | false | true | true | true | true | false | true
| false | false | true | true | false | true | false | false | true
| false | false | false | true | true | true | true | false | true

Thus it is also a tautology.

<hr/>

**Soln10**

**(a)**

|---
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( P \lor Q \\) | \\( \lnot (P \lor Q) \\) | \\( \lnot P \land \lnot Q \\) 
|:-:
| true | true | false | false | true | false | false
| true | false | false | true | true | false | false
| false | true | true | false | true | false | false
| false | false | true | true | false | true | true

Thus \\( \lnot (P \lor Q) \\) is equivalent to \\( \lnot P \land \lnot Q \\).

**(b)**

|---
| \\( P \\) | \\( Q \\) | \\( R \\) | \\( Q \lor R \\) | \\( P \land (Q \lor R) \\) | \\( P \land Q \\) | \\( P \land R \\) | \\( (P \land Q) \lor ( P \land R) \\) 
| :-:
| true | true | true | true | true | true | true | true
| true | true | false | true | true | true | false | true
| true | false | true | true | true | false | true | true
| true | false | false | false | false | false | false | false
| false | true | true | true | false | false | false | false
| false | true | false | true | false | false | false | false
| false | false | true | true | false | false | false | false
| false | false | false | false | false | false | false | false

As can be seen in the table  \\( P \land (Q \lor R) \\) is equivalent to \\( (P \land Q) \lor ( P \land R) \\) 

|---
| \\( P \\) | \\( Q \\) | \\( R \\) | \\( Q \land R \\) | \\( P \lor (Q \land R) \\) | \\( P \lor Q \\) | \\( P \lor R \\) | \\( (P \lor Q) \land ( P \lor R) \\) 
| :-:
| true | true | true | true | true | true | true | true
| true | true | false | false | true | true | true | true
| true | false | true | false | true | true | true | true
| true | false | false | false | true | true | true | true
| false | true | true | true | true | true | true | true
| false | true | false | false | false | true | false | false
| false | false | true | false | false | false | true | false
| false | false | false | false | false | false | false | false

As can be seen in the table  \\( P \lor (Q \land R) \\) is equivalent to \\( (P \lor Q) \land ( P \lor R) \\).
 
<hr/>
 
**Soln11**
 
**(a)**
 
 \\( \lnot (\lnot P \land \lnot Q) = \lnot \lnot P \lor \lnot \lnot Q = P \lor Q\\).
  
**(b)**

Using Distributive Law:
  
\\( (P \land Q ) \lor (P \land \lnot Q) = ((P \land Q ) \lor P) \land ((P \land Q ) \lor \lnot Q) \\) 
 
\\( \Rightarrow (P \land Q \lor P) \land (P \land Q \lor \lnot Q) \\)

Using Tautology \\( A \lor \lnot A \\)
 
\\( \Rightarrow (P \land Q \lor P) \land P \\)
 
Using Absorption law:
 
\\( \Rightarrow  P \land P \\)

\\( \Rightarrow  P \\)

**(c)**

\\( \lnot(P \land \lnot Q) \lor (\lnot P \land Q) \\)

Using Demorgans Law: \\( (\lnot P \lor \lnot \lnot Q) \lor (\lnot P \land Q) \\)

Double Negation Law: \\( (\lnot P \lor Q) \lor (\lnot P \land Q) \\)

Distribution Law: \\( ((\lnot P \lor Q) \lor \lnot P) \land ((\lnot P \lor Q) \lor Q) \\)

Associative Law: \\( (\lnot P \lor Q \lor \lnot P) \land (\lnot P \lor Q \lor Q) \\)

Using Idempotent Law: \\( (\lnot P \lor Q \lor \lnot P) \land (\lnot P \lor Q) \\)

Using associative, commutative and idempotent law: \\( (\lnot P \lor Q) \land (\lnot P \lor Q) \\)

Using Idempotent Law: \\( \lnot P \lor Q \\)

<hr/>

**Soln12**

**(a)**

\\( \lnot(\lnot P \lor Q) \lor (P \land \lnot R) \\)

Using Demorgans and double Negation Law: \\( ( P \land \lnot Q) \lor (P \land \lnot R) \\)

Using Distributed Law: \\( ( P \land \lnot Q \lor P) \land ( (P \land \lnot Q) \lor \lnot R) \\)

Using Absorption law: \\(  P \land ( (P \land \lnot Q) \lor \lnot R) \\)

Using Distributive law: \\( (P \land (P \land \lnot Q)) \lor (P \land \lnot R) \\)

Using Idempotent Law: \\( (P \land \lnot Q) \lor (P \land \lnot R) \\)

**(b)**

\\( \lnot (\lnot P \land Q) \lor (P \land \lnot R) \\)

Using Demorgans Law and Double Negation Law : \\( ( P \lor \lnot Q) \lor (P \land \lnot R) \\)

Using Distributed Law : \\( ( P \lor \lnot Q \lor P) \land ((P \lor \lnot Q) \lor \lnot R) \\)

Using Associative and Idempotent Law: \\( ( P \lor \lnot Q ) \land ((P \lor \lnot Q) \lor \lnot R) \\)

Using Absorption Law: \\( P \lor \lnot Q \\)

**(c)**

\\( ( P \land R ) \lor [ \lnot R \land ( P \lor Q ) ] \\)

Using Distributed Law: \\( ( P \land R ) \lor [ (\lnot R \land P) \lor ( \lnot R \land Q ) ] \\)

Using Associative Law: \\( [( P \land R ) \lor (\lnot R \land P)] \lor ( \lnot R \land Q ) \\)

Using Distributive Law: \\( [(( P \land R ) \lor \lnot R) \land (( P \land R ) \lor P)] \lor ( \lnot R \land Q ) \\)

Using Distributive Law: \\( [(( P \lor \lnot R) \land ( R \lor \lnot R )) \land (( P \land R ) \lor P)] \lor ( \lnot R \land Q ) \\)

Using Tautology: \\( [( P \lor \lnot R) \land (( P \land R ) \lor P)] \lor ( \lnot R \land Q ) \\)

Using Absorption Law: \\( [( P \lor \lnot R) \land P] \lor ( \lnot R \land Q ) \\)

Using Distributive Law: \\( [( P \land P) \lor ( P \land \lnot R)] \lor ( \lnot R \land Q ) \\)

Using Idempotent Law: \\( [ P \lor ( P \land \lnot R)] \lor ( \lnot R \land Q ) \\)

Using Absorption Law: \\( [ P ] \lor ( \lnot R \land Q ) \\)

\\( \Rightarrow  P \lor ( \lnot R \land Q ) \\)


**Soln13** 

\\( \lnot (P \land Q) = \lnot P \lor \lnot Q \\).

Taking negation on both sides, \\( \lnot \lnot (P \land Q) = \lnot (\lnot P \lor \lnot Q) \\).

Using Double negation law, \\( P \land Q = \lnot (\lnot P \lor \lnot Q) \\).

Using \\( P1 = !P, Q1 = !Q \\), \\( !P1 \land !Q1 = \lnot ( P1 \lor Q1) \\).

\\( \Rightarrow \lnot ( P1 \lor Q1) = !P1 \land !Q1 \\). .. which is the required derivation.

**Soln14**

We have \\( [P \land (Q \land R)] \land S \\)

Using Associative law, \\( [(P \land Q) \land R] \land S \\)

Using Associative law, \\( (P \land Q) \land [R \land S] \\) which is same as was required.

**Soln15**

Each letter doubles the number of lines. So total lines should be \\( 2^n \\)

**Soln16**

We can use same steps as in soln 3b:

We can have two formulas:
    - \\( P \lor \lnot Q \\)
    - \\( (\lnot P \land \lnot Q) \lor (P \land \lnot Q) \lor (P \land Q) \\).
    
**Soln17**
   
We can use same steps as in soln 3b:

We can have two formulas:
    - \\( (P \lor Q) \land (\lnot P \lor \lnot Q) \\).
    - \\( (\lnot P \land Q) \lor (P \land \lnot Q) \\).
    
**Son18**
    
- If the conclusion of an argument is a tautology. The argument is always true. We have two cases:
  - If all premises are true. In this case it is obvious that argument is valid. 
  - All or some premises are not true then also argument will be valid. An argument is considered valid when all premises are true, 
  then conclusion should also be true. Thus argument validation check does not apply when premises are not true. 

- If the conclusion is contradiction. We have two cases:
    - If premises are true, then argument is not valid.
    - If premises are false, then argument is valid.
    
- If one of the premise is a Tautology:
    - We are not sure of the other premises and also we dont know about the conclusion. Thus answer will depend on further datapoints.

- If one of the premise is Contradiction:
    -Than argument is always valid. An argument is valid when all premises are true and then conclusion is also true. In this case all
     premises will never be true thus .
    




