---
layout: blog
title:  "How To Prove It, Ch-7 Sec-7.2, Countable and Uncountable Sets"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 7, Section - 7.2, Countable and Uncountable Sets.

<!--more-->

<hr/>

### Summary

- Suppose A and B are *countable* sets. Then:
  - $$ A \times B $$ is countable.
  - $$ A \cup B $$ is countable.
- The union of countably many countable sets is countable. In other words, if $$ \mathcal F $$ is a family of sets, $$ \mathcal F $$ is countable, and also 
  every element of $$ \mathcal F $$ is countable, then $$ \cup \mathcal F $$ is countable.
- Suppose $$ A $$ is a set. A function $$ f : I_n \to A $$, where $$ n $$ is a natural number, is called a finite sequence of elements of $$ A $$, and $$ n $$ 
  is called the length of the sequence.
- Suppose $$ A $$ is a countable set. Then the set of all finite sequences of elements of $$ A $$ is also countable.
- **Cantor’s theorem**: $$ \mathcal P(Z^+) $$ is uncountable.
- $$ \mathbb R $$ is uncountable.      

<hr/>

**Soln1**

**(a)** 

We know that from a theorem of previous section that $$ \mathbb Q $$ is denumerable. Thus $$ \mathbb Q $$ is countable. Suppose $$ \mathbb R \setminus \mathbb Q $$ is countable.
But by first theorem of this section, we know that if $$ A $$ and $$ B $$ are countable then $$ A \cup B $$ is also countable. Thus in our case we can say that
$$ (\mathbb R \setminus \mathbb Q) \cup  \mathbb Q) $$ is also countable. Thus $$ \mathbb R $$ is countable. But $$ \mathbb R $$ is uncountable. Thus we have a 
contradiction. Thus $$ \mathbb R \setminus \mathbb Q $$ is not countable.

**(b)**

We need to prove that $$ \mathbb R \setminus \mathbb Q \; \sim \; \mathbb R $$.   

Suppose $$ A = \{ \sqrt 2 + x \; \vert \; x \in \mathbb Z^+ \} $$. Clearly we can write a one-to-one and onto function from $$ \mathbb Z^+ \to A $$. Thus $$ \mathbb Z^+ \sim A $$.
Thus $$ A $$ is denumerable. Also we know that $$ \mathbb Q $$ is denumerable(using a theorem of this section).        
Since $$ A \sim \mathbb Z^+ $$ and $$ \mathbb Q \sim \mathbb Z^+ $$ and $$ A \cap \mathbb Q = \phi $$, it follows that $$ A \cup \mathbb Q \sim \mathbb Z^+ $$. Since $$ \mathbb Z^+ \sim A $$, 
it follows that $$ A \cup \mathbb Q \sim A $$.

Now we shall try to use above theorems related to set operations of denumerable sets to prove the required theorem: $$ \mathbb R \setminus \mathbb Q \; \sim \; \mathbb R $$. We can 
see that $$ \mathbb R = (\mathbb R \setminus (A \cup \mathbb Q)) \; \cup \; (A \cup \mathbb Q) $$. Also $$ \mathbb R \setminus \mathbb Q = (\mathbb R \setminus (A \cup \mathbb Q)) \; \cup \; \mathbb Q $$.
Thus clearly by first theorem of this section, it follows that $$ (\mathbb R \setminus (A \cup \mathbb Q)) \, \cup \, (A \cup \mathbb Q) \; \sim \; (\mathbb R \setminus (A \cup \mathbb Q)) \, \cup \, \mathbb Q $$.
Thus $$ \mathbb R \setminus \mathbb Q \; \sim \; \mathbb R $$.
      
<hr/>
      
**Soln2**

