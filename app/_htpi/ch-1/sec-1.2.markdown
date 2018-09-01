---
chapterName: "Sentential Logic"
sectionName: "1.2 - Truth Tables"
chapter: 1
section: "1.2"
order: "002"
date: 2015-07-16
description:  "Inchmeal - Velleman's How To Prove It, Ch-1 Sec-1.2, Truth Tables"
redirect_from:
  - /2015/07/16/how-to-prove-it-ch-1-sec-2.html
---

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

|-------|-------|-------|
| P     | Q     | P + Q |
|-------|-------|-------|
| true  | true  | false |
| true  | false | true  |
| false | true  | true  |
| false | false | false |

**(b)**

(Updated 20th June'18: I restructured this solution as per the suggestion from [Maxwell][maxwell-3b])

**Approach**

Before we proceed for this solution, let's first come up with an approach to get a desired output for given inputs.

First we note few properties about $$\, \land \,$$ and $$\, \lor \,$$ operators:

1. We know that \\( \land \\) gives true only when **all** of its inputs are true. Or returns false only if **any** of the input is false.
2. Also \\( \lor \\) returns true if **any** of the inputs are true. Or returns false only if **all** of the inputs are false.

We can use the above properties to our advantage.

If we want true we can use $$\, \land \,$$ and *ensure* in some way that all of the inputs to $$\, \land \,$$ are true.

Similarly, if we want false, we can use $$\, \lor \,$$ and *ensure* that all of the inputs to $$\, \lor \,$$ are false.

Consider a simple case:

**Suppose we want desired output, say O, to be true** for a given set of inputs, say M and N. Since we want output = true, we will use $$\, \land \,$$. To ensure that all the inputs to $$\, \land \,$$ are true: 

1. M = true, N = true. We can get the desired output = true, by using $$\, M \,$$  and $$\, N \,$$  as inputs to $$\, \land \,$$. Thus we use $$\, M \land N \,$$ . And for any other values of M and N, generated output will be false.
2. M = true, N = false. We can get the desired output = true, by using $$\, M \,$$  and $$\, \lnot N \,$$  as inputs to $$\, \land \,$$. Thus we use $$\, M \land \lnot N \,$$. And for any other values of M and N, output generated will be false.
3. M = false, N = true. We can get the desired output = true, by using $$\, \lnot M \,$$  and $$\, N \,$$  as inputs to $$\, \land \,$$. Thus we use $$\, \lnot M \land N \,$$. And for every other value of M and N, output generated will be false.
4. M = false, N = false. We can get the desired output = true, by using $$\, \lnot M \,$$  and $$\, \lnot N \,$$  as inputs to $$\, \land \,$$. Thus we use $$\, \lnot M \land \lnot N \,$$. And for any other value of M and N, output generated will be false.

**Similarly, if we want desired output = false** for a given set of inputs, say M and N. We have to ensure that all the inputs to $$\, \lor \,$$ are false:

1. For M = true, N = true. We can get the desired output = false, by using $$\, \lnot M \,$$  and $$\, \lnot N \,$$  as inputs to $$\, \lor \,$$. Thus we use $$\, \lnot M \lor \lnot N \,$$. Thus for any other values of M and N, generated output will be true.
2. ... We use $$\, \lnot M \lor N \,$$ 
3. ... We use $$\, M \lor \lnot N \,$$ 
4. ... We use $$\, M \lor N \,$$ 

Till, now we figured a way to get a desired output for only one possible set of input. What **if we want desired output = true for two possible sets of inputs**, For eg: (i) When M = true and N = true, 
and (ii) When M = true and N = false?

We can use $$\, \lor \,$$ to combine the isolated solutions for (i) and (ii) so that we get output = true if either (i) or (ii) is true. Thus we get $$\, (M \land N) \lor (M \land \lnot N) \,$$.

In a similar way **if we want desired output = false for two possible sets of inputs**, for eg: (i) and (ii) from above. Since here we want false, we combine isolated solutions of (i) and (ii) using $$\, \land \,$$. Thus we get $$\, (\lnot M \lor \lnot N) \land (\lnot M \lor N) \,$$.

Thus the above approach suggests that there two alternative(but similar) ways:

- Either we focus on generating true as output by using $$\, \land \,$$ and for multiple possible inputs, we combine the isolated solutions using $$\, \lor \,$$.
- Or we focus on generating false as output by using $$\, \lor \,$$ and for multiple possible inputs we combine isolated solutions using $$\, \land \,$$. 

**Applying the above approach**

Let's first see the truth table again from part(a):

|-------|-------|-------|
| P     | Q     | P + Q |
|-------|-------|-------|
| true  | true  | false |
| true  | false | true  |
| false | true  | true  |
| false | false | false |

We may proceed as follows:

   - P + Q is true only for two cases:
	   1. P = true and Q = false
	   2. P = false and Q = true.
   - Similarly, P + Q is false only for two cases:
	   1. P = Q = true
	   2. P = Q = false
    
From the method outlined, we can get two solutions corresponding to the two alternatives we saw above
- By focusing on generating true, we get \\( (P \land \lnot Q) \lor (\lnot P \land Q) \\). This is the resulting formula to get output = true in 2nd row  and 3rd row in truth table and false in every other case(1st and 4th row).
- By focussing on generating false, we get \\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\). This is the resulting formula to get false in 1st row and 4th row in truth table and true in every other case (2nd and 3rd row).

