---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.9"
order: "009"
date: 2016-04-22
---

Lets consider the interval $$ I_1 = [l_1, u_1] $$ and $$ I_2 = [l_2, u_2] $$ with width $$ w_1 = \frac {u_1 - l_1} 2 $$ and $$ w_2 = \frac {u_2 - l_2} 2 $$.

Addition:

$$ I_{add} = I_1 + I_2 = [l_1 + l_2, u_1 + u_2] $$. Thus the width is:

$$ w_{add} = \frac {(u_1+u_2) - (l_1+l_2)} 2 $$        
$$ = { \frac {u_1 - l_1} 2 } + { \frac {u_2 - l_2} 2 }$$        
$$ = w_1 + w_2 $$        

Subtraction:
 
$$ I_{sub} = I_1 - I_2 = [l_1 - u_2, u_1 - l_2] $$. Thus the width is:

$$ w_{sub} = \frac {(l_1-u_2) - (u_1-l_2)} 2 $$        
$$ = { \frac {l_1 - u_1} 2 } + { \frac {l_2 - u_2} 2 }$$        
$$ = - (w_1 + w_2) $$        

Clearly, width of addition and subtraction of intervals is a function of the width of individual intervals.

If the width of the result of an operation(+, -, *, or /) between two intervals is a function of the widths of individual intervals, then 
applying same operation(+, -, *, or /) on two different pairs of intervals such that both pairs have same widths, will result in intervals with 
equals widths. 

Lets take two different intervals $$ I_1 = [l_1, u_1] $$ and $$ I_2 = [l_2, u_2] $$ with equal widths say $$ w_p =  \frac {u_1 - l_1} 2 =  \frac {u_2 - l_2} 2 $$.
  
Now consider another interval $$ I_3 = [l_3, u_3] $$ with width say $$ w_q = \frac {u_3 - l_3} 2 $$ such that $$ w_p \neq w_q $$.
    
Lets say width of interval $$ (I_1 \text{ op } I_3) $$ is $$ w_1 $$ and width of $$ (I_2 \text{ op } I_3) $$ is $$ w_2 $$, where $$ \text{ op } $$
 denotes the arithmetic operation i.e. +, -, *, or /.
 
If width is a function of individual intervals, then it must be the case that $$ w_1 = w_2 $$ because width of pair $$ (I_1, I_3) $$ 
and $$ (I_2, I_3) $$ is same i.e. $$ (w_p, w_q) $$. Thus $$ w_1 = w_2 = f(w_p, w_q) $$ where $$ f $$ is some function.  
  
Lets take example for addition:
  
$$ I_1 = [0, 10], \; I_2 = [20, 30], \; I_3 = [100, 200] $$.
Thus we have $$ w_p = w_{I_1} = w_{I_2} = 5 $$ and $$ w_q = w_{I_3} = 50 $$.       
       
$$ I_1 + I_3 = [100, 210] $$. Thus width $$ w_1 = (210-100)/2 = 55 = w_p + w_q $$.
Also, $$ I_1 + I_3 = [120, 230] $$. Thus width $$ w_2 = (230-120)/2 = 55 = w_p + w_q $$.

Clearly $$ w_1 = w_2 $$ in case of addition operation.

Lets see for multiplication:

$$ I_1 \times I_3 = [0, 2000] $$. Thus width $$ w_1 = (2000-0)/2 = 1000 $$.
Also, $$ I_2 \times I_3 = [2000, 6000] $$. Thus width $$ w_2 = (6000-2000)/2 = 2000 $$.

Here $$ w_1 \neq w_2 $$. Hence width of the result of multiplication of two intervals is not a function of individual intervals.
 

    


      
      