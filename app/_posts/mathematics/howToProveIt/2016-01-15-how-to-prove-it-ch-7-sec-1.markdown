---
layout: blog
title:  "How To Prove It, Ch-7 Sec-7.1, Infinite Sets"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 7, Section - 7.1, Infinite Sets.

<!--more-->

<hr/>

### Summary

- Suppose $$ A $$ and $$ B $$ are sets. Then $$ A $$ is **equinumerous** with $$ B $$ if there is a function $$ f : A \to B $$ that is one-to-one and 
  onto. We use $$ A ∼ B $$ notation to indicate $$ A $$ is equinumerous with $$ B $$.   
- Suppose $$ n $$ is a natural number. Suppose $$ I_n =\{ i \in \mathbb Z^+ \; \vert \; i \le n \} $$. A set $$ A $$ is called **finite** if there is a natural 
  number $$ n $$ such that $$ I_n ∼ A $$. Otherwise, $$ A $$ is infinite.
- We can easily note that $$ \sim $$ is an **equivalence relation**. Thus for any sets $$ A, B $$ and $$ C $$:       
  - $$ A \sim A $$.       
  - If $$ A \sim B $$, then $$ B \sim A $$.     
  - if $$ A \sim B $$ and $$ B \sim C $$, then $$ A \sim C $$. 
- It is shown in the book that $$ \mathbb Z^+ \sim Z $$ and $$ \mathbb Z^+ \times \mathbb Z^+ \to \mathbb Z^+ $$ by giving the examples of corresponding one-to-one and onto function:
    - $$ f: \mathbb Z^+ \to \mathbb Z $$ such that if $$ n $$ is even, then $$ f(n) = \frac n 2 $$, and if $$ n $$ is odd $$ f(n) = \frac {1-n} 2 $$.
    - $$ f: \mathbb Z^+ \times \mathbb Z^+ \to \mathbb Z^+ $$, such that $$ f(i,j) = \frac {(i+j-2)(i+j-1)} 2 + i $$.
- Using the properties of **equinumerous relation**, and from above example, it can be shown that $$ \mathbb Z, \mathbb Z^+ \times \mathbb Z^+ $$, and $$ \mathbb Z \times \mathbb Z $$, are 
  equinumerous with $$ \mathbb Z^+ $$.     
- A set $$ A $$ is called **denumerable** if $$ \mathbb Z^+ \sim A $$. It is called countable if it is either finite or denumerable. Otherwise, it is uncountable.
- Suppose $$ A $$ is a set.The following statements are equivalent:
  - $$ A $$ is countable.
  - Either $$ A = \phi $$ or there is a function $$ f : \mathbb Z^+ \to A $$ that is onto. 
  - There is a function $$ f : A \to \mathbb Z^+ $$ that is one-to-one.
- $$ \mathbb Q $$ is denumerable.

<hr/>

**Soln1**

**(a)**

Suppose $$ f: \mathbb Z^+ \to \mathbb N $$ such that $$ f(n) = n - 1 $$.

Suppose $$ n_1,n_2 \in \mathbb Z^+ $$ and $$ f(n_1) = f(n_2) $$. It follows that $$ n_1-1 = n_2 - 1 $$. Thus $$ n_1 = n_2 $$. Thus $$ f $$ is one-to-one.

Suppose $$ m \in \mathbb N $$. Let $$ n = m+1 $$. Since smallest natural number is $$ 0 $$, clearly $$ n \ge 1 $$. Thus $$ n \in \mathbb Z^+ $$. 
 Thus $$ f(n) = f(m+1) = m+1-1 = m $$. Since $$ m $$ was arbitrary, it follows that $$ f $$ is onto.
 
Thus there exist a one-to-one and onto function $$ f $$ from  $$ \mathbb Z^+ $$ to $$ \mathbb N $$. Thus $$ Z^+ \sim \mathbb N $$. It follows that
 $$ \mathbb N $$ is denumerable.
 
**(b)**
 
Suppose $$ f: \mathbb Z \to \mathbb Z $$ such that $$ f(n) = 2n $$. Clearly $$ E = Ran(f) $$ is the set of all even integers. 

Now consider a function $$ g: \mathbb Z \to E $$ such that $$ g(n) = f(n) $$.

It is trivial to see that $$ g $$ is one-to-one and onto. Thus $$ \mathbb Z \sim E $$. We know that $$ Z^+ \sim Z $$. Since $$ \sim $$ is a transitive relation,
  it follows that $$ Z^+ \sim E $$. Thus $$ E $$ is denumeberable.
  
<hr/>
  
**Soln2**

**(a)**

We know that $$ \mathbb Q $$ is denumerable. Thus $$ Z^+ \sim \mathbb Q $$. Thus we can choose a function $$ f: \mathbb Z^+ \to \mathbb Q $$ such that $$ f $$ is
one-to-one and onto.
  
Suppose there is a function $$ g: \mathbb Z^+ \times Z^+ \to \mathbb Q \times \mathbb Q $$ such that $$ g(x,y) = (f(x),f(y)) $$.

Suppose $$ (a_1,b_1), (a_2,b_2) \in Z^+ \times Z^+ $$ such that $$ g(a_1,b_1) = g(a_2,b_2) $$. It follows that $$ f(a_1) = f(a_2) $$ and $$ f(b_1) = g(b_2) $$.
Since $$ f $$ is one-to-one, it follows $$ a_1 = a_2 $$ and $$ b_1 = b_2 $$. Thus $$ (a_1,b_1) = (a_2,b_2) $$. Thus $$ g $$ is one-to-one.

Suppose $$ (m,n) \in \mathbb Q \times \mathbb Q $$. Since $$ m \in \mathbb Q $$ and $$ f $$ is onto, it follows that for some $$ x \in \mathbb Z^+ $$, $$ f(x) = m $$.
Similarly for some $$ y \in \mathbb Z^+ $$, $$ f(y) = n $$. Thus $$ (x,y) \in \mathbb Z^+ \times \mathbb Z^+ $$ and $$ g(x,y) = (m,n) $$. Thus $$ g $$ is onto.

Thus $$ \mathbb Z^+ \times \mathbb Z^+ \sim \mathbb Q \times \mathbb Q $$. Since $$ \mathbb Z^+ \sim \mathbb Z^+ \times \mathbb Z^+ $$ and $$ \sim $$ is a transitive relation, 
it follows that $$ \mathbb Z^+ \sim \mathbb Q \times \mathbb Q $$. Thus $$ \mathbb Q \times \mathbb Q $$ is denumerable.
 
**(b)**
 
From Section-6.5 Ex-6 part(b), we know that $$ \mathbb Q(\sqrt 2) = \{ a + b \sqrt 2 \; \vert \; a \in \mathbb Q, b \in \mathbb Q \} $$. 
  
Suppose $$ S = \mathbb Q(\sqrt 2) $$. Thus we can define a function $$ f: \mathbb Q \times \mathbb Q \to S $$ such that $$ f(a,b) = a + b \sqrt 2 $$.
  
Clearly $$ f $$ is onto by definition as $$ Ran(f) = S $$. 

Suppose $$ a_1, b_1, a_2, b_2 \in \mathbb Q $$ such that $$ f(a_1,b_1) = f(a_2,b_2) $$. Thus $$ a_1 + b_1 \sqrt 2 = a_2 + b_2 \sqrt 2 $$, or $$ (a_1 - a_2) = \sqrt 2 (b_2 - b_1) $$.
Since $$ \sqrt 2 \notin \mathbb Q $$, it follows that $$ a_1 = a_2 $$ and $$ b_1 = b_2 $$. 

Thus $$ f $$ is one-to-one and onto. Thus $$ \mathbb Q \times \mathbb Q \sim S $$. Now from part(a) of this solution, $$ Z^+ \sim \mathbb Q \times \mathbb Q $$, and since $$ \sim $$ is
 transitive relation, it follows that $$ Z^+ \sim S $$. Thus $$ S $$ is denumerable.
 
<hr/>
 
**Soln3**
 
**(a)**
 
Suppose $$ f: [0,1] \to \mathbb R $$ such that $$ f(x) = 2x $$. Clearly $$ Ran(f) = [0,2] $$. Thus we can define a function $$ g: [0,1] \to [0,2] $$ such
  that $$ g(x) = 2x $$.
  
Clearly $$ g $$ is a one-to-one and onto function. Thus $$ [0,1] \sim [1,2] $$.
 
**(b)**

Suppose $$ f: (\frac {-\pi} 2, \frac {\pi} 2) \to \mathbb R $$ such that $$ f(x) = tan(x) $$. 

Suppose $$ a_1,a_2 \in (\frac {-\pi} 2, \frac {\pi} 2) $$ such that $$ f(a_1) = f(a_2) $$. Thus $$ tan(a_1) = tan(a_2) $$. Since $$ a_1 $$ and $$ a_2 $$
are in range $$ (\frac {-\pi} 2, \frac {\pi} 2) $$, it follows that $$ a_1 = a_2 $$. Thus $$ f $$ is one-to-one.
 
Suppose $$ y \in \mathbb R $$. Thus we can select some $$ x $$ from $$ (\frac {-\pi} 2, \frac {\pi} 2) $$ such that $$ tan(x) = y $$. Thus $$ f $$ is onto.
 
Thus $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim \mathbb R $$.

**(c)** 

We shall prove this in steps:

- Prove $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (-1,1) $$.
- Prove $$ (0,1) \sim (-1,1) $$
- Prove $$ (-1,1) \sim \mathbb R $$
- Prove $$ (0,1) \sim \mathbb R $$ by combining last two proofs.

Lets prove one by one:

- Proof for $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (-1,1) $$.

  Since $$ sin(x) $$ is one-to-one and onto function if $$ x \in (\frac {-\pi} 2, \frac {\pi} 2) $$, and the value of  $$ sin(x) $$ will fall in $$ (-1,1) $$
  for the given $$ x $$ range.(note that since range of $$ x $$ does not include $$ \frac {-\pi} 2 $$ and $$ \frac {\pi} 2 $$, value of $$ sin(x) $$ will not
  equal $$ -1 $$ and $$ 1 $$). Thus the function $$ f: (\frac {-\pi} 2, \frac {\pi} 2) \to (-1,1) $$ such that $$ f(x) = sin(x) $$ is one-to-one and onto.
    
  It follows that $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (-1,1) $$.
   
- Proof for $$ (0,1) \sim (-1,1) $$.   

  Suppose $$ f: (0,1) \to (-1,1) $$ such that $$ f(x) = 2x-1 $$. Clearly $$ f $$ is one-to-one and onto. Thus $$ (0,1) \sim (-1,1) $$.
  
- Proof for $$ (-1,1) \sim \mathbb R $$     

  Since $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (-1,1) $$ and $$ \sim $$ is associative, it follows that $$ (-1,1) \sim (\frac {-\pi} 2, \frac {\pi} 2) $$. 
  Also from part(b) of this solution we know that $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim \mathbb R $$.
  Since $$ \sim $$ is transitive, it follows that $$ (-1,1) \sim \mathbb R $$.
   
