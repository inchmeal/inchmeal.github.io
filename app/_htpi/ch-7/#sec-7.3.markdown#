---
chapterName: "Infinite Sets"
sectionName: "7.3 - The Cantor–Schr&ouml;der–Bernstein Theorem"
chapter: 7
section: "7.3"
order: "003"
date: 2016-01-27
description:  "Inchmeal - Velleman's How To Prove It Solutions, Ch-7 Sec-7.3, The Cantor–Schr&ouml;der–Bernstein Theorem"
redirect_from:
  - /2016/01/27/how-to-prove-it-ch-7-sec-3.html
---

### Summary

- If $$ A $$ and $$ B $$ are sets, then we will say that $$ B $$ **dominates** $$ A $$, and write $$ A \precsim B $$, if there is a function 
  $$ f : A \to B $$ that is one-to-one. If $$ A \precsim B $$ and $$ A \nsim B $$, then we say that $$ B $$ **strictly dominates** $$ A $$, and 
  write $$ A \prec B $$.
- **(Cantor–Schro&ouml;der–Bernstein theorem)**: Suppose $$ A $$ and $$ B $$ are sets. If $$ A \precsim B $$ and $$ B \precsim A $$, then $$ A \sim B $$.
- Using Cantor–Schro&ouml;der–Bernstein theorem, it is easier to prove that $$ \mathbb R \sim \mathcal P(Z^+) $$. We need to define a one-to-one
  function $$ f: \mathbb R \to \mathcal P(Z^+) $$ and other one-to-one function $$ g:  \mathcal P(Z^+) \to \mathbb R $$.
    
<hr/>

**Soln1**

**(a)**

Suppose $$ f: A \to A $$ such that $$ f(a) = a $$. Clearly $$ f $$ is one-to-one and onto. It follows that $$ A \precsim A $$. Thus $$ \precsim $$
is reflexive.

**(b)**

Suppose $$ A \precsim B $$ and $$ B \precsim C $$. Thus we can choose one-to-one function $$f: A \to B $$ and another one-to-one function $$ g: B \to C $$.
Since $$ f,g $$ are one-to-one, the function $$ g \circ f: A \to C $$ is also one-to-one. Thus $$ A \precsim C $$.
 
<hr/>
 
**Soln2**
 
**(a)**
 
Suppose $$ A \prec A $$. It follows that $$ A \precsim A $$ and $$ A \nsim A $$. But $$ A \sim A $$. Thus we have a contradiction. It follows that
$$ A \nprec A $$.

**(b)**

Suppose $$ A \prec B $$ and $$ B \prec C $$. Thus we can choose one-to-one function $$f: A \to B $$ and another one-to-one function $$ g: B \to C $$.
Since $$ f,g $$ are one-to-one, the function $$ g \circ f: A \to C $$ is also one-to-one. Thus $$ A \precsim C $$.     

Now suppose $$ A \sim C $$, or we can also say $$ C \sim A $$. Since $$ \sim $$ is transitive and $$ A \sim B $$, it follows that $$ C \sim B $$, or $$ B \sim C $$.
But it contradicts with $$ B \prec C $$. Thus our assumption is wrong. Thus $$ A \nsim C $$.

Since $$ A \precsim C $$ and $$ A \nsim C $$, it follows that $$ A \prec C $$.

<hr/>

**Soln3**

Suppose $$ A \subseteq B \subseteq C $$ and $$ A \sim C $$. Since $$ A \subseteq B $$, it follows that $$ A \prec B $$. Since $$ A \sim C $$,
it follows that $$ C \sim A $$. Thus $$ C \prec A $$. Since $$ \prec $$ is transitive and $$ C \prec A \land A \prec B $$, it follows that $$ C \prec B $$.

Now since $$ B \subseteq C $$, it follows that $$ B \prec C $$. Thus we have $$ C \prec B $$ and $$ B \prec C $$. Thus by Cantor–Schro&ouml;der–Bernstein theorem,
it follows that $$ B \sim C $$.

