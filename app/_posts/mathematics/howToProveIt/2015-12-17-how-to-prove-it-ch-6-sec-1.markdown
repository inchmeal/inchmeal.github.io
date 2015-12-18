---
layout: blog
title:  "How To Prove It, Ch-6 Sec-6.1, Proof by Mathematical Induction"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 6, Section - 6.1, Proof by Mathematical Induction.

<!--more-->

<hr/>

### Summary

- To prove a goal of the form $$ \forall n \in N P(n) $$:     
  First prove $$ P(0) $$, and then prove $$ \forall n \in N(P(n) \to P(n + 1)) $$. The first of these proofs is sometimes called the base case and the 
  second the induction step.
- Form of the final proof:     
  Base case: [Proof of $$ P(0) $$ goes here.]
  Induction step: [Proof of $$ \forall n \in N(P(n) \to P(n + 1)) $$ goes here.].
 
<hr/>

**Soln1**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, $$ 0 = \frac {0(0 + 1)} 2 = 0 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0 + 1 + 2 + \cdot \cdot \cdot + n = \frac {n(n+1)} 2 $$.
 
Thus we have  $$ 0 + 1 + 2 + \cdot \cdot \cdot + n + (n + 1) = (\frac {n(n+1)} 2) + (n+1) $$.    
$$ \quad = \frac {n(n+1) + 2(n+1)} 2 $$.      
$$ \quad = \frac {(n+1)(n + 2)} 2 $$.      
$$ \quad = \frac {(n+1)(n + 1 + 1)} 2 $$.      

Thus if $$ P(n) $$ is true then $$ P(n+1) $$ is also true.
 
<hr/>

**Soln2**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, $$ 0^2 = \frac {0(0 + 1)(2 \times 0 + 1)} 6 = 0 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0^2 + 1^2 + 2^2 + \cdot \cdot \cdot + n^2 = \frac {n(n+1)(2n+1)} 6 $$.

Thus we have $$ 0^2 + 1^2 + 2^2 + \cdot \cdot \cdot + n^2 + (n+1)^2 = {\frac {n(n+1)(2n+1)} 6} + (n+1)^2 $$.     
$$ = \frac {n(n+1)(2n+1) + 6(n+1)^2} 6 $$.             
$$ = \frac {(n+1)(n(2n+1) + 6(n+1))} 6 $$.             
$$ = \frac {(n+1)(2n^2 + 7n + 6)} 6 $$.             
$$ = \frac {(n+1)(n+2)(2n+3)} 6 $$.             
$$ = \frac {(n+1)(n+1+1)(2(n+1)+1)} 6 $$.      

Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>

**Soln3**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, $$ 0^3 = {(\frac {0(0 + 1)} 2 = 0)}^2 = 0 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0^3 + 1^3 + 2^3 + \cdot \cdot \cdot + n^3 = {(\frac {n(n+1)} 2)}^2 $$.

Thus we have $$ 0^3 + 1^3 + 2^3 + \cdot \cdot \cdot + n^3 + (n+1)^3 = {(\frac {n(n+1)} 2)}^2 + (n+1)^3 $$.     
$$ = (\frac {n^2 \times (n+1)^2 } 4) + (n+1)^3 $$.     
$$ = \frac {n^2 (n+1)^2 + 4{(n+1)}^3} 4 $$.     
$$ = \frac {(n+1)^2(n^2 + 4(n+1))} 4 $$.     
$$ = \frac {(n+1)^2(n^2 + 4n + 4)} 4 $$.     
$$ = \frac {(n+1)^2(n+2)^2} 4 $$.     
$$ = {(\frac {(n+1)(n+1+1)} 2)}^2 $$.     

Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

**Soln4**

To find the formulae we may proceed as:
 
In the given series it includes only odd numbers. Consider the series containing both odd and even terms:

$$ 0,1,2,3, \cdot \cdot \cdot (2n-1), (2n) $$. Thus we have total $$ 2n $$ terms. We know from soln1 sum of this = $$ 2n(2n+1)/2 $$.