- $$ F $$ is one-to-one:

  Suppose $$ (f_1,a) $$ and $$ (f_2,b) $$ in $$ S_n \times A $$ such that $$ F(f_1,a) = F(f_2,b) $$. Thus $$ f_1 \cup \{(n+1,a)\} = f_2 \cup \{(n+1,b)\} $$.
  Thus either $$ (n+1,a) \in f_2 $$ or $$ (n+1, a) = (n+1,b) $$.        
  Since $$ f_2 \in S_n $$, it follows that $$ f_2: I_n \to A $$. Thus $$ (n+1,a) \notin f_2 $$. Thus $$ (n+1, a) = (n+1,b) $$. Thus $$ f_1 = f_2 $$
  and $$ a = b $$. It follows that $$ (f_1,a) = (f_2,b) $$. Thus $$ F $$ is one-to-one.
  
- $$ F $$ is onto:
  
  Suppose $$ f \in S_{n+1} $$. Thus $$ f $$ is a $$ (n+1) $$-length sequence. Thus $$ f: I_{n+1} \to A $$. Suppose $$ a \in A $$ such that $$ (n+1,a) \in f $$. Thus 
  we can write $$ f = (f \setminus \{(n+1,a)\}) \, \cup \, \{(n+1,a)\} $$. Let $$ g = (f \setminus \{(n+1,a)\}) $$. Since $$ \vert f \vert = n+1 $$, it follows 
  that $$ \vert g \vert = n $$. Thus $$ g: I_n \to A $$. Thus $$ g $$ is a sequence of $$ n $$ length. Thus $$ g \in S_n $$. Thus $$ F(g,a) = g \cup \{(n+1,a)\} = f $$.
  Thus $$ F $$ is onto.
  
<hr/>
  
**Soln3**
  
Let $$ P = \{ X \in P(Z^+) \; \vert \; X \text{ is finite } \} $$. Suppose $$ P_n = \{ X \subseteq Z^+ \, \vert \, \vert X \vert \le n \} $$. Thus clearly we can
check that $$ P = \cup_{i \in I_n} P_n $$.

