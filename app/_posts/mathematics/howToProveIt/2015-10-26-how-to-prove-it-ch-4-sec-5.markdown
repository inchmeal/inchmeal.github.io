---
layout: blog
title:  "How To Prove It, Ch-4 Sec-4.5, Closures"
tags: mathematics howToProveIt
---
This post contains exercises of Chapter - 4, Section - 4.5, Closures.

<!--more-->

<hr/>

### Summary

- *Reflexive Closure*:  Suppose $$ R $$ is a relation on a set $$ A $$. Then the reflexive closure of $$ R $$ is the smallest set $$ S \subseteq A \times A $$ 
  such that $$ R \subseteq S $$ and $$ S $$ is reflexive, if there is such a smallest set. In other words, a relation $$ S \subseteq A \times A $$ is the reflexive 
  closure of $$ R $$ if it has the following three properties:
    1. $$ R \subseteq S $$.
    2. $$ S $$ is reflexive.
    3. For every relation $$ T \subseteq A \times A $$,if $$ R \subseteq T $$ and $$ T $$ is reflexive, then $$ S \subseteq T $$.
- *Strict Partial Order and Strict Total Order*: Suppose $$ R $$ is a relation on $$ A $$. Then $$ R $$ is said to be irreflexive if $$ \forall x \in A((x, x) \notin R) $$. 
  $$ R $$ is called a strict partial order if it is irreflexive and transitive. It is called a strict total order if it is a strict partial order, and in addition it 
  satisfies the following requirement, called trichotomy:    
  $$ \forall x \in A \forall y \in A(xRy \lor yRx \lor x = y) $$.
- *Symmetric Closure*: Suppose $$ R $$ is a relation on $$ A $$. The symmetric closure of $$ R $$ is the smallest set $$ S \subseteq A \times A $$ such that $$ R \subseteq S $$ 
  and $$ S $$ is symmetric, if there is such a smallest set. In other words, a relation $$ S \subseteq A \times A $$ is the symmetric closure of R if it has the following properties:    
    1. $$ R \subseteq S $$.
    2. $$ S $$ is symmetric.
    3. For every relation $$ T \subseteq A \times A $$,if $$ R \subseteq T $$ and $$ T $$ is symmetric, then $$ S \subseteq T $$.
- *Transitive Closure*: The transitive closure of $$ R $$ is the smallest set $$ S \subseteq A \times A $$ such that $$ R \subseteq S $$ and $$ S $$ is transitive, if there is such a 
  smallest set. In other words, a relation $$ S \subseteq A \times A $$ is the transitive closure of $$ R $$ if it has the following properties:
    1. $$ R \subseteq S $$.
    2. $$ S $$ is transitive.
    3. For every relation $$ T \subseteq A \times A $$,if $$ R \subseteq T $$ and $$ T $$ is transitive, then $$ S \subseteq T $$.
- Suppose $$ R $$ is a relation on $$ A $$ and suppose:
    - $$ S $$ is Reflexive closure of $$ R $$. Then $$ S $$ is the smallest element of the family of sets $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and }  T \text{ is reflexive } \} $$.
     Since we know the smallest element of a family of sets $$ \mathcal F $$ is $$ \cap \mathcal F $$, $$ S = \cap \mathcal F $$.
    - $$ S $$ is Symmetric closure of $$ R $$. Then $$ S $$ is the smallest element of the family of sets $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and }  T \text{ is symmetric } \} $$.
     Since we know the smallest element of a family of sets $$ \mathcal F $$ is $$ \cap \mathcal F $$, $$ S = \cap \mathcal F $$.
    - $$ S $$ is Transitive closure of $$ R $$. Then $$ S $$ is the smallest element of the family of sets $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and }  T \text{ is transitive } \} $$.
     Since we know the smallest element of a family of sets $$ \mathcal F $$ is $$ \cap \mathcal F $$, $$ S = \cap \mathcal F $$.
- Since all the family of sets mentioned above, contains the element $$ A \times A $$(because $$ R \subseteq A \times A \land A \times A $$ is reflexive, symmetric and transitive), $$ \mathcal F \ne \phi $$. Thus
  $$ \cap \mathcal F $$ is defined. So we can conclude that reflexive, symmetric and transitive closures exist for every relation. Also since a set has a smallest element, it can have only one such element. Thus
   reflective, symmetric, and transitive closures are unique.
- Reflexive closure of a relation $$ R $$ on $$ A $$ is $$ S = R \cup i_A $$.
- Symmetric closure of a relation $$ R $$ on $$ A $$ is $$ S = R \cup R^{-1} $$.

<hr/>

**Soln1** 

**(a)**

Reflexive Closure:    
$$ S = \{ (a,a), (b,b), (c,c), (a,b), (b,c), (c,b) \} $$.

Symmetric Closure:    
$$ S = \{ (a,a), (a,b), (b,a), (b,c), (c,b) \} $$.

Transitive Closure:    
$$ S = \{ (a,a), (a,b), (b,c), (a,c), (c,b), (c,c), (b,b) \} $$.

**(b)**

Reflexive Closure:    
$$ S = \{(x,y) \in R \times R \, \vert \, x < y \text{ or } x = y \} $$.     
which is equivalent to,    
$$ S = \{(x,y) \in R \times R \, \vert \, x \le y \} $$.     

Symmetric Closure:    
$$ S = \{(x,y) \in R \times R \, \vert \, x < y \text{ or } x > y\} $$.     

Transitive Closure:    
As we can see, $$ R $$ is alreast a transitive closure:    
$$ S = \{(x,y) \in R \times R \, \vert \, x < y \} $$.     

**(c)**

Reflexive Closure:    
Since $$ D_r $$ is defined for positive number $$ r $$, thus $$ r \ne 0 $$, so $$ (x,x) \notin D_r $$, Thus including it,    
$$ S = \{(x,y) \in R \times R \, \vert \, \vert x - y \vert < r \text{ or } x = y \} $$.     

Symmetric Closure:    
As we can see $$ R $$ is already symmetric,    
$$ S = \{(x,y) \in R \times R \, \vert \, \vert x - y \vert < r \} $$.     

Transitive Closure:    
$$ S = R \times R $$.     

<hr/>

**Soln2** Similar to Soln1(a).
 
<hr/>

**Soln3** 