<hr/>

**Soln4**

Suppose $$ A \precsim B $$ and $$ C \precsim D $$. Thus we can choose one-to-one function $$f: A \to B $$ and another one-to-one function $$g: C \to D $$.

**(a)**

Suppose $$h: A \times C \to B \times D $$ such that $$ h(a,c) = (f(a), g(c)) $$.

Suppose $$ (a_1, b_1), (a_2,b_2) \in A \times C $$ such that $$ h(a_1,c_1) = h(a_2,c_2) $$. Thus $$ (f(a_1), g(c_1)) = (f(a_2),g(c_2)) $$. 
 Since $$ f,g $$ are one-to-one, it follows that $$ a_1 = a_2 $$ and $$ c_1 = c_2 $$. Thus $$ (a_1,c_1) = (a_2,c_2) $$. Thus $$ h $$ is one-to-one.
Thus we can conclude that $$ A \times C \precsim B \times D $$.

**(b)**

Suppose $$h: A \cup C \to B \cup D $$ such that:     
- if $$ a \in A $$ then $$ h(a) = f(a) $$.
- if $$ a \in C $$ then $$ h(a) = g(a) $$.

Suppose $$ a_1,a_2 \in A \cup C $$ such that $$ h(a_1) = h(a_2) $$. Since $$ A \cap C = \phi $$. We have following possible cases:
 
- Case $$ a_1 \in A $$.

  Thus $$ a_1 \notin C $$. Also by definition of $$ h $$, $$ h(a_1) = f(a_1) $$. Suppose $$ a_2 \in C $$. Thus $$ h(a_2) = g(a_2) $$.
  Since $$ h(a_1) = h(a_2) $$, it follows $$ f(a_1) = g(a_2) $$. Since $$ f(a_1) \in B $$ and $$ g(a_2) \in D $$, it follows that $$ B \cap D \ne \phi $$.
  But $$ B \cap D = \phi $$. Thus we have contradiction. Thus $$ a_2 \notin C $$. It follows that $$ a_2 \in A $$. Thus $$ h(a_2) = f(a_2) $$.
  Since $$ h(a_1) = h(a_2) $$, it follows $$ f(a_1) = f(a_2) $$. Since $$ f $$ is one-to-one, it follows that $$ a_1 = a_2 $$.
  
- Case $$ a_1 \in C $$.
  
  Similar to previous case, we can prove by contradiction that $$ a_2 \in C $$. Thus $$ g(a_1) = g(a_2) $$. Thus $$ a_1 = a_2 $$.
  
Thus by all possible cases, it follows that $$ a_1 = a_2 $$. Thus $$ h $$ is one-to-one. Thus $$ A \cup C \precsim B \cup D $$.
  
**(c)**
  
Suppose $$ h: \mathcal P(A) \to \mathcal P(B) $$ such that $$ h(X) = \{ f(x) \; \vert \; x \in X \} = Y $$.
  
- $$ Y \subseteq B $$.

  Suppose $$ y \in Y $$. Clearly we can choose some $$ x \in A $$ such that $$ f(x) = y $$. Since $$ x \in A $$, it follows that $$ f(x) \in B $$, or $$ y \in B $$.
  Since $$ y $$ is arbitrary, $$ Y \subseteq B $$. Thus $$ Y \in \mathcal P(B) $$.

