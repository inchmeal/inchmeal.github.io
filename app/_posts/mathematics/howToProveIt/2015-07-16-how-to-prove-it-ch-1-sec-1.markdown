---
layout: blog
title:  "How To Prove It, Ch-1 Sec-1.1, Deductive Reasoning and Logical Connectives"
description: "Inchmeal - Velleman's How To Prove It Solutions, Ch-1 Sec-1.1, Deductive Reasoning and Logical Connectives" 
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 1, Section - 1.1, Deductive Reasoning and Logical Connectives, from Daniel J. Velleman's book **How To Prove It**.
<!--more-->
<hr/>

### Summary

- Logical Operators \\( \lor \land \lnot \\)
- Argument - An argument is true if its conclusion is true given that all of the premises given are true.

<hr/>

### Solutions

**Soln.1**

**(a)** We’ll have either a reading assignment or homework problems, but we
won’t have both homework problems and a test.

\\( R \\) = Reading Assignment

\\( H \\) = Homework Problems

and \\( T \\) = Test

\\( (R \lor H) \land \lnot (H \land T) \\)


**(b)** You won’t go skiing, or you will and there won’t be any snow.

\\( SK \\) = You go skiing

\\( SW \\) = Snow

\\( \lnot SK \lor (SK \land \lnot SW) \\)

**(c)** \\( \sqrt 7 \not\le 2 \\)

\\( \lnot ((\sqrt 7 \lt 2) \lor (\sqrt 7 = 2)) \\)

<hr/>

**Soln.2**

**(a)** Either John and Bill are both telling the truth, or neither of them is.

\\( J \\) = John telling truth

\\( B \\) = Bill telling truth

\\( (J \land B) \lor \lnot (J \lor B) ) \\)

**(b)** I’ll have either fish or chicken, but I won’t have both fish and mashed
potatoes.

\\( F \\) = I’ll have fish.

\\( C \\) = I’ll have fish.

\\( M \\) = I’ll have mashed potatoes.

\\( (F \lor C) \land \lnot (F \land M) \\)

**(c)** 3 is a common divisor of 6, 9, and 15.

\\( A \\) = 3 is a divisor of 6.

\\( B \\) = 3 is a divisor of 9.

\\( C \\) = 3 is a divisor of 15.

\\( A \land B \land C \\)

<hr/>

**Soln.3**

\\( A \\) = Alice is in the room.

\\( B \\) = Alice is in the room.

**(a)** \\( \lnot (A \land B) \\)

**(b)** \\( \lnot A \land \lnot B \\)

**(c)** \\( \lnot A \lor \lnot B \\)

**(d)** \\( \lnot A \land \lnot B \\)

<hr/>

**Soln.4**

**(a)**  This is well formed.

**(b)** This is not well formed. 

**(c)** Well formed.

**(d)** Not Well formed.

<hr/>

**Soln.5** 

**(a)**  \\( \lnot (P \land \lnot S) \\).

Lets first form sentence for \\( (P \land \lnot S) \\) 

\\( \Rightarrow \\) I will buy pants but I wont buy the shirts.

Thus, \\( \lnot (P \land \lnot S) \\) will be:

\\( \Rightarrow \\) I will buy pants only when I buy the shirts.

**(b)** \\( \lnot P \land \lnot S \\).

\\( \Rightarrow \\) I will not buy the pants and I will not buy the shirts.

**(c)** \\( \lnot P \lor \lnot S \\).

\\( \Rightarrow \\) Either I will not buy the pants or I will not buy the shirts.

<hr/>

**Soln.6**

**(a)** \\( (S \lor G) \land (\lnot S \lor \lnot G) \\).

Lets form sentence part by part.

\\( (S \lor G) \Rightarrow \\) Either Steve is happy or George is happy.

Thus above part will only be false when Steve and George both are not happy.

\\( (\lnot S \lor \lnot G) \Rightarrow \\) Either Steve is not happy or George is not happy.

This part will only be false when Steve and George both are happy.

Now combining both parts \\( (S \lor G) \Rightarrow \\) and \\( (\lnot S \lor \lnot G) \Rightarrow \\) with operator \\( \land \\)

Combined part will be true only when both parts are true. Or in other words it will be false when either of the parts from above is false.

\\( \Rightarrow \\) Combined part will be **false** only when - Steve and George both are not happy or Steve and George both are happy.

\\( \Rightarrow \\) Combined part will be **true** only when - One of Steve and George is happy and other is not happy.

**(b)** \\( [S \lor (G \land \lnot S)] \lor \lnot G \\).

Lets form sentence part by part.

\\( (G \land \lnot S) \Rightarrow \\) George is happy but Steve is not happy.

\\( [S \lor (G \land \lnot S)] \Rightarrow \\) Either Steve is happy, or George is happy but Steve is not happy. Thus this
part will be false only when Steve and George both are not happy. Or we can say if any of them is happy this part will be true.

Now moving to next part \\( \lnot G \Rightarrow \\) George is not happy.


