---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.15"
order: "015"
date: 2016-04-24
---

I think *Eva Lu Ator* is right.
 
Lets consider the two formulas:
 
- $$ \frac 1 { { \frac 1 { I_1 } } + { \frac 1 { I_2 } } } $$        
- $$ \frac {I_1 I_2} {I_1 + I_2} $$.       

We know that they are algebraically equivalent but they are not equal by *interval arithmetic*. We have already seen that the reason they are
not same is because in *interval arithmetic* there is no identity operation i.e. $$ \frac I I \ne [1,1] $$ for any interval $$ I $$
except when lower-bound and upper-bound are equal. 

Lets consider *why* $$ \frac I I \ne [1, 1] $$. All *arithmetic operation* suggested by *Alyssa P. Hacker* works by assuming that all the
variables in the expression are independent of each other. Thus in expression $$ \frac I I $$, both numerator and denominator are
independent of each other by *Alyssa* arithmetic. Thus if numerator takes a value $$ v_1 \in I $$ then denominator may have some other
value $$ v_2 \in I $$ such that $$ v_1 \ne v_2 $$. This leads to a result $$ \frac I I \ne 1 $$.

We can extend this analysis to all the operations where interval-variable is repeated:
 
- $$ \frac I I $$.         
- $$ I + I $$.     
- $$ I - I $$.     
- $$ I \times I $$.     

We can even extend it further: if an interval-variable is repeated anywhere in the formulae it will introduce errors because these *interval-variables*
 behave independently while we *expect* them to behave such that the values taken by an interval-variable in all the occurrences in 
 an expression should be equal.   

Thus we accept the suggestion from *Eva Lu Ator*, which means that all interval-variables will occur only once thus there is no chance that
any error is caused because of same interval-variables behaving independently in an expression.