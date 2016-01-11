---
layout: blog
title:  "How To Prove It, Ch-6 Sec-6.4, Strong Induction"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 6, Section - 6.4, Strong Induction.

<!--more-->

<hr/>

### Summary

- *To prove a goal of the form* $$ \forall n \in \mathbb N P(n) $$:      
  Prove that $$ \forall n[(\forall k < nP(k)) \to P(n)] $$, where both $$ n $$ and $$ k $$ range over the natural numbers in this 
  statement. Of course, the most direct way to prove this is to let $$ n $$ be an arbitrary natural number, assume that 
  $$ \forall k < nP(k) $$, and then prove $$ P(n) $$.
  
- Note that no base case is necessary in a proof by strong induction. All that is needed is a modified form of the induction step in which 
  we prove that if every natural number smaller than $$ n $$ has the property $$ P $$, then $$ n $$ has the property $$ P $$. In a 
  proof by strong induction, we refer to the assumption that every natural number smaller than $$ n $$ has the property $$ P $$ as 
  the *inductive hypothesis*.
  
<hr/>

**Soln1**

**(a)**

($$ \to $$) Suppose $$ \forall n Q(n) $$. Suppose $$ n $$ is an arbitrary natural number. Since $$ n $$ is natural number it follows $$ n + 1 $$ is also a natural number. 
Thus $$ Q(n+1) $$ is true. Since $$ Q(n) = \forall k < n P(n) $$, it follows $$ Q(n+1) = \forall k < n+1 P(k) $$. Thus for $$ k = n $$, $$ P(n) $$
 is true. Since $$ n $$ is arbitrary, it follows $$ \forall n P(n) $$.
 
($$ \leftarrow $$) Suppose $$ \forall n P(n) $$. It follows that $$ \forall k < n P(k) $$ is true. Thus $$ Q(n) $$ is true.
 
**(b)**

By *ordinary* induction:

Base Case:

For $$ n = 0 $$, $$ \forall k < n P(k) $$ is true because $$ k $$ is a natural number and there is no value of $$ k < 0 $$. Thus
the statement $$ \forall k < n P(k) $$ is vacuously true. Since $$ (\forall k < n P(k)) \to P(n) $$ is true(given), it follows that
$$ P(0) $$ is true by modus ponens.

Induction Step:

Suppose $$ Q(n) $$ is true. It follows that $$ \forall k < n P(k) $$. But it is given that $$ (\forall k < n P(k)) \to P(n) $$. Thus
$$ P(n) $$ is true. Thus $$ \forall k < (n+1) P(k) $$ is true. It follows that $$ Q(n+1) $$ is true.

Thus if $$ Q(n) $$ is true then $$ Q(n+1) $$ is also true.

<hr/>

**Soln2**

To Prove: $$ \forall q \in \mathbb N (q > 0 \to \lnot \exists p \in \mathbb N(p/q = \sqrt 2)) $$.       
Or we can say $$  \forall q \in \mathbb N P(q) $$, where $$ P(q) = q > 0 \to \lnot \exists p \in \mathbb N(p/q = \sqrt 2) $$.

Suppose $$ q $$ is an arbitrary natural number. Suppose $$ \forall k < q P(k) $$ where $$ k \in \mathbb N $$. Thus this is our
induction hypothesis.

*Note:* We are using strong induction. Thus after assuming our induction hypothesis: $$ \forall k < q P(k) $$, we will prove that $$ P(q) $$ is true.
Proving $$ P(q) $$ will complete the proof. 