- $$ h $$ is one-to-one.

  Suppose $$ X_1 $$ and $$ X_2 $$ are in $$ \mathcal P(A) $$ such that $$ h(X_1) = h(X_2) $$. We can prove $$ X_1 = X_2 $$ as follows:
  
  Suppose $$ x_1 \in X_1 $$ such that $$ y = f(x_1) \in h(X_1) $$. Since $$ h(X_1) = h(X_2) $$, it follows that $$ y \in g(X_2) $$. Thus for some $$ x_2 \in X_2 $$,
  we have $$ y = f(x_2)  $$. Thus $$ f(x_1) = f(x_2) $$. Since $$ f $$ is one-to-one, it follows $$ x_1 = x_2 $$. Thus $$ x_1 \in X_2 $$. 
  
  Since $$ x_1 $$ is arbitrary, it follows that $$ X_1 \subseteq X_2 $$.
  
  Similarly we can also prove $$ X_2 \subseteq X_1 $$.
  
  Thus $$ X_1 = X_2 $$.
  
Thus $$ h $$ is one-to-one. It follows that $$ \mathcal P(A) \precsim \mathcal P(B) $$.

<hr/>

**Soln5**

Suppose $$ A \precsim B $$ and $$ C \precsim D $$. Thus we can choose one-to-one function $$f: A \to B $$ and another one-to-one function $$g: C \to D $$.

**(a)**

Since $$ A \ne \phi $$, we can choose some element $$ a_0 \in A $$. Lets define a function $$ f' : Ran(f) \to A $$ such that:       
- if $$ b \in Ran(f) $$, then $$ f'(b) = f^{-1}(a) $$. Clearly $$ f^{-1} $$ is defined for all $$ b \in Ran(f) $$.
- if $$ b \notin Ran(f) $$, then $$ f'(b) = a_0 $$.

Clearly $$ f' $$ is onto.
 
Now consider the function $$ h: ^A C \to ^B D $$ such that $$ h(f) = g \circ f \circ f' $$. Clearly $$ f \in ^A C $$, thus $$ f: A \to C $$.
 Thus $$ g \circ f \circ f' $$ is a function from $$ B $$ to $$ D $$.
 
Now we will prove that $$ h $$ is one-to-one. Suppose $$ f_1, f_2 \in ^A C $$ such that $$ h(f_1) = h(f_2) $$. Thus $$ g \circ f_1 \circ f' = g \circ f_2 \circ f' $$.
Suppose $$ a \in A $$ is an arbitrary element. Since $$ f' $$ is onto, it follows that we can choose $$ b \in B $$ such that $$ f'(b) = a $$.
Since $$ b \in B $$ and $$ g \circ f_1 \circ f' = g \circ f_2 \circ f' $$, it follows that  $$ g \circ f_1 \circ f'(b) = g \circ f_2 \circ f'(b) $$.         
Thus $$ \leftrightarrow g(f_1(f'(b))) = g( f_2 ( f'(b) ))$$. Since $$ g $$ is one=to-one, it follows $$ f_1(f'(b)) =  f_2 ( f'(b) )$$. Since $$ a = f'(b) $$,      
we get $$ f_1(a) =  f_2(a)$$. Since $$ a $$ is arbitrary, it follows that $$ \forall a \in A f_1(a) = f_2(a) $$. Thus $$ f_1 = f_2 $$.
Thus $$ h $$ is onto. Thus we can conclude that $$ ^A C \precsim ^B D $$.
        
**(b)**

Yes.  
        
Suppose $$ A = \phi $$. Since $$ A \precsim B $$, it follows that $$ f: \phi \to B $$ such that $$ f $$ is one-to-one. Thus $$ f = \phi $$.

Suppose $$ B = \{ b \} $$, and $$ C = \{c\} $$ and $$ D = \{d,e\} $$.
  
Thus $$ ^A C = \{ \phi \} $$. And $$ ^B D = \{ \{ (b,d) \}, \{ (b,e) \} \}$$.

Thus the only function possible from $$ ^A C $$ to $$ ^B D $$ is $$ \phi $$. But clearly $$ \phi $$ is not one-to-one, because it is a part of every set.
Thus there is no one-to-one function from $$ ^A C $$ to $$ ^B D $$.    

<hr/>
 
**Soln6**

**(a)**
 