Suppose $$ X \in P_n $$. Thus $$ X $$ is finite and $$ \vert X \vert \le n $$. Thus we can also write a finite sequence for $$ X $$ such that $$ X = \{ a_1, a_2, ... a_k $$ 
where $$ k \le n $$. Thus $$ P = \cup_{i \in \mathbb N} P_n $$ is a set of finite sequences of the *countable* set $$ Z^+ $$. It follows from theorem-7.2.4 that $$ P $$ is
countable.

Since $$ P $$ is countable, it follows that either it is finite or denumerable. Suppose $$ P $$ is finite. Thus we can choose some $$ n \in \mathbb N $$ such that
$$ f: P \to I_n $$. Suppose $$ X \in P $$ such that $$ \vert X \vert = n $$. It follows from section-7.1, Ex-22 that there are $$ n! $$ sequences for the
set $$ \vert X \vert $$. But all of these sequences are in set $$ P $$. Thus for each of this sequence say $$ x $$, there must be a unique $$ n $$ in $$ I_n $$.
Clearly this is not possible since $$ n! > n $$. Thus $$ P $$ is not finite. Thus $$ P $$ must be denumerable.
         
<hr/>
         
**Soln4**
         
Suppose $$ f: A \to P(A) $$ is an arbitrary function. Let $$ D = \{a \; \vert \; a \notin f(a) \} $$. Now suppose $$ a \in A $$ is an arbitrary element.
Thus we have following possible cases:

- Case $$ a \in f(a) $$:
 
  Thus $$ a \notin D $$. It follows that $$ f(a) \ne D $$.
  
- Case $$ a \notin f(a) $$:
  
  Thus $$ a \in D $$. Since $$ a \notin f(a) $$, it follows that $$ f(a) \ne D $$.
  
Thus in both cases $$ f(a) \ne D $$. Since $$ a $$ is arbitrary, it follows that $$ \forall a \in A(f(a) \ne D) $$. Thus $$ f $$ is onto. Since $$ f $$ 
is arbitrary it follows that there is no onto function such that $$f: A \to P(A) $$. Thus $$ A \nsim P(A) $$.
    
<hr/>
    
**Soln5**

Note: I skipped proofs for proving the defined relations are functions. 

**(a)**

Suppose $$ \mathcal H: {^A B} \times {^A C} \; \to \; {^{A} {(B \times C)} } $$ such that $$ \mathcal H(f,g) = \{ h \in {^{A} {(B \times C)} } \; \vert \; if ((a_1, b) \in f \text{ and } (a_2, c) \in g) \text{  then  } ( (a_1, (b,c)) \in h \text{ and } (a_2, (b,c)) \in h) $$.   

- $$ \mathcal H $$ is one-to-one:
 
  Suppose $$ f_1, f_2 \in {^A B} $$ and $$ g_1,g_2 \in {^A C} $$ such that $$ \mathcal H(f_1, g_1) = \mathcal H(f_2,g_2) $$. Suppose $$ (a,b) \in f_1 $$ and $$ (a,c) \in g_1 $$. 
  Thus $$ (a,(b,c)) \in \mathcal H(f_1,g_1) $$. Since $$ \mathcal H(f_1, g_1) = \mathcal H(f_2,g_2) $$, it follows that $$ (a,(b,c)) \in \mathcal H(f_2,g_2) $$. 
  It follows from the definition of $$ \mathcal H $$ that $$ (a,b) \in f_2  $$ and $$ (a,c) \in g_2 $$. Thus $$ f_1 \subseteq f_2 $$ and $$ g_1 \subseteq g_2 $$.
  Similarly we can prove that $$ f_2 \subseteq f_1 $$ and $$ g_2 \subseteq g_1 $$. Thus $$ f_1 = g_1 $$ and $$ f_2 = g_2 $$.
               
- $$ \mathcal H $$ is onto:

  Suppose $$ h \in {^{A} {(B \times C)} } $$. Thus $$ h: A \to (B \times C) $$. Let $$ f = \{ (a,b) \, \vert \, (a,(b,c)) \in h \} $$ and $$ g = \{ (a,c) \, \vert \, (a,(b,c)) \in h \} $$.
  Clearly $$ \mathcal H(f,g) = h $$. Thus $$ \mathcal H $$ is onto.
   
**(b)**
   
Suppose $$ \mathcal H: ^A {(^B C)} \; \to \; ^{A \times B} C $$ such that $$ \mathcal H(a,f) = \{ g \in ^{A \times B} C \; \vert \; if ((b,c) \in f) \text{ then } ((a,b),c) \in g \} $$.
     
- $$ \mathcal H $$ is one-to-one:
 
  Suppose $$ f_1, f_2 \in {^B C} $$ and $$ a_1,a_2 \in A $$ such that $$ \mathcal H(a_1, f_1) = \mathcal H(a_2,f_2) $$. Suppose $$ (b,c) \in f_1 $$. Thus $$ ((a,b),c) \in \mathcal H(a_1,f_1) $$.
  It follows that $$ ((a_1,b),c) \in \mathcal H(a_2, f_2) $$. Thus $$ a_1 = a_2 $$ and $$ (b,c) \in f_2 $$. Thus $$ f_1 \subseteq f_2 $$. Similarly it can be proved
   that $$ f_2 \subseteq f_1 $$. Thus $$ f_1 = f_2 $$. Thus $$ (a_1, f_1) = (a_2,f_2) $$. Thus $$ \mathcal H $$ is one-to-one. 
  
- $$ \mathcal H $$ is onto:

  Suppose $$ g \in  ^{A \times B} C $$. Thus $$ g: (A \times B) \to C $$. Let $$ a \in A $$ and $$ f_a = \{ (b,c) \, \vert \, ((a,b),c) \in g \} $$. Let $$ f = \cup_{a \in A} f_a $$.
  Clearly $$ \mathcal H(f) = g $$. Thus $$ \mathcal H $$ is onto.
  
**(c)**
  
Suppose $$ \mathcal H : \mathcal P(A) \to ^A { \{ yes, no\} } $$ such that:         
$$ \mathcal H(X) = \{ f \in  ^A { \{ yes, no\} } \, \vert \, a \in A, if(a \in X) \text{ then } (a,yes) \in f \text{ else } (a,no) \in f \} $$.
  
- $$ \mathcal H $$ is one-to-one:
  
  Suppose $$ X_1, X_2 \in \mathcal P(A) $$ such that $$ \mathcal H(X_1) = \mathcal H(X_2) $$. Suppose $$ a \in X_1 $$. It follows that $$ (a,yes) \in \mathcal H(X_1) $$. Thus
  $$ (a,yes) \in \mathcal H(X_2) $$. Thus by the definition of $$ \mathcal H $$, it follows $$ a \in X_2 $$. Thus $$ X_1 \subseteq X_2 $$. Similarly it can be proved that
  $$ X_2 \subseteq X_1 $$. Thus $$ X_1 = X_2 $$. Thus $$ \mathcal H $$ is one-to-one.
  
- $$ \mathcal H $$ is onto:  
               
  Suppose $$ f \in ^A { \{ yes, no\} } $$. Thus $$ f: A \to \{ yes, no \} $$. Suppose $$ X = \{ a \in A \, \vert \, (a,yes) \in f \} $$. Now we can see that
  $$ \mathcal H (X) = f $$. Thus $$ \mathcal H $$ is onto.
  
**(d)**

We need to prove $$ ^{Z^+} {\mathcal P(Z^+)} \, \sim \, \mathcal P(Z^+) $$.

We know from part(c) $$ ^{Z^+} { \{ yes, no\} } \sim \mathcal P(Z^+) $$.
          
TODO.
          
<hr/>
          
**Soln6**
          
Suppose $$ A $$ is denumerable. Thus we can represent elements of $$ A = \{a_1, a_2, a_3 ... \} $$. Suppose $$ \mathcal F $$ is a family of sets such that
$$ \mathcal F = \{ X_p \; \vert \; $$ p $$ \text{ is prime } \} $$ where $$ X_p = \{ a_i \in A \; \vert \; \text{ the *smallest* prime divisor of } i+1 \text{ is } p \} $$(note $$ i+1 $$ to take care for a_1).
             
Clearly $$ \mathcal F $$ is a partition as it satisfies all the properties of partition:
             
- $$ \cup \mathcal F = A $$ is satisfied.
- $$ \mathcal F $$ is pairwise disjoint. Note that every $$ a_i $$ exist in *exactly one* of the sets.
- $$ \forall X \in \mathcal F(X \ne \phi) $$. Since $$ A $$ is denumerable, This will be correct for all $$ X $$.

Now we shall prove that $$ \mathcal F $$ is denumerable.

Suppose $$ f: \mathcal F \to Z^+ $$ such that $$ f(X_p) = p $$. Clearly $$ f $$ is one-to-one function. Thus $$ \mathcal F $$ is countable. Now if we prove 
that $$ \mathcal F $$ is not finite, then it will complete the proof that $$ \mathcal F $$ is denumerable. Suppose $$ \mathcal F \sim I_n $$. Clearly the $$ n+1 $$-prime
number in the list or ordered primes will contradict with $$ \mathcal F \sim I_n $$. 

Now suppose $$ X_p \in \mathcal F $$. Suppose $$ f: X_p \to Z^+ $$ such that $$ f(a_i) = i $$. Clearly $$ f $$ is one-to-one. Thus $$ X_p $$ is countable. Clearly
there are infinite multiples of $$ p $$ such that $$ p $$ is their lowest common divisor. It follows that $$ X_p $$ is not finite. Thus $$ X_p $$ is denumerable.
                  
<hr/>
                  
**Soln7**
                  
Suppose $$ f: (\mathcal P(A) \times \mathcal P(B)) \; \to \; \mathcal P(A \cup B) $$ such that $$ f(X,Y) = X \cup Y $$.
                   
- $$ f $$ is one-to-one.
                   
  Suppose $$ X_1, X_2 \in \mathcal P(A) $$ and $$ Y_1, Y_2 \in \mathcal P(B) $$ such that $$ f(X_1,Y_1) = f(X_2,Y_2) $$. Thus $$ X_1 \cup Y_1 = X_2 \cup Y_2 $$.
  Since $$ X_1 \cap Y_2 = \phi $$(given), it follows that $$ X_1 = X_2 $$. Similarly since $$ Y_1 \cap X_2 = \phi $$, it follows $$ Y_1 = Y_2 $$. Thus $$ (X_1,Y_1) = (X_2,Y_2) $$.
  Thus $$ f $$ is one-to-one.
                   
- $$ f $$ is onto.
                   
  Suppose $$ Z \in A \cup B $$. Suppose $$ X = \{ a \in A \; \vert \; a \in Z \} $$ and $$ Y = \{ b \in B \; \vert \; b \in Z \} $$. Clearly $$ f(X,Y) = Z $$. 
  Thus $$ f $$ is onto.
                    
<hr/>

**Soln8** 

TODO

<hr/>

**Soln9**
                     
Suppose $$ \mathcal F \subseteq \{ f \; \vert \; f: \mathbb Z^+ \to \mathbb R \} $$ and $$ \mathcal F $$ is countable. Since $$ \mathcal F $$ is countable,
we can represent it as $$ \{ f_1, f_2, f_3, .... \} $$. Now consider function $$ g: Z^+ \to \mathbb R $$ such that $$ g(n) = max( \vert f_1(n) \vert , \vert f_2(n) \vert , ... \vert f_n(n) \vert) $$.
Now we can easily check that $$ \mathcal F \subseteq \mathbb O(g) $$.
 
Suppose $$ f_n \in \mathcal F $$. Clearly $$ \forall x > n (\vert f_n(n) \vert \le \vert g(n) $$. Thus $$ f_n \in \mathbb O(g) $$. Since $$ f_n $$ is arbitrary,
it follows that $$ \mathcal F \subseteq \mathbb O(g) $$.

<hr/>

**Soln10**

Suppose $$ A $$ is the set of all words in english. Clearly $$ A $$ is finite. Thus $$ A $$ is countable. Consider $$ S = $$ set of all finite sequences of $$ A $$.
 It follows from theorem-7.2.4 that $$ S $$ is countable.
 
Let $$ G $$ is the set of all grammtical sentences. Since each grammatical sentence if a finite sequence of english words, it follows that $$ G \subseteq S $$.
Since $$ S $$ is countable, it follows that $$ G $$ is also countable.
           
Thus either $$ G $$ is finite or denumerable. Suppose $$ G $$ is not denumerable. Thus $$ G $$ is must be finite. Thus for some $$ n \in \mathbb N $$, $$ G \sim I_n $$. It follows that total number of
sentences in english is $$ n $$. Clearly this is not correct as we can create a new grammatical sentence such that it is not in the $$ n $$ sentences. Thus our
assumption is not correct. Thus $$ G $$ is denumerable.

<hr/>

**Soln11**

**(a)** 

Suppose $$ S $$ is the set of mathematical symbols defined by english sentence. Suppose $$ G $$ is the set of english sentences. Lets define a function
$$ f: S \to G $$, such that $$ f(s) =  g $$ such that $$ g $$ is the grammatical sentence for the symbol $$ s $$. Clearly $$ f $$ is one-to-one. Since $$ G $$
is denumerable, we can choose a one-to-one function $$ h: G \to Z^+ $$. It follows that $$ h \circ g : S \to Z^+ $$ is a one-to-one function. Thus $$ S $$ is
denumerable.
          
**(b)**
          
We will prove this by contradiction. Suppose all real numbers can be defined by english sentences. Thus we can define a one-to-one function $$ f: \mathbb R \to G $$.
Since $$ G $$ is denumerable, we can choose a one-to-one function $$ g: G \to Z^+ $$. Thus $$ g \circ f : \mathbb R \to G $$ is a one-to-one function. Thus by the
theorem 7.1.5, it follows that $$ \mathbb R $$ is countable. But $$ \mathbb R $$ is not countable. Thus we have a contradiction and our assumption is wrong.
Thus there exist some real numbers that can not be defined by english sentences.
  
<hr/>
  
          