**(a)** Suppose $$ R $$ is asymmetric relation. Suppose $$ x,y $$ are arbitrary elements of $$ A $$ such that $$ xRy $$. Thus $$ yRx $$ is false. Or we 
    can also say that $$ xRy \land yRx $$ is false, or $$ \lnot (xRy \land yRx) $$. Thus we can also say $$ (xRy \land yRx) \to x = y $$. Since 
    $$ x $$ and $$ y $$ are arbitrary, we can conclude that $$ \forall x \forall y((xRy \land yRx) \to x = y) $$. Thus $$ R $$ is antisymmetric.
      
**(b)** Suppose $$ R $$ is strict partial order. Suppose $$ x $$ and $$ y $$ are arbitrary elements of $$ A $$ such that $$ xRy $$. We will prove by contradiction that $$ (y,x) \notin R $$.
    Suppose $$ yRx $$. Since $$ xRy \land yRx $$ and $$ R $$ is transitive, it follows $$ xRx $$. This contradicts with the given that $$ R $$ is strict partial order,
    and $$ (x,x) \notin R $$. Thus if $$ xRy $$ then $$ (y,x) \notin R $$. Thus we can conclude that $$ R $$ is asymmetric.
       
<hr/>

**Soln4**

**(a)**

Suppose $$ R $$ is strict partial order. 

<u>Reflexive:</u> Since $$ S $$ is reflexive closure of $$ R $$, it follows that $$ i_A \subseteq S $$. Thus $$ S $$ is reflexive.

<u>Transitive:</u> Suppose $$ x,y,z \in S $$ such that $$ (x,y) \in S \land (y,z) \in S $$. Since $$ S = R \cup i_A $$, $$ (x,y) \in R \cup i_A $$ and 
 $$ (y,z) \in R \cup i_A $$. Thus we have $$ (x,y) \in R \lor (x,y) \in i_A $$ and $$ (y,z) \in R \lor (y,z) \in i_A $$. Thus we have following possible
 cases:
 
 - Case 1: $$ (x,y) \in R $$ and $$ (y,z) \in i_A $$:    
   Since $$ (y,z) \in i_A $$, $$ y = z $$. Since $$ (x,y) \in R $$ and $$ y = z $$, it follows $$ (x,z) \in R $$. Or we can also say $$ (x,z) \in S $$.
     
 - Case 2: $$ (x,y) \in i_A $$ and $$ (y,z) \in R $$:
   Since $$ (x,y) \in i_A $$, $$ x = y $$. Since $$ (y,z) \in R $$ and $$ y = x $$, it follows $$ (x,z) \in R $$. Or we can also say $$ (x,z) \in S $$.
   
 - Case 3: $$ (x,y) \in R $$ and $$ (y,z) \in R $$:    
   Since $$ R $$ is transitive, it follows that $$ (x,z) \in R $$. Or we can also say $$ (x,z) \in S $$.
                                                                           
 - Case 4: $$ (x,y) \in i_A $$ and $$ (y,z) \in i_A $$:    
    Thus $$ x = y = z $$. Since $$ x = z $$, it follows $$ (x,z) \in i_A $$. Or we can also say $$ (x,z) \in S $$.
    
Thus from all the cases, $$ (x,z) \in S $$. Since $$ x,y,z $$ are arbitrary, we can conlude that $$ S $$ is arbitrary.
    
<u>Antisymmetric:</u> Suppose $$ x,y \in A $$ such that $$ (x,y) \in S \land (y,x) \in S $$. Thus $$ (x,y) \in R \cup i_A $$ and $$ (y,x) \in R \cup i_A $$.
Thus we have following cases:

 - Case 1: $$ (x,y) \in R $$ and $$ (y,x) \in i_A $$:    
   Since $$ x = y $$. But since $$ (x,y) \in R $$, $$ (x,y) \notin R $$. Thus this cases is not possible.
          
 - Case 2: $$ (x,y) \in i_A $$ and $$ (y,x) \in R $$:
   Since $$ x = y $$. But since $$ (x,y) \in R $$, $$ (x,y) \notin R $$. Thus this cases is not possible.
   
 - Case 3: $$ (x,y) \in R $$ and $$ (y,x) \in R $$:    
   Since $$ R $$ is transitive, it follows $$ (x,x) \in R $$. But since $$ R $$ is irreflexive, $$ (x,x) \notin R $$. Thus this case is also not possible.
                                                                           
 - Case 4: $$ (x,y) \in i_A $$ and $$ (y,x) \in i_A $$:    
    Thus $$ x = y $$. 
     
Thus from all the cases, if $$ (x,y) \in S \land (y,x) \in S $$, then $$ x = y $$. Thus $$ S $$ is antisymmetric.

**(b)**

Suppose $$ x,y \in A $$. Since $$ R $$ is strict partial order we have following cases:

- Case 1: $$ x = y $$. Thus $$ (x,y) \in i_A $$. Since $$ i_A \subseteq S $$, $$ (x,y) \in S $$. Thus $$ (x,y) \in S \lor (y,x) \in S $$.
 
- Case 2: $$ x R y $$. Thus $$ (x,y) \in S $$. Or we can also say $$ (x,y) \in S \lor (y,x) \in S $$.
 
- Case 3: $$ y R x $$. Thus $$ (y,x) \in S $$. Or we can also say $$ (x,y) \in S \lor (y,x) \in S $$.

Thus from all the cases, we have $$ (x,y) \in S \lor (y,x) \in S $$. Since $$ x,y $$ are arbitrary, it follows that $$ S $$ is total order.
 
<hr/>

**Soln5** 

**(a)**

To prove that $$ S $$ is the largest element of $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, T \subseteq R \text{ and } T \text{ is irreflexive } \} $$.
We need to prove that $$ S \in \mathcal F $$ and $$ \forall T \in \mathcal F (T \subseteq \mathcal S) $$.

Suppose $$ x,y \in A $$ such that $$ (x,y) \in S $$. Thus $$ (x,y) \in R \land (x,y) \notin i_A $$. Thus if $$ (x,y) \in S $$ then $$ (x,y) \in R $$.
Thus $$ S \subseteq R $$. Also since $$ (x,y) \notin i_A $$, it follows that $$ x \ne y $$. Thus if $$ (x,y) \in S $$, then $$ x \ne y $$. It follows that
$$ S $$ is irreflexive. Also $$ S = R \setminus i_A $$, it follows that $$ S \subseteq A \times A $$. Since $$ S \subseteq A \times A $$ and $$ S \subseteq R $$
and $$ S $$ is irreflexive, it follows that $$ S \in \mathcal F $$.
  
