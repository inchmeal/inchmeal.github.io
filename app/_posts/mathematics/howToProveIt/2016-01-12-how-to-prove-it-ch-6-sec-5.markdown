---
layout: blog
title:  "How To Prove It, Ch-6 Sec-6.5, Closures Again"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 6, Section - 6.5, Closures Again from Velleman's book **How To Prove It**.

<!--more-->

<hr/>

### Summary

- Suppose $$ R $$ is a relation on set $$ A $$. $$ R^n = R \circ R \circ \cdot \cdot \cdot \circ R $$(n times).
- Suppose $$ R $$ is a relation on set $$ A $$. Then $$ R^m \circ R^n = R^{m+n} $$.
- Transitive closure of relation $$ R $$ on set $$ A $$ is $$ \cup_{n \in \mathbb Z^+} R^n $$.
  
<hr/>

**Soln1**

**(a)**

We need to prove the following:

- $$ \cap \mathcal F \ne \phi $$.        
- $$ \cap \mathcal F $$ is closed under $$ f $$. Or $$ \forall x \in \cap \mathcal F (f(x) \in \cap \mathcal F) $$.        
- $$ B \subseteq \cap \mathcal F \subseteq A $$.        
- $$ \cap \mathcal F $$ is the closure of $$ B $$ under $$ f $$.      

Now we will prove them one by one: 
 
- *Proof for:* $$ \cap \mathcal F \ne \phi $$.

  Since $$ f: A \to A $$, it follows that $$ \forall x \in A(f(x) \in A) $$. Thus $$ A $$ is closed under $$ f $$. Also since $$ B \subseteq A $$,
  it follows that $$ A \in \mathcal F $$. Thus $$ \mathcal F \ne \phi $$.
 
- *Proof for:* $$ \cap \mathcal F $$ is closed under $$ f $$.

  Suppose $$ x \in \cap \mathcal F $$. Suppose $$ C $$ is an arbitrary set in $$ \mathcal F $$. Since $$ \cap \mathcal F \subseteq C $$, it follows 
  that $$ x \in C $$. Since $$ C $$ is closed under $$ f $$ and $$ x \in C $$, it follows that $$ f(x) \in C $$. Since $$ C $$ was arbitrary element
  of $$ \mathcal F $$, it follows that $$ \forall C \in \mathcal F(f(x) \in C) $$. It follows that $$ f(x) \in \cap \mathcal F $$. Since $$ x $$ is
  arbitrary, it follows that $$ \forall x \in \cap \mathcal F (f(x) \in \cap \mathcal F) $$.

- *Proof for:* $$ B \subseteq \cap \mathcal F \subseteq A $$.         

  Suppose $$ x \in \cap \mathcal F $$. Suppose $$ C $$ is an arbitrary set in $$ \mathcal F $$. Since $$ \cap \mathcal F \subseteq C$$, it follows
  $$ x \in C $$. Since $$ C \subseteq A $$, it follows $$ x \in A $$. Since $$ x $$ is arbitrary, thus $$ \cap \mathcal F \subseteq A $$.
  
  Suppose $$ x \in B $$. Suppose $$ C $$ is an arbitrary set in $$ \mathcal F $$. Since $$ B \subseteq C $$, it follows $$ x \in C $$.
  Since $$ C $$ is an arbitrary set, it follows $$ \forall C \in \mathcal F(x \in C) $$. It follows that $$ x \in \cap \mathcal F $$. Since $$ x $$ is arbitrary,
  it follows that $$ B \subseteq \cap \mathcal F $$.

- *Proof for:* $$ \cap \mathcal F $$ is the closure of $$ B $$ under $$ f $$.            
  
  Thus we need to prove that $$ \cap \mathcal F $$ the smallest set closed under $$ f $$ such that $$ B \subseteq \cap \mathcal F \cap A $$.       
  Suppose $$ C $$ is a set such that $$ B \subseteq C \subseteq A $$ and $$ C $$ is closed under $$ f $$. Thus $$ C \in \mathcal F $$. It follows that $$ \cap \mathcal F \subseteq C $$.
  Since $$ \cap \mathcal F $$ is closed under $$ f $$ and $$ B \subseteq \cap \mathcal F \cap A $$ and $$ \cap \mathcal F \subseteq C $$, it follows 
  that $$ \cap \mathcal F $$ is the smallest set closed under $$ f $$ such that $$ B \subseteq \cap \mathcal F \cap A $$.  

**(b)**

Suppose $$ C = \cup_{n \in \mathbb Z^+} B_n $$  

We need to prove the following:
            
- $$ B \subseteq C \subseteq A $$.       
- $$ C $$ is closed under $$ f $$.        
- $$ C $$ is the smallest set closed under $$ f $$ such that $$ B \subseteq C \subseteq A $$.             

Now we shall prove each as follows:

- $$ B \subseteq C \subseteq A $$:       

  It directly follows that $$ B = B_1 \subseteq \cup_{n \in \mathbb Z^+} B_n $$. Also since $$ f: A \to A $$ and $$ B_{n+1} = \{ f(x) \, \vert \, x \in B_n \} $$,
  if follows that $$ B_n \subseteq A $$. Thus $$ \cup_{n \in \mathbb Z^+} B_n \subseteq A $$.
  
- $$ C $$ is closed under $$ f $$:       
        
  Suppose $$ x \in C $$. Thus for some $$ n \in Z^+ $$, $$ x \in B_n $$. It follows that $$ f(x) \in B_{n+1} $$. But $$ B_{n+1} \subseteq C $$. Thus
  $$ f(x) \in C $$. Since $$ x $$ was arbitrary, it follows that $$ \forall x \in C(f(x) \in C) $$. Thus $$ C $$ is closed under $$ f $$.
  