Clearly if we remove all the even terms from this we will get our series. Also we have $$ n $$ even terms and $$ n $$ odd terms. Since we
will always have atleast one term( becuase $$ n>=1 $$), we can think of the above modified series as consisting of pairs where each pair is 
 one odd number and one even number with even number = 1 + odd number. Thus we have $$ n $$ such pairs. Suppose sum of odd terms is $$ x $$.
  Then clearly since each pair consists of one odd and one even term with even term = 1 + odd term. Thus sum of even terms is sum of odd terms
 and total number of pairs. Thus sum of even terms = $$ x + n $$. Total sum is sum of all even and all odd terms. Thus we have $$ x + (x+n) = 2n(2n+1)/2 $$.
 On symplifying it gives $$ x = n^2 $$.
 
Thus sum of the required/given series = $$ n^2 $$.

We shall prove by inductions that $$ n^2 $$ is correct sum.

<u>Base Case:</u>

For $$ n = 1 $$, $$ 1 = 1^2 = 1 $$. Thus $$ P(1) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 1 + 3 + 5 + \cdot \cdot \cdot + (2n-1) = n^2 $$.

Thus we have $$ 1 + 3 + 5 + \cdot \cdot \cdot + (2n-1) + (2(n+1)-1) = n^2 + (2(n+1)-1) $$.    
$$ = n^2 + 2n + 1 = (n+1)^2 $$.    

Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>

**Soln5**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, $$ 0 \cdot 1 = 0(0+1)(0+2)/3 = 0 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0 \cdot 1 + 1 \cdot 2 + 2 \cdot 3 + \cdot \cdot \cdot + n(n+1) = n(n+1)(n+2)/3 $$.

Thus we have $$ 0 \cdot 1 + 1 \cdot 2 + 2 \cdot 3 + \cdot \cdot \cdot + n(n+1) + (n+1)(n+1+1) $$.     
$$ =  n(n+1)(n+2)/3 + (n+1)(n+1+1) $$.     
$$ =  n(n+1)(n+2)/3 + (n+1)(n+2) $$.     
$$ =  (n(n+1)(n+2) + 3(n+1)(n+2))/3 $$.     
$$ =  (n+1)(n+2)(n + 3)/3 $$.     
$$ =  (n+1)(n+1+1)(n + 1 + 2)/3 $$.     

Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>

**Soln6**

By looking at Ex1 and Ex5, it seems that formulae is $$ n(n+1)(n+2)(n+3)/4 $$.

We shall prove that formulae is correct by Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, $$ 0 \cdot 1 \cdot 2 = 0(0+1)(0+2)(0+3)/4 = 0 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0 \cdot 1 \cdot 2 + 1 \cdot 2 \cdot 3 + 2 \cdot 3 \cdot 4 + \cdot \cdot \cdot + n(n+1)(n+2) = n(n+1)(n+2)(n+3)/4 $$.

Thus we have $$ 0 \cdot 1 \cdot 2 + 1 \cdot 2 \cdot 3 + 2 \cdot 3 \cdot 4 + \cdot \cdot \cdot + n(n+1)(n+2) + (n+1)(n+1+1)(n+1+2) $$.     
$$ =  n(n+1)(n+2)(n+3)/4 + (n+1)(n+1+1)(n+1+2) $$.     
$$ =  n(n+1)(n+2)(n+3)/4 + (n+1)(n+2)(n+3) $$.     
$$ =  (n(n+1)(n+2)(n+3) + 4(n+1)(n+2)(n+3))/4 $$.     
$$ =  (n+1)(n+2)(n+3)(n+4)/4 $$.     
$$ =  (n+1)(n+1+1)(n+1+2)(n+1+3)/4 $$.     

Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>

**Soln7**

By checking the example mentioned and with some hit and try, it seems that formulae is $$ (3^{n+1} -1)/2 $$.

