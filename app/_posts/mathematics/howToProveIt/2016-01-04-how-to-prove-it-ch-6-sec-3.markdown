---
layout: blog
title:  "How To Prove It, Ch-6 Sec-6.3, Recursion"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 6, Section - 6.3, Recursion from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

*Note:* In this book natural numbers include $$ 0 $$ also. But it seems like in some places in the proofs, I messed up with this convention.
In some placed I might have considered $$ N $$ includes $$ 0 $$ while in other places vice versa. Please point out to me, I will correct to
use the books version of $$ \mathbb N $$ in all the places.

- Recursive functions are defined in the following way:
    - For some values, x, f(x) is given.
    - For values other then given, f(x) is defined by calling itself for lower/upper values.
    - Thus by *recursively* tracing down he values we reach to a value for which f(x) is given and then move back filling in the corresponding values.
- This section shows that recursion and induction are similar by using some examples.
 
<hr/>

**Soln1**

Lets try by putting some values:

|---
| $$ x $$ | $$ f(x) $$ |
|:-:
| $$ 1 $$ | $$ \frac 1 2 $$ | 
| $$ 2 $$ | $$ \frac 2 3 $$ | 
| $$ 3 $$ | $$ \frac 3 4 $$ | 
| $$ 4 $$ | $$ \frac 4 5 $$ | 
| $$ 5 $$ | $$ \frac 5 6 $$ | 
| $$ 6 $$ | $$ \frac 6 7 $$ | 
 
Thus it appears that $$ f(x) = \frac x {x+1} $$.

Lets prove this by mathematical induction.

Base Case:

It is directly clear from above table.

Induction step:

Suppose it is true for $$ n $$. Thus $$ \sum_{i=1}^n {\frac 1 {i(i+1)}} = \frac n {n+1} $$. 

Now for $$ n + 1 $$:

We have $$ \sum_{i=1}^{n+1} {\frac 1 {i(i+1)}} = \sum_{i=1}^n {\frac 1 {i(i+1)}} + \frac {1} {(n+1)(n+1 + 1)} $$. Using induction hypothesis $$ \sum_{i=1}^n {\frac 1 {i(i+1)}} = \frac n {n+1} $$,
we get:

$$ =  \frac n {n+1}  + \frac {1} {(n+1)(n+2)} $$.     
$$ =  \frac {n(n+2) + 1} {(n+1)(n+2)} $$.     
$$ =  \frac {n^2 + 2n + 1} {(n+1)(n+2)} $$.     
$$ =  \frac {(n+1)(n+1)} {(n+1)(n+2)} $$.     
$$ =  \frac {(n+1)} {(n+2)} $$.     
$$ =  \frac {(n+1)} {(n+1 + 1)} $$.     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true. Thus formulae is correct.

<hr/>

**Soln2**

Base Case:

For $$ n = 1 $$, we have $$ \sum_{i=1}^{n} {\frac 1 {i(i+1)(i+2)}} = \frac 1 {1(1+1)(1+2)} = \frac 1 6 = \frac {1^2 + 3 \cdot 1} {4(1+1)(1+2)} $$.
Thus $$ P(1) $$ is true.

Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ \sum_{i=1}^{n} {\frac 1 {i(i+1)(i+2)}} =  \frac {n^2 + 3n} {4(n+1)(n+2)} $$.
 
Now for $$ n+1 $$, we have:

$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \sum_{i=1}^{n} {\frac 1 {i(i+1)(i+2)}} + \frac 1 {(n+1)(n+2)(n+3)} $$.     
Using induction hypothesis:     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {n^2 + 3n} {4(n+1)(n+2)} + \frac 1 {(n+1)(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {(n^2+3n)(n+3) + 4} {4(n+1)(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {n^3 + 3n^2 + 3n^2 + 9n + 4} {4(n+1)(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {(n+1)(n^2+5n+4)} {4(n+1)(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {(n+1)(n+1)(n+4)} {4(n+1)(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {(n+1)(n+4)} {4(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac {(n+1)(n+1+3)} {4(n+2)(n+3)} $$.     
$$ \Rightarrow \sum_{i=1}^{n+1} {\frac 1 {i(i+1)(i+2)}} = \frac { {(n+1)}^2 + 3(n+1)} {4(n+1+1)(n+1+2)} $$.     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln3**

Base Case:

For $$ n = 2 $$, we have $$ \sum_{i=2}^{n} {\frac 1 {(i-1)(i+1)}} = \frac 1 {(2-1)(2+1)} = \frac 1 3 = \frac {3 \cdot 2^2 - 2 - 2} {4 \cdot 2 (2+1)} $$.
 
Thus $$ P(2) $$ is true.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ \sum_{i=2}^{n} {\frac 1 {(i-1)(i+1)}} =  \frac {3 n^2 - n - 2} {4 n (n+1)} $$.

Now for $$ n+1 $$, we have:

$$ \Rightarrow \sum_{i=2}^{n+1} {\frac 1 {(i-1)(i+1)}} = {( \sum_{i=2}^{n} {\frac 1 {(i-1)(i+1)}} )} + \frac 1 {(n+1-1)(n+1+1)} $$.     
Using induction hypothesis:     
$$ = \frac {3 n^2 - n - 2} {4 n (n+1)} + \frac 1 {(n+1-1)(n+1+1)} $$.     
$$ = \frac {3 n^2 - n - 2} {4 n (n+1)} + \frac 1 {(n)(n+2)} $$.     
$$ = \frac {3n^3 + 5n^2} {4n(n+1)(n+2)} $$.     
$$ = \frac {n^2(3n + 5)} {4n(n+1)(n+2)} $$.     
$$ = \frac {n(3n + 5)} {4(n+1)(n+2)} $$.     
$$ = \frac {(n+1-1)(3(n+1-1) + 5)} {4(n+1)(n+2)} $$.     
$$ = \frac {(n+1-1)(3(n+1) + 2)} {4(n+1)(n+2)} $$.     
$$ = \frac { {(n+1)}^2 - 3(n+1) - 2} {4(n+1)(n+1+1)} $$.     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln4**

Base Case:

For $$ n = 0 $$, we have $$ \sum_{i=0}^{n} {(2i+1)}^2 = 1 = \frac {(0+1)(2 \times 0 + 1)(2 \times 0 + 3)} 3 $$.    

Thus $$ P(0) $$ is true.

Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ \sum_{i=0}^{n} {(2i+1)}^2 = \frac {(n+1)(2n + 1)(2n + 3)} 3 $$.

Now for $$ n+1 $$, we have:     
$$ \Rightarrow \sum_{i=0}^{n+1} {(2i+1)}^2 = {( \sum_{i=0}^{n} {(2i+1)}^2 )} + {(2(n+1)+1)}^2 $$.     
$$ = {\frac {(n+1)(2n + 1)(2n + 3)} 3} + {(2n + 3)}^2 $$.     
$$ = \frac {(n+1)(2n + 1)(2n + 3) + 3{(2n+3)}^2} 3 $$.     
$$ = \frac {(2n + 3)((n+1)(2n + 1) + 3(2n+3))} 3 $$.     
$$ = \frac {(2n + 3)(2n^2 + n + 2n + 1 + 6n + 9)} 3 $$.     
$$ = \frac {(2n + 3)(2n^2 + 9n + 10)} 3 $$.     
$$ = \frac {(2n + 3)(2n+5)(n+2)} 3 $$.     
$$ = \frac {(n+1+1)(2(n+1)+1)(2(n+1)+3)} 3 $$.     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln5**

Suppose $$ r \ne 1 $$ is an arbitrary real number.

Base Case:

For $$ n = 0 $$, we have $$ \sum_{i = 0}^{n} r^i = r^0 = 1 = \frac {r^{0+1} - 1} {r-1} $$.

Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ \sum_{i = 0}^{n} r^i = \frac {r^{n+1} - 1} {r-1} $$.

Now for $$ n+1 $$, we have:     
$$ \Rightarrow \sum_{i = 0}^{n+1} r^i = \sum_{i = 0}^{n} r^i + r^{n+1} $$.    
$$ = { \frac {r^{n+1} - 1} {r-1} } + r^{n+1} $$.    
$$ = \frac {(r^{n+1} - 1) + r^{n+1}(r-1) } {r-1} $$.    
$$ = \frac {r^{n+1} - 1 + r^{n+2} - r^{n+1} } {r-1} $$.    
$$ = \frac { r^{n+2} - 1 } {r-1} $$.    
$$ = \frac { r^{n+1+1} - 1 } {r-1} $$.    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln6**

Base Case:

For $$ n = 1 $$, we have $$ \sum_{i=1}^{n} {\frac 1 {i^2}} = \frac 1 1^2 = 1 $$. Also $$ 2 - \frac 1 1 = 1 $$.       
Thus $$ \sum_{i=1}^{n} {\frac 1 {i^2}} \le  $$ 2 - \frac 1 n $$.

Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ \sum_{i=1}^{n} {\frac 1 {i^2}} \le  $$ 2 - \frac 1 n $$.

Now for $$ n + 1 $$, we have:

$$ \Rightarrow  \sum_{i=1}^{n+1} {\frac 1 {i^2}} =  \sum_{i=1}^{n} {\frac 1 {i^2}} + { \frac 1 { {(n+1)}^2 } } $$.    
$$ \le { 2 - \frac 1 n } + { \frac 1 { {(n+1)}^2 } } $$.    
$$ =  2 - \frac {(n+1)^2 - n} { n{(n+1)}^2 } $$.    
$$ =  2 - \frac {n^2 + n + 1} { n{(n+1)}^2 } $$.    
$$ \le  2 - \frac {n^2 + n} { n{(n+1)}^2 } $$.    
$$ =  2 - \frac 1 { n+1 } $$.    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln7**

**(a)**

Base Case:

For $$ n = 0 $$, we have $$ \sum_{i=0}^{n} (a_i + b_i) = a_0 + b_0 = { \sum_{i=0}^{n} a_i } + { \sum_{i=0}^{n} b_i } $$.

Induction Step:

Suppose it is true for $$ n $$. Thus $$ \sum_{i=0}^{n} (a_i + b_i) \; = \; { \sum_{i=0}^{n} a_i } + { \sum_{i=0}^{n} b_i } $$.    

For $$ n+1 $$, we have:

$$ \Rightarrow \sum_{i=0}^{n+1} (a_i + b_i) = (\sum_{i=0}^{n} (a_i + b_i)) + (a_{n+1} + b_{n+1}) $$.      
$$ = { \sum_{i=0}^{n} a_i } + { \sum_{i=0}^{n} b_i } + a_{n+1} + b_{n+1} $$.    
$$ = { \sum_{i=0}^{n} a_i } + a_{n+1} + { \sum_{i=0}^{n} b_i } + b_{n+1} $$.    
$$ = { \sum_{i=0}^{n+1} a_i } + { \sum_{i=0}^{n+1} b_i } $$.    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

**(b)**

Base Case:

For $$ n = 0 $$, we have $$ c \cdot { \sum_{i=0}^{n} a_i } = c \cdot a_0 = \sum_{i=0}^{n} { c \cdot a_i }$$.    

Induction Step:

Suppose it is true for $$ n $$. Thus $$ c \cdot { \sum_{i=0}^{n} a_i } = \sum_{i=0}^{n} { c \cdot a_i }$$.    
 
For $$ n + 1 $$, we have:

$$ c \cdot { \sum_{i=0}^{n+1} a_i } = c \cdot { \sum_{i=0}^{n} a_i } + c \cdot a_{n+1} $$.    
$$ = \sum_{i=0}^{n} { c \cdot a_i } + c \cdot a_{n+1} $$.    
$$ = \sum_{i=0}^{n+1} { c \cdot a_i } $$.    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln8**

**(a)**

Suppose $$ m $$ is arbitrary natural number.

Base Case:

For $$ n = m $$, we have $$ {\sum_{i=0}^{n} \frac 1 i} - {\sum_{i=0}^{m} \frac 1 i} = 0 = \frac {n-m} n $$.
 
Induction Step:

Suppose theorem is correct for $$ n \ge m $$. Thus $$  {\sum_{i=0}^{n} \frac 1 i} - {\sum_{i=0}^{m} \frac 1 i} = \frac {n-m} n $$.
 
For $$ n + 1 $$, we have:
 
$$ \Rightarrow {\sum_{i=0}^{n+1} \frac 1 i} - {\sum_{i=0}^{m} \frac 1 i} = {\sum_{i=0}^{n} \frac 1 i} + { \frac 1 {n+1} }  - {\sum_{i=0}^{m} \frac 1 i} $$.     
$$ = {\sum_{i=0}^{n} \frac 1 i}  - {\sum_{i=0}^{m} \frac 1 i} + { \frac 1 {n+1} } $$.     
$$ \ge {\frac {n-m} n } + { \frac 1 {n+1} } $$.     
$$ = \frac { (n-m)(n+1) + n } {n(n+1)} $$.     
$$ = \frac {n^2 + n - mn - m + n} {n(n+1)} $$.     
$$ = \frac {n^2 + (n - m) - mn + n} {n(n+1)} $$.     
Since $$ n \ge m $$,      
$$ \ge \frac {n^2 - mn + n} {n(n+1)} $$.     
$$ \ge \frac {n - m + 1} {n+1} $$.     
$$ \ge \frac {n + 1 - m} {n+1} $$.     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

**(b)**

Base Case:

For $$ n = 0 $$, we have $$ H_{2^n} = H_1 = 1 \ge 1 = 1 + n/2 $$.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ H_{2^n} \ge 1 + n/2 $$.

Since $$ 2^{n+1} > 2^n $$. Thus applying part(a), we have:  

$$ H_{2^{n+1} } - H_{2^n} \ge \frac {2^{n+1} - 2^n } { 2^{n+1} } = \frac 1 2 $$.    

Thus $$ H_{2^{n+1} } \ge H_{2^n} + { \frac 1 2 } $$.     
By induction hypothesis,     
$$ \Rightarrow H_{2^{n+1} } \ge 1 + {\frac n 2 }+ { \frac 1 2 } $$.
$$ = 1 + { \frac {n+1} 2 } $$.

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

**(c)**

We know that $$ \lim_{n \to \infty } {(1 + { \frac n 2 } ) } = \infty $$.

Thus using part(b) $$ \lim_{n \to \infty} H_{2^n} = \infty $$. Now from part(a) we can see that $$ H_n $$ is a increasing sequence. 
Thus $$ \lim_{n \to \infty} H_{n} = \infty $$

<hr/>

**Soln9**

Base Case:

For $$ n = 2 $$, we have $$ nH_n - n = 2( { \frac 1 1 } + { \frac 1 2 } ) - 2 = 3 - 2 = 1 = H_1 = \sum_{k=1}^{n-1} H_k $$.
  
Induction Step:

Suppose theorem is true for $$ n $$. Thus $$ \sum_{k=1}^{n-1} H_k = nH_n - n $$.

Now for $$ n + 1 $$, we have $$ \sum_{k=1}^{n+1-1} H_k = \sum_{k=1}^{n} H_k $$.     
$$ = \sum_{k=1}^{n-1} H_k + H_n $$.     
$$ = nH_n - n + H_n $$.     
$$ = (n+1)H_n - n $$.     
$$ = ((n+1) \cdot \sum_{i=0}^{n} {\frac 1 i}) - n $$.     
$$ = ((n+1) \cdot \sum_{i=0}^{n} {\frac 1 i}) + 1 - 1 - n $$.     
$$ = ((n+1) \cdot \sum_{i=0}^{n} {\frac 1 i}) + (n+1){ \frac 1 {n+1} } - 1 - n $$.     
$$ = (n+1) \cdot (\sum_{i=0}^{n} {\frac 1 i} + { \frac 1 {n+1} }) - 1 - n $$.     
$$ = (n+1) \cdot (\sum_{i=0}^{n+1} {\frac 1 i} ) - 1 - n $$.     
$$ = (n+1) \cdot (\sum_{i=0}^{n+1} {\frac 1 i} ) - (n + 1) $$.     
$$ = (n+1)H_{n+1} - (n + 1) $$.     


Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln10**

Lets try by putting some values:

|---
| $$ n $$ | $$ \sum_{i=1}^n (i \cdot i!)$$ |
|:-:
| $$ 1 $$ | $$ 1 = 2! - 1 $$ | 
| $$ 2 $$ | $$ 5 = 3! - 1 $$ | 
| $$ 3 $$ | $$ 23 = 4! - 1 $$ | 
| $$ 4 $$ | $$ 119 = 5! - 1 $$ | 
| $$ 5 $$ | $$ 719 = 6! - 1 $$ | 
| $$ 6 $$ | $$ 5039 = 7! - 1$$ | 
 
Thus it appears that $$ \sum_{i=1}^n (i \cdot i!) = (n+1)! - 1 $$.

Base Case:

It directly follows from above table.

Induction Step:

Suppose it is correct for $$ n $$. Thus $$ \sum_{i=1}^n (i \cdot i!) = (n+1)! - 1 $$.

For $$ n+1 $$, we have:

$$ \sum_{i=1}^{n+1} (i \cdot i!) = \sum_{i=1}^n (i \cdot i!) + (n+1)\cdot(n+1)! $$.    
$$ = (n+1)! - 1 + (n+1)\cdot(n+1)! $$.    
$$ = (n+1+1)\cdot(n+1)! - 1 $$.    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln11**

Lets try by putting some values:

|---
| $$ n $$ | $$ \sum_{i=1}^n {\frac i {(i+1)!} }$$ |
|:-:
| $$ 0 $$ | $$ \frac 0 1 = \frac {1!-1} {1!} $$ | 
| $$ 1 $$ | $$ \frac 1 2 = \frac {2!-1} {2!} $$ | 
| $$ 2 $$ | $$ \frac 5 6 = \frac {3!-1} {3!} $$ | 
| $$ 3 $$ | $$ \frac {23} {24} = \frac {4!-1} {4!} $$ | 
| $$ 4 $$ | $$ \frac {119} {120} = \frac {5!-1} {5!} $$ | 
| $$ 5 $$ | $$ \frac {719} {720} = \frac {6!-1} {6!} $$ | 
 
Thus it appears that $$ \sum_{i=1}^n {\frac i {(i+1)!} } = \frac {(n+1)!-1} {(n+1)!} $$.

Base Case:

It directly follows from above table.

Induction Step:

Suppose it is correct for $$ n $$. Thus $$ \sum_{i=1}^n {\frac i {(i+1)!} } = \frac {(n+1)!-1} {(n+1)!} $$.

For $$ n+1 $$, we have:

$$ \sum_{i=1}^{n+1} {\frac i {(i+1)!} } = \sum_{i=1}^n {\frac i {(i+1)!} } + { \frac {n+1} {(n+1+1)!} } $$.    
$$ = { \frac {(n+1)!-1} {(n+1)!} } + { \frac {n+1} {(n+1+1)!} } $$     
$$ = { \frac {(n+1)!-1} {(n+1)!} } + { \frac {n+1} {(n+2)(n+1)!} } $$     
$$ = \frac {(n+2)((n+1)!-1) + (n+1)} {(n+2)(n+1)!} $$     
$$ = \frac {(n+2)(n+1)! - (n+2) + (n+1)} {(n+2)(n+1)!} $$     
$$ = \frac {(n+2)! - 1} {(n+2)!} $$     
$$ = \frac {(n+1+1)! - 1} {(n+1+1)!} $$     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln12**

**(a)**

If we prove that $$ 2^n \ge n+1 $$, then it is easily followed that $$ 2^n \ge n $$.

Base Case:

For $$ n = 0 $$, we have $$ 2^n = 1 \ge (n+1) $$. Thus $$ P(0) $$ is true.

Inductive step:

Suppose theorem is correct for $$ n $$. Thus $$ 2^n \ge n + 1 $$.

For $$ n+1 $$, we have $$ 2^{n+1} = 2 \cdot 2^n \ge 2(n+1) = 2n + 2 \ge n + 2 = n + 1 + 1 $$.
  
Thus we can conclude $$ 2^n \ge n + 1 $$. It follows $$ 2^n \ge n $$.

**(b)**

Base Case:

For $$ n = 9 $$. We have $$ n! = 362880 ≥ 262144 = { (2^n) }^2 $$.

Induction Step:

Suppose theorem is correct for $$ n $$.  Thus $$ n! \ge { (2^n) }^2 $$.

For $$ n+1 $$, we have:

$$ (n+1)! = (n+1)n! $$      
$$ \ge (9+1)n! $$     
By induction hypothesis,    
$$ \ge 10 \cdot { (2^n) }^2 $$     
$$ \ge 4 \cdot { (2^n) }^2 $$    
$$ = 2^2 \cdot { (2^n) }^2 $$    
$$ = 2^{2n+2} $$    
$$ = { 2^{n+1} }^2 $$    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**(c)**

Base Case:

For $$ n = 0 $$, we have $$ 0! = 1 \le 1 = 2^{0^2} $$.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ n! \le 2^{n^2} $$.

Now consider for $$ n+1 $$, we jave:

$$ (n+1)! = (n+1)n! \le (n+1) \cdot 2^{n^2} $$.      
From part(a), $$ n+1 \le 2^n $$, we have:    

$$ (n+1)! \le 2^n \cdot 2^{n^2} $$.    
$$ = 2^{ n^2 + n } $$.    
$$ \le 2^{ n^2 + n + n + 1} $$.    
$$ = 2^{n^2+2n+1} $$.     
$$ = 2^{ { (n+1) }^2} $$.     

<hr/>

**Soln13**

**(a)**

Base Case:

For $$ n = 0 $$, we have $$ (k^2 + n)! = (k^2)! \ge 1 = k^{2n} $$.

Induction Step:

Suppose theorem is correct. Thus $$ (k^2 + n)! \ge k^{2n} $$.

For $$ n+1 $$, we have $$ (k^2 + n + 1)! $$:     
$$ = (k^2+n+1)(k^2+n)! $$     
$$ \ge (k^2+n+1)k^{2n} $$     
$$ \ge (k^2)k^{2n} $$     
$$ = k^{2n+2} $$     
$$ = k^{2(n+1)} $$     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

**(b)**

Base Case:

Putting $$ n = k^2 $$ in part(a), we get $$ (2k^2)! \ge k^{2k^2} $$. Thus for the given theorem if we assume $$ n = 2k^2 $$, then is follows $$ P(2k^2) $$
  is correct.
  
Induction Step:

Suppose theorem is correct. Thus $$ n! \ge k^n $$.

Now consider $$ (n+1)! $$:

$$ = (n+1)n! $$     
$$ \ge (n+1)k^n $$     
Since $$ n \ge 2k^2 $$,     
$$ \ge (2k^2+1)k^n $$     
Since $$ k $$ is positive integer,    
$$ \ge (k)k^n $$     
$$ = k^{n+1} $$     

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln14**

Suppose $$ a $$ is an arbitrary real number. Suppose $$ m $$ is arbitrary integer.

Base Case:

For $$ n = 1 $$, we have $$ {(a^{m})}^n = a^m = a^{mn} $$.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ {(a^m)}^n = a^{mn} $$.

Thus $$ {(a^m)}^{n+1} = {(a^m)}^n \cdot a^m $$     
$$ a^{mn} \cdot a^m $$      
$$ a^{mn+m} $$      
$$ a^{m(n+1)} $$      

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln15**

Base Case:

For $$ n = 0 $$, $$ 2^0 - 0 - 1 = 0 = a_0 $$.
 
Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ a_n = 2^n - n - 1 $$.

Now, $$ a_{n+1} = 2a_n + n $$     
$$ = 2(2^n - n - 1) + n $$       
$$ = 2^{n+1} - 2n - 2 + n $$       
$$ = 2^{n+1} - n - 2 $$       
$$ = 2^{n+1} - n - 1 - 1 $$       
$$ = 2^{n+1} - (n + 1) - 1 $$       

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln16**

Lets try by putting some values:

|---
| $$ n $$ | $$ a_n $$ |
|:-:
| $$ 0 $$ | $$ 2 = 2^{2^0} $$ | 
| $$ 1 $$ | $$ 4 = 2^{2^1} $$ | 
| $$ 2 $$ | $$ 16 = 2^{2^2} $$ | 
| $$ 3 $$ | $$ 256 = 2^{2^3} $$ | 
| $$ 4 $$ | $$ 65536 = 2^{2^4} $$ | 
| $$ 5 $$ | $$ 4294967296 = 2^{2^5} $$ | 

Thus it appears that $$ a_n = 2^{2^n} $$.

Base Case:

It directly follows from table.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ a_n = 2^{2^n} $$.

Now $$ a_{n+1} = {(a_n)}^2 $$       
$$ = {(2^{2^n})}^2 $$      
$$ = {(2^{2^n})}^2 $$      
$$ = (2^{2 \cdot 2^n}) $$      
$$ = (2^{2^{n+1}}) $$      

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln17**

|---
| $$ n $$ | $$ a_n $$ |
|:-:
| $$ 1 $$ | $$ 1 $$ | 
| $$ 2 $$ | $$ \frac 1 2 $$ | 
| $$ 3 $$ | $$ \frac 1 3 $$ | 
| $$ 4 $$ | $$ \frac 1 4 $$ | 
| $$ 5 $$ | $$ \frac 1 5 $$ | 

Thus it appears that $$ a_n = \frac 1 n $$.

Base Case:

It directly follows from table.

Induction step:

Suppose theorem is correct for $$ n $$. Thus $$ a_n = \frac 1 n $$.

Now $$ a_{n+1} = \frac {a_n} {a_n + 1} $$    
$$ = \frac {\frac 1 n} { {\frac 1 n} + 1} $$    
$$ = \frac {\frac 1 n} { \frac {n+1} n } $$    
$$ = {\frac 1 n} \times { \frac n {n+1} } $$    
$$ = \frac 1 {n+1} $$    

Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.

<hr/>

**Soln18**

**(a)**

Expanding $$ \binom{n} {0} = \frac {n!} {0!(n-0)!} = 1 $$.

Also $$ \binom{n} {n} = \frac {n!} {n!(n-n)!} = 1 $$.

Thus $$ \binom{n} {0} = \binom{n} {n} $$.

**(b)**

Lets compute $$ {\binom {n} {k} } + {\binom {n} {k-1} } $$      
$$ = {\frac {n!} {k!(n-k)!} } + {\frac {n!} {(k-1)!(n-k+1)!} } $$      
$$ = {\frac {n!} {k!(n-k)!} } + {\frac {n!} {(k-1)!(n-k+1)!} } $$      
$$ = {\frac {n!} {k(k-1)!(n-k)!} } + {\frac {n!} {(k-1)!(n-k+1)(n-k)!} } $$      
$$ = n! \times \frac {(n-k+1) + k} {k(n-k+1)(k-1)!(n-k)!} $$      
$$ = n! \times \frac {n+1} {k(n-k+1)(k-1)!(n-k)!} $$      
$$ = n! \times \frac {n+1} {k!(n-k+1)!} $$      
$$ = \frac {(n+1)!} {k!(n-k+1)!} $$      
$$ = \binom {(n+1)} {k} $$      

Hence proved.

**(c)**

Base Case:

For $$ n = 0 $$. Suppose $$ A $$ has a set with $$ 0 $$ elements. Thus only possible value of $$ k = 0 $$. Thus number of subsets of $$ A $$ 
containing $$ 0 $$ elements are $$ 1 $$(empty set). Also $$ \binom n k = \binom 0 0 = 1 $$.
  
Induction Step:

Suppose theorem is correct if $$ A $$ has $$ n $$ elements. Thus number of $$ k $$ sized subsets from $$ A $$ are $$ \binom n k $$.
  
Now suppose $$ A $$ is a set of $$ n + 1 $$ elements. Suppose $$ a $$ is an arbitrary element of $$ A $$. Suppose $$ A' = A \setminus \{a\} $$. 
Suppose $$ k $$ is an integer such that $$ n+1 \ge k \ge 0 $$. We have following possible cases:
  
- Case 1: $$ k = 0 $$    
Clearly there is only one possible zero sized subset of $$ A $$. Also, $$ \binom {n+1} 0 = 1 $$. Thus for $$ k = 0 $$, number of subsets of $$ A $$
is same as $$ \binom {n+1} k $$.

- Case 2: $$ k = n+1 $$     
Since $$ A $$ contains $$ n+1 $$ elements, it follows that there is only one subset of $$ A $$ containing $$ n+1 $$ elements(subset is $$ A $$ itself).
Since $$ \binom (n+1) k = \binom (n+1) (n+1) = 1 $$, it follows number of subsets of $$ A $$ of $$ k = n+1 $$ elements is same as $$ \binom (n+1) k $$.

- Case 3: $$ 0 < k \le n $$     
There are two types of $$ k $$-sized subsets of $$ A $$. One type of subsets contain $$ a $$ and other type does not contain $$ a $$.       

    - Subsets that does not contain $$ a $$ are also the subsets of $$ A' $$. Now since $$ A' $$ has $$ n $$ elements and $$ 0 < k \le n $$, it follows by induction hypothesis
that number of such subsets are $$ \binom n k $$.     
      
    - Subsets that contains $$ a $$ are of the form of $$ X \cup \{a\} $$ where $$ X $$ is $$ k-1 $$-sized subsets of $$ A' $$. Thus number of $$ k $$-sized subsets
 of $$ A $$ that contains $$ a $$ is equal to number of $$ k - 1 $$ sized subsets of $$ A' $$. Since $$ A' $$ contains $$ n $$ elements, it follows from
 induction hypothesis that the number of subsets is $$ \binom n {k-1} $$.
 
    Thus total number of $$k $$-sized subsets of $$ A $$ are $$ { \binom n k } + {\binom n {k-1} } $$. From part(b) this sum is equivalent to $$ \binom {n+1} k $$.
  
Thus from all the cases, total number of $$ k $$ sized subsets of $$ A $$ is $$ \binom {n+1} k $$.

**(d)**

Base Case:

For $$ n = 0 $$, LHS = $$ {(x+y)}^0 = 1 $$. And RHS = $$ x^0 \cdot y^0 = 1 $$. Thus $$ LHS = RHS $$.

Induction Step:

Suppose theorem is correct for $$ n $$. Thus $$ {(x+y)}^n = \sum_{k=0}^n {\binom {n} k} x^{n-k}y^k $$.

For $$ n+1 $$, we have $$ {(x+y)}^{n+1} = (x+y){(x+y)}^n $$. Thus by induction hypothesis:     
$$ = (x+y)\sum_{k=0}^n {\binom {n} k} x^{n-k}y^k $$      
$$ = (x+y)( { {\binom {n} {0} }x^{n-0}y^{0} } + { {\binom {n} {1} }x^{n-1}y^{1} } + { {\binom {n} {2} }x^{n-2}y^{2} } + { {\binom {n} {3} }x^{n-3}y^{3} } + \cdot \cdot \cdot + { {\binom {n} {n} }x^{n-n}y^{n} } ) $$       
$$ = (x+y)( { {\binom {n} {0} }x^{n} } + { {\binom {n} {1} }x^{n-1}y^{1} } + { {\binom {n} {2} }x^{n-2}y^{2} } + { {\binom {n} {3} }x^{n-3}y^{3} } + \cdot \cdot \cdot + { {\binom {n} {n} }y^{n} } ) $$       
Multiplying each term inside by $$ (x+y) $$ and using $$ \binom n 0 = \binom n n = 1 $$,       
$$ = { x^{n+1} } + { {\binom {n} {0} }x^{n}y{1} } + { {\binom {n} {1} }x^{n}y^{1} } + { {\binom {n} {1} }x^{n-1}y^{2} } + { {\binom {n} {2} }x^{n-1}y^{2} } +{ {\binom {n} {2} }x^{n-2}y^{3} } + { {\binom {n} {3} }x^{n-2}y^{3} } + { {\binom {n} {3} }x^{n-3}y^{4} } + \cdot \cdot \cdot + { {\binom {n} {n} }x^{1}y^{n} } + { y^{n+1} } $$       

$$ = { x^{n+1} } + ({\binom {n} {0} } + {\binom {n} {1} })x^{n}y^{1} + ({\binom {n} {1} } + {\binom {n} {2} })x^{n-1}y^{2} + ({\binom {n} {2} } + {\binom {n} {3} })x^{n-2}y^{3} + ({\binom {n} {3} } + {\binom {n} {4} })x^{n-3}y^{4} + \cdot \cdot \cdot + ({\binom {n} {n-1} } + {\binom {n} {n} })x^{1}y^{n} + { y^{n+1} } $$         

$$ = { \binom {n+1} {0} }x^{n+1} + {\binom {n+1} {1} }x^{n}y^{1} + {\binom {n+1} {2} }x^{n-1}y^{2} + {\binom {n+1} {3} }x^{n-2}y^{3} + {\binom {n+1} {4} }x^{n-3}y^{4} + \cdot \cdot \cdot + {\binom {n+1} {n} }x^{1}y^{n} + {\binom {n+1} {n+1} }y^{n+1} $$         

$$ = \sum_{k=0}^{n+1} {\binom {n+1} k} x^{n+1-k}y^k $$      
Thus if $$ P(n) $$ is true, then $$ P(n+1) $$ is also true.
 
<hr/>

**Soln19**

**(a)**

Putting $$ x = 1, y = 1 $$ in part(d) of Ex18, we get $$ (1+1)^n = \sum_{i=0}^n {\binom {n} k}1^{n-k}1^k $$. Thus:     
$$ \Rightarrow 2^n = \sum_{i=0}^n {\binom {n} k} $$      

**(b)**

Putting $$ x = 1, y = -1 $$ in part(d) of Ex18, we get $$ (1-1)^n = \sum_{i=0}^n {\binom {n} k}1^{n-k}{(-1)}^{k} $$. Thus:     
$$ \Rightarrow \sum_{i=0}^n {\binom {n} k} {(-1)}^{k} = 0 $$             
$$ \Rightarrow \sum_{i=0}^n {(-1)}^{k} {\binom {n} k} = 0 $$             

<hr/>

**Soln20**

It will be easier to prove $$ 0 < a_n < \frac 1 2 $$.

Clearly $$ a_n^2 $$ is positive, it follows $$ a_{n+1} $$ is also positive. 

Base Case:

For $$ n = 1 $$, $$ a_1 = a_0^2 + \frac 1 4 = \frac 1 4 $$. Clearly $$ 0 < a_1 < \frac 1 2 $$.
 
Induction Step:

Suppose theorem is correct for $$ n $$. 

Now $$ a_{n+1} = a_n^2 + {\frac 1 4} $$      
$$ < {(\frac 1 2)}^2 + {\frac 1 4} $$         
$$ = {\frac 1 4} + {\frac 1 4} $$     
$$ = \frac 1 2 $$     

Thus $$ 0 < a_{n+1} < \frac 1 2 $$. Or we  can also say that $$ 0 < a_{n+1} < 1 $$.

<hr/>

**Soln21**

Adding $$ 1 $$ helped made LHS closer to RHS. TODO 

<hr/>













