Suppose $$ T \in \mathcal F $$. Suppose $$ x,y \in A $$ such that $$ (x,y) \in T $$. Since $$ R \subseteq T $$, it follows that $$ (x,y) \in R $$. Also since $$ T $$ is irreflexive,
 it follows that $$ x \ne y $$. Thus $$ (x,y) \notin i_A $$. Since $$ (x,y) \in R \land (x,y) \notin i_A $$, it follows that $$ (x,y) \in R \setminus i_A $$.
 Thus $$ (x,y) \in S $$. Since $$ x,y $$ are arbitrary, it follows that $$ T \subseteq S $$. Since $$ T $$ is arbitrary, it follows that $$ \forall T \in \mathcal F(T \subseteq S) $$.
 
Thus $$ S \in \mathcal F $$ and $$ \forall T \in \mathcal F(T \subseteq S) $$, it follows that $$ S $$ is the largest element of $$ \mathcal F $$.

**(b)**

Suppose $$ R $$ is partial order on $$ A $$. 

Suppose $$ x \in A $$. Since $$ R $$ is partial order, $$ (x,x) \in R $$. Also $$ (x,x) \in i_A $$. Thus $$ (x,x) \notin R \setminus i_A $$, or $$ (x,x) \notin S $$.
Thus $$ S $$ is irreflexive.

Suppose $$ x,y,z \in A $$ such that $$ (x,y) \in S \land (y,z) \in S $$. Since $$ S = R \setminus i_A $$, it follows $$ (x,y) \in R \land (y,z) \in R \land x \ne y \land y \ne z $$.
Since $$ R $$ is transitive, it follows that $$ (x,z) \in R $$. We will prove by contradiction that $$ x \ne z $$. Suppose $$ x = z $$, then since $$ (x,y) \in R $$, it follows $$ (z,y) \in R $$.
Also we have $$ (y,z) \in R $$ and since $$ R $$ is antisymmetric, it follows that $$ y = z $$. But since $$ (y,z) \in S $$, $$ y \ne z $$. Thus $$ x = z $$ leads to 
contradiction. Thus $$ x \ne z $$, or $$ (x,z) \notin i_A $$. Since $$ (x,z) \in R \land (x,z) \notin i_A $$, it follows that $$ (x,z) \in S $$. Since $$ x,y,z $$ are
arbitrary, it follows that $$ S $$ is transitive.

Thus $$ S $$ is irreflexive and transitive, it follows that $$ S $$ is strict partial order.

<hr/>

**Soln6**

**(a)** $$ S = \{ (p,q) \, \vert \, p \text{ is ancestor of } q \} $$.
 
**(b)** We know that $$ S^{-1} = \{(p,q) \, \vert \, q is ancestor of p \} $$. 

Thus $$ S \circ S^{-1} = \{ (p,r) \, \vert \, $$ There exists a $$ q $$ such that $$ (p,q) \in S^{-1} $$ and $$ (q,r) \in S \}$$.    
It is equivalent to:    
$$ S \circ S^{-1} = \{ (p,r) \, \vert \, $$ There exists a $$ q $$ such that $$ q $$ is the ancestor of $$ p $$ and $$ q $$ is the ancestor of $$ r \}$$.        
It is equivalent to:    
$$ S \circ S^{-1} = \{ (p,r) \, \vert \, $$ There exists a $$ q $$ such that $$ p $$ and $$ r $$ have a ancestor $$ q \}$$.        
It is equivalent to:    
$$ S \circ S^{-1} = \{ (p,r) \, \vert \,  p $$ and $$ r $$ have a common ancestor $$ \}$$.        

<hr/>

**Soln7**

**(a)** 

($$ \to $$)Suppose $$ S = R $$ and $$ R $$ is reflexive. Thus:    
1. $$ R \subseteq S $$.    
2. $$ S $$ is reflexive.    
3. Suppose $$ T \in A \times A $$ is a set such that $$ R \subseteq T $$ and $$ T $$ is reflexive. Since $$ S = R $$, thus $$ S \subseteq T $$.
  
Thus $$ S $$ is reflexive closure of $$ R $$. Since $$ S = R $$, $$ R $$ is reflexive closure of $$ R $$.

($$ \leftarrow $$)Suppose $$ S = R $$ and $$ S $$ is reflexive closure of $$ R $$. Since $$ S $$ is reflexive closure of $$ R $$, it follows that 
 $$ i_A \subseteq S $$, or $$ i_A \subseteq R $$. It follows that $$ R $$ is reflexive.

**(b)**

($$ \to $$)Suppose $$ S = R $$ and $$ R $$ is symmetric. Thus:    
1. $$ R \subseteq S $$.    
2. $$ S $$ is symmetric.    
3. Suppose $$ T \in A \times A $$ is a set such that $$ R \subseteq T $$ and $$ T $$ is symmetric. Since $$ S = R $$, thus $$ S \subseteq T $$.
 
Thus $$ S $$ is reflexive closure of $$ R $$. Since $$ S = R $$, $$ R $$ is symmetric closure of $$ R $$.

($$ \leftarrow $$)Suppose $$ S = R $$ such that $$ S $$ is symmetric closure of $$ R $$. Since $$ S $$ is symmetric closure of $$ R $$, it follows that 
 $$ S $$ is symmetric. Thus $$ R $$ is symmetric.
 
Similarly it can be proved for transitive that $$ R $$ is transitive iff $$ R $$ is transitive closure of $$ R $$.

<hr/>

**Soln8**

Suppose $$ S $$ is symmetric closure of $$ R $$. Thus $$ S $$ is symmetric. Suppose $$ x \in Dom(S) $$. Thus there exist an element $$ y $$ such that $$ (x,y) \in S $$.
Since $$ S $$ is symmetric, it follows that $$ (y,x) \in S $$. Thus $$ x \in Ran(S) $$. Since $$ x $$ is arbitrary, it follows that $$ Dom(S) = Ran(S) $$.
 
Now to prove $$ Dom(S) = Dom(R) \cup Ran(R) $$:

($$ \to $$)Suppose $$ x \in Dom(S) $$. Thus there exist an element $$ y $$ such that $$ (x,y) \in S $$. We will prove by contradiction that $$ (x,y) \in R \lor (y,x) \in R $$.
Suppose $$ \lnot ((x,y) \in R \lor (y,x) \in R) $$. Thus $$ (x,y) \notin R \land (y,x) \notin R $$. Now consider a set $$ T = S - \{ (x,y), (y,x) \} $$ thus making $$ T \subseteq S $$. Since $$ S $$ was symmetric,
 and we removed $$ (x,y),(y,x) $$ from $$ S $$, it follows that $$ T $$ is also symmetric. Since $$ T $$ contains all the elements of $$ S $$ except $$ (x,y) $$ and $$ (y,x) $$ and since
 $$ (x,y) \notin R \land (y,x) \notin R $$, it follows that $$ R \subseteq T $$. Since $$ T $$ is symmetric, and $$ R \subseteq T $$ and $$ T \subseteq S $$, it follows
 that $$ S $$ is not the smallest element such that $$ R \subseteq S $$ and $$ S $$ is symmetric. But it contradicts with the given that $$ S $$ is symmetric closure.
 Thus our assumption $$ \lnot ((x,y) \in R \lor (y,x) \in R) $$ is wrong. It follows that $$ (x,y) \in R \lor (y,x) \in R $$. It follows that $$ x \in Dom(R) \cup Ran(R) $$.
 Since $$ x $$ is arbitrary, it follows that $$ Dom(S) \subseteq Dom(R) \cup Ran(R) $$.
 
($$ \leftarrow $$)Suppose $$ x \in Dom(R) \cup Ran(R) $$. Thus there exist an element $$ y $$ such that either $$ (x,y) \in R $$ or $$ (y,x) \in R $$. Thus we have following
possible cases:

- Case 1: $$ xRy $$. Since $$ xRy $$, and $$ R \subseteq S $$, it follows $$ (x,y) \in S $$. Thus $$ x \in Dom(S) $$.
 
- Case 2: $$ yRx $$. Since $$ yRx $$, and $$ R \subseteq S $$, it follows $$ (y,x) \in S $$. Since $$ S $$ is symmetric, it follows that $$ (x,y) \in S $$.
Thus $$ x \in Dom(S) $$.

Thus from both cases, if $$ x \in Dom(R) \cup Ran(R) $$, then $$ x \in Dom(S) $$. Since $$ x $$ is arbitrary, $$ Dom(R) \cup Ran(R) \subseteq Dom(S) $$.

Thus we have $$ Dom(S) \subseteq Dom(R) \cup Ran(R) $$  and $$ Dom(R) \cup Ran(R) \subseteq Dom(S) $$, it follows that $$ Dom(S) = Dom(R) \cup Ran(R) $$.

Finally putting all together we have $$ Dom(S) = Ran(S) = Dom(R) \cup Ran(R) $$.

<hr/>

**Soln9**

Let $$ T = \{ (x, y) \in S \, \vert \, x \in Dom(R) \text{ and } y \in Ran(R) \} $$.
 
Suppose $$ (x,y) \in R $$. Since $$ R \subseteq S $$, it follows $$ (x,y) \in S $$. Also since $$ (x,y) \in R $$, it follows $$ x \in Dom(R) $$ and $$ y \in Ran(R) $$.
Thus $$ (x,y) \in T $$. Since $$ (x,y) $$ is arbitrary, it follows that $$ R \subseteq T $$.

Suppose that $$ (x,y) \in T \land (y,z) \in T $$. It follows that $$ (x,y) \in S \land (y,z) \in S $$. Since $$ S $$ is transitive, it follows $$ (x,z) \in S $$.
Since $$ (x,y) \in T $$, it follows $$ x \in Dom(R) $$. Similarly since $$ (y,z) \in T $$, it follows $$ z \in Ran(R) $$. Thus we have $$ (x,z) \in S $$ and 
$$ x \in Dom(R) $$ and $$ y \in Ran(R) $$, it follows that $$ (x,z) \in T $$. Thus $$ T $$ is transitive.

Also note that by the definition of $$ T $$, $$ T \subseteq S $$. Also since $$ S $$ is transitive closure of $$ R $$ and $$ R \subseteq T $$ and $$ T $$ is transitive,
it follows that(by the definition of transitive closure), $$ S \subseteq T $$.    
Since $$ S \subseteq T $$ and $$ T \subseteq S $$, it follows thar $$ T = S $$.

Suppose $$ x \in Dom(T) $$. It follows that $$ x \in Dom(R) $$. Thus $$ Dom(T) \subseteq Dom(R) $$. Suppose $$ x \in Dom(R) $$. Since $$ R \subseteq T $$, it follows that
$$ x \in Dom(T) $$. Thus $$ Dom(R) \subseteq Dom(T) $$. Since $$ Dom(T) \subseteq Dom(R) $$ and $$ Dom(R) \subseteq Dom(T) $$, it follows that $$ Dom(R) = Dom(T) $$.

Suppose $$ y \in Ran(T) $$. It follows that $$ y \in Ran(R) $$. Thus $$ Ran(T) \subseteq Ran(R) $$. Suppose $$ y \in Ran(R) $$. Since $$ R \subseteq T $$, it follows that
$$ y \in Ran(T) $$. Thus $$ Ran(R) \subseteq Ran(T) $$. Since $$ Ran(T) \subseteq Ran(R) $$ and $$ Ran(R) \subseteq Ran(T) $$, it follows that $$ Ran(R) = Ran(T) $$.

<hr/>

**Soln10**

**(a)**

Since $$ R $$ is the relation on $$ A $$. Clearly $$ R \subseteq A \times A $$. Suppose $$ (x,y) \in A \times A $$. Then $$ (y,x) \in A \times A $$.
Thus $$ A \times A \in \mathcal F $$. It follows $$ \mathcal F \ne \phi $$.
 
**(b)**

Suppose $$ S = \cap \mathcal F $$. 

Suppose $$ (x,y) \in R $$. Suppose $$ T $$ is an arbitrary element in $$ \mathcal F $$. It follows $$ R \subset T $$. Thus $$ (x,y) \in T $$.
Since $$ T $$ is arbitrary, it follows $$ \forall T \in \mathcal F((x,y) \in T) $$. Thus $$ (x,y) \in \cap \mathcal F $$. Since $$ (x,y) $$ is arbitrary,
it follows $$ R \subseteq \cap \mathcal F $$.

Suppose $$ (x,y) \in \cap \mathcal F $$. Suppose $$ T $$ is an arbitrary element in $$ \mathcal F $$. Since $$ (x,y) $$ belongs to all the elements of $$ \cap \mathcal F $$,
it follows that $$ (x,y) \in T $$. Since $$ T $$ is symmetric, it follows that $$ (y,x) \in T $$. Since $$ T $$ is arbitrary, it follows $$ \forall T \in \mathcal F((y,x) \in T) $$.
Thus $$ (y,x) \in \cap \mathcal F $$. Thus $$ \cap \mathcal F $$ is symmetric.