<u>Base Case:</u>

For $$ n = 0 $$, $$ 3^0 = (3^{0+1} -1)/2 = 1 $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 3^0 + 3^1 + 3^2 + 3^3 + \cdot \cdot \cdot + 3^n = (3^{n+1} -1)/2 $$.

Thus we have $$ 3^0 + 3^1 + 3^2 + 3^3 + \cdot \cdot \cdot + 3^n + 3^{n+1} $$.       
$$ = (3^{n+1} -1)/2 + 3^{n+1} $$.      
$$ = ((3^{n+1} -1) + (2 \cdot 3^{n+1}))/2 $$.      
$$ = (3 \cdot 3^{n+1} - 1)/2 $$.      
$$ = (3^{n+1+1} - 1)/2 $$.
      
Thus $$ P(n+1) $$ is also true if $$ P(n) $$ is true.

<hr/>
      
**Soln8**

First we can observe that on LHS there are $$ 2n $$ terms and on RHS there are $$ n $$ terms.

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 1 $$. LHS will contain two terms = $$ \frac 1 {2 \cdot 1 - 1} - \frac 1 {2 \cdot 1} = 1 - \frac 1 2 $$. 
And RHS will contain one term = $$ \frac 1 {1+1} = \frac 1 2 $$. Thus $$ LHS = RHS $$, $$ P(1) $$ is true. 
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true.      
Thus $$ 1 - \frac 1 2 + \frac 1 3 - \frac 1 4 + \cdot \cdot \cdot + \frac 1 {2n-1} - \frac 1 {2n} = \frac 1 {n+1} + \frac 1 {n+2} + \frac 1 {n+3} + \cdot \cdot \cdot + \frac 1 {2n} $$.     
   
Thus LHS for $$ P(n+1) $$ is:
 
$$ 1 - \frac 1 2 + \frac 1 3 - \frac 1 4 + \cdot \cdot \cdot + \frac 1 {2(n+1)-3} - \frac 1 {2(n+1) - 2} + \frac 1 {2(n+1)-1} - \frac 1 {2(n+1)} $$.    
$$ = 1 - \frac 1 2 + \frac 1 3 - \frac 1 4 + \cdot \cdot \cdot + \frac 1 {2n-1} - \frac 1 {2n} + \frac 1 {2(n+1)-1} - \frac 1 {2(n+1)} $$.    

Clearly except last two terms, it is equivalent to LHS of $$ P(n) $$. Thus we can replace this with RHS of $$ P(n) $$ as $$ P(n) $$ is true.
Thus we have:

$$ \frac 1 {n+1} + \frac 1 {n+2} + \frac 1 {n+3} + \frac 1 {n+4} + \cdot \cdot \cdot + \frac 1 {2n} + \frac 1 {2(n+1)-1} - \frac 1 {2(n+1)} $$.    
Moving first term to the end:    
$$ = \frac 1 {n+2} + \frac 1 {n+3} + \frac 1 {n+4} + \cdot \cdot \cdot + \frac 1 {2n} + \frac 1 {2(n+1)-1} - \frac 1 {2(n+1)} + \frac 1 {n+1} $$.    
On adding last two terms:    
$$ = \frac 1 {n+2} + \frac 1 {n+3} + \frac 1 {n+4} + \cdot \cdot \cdot + \frac 1 {2n} + \frac 1 {2(n+1)-1} + \frac 1 {2(n+1)} $$.    
$$ = \frac 1 {n+1+1} + \frac 1 {n+1+2} + \frac 1 {n+1+3} + \cdot \cdot \cdot + \frac 1 {2n} + \frac 1 {2(n+1)-1} + \frac 1 {2(n+1)} $$.    

Clearly it is equivalent to RHS of $$ P(n+1) $$. Thus LHS and RHS of  $$ P(n+1) $$ are equal. Or $$ P(n+1) $$ is true.