Suppose $$ \vert B \vert = n $$. Since $$ B $$ is finite, by countable set theorems of last section, we can choose one-to-one function $$f:  B \to Z^+ $$.
Since $$ A \precsim B $$, we can choose a one-to-one function $$g: A \to B $$. Thus $$ f \circ g: A \to Z^+ $$ is a one-to-one function.
Thus $$ A $$ is countable. Thus $$ A $$ either finite or denumerable.
  
Now we will prove by contradiction that $$ A $$ is finite. Suppose $$ A $$ is infinite. Since $$ A $$ is countable, it follows that $$ A $$ must
be denumerable. Thus we can represent elements of $$ A $$ as $$ \{a_1, a_2, ... a_n, ... \} $$. Let $$ b_i  = f(a_i) $$ where $$ i \in \mathbb N $$.
Thus $$ \{ b_i \; \vert \; b_i = f(a_i), i \in \mathbb N \} \subseteq B $$. Since $$g: A \to B $$ is one-to-one, it follows that $$ b_i \ne b_j $$, if $$ i \ne j $$.
Thus $$ \vert \{ b_1, b_2, .... b_n, b_{n+1} \} \vert = n+1 $$. Since $$ \{ b_1, b_2, .... b_n, b_{n+1} \} \subseteq B $$, it follows $$ \vert \{ b_1, b_2, .... b_n, b_{n+1} \} \vert \le \vert B \vert $$.
Thus $$ n+1 \le \vert B \vert $$. But $$ \vert B \vert = n $$. Thus we have a contradiction. It follows that $$ A $$ is finite.
        
Suppose $$ \vert A \vert $$ contains $$ m $$ elements. Suppose $$ m > n $$. Thus $$ A = \{ a_1, a_2, ... a_m \} $$. Similar to above step, lets define $$ b_i = f(a_i) $$
where $$ 0 \le i \le m $$. Thus $$ \{ b_1, b_2, .... b_m \} \subseteq B $$. Thus $$ \vert \{ b_1, b_2, .... b_m \} \vert \le \vert B \vert $$. Since $$g: A \to B $$ is one-to-one, 
it follows that $$ \{ b_1, b_2, .... b_m \} = m $$. Thus $$ m \le n $$. This contradicts with our assumption that $$ m > n $$. Thus $$ m \le n $$.
Thus $$ \vert A \vert \le \vert B \vert $$.
 
**(b)**
 
Since $$ A \prec B $$, it follows that there exist a one-to-one function $$f: A \to B $$. Thus $$ A \precsim B $$. Since $$ B $$ is finite it follows
from part(a) that $$ A $$ is finite and $$ \vert A \vert \le \vert B \vert $$. 

Now suppose $$ \vert A \vert = \vert B \vert $$. Thus $$ A \sim B $$. Since $$ A \prec B $$, it follows that $$ A \nsim B $$. Thus we have a contradiction.
It follows that $$ \vert A \vert \ne \vert B \vert $$. 

Since $$ \vert A \vert \le \vert B \vert $$ and $$ \vert A \vert \ne \vert B \vert $$, it follows that $$ \vert A \vert < \vert B \vert $$.
    
<hr/>

**Soln7**
    
Suppose $$ f: A \to \mathcal P(A) $$ such that $$ f(a) = \{ X \in \mathcal P(A) \; \vert \; a \in X \} $$.
    
Now we will show that $$ f $$ is one-to-one. Suppose $$ a_1, a_2 \in A $$ such that $$ f(a_1) = f(a_2) $$. Clearly by definition of $$ f $$,
it follows $$ \{a_1\} \in f(a_1) $$. Similarly $$ \{a_2\} \in f(a_2) $$. Note that all the elements of $$ f(a_1) $$ must contain $$ a_1 $$. 
Thus every set in $$ f(a_1) $$ has more than one element except the set $$ \{a_1\} $$. Similarly $$ \{a_2\} $$ is the only set in $$ f(a_2) $$ that
contains one element. Since $$ f(a_1) = f(a_2) $$, it follows that $$ \{a_1\} = \{a_2\} $$. Thus $$ a_1 = a_2 $$. Thus $$ f $$ is one-to-one.