- Proof $$ (0,1) \sim \mathbb R $$.

  Since $$ (0,1) \sim (-1,1) $$ and $$ (-1,1) \sim \mathbb R $$, it follows that $$ (0,1) \sim \mathbb R $$.
  
**(d)**
  
Lets prove it in steps:
  
- $$ (0,1] \sim \mathbb R \setminus \{ 0 \} $$.       

  Suppose $$ f: (0,1] \to R \setminus \{ 0 \} $$, where $$ f(x) = \frac 1 x $$. It is clear since that $$ f $$ is one-to-one and onto. Thus $$ (0,1] \sim \mathbb R \setminus \{ 0 \} $$. 

- $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim R \setminus \{ 0 \} $$.
 
  Suppose $$ f: (\frac {-\pi} 2, \frac {\pi} 2) \to R \setminus \{ 0 \} $$, where $$ f(x) = cot(x) $$. It is clear since that $$ f $$ is one-to-one and onto. Thus 
  $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim R \setminus \{ 0 \} $$.  
        
- $$ (0,1] \sim (\frac {-\pi} 2, \frac {\pi} 2) $$.
  
  Since $$ \sim $$ is associative and transitive relation, we can directly see from last two steps that $$ (0,1] \sim (\frac {-\pi} 2, \frac {\pi} 2) $$.        
       
- $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (0,1) $$.
    
  From part(b) and (c) and since $$ \sim $$ is transitive and associative, it follows that $$ (\frac {-\pi} 2, \frac {\pi} 2) \sim (0,1) $$.
   
- $$ (0,1] \sim (0,1) $$.
   
  From last two steps and $$ \sim $$ is transitive, it follows that $$ (0,1] \sim (0,1) $$.
  
<hr/>
  
**Soln4**
  
**(a)**

No. Counterexample:
  
Suppose $$ A = \{a_1,a_2\}, B = \{b_1,b_2\}, C = \{c_1,c_2\}, D=\{d_1\} $$.
    
Clearly $$ A \sim B $$ and $$ A \times C \sim B \times D $$ but $$ C \sim D $$ is not possible.

**(b)**

No. Counterexample:

Suppose $$ A = \{a\}, B = \{b\}, C = \{a\}, D=\{\} $$.
    
Clearly $$ A \sim B $$ and $$ A \cup C \sim B \cup D $$ but $$ C \sim D $$ is not true.

<hr/>

**Soln5**

Suppose $$ A \sim B $$. It follows that we can choose a one-to-one and onto function $$ f: A \to B $$.

Now consider $$ g: \mathcal P(A) \to \mathcal P(B) $$ such that $$ g(X) = \{f(x) \; \vert \; x \in X \} = Y $$.

Now we shall prove following:

- $$ Y \subseteq B $$.

  Suppose $$ y \in Y $$. Clearly we can choose some $$ x \in A $$ such that $$ f(x) = y $$. Since $$ x \in A $$, it follows that $$ f(x) \in B $$, or $$ y \in B $$.
  Since $$ y $$ is arbitrary, $$ Y \subseteq B $$.

- $$ g $$ is one-to-one.

  Suppose $$ X_1 $$ and $$ X_2 $$ are in $$ \mathcal P(A) $$ such that $$ g(X_1) = g(X_2) $$. We can prove $$ X_1 = X_2 $$ as follows:
  
  Suppose $$ x_1 \in X_1 $$ such that $$ y = f(x_1) \in g(X_1) $$. Since $$ g(X_1) = g(X_2) $$, it follows that $$ y \in g(X_2) $$. Thus for some $$ x_2 \in X_2 $$,
  we have $$ y = f(x_2)  $$. Thus $$ f(x_1) = f(x_2) $$. Since $$ f $$ is one-to-one, it follows $$ x_1 = x_2 $$. Thus $$ x_1 \in X_2 $$. 
  
  Since $$ x_1 $$ is arbitrary, it follows that $$ X_1 \subseteq X_2 $$.
  
  Similarly we can also prove $$ X_2 \subseteq X_1 $$.
  
  Thus $$ X_1 = X_2 $$.

- $$ g $$ is onto.

  Suppose $$ Y \in \mathcal P(B) $$.   Suppose $$ X = \{x \in A \; \vert \; f(x) \in Y \} $$.  

  Now proving that $$ Y = g(X) $$, will prove that $$ g $$ is onto.
  
  Suppose $$ y \in Y $$. Thus we have:       
  Since $$ f $$ is onto:       
  $$ \leftrightarrow \exists x \in A(f(x) \in Y \text{ and } y = f(x)) $$.      
  Using the definition of $$ X $$:     
  $$ \leftrightarrow x \in X \text{ and } y = f(x) $$.      
  Using the definition of $$ g(X) $$:       
  $$ \leftrightarrow y \in g(X) $$.         
  
  Since $$ y $$ is arbitrary, it follows that $$ Y = g(X) $$.
     
  Since $$ Y $$ is arbitrary, it follows that $$ g $$ is onto.
  
<hr/>
  
**Soln6**
  
**(a)**
  
We will prove this by induction.
  
- Base Case:
  
  For $$ n = 0 $$, Thus $$ I_n = \phi $$. Clearly since $$ I_n \sim I_m $$, it follows that we can choose a one-to-one and onto function $$ f: I_n \to I_m $$.
  Since $$ f $$ is onto and $$ I_n = \phi $$, it follows that $$ I_m = \phi $$. Thus $$ m = 0 = n $$.
  
- Induction Step:
  
  Suppose theorem is correct for $$ n $$. Thus if $$ I_n \sim I_m $$, it follows that $$ n = m $$.
  
  Now suppose $$ I_{n+1} \sim I_m $$. Thus we can choose a function $$ f: I_{n+1} \to I_m $$ such that $$ f $$ is one-to-one and onto.
  
  If we prove that $$ I_n \sim I_{m-1} $$, then we can use induction hypothesis to conclude that $$ n = m-1 $$, or $$ n+1 = m $$, thus proving $$ P(n+1) $$.  
  To prove $$ I_n \sim I_{m-1} $$, we need to prove that there exists a one-to-one and onto function from $$ I_n $$ to $$ I_{m-1} $$.
  
  To define such a function, lets first introduce few things.
  
  Let $$ f(n+1) = k $$. Since $$ I_m = \{ x \in Z^+ \; \vert \; x\le m \} $$. Since $$ k \in I_m $$, it follows $$ 1 \le k \le m $$. Thus $$ m \ge 1 $$. 
  Thus $$ m \in I_m $$.
    
  Since $$ m \in I_m $$ and $$ f $$ is onto, it follows that we can choose some $$ 1 \le j \le n+1 $$ such that $$ f(j) = m $$. Thus we have following:
  
  - $$ 1 \le k \le m $$ such that $$ k = f(n+1) $$.
  - $$ 1 \le j \le n+1 $$ such that $$ f(j) = m $$.

  Thus we can say that $$ (j,m) \in f $$ and $$ (n+1,k) \in f $$.
  
  Consider the relation $$ g = (f \setminus \{ (j,m),(n+1,k) \}) \cup \{ (j,k) \} $$. Since $$ f $$ is a function, it follows $$ g $$ is also a function. 
  Clearly by the definition of $$ g $$, we have $$ Dom(g) = Dom(f) \setminus \{n+1\} = I_{n+1} \setminus \{n+1\} = I_n $$. Similarly 
  $$ Ran(g) =  Ran(f) \setminus \{m\} = I_m \setminus \{m\} = I_{m-1} $$.
  
  Thus $$ g $$ is a function from $$ I_n \to I_{m-1} $$. Also by the definition of $$ g $$ and since $$ f $$ is one-to-one and onto, we can easily see that
  $$ g $$ is also one-to-one and onto.
 
  Thus $$ I_n \sim I_{m-1} $$. Thus by our induction hypothesis, it follows that $$ n = m-1 $$, or $$ n+1 = m $$.
  
  Thus we can conclude that if $$ I_{n+1} \sim I_m $$, then $$ n+1 = m $$.
  
**(b)**

  Suppose $$ A $$ is finite. Thus by the definition of finite, there atleast exist some $$ n $$ such that $$ I_n \sim A $$. Suppose there are two such sets
  such that $$ I_n \sim A $$ and $$ I_m \sim A $$. Since $$ \sim $$ is a transitive and associative relation, it follows that $$ I_n \sim I_m $$. Now we can 
  follow from part(a) of this solution that $$ n = m $$.
  
<hr/>  
  
**Soln7**

Given that $$ A $$ is finite. We need to prove that $$ A \sim B $$ iff:

- $$ B $$ is finite.     
- $$ \vert A \vert = \vert B \vert $$.     

($$ \to $$) Suppose $$ A $$ is finite and $$ A \sim B $$. Since $$ A $$ is finite, it follows that there is a unique $$ n \ge 0 $$ such that $$ I_n \sim A $$ and $$ \vert A \vert = n $$. 
Since $$ I_n \sim A $$ and $$ A \sim B $$, it follows that $$ I_n \sim B $$. Thus $$ B $$ is finite and $$ \vert B \vert = n $$. 

($$ \leftarrow $$) Suppose $$ B $$ is finite. Since $$ B $$ is finite, it follows that there is a unique $$ n \ge 0 $$ such that $$ I_n \sim B $$ and $$ \vert B \vert = n $$.
Since $$ \vert A \vert = \vert B \vert $$, it follows that $$ \vert A \vert = n $$. Thus $$ I_n \sim A $$. Since $$ I_n \sim B $$ and $$ I_n \sim A $$ and $$ \sim $$ is transitive,
it follows that $$ A \sim B $$.
 
<hr/>
 
**Soln8**
 
**(a)**
 
We have to prove that $$ \forall n \in \mathbb N \forall A (A \subseteq I_n \to A \text{ is finite and } \vert A \vert \le n) $$. Also if $$ I_n \ne A $$ then $$ \vert A \vert < n $$.
       
We will prove this by induction:

Note: We cant say anything about number of elements of $$ A $$. Thus we cant use induction on the number of elements in $$ A $$. Because lets say if we assumed that
$$ A $$ contains $$ k \in \mathbb N $$ elements, then this assumption automatically means that $$ A $$ is finite(which may not be the case).
       
- Base Case:
       
  For $$ n = 0 $$, clearly $$ I_n = \phi $$. Since $$ A \subseteq I_n $$, it follows that $$ A = \phi $$. Thus $$ \vert A \vert = I_n $$ and $$ \vert A \vert = 0 $$.
        