Thus combining \\( [S \lor (G \land \lnot S)] \\) with \\( \lnot G \\) using operator \\( \lor \\):

\\( \Rightarrow \\) Either any of them is happy or George is not happy.

\\( \Rightarrow \\) In above sentence, first part will be false only when both are not happy but in that case seconds part will be true because 
when both are not happy means George is not happy \\( \Rightarrow \\) sentence is true.

\\( \Rightarrow \\) This means if any of them is happy or not happy this part will be true.

\\( \Rightarrow \\) Sentence becomes: Either one of Steve and George is happy or either one of them is not happy.

**(c)** \\( S \lor [G \land (\lnot S \lor \lnot G)] \\).

Lets form sentence part by part.

\\( (\lnot S \lor \lnot G) \Rightarrow \\) Either Steve is not happy or George is not happy.

Now for \\( [G \land (\lnot S \lor \lnot G)] \Rightarrow \\) George is happy, and either Steve is not happy or george is not happy.
  
\\( \Rightarrow \\) For above sentence to be true George must be happy and Steve must be not happy. 
\\( \Rightarrow \\) George is happy and Steve is not happy.
   
And \\( S \Rightarrow \\) Steve is happy.


Thus \\( S \Rightarrow \\) with \\( [G \land (\lnot S \lor \lnot G)] \\) using operator \\( \lor \\)

\\( \Rightarrow \\) Either Steve is happy, or George is happy and Steve is not happy.
This will only be false when Steve and George both are not happy.

\\( \Rightarrow \\) Thus if either of them is happy sentence will be true.

\\( \Rightarrow \\) Either Steve is happy or George is happy.

<hr/>

**Soln.7** 

**(a)** Jane and Pete won’t both win the math prize. Pete will win either the math prize or the chemistry prize. 
Jane will win the math prize. Therefore, Pete will win the chemistry prize. 

_Premises:_

1. Jane and Pete won’t both win the math prize.

2. Pete will win either the math prize or the chemistry prize.

3. Jane will win the math prize.

_Conclusion:_

- Pete will win the chemistry prize.


Combining (1) and (3) \\( \Rightarrow \\) Pete wont win the math prize. Combining this with (2) \\( \Rightarrow \\) Pete will win the chemistry prize.
  
Thus above reasoning is correct.
  
**(b)** The main course will be either beef or fish. The vegetable will be either peas or corn. We will not have both fish as a main course 
and corn as a vegetable. Therefore, we will not have both beef as a main course and peas as a vegetable.


_Premises:_

1. The main course will be either beef or fish.

2. The vegetable will be either peas or corn.

3.  We will not have both fish as a main course and corn as a vegetable.

_Conclusion:_

- we will not have both beef as a main course and peas as a vegetable.

From (1), (2) and (3) It is possible to have beef as a main course and peas as a vegetable.

\\( \Rightarrow \\) Conclusion is not correct.

**(c)** Either John or Bill is telling the truth. Either Sam or Bill is lying. Therefore, either John is telling the truth or Sam is lying.

_Premises:_
  
1. Either John or Bill is telling the truth.

2. Either Sam or Bill is lying.

_Conclusion:_

- Either John is telling the truth or Sam is lying.

It will be difficult to check conclusion by combining premises. Instead we may check when conclusion is true, than whether premise are also true: 

Conclusion is true if either:

- John is telling truth: 
    
    Combining this with (1) \\( \Rightarrow \\) (1) is correct and Bill may be telling truth or lying. 
    
    - Now if Bill is telling the truth, than from (2) Sam must be lying. Thus no contradictions.
    
    - Else if Bill is lying than also (2) becomes correct without any contradictions.
    
- Sam is lying:
    
    Combining this with (2) \\( \Rightarrow \\) (2) is correct and Bill may be telling truth or lying.
    
    - Bill is lying. than from (1) John must be telling truth. Thus no contradictions.
    
    - Bill is telling truth. Than (1) becomes correct thus no contradictions. 
    
**(d)** Either sales will go up and the boss will be happy, or expenses will go up and the boss won’t be happy. 
Therefore, sales and expenses will not both go up.
    
_Premises:_
    
- Either sales will go up and the boss will be happy, or expenses will go up and the boss won’t be happy.

Note there is only one premise here. Unlike from other parts of this question. It may appear "Either sales will go up and the boss will be happy"
and "expenses will go up and the boss won’t be happy" are two premises but its only one premise.
    
_Conclusion:_
   
- Sales and Expenses will not both go up.    

Lets check if Sales and Expenses both go up contradicts with premises. There can be two cases:

- Boss is happy. \\( \Rightarrow \\) "Either sales will go up and the boss will be happy" is correct thus whole premise is correct.

- Boss is not happy. \\( \Rightarrow \\) "Expenses will go up and the boss won’t be happy" is correct thus whole premise is correct.

From above, it is clear that Sales and Expenses can both go up. Thus the conclusion is not correct.


  