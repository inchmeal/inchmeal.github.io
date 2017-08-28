---
chapterName: "Quantificational Logic"
sectionName: "2.3 - More Operations on Sets"
chapter: 2
section: "2.3"
order: "003"
date: 2015-09-10
redirect_from:
  - /2015/09/10/how-to-prove-it-ch-2-sec-3.html
---

### Summary

- Sets can be defined in following ways:
    - Listing all elements of the set. Eg: $$ \{1, 2, 3, 4, 5\}, or \{1, 3, 5, 7, 9, 11, 13, 15, ... \} $$.
    - Element-hood Test Notation: $$ \{ x\,\vert\,P(x) \} $$. Or sometimes replacing $$ x $$ by an expression eg: $$ \{ n^2\,\vert\,n \in \mathbb{N} \} $$.
    - A set can also be defined using *indexed family* notation. For eg: $$ P = \{p_i\,\vert\,i ∈ I\} $$, where $$ I = \{ i ∈ N\,\vert\,1 ≤ i ≤ 100 \} $$. 
- An indexed family $$ A = \{x_i\,\vert\,i ∈ I\} $$ can also be defined as $$ A = \{x\,\vert\,∃i ∈ I (x = xi )\} $$. 
  Thus $$ x ∈ \{x_i\,\vert\,i ∈ I \} $$ means the same thing as $$ ∃i ∈ I(x = x_i) $$.
- Sets whose elements are all sets are called families of sets. Eg: $$ \mathcal{F} = \{ \{1,2\}, \{2,3,4\}, \{6,7,10\} \} $$.  
- Power Set: $$ \mathcal{P}(A) = \{x\,\vert\,x ⊆ A\} $$.
- If $$ \mathcal{F} $$ is a family of sets, then:
    - Intersection of all sets in $$ \mathcal{F} = \cap \mathcal{F} = \{x\,\vert\,∀A ∈ F(x ∈ A)\} = \{x\,\vert\,∀A(A ∈ F → x ∈ A)\} $$.
    - Union of all sets in $$ \mathcal{F} = \cup \mathcal{F} = \{x\,\vert\,∃A ∈ F(x ∈ A)\} = \{x\,\vert\,∃A(A ∈ F \land x ∈ A)\} $$.
- Some useful logical forms:
    - $$ x ∈ \{x_i\,\vert\,i ∈ I \} $$ is equivalent to $$ ∃i ∈ I(x = x_i) $$.
    - $$ x ∈ \mathcal{P}(A) $$ is equivalent to $$ x ⊆ A $$ which is equivalent to $$ ∀y(y ∈ x → y ∈ A) $$.
    - $$ x ∈ ∩ \mathcal{F} $$ is equivalent to $$ ∀A ∈ \mathcal{F}(x ∈ A)$$, or equivalently,$$ ∀A(A ∈ \mathcal{F} → x ∈ A) $$.
    - $$ x ∈ ∪ \mathcal{F} $$ is equivalent to $$ ∃A ∈ \mathcal{F}(x ∈ A) $$.
- An alternative notation of union or intersection. If $$ \mathcal{F} = \{A_i\,\vert\,i ∈ I\} $$, where each $$ A_i $$ is a set. Then $$ ∩ \mathcal{F} $$ would be the set of all elements common to all the $$ A_i $$’s, for $$ i ∈ I $$, and this can also be written as $$ ∩_{i∈I} A_i $$.
    
<hr/>

**Soln1**