Thus if $$ P(n) $$ is true then $$ P(n+1) $$ is also true.

<hr/>

**Soln9**

**(a)**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$. We have $$ 0^2 + 0 = 0 = 2 \times 0 $$. Thus $$ P(0) $$ is true.
  
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ 2k = n^2 + n $$. 

Thus we have for $$ P(n+1) $$: $$ (n+1)^2 + n+1 = n^2 + 2n + 1 + n + 1 = n^2 + n + 2n + 2 $$.

Since $$ n^2 + 2n = 2k $$, we get $$ (n+1)^2 + n+1 = 2k + 2n + 2 = 2(k+n+1) $$. Clearly for $$ l = k + n + 1 $$, $$ (n+1)^2 + n+1 $$
is divisible by $$ 2 $$. Thus if $$ P(n) $$ is correct then $$ P(n+1) $$ is also correct.

**(b)**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$. We have $$ 0^3 - 0 = 0 = 6 \times 0 $$. Thus $$ P(0) $$ is true.
  
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ 6k = n^3 - n $$. 

Thus we have for $$ P(n+1) $$: $$ (n+1)^3 - (n+1) = n^3 + 1 + 3n^2 + 3n - n - 1 = n^3 - n + 3n^2 + 3n = 6k + 3(n^2 + n) $$.

Since from part(a) $$ n^2 + n $$ is divisible by $$ 2 $$, it follows $$ n^2 + n = 2l $$ where $$ l $$ is integer. Thus we have:

$$ (n+1)^3 - (n+1) = 6k + 3(2l) = 6k + 6l = 6(k+l) $$. Clearly $$ k+l $$ is integer, thus $$ P(n+1) $$ is also true.

<hr/>

**Soln10**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ 9^0 - 8 \times 0 - 1 = 0 = 64 \times 0 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ 64k = 9^n - 8n - 1 $$. Thus $$ 9^n = 64k + 8n + 1 $$.
Thus for $$ P(n+1) $$ we have:

$$ 9^{n+1} -8(n+1) -1 $$.     
$$ = 9^{n+1} -8n - 9 $$.    
$$ = 9 \cdot 9^n -8n - 9 $$.    
$$ = 9 \cdot (64k + 8n + 1) -8n - 9 $$.    
$$ = 9 \times 64k + 9 \times 8n + 9 -8n - 9 $$.    
$$ = 9 \times 64k + 64n $$.    
$$ = 64(9k + n) $$.    
$$ = 64m $$, where $$ m = 9k+n $$ is an integer.
    
Thus $$ P(n+1) $$ is true.

<hr/>

**Soln11**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ 4^0 + 6 \times 0 - 1 = 0 = 9 \times 0 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ 9k = 4^n + 6n - 1 $$. Thus $$ 4^n = 9k - 6n + 1 $$.
Thus for $$ P(n+1) $$ we have:

$$ 4^{n+1} + 6(n+1) -1 $$.     
$$ = 4 \cdot 4^n + 6n + 5 $$.    
$$ = 4 \cdot (9k - 6n + 1) + 6n + 5 $$.    
$$ = 4 \times 9k - 4 \times 6n + 4 + 6n + 5 $$.    
$$ = 4 \times 9k - 3 \times 6n + 9 $$.    
$$ = 9 (4k - 2n + 1) $$.    
$$ = 9m $$, where $$ m = 4k - 2n + 1 $$ is an integer.
    
Thus $$ P(n+1) $$ is true.

<hr/>

**Soln12**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ a^0 - b^0 = 0 = (a-b) \times 0 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ (a-b)k = a^n - b^n $$. 

Thus for $$ P(n+1) $$ we have:

$$ a^{n+1} - b^{n+1} $$.     
$$ = a(a^n - b^n) - b^{n+1} + ab^n $$.     
$$ = a(a-b)k + b^n(a-b) $$.     
$$ = (a-b)(ak + b^n) $$.     
$$ = (a-b)m $$, where $$ m = ak + b^n $$ is an integer.