Suppose $$ T \subseteq A \times A $$ such that $$ R \subseteq T $$ and $$ T $$ is symmetric. It follows that $$ T \in \mathcal F $$. Suppose $$ (x,y) \in \cap \mathcal F $$,
thus $$ \forall X \in \mathcal F((x,y) \in X) $$. Since $$ T \in \mathcal F $$, it follows that $$ (x,y) \in T $$. Thus $$ \cap \mathcal F \subseteq T $$.

Thus from all the above points, we can conclude that $$ S = \cap \mathcal F $$ is symmetric closure of $$ R $$.

<hr/>

**Soln11**

**(a)**

We know that reflexive closure of $$ R = \cap \mathcal F $$, where $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and } T \text{ is reflexive } \} $$.

Suppose $$ S_1 = \cap \mathcal F_1 $$ and $$ S_2 = \cap \mathcal F_2 $$.

Suppose $$ T_2 \in \mathcal F_2 $$ is an arbitrary element. Thus $$ R_2 \subseteq T_2 $$ and $$ T_2 $$ is reflexive. Since $$ R_1 \subseteq R_2 $$, it follows
$$ R_1 \subseteq T_2 $$ and T_2 is reflexive. Since $$ S_1 $$ is reflexive closure of $$ R_1 $$, it follows by the definition of reflexive closure that $$ S_1 \subseteq T_2 $$.
Since $$ T_2 $$ is arbitrary, it follows $$ \forall T_2 \in \mathcal F_2 (S_1 \in T_2) $$, or $$ S_1 \subseteq \cap \mathcal F_2 $$. Thus $$ S_1 \subseteq S_2 $$.

**(b)**

- Symmetric

We know that symmetric closure of $$ R = \cap \mathcal F $$, where $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and } T \text{ is symmetric } \} $$.

  Suppose $$ S_1 = \cap \mathcal F_1 $$ and $$ S_2 = \cap \mathcal F_2 $$.  

Suppose $$ T_2 \in \mathcal F_2 $$ is an arbitrary element. Thus $$ R_2 \subseteq T_2 $$ and $$ T_2 $$ is symmetric. Since $$ R_1 \subseteq R_2 $$, it follows 
$$ R_1 \subseteq T_2 $$ and T_2 is symmetric. Since $$ S_1 $$ is symmetric closure of $$ R_1 $$, it follows by the definition of symmetric closure that $$ S_1 \subseteq T_2 $$.
 Since $$ T_2 $$ is arbitrary, it follows $$ \forall T_2 \in \mathcal F_2 (S_1 \in T_2) $$, or $$ S_1 \subseteq \cap \mathcal F_2 $$. Thus $$ S_1 \subseteq S_2 $$.

- Transitive:

We know that transitive closure of $$ R = \cap \mathcal F $$, where $$ \mathcal F = \{ T \subseteq A \times A \, \vert \, R \subseteq T \text{ and } T \text{ is transitive } \} $$.

  Suppose $$ S_1 = \cap \mathcal F_1 $$ and $$ S_2 = \cap \mathcal F_2 $$.

  Suppose $$ T_2 \in \mathcal F_2 $$ is an arbitrary element. Thus $$ R_2 \subseteq T_2 $$ and $$ T_2 $$ is transitive. Since $$ R_1 \subseteq R_2 $$, it follows  
$$ R_1 \subseteq T_2 $$ and T_2 is transitive. Since $$ S_1 $$ is transitive closure of $$ R_1 $$, it follows by the definition of transitive closure that 
$$ S_1 \subseteq T_2 $$.  Since $$ T_2 $$ is arbitrary, it follows $$ \forall T_2 \in \mathcal F_2 (S_1 \in T_2) $$, or $$ S_1 \subseteq \cap \mathcal F_2 $$. 
Thus $$ S_1 \subseteq S_2 $$. 
  
<hr/>

**Soln12**

**(a)** 

- ($$ \to $$), Proof of $$ S_1 \cup S_2 \subseteq S $$:
 
Since $$ R_1 \cup R_2 = R $$, it follows $$ R_1 \subseteq R $$ and $$ R_2 \subseteq R $$. Thus using Soln11(a), $$ S_1 \subseteq S $$ and $$ S_2 \subseteq S $$.
It follows that $$ S_1 \cup S_2 \subseteq S $$.

- ($$ \to $$), Proof of $$ S \subseteq S_1 \cup S_2 $$:

We will first prove:     
1. $$ R \subseteq S_1 \cup S_2 $$.    
2. $$ S_1 \cup S_2 $$ is reflexive.    

Suppose $$ (x,y) \in R $$, or $$ (x,y) \in R_1 \cup R_2 $$. We have following cases:
 
-Case 1: $$ (x,y) \in S_1 $$: Since $$ R_1 \subseteq S_1 $$, it follows that $$ (x,y) \in S_1 $$, or we may also say $$ (x,y) \in S_1 \cup S_2 $$.
 
-Case 2: $$ (x,y) \in S_2 $$: Since $$ R_2 \subseteq S_2 $$, it follows that $$ (x,y) \in S_2 $$, or we may also say $$ (x,y) \in S_1 \cup S_2 $$.

Since $$ (x,y) $$ is arbitrary, and from all possible cases we can conclude that $$ R \subseteq S_1 \cup S_2 $$.

Suppose $$ x \in A $$. Since $$ S_1 $$ is reflexive, it follows that $$ (x,x) \in S_1 $$. Thus we can also say that $$ (x,x) \in S_1 \cup S_2 $$.
Thus $$ S_1 \cup S_2 $$ is reflexive.

Since $$ R \subseteq S_1 \cup S_2 $$ and $$ S_1 \cup S_2 $$ is reflexive, and $$ S $$ is the reflexive closure of $$ R $$, then by using the definition of reflexive closure,
$$ S \subseteq S_1 \cup S_2 $$.

Since $$ S_1 \cup S_2 \subseteq S $$ and $$ S \subseteq S_1 \cup S_2 $$, we can conclude that $$ S = S_1 \cup S_2 $$.

**(b)**

- ($$ \to $$), Proof of $$ S_1 \cup S_2 \subseteq S $$:   

Since $$ R_1 \cup R_2 = R $$, it follows $$ R_1 \subseteq R $$ and $$ R_2 \subseteq R $$. Thus using Soln11(b), $$ S_1 \subseteq S $$ and $$ S_2 \subseteq S $$.
 It follows that $$ S_1 \cup S_2 \subseteq S $$.  

- ($$ \to $$), Proof of $$ S \subseteq S_1 \cup S_2 $$:  