**(a)** $$ \mathcal F \subseteq \mathcal P(A) $$    
$$ \quad = \forall x (x \in \mathcal F \to x \in \mathcal P(A) $$    
$$ \quad = \forall x (x \in \mathcal F \to x \subseteq A $$    
$$ \quad = \forall x (x \in \mathcal F \to \forall y(y \in x \to y \in A)) $$    

**(b)** $$ A ⊆ \{ 2n+1\,\vert\,n ∈ \mathbb N \} $$    
$$ \quad = \forall x ( x \in A \to x \in \{ 2n+1\,\vert\,n ∈ \mathbb N \} ) $$    
$$ \quad = \forall x ( x \in A \to \exists n \in \mathbb N( x = 2n+1) ) $$    

**(c)** $$ \{n^2 + n + 1\,\vert\,n ∈ N \} ⊆ \{ 2n + 1\,\vert\,n ∈ \mathbb N \} $$     
$$ \quad = \forall x ( x \in \{n^2 + n + 1\,\vert\,n ∈ \mathbb N \} \to x \in \{ 2n + 1\,\vert\,n ∈ \mathbb N \} ) $$     
$$ \quad = \forall x ( \exists n \in \mathbb N(x = n^2 + n + 1) \to \exists m \in \mathbb N (x = 2m + 1) ) $$    
This is equivalent to:    
$$ \quad = \exists n \in \mathbb N \exists m \in \mathbb N(n^2 + n + 1 = 2m + 1) $$.

**(d)** $$ \mathcal P (∪_{i ∈ I} A_i) \nsubseteq ∪_{i ∈ I} \mathcal P(A_i) $$    
$$ \quad = \exists x ( (x \in \mathcal P (∪_{i ∈ I} A_i)) \land  \lnot (x \in ∪_{i ∈ I} \mathcal P(A_i))) $$    
$$ \quad = \exists x ( (x \subseteq ∪_{i ∈ I} A_i) \land \lnot (\exists i \in I(x \in \mathcal P(A_i)))) $$    
$$ \quad = \exists x ( \forall y(y \in x \to y \in ∪_{i ∈ I} A_i) \land \lnot (\exists i \in I(x \subseteq A_i))) $$    
$$ \quad = \exists x ( \forall y(y \in x \to \exists i \in I(y \in A_i)) \land \forall i \in I \lnot(x \subseteq A_i)) $$    
$$ \quad = \exists x ( \forall y(y \in x \to \exists i \in I(y \in A_i)) \land \forall i \in I \lnot \forall y( y \in x \to y \in A_i)) $$    
$$ \quad = \exists x ( \forall y(y \in x \to \exists i \in I(y \in A_i)) \land \forall i \in I \exists y \lnot ( y \notin x \lor y \in A_i)) $$    
$$ \quad = \exists x ( \forall y(y \in x \to \exists i \in I(y \in A_i)) \land \forall i \in I \exists y ( y \in x \land y \notin A_i)) $$    

<hr/>

**Soln2**

**(a)** $$ x ∈ ∪ \mathcal F \setminus ∪ \mathcal G $$    
$$ \quad = x ∈ ∪ \mathcal F \land \lnot x \in ∪ \mathcal G $$    
$$ \quad = \exists A \in \mathcal F(x \in A) \land \lnot \exists A \in \mathcal G(x \in A) $$    
$$ \quad = \exists A \in \mathcal F(x \in A) \land \forall A \in \mathcal G \lnot(x \in A) $$    
$$ \quad = \exists A \in \mathcal F(x \in A) \land \forall A \in \mathcal G(x \notin A) $$    


**(b)** $$ \{ x \in B\,\vert\,x \notin C\} ∈ \mathcal P(A) $$    
$$ \quad = \{ x \in B\,\vert\,x \notin C\} \subseteq A $$    
$$ \quad = \forall y (y \in \{ x \in B\,\vert\,x \notin C\} \to y \in A )$$    
$$ \quad = \forall y ((y \in B \land y \notin C) \to y \in A )$$    

**(c)** $$ x ∈ ∩_{i∈I}(A_i ∪ B_i) $$    
$$ \quad = \forall i \in I(x \in (A_i ∪ B_i)) $$    
$$ \quad = \forall i \in I(x \in A_i \lor x \in B_i) $$    

**(d)** $$ x ∈ (∩_{i ∈ I}A_i) ∪ (∩_{i ∈ I}B_i) $$    
$$ \quad = x ∈ (∩_{i ∈ I}A_i) \lor x \in (∩_{i ∈ I}B_i) $$    
$$ \quad = \forall i ∈ I(x \in A_i) \lor \forall i ∈ I(x \in B_i) $$    

<hr/>

**Soln3** $$ \mathcal P({\phi}) = \{ \phi, \{ \phi \} \}$$

<hr/>

**Soln4** $$ \cap \mathcal F = \{ \text{red, blue} \} $$    
$$  \cup \mathcal F = \{ \text{red, green, blue, orange, purple} \}  $$

<hr/>

**Soln5** $$ \cap \mathcal F = \phi $$    
$$ \cup \mathcal F = \{ 3, 5, 7, 12, 16, 23 \}  $$

<hr/>

**Soln6** 

Given: $$ A_i = \{i, i + 1, i −1, 2i \} $$ where $$ I = \{ 2, 3, 4, 5\} $$    

$$ A_2 = \{2, 3, 1, 4 \} $$    
$$ A_3 = \{3, 4, 2, 6 \} $$    
$$ A_4 = \{4, 5, 3, 8 \} $$    
$$ A_5 = \{5, 6, 4, 10 \} $$    

$$ \cap_{i \in I} A = \{ 4 \} $$    
$$ \cup_{i \in I} A = \{ 1, 2, 3, 4, 5, 6, 8, 10 \}  $$

<hr/>

**Soln8**

Given: $$ A_i = \{i,2i\} $$ and $$ B_i = \{i, i+1 \} $$ where $$ I = \{2, 3\} $$

**(a)**

$$ A_2 = \{ 2, 4\} $$    
$$ A_3 = \{ 3, 6\} $$    

$$ B_2 = \{ 2, 3\} $$    
$$ B_3 = \{ 3, 4\} $$    

**(b)**

$$ ∩_{i∈I}(A_i ∪ B_i) = \{3, 4\} $$    
$$ (∩_{i ∈ I}A_i) ∪ (∩_{i ∈ I}B_i) = \{3 \} $$
    
**(c)** No. The given statements are not equivalent.
    
<hr/>
    
**Soln9** 
    
$$ I = \{1, 2 \} $$    
$$ A_1 = \{2, 3 \}, \quad B_1 = \{2, 5\} $$    
$$ A_2 = \{3, 5 \}, \quad B_2 = \{7, 11\} $$    

$$ A_1 \cup A_2 = \{ 2, 3, 5\}, \quad  B_1 \cup B_2 = \{ 2, 5, 7, 11\} $$    
$$ (A_1 \cup A_2) \cap (B_1 \cup B_2) = \{ 2, 5 \} $$
    
$$ A_1 \cap B_1 = \{ 2 \}, \quad A_2 \cap B_2 = \phi $$    
$$ (A_1 \cap B_1) \cup  (A_2 \cap B_2) = \{ 2 \} $$    
    
Thus $$ (A_1 \cup A_2) \cap (B_1 \cup B_2) \neq (A_1 \cap B_1) \cup  (A_2 \cap B_2) $$    

<hr/>

**Soln10**

$$ x ∈ \mathcal P(A) ∩ \mathcal P (B) $$    
$$ \quad = x ∈ \mathcal P(A) \land x ∈ \mathcal P (B) $$    
$$ \quad = x \subseteq A \land x \subseteq B $$    
$$ \quad = \forall y (y \in x \to y \in A ) \land \forall y (y \in x \to y \in B )$$    
$$ \quad = \forall y \in x(y \in A) \land \forall y \in x(y \in B )$$    
$$ \quad = \forall y \in x(y \in A \land y \in B )$$    
$$ \quad = \forall y \in x(y \in (A \cap B))$$    
$$ \quad = x \subseteq (A \cap B))$$    
$$ \quad = x \to \mathcal P(A \cap B))$$ Hence Proved.