- $$ C $$ is the smallest set closed under $$ f $$ such that $$ B \subseteq C \subseteq A $$:             

  Suppose there is a set $$ D $$ closed under $$ f $$ such that $$ B \subseteq D \subseteq A $$. Thus we need to prove that $$ C \subseteq D $$.
  Thus we need to prove that $$ \forall n \in Z^+ (B_n \subseteq D) $$. We shall prove this using induction:
    
  Base Case:
    
  For $$ n = 1, B_1 = B $$. Thus by assumption for our set $$ D $$, $$ B \subseteq D $$.
     
  Induction Step:
      
  Suppose for $$ n \in Z^+ $$, $$ B_n \subseteq D $$.
   
  Suppose $$ y \in B_{n+1} $$. Thus by the definition of $$ B_n $$, it follows that there exists some $$ x \in B_n $$ such that $$ y = f(x) $$. But by our hypothesis,
   $$ B_n \subseteq D $$, thus $$ x \in D $$. Since $$ D $$ is a closed set and $$ x \in D $$, it follows that $$ f(x) \in D $$, or $$ y \in D $$. Since $$ y $$ is arbitrary,
   it follows that $$ B_{n+1} \in D $$.
   
  Thus $$ \forall n \in Z^+ (B_n \subseteq D) $$, or $$ \cup_{n \in \mathbb Z^+} B_n \subseteq D $$. Thus $$ C \subseteq D $$.
  
<hr/>
 
**Soln2**

Closure of set $$ \{ 0 \} $$ under $$ f $$ is : $$ \{ 0,1,2,3,\,.... \} $$.
 
<hr/>

**Soln3**

This can be proved in a similar way like in Ex-1 part(a).

Suppose $$ \mathcal H = \{ C \, \vert \, B \subseteq C \subseteq A \text{ and } \forall f \in \mathcal F(C \text{ is closed under } f) \} $$.

We shall now prove that $$ \cap \mathcal H \ne \phi $$ and $$ \cap \mathcal H $$ is closure of $$ B $$ on $$ f $$. We will prove this by proving the following:

- $$ \cap \mathcal H \ne \phi $$.        
- $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.        
- $$ B \subseteq \cap \mathcal H \subseteq A $$.        
- $$ \cap \mathcal H $$ is the smallest set such that $$ B \subseteq \cap \mathcal H \subseteq A $$ and $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.
     
Lets prove each of them:
     
- $$ \cap \mathcal H \ne \phi $$.        
  
  We know that $$ B \subseteq A \subseteq A $$. Also $$ \forall f \in \mathcal F(A \text{ is closed on } f ) $$. Thus $$ A \in \mathcal H $$. It follows that
  $$ \cap \mathcal H \ne \phi $$.
  
- $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.       

  Suppose $$ f \in \mathcal F $$. Suppose $$ x \in \cap \mathcal H $$. Suppose $$ C $$ is an arbitrary element of $$ \mathcal H $$. Since $$ \cap \mathcal H \subseteq C $$,
  it follows that $$ x \in C $$. Since $$ \forall f \in \mathcal F(C \text{ is closed on } f ) $$, it follows that $$ f(x) \in C $$. Since $$ C $$ was arbitrary,
  it follows that $$ \forall C \in \mathcal H(f(x) \in C) $$. Thus $$ f(x) \in \cap \mathcal H $$. Since $$ x $$ was arbitrary, it follows that $$ \cap \mathcal H $$
  is closed on $$ f $$. Since $$ f $$ is arbitrary, it follows that $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.
  
- $$ B \subseteq \cap \mathcal H \subseteq A $$.       

  Suppose $$ x \in \cap \mathcal H $$. Suppose $$ C $$ is an arbitrary element of $$ \mathcal H $$. Since $$ \cap \mathcal H \subseteq C $$, it follows that $$ x \in C $$.
  Since $$ C \subseteq A $$, it follows $$ x \in A $$. Since $$ x $$ is arbitrary, it follows that $$ \cap \mathcal H \subseteq A $$.
  
  Suppose $$ x \in B $$. Suppose $$ C $$ is an arbitrary element of $$ \mathcal H $$. Since $$ C \subseteq B $$, it follows that $$ x \in C $$. Since $$ C $$ was arbitrary,
  it follows that $$ \forall C \in \mathcal H(x \in C) $$. Thus $$ x \in \cap \mathcal H $$. Since $$ x $$ is arbitrary, it follows $$ B \subseteq \cap \mathcal H $$.   
  
- $$ \cap \mathcal H $$ is the smallest set such that $$ B \subseteq \cap \mathcal H \subseteq A $$ and $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.     

  Suppose $$ D $$ is a set such that $$  B \subseteq D \subseteq A $$ and $$ \forall f \in \mathcal F(D \text{ is closed on } f ) $$. Thus $$ D \in \mathcal H $$.
  It follows that $$ \cap \mathcal H \subseteq D $$. Thus $$ \cap \mathcal H $$ is the smallest set such that $$ B \subseteq \cap \mathcal H \subseteq A $$ and 
  $$ \forall f \in \mathcal F(\cap \mathcal H \text{ is closed on } f ) $$.
   
<hr/>
  
**Soln4**
  
We shall follow the proof from Ex-1(b).
  