We will first prove:      
1. $$ R \subseteq S_1 \cup S_2 $$.         
2. $$ S_1 \cup S_2 $$ is symmetric.    

  Suppose $$ (x,y) \in R $$, or $$ (x,y) \in R_1 \cup R_2 $$. We have following cases:  

 -Case 1: $$ (x,y) \in S_1 $$: Since $$ R_1 \subseteq S_1 $$, it follows that $$ (x,y) \in S_1 $$, or we may also say $$ (x,y) \in S_1 \cup S_2 $$.   

-Case 2: $$ (x,y) \in S_2 $$: Since $$ R_2 \subseteq S_2 $$, it follows that $$ (x,y) \in S_2 $$, or we may also say $$ (x,y) \in S_1 \cup S_2 $$.

  Since $$ (x,y) $$ is arbitrary, and from all possible cases we can conclude that $$ R \subseteq S_1 \cup S_2 $$.  

Suppose $$ x,y \in A $$ such that $$ (x,y) \in S_1 \cup S_2 $$. Thus $$ (x,y) \in S_1 \lor (x,y) \in S_2 $$. Since $$ S_1 $$ and $$ S_2 $$ are symmetric,
it follows that $$ (y,x) \in S_1 \lor (y,x) \in S_2 $$, or $$ (x,y) \in S_1 \cup S_2 $$. Thus $$ S_1 \cup S_2 $$ is symmetric.

Since $$ R \subseteq S_1 \cup S_2 $$ and $$ S_1 \cup S_2 $$ is symmetric, and $$ S $$ is the symmetric closure of $$ R $$, then by using the definition of symmetric closure, 
$$ S \subseteq S_1 \cup S_2 $$. 

  Since $$ S_1 \cup S_2 \subseteq S $$ and $$ S \subseteq S_1 \cup S_2 $$, we can conclude that $$ S = S_1 \cup S_2 $$. 

**(c)**

Proof of $$ S_1 \cup S_2 \subseteq S $$:   

Since $$ R_1 \cup R_2 = R $$, it follows $$ R_1 \subseteq R $$ and $$ R_2 \subseteq R $$. Thus using Soln11(b), $$ S_1 \subseteq S $$ and $$ S_2 \subseteq S $$.
 It follows that $$ S_1 \cup S_2 \subseteq S $$.  

Counter example for $$ S \ne S_1 \cup S_2 $$:

Suppose:    
$$ A = \{1, 2, 3, 4 \} $$.    
$$ R_1 = \{ (1,2), (2,2), (2,3) \} $$.    
$$ R_2 = \{ (4,2), (2,4) \} $$    

$$ R = R_1 \cup R_2 = \{ (1,2), (2,2), (2,3), (4,2), (2,4) \} $$.

Transitive closure for $$ R_1 $$ is:     
$$ S_1 = \{ (1,2), (2, 2), (2,3), (1,3) \} $$.
 
Transitive closure for $$ R_2 $$ is:    
$$ S_2 = \{ (2,2), (4,2), (2,4), (4,4) \} $$.

And $$ S_1 \cup S_2 = \{ (1,2), (2, 2), (2,3), (1,3), (4,2), (2,4), (4,4) \} $$.

Transitive closure for $$ R $$ is :
$$ S = \{ (1,2), (2,2), (2,3), (4,2), (2,4), (1,3), (4,4), (1,4), (4,3) \} $$.

Clearly $$ S \ne S_1 \cup S_2 $$.

<hr/>

**Soln13**

For all the parts there is one common part that I shall prove here.

We have $$ S_i $$ is reflexive/symmetric/transitive closure of $$ R_i $$, where $$ i \in \{1,2\} $$. 

Suppose $$ (x,y) \in R_1 \cap R_2 $$. It follows $$ (x,y) \in R_1 \land (x,y) \in R_2 $$. Since $$ R_1 \subseteq S_1 $$ and $$ R_2 \subseteq S_2 $$, it follows that
$$ (x,y) \in S_1 \cap S_ 2 $$. Thus $$ R_1 \cap R_2 \subseteq S_1 \cap S_2 $$.

**(a)**

We know that $$ S_1 = R_1 \cup i_A $$ and $$ S_2 = R_2 \cup i_A $$.     
And $$ S = (R_1 \cap R_2) \cup i_A $$,     

Suppose that $$ (x,y) \in S_1 \cap S_2 $$. Thus $$ (x,y) \in  R_1 \cup i_A $$ and $$ (x,y) \in  R_2 \cup i_A $$. iff    
$$ ((x,y) \in R_1 \lor (x,y) \in i_A) \land ((x,y) \in R_2 \lor (x,y) \in i_A) $$ iff      
$$ ((x,y) \in R_1 \land (x,y) \in R_2) \lor (x,y) \in i_A $$ iff      
$$ ((x,y) \in R_1 \cap R_2) \lor (x,y) \in i_A $$ iff      
$$ (x,y) \in (R_1 \cap R_2) \cup i_A $$ iff      
$$ (x,y) \in S $$.

Thus $$ (S_1 \cap S_2) = S $$.

**(b)**

Suppose $$ (x,y) \in S_1 \cap S_2 $$. It follows that $$ (x,y) \in S_1 $$ and $$ (x,y) \in S_2 $$. Since $$ S_1 $$ and $$ S_2 $$ are symmetric, it follows that
$$ (y,x) \in S_1 \land (y,x) \in S_2 $$. Thus $$ (y,x) \in S_1 \cap S_2 $$. Thus $$ S_1 \cap S_2 $$ is symmetric.

Since $$ S $$ is symmetric closure of $$ R_1 \cap R_2 $$, and $$ R_1 \cap R_2 \subseteq S_1 \cap S_2 $$, and $$ S_1 \cap S_2 $$ is symmetric, then by the definition of 
symmetric closure, it follows that $$ S \subseteq S_1 \cap S_2 $$.

Counter example to show: $$ S_1 \cap S_2 \nsubseteq S $$:

Suppose $$ A = \{1,2\}, R_1 = \{(1,2)\}, R_2 = \{(2,1)\} $$.    
Thus $$ R_1 \cap R_2 = \phi $$.

Symmetric closure of $$ R_1 $$ is:    
$$ S_1 = \{(1,2), (2,1) \} $$.    

Symmetric closure of $$ R_2 $$ is:    
$$ S_2 = \{(1,2), (2,1) \} $$.    

Symmetric closure of $$ R_1 \cap R_2 $$ is:    
$$ S = \{ \phi \} $$.    

And $$ S_1 \cap S_2 = \{(1,2), (2,1) \} $$.    

Thus $$ S_1 \cap S_2 \nsubseteq S $$.

**(c)**