Since $$ q $$ is natural number, it follows $$ q > 0 $$. Thus we have to prove $$ \lnot \exists p \in \mathbb N(p/q = \sqrt 2) $$.
We shall prove this by contradiction. Thus lets suppose $$ \exists p \in \mathbb N(p/q = \sqrt 2) $$. Thus there exist a $$ p \in \mathbb N $$
such that $$ p/q = \sqrt 2 $$. From the example-6.4.5 from book, it follows that $$ p,q $$ is even. Thus there are $$ p', q' \in \mathbb N $$
such that $$ p' = p/2 $$ and $$ q' = q/2 $$. Since $$ p/q = \sqrt 2 $$, it follows $$ p'/q' = 2 $$. Since $$ q' = q/2 $$, it follows
$$ q' < q $$. Thus there exists a $$ q' < q $$ such that $$ \exists p \in \mathbb N(p/q' = \sqrt 2) $$. But this contradicts with our
induction hypothesis. Thus our assumption that $$ \exists p \in \mathbb N(p/q = \sqrt 2) $$ is true is wrong. Thus 
$$ \lnot \exists p \in \mathbb N(p/q = \sqrt 2) $$. It follows that $$ P(q) $$ is true.

<hr/>

**Soln3**

**(a)**

We will prove this by contradiction. We can follow the approach in Soln2 or we can also follow the approach used in book in example-6.4.5.
Lets follows the approach used in example 6.4.5. Thus we will be using *Well ordering principle*.

Suppose $$ \sqrt 6 $$ is rational. Thus $$ \exists q \in \mathbb Z^+ \exists p \in \mathbb Z^+ (p/q = \sqrt 6) $$. Thus the set
$$ S = \{ q \in \mathbb Z^+ \, \vert \, \exists p \in \mathbb Z^+ (p/q = \sqrt 6) \} $$ is not empty. Suppose $$ q $$ is the smallest
element of this set. Thus there exist $$ p \in \mathbb Z^+ $$ such that $$ p/q = \sqrt 6 $$. Thus $$ p^2 = 6q^2 $$. It follows that
$$ p^2 $$ is even. Since $$ p^2 $$ is even it follows that $$ p $$ is even. Thus suppose $$ p' = p/2 $$. Thus $$ p = 2p' $$. Since
$$ p^2 = 6q^2 $$, it follows $$ 4{(p')}^2 = 6q^2 $$, or $$ 2{(p')}^2 = 3q^2 $$. It follows that $$ q $$ is also even. Thus $$ q = 2q' $$
for some $$ q' \in \mathbb Z^+ $$. It follows $$ q' < q $$. Also $$ p/q = (2p')/(2q') = p'/q' = \sqrt 6 $$. Thus $$ q' \in S $$. But this 
contradicts with the assumption that $$ q $$ is the smallest element. Thus $$ \sqrt 6 $$ is irrational.
 
**(b)**

Suppose $$ \sqrt 2 + \sqrt 3 $$ is rational. Thus $$ \exists q \in \mathbb Z^+ \exists p \in \mathbb Z^+ (p/q = \sqrt 2 + \sqrt 3) $$.
Suppose $$ p,q $$ are the elements such that $$ p/q = \sqrt 2 + \sqrt 3 $$. Thus:        
$$ \Rightarrow p^2/q^2 = 2 + 3 + 2 \sqrt 2 \sqrt 3 $$         
$$ \Rightarrow p^2/q^2 = 5 + 2 \sqrt 6 $$        
$$ \Rightarrow \sqrt 6 = \frac {p^2/q^2 - 5} 2 $$       
$$ \Rightarrow \sqrt 6 = \frac {p^2 - 5q^2} {2q^2} $$         

Thus $$ \sqrt 6 $$ is rational. But this contradicts with part(a). Thus $$ \sqrt 2 + \sqrt 3 $$ is irrational.

<hr/>

**Soln4**

We need to prove that $$ \forall n \in \mathbb N(n \ge 12 \to \exists a \exists b (3a + 7b = n)) $$.

Suppose $$ P(n) = (n \ge 12) \to \exists a \exists b (3a + 7b = n) $$. Thus we need to prove $$ \forall n \in \mathbb N P(n) $$.

Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n P(k) $$ is our induction hypothesis.
Thus we have following possible cases:

- Case $$ n < 12 $$:      
Since $$ n < 12 $$, it follows $$ n \ge 12 $$ is false. Thus $$ P(n) = (n \ge 12) \to \exists a \exists b (3a + 7b = n) $$ is vacuously true.

- Case $$ n = 12 $$:      
Clearly $$ 12 = 3 \times 4 $$. Thus $$ P(n) $$ is true.

- Case $$ n = 13 $$:
Clearly $$ n = 7 \times 1 + 3 \times 2 $$. Thus $$ P(n) $$ is true. 

- Case $$ n = 14 $$:
Clearly $$ n = 7 \times 2 $$. Thus $$ P(n) $$ is true. 

- Case $$ n \ge 15 $$:
Thus $$ n = 3 \times 1 + (n-3) $$. Since $$ n-3 < n $$, it follows from induction hypothesis that $$ P(n-3) $$ is true. Thus
 there exist some $$ a $$ and $$ b $$ such that $$ n-3 = 3a + 7b $$. Thus $$ n = 3 \times 1 + 3a + 7b $$, or $$ n = 3 \times (a+1) + 7b $$.
 It follows that $$ P(n) $$ is true.
 
<hr/>

**Soln5**

We need to prove $$ \forall n \in \mathbb N (n \ge 1 \to x^n +  \frac 1 {x^n}) $$ is integer. Suppose $$ n $$ is an arbitrary integer.
Suppose our induction hypothesis is $$ \forall k < n (k \ge 1 \to x^k + \frac 1 {x^k}) $$ is an integer. Thus we have following possible
cases:

- Case $$ n < 1 $$:     
Clearly $$ P(n) $$ is vacuously true.

- Case $$ n = 1 $$:     
We are given that $$ x + \frac 1 x $$ is integer. Thus $$ P(n) $$ is true.

- Case $$ n > 1 $$:      
  Consider the product: $$ P(1)P(n-1) = (x + \frac 1 x)(x^{n-1} + {\frac 1 {x^{n-1}} }) $$. Since $$ n-1 < n $$, it follows by our induction
  hypothesis that $$ P(n-1) $$ is an integer. Thus $$ P(1)P(n-1) $$ is also an integer.

  On simplifying $$ P(1)(n-1) = { x^n } + { \frac 1 {x^n} } + { x^{n-1} } + { \frac 1 {x^{n-1}} } $$.          
  $$ \Rightarrow P(1)P(n-1) = P(n) + P(n-1) $$         
  $$ \Rightarrow P(n) = P(1)P(n-1) - P(n-1) $$       

  Thus $$ P(n) $$ is also an integer since $$ P(1)P(n-1) $$ is integer and $$ P(1) $$ is integer.

Thus from all cases $$ P(n) $$ is true.

<hr/>

**Soln6**

**(a)**

Suppose $$ n $$ is arbitrary natural number. Suppose $$ \forall k < n (\sum_{i=0}^k F_i = F_{k+2} -1) $$.

- Case $$ n = 1 $$       
  $$ \sum_{i=0}^k F_i = F_0 + F_1 = 0 + 1 = 1 = 2 - 1 = F_3 - 1 $$. Thus $$ P(1) $$ is true.
  
- Case $$ n > 1 $$.
  Clearly $$ n-1 $$ is a natural number and $$ n - 1 < n $$. Thus by induction hypothesis,        
  $$ \Rightarrow \sum_{i=0}^{n-1} F_i = F_{n+1} - 1 $$          
  Thus $$ \sum_{i=0}^n F_i = \sum_{i=0}^{n-1} F_i + F_n = F_{n+1} - 1 + F_n = F_{n+2} -1 $$.       
  Thus $$ P(n) $$ is also true.
  
Thus from both cases, $$ P(n) $$ is true.

**(b)**

Suppose $$ n $$ is arbitrary natural number. Suppose $$ \forall k < n (\sum_{i=0}^k {(F_i)}^2 = F_k F_{k+1} ) $$.

- Case $$ n = 1 $$       
  $$ \sum_{i=0}^k {(F_i)}^2 = F_0^2 + F_1^2 = 0^2 + 1^2 = 1 = 1 \times 1 = F_1 \cdot F_2 $$. Thus $$ P(1) $$ is true.
  
- Case $$ n > 1 $$.
  Clearly $$ n-1 $$ is a natural number and $$ n - 1 < n $$. Thus by induction hypothesis,        
  $$ \Rightarrow \sum_{i=0}^{n-1} {(F_i)}^2 = F_{n-1}F_{n} $$          
  Thus $$ \sum_{i=0}^n {(F_i)}^2 = \sum_{i=0}^{n-1} {(F_i)}^2 + F_n^2 = F_{n-1}F_{n} + F_n^2 = F_n(F_{n-1} + F_n) = F_n + F_{n+1} $$.       
  Thus $$ P(n) $$ is also true.
  
Thus from both cases, $$ P(n) $$ is true.

**(c)**

Suppose $$ n $$ is arbitrary natural number. Suppose $$ \forall k < n (\sum_{i=0}^k F_{2i+1} = F_{2k+2}) $$.

- Case $$ n = 1 $$       
  $$ \sum_{i=0}^k F_{2i+1} = F_1 + F_3 = 1 + 2 = 3 = F_4 $$. Thus $$ P(1) $$ is true.
  
- Case $$ n > 1 $$.
  Clearly $$ n-1 $$ is a natural number and $$ n - 1 < n $$. Thus by induction hypothesis,        
  $$ \Rightarrow \sum_{i=0}^{n-1} F_{2i+1} = F_{2(n-1)+1} = F_{2n} $$          
  Thus $$ \sum_{i=0}^n F_{2i+1} = \sum_{i=0}^{n-1} F_{2i+1} + F_{2n+1} = F_{2n} + F_{2n+1} = F_{2n+2} $$.       
  Thus $$ P(n) $$ is also true.
  
Thus from both cases, $$ P(n) $$ is true.

**(d)**

I made a guess as it is similar to part(c) for this formulae $$ \sum_{i=0}^n F_{2i+1} = F_{2n+1} $$. But it does not cover the 
 case for $$ n = 1 $$, so adjusted the formulae to $$ \sum_{i=0}^n F_{2i+1} = F_{2n+1} - 1 $$.
 
Suppose $$ n $$ is arbitrary natural number. Suppose $$ \forall k < n (\sum_{i=0}^k F_{2i} = F_{2k+1} - 1) $$.

- Case $$ n = 1 $$       
  $$ \sum_{i=0}^k F_{2i} = F_0 + F_2 = 0 + 1 = 1 = 2 - 1 = F_3 - 1 $$. Thus $$ P(1) $$ is true.
  
- Case $$ n > 1 $$.
  Clearly $$ n-1 $$ is a natural number and $$ n - 1 < n $$. Thus by induction hypothesis,        
  $$ \Rightarrow \sum_{i=0}^{n-1} F_{2i} = F_{2(n-1)+1} - 1 = F_{2n-1} - 1 $$          
  Thus $$ \sum_{i=0}^n F_{2i} = \sum_{i=0}^{n-1} F_{2i} + F_{2n} = F_{2n-1} - 1 + F_{2n} = F_{2n+1} -1 $$.       
  Thus $$ P(n) $$ is also true.
  
Thus from both cases, $$ P(n) $$ is true.

<hr/>

**Soln7**

**(a)**

Suppose $$ m $$ is arbitrary. Suppose $$ \forall k < m (k \ge 1 \to (F_{k+n} = F_{k-1}F_{n} + F_kF_{n+1})) $$. We have following
 possible cases:
 
 - Case $$ m < 1 $$       
   Clearly $$ m \ge 1 $$ is false. Thus $$ m \ge 1 \to (F_{m+n} = F_{m-1}F_{n} + F_mF_{n+1}) $$ statement is vacuously true. Thus
   $$ P(m) $$ is true.
   
 - Case $$ m = 1 $$      
   $$ F_{1-1}F_n + F_{1}F_{n+1} = 0 + F_{n+1} = F_{m+1} $$. Thus $$ P(m) $$ is true. 
 
 - Case $$ m = 2 $$      
    $$ F_{2-1}F_n + F_{2}F_{n+1} = F_n + F_{n+1} = F_{n+2} $$(fibonacci number). Thus $$ P(m) $$ is true. 
 
 - Case $$ m > 2 $$      
   Thus $$ m - 1 \ge 1 $$ and $$ m-2 \ge 1 $$. Since $$ F_{m+n} $$ is a fibonacci number, $$ F_{m+n} = F_{m+n-1} + F_{m+n-2} = F_{m-1+n} + F_{m-2+n} $$.
   Since $$ m-1 < m $$ and $$ m-2 < m $$ and $$ m - 1 \ge 1 \land m-2 \ge 1 $$, it follows by induction hypothesis $$ F_{m-1+n} = F_{m-2}F_n + F_{m-1}F_{n+1} $$
   and $$ F_{m-2+n} = F_{m-3}F_n + F_{m-2}F_{n+1} $$. Thus:
   
   $$ F_{m+n} = F_{m+n-1} + F_{m+n-2} $$      
   $$ = F_{m-2}F_n + F_{m-1}F_{n+1} + F_{m-3}F_n + F_{m-2}F_{n+1} $$     
   $$ = F_n(F_{m-2} + F_{m-3}) + F_{n+1}(F_{m-1} + F_{m-2}) $$     
   $$ = F_nF_{m-1} + F_{n+1}F_m $$       
   $$ = F_{m-1}F_n + F_mF_{n+1} $$       
   
   Thus $$ P(m) $$ is true.
   
 
 Thus from all cases $$ P(m) $$ is true.
 
**(b)**

Suppose $$ m $$ is arbitrary. Suppose $$ \forall k < m (k \ge 1 \to (F_{k+n} = F_{k-1}F_{n} + F_kF_{n+1})) $$. We have following
 possible cases:
   
 - Case $$ m > 2 $$      
   Thus $$ m-1 \ge 1 \land m-2 \ge 1 $$. We have:     
   $$ F_{m+n} = F_{m+n-1} + F_{m+n-2} $$, (fibonacci numbers property)      
   $$ = F_mF_{n+1} + F_{m-2}F_{n-1} + F_{m-1}F_{n+1} + F_{m-3}F_{n-1} $$, (by induction hypothesis)       
   $$ = (F_m + F_{m-1})F_{n+1} + (F_{m-2} + F_{m-3})F_{n-1} $$      
   $$ = F_{m+1}F_{n+1} + F_{m-1}F_{n-1} $$      
   
 - Case $$ m = 2 $$       
 - Case $$ m = 1 $$     
   For both of these cases, it can be directly verified by putting the values for $$ m$$.
   
**(c)**
  
Both parts can be proved easily by putting $$ m = n+1 $$ in part(a) and putting $$ m = n+1, n = n+1 $$ in part(b).

**(d)**

We need to prove following:

$$ \forall m \in \mathbb N \forall n \in \mathbb N ( \exists p \in \mathbb N(pm = n) \to \exists q \in \mathbb N(qF_m = F_n)) $$. 

Suppose $$ m,n $$ are arbitrary natural numbers such that $$ lm = n $$ for some natural number $$ l $$. Suppose 
$$ \forall k < n (\exists p \in \mathbb N(pm = k) \to \exists q \in \mathbb N(qF_m = F_k)) $$. We have following possible cases:

- Case $$ m = n $$        
  Since $$ m = n $$, it follows $$ F_m = F_n $$. Thus for $$ q = 1 $$, $$ qF_m = F_n $$.
  
- Case $$ n > m $$      
  We have $$ F_n = F_{(n-m)+m} $$. Since $$ n > m $$, it follows $$ n-m $$ is a natural number. Thus we can apply part(a).
  Applying part(a), we get $$ F_n = F_{n-m-1}F_m + F_{n-m}F_{m-1} $$. 
    
  Since $$ n = lm $$, it follows $$ n-m = lm-m = (l-1)m $$. Thus $$ n-m $$ is a multiple of $$ m $$. Or we can say $$ tm = n-m $$, where $$ t = l-1 $$. Since $$ n-m < n $$ and $$ tm = n-m $$, it follows
  from the induction hypothesis, there exist some natural number $$ q' $$ such that $$ q'F_m = F_{n-m} $$.       
  
  Thus $$ F_n = F_{n-m-1}F_m + F_{n-m}F_{m-1} = F_{n-m-1}F_m + q'F_mF_{m-1} $$, or $$ F_n = (F_{n-m-1} + q'F_{m-1})F_m $$. Thus for
  $$ q = (F_{n-m-1} + q'F_{m-1}) $$, we have $$ F_n = qF_m $$.
  
- Case $$ n < m $$     
  Since $$ lm = n $$, for some natural number $$ l $$, it follows that this case is not possible.
      
**(e)**

Suppose $$ n $$ is arbitrary natural number. Suppose:

$$ \forall k < n (F_{2k-1} = \sum_{i=0}^{k-1} \binom {2k-i-2} k $$       
$$ \forall k < n (F_{2k} = \sum_{i=0}^{k-1} \binom {2k-i-1} k $$       

We know that $$ F_n = F_{n-1} + F_{n-2} $$. Thus we have following possible cases:

- Case $$ n = 1 $$:    
  Thus $$ \sum_{i=0}^{n-1} \binom {2n-i-2} n = \binom {2-0-2} 0 = \binom 0 0 = 1 = F_1 = F_{2n-1} $$.      
  Also $$ \sum_{i=0}^{n-1} \binom {2n-i-1} n = \binom {2-0-1} 0 = \binom 1 0 = 1 = F_2 = F_{2n} $$.      
  
- Case $$ n = 2 $$:    
  Thus $$ \sum_{i=0}^{n-1} \binom {2n-i-2} n = \binom {4-0-2} 0 + \binom {4-1-2} 1 = \binom 2 0 + \binom 1 1 = 1+1 = F_3 = F_{2n-1} $$.      
  Also $$ \sum_{i=0}^{n-1} \binom {2n-i-1} n = \binom {4-0-1} 0 + \binom {4-1-1} 1 = \binom 3 0 + \binom 2 1 = 1+2 = F_4 = F_{2n} $$.      
  
- Case $$ n > 2 $$:      
  
  Since $$ n > 2 $$, it follows $$ 2(n-1) \ge 4 $$ and $$ 2(n-1)-3 \ge 1 $$. Thus $$ F_{2(n-1)} $$ and $$ F_{2(n-1)-1} $$ are both valid
  fibonacci numbers. 

  Since $$ F_{2n-1} $$ is a fibonacci number, it follows:      
  $$ F_{2n-1} = F_{2n-2} + F_{2n-3} = F_{2(n-1)} + F_{2(n-1)-1} $$       
         
  Since $$ n > 2 $$, it follows $$ n-1 $$ is a natural number. Since $$ n-1 < n $$ and $$ n-1 $$ is a natural number, it follows from
  the induction hypothesis:
  
  $$ F_{2(n-1)} = \sum_{i=0}^{n-2} \binom {2(n-1)-i-1} {n-1} = \sum_{i=0}^{n-2} \binom {2n-i-3} {n-1} $$ and      
  $$ F_{2(n-1)-1} = \sum_{i=0}^{n-2} \binom {2(n-1)-i-2} {n-1} = \sum_{i=0}^{n-2} \binom {2n-i-4} {n-1} $$      
  
  Thus $$ F_n $$:      
  $$ = \sum_{i=0}^{n-2} \binom {2n-i-3} {n-1} + \sum_{i=0}^{n-2} \binom {2n-i-4} {n-1} $$         
  $$ = {\binom {2n-3} 0} + {\binom {2n-4} 1} + \cdot \cdot \cdot + {\binom {n} {n-3} } + {\binom {n-1} {n-2}} $$     
  $$ \quad\quad\quad\;\; + {\binom {2n-4} 0} + \cdot \cdot \cdot + {\binom {n} {n-4} } + {\binom {n-1} {n-3}} + {\binom {n-2} {n-2}} $$      
  
  We can see above many pairs of the form of $$ \binom {n} {k} $$ and $$ \binom {n} {k-1} $$. Thus we can use the theorem 
  $$ \binom {n+1} k = \binom n {k-1} + \binom n {k} $$. Thus except the first and last term all the pairs in the above summation can be combined.
  Thus after combining we get the following:      
  
  $$ = {\binom {2n-3} 0} + {\binom {2n-3} 1} + \cdot \cdot \cdot + { \binom {n+1} {n-3} } + { \binom {n} {n-2} } + { \binom {n-2} {n-2} } $$      
  $$ = 1 + {\binom {2n-3} 1} + \cdot \cdot \cdot + { \binom {n+1} {n-3} } + { \binom {n} {n-2} } + 1 $$      
  $$ = {\binom {2n-2} 0} + {\binom {2n-3} 1} + \cdot \cdot \cdot + { \binom {n+1} {n-3} } + { \binom {n} {n-2} } + { \binom {n-1} {n-1} } $$      
  $$ = \sum_{i=0}^{n-1} \binom {2n-i-2} n $$        
      
Thus $$ F_{2n-1} $$ is true in all cases.
 
Similarly we can prove for $$ F_{2n} $$.

<hr/>

**Soln8**

**(a)**

We need to prove the following:       
$$ \forall n \in \mathbb N ((a_n = a_{n-1} + a_{n-2}) \leftrightarrow c = \frac {1 \pm \sqrt 5} 2 ) $$       
       
($$ \to $$) Suppose $$ n $$ is an arbitrary integer. Suppose $$ a_n = a_{n-1} + a_{n-2} $$. Since $$ a_n = c^n $$, it follows that
$$ c^n = c^{n-1} + c^{n-2} $$. Thus $$ c^n = c^{n-2}(c+1) $$, or $$ c^{n-2}(c^2 - c - 1) = 0 $$. 

If $$ n = 2 $$ then $$ c^{n-2} = c^0 = 1 $$. Thus $$ c \ne 0 $$. Since $$ 0^0 $$ is not defined.

Since $$ c \ne 0 $$ and $$ c^{n-2}(c^2 - c - 1) = 0 $$, it follows $$ c^2 - c - 1 = 0 $$. Thus $$ c = \frac {1 \pm \sqrt 5} 2 $$.

($$ \leftarrow $$) Suppose $$ c = \frac {1 \pm \sqrt 5} 2 $$. It follows $$ c^2 = 1 + c $$, or $$ c^2 - c - 1 = 0 $$.
  
**(b)**

Suppose $$ c_1 = \frac {1 + \sqrt 5} 2 $$ and $$ c_2 = \frac {1 - \sqrt 5} 2 $$. Thus from part(a) we know that $$ c_1^2 = c_2^2 = 1+c_1 = 1+c_2 $$.

Suppose $$ n \ge 2 $$ is a arbitrary natural number. Since $$ a_n =  s{(\frac {1 + \sqrt 5} 2)}^n + t{(\frac {1 - \sqrt 5} 2)}^n $$, or $$ a_n = sc_1^n + tc_2^2 $$ it follows:             

$$ a_{n-1} = sc_1^{n-1} + tc_1^{n-1} $$      
$$ a_{n-2} = sc_1^{n-2} + tc_1^{n-2} $$      

Thus $$ a_{n-1} + a_{n-2} = sc_1^{n-1} + tc_1^{n-1} + sc_1^{n-2} + tc_1^{n-2} $$. Thus:     
$$ \Rightarrow a_{n-1} + a_{n-2} = s(c_1^{n-1} + c_2^{n-2}) + t(c_2^{n-1} + c_2^{n-2}) $$      
$$ \Rightarrow a_{n-1} + a_{n-2} = sc_1^{n-2}(c_1+1) + tc_2^{n-2}(c_2 + 1) $$    
But $$ 1+c_1 = c_1^2 $$ and $$ 1+ c_2 = c_2^2 $$         
$$ \Rightarrow a_{n-1} + a_{n-2} = sc_1^{n-2}(c_1^2) + tc_2^{n-2}(c_2^2) $$     
$$ \Rightarrow a_{n-1} + a_{n-2} = sc_1^{n} + tc_2^{n} $$     
$$ \Rightarrow a_{n-1} + a_{n-2} = a_n $$     

Thus $$ a_0, a_1, a_2 ... $$ is a gibonacci sequence.

**(c)**

*Scratch Work*

We will first compute $$ s $$ and $$ t $$ by assuming that formulae is correct.

Thus for $$ n = 0 $$, we have $$ a_0 = sc_1^0 + tc_2^0 = s+t $$. Or $$ s+t = a_0 $$.      
Similarly for $$ n = 1 $$, we have $$ a_1 = sc_1^1 + tc_2^1 = sc_1 + tc_2 $$. Or $$ a_1 = s(\frac {1 + \sqrt 5} 2) + t(\frac {1 - \sqrt 5} 2) $$.        
Thus we get $$ a_1 = \frac {s+t + \sqrt 5(s-t)} 2 = \frac {a_0 + \sqrt 5{s-t}} 2 $$.      

Thus $$ s-t = \frac {2a_1 - a_0} {\sqrt 5} $$ and $$ s+t = a_0 $$. We have two equations with two unknowns $$ s $$ and $$ t $$. 

Solving them gives:     
$$ s = \frac {5a_0 + \sqrt 5(2a_1 - a_0)} {10} $$       
$$ t = \frac {5a_0 - \sqrt 5(2a_1 - a_0)} {10} $$       

Now suppose $$ s = \frac {5a_0 + \sqrt 5(2a_1 - a_0)} {10} $$ and $$ t = \frac {5a_0 - \sqrt 5(2a_1 - a_0)} {10} $$.

Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n(a_n = sc_1^n + tc_2^n) $$. Thus we have following possible
cases:

- Case $$ n = 0 $$:     
  Clearly $$ sc_1^0 + tc_2^0 = s+t = \frac {5a_0 + \sqrt 5(2a_1 - a_0)} {10} + \frac {5a_0 - \sqrt 5(2a_1 - a_0)} {10} = a_0 $$. 
  Thus $$ a_n = sc_1^n + t c_2^n $$.

- Case $$ n = 1 $$:     
  Clearly $$ sc_1^1 + tc_2^1 = sc_1 + tc_2 = (\frac {1 + \sqrt 5} 2)(\frac {5a_0 + \sqrt 5(2a_1 - a_0)} {10}) + (\frac {1 - \sqrt 5} 2)(\frac {5a_0 - \sqrt 5(2a_1 - a_0)} {10}) = a_1 $$. 
  Thus $$ a_n = sc_1^n + t c_2^n $$.

- Case $$ n \ge 2 $$:      
  We have $$ sc_1^n + tc_2^n = sc_1^{n-2}c_1^2 + tc_2^{n-2}c_2^2 $$. From part(a) we know $$ c_1^2 = 1+ c_1 $$ and $$ c_2^2 = 1+c_2^2 $$.
  It follows $$ sc_1^n + tc_2^n = sc_1^{n-2}(1 + c_1) + tc_2^{n-2}(1 + c_2) $$      
  $$ = sc_1^{n-2} + sc_1{n-1} + tc_2^{n-2} + tc_2{n-1} $$       
  $$ = sc_1^{n-2} + tc_2^{n-2} + sc_1{n-1} + tc_2{n-1} $$       
  $$ = a_{n-2} + a_{n-1} $$       
  $$ = a_{n} $$

  Thus $$ a_n = sc_1^n + t c_2^n $$.
  
Thus for all cases $$ a_n = sc_1^n + tc_2^n $$.

<hr/>

**Soln9**

Since it is a gibonacci sequence and $$ a_0 = L_0 = 2 $$ and $$ a_1 = L_1 = 1 $$ is given. We can use part(c). Thus $$ a_n = sc_1^n + tc_2^n $$, where
$$ s = \frac {5a_0 + \sqrt 5(2a_1 - a_0)} {10} $$ and $$ t = \frac {5a_0 - \sqrt 5(2a_1 - a_0)} {10} $$.
 
Thus $$ s = \frac {10 + \sqrt 5(2 - 2)} {10} = 1 $$       
and $$ t = \frac {10 - \sqrt 5(2 - 2)} {10} = 1 $$

Thus $$ a_n = c_1^n + c_2^n $$, where $$ c_1, c_2 $$ are from Soln8.
       
<hr/>

**Soln10**

Lets suppose $$ a_n = sp^n - tq^n $$ which is similar to Soln8 except negative sign. Addition will also generate same result but 
it appears from the formulae $$ a_n = 5a_{n-1} - 6a_{n-2} $$ that negative sign may help. 

Now we have:     
$$ a_0 = -1 $$      
$$ a_1 = 0 $$      

Using $$ a_n = 5a_{n-1} - 6a_{n-2} $$, we have $$ a_2 = 6 $$ and $$ a_3 = 30 $$.

Now using our assumption,       
$$ a_0 = sp^0 - tq^0 = s-t = -1 $$       
$$ a_1 = sp^1 - tq^1 = sp-tq = 0 $$      
$$ a_2 = sp^2 - tq^2 = 6 $$      
$$ a_2 = sp^3 - tq^3 = 30 $$      

Thus we have four equations and four unknowns $$ s,t,p,q $$. 

Using first and seconds equation we can find values of $$ s $$ and $$ t $$ in terms of $$ p $$ and $$ q $$. Thus we get:      
$$ s = \frac q {p-q} $$      
$$ t = \frac p {p-q} $$       

Now putting these values of $$ s $$ and $$ t $$ in $$ 3^{rd} $$ and $$ 4^th $$ equation:          
In $$ 3rd $$ equation: $$ \Rightarrow \frac {qp^2 - pq^2} {p-q} = 6 $$, or $$ \frac {pq(p-q)} {p-q} = 6 $$. Thus $$ pq = 6 $$.              
and In $$ 4th $$ equation: $$ \Rightarrow \frac {qp^3 - pq^3} {p-q} = 30 $$, or $$ \frac {pq(p^2-q^2)} {p-q} = 30 $$.       
Using $$ a^2 - b^2 = (a-b)(a+b) $$,      
$$ \Rightarrow pq(p+q) = 30 $$         
Using $$ pq = 6 $$:         
we get $$ \Rightarrow p+q = 5 $$.

Thus with $$ pq = 6 $$ and $$ p+q = 5 $$ and eliminating $$ q $$,  we get the quadratic equation $$ p^2 - 2p + 6 = 0 $$.
 Solving it gives $$ p = 2,3 $$. Since $$ pq = 6 $$, we get $$ q = 3,2 $$.
 
Thus we have two pair of values for $$ (p,q) = (2,3) $$ or $$ (p,q) = (3,2) $$.

With $$ (p,q) = (2,3) $$, we get $$ s = -3 $$ and $$ t = -2 $$. Thus $$ a_n = -3 \cdot 2^n + 2 \cdot 3^n $$.
Using $$ (p,q) = (3,2) $$, we get $$ s = 2 $$ and $$ t = 3 $$. Thus $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$.

Thus from both values we get the same formulae $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$.

Lets prove that formulae is correct:

Suppose $$ n $$ is arbitrary natural number. Suppose $$ \forall k < n (a_k = 2 \cdot 3^k - 3 \cdot 3^k) $$. Thus we have following
possible values of $$ n $$:

- Case $$ n = 0 $$        
  $$ 2 \cdot 3^0 - 3 \cdot 2^0 = 2-3 = -1 = a_0 $$. Thus $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$.      

- Case $$ n = 1 $$    
  $$ 2 \cdot 3^1 - 3 \cdot 2^1 = 2-3 = 0 = a_1 $$. Thus $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$.     

- Case $$ n \ge 2 $$     
  Since $$ n-1 < n $$, by induction hypothesis $$ a_{n-1} = 2 \cdot 3^{n-1} - 3 \cdot 2^{n-1} $$. Similarly since $$ n-2 < n $$, by
  induction hypothesis we get $$ a_{n-2} = 2 \cdot 3^{n-2} - 3 \cdot 2^{n-2} $$.
  
  Thus $$ 5a_{n-1} - 6a_{n-2} = 5(2 \cdot 3^{n-1} - 3 \cdot 2^{n-1}) - 6(2 \cdot 3^{n-2} - 3 \cdot 2^{n-2}) $$       
  $$ = 10 \cdot 3^{n-1} - 12 \cdot 3^{n-2} - 15 \cdot 2^{n-1} + 18 \cdot 2^{n-2} $$        
  $$ = 10 \times 3 \cdot 3^{n-2} - 12 \cdot 3^{n-2} - 15 \times 2 \cdot 2^{n-2} + 18 \cdot 2^{n-2} $$        
  $$ = 30 \cdot 3^{n-2} - 12 \cdot 3^{n-2} - 30 \cdot 2^{n-2} + 18 \cdot 2^{n-2} $$        
  $$ = 18 \cdot 3^{n-2} - 12 \cdot 2^{n-2} $$        
  $$ = 2 \cdot 3^n - 3 \cdot 2^n $$        
  $$ = a_n $$        
  
  Thus $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$.
  
Thus $$ a_n = 2 \cdot 3^n - 3 \cdot 2^n $$ from all the cases.
  
<hr/>

**Soln11**

Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n (a_k = a_{k-1} + a_{k-2}) $$.
Thus we have following possible cases:

- Case $$ n \le 2 $$    
  Clearly from the given values $$ a_0, a_1, a_2 $$ are fibonacci numbers.

- Case $$ n \ge 3 $$     
  We have $$ a_n = \frac {a_{n-3}} 2 + \frac {3a_{n-2}} 2 + \frac {a_{n-1}} 2 $$       
  $$ = \frac {a_{n-3}} 2 + a_{n-2} + \frac {a_{n-2}} 2 + \frac {a_{n-1}} 2 $$       
  $$ = \frac {a_{n-3} + a_{n-2}} 2 + a_{n-2} + \frac {a_{n-1}} 2 $$       
  Since $$ n-3 < n $$ and $$ n-2 < n $$, thus by our induction hypothesis, we have $$ a_{n-3} + a_{n-2} = a_{n-1} $$.     
  $$ = \frac {a_{n-1}} 2 + a_{n-2} + \frac {a_{n-1}} 2 $$           
  $$ = {a_{n-1}} + a_{n-2} $$
        
  Thus $$ a_n = a_{n-1} + a_{n-2} $$.
  
Thus the given sequence is fibonacci sequence.

<hr/>

**Soln12**

Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n (P_n \text{ contains } F_{n+2} \text{ elements. }) $$.
We have following possible cases:

- Case $$ n = 0 $$       
  Clearly $$ P_0 = \{ \phi \} $$. Thus number of elements are $$ 1 $$. Thus $$ P_n = F_{n+2} $$.     

- Case $$ n = 1 $$      
  Clearly $$ P_1 = \{ \phi, 1 \} $$. Thus number of elements are $$ 2 $$. Thus $$ P_n = F_{n+2} $$.          

- Case $$ n > 1 $$    
  We can easily see that $$ P_n $$ will contain all the elements contained in $$ P_{n-1} $$ and all elements of the set 
  $$ S = \{ X \cup \{n \} \, \vert \, X \in P_{n-2} \} $$. Since $$ X \in P_{n-2} $$, it does not contain the element: "$$ n-1 $$".
  Thus $$ X \cup \{ n \} $$ will not have any consecutive numbers.      
  Clearly number of elements in $$ S $$ is same as number of elements in $$ P_{n-2} $$. Thus total number of elements:      
  $$ P_n = P_{n-1} + P_{n-2} $$.       
  Since $$ n-1 < n $$ and $$ n-2 < n $$, it follows by induction hypothesis, $$ P_{n-1} = F_{n+1} $$ and $$ P_{n-2} = F_n $$.
  Thus $$ P_n = P_{n-1} + P_{n-2} = F_{n+1} + F_{n} = F_{n+2} $$.
  
Thus from all the cases we get $$ P_n = F_{n+2} $$.
  
<hr/>

**Soln13**

**(a)**

Suppose $$ n $$ is an arbitrary integer. Consider the following cases:

- Case $$ n \ge 0 $$      
  Clearly it follows from the theorem 6.4.1 from the book that $$ n = mq+r $$ and $$ 0 \le r < m $$.
   
- Case $$ n < 0 $$       
  Since $$ n < 0 $$, it follows $$ -n > 0 $$. Thus from theorem 6.4.1:      
  $$ \Rightarrow -n = mq+r $$     
  $$ \Rightarrow n = -mq-r $$      
  $$ \Rightarrow n = -mq-r-m+m $$      
  $$ \Rightarrow n = -mq-m+m-r $$      
  $$ \Rightarrow n = (-q-1)m+m-r $$      
  $$ \Rightarrow n = q'm+r' $$, where $$ q' = -q-1 $$ and $$ r' = m - r $$.
        
  Since $$ 0 \le r < m $$, it follows that $$ 0 < m-r < m $$, or $$ 0 < r' < m $$.
  
**(b)**
  
Suppose $$ q_1, r_1 $$ and $$ q_2, r_2 $$ are integers such that:       
$$ n = mq_1 + r_1 $$, where $$ 0 \le r_1 < m $$.                 
and $$ n = mq_2 + r_2 $$ and $$ 0 \le r_2 < m $$.        
It follows that $$ mq_1 + r_1 = mq_2 + r_2 $$.       
Thus $$ (q_1-q_2)m = r_2 - r_1 $$.
  
Suppose $$ q_1 = q_2 + c $$, where $$ c $$ is an integer. Thus we get:      
$$ \Rightarrow (q_2 + c - q_2)m = r_2 - r_1 $$        
$$ \Rightarrow cm = r_2 - r_1 $$

We have following possible cases:

- Case $$ c \ne 0 $$       
  It follows $$ m = \frac {r_2 - r_1} c $$. Thus $$ \vert \, m \, \vert = \frac {\vert \, r_2 - r_1 \, \vert} {\vert c \vert} $$.        
  Since $$ m > 0,  \Rightarrow \vert \, m \, \vert = m $$.  Thus $$ m = \frac {\vert \, r_2 - r_1 \, \vert} {\vert c \vert} $$. Since $$ c \ne 0 $$, it follows 
  $$ m \le \vert \, r_2 - r_1 \, \vert $$.
  
  Since $$ 0 \le r_1 < m $$ and $$ 0 \le r_1 < m $$, it follows that $$ 0 \le \vert \, r_2 - r_1 \, \vert < m $$. Thus it is a contradiction since $$  m \le \vert \, r_2 - r_1 \, \vert $$.
  
  Thus this case $$ c \ne 0 $$ is not possible.
  
- Case $$ c = 0 $$.      
  Since $$ q_1 = q_2 + c $$, it follows $$ q_1 = q_2 $$. Also since $$ cm = r_2 - r_1 $$, it follows $$ r_1 = r_2 $$.
  
Thus from all possible cases $$ q_1 = q_2 $$ and $$ r_1 = r_2 $$. Thus we can conclude that $$ q $$ and $$ r $$ are unique integers.

**(c)**

Suppose $$ n $$ is an arbitrary integer. From part(a), we can easily deduce that if $$ m = 2 $$, then $$ n = 2q + r $$ such that $$ 0 \le r < 2 $$. It follows that there are only two possible values($$ 0,1 $$)
of $$ r $$. Thus if $$ r = 0 $$, it follows $$ n = 2q $$ and if $$ r = 1 $$, it follows $$ n = 2q+1 $$.

Clearly if $$ n = 2q $$, then $$ n $$ is an even integer. and if $$ n = 2q+1 $$ then $$ n $$ is an odd integer. 

Also from part(b), since $$ n = 2q+r $$, then $$ q $$ and $$ r $$ are unique. Thus only one case is possible i.e. either $$ n $$ is even or $$ n $$ is odd but not both.

Since $$ n $$ is arbitrary, it follows that every integer is either even or odd but not both.

<hr/>

**Soln14**

Suppose $$ a $$ is the maximum of $$ 5k $$ and $$ k(k+1) $$. Suppose $$ n > a $$ is an arbitrary integer. Thus by the division algorithm we can choose unique $$ q $$ and
$$ r $$ such that $$ n = kq + r $$ and $$ 0 \le r < k $$.

Suppose $$ q \le 4 $$. Thus $$ n = kq + r \le 4k + r $$. Since $$ 0 \le r < k $$, it follows $$ n \le 4q + r < 4k + k = 5k \le a $$. Thus $$ n < a $$ which is a contradiction.
Thus $$ q > 4 $$, or $$ q \ge 5 $$.

Suppose $$ q < k+1 $$. Thus $$ n = kq + r < k(k+1) + r < k(k+1) + r < k(k+1) \le a $$. Thus $$ n < a $$ which is a contradiction. Thus $$ q \ge k+1 $$. 

Since $$ 0 \le r < k $$, it follows $$ r \le k+1 $$. Since $$ q \ge k+1 $$ and $$ r \le k+1 $$, it follows $$ q \ge r $$.  

Thus $$ q^2 \ge q(k+1) = qk + q \ge qk + r = n $$. Thus $$ q^2 \ge n $$.
  
From example 6.1.3, we know that $$ 2^n > n^2 $$, if $$ n \ge 5 $$. Since $$ q \ge 5 $$, it follows $$ 2^q > q^2 $$. Since $$ q^2 \ge n $$, it follows $$ 2^q > n $$.

Since $$ n = kq + r $$ and $$ 0 \le r < k $$, it follows $$ 2^n \ge 2^{kq} = {2^q}^k $$. Since $$ 2^q > n $$, it follows $$ 2^n \ge  {2^q}^k > n^k $$.

<hr/>

**Soln15**

**(a)**

Suppose $$ k $$ is a positive integer. Suppose $$ \forall p < k (a_1 f_1 + a_2 f_2 + \cdot \cdot \cdot + a_p f_p) \in \mathcal O(g) $$.

Since $$ k-1 < k $$, it follows from induction hypothesis that there exist some $$ a \in \mathbb Z^+ $$ and $$ c \in R $$ such that 
$$ \forall n > a  ( \vert \, a_1 f_1(n) + a_2 f_2(n) + \cdot \cdot \cdot + a_{k-1} f_{k-1}(n) \, \vert \le c \vert \, g(n) \, \vert $$.

Since $$ f_k \in \mathcal O(g) $$, it follows that for some $$ a' \in \mathbb Z^+ $$ and $$ c' \in \mathbb R $$, $$ \vert \, f_k(n) \, \vert \le c' \vert \, g(n) \, \vert $$.  
   
Now consider $$ \vert \, a_1 f_1(n) + a_2 f_2(n) + \cdot \cdot \cdot + a_{k-1} f_{k-1}(n) + a_k f_k(n) \, \vert $$        
$$ \le \vert \, a_1 f_1(n) + a_2 f_2(n) + \cdot \cdot \cdot + a_{k-1} f_{k-1}(n) \, \vert + \vert \, a_k f_k(n) \, \vert $$ (By triangle inequality)               
$$ \le c \vert \, g(n) \, \vert + \vert \, a_k f_k(n) \, \vert $$ for all $$ n > a $$ (By induction hypothesis for k-1)            
$$ \le c \vert \, g(n) \, \vert + c' \vert \, g(n) \, \vert $$ for all $$ n > a'' $$ where $$ a'' $$ is maximum of $$ a $$ and $$ a' $$             
$$ = c'' \vert \, g(n) \, \vert $$ where $$ c'' = c+c' $$                  

Thus $$ f \in \mathcal O(g) $$ where $$ f(n) = a_1 f_1(n) + a_2 f_2(n) + \cdot \cdot \cdot + a_k f_k(n) $$.

**(b)**
   
From Ex14 part(a), we know that for every positive integer $$ k $$, $$ \forall n > a (2^n \ge n^k) $$ for some positive integer $$ a $$. It follows that 
functions $$ f_1 = 1 = n^0 $$, $$ f_2 = n^2 $$, ... $$ f_k = n^k $$ belongs to O(g) where $$ g = 2^n $$. 

Now the required proof directly follows from part(a) of this solution.
   
<hr/>

**Soln16**
      
**(a)**
      
By division algorithm we know that for some $$ q $$ and $$ r $$,  $$ a = dq + r $$ where $$ 0 \le r < d $$.
      
Also since $$ d \in S $$, it follows that for some $$ s,t \in \mathbb Z $$, $$ d = as + bt $$. Putting $$ d = as + bt $$ in $$ a = dq + r $$, we get:       
$$ \Rightarrow a = (as+bt)q + r $$        
$$ \Rightarrow a-asq = btq + r $$        
$$ \Rightarrow (1-sq)a + (-tq)b = r $$        
Thus s' = 1-sq $$ and $$ t' = -tq $$, $$ r = s'a + t'b $$.

Since $$ 0 \le r $$, we have two cases:

- Case $$ r \ne 0 $$        
  Thus $$ r > 0 $$ or $$ r \in Z^+ $$. It follows that $$ r \in S $$. Since $$ d $$ is the smallest element in $$ S $$, it follows $$ d \le r $$. But this 
  contradicts with $$ 0 \le r < d $$. Thus $$ r \ne 0 $$ is not possible.
   
- Case $$ r = 0 $$      
  Thus $$ r \notin Z^+ $$. Thus $$ r \notin S $$. It follows $$ a = dq+r = dq+0 = dq $$. Thus $$ d \, \vert \, a $$.
 
Similarly it can be proved that $$ d \, \vert \, b $$.
 
**(b)**

Since $$ c \, \vert \, a $$, it follows that for some integer $$ p $$, $$ a = pc $$. Similarly since $$ c \, \vert \, b $$, it follows that for some integer 
$$ q $$, $$ b = qc $$.     
Since $$ d \in S $$, it follows that $$ d = as + bt $$. Thus $$ d = pcs + qct = c(ps+qt) $$. Thus $$ c \, \vert \, d $$.

Also since from part(a), $$ d $$ divides both $$ a $$ and $$ b $$. Thus any number which divides $$ a $$ and $$ b $$ must divides $$ d $$. Thus $$ c \le d $$.
It follows that $$ d $$ is greatest common divisor of $$ a $$ and $$ b $$.
  
<hr/>

**Soln17**

**(a)**

Suppose $$ a,b,p $$ are natural numbers such that $$ p \, \vert \, ab $$ and $$ p $$ is prime. Suppose $$ d $$ is the greatest common divisor of $$ a $$ and $$ p $$.
Thus from Ex-16 part(b), $$ d = as + pt $$ for some integers $$ s, t $$. Since $$ d $$ divides $$ p $$ and $$ p $$ is a prime number, there are following possible cases:

- Case $$ d = p $$        
  Since $$ d $$ is greatest common divisor of $$ a $$ and $$ p $$, it follows $$ d $$ divides $$ a $$. Since $$ d = p $$, it follows $$ p $$ divides $$ a $$, or $$ p \, \vert \, a $$.
   
- Case $$ d = 1 $$      
  Since $$ d = as + pt $$, it follows $$ 1 = as + pt $$. Since $$ p \, \vert \, ab $$, it follows for some integer $$ q $$, $$ ab = pq $$. Thus $$ a = \frac {pq} b $$.
  Putting $$ a = \frac {pq} b $$ in $$ as + pt = 1 $$, we get $$ \frac {pqs} b + pt = 1 $$, or $$ pqs + pbt = b $$, or $$ p(qs + bt) = b $$. Thus $$ p \, \vert \, b $$.
    
Thus from both cases, either $$ p \, \vert \, a $$ or $$ p \, \vert \, b $$.

**(b)**

Suppose $$ n $$ is arbitrary. Suppose $$ \forall k < n ( p \, \vert \, a_1 a_2 \cdot \cdot \cdot a_k \to (p \, \vert \, a_1 \lor p \, \vert \, a_2 \lor \cdot \cdot \cdot \lor p \, \vert \, a_k) ) $$.

Suppose $$  p \, \vert \, a_1 a_2 \cdot \cdot \cdot a_{n-1} a_n $$, or $$ p \, \vert \, (a_1 a_2 \cdot \cdot \cdot a_{n-1}) \, a_n $$. Thus from part(a), it follows either
either $$ p \, \vert \, a_1 a_2 \cdot \cdot \cdot a_{n-1} $$ or $$ p \, \vert \, a_n $$.

Since $$ n-1 < n $$, it follows from induction hypothesis that if $$ p \, \vert \, a_1 a_2 \cdot \cdot \cdot a_{n-1} $$, then $$ p \, \vert \, a_1 \lor p \, \vert \, a_2 \lor \cdot \cdot \cdot \lor p \, \vert \, a_{n-1} $$.

Thus it follows that $$ p \, \vert \, a_1 \lor p \, \vert \, a_2 \lor \cdot \cdot \cdot p \, \vert \, \lor a_{n-1} \lor p \, \vert \, a_n $$.

<hr/>

**Soln18**

Base Case:

Suppose $$ j = 1 $$. Since $$ p_1 = q_1 q_2 \cdot \cdot \cdot q_k $$ and $$ p_1 $$ is prime it follows that $$ k = 1 $$. Thus $$ p_1 = q_1 $$.

Induction Step:

Suppose for $$ j \ge 1 $$ and for all $$ k \ge 1 $$, if $$ p_1 p_2 \cdot \cdot \cdot p_j = q_1 q_2 \cdot \cdot \cdot q_k $$, then $$ j = k $$ and $$ p_i = q_i $$ where
$$ 1 \le i \le j $$.

Now suppose $$ p_1 p_2 \cdot \cdot \cdot p_{j+1} = q_1 q_2 \cdot \cdot \cdot q_k $$. Clearly $$ k \ge 2 $$, since if $$ k = 1 $$ then $$ p_1 p_2 \cdot \cdot \cdot p_{j+1} = q_1 $$.
Thus $$ q_1 $$ will not be prime.
         
**Note:** $$ j $$ is same in last two statements. But $$ k $$ is different. In former statement $$ j = k $$ if $$ p_1 p_2 \cdot \cdot \cdot p_j = q_1 q_2 \cdot \cdot \cdot q_k $$,
but in the later statement above, $$ k $$ may or may not be equal to $$ j $$. Or first statement is hypothesis $$ P(j) $$ and second statement is $$ P(j+1) $$ which we shall prove
 to be true if hypothesis is true.
         

Clearly $$ p_{j+1} \; \vert \; p_1 p_2 \cdot \cdot \cdot p_{j+1} $$. It follows $$ p_{j+1} \; \vert \; q_1 q_2 \cdot \cdot \cdot q_k $$. Thus from Ex17 part(b), 
it follows $$ p_{j+1} \; \vert \; q_i $$, where $$ 1 \le i \le k $$. But $$ q_i \le q_k $$. Thus $$ p_{j+1} \le q_k $$.

Also since $$ q_k \; \vert \; q_1 q_2 \cdot \cdot \cdot q_k $$, it follows $$ q_k \; \vert \; p_1 p_2 \cdot \cdot \cdot p_{j+1} $$. Thus from Ex17 part(b), 
it follows $$ q_k \; \vert \; p_i $$, where $$ 1 \le i \le j+1 $$. But $$ p_i \le p_{j+1} $$. Thus $$ q_k \le p_{j+1} $$.
 
Thus $$ p_{j+1} = q_k $$. Now since $$ p_1 p_2 \cdot \cdot \cdot p_{j+1} = q_1 q_2 \cdot \cdot \cdot q_k $$, it follows $$ p_1 p_2 \cdot \cdot \cdot p_{j} = q_1 q_2 \cdot \cdot \cdot q_{k-1} $$.

But from the induction hypothesis, if $$ p_1 p_2 \cdot \cdot \cdot p_{j} = q_1 q_2 \cdot \cdot \cdot q_{k-1} $$ then $$ p_i = q_i $$ and $$ j = k-1 $$. Thus $$ j+1 = k $$.

Thus if $$ p_1 p_2 \cdot \cdot \cdot p_{j+1} = q_1 q_2 \cdot \cdot \cdot q_k $$, then $$ j+1 = k $$ and $$ p_i = q_i $$.

<hr/>

**Soln19**

Since $$ a_{n+1} = 1 + \sum_{i=0}^{n} a_i $$, it follows $$ a_n = 1 + \sum_{i=0}^{n-1} a_i $$.

|---
| $$ n $$ | $$ a_n = 1 + \sum_{i=0}^{n-1} a_i $$ |
|:-:
| $$ 0 $$ | $$ 1 = 2^0 $$ | 
| $$ 1 $$ | $$ 2 = 2^1 $$ | 
| $$ 2 $$ | $$ 4 = 2^2 $$ | 
| $$ 3 $$ | $$ 8 = 2^3 $$ | 
| $$ 4 $$ | $$ 16 = 2^4 $$ | 
| $$ 5 $$ | $$ 32 = 2^5 $$ |
 
Thus it appears that $$ a_n = 2^n $$.

Now we shall prove the formulae is correct.

Base Case:

For $$ n = 0 $$, $$ 2^n = 2^0 = 1 = a_0 = a_n $$. 

Induction step:

Suppose formulae is correct for $$ n \ge 1 $$. Thus $$ a_n = 2^p $$.

Thus $$ a_{n+1} = 1 + \sum_{i=0}^n $$      
$$ = 1 + \sum_{i=0}^{n-1} + a_n $$     
$$ = a_n + a_n $$       
Using hypothesis:     
$$ = 2^n + 2^n $$,     
$$ = 2^{n+1} $$     

Thus $$ P(n+1) $$ is true if $$ P(n) $$ is true.

<hr/>

**Soln20**

|---
| $$ n $$ | $$ a_n = 1 + \frac 1 {a_{n-1} } $$ |
|:-:
| $$ 0 $$ | $$ \frac 1 1 $$ | 
| $$ 1 $$ | $$ \frac 2 1 $$ | 
| $$ 2 $$ | $$ \frac 3 2 $$ | 
| $$ 3 $$ | $$ \frac 5 3 $$ | 
| $$ 4 $$ | $$ \frac 8 5 $$ | 
| $$ 5 $$ | $$ \frac {13} 8 $$ |
 
It appears from above table that formulae is $$ a_n = \frac {F_{n+2} } {F_{n+1} } $$.
 
Proof:

Base Case:

For $$ n = 0 $$, it follows directly from the table.

Induction Step:

Suppose it is true for $$ n $$. Thus $$ a_n = \frac {F_{n+2} } {F_{n+1} } $$.

Now $$ a_{n+1} = 1 + \frac 1 {a_n} $$       
$$ = 1 + \frac {F_{n+1} } {F_{n+2} } $$       
$$ = \frac {F_{n+2} + F_{n+1} } {F_{n+2} } $$         
$$ = \frac {F_{n+3} } {F_{n+2} } $$        
$$ = \frac {F_{n+1+2} } {F_{n+1+1} } $$.      
 
Thus if $$ P(n) $$ is true then $$ P(n+1) $$ is also true.

<hr/>








   
  




  



 








 


       
        



   
   
  