Thus $$ P(n+1) $$ is true.

<hr/>

**Soln13**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ a^{2 \times 0 + 1} + b^{2 \times 0 + 1} = a+b = (a+b) \times 1 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus for some integer $$ k $$, $$ (a+b)k = a^{2n + 1} + b^{2n + 1} $$. 

Thus for $$ P(n+1) $$ we have:

$$ a^{2(n+1)+1} + b^{2(n+1)+1} $$.     
$$ = a^{2n+3} + b^{2n+3} $$.     
$$ = a^2(a^{2n+1} + b^{2n+1}) + b^{2n+3} - a^2 \cdot b^{2n+1}$$.     
$$ = a^2(a+b)k + b^{2n+1}(b^2 - a^2)$$.     
$$ = a^2(a+b)k + b^{2n+1}(b - a)(b+a)$$.     
$$ = (a+b)(a^2k + b^{2n+1}(b - a))$$.     
$$ = (a+b)m $$, where $$ m = a^2k + b^{2n+1}(b - a) $$ is an integer.

Thus $$ P(n+1) $$ is true.

<hr/>

**Soln14**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 10 $$, we have $$ 2^10 = 1024 > 10^3 = 1000 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 2^n > n^3 $$.

Thus for $$ P(n+1) $$ we have $$ 2^{n+1} $$:      
$$ = 2 \cdot 2^n $$.     
$$ > 2 \cdot n^3 $$, since $$ 2^n > n^3 $$.     
$$ = n^3 + n^3 $$.     
$$ \ge n^3 + 10n^2 $$, since $$ n \ge 10 $$.     
$$ = n^3 + 3n^2 + 7n^2 $$.     
$$ \ge n^3 + 3n^2 + 70n $$, since $$ n \ge 10 $$.     
$$ = n^3 + 3n^2 + 3n + 67n $$.     
$$ > n^3 + 3n^2 + 3n + 1 $$, since $$ n \ge 10 $$ means $$ 67n \ge 1 $$.     
$$ = (n+1)^3 $$.     

Thus $$ P(n+1) $$ is true.

<hr/>

**Soln15**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ (n-0) = 0 = 3 \times 0 $$. Thus $$ n \equiv 0 (mod 3) $$. Thus $$ P(0) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus atleast one of the following is true:     
- $$ n = 3k $$.     
- $$ n - 1 = 3l $$.     
- $$ n - 2 = 3m $$.     

where $$ k,l,m $$ are integers.

Now consider $$ P(n + 1) $$, we have following possible cases:

Case 1: $$ n = 3k $$.     
Thus $$ n + 1 = 3k+1 $$, or $$ (n+1) - 1 = 3k $$. Thus $$ (n+1) \equiv 1 (mod 3) $$.

Case 2: $$ n - 1 = 3l $$.     
Thus $$ n + 1 = 3l+1+1 $$, or $$ (n+1) - 2 = 3l $$. Thus $$ (n+1) \equiv 2 (mod 3) $$.

Case 3: $$ n - 2 = 3m $$.     
Thus $$ n + 1 = 3(m+1) $$, or $$ (n+1) - 0 = 3m $$. Thus $$ (n+1) \equiv 0 (mod 3) $$.

Thus from all cases, $$ P(n+1) $$ is also true.

<hr/>

**Soln16**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 1 $$, we have $$ (1+1)2^1 = 4 = 1 \times 2^{1+1} $$. Thus $$ P(1) $$ is true.
 
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 2 \cdot 2^1 + 2 \cdot 2^1 + 2 \cdot 2^1 + \cdot \cdot \cdot + (n+1) \cdot 2^n = n \cdot 2^{n+1} $$.
      