Suppose $$ (x,y) \in S_1 \cap S_2 $$ and $$ (y,z) \in S_1 \cap S_2 $$. It follows that $$ (x,y) \in S_1 $$ and $$ (y,z) \in S_2 $$. Since $$ S_1 $$ and $$ S_2 $$ are transitive, it follows that
$$ (x,z) \in S_1 $$ and $$ (x,z) \in S_2 $$. Thus $$ (x,z) \in S_1 \cap S_2 $$. Thus $$ S_1 \cap S_2 $$ is symmetric.

Since $$ S $$ is transitive closure of $$ R_1 \cap R_2 $$, and $$ R_1 \cap R_2 \subseteq S_1 \cap S_2 $$, and $$ S_1 \cap S_2 $$ is transitive, then by the definition of 
transitive closure, it follows that $$ S \subseteq S_1 \cap S_2 $$.

Counter example to show: $$ S_1 \cap S_2 \nsubseteq S $$:

Suppose:    
$$ A = \{1, 2, 3 \} $$.    
$$ R_1 = \{ (1,2), (2,3) \} $$.    
$$ R_2 = \{ (1,3) \} $$    

$$ R = R_1 \cap R_2 = \phi $$.

Transitive closure for $$ R_1 $$ is:     
$$ S_1 = \{ (1,2), (2,3), (1,3) \} $$.
 
Transitive closure for $$ R_2 $$ is:    
$$ S_2 = \{ (1,3) \} $$.

Transitive closure for $$ R $$ is :
$$ S = \{ \phi \} $$.

And $$ S_1 \cap S_2 = \{ (1,3) \} $$.

Clearly $$ S_1 \cap S_2 \nsubseteq S $$.

<hr/>

**Soln14**

Suppose:    
$$ A = \{1, 2, 3, a, b, c \} $$.     
$$ R_1 = \{ (1,2), (2,3), (a,b), (b,c) \} $$.    
$$ R_2 = \{ (2,3), (a,c), (c,b) \} $$.    

Thus, $$ R_1 \setminus R_2 = \{ (1,2), (a,b), (b,c) \} $$.    
     
Transitive closure of $$ R_1 $$ is:    
$$ S_1 = \{ (1,2), (2,3), (1,3), (a,b), (b,c), (a,c) \} $$.    

Transitive closure of $$ R_2 $$ is:    
$$ S_2 = \{ (2,3), (a,c), (c,b), (a,b) \} $$.    

Transitive closure of $$ R = R_1 \setminus R_2 $$ is:    
$$ S = \{ (1,2), (a,b), (b,c), (a,c) \} $$.
    
And $$ S_1 \setminus S_2 = \{ (1,2), (1,3), (b,c) \} $$.    

Thus $$ S \nsubseteq S_1 \setminus S_2 $$ and $$ S_1 \setminus S_2 \nsubseteq S $$.

<hr/>

**Soln15**

We will prove that $$ S = R \cup R^{-1} \cup i_A $$ is the symmetric reflexive closure of $$ R $$.

1. $$ R \subseteq S $$: Since $$ S = R \cup R^{-1} \cup i_A $$, it is clear that $$ R \subseteq S $$.

2. $$ S $$ is reflexive: Suppose $$ x \in A $$. Thus $$ (x,x) \in i_A $$. It follows that $$ (x,x) \in R \cup R^{-1} \cup i_A $$. Thus $$ S $$ is reflexive.

3. $$ S $$ is symmetric: Suppose $$ (x,y) \in S $$. Thus $$ (x,y) \in R \lor (x,y) \in R^{-1} $$. Thus $$ (y,x) \in R \lor (y,x) \in R^{-1} $$. 
 Thus we can also say that $$ (y,x) \in R \cup R^{-1} \cup i_A $$. Thus $$ S $$ is symmetric.
  
4. Suppose $$ T \subseteq A \times A $$ such that $$ R \subseteq T $$ and $$ T $$ is symmetric and reflexive. Suppose $$ (x,y) \in S $$. 
Thus $$ (x,y) \in R \cup R^{-1} \cup i_A $$. Thus we have following cases:
 
    - Case 1: $$ (x,y) \in R $$:     
        Since $$ R \subseteq T $$, it follows that $$ (x,y) \in T $$. 

    - Case 2: $$ (x,y) \in R^{-1} $$:
        Thus $$ (y,x) \in R $$. Since $$ R \subseteq T $$, it follows that $$ (y,x) \in T $$. Since $$ T $$ is symmetric, it follows $$ (x,y) \in T $$. 

    - Case 3: $$ (x,y) \in i_A $$:
        Thus $$ x = y $$. Since $$ T $$ is reflexive, it follows that $$ (x,x) \in T $$, or $$ (x,y) \in T $$.
   
Thus if $$ (x,y) \in S $$, then $$ (x,y) \in T $$, it follows that $$ S \subseteq T $$. Thus $$ S $$ is the smallest set of all such sets like $$ T $$.

Thus we proved that such set $$ S $$ exists.

<hr/>

**Soln16**

Since $$ S $$ is reflexive closure of $$ R $$, it follows that $$ S = R \cup i_A $$.

**(a)** Suppose $$ (x,y) \in S $$. Then $$ (x,y) \in R \lor (x,y) \in i_A $$. Thus we have following cases:

- Case 1: $$ (x,y) \in R $$:    
    Since $$ R $$ is symmetric, $$(y,x)$$ \in R. Since $$ R \subseteq S $$, it follows $$ (y,x) \in S $$.
    
- Case 2: $$ (x,y) \in i_A $$:
    Thus $$ x = y $$. Since $$ S $$ is reflexive, it follows $$ (x,y) \in S $$.
     
Thus from both cases, $$ S $$ is symmetric.

**(b)** Suppose $$ (x,y) \in S \land (y,z) \in S $$. Thus we have following possible cases:

- Case 1: $$ (x,y) \in R \land (y,z) \in i_A $$.    
  Thus $$ y = z $$. It follows $$ (x,z) \in R $$. Since $$ R \subseteq S $$, it follows $$ (x,z) \in S $$.

- Case 2: $$ (x,y) \in R \land (y,z) \in R $$.
  Since $$ R $$ is transitive, it follows that $$ (x,z) \in R $$. Since $$ R \subseteq S $$, it follows that $$ (x,z) \in S $$.

- Case 3: $$ (x,y) \in i_A \land (y,z) \in R $$.
  Thus $$ x = y $$. It follows $$ (x,z) \in R $$. Since $$ R \subseteq S $$, it follows $$ (x,z) \in S $$.