Suppose $$ B_1 = B $$ and $$ \forall n > 1(B_{n+1} = \{ f(x,y) \, \vert \, \exists k < {n+1} (x \in B_k) \text{ and } \exists k < {n+1}(y \in B_k) \} $$. Suppose $$ C = \cup_{n \in Z^+}B_n $$. 

Note that $$ B_{n+1} $$ is different from $$ B_{n+1} $$ in Ex-1 part(b).
 
Now we shall prove that $$ C $$ is the closure of $$ B $$ on $$ f $$.
  
We need to prove the following:
            
- $$ B \subseteq C \subseteq A $$.       
- $$ C $$ is closed under $$ f $$.        
- $$ C $$ is the smallest set closed under $$ f $$ such that $$ B \subseteq C \subseteq A $$.             

Now we shall prove each as follows:

- $$ B \subseteq C \subseteq A $$:       

  It directly follows that $$ B = B_1 \subseteq \cup_{n \in \mathbb Z^+} B_n $$. Also since $$ f: A \times A \to A $$ and $$ B_{n+1} = \{ f(x,y) \, \vert \, x \in B_n \text{ and } y \in B_n \} $$,
  if follows that $$ B_n \subseteq A $$. Thus $$ \cup_{n \in \mathbb Z^+} B_n \subseteq A $$.
  
- $$ C $$ is closed under $$ f $$:       
        
  Suppose $$ x \in C $$. Suppose $$ y \in C $$. Thus for some $$ m \in Z^+ $$, $$ x \in B_m $$. Similarly for some $$ n \in Z^+ $$, $$ y \in B_n$$. Now consider following cases:
  
  - Case $$ m \ge n $$       
  
    Then by definition of $$ B_m $$, it follows that $$ f(x,y) \in B_{m+1} $$. Thus $$ f(x,y) \in C $$.
    
  - Case $$ m < n $$       
  
    Then by definition of $$ B_n $$, it follows that $$ f(x,y) \in B_{n+1} $$. Thus $$ f(x,y) \in C $$.
  
  Thus $$ f(x,y) \in C $$ in all possible cases. Since $$ x $$ and $$ y $$ are arbitrary, it follows that $$ \forall x \in C \forall y \in C(f(x,y) \in C) $$. Thus $$ C $$
  is closed on $$ f $$.
  
- $$ C $$ is the smallest set closed under $$ f $$ such that $$ B \subseteq C \subseteq A $$:             

  Suppose there is a set $$ D $$ closed under $$ f $$ such that $$ B \subseteq D \subseteq A $$. Thus we need to prove that $$ C \subseteq D $$.
  Thus we need to prove that $$ \forall n \in Z^+ (B_n \subseteq D) $$. We shall prove this using strong induction:
    
  Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n(B_k \subseteq D) $$(induction hypothesis).
  Consider the following cases:         
    
  - Case $$ n = 1 $$         
    For $$ n = 1, B_1 = B $$. Thus by assumption for our set $$ D $$, $$ B \subseteq D $$.
     
  - Case $$ n > 1 $$
    
    Suppose $$ z \in B_n $$. Since $$ n > 1 $$, it follows that $$ z = f(x,y) $$ where $$ x \in B_k $$ and $$ y \in B_l $$ such that $$ k,l < n $$.
    Since $$ k < n $$ and $$ l < n $$, then by our induction hypothesis $$ B_k \subseteq D $$ and $$ B_l \subseteq D $$. It follows that $$ x \in D $$ as well as
    $$ y \in D $$. Since $$ D $$ is closed under $$ f $$, it follows that $$ f(x,y) \in D $$. Thus $$ z \in D $$. Since $$ z $$ was arbitrary, it follows that
    $$ B_n \subseteq D $$.
    
  Thus $$ \forall n \in Z^+ (B_n \subseteq D) $$, or $$ \cup_{n \in \mathbb Z^+} B_n \subseteq D $$. Thus $$ C \subseteq D $$.

<hr/>
  
**Soln5**
  
Using Soln4, we have:      
$$ B_1 = B = \{ x \, \vert \, x \text{ is prime number } \} = \{ 2,3,5,7,... \} $$.      
$$ B_2 = \{ 2 \times 2, 2 \times 3, 2 \times 5, 2 \times 7, .... , 3 \times 3, 3 \times 5, 3 \times 7, ..... \} $$.      

As we can see, $$ C = \cup_{n \in Z^+} B_n $$ will consists of all possible products of prime numbers. Since every natural number greater than 1 can be expressed as a product
of primes, it follows that $$ C $$ contains all natural numbers other than one. Thus $$ C = \{ n \, \vert \, n \ge 2 \} $$.
  
<hr/>
  
**Soln6**

**(a)**  
  
Suppose $$ B_n $$ is defined as follows:
  
For $$ n = 1 $$, $$ B_n = B_1 = B $$.       
For $$ n > 1 $$, $$ B_{n+1} = \{ f(x,y) \; \vert \; f \in \mathcal F \text{ and } \exists k < {n+1} (x \in B_k) \text{ and } \exists k < {n+1}(y \in B_k) \} $$      
       
Suppose $$ C = \cup_{i \in Z^+} B_n $$. Now we will prove that $$ C $$ is closure of $$ B $$ under $$ \mathcal F $$. We shall prove this by proving the following:

- $$ B \subseteq C \subseteq A $$.       
- $$ \forall f \in \mathcal F(C \text{ is closed under } f) $$.        
- $$ C $$ is the smallest set closed under $$ \mathcal F $$ such that $$ B \subseteq C \subseteq A $$.             

Lets prove each of the above:
        
- $$ B \subseteq C \subseteq A $$.       
        
  Clearly $$ B_1 \subseteq \cup_{i \in Z^+} B_n $$. Since $$ B_1 = B $$, it follows that $$ B \subseteq C $$.  

  Since $$ f: A \times A \to A $$, We can clearly see that $$ B_n \subseteq A $$. Since $$ C = \cup_{i \in Z^+} B_n $$, it follows that $$ C \subseteq A $$.             

- $$ \forall f \in \mathcal F(C \text{ is closed under } f) $$.

  Or we may also say that we need to prove $$ \forall x \in C \forall y \in C (\forall f \in \mathcal F (f(x,y) \in C)) $$.         

  Suppose $$ x \in C $$. Suppose $$ y \in C $$. Since $$ C = \cup_{i \in Z^+} B_n $$, it follows that for some $$ m \in \mathbb N $$
  and $$ n \in \mathbb N $$ such that $$ x \in B_m $$ and $$ y \in B_n $$. Consider the following cases:
  
  - Case $$ m \ge n $$       
  
    Then by definition of $$ B_m $$, it follows that $$ \forall f \in \mathcal F(f(x,y) \in B_{m+1}) $$. Since $$ B_{m+1} \subseteq C $$, it follows that
    $$ \forall f \in \mathcal F(f(x,y) \in C) $$.
    
  - Case $$ m < n $$       
  
    Then by definition of $$ B_n $$, it follows that $$ \forall f \in \mathcal F(f(x,y) \in B_{n+1}) $$. Since $$ B_{n+1} \subseteq C $$, it follows that
    $$ \forall f \in \mathcal F(f(x,y) \in C) $$.

  Thus from both cases $$ \forall f \in \mathcal F(f(x,y) \in C) $$. Since $$ x $$ and $$ y $$ are arbitrary, it follows that $$ \forall x \in C \forall y \in C (\forall f \in \mathcal F (f(x,y) \in C)) $$.
  
- $$ C $$ is the smallest set closed under $$ \mathcal F $$ such that $$ B \subseteq C \subseteq A $$.             

  Suppose there is a set $$ D $$ closed under $$ f $$ such that $$ B \subseteq D \subseteq A $$. Thus we need to prove that $$ C \subseteq D $$.
  Thus we need to prove that $$ \forall n \in Z^+ (B_n \subseteq D) $$. We shall prove this using strong induction:
      
  Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n(B_k \subseteq D) $$(induction hypothesis).
  Consider the following cases:         
      
  - Case $$ n = 1 $$         
    For $$ n = 1, B_1 = B $$. Thus by assumption for our set $$ D $$, $$ B \subseteq D $$.
       
  - Case $$ n > 1 $$
      
    Suppose $$ z \in B_n $$. Since $$ n > 1 $$, it follows that for some function $$ f \in \mathcal F $$, $$ z = f(x,y) $$ where $$ x \in B_k $$ and $$ y \in B_l $$ such that $$ k,l < n $$. 
    Since $$ k < n $$ and $$ l < n $$, then by our induction hypothesis $$ B_k \subseteq D $$ and $$ B_l \subseteq D $$, it follows that $$ x \in D $$ as well as $$ y \in D $$.
    Since $$ D $$ is closed under $$ f $$, it follows that $$ f(x,y) \in D $$. Since $$ z $$ is arbitrary, it follows that $$ B_n \subseteq D $$.  
     
  Thus $$ \forall n \in Z^+ (B_n \subseteq D) $$, or $$ \cup_{n \in \mathbb Z^+} B_n \subseteq D $$. Thus $$ C \subseteq D $$.

**(b)**
  
We know from part(a), that closure of $$ B $$ on $$ \mathcal F $$ is $$ C = \cup_{i \in Z^+} B_n $$, where $$ B_n $$ is defined as:
   
For $$ n = 1 $$, $$ B_n = B_1 = B $$.       
For $$ n > 1 $$, $$ B_{n+1} = \{ f(x,y) \; \vert \; f \in \mathcal F \text{ and } \exists k < {n+1} (x \in B_k) \text{ and } \exists k < {n+1}(y \in B_k) \} $$      
  
We are given that set $$ S = \{ a + b \sqrt 2 \; \vert \; a \in \mathbb Q, b \in \mathbb Q \} $$.
Also, it is given $$ B = \mathbb Q \cup \{ \sqrt 2 \} $$.

We need to prove: $$ S = C $$. Thus we shall prove:
 
- $$ S \subseteq C $$.     
- $$ C \subseteq S $$.      

Now we shall prove both statements:

- $$ S \subseteq C $$.     

  Suppose $$ x \in S $$. Thus for some $$ a \in \mathbb Q $$ and $$ b \in \mathbb Q $$, $$ x = a + b \sqrt 2 $$. Since $$ Q \subseteq B $$, it follows that
  $$ \{ a,b \} \subseteq B $$. Also since $$ \{ \sqrt 2 \} \subseteq B $$, we can also say that $$ \{ a, b, \sqrt 2 \} \subseteq B $$.        
  Since $$ \{ a, b, \sqrt 2 \} \subseteq B $$, then by the definition of $$ B_n $$ it follows that $$ g(b, \sqrt 2) \in B_2 $$. Thus $$ b \sqrt 2 \in B_2 $$.
  Similarly since $$ a \in B_1 $$ and $$ b \sqrt 2 \in B_2 $$, it follows that $$ f(a, b \sqrt 2) \in B_3 $$. Thus $$ a + b \sqrt 2 \in B_3 $$. Since $$ B_3 \subseteq C $$,
  it follows that $$ a + b \sqrt 2 \in C $$. Thus $$ x \in C $$. Since $$ x $$ was arbitrary, it follows that $$ S \subseteq C $$.
  
- $$ C \subseteq S $$.       

  Thus we need to prove that $$ \cup_{n \in Z^+} B_n \, \subseteq \, S $$. We can prove this by proving that $$ \forall n \in Z^+ (B_n \subseteq S) $$. 
  We shall prove this using strong induction. Suppose $$ n $$ is a natural number. Suppose our induction hypothesis is $$ \forall k < n(B_k \subseteq S) $$.
   
  We have following possible cases:
   
  - Case $$ n = 1 $$.       

    Thus $$ B_n = B_1 = B $$. Suppose $$ a \in \mathbb Q $$. Thus $$ a = a + 0 \cdot \sqrt 2 $$. Thus $$ a \in S $$. It follows that $$ Q \subseteq S $$. Also 
    $$ \sqrt 2 = 0 + 1 \cdot \sqrt 2 \in S $$, it follows that $$ \sqrt 2 \in S $$. Thus $$ Q \cup \{ \sqrt 2 \} \subseteq S $$. Or $$ B \subseteq S $$.
         
  - Case $$ n > 1 $$.    
         
    Suppose $$ x \in B_n $$. Since $$ n > 1 $$ and by the definition of $$ B_n $$, there exist $$ p \in B_i $$ and $$ q \in B_j $$ such that either $$ x = f(p,q) $$
    or $$ x = g(p,q) $$ where $$ i < n $$ and $$ j < n $$.        
    Since $$ i < n $$ and $$ j < n $$, then it follows from induction hypothesis that $$ B_i \subseteq S $$ and $$ B_j \subseteq S $$. Thus $$ p \in S $$ and $$ q \in S $$.
    Since $$ p \in S $$, it follows that $$ p = a_1 + b_1 \sqrt 2 $$ where $$ a_1, b_1 \in \mathbb Q $$. Similarly $$ q = a_2 + b_2 \sqrt 2 $$ where $$ a_2, b_2 \in \mathbb Q $$.
     
    Consider the following possible cases:
     
    - $$ x = f(p,q) $$         
      Thus $$ x = p + q = a_1 + b_1 \sqrt 2 + a_2 + b_2 \sqrt 2 = (a_1 + b_1) + (b_1 + b_2) \sqrt 2 $$. Thus $$ x \in S $$.
            
    - $$ x = g(p,q) $$         
      Thus $$ x = pq = (a_1 + b_1 \sqrt 2)(a_2 + b_2 \sqrt 2) $$       
      $$ = a_1a_2 + a_1 b_2 \sqrt2 + b_1 \sqrt 2 a_2 + b_1 \sqrt 2 b_2 \sqrt 2 $$       
      $$ = a_1a_2 + (a_1 b_2 + b_1 a_2) \sqrt 2 + 2 b_1 b_2 $$         
      $$ = (a_1a_2  + 2 b_1 b_2) + (a_1 b_2 + b_1 a_2) \sqrt 2 $$.        
      Thus $$ x \in S $$.
      
    Thus in both cases $$ x \in S $$.
      
    Since $$ x $$ is arbitrary, it follows that $$ B_n \subseteq S $$.     
            
  Thus in both cases $$ B_n \subseteq S $$.
   
  It follows that $$ C \subseteq S $$.
   
Since $$ S \subseteq C $$ and $$ C \subseteq S $$, it follows that $$ S = C $$.
    
**(c)**
    
 Required set will be $$ S = \{ a + b 2^{(\frac 1 3)} + c 2^{(\frac 2 3)} \; \vert \; a \in \mathbb Q \text{ and } b \in \mathbb Q \text{ and } c \in \mathbb Q \} $$.
     
<hr/>

**Soln7**

We will prove this by ordinary induction. 

Base Case:

For $$ n = 1 $$, R^1 = R $$ and $$ S^1 = S $$. Since $$ R \subseteq S $$, it follows $$ R^1 \subseteq S^1 $$. Thus for $$ n = 1 $$, $$ R^n \subseteq S^n $$.

Induction step:

Suppose theorem is correct for $$ n $$. Thus for $$ R^n \subseteq S^n $$.

Now consider $$ R^{n+1} $$.

Suppose $$ (a,c) \in R^{n+1} $$. Since $$ R^{n+1} = R \circ R^n $$, it follows that there exists an element $$ b $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in R^n $$.
By our hypothesis, $$ R^n \subseteq S^n $$, it follows that $$ (a,b) \in S $$ and $$ (b,c) S^n $$. Since $$ S^{n+1} = S \circ S^n $$, it follows that $$ (a,c) \in S^{n+1} $$.
Since $$ (a,c) $$ is arbitrary, it follows that $$ R^n \subseteq S^n $$.

**Soln8**

**(a)**

$$ (R \cap S)^n \subseteq R^n \cap S^n $$.

Since $$ R \cap S \subseteq R $$ and $$ R \cap S \subseteq S $$, it follows from Ex-7, that $$ (R \cap S)^n \subseteq R^n $$ and $$ (R \cap S)^n \subseteq S^n $$. Thus
we can conclude that $$ (R \cap S)^n \subseteq R^n \cap S^n $$.

However $$ R^n \cap S^n \nsubseteq (R \cap S)^n $$. Example: 

Suppose $$ R = \{ (1,2), (2,3) \}, S = \{ (1,0), (0,3) \} $$. Thus $$ R \cap S = \phi $$. Thus $$ (R \cap S)^2 = \phi $$.
But $$ R^2 \cap S^2 = \{ (1,3) \} \cap \{(1,3)\} = \{ (1,3)\} $$. Thus $$ R^n \cap S^n \nsubseteq (R \cap S)^n $$.
 
**(b)**

$$ R^n \cup S^n \subseteq (R \cup S)^n  $$.

Since $$ R \subseteq R \cup S $$ and $$ S \subseteq R \cup S $$, it follows from Ex-7, that $$ R^n \subseteq (R \cup S)^n $$ and $$ S^n \subseteq (R \cup S)^n $$.
Thus we can conclude that $$ R^n \cup S^n \subseteq (R \cup S)^n  $$.

However $$ (R \cup S)^n \nsubseteq R^n \cup S^n $$. Example:

Suppose $$ R = \{(1,2)\}, S = \{(2,3)\} $$. Thus $$ R \cup S = \{ (1,2), (2,3) \} $$. Thus $$ (R \cup S)^2 = \{(1,3)\} $$.
But $$ R^2 \cup S^2 = \phi \cup \phi = \phi $$. Thus $$ (R \cup S)^n \nsubseteq R^n \cup S^n $$.

<hr/>

**Soln9**

**(a)**

Suppose $$ m = d(a,b) $$, and $$ n = d(b.c) $$ and suppose $$ o = d(a,c) $$.
 
Thus $$ (a,b) \in R^m $$ and $$ (b,c) \in R^n $$. Thus $$ (a,c) \in R^n \circ R^m $$. Thus $$ (a,c) \in R^{m+n} $$.

Since $$ o = d(a,c) $$. it follows that $$ (a,c) \in R^o $$.
 
Suppose $$ o > m+n $$. Since $$ (a,c) \in R^{m+n} $$ and $$ o = d(a,c) $$ is the smallest positive integer $$ o $$ such that $$ (a, c) \in R_o $$, 
it follows that $$ o \le m+n $$. But this contradicts with our assumption that $$ o > m+n $$. Thus $$ o \le m+n $$.
    
**(b)**

We are given that $$ (a,c) \in S $$.

Also we can directly see $$ m \ge 1 $$. Thus we need to prove:
    
We need to prove: $$ \forall m\in \mathbb N(m < d(a,c) \to \exists b \in A(d(a,b) = m \text{ and } d(b,c) = d(a,c) - m)) $$.

We will prove this using ordinary induction.

- Base Case $$ m = 1 $$     
  
  Suppose $$ m < d(a,c) $$. Suppose $$ n = d(a,c) $$, thus $$ (a,c) \in R^n $$. Thus $$ m < n $$, or we can also say $$ n \ge 2 $$. Since $$ R^n = R^{n-1} \circ R $$, 
  it follows that there must exist an element $$ b \in A $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in R^{n-1} $$.       
  Since $$ (a,b) \in R $$, it follows $$ d(a,b) = 1 $$.      
  Clearly by the definition of $$ d(b,c) $$, we can say that $$ d(b,c) \le n-1 $$.        
  We will prove by contradiction that $$ d(b,c) = n-1 $$. Suppose $$ k = d(b,c) < n-1 $$. Thus $$ (b,c) \in R^k $$. Since $$ (a,b) \in R $$ and $$ (b,c) \in R^k $$,
  it follows that $$ (a,c) \in R^{k+1} $$. Since $$ k < n-1 $$, it follows that $$ k+1 < n $$. But this contradicts with the assumption that $$ d(a,c) = n $$. It follows
  that $$ k = d(b,c) = n-1 = d(a,c) - 1 $$.
  Thus $$ d(a,b) = 1 $$ and $$ d(b,c) = d(a,c) - 1 $$.
  
- Induction Step:

  Suppose theorem is true for $$ m $$. Thus if $$ m < d(a,c) $$, it follows that $$ \exists b \in A(d(a,b) = m \text{ and } d(b,c) = d(a,c) - m) $$.
  
  Now consider for $$ m+1 $$.
  
  Suppose $$ m+1 < d(a,c) $$. Since $$ m+1 < d(a,c) $$, it follows $$ m < d(a,c) $$. Thus by induction hypothesis there exists an element $$ b $$ such that
  $$ d(a,b) = m $$ and $$ d(b,c) = d(a,c) - m $$. Suppose $$ n = d(a,c) $$.
  
  Clearly $$ (a,b) \in R^m $$ and $$ (a,c) \in R^n $$ and $$ (b,c) \in R^{n-m} $$.
  
  Since $$ m+1 < n $$, it follows that $$ n-m > 1 $$. Thus $$ R^{n-m} = R^{n-m-1} \circ R $$. Since $$ (b,c) \in R^{n-m} $$, it follows that there exists an
  element $$ b' $$ such that $$ (b',c) \in R^{n-m-1} $$ and $$ (b,b') \in R $$.      
  Since $$ (b,b') \in R $$, it follows $$ d(b,b') = 1 $$.     
     
  Also by the definition of $$ d(b',c) $$, we can say that $$ d(b',c) \le n-m-1 $$. We will prove by contradiction that $$ d(b',c) = n-m-1$$. Suppose 
  $$ k = d(b',c) < n-m-1 $$. Since $$ (b,b') \in R $$ and $$ (b',c) \in R^k $$, it follows $$ (b,c) \in R^{k+1} $$. Since $$ d(b,c) = n-m $$, it follows 
  $$ n-m < k+1 $$, or $$ n-m-1 < k $$. Thus we have a contradiction. It follows that $$ d(b',c) = n-m-1 $$. 
  
  Since $$ (a,b) \in R^m $$ and $$ (b,b') \in R $$, it follows that $$ (a,b') \in R \circ R^{m} = R^{m+1} $$. Thus $$ d(a,b') \le m+1 $$. We shall prove
  by contradiction that $$ d(a,b') = m+1 $$. Suppose $$ k = d(a,b') < m+1 $$. Thus $$ (a,b') \in R^k $$. Since $$ (a,b') \in R^k $$ and $$ (b',c) \in R^{n-m-1} $$, it
   follows that $$ (a,c) \in R^{n-m-1+k} $$. Since $$ d(a,c) = n $$, it follows $$ n < n-m-1+k $$, or $$ m+1 < k $$. Thus we have a contradiction. It follows that
   $$ d(a,b') = m+1 $$.
   
  Thus we have an element $$ b' $$ such that $$ d(a,b') = m+1 $$ and $$ d(b',c) = n-m-1 = d(a,c) - m - 1 $$.
   
<hr/>
   
**Soln10**
   
**(a)**
   
Suppose $$ S_n = \{ (a,b) \in A \times A \; \vert \; \text{there is an } R \text{-path form } a \text{ to } b \text{ of length } n \} $$.

Thus we need to prove $$ R^n = S_n $$. We can prove this by proving $$ R^n \subseteq S_n $$ and $$ S_n \subseteq R^n $$.

We shall prove this by induction.
   
- Base Case:
   
  For $$ n = 1 $$, we need to prove $$ R^1 \subseteq S_1 $$ and $$ S_1 \subseteq R^1 $$.

  ($$ \to $$) Suppose $$ (a,b) \in R^1 $$. Thus $$ (a,b) \in R $$. Suppose that $$ f = \{ (0,a), (1,b) \} $$. It follows that $$ (f(0),f(0+1)) \in R $$. Thus
  $$ f(0) = a $$, $$ f(1) = b $$ and $$ \forall i < n((f(i),f(i+1)) \in R) $$. Thus there is an $$ R$$-path from $$ a $$ to $$ b $$ of length $$ 1 $$. Thus
  $$ (a,b) \in S_1 $$. Since $$ (a,b) $$ is arbitrary, it follows that $$ R^1 \subseteq S_1 $$.
 
  ($$ \leftarrow $$) Suppose $$ (a,b) \in S_1 $$. Thus $$ f(0) = a $$, $$ f(1) = b $$ and $$ (f(0),f(1)) \in R $$. Thus $$ (a,b) \in R $$, or $$ (a,b) \in R^1 $$.
  Since $$ (a,b) $$ is arbitrary, it follows that $$ S_1 \subseteq R^1 $$.
  
- Induction Step:
  
  Suppose for $$ n $$, $$ R^n = S_n $$.
  
  Now lets consider of $$ n+1 $$.
  
  ($$ \to $$) Suppose $$ (a,c) \in R^{n+1} $$. Thus there exist an element $$ b $$ such that $$ (a,b) \in R^n $$ and $$ (b,c) \in R $$. Since $$ (a,b) \in R^n $$,
  then by induction hypothesis, $$ (a,b) \in S_n $$. Thus there is an $$ R $$-path from $$ a $$ to $$ b $$ of length $$ n $$. It follows that $$ f(0) = a $$, $$ f(n) = b $$
  and $$ \forall i < n((f(i),f(i+1)) \in R) $$. Suppose $$ f(n+1) = c $$. Since $$ f(n) = b $$ and $$ (b,c) \in R $$, it follows that $$ (f(n),f(n+1)) \in R $$.
  Thus $$ \forall i < n+1 ((f(i),f(i+1)) \in R) $$. Thus $$ (a,c) \in S_{n+1} $$. Thus $$ R^{n+1} \subseteq S_{n+1} $$.
   
  ($$ \leftarrow $$) Suppose $$ (a,c) \in S_{n+1} $$. It follows that $$ f(0) = a $$, $$ f(n+1) = c $$ and $$ \forall i < n+1 ((f(i),f(i+1)) \in R) $$. Suppose
  $$ f(n) = b $$. Since $$ (f(n),f(n+1)) \in R $$, it follows that $$ (b,c) \in R $$.      
  Since $$ \forall i < n+1 ((f(i),f(i+1)) \in R) $$, we can also say $$ \forall i < n ((f(i),f(i+1)) \in R) $$. Since $$ f(0) = a $$ and $$ f(n) = b $$, it follows
  that $$ (a,b) \in S_n $$. Thus by induction hypothesis, it follows $$ (a,b) \in R^n $$.     
  Since $$ (a,b) \in R^n $$ and $$ (b,c) \in R $$, it follows that $$ (a,c) \in R^{n+1} $$. Thus $$ S_{n+1} \subseteq R^{n+1} $$.
  
**(b)**
  
We know from theorem 6.5.2, $$ S = \cup_{n \in Z^+} R^n $$.      
Suppose $$ P = \{ (a,b) \in A \times A \; \vert \; \text{there is an } R \text{-path form } a \text{ to } b \} $$.      
Thus we need to prove $$ S = P $$.         

Suppose $$ P_n = \{ (a,b) \in A \times A \; \vert \; \text{there is an } R \text{-path form } a \text{ to } b \text{ of length } n \} $$.

Clearly $$ P = \cup_{i \in Z^+}P_n $$.

Suppose $$ n $$ is arbitrary positive integer. Thus from part(a) $$ R^n = P_n $$. Since $$ n $$ was arbitrary, it follows that 
$$ \cup_{i \in Z^+} R^n = \cup_{i \in Z^+}P_n $$. Thus $$ S = P $$.
     
<hr/>
     
**Soln11**
     
**(a)**
     
Suppose $$ S_n = \{ (a,b) \in A \times A \; \vert \; \text{there is a "simple" } R \text{-path form } a \text{ to } b \text{ of length at most } n \} $$.
     
We will prove this by induction.
     
- Base Case:
     
  For $$ n = 1 $$. 
  
  Suppose $$ (a,b) \in R \setminus i_A $$. Thus $$ (a,b) \in R $$ and $$ (a,b) \notin i_A $$. It follows that $$ a \ne b $$. Suppose 
  $$ f = \{ (0,a), (1,b) \} $$. Thus $$ f(0) = a $$, and $$ f(1) = b $$ and $$ \forall i < 1 ( ( f(i),f(i+1) ) \in R) $$. Since $$ a \ne b $$, it follows
  $$ f(0) \ne f(1) $$. Thus $$ f $$ is one-to-one. Thus $$ (a,b) \in S_1 $$. It follows that $$ R \setminus i_A \subseteq S_1 $$, or $$ R^1 \setminus i_A \subseteq S_1 $$.
  
- Induction Step:
  
  Suppose theorem is correct for $$ n $$. Thus $$ R^n \setminus i_A \subseteq S_n $$. 
  
  Now consider for $$ n+1 $$.
  
  Suppose $$ (a,c) \in R_{n+1} \setminus i_A $$. Thus $$ a \ne c $$. Also it follows that there exist some element $$ b $$ such that $$ (a,b) \in R^n $$ and
   $$ (b,c) \in R $$ and $$ a \ne b $$ and $$ b \ne c $.
   
  Note: It can be easily proved by contradiction that $$ a \ne b $$ and $$ b \ne c $$. I skipped it.
   
  Thus $$ (a,b) \in R_n \setminus i_A $$ and $$ (b,c) \in R \setminus i_A $$. Thus by induction hypothesis, it follows $$ (a,b) \in S_n $$. Thus there is a 
  function $$ f $$ such that for some $$ m \le n $$, $$ f(0) = a $$ and $$ f(m) = b $$ and $$ \forall i < m(f(i),f(i+1)) \in R $$. 
  
  We have following possible cases:
  
  - Case $$ c \in Ran(f) $$:              
    
  Suppose $$ f(k) = c $$. Suppose $$ h $$ is a function such that $$ \forall i \le k (h(i) = f(i)) $$. Since $$ f $$ is one-to-one, it follows that $$ h $$ is
  $$ R $$-path from $$ a $$ to $$ c $$ of length less than equal $$ n+1 $$. Thus $$ (a,c) \in S_{n+1} $$.
  
  - Case $$ c \notin Ran(f) $$:             
  
  We have $$ f(0) = a $$ and $$ f(m) = b $$ where $$ m \le n $$. Suppose $$ h $$ is a function such that $$ \forall i \le m(h(i) = f(i)) $$ and $$ h(m+1) = c $$.
  Thus $$ h(m) = f(m) = b $$ and $$ h(m+1) = c $$. Since $$ (b,c) \in R $$, it follows that $$ (h(m),h(m+1)) \in R $$. Since $$ f $$ is one-to-one, we can say that
  $$ h $$ is a one-to-one function from $$ a $$ to $$ c $$ of length $$ m + 1 $$. Since $$ m \le n $$, it follows that $$ m+1 \le n+1 $$. It follows that
  $$ (a,c) \in S_{n+1} $$.
  
  Thus from both cases $$ (a,c) \in S_{n+1} $$. Thus $$ R_{n+1} \subseteq S_{n+1} $$ if $$ R_n \subseteq S_n $$. 
  
  Thus $$ R_n \subseteq S_n $$.
  
**(b)**
  
We know from theorem 6.5.2, $$ S = \cup_{n \in Z^+} R^n $$.      

Suppose $$ P = \{ (a,b) \in A \times A \; \vert \; \text{there is a "simple" } R \text{-path form } a \text{ to } b \} $$.

We need to prove $$ S \setminus i_A = P $$.
    
($$ \to $$) Suppose $$ (a,b) \in S \setminus i_A $$. Thus for some natural number $$ n $$, $$ (a,b) \in R^n $$ such that $$ a \ne b $$. Thus it follows from part(a)
of this solution that $$ (a,b) \in P $$. Thus $$ S \setminus i_A \; \subseteq \; P $$.

($$ \leftarrow $$) Suppose $$ (a,b) \in P $$. Thus there exist a one-to-one function $$ f $$ such that for some natural number $$ n $$, $$ f(0) = a $$, $$ f(n) = b $$ 
and $$ \forall i < n((f(i),f(i+1)) \in R) $$. Thus from Ex-10 part(a), it follows that $$ (a,b) \in R^n $$. Thus $$ (a,b) \in S $$. Since $$ f $$ is one-to-one, it 
follows $$ f(0) \ne f(n) $$, or $$ a \ne b $$. Thus $$ (a,b) \notin i_A $$. Thus we can conclude $$ (a,b) \in S \setminus i_A $$.
 
<hr/>
 
**Soln12**
 
**(a)**
 
Suppose $$ d(a,b) = n $$ and $$ a \ne b $$. It follows that $$ (a,b) \in R^n \setminus i_A $$. Thus from Ex-11 part(a), it follows that there exist a simple $$ R-$$path
  of length at most $$ n $$.
  
We will prove by contradiction that length of path is $$ n $$. Suppose length of $$ R $$-path is $$ m $$ such that $$ m < n $$. It follows that there is a one-to-one function $$ f $$ 
such that $$ f(0) = a $$ and $$ f(m) = b $$, and $$ \forall i < m((f(i),f(i+1) \in R) $$. Thus from Ex-10 part(a), it follows that $$ (a,b) \in R^m $$. Since $$ n = d(a,b) $$,
it follows that $$ n \le m $$. But it contradicts with assumption that $$ m < n $$. Thus $$ m = n $$. 

Thus there is a simple path from $$ a $$ to $$ b $$ of length $$ n $$.
 
**(b)**
 
Suppose $$ d(a, a) = n $$. We have following possible cases:
  
- Case $$ n = 1 $$.

  Thus $$ (a,a) \in R $$. Suppose $$ f = \{ (0,a), (1,a) \} $$. Thus $$ f(0) = f(1) = a $$. Also the statementt $$ \forall i < n \forall j < n(f(i)= f(j) \to i = j) $$ is vacuously true.
    
- Case $$ n > 1 $$.
    
  Thus $$ (a,a) \in R^n $$. Suppose $$ m = n-1 $$. Since $$ m < n $$, it follows from Ex-9 (b), there exist an element $$ b $$ such that $$ d(a,b) = m $$ and
  $$ d(b,a) = d(a,a) - m $$. Thus $$ d(b,a) = n - (n-1) = 1 $$. It follows that $$ (b,a) \in R $$.     
  Now we shall prove that $$ a \ne b $$ by contradiction. Suppose $$ a = b $$. Since $$ d(a,b) = n-1 $$, it follows $$ d(a,a) = n-1 $$. But $$ d(a,a) = n $$.
  Thus we have a contradiction. It follows that $$ a \ne b $$.
  Thus we have $$ d(a,b) = n-1 $$ and $$ a \ne b $$. Thus by part(a) of this solution it follows that there is a simple path from $$ a $$ to $$ b $$ of length $$ n-1 $$.
  Thus there is a one-to-one function $$ f $$ such that $$ \forall i < n-1( (f(i),f(i+1)) \in R) $$.    
  Suppose $$ f' = f \cup \{ (n,a) \} $$. Since $$ (b,c) \in R $$, it follows $$ (f'(n-1),f'(n)) \in R $$ Since $$ f $$ is simple path, it follows that 
  $$ \forall i<n \forall j<n( f'(i) = f'(j) \to i = j $$ and $$ f'(0) = f'(n) = a $$.
  
  Thus $$ f' $$ is a simple path except $$ f'(0) = f'(n) = a $$.
  
  
<hr/>
  
**Soln13**
  
Suppose $$ f :J_n \to A $$ is a simple $$ R $$-path from $$ a $$ to $$ b $$ of length $$ n $$, where $$ J_n = \{0,1,2, ... n\} $$.
   
Clearly length of path is $$ n $$ and $$ J_n $$ contains $$ n+1 $$ elements.(using the same definition as defined in book).
    
Since $$ A $$ contains $$ m $$ elements and $$ f $$ is one-to-one, it follows that $$ J_n $$ can contain at max $$ m $$ elements.
    
It follows that maximum length of $$ f $$ is $$ m-1 $$.
    
Suppose $$ (a,b) \in S $$. Suppose that $$ d(a,b) = n $$. Consider the following cases:
 
- Case $$ a \ne b $$      

  Since maximum length of a simple $$ R $$-path is $$ m-1 $$, then from Ex-12 part(a), it follows that $$ d(a,b) \le m - 1 $$. Thus $$ (a,b) \in R^{n} $$ where
  $$ 1 \le n \le m-1 $$. It follows that $$ (a,b) \in \cup \{ R^n \, \vert \, 1 \le n \le m-1 \} $$.
  
- Case $$ a = b $$     
  
  Using the result of Ex-12(b), it follows maximum length of such path is $$ \text{ maximum length of simple path } + 1 = m - 1 + 1 = m $$. Thus $$ (a,b) \in R^{n} $$ where
  $$ 1 \le n \le m $$. It follows that $$ (a,b) \in \cup \{ R^n \, \vert \, 1 \le n \le m \} $$.
  
Thus combining both cases, it follows that $$ (a,b) \in \cup \{ R_n \, \vert \, 1 \le n \le m \} $$.
  
It follows that $$ S \subseteq \cup \{ R^n \, \vert \, 1 \le n \le m \} $$.
  
Also since $$ S = \cup_{i \in Z^+} R^n $$, it follows that $$ \cup \{ R^n \, \vert \, 1 \le n \le m \}  \subseteq S $$.
  
Thus $$ S = \cup \{ R^n \, \vert \, 1 \le n \le m \} $$.
    
<hr/>
    
**Soln14**

Earlier I tried this using induction on $$ i $$ and not able to do it. Later it seems like it was wrong to apply induction on $$ i $$ as value of $$ i $$ is dependent on $$ n $$.
    
We have to prove $$ \forall n \in \mathbb Z^+( 0 \le i \le n-1 \to (2+i) \; \vert \; (x+i) ) $$, where $$ x = (n+1)! + 2 $$.
     
We shall use induction on $$ n $$.  

- Base Case: 

  For $$ n = 1 $$. Thus the only possible value of $$ i = 0 $$. Thus $$ x+i = (1+1)! + 2 = 4 $$. And $$ 2+i = 2 $$. Thus $$ (2+i) \; \vert \; (x+i) $$.
 
- Induction Step:

  Suppose for $$ n $$, $$ (2+i) \; \vert \; (x+i) $$. Thus for some integer $$ k $$, $$ k(2+i) = (n+1)! + 2 + i $$.
   
  Now consider for $$ n+1 $$,
     
  Thus for $$ n+1 $$:     
  Value of $$ i $$ will be $$ 0 \le i \le n+1-1 $$. Thus $$ 0 \le i \le n $$.
  And $$ x+i = (n+1+1)! + 2 + i = (n+2)! + 2 + i $$.
            
  Consider the following cases:
              
  - Case $$ i = n $$:       
    
    Thus $$ x+i = (n+2)! + 2 + n = (n+2)((n+1)! + 1) $$. Thus $$ 2+i = 2+n $$ divides $$ x+i $$.
     
  - Case $$ 0 \le i \le n-1 $$:    
     
    Since $$ 0 \le i \le n-1 $$, thus by induction hypothesis, it follows that $$ k(2+i) = (n+1)! + 2 + i $$. Thus $$ (2+i)(k-1) = (n+1)! $$.
     
    Thus $$ x + i = (n+2)! + 2 + i = (n+2)(n+1)! + 2 + i = (n+2)(2+i)(k-1) + 2 + i $$. Thus $$ x+i = (2+i)((n+2)(k-1) + 1) $$. Thus $$ (2+i) \; \vert \; (x+i) $$.
       
  Thus in both cases $$ (2+i) \; \vert \; (x+i) $$.
       
<hr/>
       
       
              
  


     

  
    
    
  
  
     
  
                   