Thus for $$ P(n+1) $$ we have $$ 2 \cdot 2^1 + 2 \cdot 2^1 + 2 \cdot 2^1 + \cdot \cdot \cdot + (n+1) \cdot 2^n + (n+2) \cdot 2^{n+1} $$.      
$$ = n \cdot 2^{n+1} + (n+2) \cdot 2^{n+1} $$, since $$ P(n) $$ is true.          
$$ = 2^{n+1}(n+n+2) $$.      
$$ = 2^{n+1} \cdot 2(n+1) $$.      
$$ = (n+1) \cdot 2^{n+1+1} $$.      

Thus $$ P(n+1) $$ is also true.

<hr/>

**Soln17**

**(a)** Base case is not covered.

**(b)** It appears formulae should be $$ n \cdot 3^{n+1} + 1 $$.

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$, we have $$ (2 \times 0 + 1) \cdot 3^0 = 1 = 0 \cdot 3^{0+1} + 1 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 1 \cdot 3^0 + 3 \cdot 3^1 + 5 \cdot 3^2 + \cdot \cdot \cdot + (2n + 1) \cdot 3^n = n \cdot 3^{n+1} + 1 $$.

Thus for $$ P(n+1) $$ we have $$ 1 \cdot 3^0 + 3 \cdot 3^1 + 5 \cdot 3^2 + \cdot \cdot \cdot + (2n + 1) \cdot 3^n + (2(n+1) + 1) \cdot 3^{n+1} $$.
$$ = n \cdot 3^{n+1} + 1 + (2(n+1) + 1) \cdot 3^{n+1} $$, since $$ P(n) $$ is true.      
$$ =  n \cdot 3^{n+1} + (2n + 3) \cdot 3^{n+1} + 1 $$.     
$$ =  3^{n+1}(n + (2n + 3)) + 1 $$.     
$$ =  3^{n+1}(3n+3) + 1 $$.     
$$ =  (n+1) \cdot 3^{n+1+1} + 1 $$.     

Thus $$ P(n+1) $$ is true.

<hr/>

**Soln18**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 0 $$. Thus $$ n $$ is odd. So we have $$ a^0 = 1 > 0 $$. Thus $$ P(0) $$ is true.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus if $$ n $$ is odd, $$ a^n < 0 $$ and if $$ n $$ is even $$ a^n > 0 $$.

Thus for $$ P(n+1) $$ we have following cases:

Case 1: $$ n $$ is odd.
Thus $$ a^{n+1} = a \cdot a^n $$. Also since $$ P(n) $$ is true and $$ n $$ is odd, $$ a^n < 0 $$. Since $$ a < 0 $$ and  
$$ a^n < 0 $$, it follows that $$ a \cdot a^n > 0 $$. Thus $$ a^{n+1} > 0 $$. Since $$ n $$ is odd, it follows $$ n+1 $$ is
even. Thus $$ P(n+1) $$ is true if $$ n $$ is odd.

Case 2: $$ n $$ is even.
Thus $$ a^{n+1} = a \cdot a^n $$. Also since $$ P(n) $$ is true and $$ n $$ is even, $$ a^n > 0 $$. Since $$ a < 0 $$ and  
$$ a^n > 0 $$, it follows that $$ a \cdot a^n < 0 $$. Thus $$ a^{n+1} < 0 $$. Since $$ n $$ is even, it follows $$ n+1 $$ is
odd. Thus $$ P(n+1) $$ is true if $$ n $$ is even.

Thus $$ P(n+1) $$ is true for all possible cases.

<hr/>

**Soln19**

Suppose $$ 0 < a < b $$.

**(a)**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 1 $$. Thus $$ a^1 = a $$ and $$ b^1 = b $$. Clearly from the give $$ a < b $$. Thus $$ P(1) $$ is true.
  
<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ 0 < a^n < b^n $$.

Thus for $$ P(n+1) $$ we have $$ b^{n+1} $$:
$$ = b \cdot b^n $$.     
$$ > a \cdot b^n $$, Since $$ b > a $$.     
$$ > a \cdot a^n $$, Since $$ b^n > a^n $$.     
$$ = a^{n+1} $$.     