- Induction Step:
        
  Suppose for $$ n $$ theorem is correct. Thus for all $$ A $$, if $$ A \subseteq I_n $$, then $$ A $$ is finite and $$ \vert A \vert \le n $$. Also if
  $$ A \ne I_n $$, then $$ \vert A \vert < n $$.
  
  Now consider that $$ A \subseteq I_{n+1} $$. Consider the following cases:
   
  - Case $$ A = I_{n+1} $$.       
  
    Since $$ I_{n+1} \sim I_{n+1} $$, it follows $$ I_{n+1} \sim A $$, or $$ A $$ is finite and $$ \vert A \vert = n+1 $$. Also clearly $$ A \subseteq I_{n+1} $$.
     
  - Case $$ A \ne I_{n+1} $$.
     
    Since $$ A \subseteq I_{n+1} $$, there are following possible cases:
     
    - Case $$ n+1 \notin A $$.      
     
      Since $$ A \subseteq I_{n+1} $$ and $$ n+1 \notin A $$, it follows that $$ A \subseteq I_n \setminus \{n+1\} $$, or $$ A \subseteq I_n $$. Now clearly
      from the induction hypothesis $$ A $$ is finite and $$ \vert A \vert \le n $$.
      
    - Case $$ n+1 \in A $$.    
      
      Since $$ A \subseteq I_{n+1} $$ and $$ A \ne I_{n+1} $$, it follows that we can choose some element $$ k $$ from $$ I_{n+1} $$ such that $$ k \notin A $$.
      Also since $$ n+1 \in A $$, it follows that $$ k \in I_n $$. Now consider that set $$ A' = (A \cup \{k\} ) \, \setminus \, \{n+1\} $$.       
      Clearly $$ A' \subseteq I_n $$. Thus by induction hypothesis, it follows that $$ A' $$ is finite and $$ \vert A' \vert \le n $$.
      
      Now suppose $$ f: A' \to A $$ such that:      
        - if $$ a \ne k $$ then $$ f(a) = a $$.        
        - if $$ a = k $$ then $$ f(a) = n+1 $$.       
  
      Clearly $$ f $$ is one-to-one and onto function. Thus $$ A' \sim A $$. Then since $$ A' $$ is finite, we can follow from Ex-7 that $$ \vert A' \vert A \vert $$.
      Thus $$ \vert A \vert \le n $$.
      
    Thus from both cases $$ A $$ is finite and $$ \vert A \vert \le n $$.
     
  Thus from all cases $$ A $$ is finite and $$ \vert A \vert \le n $$.
           
**(b)**
      
Suppose $$ A $$ is finite and $$ B \subseteq A $$. Since $$ A $$ is finite, it follows that we can choose a one-to-one and onto function $$ f: A \to I_n $$.
Consider a function $$ g: B \to I_n $$ such that $$ g(b) = f(b) $$. Let $$ S = Ran(g) $$. Clearly $$ S \subseteq I_n $$. Thus from part(a) we have:

- $$ \vert S \vert \le n $$.     
- if $$ S \ne I_n $$, then $$ \vert S \vert < n $$.       

Now consider the function $$ h: B \to S $$ such that $$ h(b) = g(b) $$. Now we can easily check that $$ h $$ is one-to-one an onto.
 
Suppose $$ b_1, b_2 \in B $$ such that $$ h(b_1) = h(b_2) $$. Thus $$ f(b_1) = f(b_2) $$. Since $$ f $$ is one-to-one, it follows that $$ b_1 = b_2 $$. Thus
$$ h $$ is one-to-one.

Now suppose that $$ i \in S $$. Thus $$ i \in Ran(g) $$. Thus we can choose an element $$ b \in B $$ such that $$ g(b) = i $$. Since $$ g(b) = h(b) $$, it follows
that $$ h $$ is onto.

Thus $$ h $$ is one-to-one and onto. Thus $$ S \sim B $$. Thus from Ex-7, it follows that $$ \vert S \vert = \vert B \vert $$.
 
Thus $$ \vert B \vert \le n $$. Also if $$ S \ne I_n $$, then $$ \vert B \vert < n $$. 

For the case $$ S \ne I_n $$, it follows that $$ Ran(g) \ne I_n $$. Thus we can choose some element $$ i $$ in $$ I_n $$ such that $$ i \notin Ran(g) $$. But 
because $$ A \sim I_n $$, it follows that there exist some element $$ a \in A $$ such that $$ f(a) = i $$. Since $$ i \notin Rang(g) $$, it follows $$ a \notin B $$. Thus $$ A \ne B $$.
 
Thus we can conclude the following:
 
- $$ \vert B \vert \le n $$.     
- if $$ A \ne B $$, then $$ \vert S \vert < n $$.       
 
<hr/>

**Soln9**

We will prove this by contradiction. Suppose $$ A $$ is finite. Thus we can choose some positive number $$ n $$ such that $$ I_n \sim A $$. Since $$ A \sim B $$,
 it follows that $$ I_n \sim B $$. Thus $$ \vert B \vert = \vert A \vert = n $$.           
Now since $$ A $$ is finite and $$ B \subseteq A $$ and $$ B \ne A $$, then it follows from Ex-8 part(b) that $$ \vert B \vert < \vert A \vert $$. Thus we have a 
a contradiction. Thus $$ A $$ is not finite, or $$ A $$ is infinite.

<hr/>

**Soln10**

We will prove this by induction.

- Base Case:

  For $$ n = 0 $$, it follows that $$ I_n = \phi $$. Since $$ f $$ is onto, it follows that $$ B = \phi $$. Thus $$ B $$ is finite and $$ \vert B \vert = 0 $$.
  