Thus $$ A \precsim \mathcal P(A) $$. From Section-7.2, Ex-4, we know that $$ A \nsim \mathcal P(A) $$. Thus $$ A \prec \mathcal P(A) $$.

<hr/>

**Soln8**

**(a)**

We will prove this by induction.

- Base Case:

  For $$ m = n+1 $$, Thus $$ A_m = A_{n+1} = \mathcal P(A_n) $$. Using Ex-7 we have $$ A_n \prec \mathcal P(A_n) $$. Thus $$ A_n \prec A_m $$.   
    
- Induction Step:
    
  Suppose for $$ m > n $$, $$ A_n \prec A_m $$.
   
  We know from Ex-7 that $$ A_m \prec \mathcal P(A_m) $$. Since $$ A_{m+1} = \mathcal P(A_m) $$, it follows that $$ A_m \prec A_{m+1} $$. Since 
  $$ \prec $$ is transitive and $$ A_n \prec A_m $$ and $$ A_m \prec A_{m+1} $$, it follows that $$ A_n \prec A_{m+1} $$.

**(b)**
  
  Suppose $$ S = \cup_{i \in \mathbb N} A_n $$. Clearly this set is not equinumerous with any set $$ A_n $$. Another example can be $$ \mathcal P(S) $$.
  Thus $$ S_{n+1} = \mathcal P(S_n) $$, where $$ n \in \mathbb N $$. Thus there are infinite possible sets which are not equinumerous with $$ A_n $$.
      
<hr/>
      
**Soln9**
      
Suppose $$ f: (0,1] \to (0,1) $$ such that $$ f(x) = x/2 $$. 

Suppose $$ g : (0,1) \to (0,1] $$ such that $$ g(x) = x $$.

Let $$ A = (0,1] $$ and $$ B = (0,1) $$. Also we can define $$ g^{-1}: Rang(g) \to A $$ such that $$ g^{-1}(b) = a $$ such that $$ g(a) = b $$.
 
Clearly $$ f $$ and $$ g $$ are one-to-one. Thus by Cantor–Schr&ouml;der–Bernstein Theorem, we can define a one-to-one and onto function 
$$ h: (0,1] \to (0,1) $$ such that:      
- if $$ x \in X $$, then $$ h(x) = f(x) = x/2 $$.      
- if $$ x \in Y $$, then $$ h(x) = g^{-1}(x) = x $$.
        
where $$ X = \cup_{i \in \mathbb N} A_i $$ and $$ A_1 = A \setminus Rang(g) $$ and $$ A_{n+1} = g(A_n) $$.     
$$ Y = A \setminus X $$.

Lets compute $$ X $$:

$$ A_1 = A \setminus Rang(g) = (0,1] \setminus (0,1) = [1] = \{1\}$$.        
$$ A_2 = g(f(A_1)) = g(\{1/2\}) = \{1/2\} $$.       
$$ A_3 = g(f(A_2)) = g(\{1/4\}) = \{1/4\} $$.       
....        
$$ A_n = g(f(A_{n-1})) = \{1/2^{n-1}\} $$.        
       
Thus $$ X = \cup_{i \in \mathbb N} A_i = \{1, 1/2, 1/4, 1/8, .... 1/2^{n-1}, .... \} = \{ 1/2^i \; \vert \; 0 \le i \le 1 \} $$.
       
Thus $$ Y = A \setminus X = (0,1] \setminus \{1\} = (0,1) $$.         
 
Thus we have $$ h: (0,1] \to (0,1) $$ such that:           
- if $$ x \in X $$, then $$ h(x) = x/2 $$.      
- if $$ x \in Y $$, then $$ h(x) = x $$.
        