Since $$ P(n) $$ is true, $$ a^n > 0 $$. Since $$ a > 0 $$, it follows $$ a \cdot a^{n+1} > 0 $$. Thus $$ a^{n+1} > 0 $$.

Thus $$ 0 < a^{n+1} < b^{n+1} $$. It follows $$ P(n+1) $$ is true.

**(b)**

By definition of $$ \sqrt[n] a $$, we have $$ \sqrt[n] a > 0 $$. Thus we only need to prove $$ \sqrt[n] a < \sqrt[n] b $$.

Suppose $$ p = \sqrt[n] a $$ and $$ q = \sqrt[n] b $$. We will prove this by contradiction. Suppose $$ p > q $$. Thus by 
part(a) we have $$ p^n > q^n $$. It follows $$ (\sqrt[n] a)^n > (\sqrt[n] b)^n $$. Thus $$ a > b $$. But it contradicts with
the given that $$ a < b $$. Thus $$  \sqrt[n] a < \sqrt[n] b $$.

**(c)**

To Prove $$ ab^n + ba^n < a^{n+1} + b^{n+1} $$, which is equivalent to proving:      
$$ \Leftrightarrow ab^n + ba^n - a^{n+1} - b^{n+1} < 0 $$.     
$$ \Leftrightarrow b^n(a-b) - a^n(a-b)< 0 $$.     
$$ \Leftrightarrow (a-b)(b^n - a^n)< 0 $$.     

Since $$ 0 < a < b $$, $$ a - b < 0 $$. Also from part(a) $$ a^n < b^n $$, or $$ b^n - a^n > 0 $$. Since $$ a-b > 0 $$ and
$$ b^n - a^n > 0 $$, it follows $$ (a-b)(b^n - a^n)< 0 $$. Thus $$ ab^n + ba^n < a^{n+1} + b^{n+1} $$ is true.

**(d)**

By Mathematical induction:

<u>Base Case:</u>

For $$ n = 2 $$. Thus we have to prove $$ (\frac {a+b} 2)^2 < \frac {a^2 + b^2} 2 $$, or $$ (a+b)^2 < 2(a^2 + b^2) $$, which 
on simplifying $$ a^2 + b^2 + 2ab < 2a^2 + 2b^2 $$, or $$ 2ab < a^2 + b^2 $$. Thus we need to prove $$ 2ab < a^2 + b^2 $$. This
is true as from part(c) for $$ n = 2 $$.

<u>Induction Step:</u>

Suppose $$ P(n) $$ is true. Thus $$ (\frac {a+b} 2)^n < \frac {a^n + b^n} 2 $$.

Multiplying both sides by $$ (a+b)/2 $$, we get:      
$$ (\frac {a+b} 2)^{n+1} < {\frac {a^n + b^n} 2} \times {\frac {a+b} 2} $$.      
$$ \Rightarrow (\frac {a+b} 2)^{n+1} < {\frac {a(a^n + b^n) + b(a^n + b^n)} 4} $$.     
$$ \Rightarrow (\frac {a+b} 2)^{n+1} < {\frac {a^{n+1} + ab^n + ba^n + b^{n+1}} 4} $$.     
Using part(c), $$ ab^n + ba^n < a^{n+1} + b^{n+1} $$, we get:     
$$ \Rightarrow (\frac {a+b} 2)^{n+1} < {\frac {a^{n+1} + a^{n+1} + b^{n+1} + b^{n+1}} 4} $$.     
$$ \Rightarrow (\frac {a+b} 2)^{n+1} < {\frac {a^{n+1+1} + b^{n+1+1}} 4} $$.     
Since $$ x > 0 \to \frac x 4 < \frac x 2 $$, we get:     
$$ \Rightarrow (\frac {a+b} 2)^{n+1} < {\frac {a^{n+1+1} + b^{n+1+1}} 2} $$.     

Thus $$ P(n+1) $$ is true.

<hr/>