- Induction Step:
  
  Suppose theorem is correct for $$ n $$. Thus if $$ f: I_n \to B $$ and $$ f $$ onto then $$ B $$ is finite and $$ \vert B \vert \le n $$.
  
  Now consider an *onto* function $$ f: I_{n+1} \to B $$. Thus proving $$ B $$ is finite and $$ \vert B \vert \le n+1 $$ will complete our proof.
  
  Let $$ b = f(n+1) $$ and $$ B' = B \setminus \{b\} $$. Suppose $$ g = f \setminus \{(n+1,b)\} $$. Since $$ f $$ is a function, clearly $$ g $$ is also
   a function. Also since $$ f $$ is onto, $$ g $$ is also onto. Also we can see that $$ Dom(g) = B \setminus \{b\} = B' $$ and $$ Ran(g) = I_{n+1} \setminus \{n+1\} = I_n $$.
   
  Thus we have $$ g: I_n \to B' $$ and $$ g $$ is onto. It follows from induction hypothesis that $$ B' $$ is finite and $$ \vert B' \vert \le n $$.
  
  Since $$ B' $$ is finite, we can choose a number $$ m \in \mathbb N $$ such that $$ I_m \sim B' $$. Thus $$ \vert B' \vert = m $$.
  Since $$ I_m \sim B' $$, we can choose a one-to-one and onto function $$ h: I_m \to B' $$. Now consider $$ h' = h \cup \{(m+1,b)\} $$.
  As $$ h $$ is one-to-one and onto, it follows that $$ h' $$ is also one-to-one and onto. Also by the definition of $$ h' $$ we have $$ Ran(h') = B' \cup \{b\} = B $$
  and $$ Dom(B') = I_m \cup \{m+1\} = I_{m+1} $$. Thus $$ h': I_{m+1} \to B $$. Thus $$ I_{m+1} \sim B $$. It follows that $$ B $$ is finite and $$ \vert B \vert = m+1 $$.
  
  We have $$ \vert B' \vert \le n $$, or $$ m \le n $$, it follows that $$ m+1 \le n+1 $$. Thus $$ \vert B \vert \le n+1 $$.
  
<hr/>
  
**Soln11**

**(a)**
  
Suppose $$ A $$ and $$ B $$ are finite and $$ f: A \to B $$. Suppose $$ \vert A \vert < \vert B \vert $$. We will prove by contradiction. Suppose $$ f $$ is
onto. Since $$ A $$ is finite, we can choose some integer $$ n $$ such that $$ I_n \sim A $$. Thus we can choose a one-to-one and onto function $$ g: I_n \to A $$.
Since $$ g: I_n \to A $$ and $$ f: A \to B $$, it follows $$ f \circ g: I_n \to B $$. Since $$ f $$ and $$ g $$ are onto, it follows that $$ f \circ g $$ is onto.
Thus it follows from Soln10 that $$ \vert B \vert \le n $$. Since $$ n = \vert A \vert $$, it follows $$ \vert B \vert \le \vert A \vert $$. But this contradicts
with the given that $$ \vert A \vert < \vert B \vert $$. Thus our assumption that $$ f $$ is onto is wrong. It follows that $$ f $$ is not onto.

**(b)**

Suppose $$ A $$ and $$ B $$ are finite and $$ f: A \to B $$. Suppose $$ \vert A \vert > \vert B \vert $$. We will prove by contradiction. Suppose $$ f $$ is
one-to-one. Since $$ B $$ is finite, we can choose some integer $$ n $$ such that $$ B \sim I_n $$. Thus we can choose a one-to-one and onto function $$ g: B \to I_n $$.
Since $$ f: A \to B $$ and $$ g: B \to I_n $$, it follows $$ g \circ f: A \to I_n $$. Since $$ f $$ and $$ g $$ are one-to-one, it follows that $$ g \circ f $$ is one-to-one.
Let $$ S = Ran(g \circ f) $$. Clearly $$ S \subseteq I_n $$. Consider the function $$ h: A \to S $$ such that $$ h(a) = g \circ f(a) $$. Clearly $$ h $$ is 
one-to-one and onto. Thus $$ A \sim S $$. Since $$ S \subseteq I_n $$, it follows form Ex-8 that $$ S $$ is finite and $$ \vert S \vert \le n $$.
Also since $$ A $$ is finite and $$ S $$ is finite, it follows from Ex-7 that $$ \vert A \vert = \vert S \vert $$. Thus $$ \vert A \vert \le n $$. Since $$ \vert B \vert = n $$,
it follows that $$ \vert A \vert \le \vert B \vert $$. But this contradicts with $$ \vert A \vert > \vert B \vert $$. Thus our assumption is wrong. Thus $$ f $$ is
one-to-one.

**(c)**

Suppose $$ \vert A \vert = \vert B \vert $$. Thus $$ A $$ and $$ B $$ are finite and for some positive number $$ n $$, $$ I_n \sim A $$ and $$ I_n \sim B $$.
It follows that $$ A \sim B $$. 
Suppose $$ f: A \to B $$. We have to prove the following:

- if $$ f $$ is one-to-one, then $$ f $$ is onto.
- if $$ f $$ is onto, then $$ f $$ is one-to-one.

Lets prove one by one:

- if $$ f $$ is one-to-one, then $$ f $$ is onto.

  Suppose $$ f: A \to  B $$ is one-to-one. To prove that $$ f $$ is onto, it will suffice to prove that $$ Ran(f) = B $$. Let $$ S = Ran(f) $$. Thus $$ S \subseteq B $$. 
  Suppose $$ g: A \to S $$ such that $$ g(a) = f(a) $$. Clearly $$ g $$ is one-to-one and onto. Thus $$ A \sim S $$. It follows from Ex-7 that $$ \vert A \vert = \vert S \vert $$. 
  Since $$ \vert A \vert = \vert B \vert $$, it follows $$ \vert S \vert = \vert B \vert $$. Now we will prove by contradiction that $$ S = B $$. Suppose $$ S \ne B $$.
  Since $$ S \subseteq B $$, it follows that we can choose some element $$ b \in B $$ such that $$ b \notin S $$. Suppose $$ B' = B \setminus \{b\} $$. Since
  $$ b \notin S $$, clearly $$ S \subseteq B' $$. Thus $$ \vert S \vert \le \vert B' \vert $$. Also we can see that $$ B' \ne B $$ and $$ B' \subseteq B $$,
  it follows from Ex-8 part(b) that $$ \vert B' \vert < n $$. Since $$ \vert S \vert \le \vert B' \vert $$ and $$ \vert B' \vert < n $$, it follows that
  $$ \vert S \vert < n $$. But this contradicts with $$ \vert S \vert = \vert B \vert = n $$. Thus it follows that $$ S = B $$. Thus $$ Ran(f) = B $$. Thus
  $$ f $$ is onto.
  
- if $$ f $$ is onto, then $$ f $$ is one-to-one.

  Suppose $$ f: A \to B $$ is onto. Suppose $$ a_1, a_2 \in A $$ such that $$ f(a_1) = f(a_1) $$. Now we will prove by contradiction that $$ a_1 = a_2 $$.
  Suppose $$ a_1 \ne a_2 $$. Let $$ A' = A \setminus \{a_1\} $$. Thus $$ A' \subseteq A $$ and $$ A' \ne A $$. Consider function $$ g: A' \to B $$ such that $$ g(a) = f(a) $$.
  Clearly $$ g $$ is onto. Also since $$ A' \subseteq A $$ and $$ A' \ne A $$, it follows from Ex-8 part(b) that $$ A' $$ is finite and $$ \vert A' \vert < n $$.
  Let $$ \vert A' \vert = k $$. Thus $$ k < n $$. Since $$ \vert A' \vert = k $$, we can choose a one-to-one and onto function $$ h: I_k \to A' $$. Thus $$ g \circ h: I_k \to B $$.
  Since $$ g $$ and $$ h $$ are onto, it follows that $$ g \circ h $$ is also onto. Since $$ g \circ h: I_k \to B $$ and $$ g \circ h $$ is onto, it follows from Ex10 that $$ \vert B \vert \le k $$.
  Since $$ k < n $$, it follows that $$ \vert B \vert < n $$. This contradicts with $$ \vert B \vert = n $$. Thus our assumption that $$ a_1 \ne a_2 $$ is wrong.
  Thus $$ a_1 = a_2 $$. Since $$ a_1, a_2 $$ are arbitrary, it follows that $$ f $$ is one-to-one.
  
<hr/>
  
**Soln12** TODO. It is solved in book.
   
<hr/>
   
**Soln13**
   
Given:
 
- $$ A \cap C = \phi $$ and $$ B \cap D = \phi $$.       
- $$ f: A \to B $$ and $$ g: C \to D $$ such that both functions are one-to-one and onto.

Goal:

- To Prove $$ f \cup g $$ is one-to-one and onto function from $$ A \cup C $$ to $$ B \cup D $$.
 
Thus we first need to prove that $$ f \cup g $$ is a function.

To prove $$ f \cup g $$  is a function, we need to prove existence and uniqueness:
   
- Existence:

  Suppose $$ x \in A \cup C $$. Since $$ A \cap C = \phi $$, it follows either $$ x \in A $$ or $$ x \in C $$. Suppose $$ x \in A $$ then $$ y = f(x) \in B $$. Thus
  $$ y \in B \cup D $$. Since $$ (x,y) \in f $$, it follows $$ (x,y) \in f \cup g $$ such that $$ x \in A \cup C $$ and $$ y \in B \cup D $$.
  
  Similarly if $$ x \in C $$, we can prove that there exist an element $$ y \in B \cup D $$ such that $$ (x,y) \in f \cup g $$.
  
- Uniqueness:
  
  Suppose $$ (x,y_1), (x,y_2) \in f \cup g $$. Thus we have following possible cases:
  
  - Case $$ (x,y_1) \in f $$ and $$ (x,y_2) \in g $$.        

    Thus $$ x \in A $$ and $$ x \in C $$. But $$ A \cap C = \phi $$. Thus this case is not possible. 
   
  - Case $$ (x,y_1) \in g $$ and $$ (x,y_2) \in f $$.

    Thus $$ x \in C $$ and $$ x \in A $$. But $$ A \cap C = \phi $$. Thus this case is not possible. 

  - Case $$ (x,y_1) \in f $$ and $$ (x,y_2) \in f $$.
  
    Since $$ f $$ is a function, it follows $$ y_1 = y_2 $$.

  - Case $$ (x,y_1) \in f $$ and $$ (x,y_2) \in g $$.

    Since $$ g $$ is a function, it follows $$ y_1 = y_2 $$.
    
  Thus from all possible cases, $$ y_1 = y_2 $$. Thus $$ f \cup g $$ is a function.
    
Now we shall prove that $$ f \cup g $$ is one-to-one:
    
Suppose $$ (x_1, y), (x_2,y) \in f \cup g $$. Thus we have following possible cases:
        
- Case $$ (x_1,y) \in f $$ and $$ (x_2,y) \in g $$.        

  Thus $$ y \in B $$ and $$ y \in D $$. But this is not possible since $$ B \cap D = \phi $$.

- Case $$ (x_1,y) \in g $$ and $$ (x_2,y) \in f $$.

  Thus $$ y \in D $$ and $$ y \in B $$. But this is not possible since $$ B \cap D = \phi $$.

- Case $$ (x_1,y) \in f $$ and $$ (x_2,y) \in f $$.
  
  Since $$ f $$ is one-to-one, it follows that $$ x_1 = x_2 $$.

- Case $$ (x_1,y) \in f $$ and $$ (x_2,y) \in g $$.

  Since $$ g $$ is onto, it follows that $$ x_1 = x_2 $$.
        
Thus from all possible cases, $$ x_1 = x_2 $$. Thus $$ f \cup g $$ is a one-to-one function.

Now we will prove that $$ f \cup g $$ is onto:
   
Suppose $$ y \in B \cup D $$. Thus either $$ y \in B $$ or $$ y \in D $$. Suppose $$ y \in B $$, it follows that we can choose $$ x \in A $$ such that 
$$ (x,y) \in f $$. Thus $$ (x,y) \in f \cup g $$. Thus there exist an element $$ x $$ such that $$ (x,y) \in f \cup g $$.       
Now suppose $$ y \in D $$. It follows that we can choose $$ x \in C $$ such that $$ (x,y) \in g $$. Thus $$ (x,y) \in f \cup g $$. Thus there exist an 
element $$ x $$ such that $$ (x,y) \in f \cup g $$.
Thus in either case there exist an $$ x $$ such that $$ (x,y) \in f \cup g $$. Thus $$ f \cup g $$ is onto.

<hr/>

**Soln14**

**(a)**

Suppose $$ B $$ is infinite. Let $$ S = \{ f(m) \; \vert \; m \in \mathbb Z^+, m < n \} $$. We will prove by contradiction that $$ B \setminus S \ne \phi $$. 
Suppose $$ B \setminus S = \phi $$. It follows that $$ B \subseteq S $$. Suppose $$ g: I_n \to S $$ such that $$ g(i) = f(i) $$. Clearly $$ g $$ is an onto function.
Thus by Ex-10, it follows that $$ S $$ is finite and $$ \vert S \vert \le n $$. Since $$ B \subseteq S $$ and $$ S $$ is finite, it follows from Ex-8 part(b) 
that $$ B $$ is finite. But this is a contradiction since it was assumed in the problem the $$ B $$ is infinite. Thus $$ B \setminus S \ne \phi $$.

**(b)**

We will prove this by strong induction.

Suppose $$ n $$ is an arbitrary natural number. Suppose $$ \forall k < n(f(k) \ge k) $$.

We know that $$ f(n) = $$ smallest element of $$ B \setminus \{ f(m) \; \vert \; m \in \mathbb Z^+, m < n \} $$. Suppose $$ S_n = \{ f(m) \; \vert \; m \in \mathbb Z^+, m < n \} $$.
Let $$ f(n) = s $$. We will prove by contradiction that $$ f(n) \ge n $$.
Suppose $$ f(n) < n $$, or $$ s < n $$. Since $$ s < n $$, then by induction hypothesis it follows that $$ f(s) \ge s $$.
      
We know that $$ f(n) = $$ smallest element of set $$ B \setminus S_n $$. Thus we can also say $$ s \in B \setminus S_n $$. 
      
Since $$ s < n $$, it follows that $$ \{ f(m) \; \vert \; m \in \mathbb Z^+, m < s \} \subseteq \{ f(m) \; \vert \; m \in \mathbb Z^+, m < n \} $$.
Or we can also say $$ S_s \subseteq S_n $$.
  
We know that for sets $$ X,Y,Z $$, if $$ Y \subseteq Z $$, then $$ X \setminus Z \subseteq X \setminus Y $$.
   
Thus $$ B \setminus S_n \; \subseteq \; B \setminus S_s $$.
   
Since $$ s \in B \setminus S_n $$, it follows $$ s \in B \setminus S_s $$. But by definition of $$ f $$, $$ f(s) = $$ smallest element of $$ B \setminus S_s $$.
Thus $$ f(s) \le s $$. But $$ f(s) \ge s $$. Thus $$ f(s) = s $$.

Since $$ s < n $$, then by the definition of $$ S_n $$, it follows that $$ s \in S_n $$. Thus $$ s \notin B \setminus S_n $$. Thus $$ f(n) \notin B \setminus S_n $$,
 which is clearly a contradiction with the definition of function $$ f $$. Thus our assumption is wrong. Thus $$ f(n) \ge n $$.
 
**(c)**
 
- Proof for $$ f $$ is one-to-one:
 
  Suppose $$ i_1, i_2 \in Z^+ $$ such that $$ f(i_1) = f(i_2) $$. We will prove by contradiction that $$ i_1 = i_2 $$. Suppose $$ i_1 \ne i_2 $$. Thus either
  $$ i_1 > i_2 $$ or $$ i_1 < i_2 $$. Suppose $$ i_1 > i_2 $$. Since $$ f(i_1) = $$ smallest element of $$ B \setminus \{ f(m) \; \vert \; m \in \mathbb Z^+, m < i_1 \} $$.
  Since $$ i_1 > i_2 $$, it follows that $$ f(i_2) \in \{ f(m) \; \vert \; m \in \mathbb Z^+, m < i_1 \} $$. Thus $$ f(i_2) \notin B \setminus \{ f(m) \; \vert \; m \in \mathbb Z^+, m < i_1 \} $$.
  Thus $$ f(i_1) \ne f(i_2) $$. But it contradicts with $$ f(i_1) = f(i_2) $$.
  Similarly we will get a contradiction for $$ i_1 < i_2 $$. Thus $$ i_1 = i_2 $$. Thus $$ f $$ is one-to-one.
  
- Proof for $$ f $$ is onto:

  Suppose $$ b \in B $$. From part(b) we have $$ f(b+1) \ge b+1 $$. Since $$ f(b+1) = $$ smallest element of $$ B \setminus \{ f(m) \; \vert \; m \in \mathbb Z^+, m < b+1 \} $$ and
  $$ b+1 > b $$, it follows that $$ b \notin B \setminus \{ f(m) \; \vert \; m \in \mathbb Z^+, m < b+1 \} $$. Since $$ b \in B $$, it follows that 
  $$ b \in \{ f(m) \; \vert \; m \in \mathbb Z^+, m < b+1 \} $$. Thus for some $$ m \in Z^+ $$ such that $$ m < b+1 $$, $$ f(m) = b $$. Thus $$ f $$ is onto. 
  
<hr/>
  
**Soln15**
  
Suppose $$ B \subseteq A $$. Suppose $$ A $$ is countable. Thus by theorem 7.1.5, we can choose a function $$ f: A \to Z+ $$ such that $$ f $$ is one-to-one.
Suppose $$ g: B \to Z^+ $$ such that $$ g(b) = f(b) $$. Since $$ f $$ is one-to-one, it clearly follows that $$ g $$ is also one-to-one. Thus again by theorem 7.1.5,
it follows that $$ B $$ is countable.

<hr/>

**Soln16**

Suppose $$ B \subseteq A $$, and $$ A $$ is infinite, and $$ B $$ is finite. We will prove by contradiction that $$ A \setminus B $$ is infinite. Suppose 
$$ A \setminus B $$ is finite. Thus for some $$ n \in \mathbb N $$, $$ A \setminus B \sim I_n $$. Since $$ B $$ is finite and for some $$ k \in \mathbb N $$,
$$ B \sim I_k $$. 

Suppose $$ x \in I_k $$. Thus $$ 1 \le x < k $$. Thus $$ n+1 \le n+x < n+k $$. It follows that $$ n+x \in I_{n+k} \setminus I_n $$. Thus we can difine a 
 function $$ g(x) = n+x $$ from $$ I_k $$ to $$ I_{n+k} \setminus I_n $$. Thus $$ I_k \sim I_{n+k} \setminus I_n $$.
 
Since $$ B \sim I_k $$ and $$ I_k \sim I_{n+k} \setminus I_k $$, it follows that $$ B \sim I_{n+k} \setminus I_k $$. Also we have $$ A \setminus B \sim I_n $$.
Since $$ A \setminus B $$ and $$ B $$ are disjoint, and $$ I_n $$ and $$ I_{n+k} \setminus I_n $$, it follows that $$ (A \setminus B) \cup B \; \sim \; I_n \cup (I_{n+k} \setminus I_n) $$.
Thus $$ A \cup I_{n+k} $$. It follows that $$ A $$ is finite. But this contradicts with $$ A_n $$ is inifinite. Thus our assumption is wrong. Thus $$ A \setminus B $$
is infinite.

<hr/>

**Soln17**

Suppose $$ A $$ is denumerable. Thus we can declare $$ A $$ as $$ \{a_1, a_2, a_3 .... \} $$. Thus we can also say $$ B_n = \{ a+i \; \vert \; i \in I_n \} $$
such that $$ B_n \subseteq A $$. Since $$ R $$ is partial order on $$ A $$, it follows from Ex-2 from section 6.2, that we can define a partial order $$ R_n $$
such that $$ R \subseteq R_n $$ and $$ \forall i \in B_n \forall j \in A((a_i R_n a_j) \lor (a_j R_n a_i)) $$. 

Now consider $$ B_{n+1} $$ such that $$ B_{n+1} subseteq A $$. Since $$ R_n $$ is partial order on $$ A $$, and again using Ex-2, Sec-6.2, we can define a 
partial order $$ R_{n+1} $$ such that $$ R_n \subseteq R_{n+1} $$ and $$ \forall i \in B_{n+1} \forall j \in A((a_i R_{n+1} a_j) \lor (a_j R_{n+1} a_i)) $$.
    
Let $$ R_0 = R $$. Thus we have $$ R_0 \subseteq R_1 \subseteq R_2 \subseteq .... $$. Suppose $$ T = \cup_{i \in \mathbb N} R_n $$. 
    
Now we will prove that $$ T $$ is a total order on $$ A $$ such that $$ R \subseteq T $$.    

Thus we first need to prove that $$ T $$ is partial order:
       
- $$ T $$ is reflexive:
       
  Since $$ R $$ is partial order on $$ A $$ it follows $$ i_A \subseteq R $$. Since $$ R \subseteq R_n $$, it follows $$ R \subseteq T $$. Thus $$ i_A \subseteq T $$.
  Thus $$ T $$ is reflexive.
  
- $$ T $$ is transitive:
  
  Suppose $$ (a_1,a_2) \in T $$ and $$ (a_2,a_3) \in T $$. Thus for some $$ m, n \in \mathbb N $$, $$ (a_1,a_2) \in R_m $$ and $$ (a_2,a_3) \in R_n $$. Suppose
  $$ m = n $$, then clearly since $$ R_m $$ is partial order, it follows $$ (a_1,a_3) \in R_m $$.          
  Now suppose $$ m \ne n $$. Then either $$ m > n $$ or $$ m < n $$. Thus either $$ R_n \subseteq R_m $$ or $$ R_m \subseteq R_n $$. Since $$ R_m $$ and $$ R_n $$ are 
  partial order, it follows that either $$ (a_1,a_3) \in R_m $$ or $$ (a_1, a_3) \in R_n $$. Thus $$ (a_1,a_3) \in T $$. Thus $$ T $$ is transitive.
  
- $$ T $$ is antisymmetric:
  
  Suppose $$ (a_1,a_2) \in T $$ and $$ (a_2,a_1) \in T $$. Thus for some $$ m, n \in \mathbb N $$, $$ (a_1,a_2) \in R_m $$ and $$ (a_2,a_3) \in R_n $$. If $$ m = n $$,
  clearly since $$ R_n $$ ia partial order, it follows $$ a_1 = a_2 $$. Now suppose $$ m \ne n $$. Thus either $$ m > n $$ or $$ m < n $$. Thus either $$ R_n \subseteq R_m $$ 
  or $$ R_m \subseteq R_n $$. Thus $$ a_1 = a_2 $$ in either case. Thus $$ T $$ is antisymmetric.
  
Since $$ T $$ is reflexive, transitive and antisymmetric it follows that $$ T $$ is partial order.

Now suppose that $$ a_m, a_n \in A $$. Suppose $$ k $$ is the largest of $$ m $$ and $$ n $$. By the definition of $$ B_n $$, it follows that $$ a_m \in B_k $$ and $$ a_n \in B_k $$.
Since $$ \forall i \in B_k \forall j \in A((a_i R_k a_j) \lor (a_j R_k a_i)) $$, it follows that either $$ (a_m, a_n) \in R_k $$ or $$ (a_n,a_m) \in R_k $$.
Since $$ R_k \subseteq T $$, it follows that either $$ (a_m, a_n) \in T $$ or $$ (a_n,a_m) \in T $$. 

Thus $$ T $$ is total order.

<hr/>

**Soln18**

Suppose $$ B \subseteq A $$, and $$ A, B, A \setminus B $$ are finite. Thus for some $$ m,n,k \in \mathbb N $$, $$ A \sim I_m $$, $$ B \sim I_n $$ and $$ A \setminus B \sim I_k $$.
$$ B \sim I_k $$. 

Suppose $$ x \in I_k $$. Thus $$ 1 \le x < k $$. Thus $$ n+1 \le n+x < n+k $$. It follows that $$ n+x \in I_{n+k} \setminus I_n $$. Thus we can difine a 
 function $$ g(x) = n+x $$ from $$ I_k $$ to $$ I_{n+k} \setminus I_n $$. Thus $$ I_k \sim I_{n+k} \setminus I_n $$.
 
Since $$ A \setminus B \sim I_k $$ and $$ I_k \sim I_{n+k} \setminus I_n $$, it follows that $$ A \setminus B \sim I_{n+k} \setminus I_n $$. Since 
$$ B, \; A \setminus B $$ are disjoint and $$ I_n, \; I_{n+k} \setminus I_n $$ are also disjoint and $$ B \sim I_n $$, it follows that
$$ B \cup (A \setminus B) \; \sim \; I_n \cup (I_{n+k} \setminus I_n) $$. Thus $$ A \sim I_{n+k} $$. It follows from Ex-7 that $$ \vert A \vert = \vert I_{n+k} \vert $$.
Thus $$ m = n+k $$, or  $$ k = m-n $$, or $$ \vert A \setminus B \vert = \vert A \vert - \vert B \vert $$.

<hr/>

**Soln19**

We will prove this by induction.

- Base Case:

  For $$ n = 1 $$, we have $$ \cup_{i \in I_n} A_i = A_1 $$. Since $$ A_1 $$ is finite, it follows $$ \cup_{i \in I_n} A_i $$ is also finite.
  Also $$ \vert \cup_{i \in I_n} A_i \vert = \vert A_1 \vert = \sum_{i=1}^n \vert A_i \vert $$.
  
- Induction Step:
  
  Suppose for $$ n \in \mathbb N $$, theorem is correct. Thus $$ \cup_{i \in I_n} A_i $$ is finite and $$ \vert \cup_{i \in I_n} A_i \vert = \sum_{i=1}^n \vert A_i \vert $$.
  
  Since $$ A_i \cap A_j = \phi $$, if $$ i \ne j $$, it follows that $$ A_{n+1} \cap (\cup_{i \in I_n} A_i ) = \phi $$. Since $$ A_{n+1} $$ is finite and 
  by induction hypothesis $$ \cup_{i \in I_n} A_i $$ is also finite. Thus for some $$ p,q \in \mathbb N $$ we have $$ A_{n+1} \sim I_p $$ and $$ (\cup_{i \in I_n} A_i ) \sim I_q $$.
    
  Since $$ I_p \sim I_{p+q} \setminus I_q $$, it follows that $$ A_{n+1} \sim (I_{p+q} \setminus I_q) $$. 
    
  Since $$ (I_{p+q} \setminus I_q) \cap I_q = \phi $$ and $$ A_{n+1} \cap (\cup_{i \in I_n} A_i) = \phi $$, it follows that $$ (I_{p+q} \setminus I_q) \cup I_q \; \sim \; A_{n+1} \cap (\cup_{i \in I_n} A_i) $$.
  Thus $$ I_{p+q} \; \sim \; \cup_{i \in I_{n+1} } A_i $$. 
  
  Thus $$ \cup_{i \in I_{n+1} } A_i $$ is finite and $$ \vert \cup_{i \in I_{n+1} } A_i \vert $$ is         
  $$ = \vert I_{p+q} \vert $$        
  $$ = p+q $$       
  $$ = \sum_{i=1}^n \vert A_i \vert \; + \; \vert A_{n+1} \vert $$        
  $$ = \sum_{i=1}^{n+1} \vert A_i \vert $$.      
  
<hr/>

**Soln20**  
   
**(a)**

Suppose $$ A $$ and $$ B $$ are finite. We will prove by induction on number of elements in $$ B $$.
 
- Base Case:
 
  Suppose $$ \vert B \vert = 0 $$. Thus $$ B = \phi $$. It follows that $$ \vert A \times B \vert = \vert \phi \vert = 0 = \vert A \vert \times 0 $$.
  
- Induction Step:
  
  Suppose theorem is correct if  $$ \vert B \vert = n $$. Thus $$ \vert A \times B \vert = \vert A \vert \cdot \vert B \vert $$.
   
  Now suppose $$ \vert B \vert $$ contains $$ n+1 $$ elements. Suppose $$ b \in B $$ is an arbitrary element. Let $$ B' = B \setminus \{b\} $$. Since 
  $$ \{ b \} $$ and $$ B $$ are finite, it follows form Ex-18 that $$ \vert B \setminus \{b\} = n+1 - 1 = n $$. Thus $$ \vert B' \vert = n $$.
   
  Since $$ B = B' \cup \{b\} $$, it follows $$ A \times B = A \times (B' \cup \{ b\} = (A \times B') \cup (A \times \{ b \}) $$. By induction hypothesis
  we know that $$ \vert A \times B' \vert = \vert A \vert \times \vert B' \vert $$. 
   
  Clearly each set of $$ A \times \{b\} $$ contains $$ (x,b) $$ where $$ x \in A $$. Thus we can clearly write a one-to-one and onto function $$ f: A \to (A \times \{b\}) $$
  such that $$ f(x) = (x,b) \} $$. Thus $$ (A \times \{b\}) \sim A $$. Thus it follows from Ex-7 that $$ \vert (A \times \{b\}) \vert = \vert A \vert $$.
  
  Since $$ A \times \{b\} $$ and $$ A \times B' $$ are disjoint it follows that $$ \vert (A \times B') \cup (A \times \{ b \}) \vert $$ is       
  $$ = \vert (A \times B') \vert \; + \; \vert (A \times \{ b \}) \vert $$          
  $$ = \vert A \vert \cdot \vert B' \vert \; + \; \vert A \vert $$         
  $$ = (\vert B' \vert + 1) \cdot \vert A \vert $$         
  $$ = (n + 1) \cdot \vert A \vert $$         
  $$ = \vert B \vert \cdot \vert A \vert $$
           
**(b)**           
            
  A meal is a pair $$ (a,b) \in E \times D $$ where $$ E $$ is set of entrees and $$ D $$ is set of desserts.            
  Thus from part(a) $$ \vert E \times D \vert = \vert E \vert \times \vert D \vert = 5 \times 3 = 15 $$. 
    
<hr/> 

**Soln21**
    
**(a)**

Since all the functions from $$ A $$ to $$ C $$ are subsets of $$ A \times C $$. Thus we have:

$$ \vert {^A C} \vert = \{ h \; \vert \; h \subseteq A \times C \} $$.      
$$ \vert {^B D} \vert = \{ h \; \vert \; h \subseteq B \times D \} $$.      

Since $$ A \sim B $$, it follows that we can choose one-to-one and onto function $$f: A \to B $$.        
Similarly, since $$ C \sim D $$, it follows that we can choose one-to-one and onto function $$g: C \to D $$.

Suppose $$ \mathcal H: {^A C} \to {^B D} $$ is defined as:
  
$$ \mathcal H(h) = \{ (f(a),g(b)) \in B \times D \; \vert \; (a,b) \in h \} $$.
  
Now we will prove that $$ \mathcal H $$ is a one-to-one and onto function. 
  
- Proof for $$ \mathcal H $$ is a function:

  Suppose $$ h \in {^A C} $$. If $$ h = \phi $$, clearly $$ \mathcal H(h) = \phi $$. Suppose if $$ h \ne \phi $$, then clearly the set $$ \{ (f(a),g(b)) \in B \times D \; \vert \; (a,b) \in h \} $$
  is not empty because $$ f $$ and $$ g $$ are functions. Now suppose $$ (h,k_1), (h,k_2) \in \mathcal H $$. Then by the definition of $$ \mathcal H $$, it 
  follows that $$ k_1 = k_2 $$. Thus for each $$ h \in {^A C} $$ there exist a single/unique $$ k \in {^B D} $$. Thus $$ \mathcal H $$ is a function. 

- Proof for $$ \mathcal H $$ is one-to-one:
  
  Suppose $$ h_1, h_2 $$ are arbitrary elements in $$ {^A C} $$ such that $$ \mathcal H(h_1) = \mathcal H(h_2) $$. Thus if we show that $$ h_1 = h_2 $$, it will 
  prove that $$ \mathcal H $$ is one-to-one.
     
  Suppose $$ (a, c) \in h_1 $$. It follows that $$ (f(a), g(c)) \in \mathcal H(h_1) $$. Let $$ x = f(a), y = g(c) $$. Thus $$ (x, y) \in \mathcal H(h_1) $$. Since 
  $$ \mathcal H(h_1) = \mathcal H(h_2) $$, it follows that $$ (x,y) \in \mathcal H(h_2) $$. By the definition of $$ \mathcal H $$, it follows that for some $$ a' \in A $$,
  $$ f(a') = x $$, and for some $$ c' \in C $$, $$ g(c') = y $$ such that $$ (a', c') \in h_2 $$. Since $$ f, g $$ are one-to-one function, it follows that $$ a = a' $$ and $$ c = c' $$. Thus
  it follows that $$ (a,c) \in h_2 $$. Since $$ (a,c) $$ is arbitrary, it follows that $$ h_1 \subseteq h_2 $$.         
  Similarly it can be proved that $$ h_2 \subseteq h_1 $$. Thus $$ h_1 = h_2 $$. Thus $$ \mathcal H $$ is one-to-one.
                       
- Proof for $$ \mathcal H $$ is onto:

  Suppose $$ k \in {^B D} $$. Suppose $$ (b,d) \in k $$. Thus $$ b \in B $$ and $$ d \in D $$. Since $$ f,g $$ are onto functions, it follows that we can choose
  element $$ a \in A $$ and $$ c \in C $$ such that $$ b = f(a) $$ and $$ d = f(c) $$. Thus we can define the following set:
  
  $$ h = \{ (a,c) \in A \times B \; \vert \; f(a) = b \text{ and } f(c) = d \text{ and } (b,d) \in k \} $$.
   
  Clearly $$ \mathcal H(h) = k $$. Thus $$ \mathcal H $$ is onto.
   
Thus $$ \mathcal H: {^A C} \to {^B D} $$ is a one-to-one and onto function. It follows that $$ {^A C} \sim {^B D} $$.
    
**(b)**
    
Suppose $$ \mathcal H : ({ ^A C } \times { ^B C }) \, \to \, { ^{A \cup B} C }  $$ such that $$ \mathcal H(f,g) = f \cup g $$.
     
Clearly proving $$ \mathcal H $$ as a one-to-one and onto function will complete the proof.
     
- Proof that $$ \mathcal H $$ is a function:
  
  Since $$ f \subseteq A \times C $$ and $$ g \subseteq B \times C $$, it follows that $$ f \cup g $$ is also a set and $$ f \cup g \subseteq (A \cup B) \times C $$.
  Also clearly by set the definition of union, there is exactly one union $$ f \cup g $$ for the sets $$ f $$ and $$ g $$.
  
- Proof that $$ \mathcal H $$ is one-to-one:
  
  Suppose $$ (f_1,g_1), (f_2,g_2) $$ are arbitrary elements of $$ { ^A C } \times { ^B C } $$ such that $$ \mathcal H(f_1, g_1) = \mathcal H(f_2,g_2) $$. Thus
  by the definition of $$ \mathcal H $$, it follows that $$ f_1 \cup g_1 = f_2 \cup g_2 $$.
  Since $$ f_1, f_2 $$ are subsets of $$ A \times C $$ and $$ g_1, g_2 $$ are subsets of $$ B \times C $$ and $$ A \cap B = \phi $$, it follows that:       
  - $$ f_1 \cap g_1 = \phi $$.         
  - $$ f_1 \cap g_2 = \phi $$.         
  - $$ f_2 \cap g_1 = \phi $$.         
  - $$ f_2 \cap g_2 = \phi $$.         
  Now we will prove by contradiction that $$ f_1 = f_2 $$ and $$ g_1 = g_2 $$. Suppose $$ f_1 \ne f_2 $$. Thus we can choose an element $$ (a,c) \in A \times C $$,
  either $$ (a,c) \in f_1 \setminus f_2 $$ or $$ (a,c) \in f_2 \setminus f_1 $$. Suppose $$ (a,c) \in f_1 \setminus f_2 $$. Since $$ f_1 \cup g_1 = f_2 \cup g_2 $$
  and $$ (a,c) \in f_1 $$ and $$ (a,c) \notin f_2 $$, it follows that $$ (a,c) \in g_2 $$. Thus $$ (a,c) \in f_1 \cap g_2 $$. But $$ f_1 \cap g_2 = \phi $$. Thus
  it is a contradiction. Thus our assumption $$ f_1 \ne f_2 $$ is wrong. Similarly for the case $$ (a,c) \in f_2 \setminus f_1 $$, we will get a contradiction.
  Thus $$ f_1 = f_2 $$.        
  Similarly we can also prove that $$ g_1 = g_2 $$. Thus $$ (f_1,g_1) = (f_2,g_2) $$. Thus $$ \mathcal H $$ is one-to-one.
      
- Proof that $$ \mathcal H $$ is onto:
      
  Suppose $$ h \in { ^{A \cup B} C } $$. Thus $$ h \subseteq (A \cup B) \times C $$ ,or $$ h \subseteq (A \times C \; \cup \; B \times C) $$. Consider the set
  $$ f = \{ (a,c) \in A \times C \; \vert \; (a,c) \in h \} $$ and  $$ g = \{ (b,c) \in B \times C \; \vert \; (b,c) \in h \} $$. Clearly $$ h = f \cup g $$.
  Thus $$ \mathcal H $$ is onto.
  
**(c)**
  
Suppose $$ A, B $$ are finite sets. We know that $$ {^A B} = \{ f \; \vert \; f \subseteq A \times B \} $$. Thus we can say that all the elements of $$ {^A B} $$
are in the set of all subsets of $$ A \times B $$. Thus $$ {^A B} \subseteq \mathcal P(A \times B) $$. Since $$ A $$ and $$ B $$ are finite it follows from Ex-20 
that $$ A \times B $$ is also finite. Since $$ A \times B $$ is finite, we can choose a unique positive number $$ n = \vert A \times B \vert $$. Thus $$ A \times B $$
contains $$ n $$ elements. It follows that $$ \mathcal P(A \times B) $$ contains $$ p = 2^n $$ elements. Clearly $$ p \in \mathbb N $$. Thus $$ \mathcal P(A \times B) $$
is also finite. Since $$ {^A B} \subseteq \mathcal P(A \times B) $$ and $$ \mathcal P(A \times B) $$ is finite, it follows that $$ {^A B} $$ is also finite.

We will prove that $$ \vert {^A B} \vert = {\vert B \vert}^{\vert A \vert} $$. We will prove it using induction on $$ \vert A \vert $$.
 
- Base Case:
 
  Suppose $$ \vert A \vert = 0 $$. Thus $$ A = \phi $$. Thus $$ {^A B} = \{ \phi \} $$. Thus $$ \vert {^A B} \vert = 1 = { \vert B \vert }^{ \vert A \vert } $$.
  
  Note that $$ {^A B} \ne \phi $$ because it is a set of all functions from $$ A $$ to $$ B $$. Since function is also a set and there is no element in any of these functions.
  Thus these sets(functions) are empty. Thus $$ {^A B} = \{ \phi \} $$. It is similar to the case of power set of empty set: $$ \mathcal P(\phi) = \{ \phi \} $$.
   
- Induction Step:
   
  Suppose theorem is correct if $$ \vert A \vert = n $$. Thus if $$ \vert A \vert = n $$, then $$ \vert { ^A B } \vert = {\vert B \vert}^{\vert A \vert} = {\vert B \vert}^n $$.
    
  Now suppose $$ \vert A \vert = n+1 $$. Suppose $$ a \in A $$ is an arbitrary element. Let $$ A' = A \setminus \{ a \} $$. Thus $$ \vert A' \vert = \vert A \vert - \vert \{a\} \vert = n-1 $$.
  Since $$ A = A' \cup \{a\} $$, it follows from part(b) of this solution that $$ { ^{A' \cup \{ a \} } B} \; \sim \; { ^{A'} B} \times { ^{ \{ a\} } B} $$.
  Thus $$ \vert { ^{A' \cup \{ a \} } B} \vert \; = \; \vert { ^{A'} B} \times { ^{ \{ a\} } B} \vert $$. Using Soln20 part(a) it follows that 
  $$ \vert { ^{A'} B} \times { ^{ \{ a\} } B} \vert = \vert { ^{A'} B} \vert \cdot \vert { ^{ \{ a\} } B} \vert $$. 
  
  Thus we have $$ \vert { ^A B } \vert = \vert { ^{A'} B} \vert \cdot \vert { ^{ \{ a\} } B} \vert $$.
   
  Since $$ \vert A' \vert = n $$, by induction hypothesis $$ \vert { ^{A'} B } \vert = {\vert B \vert}^{\vert A' \vert} = {\vert B \vert}^n $$.
  
  Now consider the set of functions: $$ { ^{ \{ a\} } B} $$. Suppose $$ f \in { ^{ \{ a\} } B} $$. We shall prove by contradiction that $$ f $$ contains only
  one element. Suppose $$ f $$ contains $$ n > 1 $$ elements. Thus $$ (a,b_1), (a,b_2), ... (a,b_n) $$ are the elements in $$ f $$. But this is not possible because
  $$ f $$ is a function and in this case $$ f(a) $$ is not unique. Thus $$ f $$ can contain only one element. Thus it is easy to check that total number of such
  functions will be same as the number of elements in $$ B $$. Thus $$ \vert { ^{ \{ a\} } B} \vert = \vert B \vert $$.
  
  Thus we have $$ \vert { ^A B } \vert = \vert { ^{A'} B} \vert \cdot \vert { ^{ \{ a\} } B} \vert = {\vert B \vert}^n \cdot {\vert B \vert}$$.
  
  Thus $$ \vert { ^A B } \vert = {\vert B \vert}^{n+1} $$, or $$ \vert { ^A B } \vert = {\vert B \vert}^{\vert A \vert} $$.
   
**(d)**
   
  Each student gets exactly one grade but one grade can be assigned to multiple students. Thus we can say that any possible assignment of grades will be a 
  function from $$ S $$ to $$ G $$. Thus the total number of ways of grade assignment will be total number of such functions possible, or $$ \vert {^S G} \vert $$.
  From part(c), $$ \vert {^S G} \vert = { \vert G \vert }^{ \vert S \vert } = 5^{20}$$.
  
<hr/>
  
**Soln22**
  
**(a)**
  
We will prove it by induction on $$ n $$.

Suppose $$ F_n = \{ f \; \vert \; \text{ f is a one-to-one and onto function from } I_n \text{ to } A \} $$. 
  
- Base Case:
  
  For $$ n = 0 $$, $$ I_n = \phi $$ and $$ A = \phi $$. Thus there is only one function possible $$ f: \phi \to \phi $$ such that $$ f = \phi $$. Thus $$ \vert F \vert = 1 $.
  Also $$ n! = 0! = 1 $$. Thus \vert F_n \vert = n! $$ where $$ n = 0 $$.
    
- Induction Step:
    
  Suppose theorem is correct for $$ n $$. Thus $$ \vert F_n \vert = n! $$.
   
  Now consider $$ F_{n+1} $$. If we can find a way to create $$ F_{n+1} $$ using $$ F_n $$, it will lead us to formulae for $$ \vert F_{n+1} \vert $$.
  
  Consider the sets $$ I_{n+1} $$ and $$ A $$. Clearly both have $$ n+1 $$ elements. Since $$ I_{n+1} \sim A $$, we use also represent elements of $$ A $$
  as $$ \{ a_1, a_2, a_3 ... a_{n+1} \} $$. Thus $$ A = \cup_{i \in I_{n+1}} a_i $$. We know that $$ I_{n+1} = I_n \cup \{n+1\} $$. Now suppose $$ a_i $$
  is an arbitrary element of $$ A $$. Let $$ A_i = A \setminus \{a_i \} $$. Thus $$ A_i $$ contains $$ n $$ element. Let $$ F_n^i $$ is the set of all one-to-one
  and onto functions from $$ I_n \to A_i $$. Suppose $$ G_n^i = \{ g \; \vert \; g = f \cup \{ (n+1, a_i) \} \text{ such that } f \in F_n^i \} $$. Clearly all
  the elements of $$ G_n^i $$ are one-to-one and onto functions from $$ I_{n+1} $$ \to $$ A $$.
  
  Let $$ S = \cup_{ i \in I_{n+1} } G_n^i $$. Now we will prove that $$ F_{n+1} = S $$.
   
  ($$ \to $$) Suppose $$ f \in F_{n+1} $$. Thus $$ f $$ is a one-to-one and onto function from $$ I_{n+1} $$ to $$ A $$. Thus for some $$ i \in \mathbb N $$, $$ a_i = f(n+1) $$.
   Clearly $$ i \le n+1 $$. It follows that $$ f \in G_n^i $$. Thus $$ f \in S $$. Thus $$ F_{n+1} \subseteq S $$.
   
  ($$ \leftarrow $$) Clearly for $$ i \in I_{n+1} $$, $$ G_n^i \subseteq S $$. Suppose $$ g \in G_n^i $$. Thus $$ g $$ is a one-to-one and onto function from
  $$ I_{n+1} $$ to $$ A $$. Thus $$ g $$ must be in $$ F_{n+1} $$. Thus $$ G_b^i \subseteq F_{n+1} $$. Since $$ G_n^i $$ is arbitrary it follows that $$ \cup_{ i \in I_{n+1} } G_n^i  \subseteq F_{n+1} $$.
   
  Thus $$ F_{n+1} = S $$.
  
  Now note that for $$ i,j \in I_{n+1} $$, the sets $$ G_n^i $$ and $$ G_n^j $$ are disjoint. Consider a function $$ h: F_n^i \to G_n^i $$ such that $$ h(f) = f \cup \{(n+1, a_i)\} $$.
  Clearly $$ h $$ is one-to-one and onto function. Thus $$ \vert F_n^i \vert = \vert G_n^i \vert $$. But by our induction hypothesis $$ \vert F_n^i \vert = n! $$. Thus $$ \vert G_n^i \vert = n! $$.
  Since $$ F_{n+1} = S = \cup_{ i \in I_{n+1} } G_n^i $$ and $$ G_n^i \cap G_n^j = \phi $$, if $$ i \ne j $$, it follows from Soln19 that:        
  $$ \vert F_{n+1} \vert = \sum_i^{n+1} \vert G_n^i \vert $$.           
  $$ = \sum_i^{n+1} \vert F_n^i \vert $$.           
  $$ = \sum_i^{n+1} n! $$.           
  $$ = (n+1)n! $$.           
  $$ = (n+1)! $$.           
  
  Thus $$ F_{n+1} = (n+1)! $$.

**(b)**
  
We need to prove that $$ L_n \sim F_n $$. Thus $$ \vert L_n \vert = \vert F_n \vert $$. Thus if we can prove that $$ \vert L_n \vert = n! $$, then $$ L_n \sim F_n $$ will
directly follow from the result.
  
Now we will use induction to prove that $$ \vert L_n \vert = n! $$ where $$ n $$ is number of elements in $$ A $$.
  
- Base Case:
  
  For $$ n = 0 $$, $$ A = \phi $$, thus $$ L_n = \{ \phi \} $$. Thus $$ \vert L_n \vert = 1 = 0! $$.
  
- Induction Step:
  
  Suppose if $$ A $$ contains  $$ n $$ elements, then $$ \vert L \vert = n! $$.
   
  Now suppose $$ A $$ contains $$ n+1 $$ elements. Since $$ A $$ is finite, we can represent elements of $$ A $$ as $$ \{ a_1, a_2, a_3, ... a_{n+1} \} $$.
  Let $$ a_i \in A $$ for some natural number $$ i \in I_{n+1} $$. Let $$ A_i = A \setminus \{a_i\} $$. Thus $$ A $$ contains $$ n $$ elements. 
  Let $$ L_n^i = \{ R \; \vert \; R \text{ is a total order on } A_i \} $$. Thus by induction hypothesis $$ \vert L_n^i \vert = n! $$.
  
  Now lets define $$ N_i = \cup_j^{n+1} \{ (a_i,a_j) \} $$ and $$ G_n^i = \{ T \; \vert \; T = R \cup N_i, R \in L_n^i \} $$. We know that $$ L_n^i $$ contains all relations which are total order. 
  Suppose $$ T \in G_n^i $$, then clearly by the definition of $$ G_n^i $$, it follows that there exist some $$ R \in L_n^i $$ such that $$ T = R \cup N_i $$. Since $$ R $$ is total order, it 
  follows that $$ T $$ is also total order. Clearly we can see that $$ a_i $$ is the *smallest* element in $$ T $$. Thus $$ G_n^i \ne G_n^j $$ if $$ i \ne j $$.
  Also note that it can be easily seen that $$ G_n^i \sim L_n^i $$. Thus $$ \vert G_n^i \vert = \vert L_n^i \vert = n! $$.
  
  Clearly the set $$ L_{n+1} = \cup_{i \in I_{n+1} } G_n^i $$. Since $$ G_n^i \cap G_n^j = \phi $$, it follows from Ex-19 that $$ L_{n+1} = \cup_{i \in I_{n+1} } G_n^i = \sum_{i=1}^{n+1}n! = (n+1)! $$.
  
  Thus $$ \vert L_{n+1} \vert = (n+1)! $$.   

Thus $$ L_n \sim F_n $$.

**(c)**

We can say that each arrangement is a one-to-one and onto function from each student to seat. Thus the total possible ways will be total number of such functions.
Thus it follows form part(a) that total number of ways $$ = n! = 5! = 120 $$.  
  
<hr/>
  
**Soln23**
  
Since $$ R $$ is an equivalence relation, it follows that $$ A / R $$ is a partition on $$ A $$. It follows that if $$ X \in A / R $$ and $$ Y \in A / R $$ and
 $$ X \ne Y $$ then $$ X \cap Y = \phi $$. Now suppose $$ X \in A / R $$, it follows that $$ X = [x]_R $$ where $$ x \in X $$ is any arbitrary element. Since
 $$ \forall x \in A(\vert [x]_R \vert = n) $$, it follows that $$ \vert X \vert = n $$.
  
 Since $$ \vert [x]_R \vert = n $$, it follows that $$ \vert X \vert = n $$. Also we know that $$ A = \cup_{X \in A/R} X $$. Thus it follows from Ex-19 that
 $$ \vert A \vert = \sum_{X \in A/R} \vert X \vert = \sum_{X \in A/R} n = n \cdot \sum_{X \in A/R} 1 = n \vert A/R \vert $$. Thus $$ \vert A/R \vert = \frac {\vert A \vert} n $$.
   
<hr/>
   
**Soln24**
   
**(a)**
   
Since $$ A $$ and $$ B $$ are finite, it follows we can choose natural numbers $$ n,m $$ such that $$ \vert A \vert = n $$ and $$ \vert B \vert = m $$.
Thus $$ A \sim I_n $$ and $$ B \sim I_m $$. Since $$ I_m \sim I_{m+n} \setminus I_n $$, it follows that $$ B \sim I_{m+n} \setminus I_n $$.

Clearly $$ A \setminus (A \cap B) $$ and $$ B $$ are disjoint sets. Thus it follows from Ex-19 that:
$$ \vert (A \setminus (A \cap B)) \cup B \vert = \vert (A \setminus (A \cap B)) \vert + \vert B \vert $$. From Ex-18 we have 
$$ \vert (A \setminus (A \cap B)) \vert = \vert A \vert - \vert A \cap B \vert $$. Thus $$ \vert (A \setminus (A \cap B)) \cup B \vert = \vert A \vert - \vert A \cap B \vert + \vert B \vert $$.
Clearly $$ A \setminus (A \cap B) = A $$. Thus $$ \vert A \cup B \vert = \vert A \vert - \vert A \cap B \vert + \vert B \vert $$.
    
**(b)**
    
We can write $$ \vert A \cup B \cup C \vert = \vert (A \cup B) \cup C \vert $$. Using part(a) we have:       
$$ \Rightarrow \vert A \cup B \vert + \vert C \vert - \vert (A \cup B) \cap C \vert $$.             
$$ \Rightarrow \vert A \vert + \vert B \vert - \vert A \cap B \vert + \vert C \vert - \vert (A \cap C) \cup (B \cap C) \vert $$.             
$$ \Rightarrow \vert A \vert + \vert B \vert - \vert A \cap B \vert + \vert C \vert - ( \vert (A \cap C) \vert + \vert (B \cap C) \vert - \vert (A \cap C) \cap (B \cap C) \vert ) $$.             
$$ \Rightarrow \vert A \vert + \vert B \vert - \vert A \cap B \vert + \vert C \vert - ( \vert (A \cap C) \vert + \vert (B \cap C) \vert - \vert (A \cap B \cap C) \vert ) $$.             
$$ \Rightarrow \vert A \vert + \vert B \vert - \vert A \cap B \vert + \vert C \vert - \vert (A \cap C) \vert - \vert (B \cap C) \vert + \vert (A \cap B \cap C) \vert $$.             
$$ \Rightarrow \vert A \vert + \vert B \vert + \vert C \vert - \vert A \cap B \vert - \vert (A \cap C) \vert - \vert (B \cap C) \vert + \vert (A \cap B \cap C) \vert $$.             
  
<hr/>
  
**Soln25**

We need to prove $$ \vert \cup_{i \in I_n} A_i \vert = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert $$, where:       
$$ P_n = \mathcal P(I_n) \setminus \{ \phi \} $$.        
$$ A_S = \cap_{i \in S} A_i $$.

We will proceed by induction.

- Base Case:
  
  For $$ n = 1 $$, we have $$ \vert \cup_{i \in I_n} A_i \vert = \vert A_1 \vert $$. Also $$ P_n = \{ \{1\} \} $$, thus we have 
  $$  \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert = {(-1)}^{1+1} \vert A_1 \vert = \vert A_1 \vert $$. Thus $$ LHS = RHS $$.
  
- Induction Case:
  
  Suppose theorem is correct for $$ n $$. Thus $$ \vert \cup_{i \in I_n} A_i \vert = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} A_S $$.
  
  Now consider for $$ n+1 $$, we have $$ \vert \cup_{i \in I_{n+} } A_i \vert = \vert \cup_{i \in I_n} A_i \; \cup \; A_{n+1} \vert $$. Thus by applying
  Ex-24 part(a), we get:        
  $$ = \vert \cup_{i \in I_n} A_i \vert + \vert A_{n+1} \vert - \vert \cup_{i \in I_n} A_i \; \cap \; A_{n+1} \vert $$.     
  $$ = \vert \cup_{i \in I_n} A_i \vert + \vert A_{n+1} \vert - \vert \cup_{i \in I_n} (A_i \cap A_{n+1}) \vert $$.    

  Let $$ T_i = A_i \cap A_{n+1} $$:     
  $$ = \vert \cup_{i \in I_n} A_i \vert + \vert A_{n+1} \vert - \vert \cup_{i \in I_n} T_i \vert $$.    
  Thus we can apply induction hypothesis on first and last term:       
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + \vert A_{n+1} \vert - \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert T_S \vert $$.    
  
  $$ T_S $$ is also defined like $$ A_S $$. Thus $$ T_S = \cap_{i \in S} T_i = \cap_{i \in S} (A_i \cap A_{n+1}) $$. As we can see $$ A_{n+1} $$ is present
  in every term of $$ T_S $$. Since all terms are intersection of sets and every term contains $$ A_n $$, we can also say $$ T_S = \cap_{i \in (S \cup \{n+1\}) } (A_i) $$.
  Thus $$ T_S = A_{S \cup \{n+1\}} $$. Putting this into our equation above:         
  
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + \vert A_{n+1} \vert - \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_{S \cup \{n+1\} } \vert $$.    
  
  We know that $$ \vert S \cup \{ n+1 \} \vert = \vert S \vert + 1 $$. Thus $$ \vert S \vert = \vert S \cup \{ n+1 \} \vert - 1 $$. Putting this into equation:     
  
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + \vert A_{n+1} \vert - \sum_{S \in P_n} {(-1)}^{\vert S \cup \{n+1\} \vert - 1 + 1} \vert A_{S \cup \{n+1\} } \vert $$.    
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + \vert A_{n+1} \vert - \sum_{S \in P_n} { {(-1)}^{-1} \cdot (-1)}^{\vert S \cup \{n+1\} \vert + 1} \vert A_{S \cup \{n+1\} } \vert $$.    
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + \vert A_{n+1} \vert + \sum_{S \in P_n} { (-1)}^{\vert S \cup \{n+1\} \vert + 1} \vert A_{S \cup \{n+1\} } \vert $$.    
  $$ = \sum_{S \in P_n} {(-1)}^{\vert S \vert + 1} \vert A_S \vert + {(-1)}^{1+1} \cdot \vert A_{n+1} \vert + \sum_{S \in P_n} { (-1)}^{\vert S \cup \{n+1\} \vert + 1} \vert A_{S \cup \{n+1\} } \vert $$.    
  
  We know that $$ P_{n+1} $$ contains two type of terms. One type of term contains $$ n+1 $$ and other type of terms will not contain $$ n+1 $$. Thus we can say that
  $$ P_{n+1} = P_n \cup \{X \cup \{n+1\} \; \vert \; X \in P_n \text{ or } X = \phi \} $$. Now we can see that all the sets $$ S $$ used in above equation belongs to 
  $$ P_{n+1} $$. Thus we can also write the equation as:      
  
  $$ = \sum_{S \in P_{n+1}} {(-1)}^{\vert S \vert + 1} \vert A_S \vert $$.
  
  
<hr/>
  
**Soln26**
  
We have $$ \vert A \triangle B \vert $$             
$$ = \vert (A \cup B) \setminus (A \cap B) \vert $$       
Using Ex-18:      
$$ = \vert (A \cup B) \vert - \vert (A \cap B) \vert $$       
Using Ex-24:      
$$ = \vert A \vert + \vert B \vert - \vert A \cap B \vert - \vert (A \cap B) \vert $$       

Since $$ \vert A \vert = \vert B \vert $$:       
$$ = \vert A \vert + \vert A \vert - 2 \cdot \vert (A \cap B) \vert $$       
$$ = 2 \cdot (\vert A \vert - \vert (A \cap B) \vert) $$       
$$ = 2x $$ where $$ x = (\vert A \vert - \vert (A \cap B) \vert) $$.       

Thus $$ \vert A \triangle B \vert $$ is even.

<hr/>

**Soln27**

Since pin is a 4 digit number, it follows that number of total pins $$ \vert P \vert = 10000 $$(from $$ 0000 $$ to $$ 9999 $$).
  
Suppose $$ f: C \to P $$, where $$ P $$ is set of pin number and $$ C $$ is set of customer number. Thus $$ f $$ maps the customer to pin.
  
Since $$ \vert C \vert > 10000 $$, it follows $$ \vert C \vert > \vert P \vert $$. Thus it follows from Ex-11 part(b) that $$ f $$ is not one-to-one.
  
Thus there is atleast  one case such that same pin is mapped to more than one customer.
 
<hr/>

**Soln28** 

Suppose $$ T $$ is set of all classes. Suppose $$ A $$ and $$ B $$ denotes the set of classes attended by Alice and Bob respectively.
 
As both have never seen each other in any class, it follows that $$ A \cap B = \phi $$. Also note that the set $$ A \cup B $$ denotes the classes
attended by atleast one of them. Clearly $$ \vert T \vert \ge \vert A \cup B \vert $$. Thus $$ \vert T \vert \ge \vert A \vert + \vert B \vert - \vert A \cap B \vert $$.
Since $$ A \cap B = \phi $$, it follows that $$ \vert T \vert \ge \vert A \vert + \vert B \vert $$.

Now we will prove by contradiction. Suppose $$ A $$ and $$ B $$ both missed less than half of the classes. We know that classes missed by Alice and Bob are
$$ T \setminus A $$ and $$ T \setminus B $$. Thus $$ \vert T \setminus A \vert = \vert T \vert - \vert A \vert < \frac {\vert T \vert} 2 $$. Thus we have
 $$ \vert A \vert > \frac {\vert T \vert} 2 $$. Similarly $$ \vert B \vert > \frac {\vert T \vert} 2 $$. Thus adding both we get $$ \vert A \vert + \vert B \vert > T $$.
This contradicts with $$ \vert T \vert \ge \vert A \vert + \vert B \vert $$. Thus our assumption is wrong. Thus either Alice or Bob missed atleast half of
the classes.

<hr/>