- Case 4: $$ (x,y) \in i_A \land (y,z) \in i_A $$.
  Thus $$ x = y = z $$. Since $$ S $$ is reflexive, it follows that $$ (x,z) \in S $$.
  
Thus from both cases, $$ S $$ is transitive.

<hr/>

**Soln17**

Suppose $$ R $$ is symmetric. Suppose $$ (x,y) \in R $$. Since $$ R $$ is symmetric, it follows $$ (y,x) \in R $$. Since $$ R \subseteq S $$,
it follows $$ (y,x) \in S $$. Thus $$ (x,y) \in S^{-1} $$. Thus $$ R \subseteq S^{-1} $$.

Suppose $$ (x,y) \in S^{-1} \land (y,z) \in S^{-1} $$. It follows that $$ (y,x) \in S \land (z,y) \in S $$. Since $$ S $$ is transitive, it follows that
$$ (z,x) \in S $$. Thus $$ (x,z) \in S^{-1} $$. Thus $$ S^{-1} $$ is transitive.

Since $$ R \subseteq S^{-1} $$ and $$ S^{-1} $$ is transitive and $$ S $$ is transitive closure of $$ R $$, it follows from the definition of transitive closure
that $$ S \subseteq S^{-1} $$. Thus if $$ (x,y) \in S $$, then $$ (x,y) \in S^{-1} $$. Since $$ (x,y) \in S^{-1} $$, it follows that $$ (y,x) \in S $$. Thus
$$ S $$ is symmetric.

<hr/>

**Soln18**

Let $$ Q $$ be the symmetric closure of $$ R $$, and let $$ S $$ be the transitive closure of $$ Q $$. Also, let $$ Q' $$ be the transitive closure of $$ R $$, and let $$ S' $$ be 
the symmetric closure of $$ Q' $$.

**(a)**

Since $$ S $$ is transitive closure of $$ Q $$. It follows that $$ Q \subseteq S $$. Since $$ Q $$ is symmetric closure of $$ R $$. It follows that $$ Q $$ is symmetric and $$ R \subseteq Q $$.
Using Soln17, since $$ Q $$ is symmetric, $$ S $$ is symmetric. Also since $$ Q \subseteq S $$ and $$ R \subseteq Q $$, it follows that $$ R \subseteq S $$.
Thus $$ S $$ is transitive and symmetric and $$ R \subseteq S $$.

Now suppose $$ T \subseteq A \times A $$ such that $$ T $$ is transitive and symmetric, and $$ R \subseteq T $$. Since $$ T $$ is symmetric and $$ R \subseteq T $$, and $$ Q $$
is the symmetric closure of $$ R $$, it follows(using definition of symmetric closure) that $$ Q \subseteq T $$. Since $$ T $$ is transitive and $$ Q \subseteq T $$, and $$ S $$ 
is the transitive closure of $$ Q $$, it follows(using definition of transitive closure) that $$ S \subseteq T $$. Thus $$ S $$ is the smallest of the sets like $$ T $$.
It follows that $$ S $$ is symmetric transitive closure of $$ R $$.

**(b)** 

Suppose $$ Q $$ is symmetric closure of $$ R $$, $$ R \subseteq Q $$. 

We know from Soln11, that if $$ R_1 \subseteq R_2 $$, and $$ S_1 $$ and $$ S_2 $$ are transitive closure of $$ R_1 $$ and $$ R_2 $$ respectively, then $$ S_1 \subseteq S_2 $$.

Now since $$ Q' $$ is transitive closure of $$ R $$ and $$ S $$ is transitive closure of $$ Q $$, and $$ R \subseteq Q $$, it follows that $$ Q' \subseteq S $$. Since $$ S $$ is symmetric,
and $$ Q' \subseteq S $$, and $$ S' $$ is symmetric closure of $$ Q' $$, it follows by the definition of symmetric closure that $$ S' \subseteq S $$.
 
**(c)** False. The problem will be because the symmetric closure of a transitive set is may not be transitive. For eg: $$ R = \{(1,2)\} $$. Clearly $$\{(1,2)\}$$ is
       transitive but symmetric closure of $$ R $$ is $$ \{(1,2),(2,1)\} $$. Clearly this is not transitive.
       
Counter Example: 

Suppose:    
$$ A = \{1,2\} $$.    
$$ R = \{(1,2)\} $$    

Thus,    
Symmetric closure of $$ R $$ is:    
$$ Q = \{(1,2),(2,1)\} $$.       
Transitive closure of $$ Q $$ is:     
$$ S = \{(1,2),(2,1),(1,1)\} $$.    

But, if we do first transitive then symmetric,    
Transitive closure of $$ R $$ is:     
$$ Q' = \{(1,2)\} $$.      
Thus symmetric closure of $$ Q' $$:    
$$ S' = \{(1,2),(2,1)\} $$.    
   
Clearly, $$ S' \ne S $$.
 
<hr/>

**Soln19**

Proof and theorem both are not correct. The proof does not take into account that affter adding elements to $$ R $$ to make it transitive, it may no longer be
antisymmetric.

Counter example: $$ A = \{(1,2,3\} $$, R = \{ (1,1), (2,2), (3,3), (1,2), (2,3), (3,1)  \} $$

Clearly $$ R $$ is antisymmetric and reflexive.

Transitive closure of $$ R $$:    
$$ S = \{ (1,1), (2,2), (3,3), (1,2), (2,3), (3,1), (1,3), (3,2), (2,1)  \} $$.
    
Clearly $$ S $$ is not antisymmetric. Thus $$ S $$ is not partial order on $$ A $$.

<hr/>

**Soln20**

**(a)** We shall give two examples of minimal elements:

$$ M_1 = \{ (San Francisco, Chicago), (Chicago, Dallas), (Dallas, New York), (New York, Washington DC), (Washington DC, San Francisco) \} $$.    

$$ M_2 = \{ (San Francisco, Washington DC), (Washington DC, New York), (New York, Dallas), (Dallas, Chicago), (Chicago, San Francisco) \} $$.

These both are minimal elements since for both of them following statement holds:

There does not exist any other set, say $$ X $$ in $$ \mathcal F $$ such that apart from itself such that our set, say $$ M_1 \subseteq X $$.
 
**(b)** Since smallest set in $$ \mathcal F $$ should be the subset of all other sets. Since $$ M_1 $$ and $$ M_2 $$ are sets in $$ \mathcal F $$ and $$ M_1 \cap M_2 = \phi $$, it
 follows that there is no smallest set in $$ \mathcal F $$.
 
<hr/>



  
 
   

  
 
 



 