<hr/>
  
**Soln10**
  
Let $$ \mathcal E = \{ R \; \vert \; R \text{ is an equivalence relation on } \mathbb Z^+ \} $$.
  
**(a)**
  
Clearly $$ \mathcal E \subseteq \mathcal P(Z^+ \times Z^+) $$. Thus $$ \mathcal E \prec \mathcal P(Z^+ \times Z^+) $$. Since $$ Z^+ \sim Z^+ \times Z^+ $$,
it follows from Section-7.1, Ex-5 that $$ \mathcal P(Z^+ \times Z^+) \sim \mathcal P(Z^+) $$. Thus $$ \mathcal E \prec \mathcal P(Z^+) $$.

**(b)**

Suppose $$ X_1, X_2 \in \mathcal P(A) $$ such that $$ f(X_1) = f(X_2) $$. Thus it follows that:          
$$ \{ X_1 \cup \{1\} , (A \setminus X_1) \cup \{2\} \} = \{ X_2 \cup \{1\} , (A \setminus X_2) \cup \{2\} \} $$.
 
Thus either $$ \{ X_1 \cup \{1\} = (A \setminus X_2) \cup \{2\} $$, or $$ X_1 \cup \{1\} = X_2 \cup \{1\} $$. Since $$ 1 \notin (A \setminus X_2) \cup \{2\} $$,
it follows that $$ \{ X_1 \cup \{1\} \ne (A \setminus X_2) \cup \{2\} $$. Thus the only possible case is $$ X_1 \cup \{1\} = X_2 \cup \{1\} $$. Thus
$$ X_1 = X_2 $$. It follows that $$ f $$ is one-to-one.

**(c)**

We have $$ \mathcal P $$ is the set of all partitions of $$ A $$ and $$ \mathcal E $$ is the set of all equivalence relation of $$ A $$.
As we saw in section-5.3, we can define a one-to-one and onto function $$ f: \mathcal P \to \mathcal E $$ such that $$ f(X) = \cup_{X \in \mathcal P} (X \times X) $$.

Thus $$ \mathcal P \sim \mathcal E $$. 

Now from part(b) we have $$ \mathcal P(A) \precsim \mathcal P $$. Also since $$ A \subseteq Z^+ $$, it follows that $$ Z^+ \sim A $$. Thus $$ \mathcal P(Z^+) \sim \mathcal P(A) $$.
Since $$  \mathcal P(Z^+) \sim \mathcal P(A) $$ and $$ \mathcal P(A) \precsim \mathcal P $$, it follows that $$ \mathcal P(Z^+) \precsim \mathcal P $$. Since $$ P \sim \mathcal E $$, 
it follows that $$ \mathcal P(Z^+) \precsim \mathcal E $$.
    
Now from part(a) we have $$ \mathcal E \precsim \mathcal P(Z^+) $$. Thus by applying Cantor–Schr&ouml;der–Bernstein Theorem, it follows that
$$ \mathcal E \sim \mathcal P(Z^+) $$.

<hr/>

**Soln11**

TODO

**Soln12**

**(a)**

TODO[This is not complete.]

Suppose $$ a \in A $$. Suppose $$ A_1 = \{a\} $$ and $$ A_2 = A \setminus A_1 $$. Thus $$ A = A_1 \cup A_2 $$. 

Since $$ A $$ contains atleast two elements, by definition $$ A_1 \ne \phi $$ and also $$ A_2 \ne \phi $$.   

Clearly $$ A_1 \cap A_2 = \phi $$, thus it follows from Section-7.2, Ex-7, that $$ \mathcal P(A) = \mathcal P(A_1 \cup A_2) = \mathcal P(A_1) \times \mathcal P(A_2) $$.

Since $$ A_1 \subseteq A $$, it follows $$ \mathcal P(A_1) \subseteq \mathcal P(A) $$. Similarly since $$ A_2 \subseteq A $$, it follows $$ \mathcal P(A_2) \subseteq \mathcal P(A) $$.
Since $$ \mathcal P(A_1) \subseteq \mathcal P(A) $$ and $$ \mathcal P(A_2) \subseteq \mathcal P(A) $$, it follows:       
$$ \mathcal P(A_1) \times \mathcal P(A_2) \; \subseteq \; \mathcal P(A) \times \mathcal P(A) $$.

Since $$ \mathcal P(A_1) \times \mathcal P(A_2) \; \subseteq \; \mathcal P(A) \times \mathcal P(A) $$, it follows $$ \mathcal P(A_1) \times \mathcal P(A_2) \; \prec \; \mathcal P(A) \times \mathcal P(A) $$.

But we have already seen that $$ \mathcal P(A) \sim \mathcal P(A_1) \times \mathcal P(A_2) $$. Thus it follows that $$ \mathcal P(A) \; \prec \; \mathcal P(A) \times \mathcal P(A) $$.

Now if we also prove that $$ \mathcal P(A) \times \mathcal P(A) \; \prec \; \mathcal P(A) $$, then applying Cantor–Schr&ouml;der–Bernstein theorem will complete the proof.
  
I got stuck in proving this part: $$ \mathcal P(A) \times \mathcal P(A) \; \prec \; \mathcal P(A) $$.

**(b)**

TODO.

<hr/>

**Soln13**

Suppose $$ \mathcal F $$ is a set of nondegenerate intervals and $$ \mathcal F $$ is pairwise disjoint.

Suppose $$ I \in \mathcal F $$ is an arbitrary interval. Since it is nondegenerate interval, it must contains $$ \ge 2 $$ real numbers. We know 
from lemma 7.3.4, that it between every two real numbers, there exist a rational number. Thus we can define a non-empty set:       
$$ Q_I = \{ q \; \vert \; if(x,y \in I) \text{ then } q \text{ is a rational number such that } x < q < y \} $$.

Clearly $$ Q_I \ne \phi $$ and $$ Q_I \subseteq \mathbb Q $$.
 
Suppose $$ g: \mathcal F \; \to \; \mathcal P(\mathbb Q) \setminus \{ \phi \} $$ such that:

$$ g(I) = Q_I $$. 
  
Now we will prove that $$ g $$ is one-to-one:

Suppose $$ I_1, I_2 \in \mathcal F $$ such that $$ g(I_1) = g(I_2) $$. Now we will prove by contradiction that $$ I_1 = I_2 $$. Suppose $$ I_1 \ne I_2 $$.
Since $$ \mathcal F $$ is pairwise disjoint, it follows that $$ I_1 \cap I_2 = \phi $$. Suppose $$ q \in g(I_1) $$. It follows that for some $$ x_1, y_1 \in I_1 $$,
we have $$ x_1 < q < y_1 $$. Thus by definition of interval, $$ q \in I_1 $$. Similarly since $$ q \in g(I_2) $$, we can prove that $$ q \in I_2 $$. Thus
$$ q \in I_1 \cap I_2 $$. But $$ I_1 \cap I_2 = \phi $$. Thus we have a contradiction. It follows that $$ I_1 = I_2 $$.    
   
Thus $$ g $$ is one-to-one.   

Since $$ \mathbb Q $$ is denumerable, we can define a one-to-one function $$ f: \mathbb Q \to Z^+ $$.

Thus we can define a funnction $$ h: \mathcal F \to Z^+ $$ as:       

$$ h(I) = \text{ smallest element of } \{ f(q) \; \vert \; q \in g(I) \} $$. 

Since $$ g $$ is one-to-one, it follows that $$ h $$ is also one-to-one.

Thus $$ \mathcal F \sim Z^+ $$.

<hr/>

**Soln14**

TODO.