<hr/>

**Soln11**

$$Taking A = \{1, 2\}$$, and $$ B = \{2, 3\} $$    
$$ A \cup B = \{1, 2, 3\} $$    

$$ \mathcal P(A) = \{\{1\}, \{2\}, \{1, 2\}, \phi \} $$    
$$ \mathcal P(B) = \{\{2\}, \{3\}, \{2, 3\}, \phi \} $$    
$$ \mathcal P(A) \cup \mathcal P(B) = \{\{1\}, \{2\}, \{3\}, \{1, 2\}, \{2, 3\}, \phi \} $$    

And $$ \mathcal P(A \cup B) = \{\{1\}, \{2\}, \{3\}, \{1, 2\}, \{2, 3\}, \{1, 3\}, \{1, 2, 3\}, \phi \} $$    
Clearly $$ \mathcal P(A \cup B) \neq \mathcal P(A) \cup \mathcal P(B) $$

<hr/>

**Soln12**

**(a)**

$$ x \in ∪_{i ∈ I}(A_i ∪ B_i) $$    
$$ \quad = \exists i \in I(x \in (A_i ∪ B_i) $$    
$$ \quad = \exists i \in I(x \in A_i \lor x \in B_i) $$    
Existential quantifier distributes over interjection:    
$$ \quad = \exists i \in I(x \in A_i) \lor \exists i \in I(x \in B_i) $$    
$$ \quad = x \in ∪_{i∈I}A_i \lor x \in ∪_{i ∈ I}B_i $$    
$$ \quad = x \in ((∪_{i∈I}A_i) \cup (∪_{i ∈ I}B_i)) $$    
This is equivalent to RHS.

**(b)**

$$ x \in ( ∩ \mathcal F) ∩ ( ∩ \mathcal G) $$    
$$ \quad = x \in ( ∩ \mathcal F) \land x \in ( ∩ \mathcal G) $$    
$$ \quad = (\forall A \in \mathcal F(x \in A)) \land (\forall A \in \mathcal G(x \in A)) $$    
$$ \quad = \forall A(A \in \mathcal F \to x \in A) \land \forall A(A \in \mathcal G \to x \in A) $$    
Using reverse of, Universal Quantifier distributes over conjunction:
$$ \quad = \forall A((A \in \mathcal F \to x \in A) \land (A \in \mathcal G \to x \in A)) $$    
$$ \quad = \forall A((A \notin \mathcal F \lor x \in A) \land (A \notin \mathcal G \lor x \in A)) $$    
Using inverse of law of distribution:    
$$ \quad = \forall A((A \notin \mathcal F \land A \notin \mathcal G) \lor x \in A) $$    
Using Demorgan's Law:    
$$ \quad = \forall A(\lnot(A \in \mathcal F \lor A \in \mathcal G) \lor x \in A) $$    
$$ \quad = \forall A((A \in \mathcal F \lor A \in \mathcal G) \to x \in A) $$    
$$ \quad = \forall A \in (\mathcal F \cup \mathcal G)(x \in A) $$    
$$ \quad = x \in \cap(\mathcal F \cup \mathcal G) $$    
= RHS.

**(c)**

$$ x \in \cap_{i∈I}(A_i \setminus B_i) $$    
$$ \quad = \forall i \in I(x \in (A_i \setminus B_i)) $$    
$$ \quad = \forall i \in I((x \in A_i) \land \lnot (x \in  B_i)) $$    
$$ \quad = \forall i \in I(x \in A_i) \land \forall i \in I (\lnot (x \in  B_i)) $$    
$$ \quad = \forall i \in I(x \in A_i) \land \lnot \exists i \in I (x \in  B_i) $$    
$$ \quad = (x \in \cap_{i \in I}A_i) \land (\lnot  x \in \cup_{i \in I} B_i) $$    
$$ \quad = x \in (\cap_{i \in I}A_i \setminus \cup_{i \in I} B_i) $$    
= RHS.

<hr/>

**Soln13**

Given: $$ A_{i,j} = \{i, j,i + j\} $$ where $$ I = \{1, 2\} $$ and $$ J = \{3, 4\} $$    

**(a)** $$ B_j = ∪_{i∈I} A_{i,j} = A_{1,j} ∪ A_{2,j} $$    
$$ B_3 = A_{1,3} \cup A_{2,3} = \{1, 3, 4\} \cup \{2, 3, 5\} = \{1, 2, 3, 4, 5\}$$    
$$ B_4 = A_{1,4} \cup A_{2,4} = \{1, 4, 5\} \cup \{2, 4, 6\} = \{1, 2, 4, 5, 6\}$$
    
**(b)** 

Putting values from (a) : $$ B_3 \cap B_4 = \{1, 2, 4, 5\} $$    

**(c)**

To find $$ \cup{i ∈ I}(\cap_{j∈J} A_{i,j}) $$, lets first compute $$ C_i = \cap_{j∈J} A_{i,j} = A_{i,3} \cap A_{i,4} $$    
$$ C_1 = A_{1,3} \cap A_{1,4} = \{1, 3, 4\} \cap \{1, 4, 5\} = \{1, 4\}$$    
$$ C_2 = A_{2,3} \cap A_{2,4} = \{2, 3, 5\} \cap \{2, 4, 6\} = \{2\}$$    
Thus we have:
$$ \cup{i ∈ I}(\cap_{j∈J} A_{i,j}) = C_1 \cup C_2 = \{1, 2, 4\} $$    
No, expression of (b) and (c) parts are not equal.

**(d)**

LHS: $$ x ∈ \cap_{j \in J} (\cup_{i \in I} A_{i, j} ) $$    
$$ \quad = \forall j \in J \exists i \in I(x \in A_{i, j}) $$    

RHS: $$ x ∈ \cup_{i \in I} (\cap_{j \in J} A_{i, j} ) $$    
$$ \quad = \exists i \in I \forall j \in J(x \in A_{i, j}) $$    

Clearly LHS and RHS are not equal. We already saw this that if order of quantifiers are changed, expressions are also changed.

<hr/>

**Soln14**

**(a)** 

$$ x ∈ \cup \mathcal F $$    
$$ \quad = \exists A \in \mathcal F (x \in A) $$    
$$ \quad = \exists A(A \in \mathcal F \land x \in A) $$    
If $$ \mathcal F = \phi $$, $$ A \in \mathcal F $$ will always be false.    
Thus whole statement will be false.
Thus $$ x ∈ \cup \phi = false $$, irrespective of the value of x.    
which means $$ \cup \phi = \phi $$.

**(b)**

$$ x ∈ \cap \mathcal F $$    
$$ \quad = \forall A(A \in \mathcal F \to x \in A) $$        
If $$ \mathcal F = \phi $$, $$ A \in \mathcal F $$ will always be false.    
Thus $$ A \in \mathcal F \to x \in A $$ will always be true.    
That means $$ x ∈ \cap \mathcal \phi = true $$, irrespective of the value of x.    
That means $$ \cap \phi = U $$.

<hr/>

**Soln15**

**(a)**

- According to the definition, R is the set of all sets that does not contains themselves.
- R itself should also be a set that does not contain itself, as if it contains itself it will contradict its own definition.
- Now if R does not contain itself, then again it contradicts with its definition which says it is a set that contains all the sets that does not contain themselves.
- Thus such set R can not exist.

**(b)** It follows that there is no universal set of sets.