Let's create truth table for both expressions:
    
\\( (P \land \lnot Q) \lor (\lnot P \land Q) \\) : 

|-----------|-----------|-----------------|-----------------|----------------------------|---------------------------|--------------------------------------------------|
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( ( P \land \lnot Q) \\) | \\( (\lnot P \land Q) \\) | \\( (P \land \lnot Q) \lor (\lnot P \land Q) \\) |
|-----------|-----------|-----------------|-----------------|----------------------------|---------------------------|--------------------------------------------------|
| true      | true      | false           | false           | false                      | false                     | false                                            |
| true      | false     | false           | true            | true                       | false                     | true                                             |
| false     | true      | true            | false           | false                      | true                      | true                                             |
| false     | false     | true            | true            | false                      | false                     | false                                            |
      

\\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\) : 
    
|-----------|-----------|-----------------|-----------------|--------------------------------|--------------------|-------------------------------------------------|
| \\( P \\) | \\( Q \\) | \\( \lnot P \\) | \\( \lnot Q \\) | \\( (\lnot P \lor \lnot Q) \\) | \\( (P \lor Q) \\) | \\( (\lnot P \lor \lnot Q) \land (P \lor Q) \\) |
|-----------|-----------|-----------------|-----------------|--------------------------------|--------------------|-------------------------------------------------|
| true      | true      | false           | false           | false                          | true               | false                                           |
| true      | false     | false           | true            | true                           | true               | true                                            |
| false     | true      | true            | false           | true                           | true               | true                                            |
| false     | false     | true            | true            | true                           | false              | false                                           |

As can be seen above both expressions returns the same result.    

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

When values corresponding to all premises are true, then conclusion is also true. 

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

It can be easily seen that when all premises are true, then also conclusion \\( \lnot (B \land P) \\) is not true.
 
**(c)**

Thanks [Maxwell][maxwell-7c] for pointing out. Earlier got the column $$\, J \lor B \,$$ wrong in the table.

|---
| \\( J \\) | \\( B \\) | \\( S \\) | \\( \lnot B \\) | \\( \lnot S \\) | \\( J \lor B \\) | \\( \lnot S \lor \lnot B \\) | \\( J \lor \lnot S \\)
| :-:
| true | true | true | false | false | true | false | true
| true | true | false | false | true | true | true | true
| true | false | true | true | false | true | true | true
| true | false | false | true | true | true | true | true
| false | true | true | false | false | true | false | false
| false | true | false | false | true | true | true | true
| false | false | true | true | false | false | true | false
| false | false | false | true | true | false | true | true

Thus it can be easily verified when premises are true, then conclusions are also true.

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

Applying Double negation law:

\\( P \land Q = \lnot (\lnot P \lor \lnot Q) \\)      

Using \\( P1 = \lnot P, Q1 = \lnot Q \\), gives:

\\( \lnot P1 \land \lnot Q1 = \lnot ( P1 \lor Q1) \\)    

\\( \Rightarrow \lnot ( P1 \lor Q1) = \lnot P1 \land \lnot Q1 \\). .. which is the required derivation.

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
    

[maxwell-7c]: http://www.inchmeal.io/htpi/ch-1/sec-1.2.html#comment-3953681369
[maxwell-3b]: http://www.inchmeal.io/htpi/ch-1/sec-1.2.html#comment-3954333033
