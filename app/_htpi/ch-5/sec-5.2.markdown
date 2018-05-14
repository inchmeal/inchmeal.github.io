---
chapterName: "Functions"
sectionName: "5.2 - One-to-one and Onto"
chapter: 5
section: "5.2"
order: "002"
date: 2015-11-03
redirect_from:
  - /2015/11/03/how-to-prove-it-ch-5-sec-2.html
---

### Summary

- Suppose $$ f : A \to B $$. We will say that $$ f $$ is one-to-one if:     
  $$ \lnot \exists a_1 \in A \exists a_2 \in A(f(a_1)= f(a_2) \land a_1 \ne a_2) $$.    
  We say that $$ f $$ is onto if:    
  $$ \forall b \in B \exists a \in A(f(a) = b) $$.    
  One-to-one functions are sometimes also called injections, and onto functions are sometimes called surjections.
- Suppose $$ f : A \to B $$. Then:
  - $$ f $$ is one-to-one iff $$ \forall a_1 \in A \forall a_2 \in A(f(a_1) = f(a_2) \to a_1 = a_2) $$. Note that this statement is 
  the positive form of the statement given above for one-to-one.    
  As can be seen here, this statement is easier to prove that a function is one-to-one. We select two values $$ a_1, a_2 \in A $$ such that
  $$ f(a_1) = f(a_2) $$. Now by doing so if we can conclude that $$ a_1 = a_2 $$ then function is one-to-one.
  - $$ f $$ is onto iff $$ Ran(f) = B $$. 
- Suppose $$ f: A \to B $$ and $$ g: B \to C $$. Then as we know by the definition of composition of functions: $$ g \circ f : A \to C $$.
  - If $$ f $$ and $$ g $$ are both one-to-one,then so is $$ g \circ f $$. 
  - If $$ f $$ and $$ g $$ are both onto, then so is $$ g \circ f $$.
- If a function is one-to-one and onto, the function is sometimes called bijective. 
 
<hr/>

**Soln1**

**(a)** One-to-One: False, Onto: True

**(b)** It is not a function, so question is not applicable.

**(c)** One-to-One: True, Onto: False

<hr/>

**Soln2**

**(a)** It is not a function, so question is not applicable.

**(b)** $$ f $$ is not a function. $$ g $$: One-to-One: False, as $$ (ball,b),(bat,b) \in g $$. Onto: True.

**(c)** One-to-One: True, Onto: True

<hr/>

**Soln3**

**(a)** One-to-One: False, Onto: True

**(b)** 

For $$ x = 2, f(x) = 0 $$, Also for $$ x = 0, f(x) = 0 $$. Thus for two values, there is only one image in the range. Thus function is not one-to-one.
  
It is not onto. To prove it lets suppose $$ f $$ is onto. Thus for $$ a \in \mathbb R $$, there must exist some $$ x \in \mathbb R $$ such that $$ f(x) = a $$.
Thus $$ x^2 - 2x = a $$.    
$$ \Rightarrow x^2 - 2x + 1 = a + 1 $$.    
$$ \Rightarrow (x-1)^2 = a + 1 $$.    
$$ \Rightarrow x = \sqrt {a + 1} + 1 $$.    

Now, clearly we can see that if $$ a < 1 $$, $$ x \notin \mathbb R $$. Thus $$ f $$ is not onto. 

**(c)** 

One-to-one: False, because $$ f(3.2) = f(3.3) $$.

Onto: True, For every $$ c \in \mathbb R $$, for $$ x = \left \lfloor c \right \rfloor $$, $$ f(x) = c $$.

<hr/>

**Soln4**

**(a)** One-to-one: True. Onto: False as there are many cities which are not capital of any country.

**(b)** One-to-one: True, Onto: True.

**(c)** One-to-one: True, Onto: False because for $$ y = (0.7,0.7) $$, there is not value of $$ x $$ such that $$ f(x) = (0.7,0.7) $$.

<hr/>

**Soln5**

**(a)**

*One-to-one:*

Suppose $$ x_1, x_2 \in A $$ such that $$ f(x_1) = f(x_2) $$. Thus we have:

$$ \Rightarrow \frac {x_1 + 1} {x_1 - 1} = \frac {x_2 + 1} {x_2 - 1} $$.     
$$ \Rightarrow (x_1 + 1)(x_2 - 1) = (x_2 + 1)(x_1 - 1) $$.     
$$ \Rightarrow x_1x_2 - x_1 + x_2 - 1 = x_1 x_2 - x_2 + x_1 -1 $$.     
$$ \Rightarrow - x_1 + x_2 = - x_2 + x_1 $$.     
$$ \Rightarrow 2x_2 = 2x_1 $$.     
$$ \Rightarrow x_2 = x_1 $$.     

Thus, if $$ f(x_1) = f(x_2) $$, then $$ x_1 = x_ 2 $$. Since $$ x_1, x_2 $$ are arbitrary, it follows that $$ f $$ is one-to-one.

*Onto:*

Suppose $$ y \in A $$ is an arbitrary number such that $$ f(x) = y $$. Thus we have:

$$ \Rightarrow y = \frac {x + 1} {x - 1} $$.    
$$ \Rightarrow y(x - 1) = (x + 1) $$.    
$$ \Rightarrow yx - y = x + 1 $$.    
$$ \Rightarrow yx - x = y + 1 $$.    
$$ \Rightarrow x(y - 1) = y + 1 $$.    
$$ \Rightarrow x = \frac {y + 1} {y - 1} $$.    

Since $$ y \in A $$ and $$ x = \frac {y + 1} {y - 1} $$, it follows that $$ x \in A $$. Since $$ y $$ is arbitrary, it follows that for every $$ y \in A $$,
there exists an $$ x = \frac {y + 1} {y - 1} $$ such that $$ f(x) = y $$. Thus $$ f $$ is onto.

**(b)**

$$ f \circ f (x) = f(f(x)) = f(\frac {x + 1} {x - 1}) = \frac {\frac {x+1} {x-1} + 1} {\frac {x+1} {x-1} - 1} $$.     
$$ f \circ f (x) = \frac {\frac {x+1 + (x-1)} {x-1}} {\frac {x+1 - (x -1)} {x-1}} $$.     
$$ f \circ f (x) = \frac {\frac {2x} {x-1}} {\frac {2} {x-1}} $$.     
$$ f \circ f (x) = \frac {2x} {x-1} \times \frac {x-1} {2} $$.     
$$ f \circ f (x) = x $$.     

Thus $$ f \circ f = i_A $$.

<hr/>

**Soln6**

**(a)** $$ f(2) = \{y \in \mathbb R \, \vert \, - \sqrt 2 < y < \sqrt 2 \} $$.    
  
**(b)** $$ f $$ is not one-to-one because $$ f(-1) = f(-2) = \phi $$. $$ f $$ is onto because for any set $$ y = \{ q \in R \} $$, if $$ x = 1 + {(\text{largest element of y})}^2 $$,
then $$ (x,y) \in f $$.

Update:

Part(b) of this answer is wrong regarding the onto part(for one-to-one it is correct). Please check [here][stack-6b].

I define $$ x = 1 + {(\text{largest element of y})}^2 $$ By this definition not every pair of $$ (x,y) $$ belongs to $$ f $$ or for same $$ x $$ there can be multiple $$ y $$.

Now the correct answer(from [stackoverflow][stack-6b]) answer is, if $$ x > 0 $$ then $$ f(x) = (- \sqrt x, \sqrt x ) $$. Clearly there are many sets which do not fall in this category for eg: $$ (5, 23) \notin f $$.
	
<hr/>

**Soln7**

**(a)** $$ f(\{\{1,2\},\{3,4\}\}) = \{1,2,3,4\} $$.     

**(b)** It is not one-to-one since $$ f(\{\{1,2\},\{3,4\}\}) = f(\{\{1,3\},\{2,4\}\}) $$. However it is onto.

<hr/>

**Soln8**

**(a)**

Suppose $$ g \circ f: A \to C $$ is onto. Suppose $$ c \in C $$ is any arbitrary number. Since $$ g \circ f $$ is onto, it follows that there must exist an 
element $$ a \in A $$ such that $$ a = g \circ f(c) $$. Thus $$ g(f(a)) = c $$. Since $$ c $$ is arbitrary, it follows that for every element $$ c \in C $$,
there exist an element $$ b = f(a) $$ such that $$ g(b) = c $$. Thus $$ g $$ is onto.
  
**(b)**
  
Suppose $$ g \circ f: A \to C $$ is one-to-one. Suppose $$ a_1, a_2 \in A $$ such that $$ f(a_1) = f(a_2) $$. Since $$ g $$ is a function, it follows that
$$ g(f (x_1)) = g(f(x_2)) $$. It follows that $$ g \circ f(x_1) = g \circ f (x_2) $$. Since $$ g \circ f $$ is a one-to-one, it follows that $$ x_1 = x_2 $$.
Thus if $$ f(x_1) = f(x_2) $$, then $$ x_1 = x_2 $$. Since $$ x_1, x_2 $$ are arbitrary, it follows that $$ f $$ is one-to-one.

<hr/>

**Soln9**

**(a)**

Since $$ g $$ is not one-to-one, suppose $$ b_1,b_2 \in B $$ such that $$ g(b_1) = g(b_2) $$. Since $$ f $$ is onto, it follows that there exist
some $$ a_1, a_2 \in A $$ such that $$ f(a_1) = b_1 $$ and $$ f(a_2) = b_2 $$. Thus we have $$ g(f(a_1)) = g(f(a_2)) $$, or $$ g \circ f(a_1) = g \circ f(a_2) $$.
Thus $$ g \circ f $$ is not one-to-one.

**(b)**

Since $$ f $$ is not onto, suppose $$ b \in B $$ such that $$ \forall a \in A (f(a) \ne b ) $$. Since $$ g $$ is a function from $$ B $$ to $$ C $$, it follows that for 
some $$ c \in C $$, $$ c = g(b) $$. We shall prove by contradiction. Thus suppose $$ g \circ f $$ is onto. Thus for some $$ a \in A $$, $$ g \circ f (a) = c $$. Thus $$ g(f(a)) = c $$.
Since $$ g(b) = c $$, and $$ g $$ is one-to-one, it follows $$ f(a) = b $$. But it contradicts that $$ \forall a \in A (f(a) \ne b ) $$. Thus $$ g \circ f $$ is not onto.
  
<hr/>

**Soln10**

**(a)**

Suppose $$ f $$ is one-to-one. Suppose $$  c_1, c_2 \in C $$ such that $$ f \upharpoonleft C (c_1) =  f \upharpoonleft C (c_2) $$. Thus there exist an 
element $$ b \in B $$ such that $$ (c_1,b) \in f \land (c_1,b) \in B \times C $$ and $$  (c_2,b) \in f \land (c_2,b) \in B \times C $$. Since $$ f $$ is
one-to-one and $$ (c_1,b) \in f \land (c_2,b) \in f $$, it follows that $$ c_1 = c_2 $$. Thus if  $$ f \upharpoonleft C (c_1) =  f \upharpoonleft C (c_2) $$,
then $$ c_1 = c_2 $$. Since $$ c_1, c_2 $$ are arbitrary, it follows that $$ f \upharpoonleft C $$ is one-to-one.

**(b)**

Suppose $$ f \upharpoonleft C $$ is onto. Suppose $$ b \in B $$ is an arbitrary element. Since $$ f \upharpoonleft C $$ is onto, there
must exist some element $$ c \in C $$ such that $$ f \upharpoonleft C(c) = b $$. It follows that $$ (c,b) \in f $$. Since $$ c \in C $$,
and $$ C \subseteq A $$, it follows $$ c \in A $$. Since $$ b $$ is arbitrary, it follows that for every $$ b \in B $$, there exist some $$ c \in A $$.
Thus $$ f $$ is onto.

**(c)**

**Converse of (a)** is: if $$ f \upharpoonleft C $$ is one-to-one, then $$ f $$ is one-to-one.

Suppose $$ A = \{1,2,3\}, B = \{a,b\}, C = \{1,2\}, f \upharpoonleft C = \{ (1,a), (2,b) \} , f = \{ (1,a), (2,b), (3,a) \} $$.

Clearly, $$ f \upharpoonleft C $$ is one-to-one but $$ f $$ is not one-to-one.

**Converse of (b)** is: if $$ f $$ is onto, then $$ f \upharpoonleft C $$ is onto.

Suppose $$ A = \{1,2\}, B = \{a,b\}, C = \{2\}, f = \{ (1,a), (2,b) \}, f \upharpoonleft C = \{ (2,b) \} $$.

Clearly, $$ f $$ is onto but $$ f \upharpoonleft C $$ is not onto.

<hr/>

**Soln11**

**(a)**

Suppose $$ A $$ contains more than one elements and suppose $$ a_1, a_2 \in A $$. Thus $$ f(a_1) = f(a_2) = b $$.  Thus $$ f $$ is not one-to-one.

**(b)**

Suppose $$ B $$ contains more than one elements and suppose $$ b_1 \in B $$ and $$ b \ne b_1 $$. Thus there exist an element $$ b_1 \in B $$ such that
 it is not the image of any element in $$ A $$. Thus $$ f $$ is onto.
 
<hr/>

**Soln12**

($$ \to $$)Suppose $$ f \cup g $$ is one-to-one. We will prove by contradiction that $$ Ran(f) \cap Ran(g) = \phi $$. Suppose $$ Ran(f) \cap Ran(g) \ne \phi $$. Thus
there exist atleast one element $$ x $$ such that $$ x \in Ran(f) $$ and $$ x \in Ran(g) $$. Since $$ x \in Ran(f) $$, thus there exist an element $$ a \in A $$ such
 that $$ (a,x) \in f $$. Similarly since $$ x \in g $$, there exist an element $$ b \in B $$ such that $$ (b,x) \in g $$. Since $$ (a,x) \in f $$,
 and $$ f \cup g $$ is a function, it follows $$ (a,x) \in f \cup g $$. Similarly $$ (b,x) \in f \cup g $$. Since $$ f \cup g $$ is a one-to-one function, it follows
 that $$ a = b $$. But since $$ A $$ and $$ B $$ are disjoint, it is a contradiction. Thus $$ Ran(f) \cap Ran(g) = \phi $$.
  
($$ \leftarrow $$)We shall prove this by contra-positive. Suppose $$ Ran(f) \cap Ran(g) \ne \phi $$. Thus we can suppose an element $$ x \in Ran(f) \cap Ran(g) $$.
Since $$ x \in Ran(f) $$, there must exist an element $$ a \in A $$ such that $$ (a,x) \in f $$. Similarly since $$ x \in Ran(g) $$, there must exist an element $$ b \in B $$
such that $$ (b,x) \in g $$. Since $$ A \cap B = \phi $$, it follows that $$ a \ne b $$. Since $$ (a,x) \in f $$, $$ (a,x) \in f \cup g $$. Since $$ (b,x) \in g $$, $$ (b,x) \in f \cup g $$.
Since $$ (a,x) \in f \cup g $$ and $$ (b,x) \in f \cup g $$ and $$ a \ne b $$, it follows that $$ f \cup g $$ is not one-to-one. Thus if $$ Ran(f) \cap Ran(g) = \phi $$, then 
$$ f \cup g $$ is one-to-one.
 
<hr/>

**Soln13**

To prove $$ R : A \to B $$, we need to prove two things:

- $$ \forall a \in A \exists b \in B((a,b) \in R) $$.    
- if $$ (a,b_1) \in R $$ and $$ (a,b_2) \in R $$, then $$ b_1 = b_2 $$.
     

*Proof for:* $$ \forall a \in A \exists b \in B((a,b) \in R) $$.
    
Suppose $$ a \in A $$. Since $$ S \circ R $$ is a function from $$ A $$ to $$ C $$, there must exist an element $$ c \in C $$ such that $$ (a,c) \in S \circ R $$.
Since $$ (a,c) \in S \circ R $$, it follows that there exist an element $$ b \in B $$ such that $$ (a,b) \in R $$ and $$ (b,c) \in S $$. Thus if $$ a \in A $$ then
there exist an element $$ b \in B $$ such that $$ (a,b) \in R $$. Thus $$ \forall a \in A \exists b \in B((a,b) \in R) $$.

*Proof for*: if $$ (a,b_1) \in R $$ and $$ (a,b_2) \in R $$, then $$ b_1 = b_2 $$.

Suppose $$ a \in A $$ and $$ b_1, b_2 \in B $$ such that $$ (a,b_1) \in R $$ and $$ (a,b_2) \in R $$. Since $$ S $$ is a function, there exist $$ c_1, c_2 \in C $$ such 
that $$ (b_1,c_1) \in S $$ and $$ (b_2,c_2) \in S $$. Since $$ (a,b_1) \in R $$ and $$ (b_1,c_1) \in S $$, it follows $$ (a,c_1) \in S \circ R $$. Similarly 
since $$ (a,b_2) \in R $$ and $$ (b_2,c_2) \in S $$, it follows $$ (a,c_2) \in S \circ R $$. Since $$ S \circ R $$ is a function, it follows that $$ c_1 = c_2 $$. Since
$$ (b_1,c_1) \in S $$ and $$ (b_2,c_2) \in S $$ and $$ c_1 = c_2 $$ and $$ S $$ is a one-to-one function, it follows that $$ b_1 = b_2 $$. Thus 
if $$ (a,b_1) \in R $$ and $$ (a,b_2) \in R $$, then $$ b_1 = b_2 $$.

Thus $$ R $$ is a function from $$ A $$ to $$ B $$.

<hr/>

**Soln14**

**(a)**

Suppose $$ R $$ is reflexive and $$ f $$ is onto. Suppose $$ x $$ is an arbitrary element in $$ B $$. Since $$ f $$ is onto function on $$ A \to B $$, there exist an element $$ u \in A $$
such that $$ f(u) = x $$. Since $$ R $$ is reflexive and $$ u \in A $$, it follows that $$ (u,u) \in R $$. Thus $$ f(u) = x \land f(u) = x \land (u,u) \in R $$. Thus $$ (x,x) \in S $$.
Since $$ x $$ is arbitrary, it follows that $$ S $$ is reflexive.

**(b)**

Suppose $$ R $$ is transitive and $$ f $$ is one-to-one. Suppose $$ (x,y) \in S $$ and $$ (y,z) \in S $$. Thus $$ (u,v_1) \in R $$ and $$ (v_2,w) \in R $$ such that
$$ f(u) = x $$ and $$ f(v_1) = y $$ and $$ f(v_2) = y $$ and $$ f(w) = z $$. Since $$ f $$ is one-to-one, it follows that $$ v_1 = v_2 $$ or lets say $$ v = v_1 = v_2 $$. Thus 
$$ (u,v) \in R $$ and $$ (v,w) \in R $$. Since $$ R $$ is transitive, it follows $$ (u,w) \in R $$. Since $$ f(u) = x $$ and $$ f(w) = z $$ and $$ (u,w) \in R $$, it follows that
$$ (x,z) \in S $$. Thus $$ S $$ is transitive.

<hr/>

**Soln15**

**(a)**

Suppose $$ [x]_R \in A/R $$. Since $$ R $$ is an equivalence relation, we know that $$ [x]_R $$ is an equivalence class with respect to $$ R $$. 
Thus by definition of equivalence class as $$ [x]_R $$ is an equivalence class, it follows $$ x \in A $$. Thus for every element $$ [x]_R \in A/R $$,
$$ x \in A $$. Thus $$ g $$ is onto.

**(b)**

($$ \to $$) Suppose $$ g $$ is one-to-one. 
 
Since $$ R $$ is equivalence relation, it follows that $$ i_A \subseteq R $$.

Now to prove $$ R \subseteq i_A $$. Suppose $$ (x,y) \in R $$. Since $$ R $$ is equivalence relation, $$ [x]_R = [y]_R $$. Also since $$ g $$ is a function
on $$ A \to A/R $$, it follows $$ (x,[x]_R) \in g $$ and $$ (y,[y]_R) \in g $$. Since $$ [x]_R = [y]_R $$, and since $$ g $$ is one-to-one, it follows $$ x = y $$.
Thus $$ (x,y) \in i_A $$. Since $$ (x,y) $$ is arbitrary, it follows that $$ R \subseteq i_A $$.

Since $$ i_A \subseteq R $$ and $$ R \subseteq i_A $$, it follows $$ R = i_A $$.

($$ \leftarrow $$) Suppose $$ R = i_A $$. Suppose $$ (x,X) \in g $$ and suppose $$ (y,X) \in g $$. Since $$ X $$ is an equivalence class and $$ g(x) = [x]_R $$,
  it follows that $$ X = [x]_R $$. Similarly $$ X = [y]_R $$. Thus $$ x \in X $$ and $$ y \in X $$. Since $$ X $$ is equivalence class, it follows $$ xRy $$.
  Now since $$ R = i_A $$, it follows that $$ x = y $$. Thus $$ g $$ is one-to-one.
  
<hr/>

**Soln16**

($$ \to $$)Suppose $$ h $$ is one-to-one. Suppose $$ x,y \in A $$ such that $$ f(x) = f(y) $$. Since $$ x \in A $$, then by the definition of $$ h $$,
$$ h([x]_R) = f(x) $$. Similarly $$ h([y]_R) = f(y) $$. Since $$ h $$ is one-to-one and $$ f(x) = f(y) $$, it follows that $$ [x]_R = [y]_R $$. Thus $$ x \in [y]_R $$, 
or $$ xRy $$. Since $$ x,y $$ are arbitrary, it follows that $$ \forall x \in A \forall y \in A (f(x) = f(y) \to xRy) $$.

($$ \leftarrow $$)Suppose $$ \forall x \in A \forall y \in A (f(x) = f(y) \to xRy) $$. Suppose $$ [x]_R, [y]_R \in A/R $$ such that $$ h([x]_R) = h([y]_R) $$. 
 Since $$ h([x]_R) = f(x) $$ and $$ h([y]_R) = f(y) $$, it follows that $$ f(x) = f(y) $$. Since $$ \forall x \in A \forall y \in A (f(x) = f(y) \to xRy) $$, it 
 follows that $$ xRy $$. Since $$ R $$ is an equivalence relation and $$ xRy $$, it follows that $$ [x]_R = [y]_R $$. Thus $$ h $$$ is one-to-one.
 
<hr/>

**Soln17**

**(a)**

($$ \to $$)Suppose $$ (b,c) \in g $$. Since $$ f $$ is onto, there exist an element $$ a \in A $$ such that $$ (a,b) \in f $$. Since $$ (a,b) \in f \land (b,c) \in g $$,
it follows that $$ (a,c) \in g \circ f $$. Since $$ g \circ f = h \circ f $$, it follows $$ (a,c) \in h \circ f $$. Thus there exist an element $$ b' \in B $$ such that
$$ (a,b') \in f $$ and $$ (b',c) \in h $$. Since $$ f $$ is a function, $$ f(a) $$ is a unique element, it follows that $$ b' = b $$. Thus $$ (b,c) \in h $$. Thus $$ g \subseteq h $$.
 
($$ \leftarrow $$)Suppose $$ (b,c) \in h $$. Since $$ f $$ is onto, there exist an element $$ a \in A $$ such that $$ (a,b) \in f $$. Since $$ (a,b) \in f \land (b,c) \in h $$,
it follows that $$ (a,c) \in h \circ f $$. Since $$ g \circ f = h \circ f $$, it follows $$ (a,c) \in g \circ f $$. Thus there exist an element $$ b' \in B $$ such that
$$ (a,b') \in f $$ and $$ (b',c) \in g $$. Since $$ f $$ is a function, $$ f(a) $$ is a unique element, it follows that $$ b' = b $$. Thus $$ (b,c) \in g $$. Thus $$ h \subseteq g $$.

Since $$ g \subseteq h $$ and $$ h \subseteq g $$, it follows that $$ g = f $$.

**(b)**

I was not able to do it. Using the solution directly from the book.
 
Suppose $$ c_1, c_2 \in C $$ such that $$ c_1 \ne c_2 $$. Suppose $$ b ∈ B $$. Suppose $$ g $$ and $$ h $$ are functions from $$ B \to C $$ such that $$ \forall x \in B(g(x) = c_1) $$,  
 $$ \forall x \in B \setminus \{b\}(h(x) = c_1) $$, and $$ h(b) = c_2 $$ . Then $$ g \ne h $$, so by assumption(by contrapositive) $$ g \circ f \ne h \circ f $$, and therefore we can choose some 
$$ a \in A $$ such that $$ g(f(a)) \ne h(f(a)) $$. But by the way $$ g $$ and $$ h $$ were defined, the only $$ x \in B $$ for which $$ g(x) \ne h(x) $$ is $$ x = b $$, so it follows that 
$$ f(a) = b $$. Since $$ b $$ was arbitrary, it follows that $$ f $$ is onto.

<hr/>

**Soln18**

**(a)** Suppose $$ a \in A $$ and $$ b \in B $$ such that $$ (a,b) \in g $$. Since $$ f $$ is a function frm $$ B $$ to $$ C $$ and $$ b \in B $$, there exist 
 an element say $$ c \in C $$ such that $$ (b,c) \in f $$. Since $$ (a,b) \in g $$ and $$ (b,c) \in f $$, it follows that $$ (a,c) \in f \circ g $$. Since
 $$ f \circ g = f \circ h $$, it follows $$ (a,c) \in f \circ h $$. Thus there exist element $$ b' \in B $$ such that $$ (a,b') \in h $$ and $$ (b',c) \in f $$.
Since $$ (b',c) \in f $$ and $$ (b,c) \in f $$ and $$ f $$ is one-to-one, it follows that $$ b' = b $$. Sicne $$ b = b' $$ and $$ (a,b') \in h $$, it follows $$ (a,b) \in h $$.
Since $$ (a,b) $$ is arbitrary, it follows that $$ g \subseteq f $$.

Similarly it can be seen that $$ f \subseteq g $$.

Thus we have $$ f \subseteq g $$ and $$ g \subseteq f $$, it follows that $$ f = g $$.

**(b)**

Suppose $$ b_1, b_2 \in B $$ such that $$ f(b_1) = f(b_2) $$. Suppose $$ g $$ and $$ h $$ are functions from $$ A \to B $$ such that $$ \forall x \in A(g(x) = b_1) $$,  
$$ \forall x \in A(h(x) = b_2) $$. Thus $$ f \circ g (x) = f(g(x)) = f(b_1) = f(b_2) = f(h(x)) = f \circ h(x) $$. Since it is given that if $$ f \circ g = g \circ f $$,
 then $$ g = h $$, it follows that $$ g(x) = h(x) $$. Thus $$ b_1 = b_2 $$. Thus $$ f $$ is one-to-one.

<hr/>

**Soln19**

**(a)**

Proof for $$ hRf $$:

Suppose $$ t(x) = x^2 - 2x + 2 $$ is a function on $$ \mathbb R \to \mathbb R $$. Thus $$ t \circ f(x) = t(f(x)) = (x^2 + 1)^2 - 2(x^2 + 1) + 2 $$.
Thus we have $$ t \circ f(x) = x^4 + 1 + 2x^2 - 2x^2 - 2 + 2 = x^4 + 1 = h(x) $$.
Thus there exist a function $$ t(x) = x^2 - 2x + 2 $$ such that $$ h = t \circ f $$. Thus $$ hRf $$.

Proof for $$ \lnot gRf $$:

We can prove this by contradiction. Suppose that $$ t(x): \mathbb R \to \mathbb R $$ such that $$ t \circ f = g $$. Thus $$ t(f(x)) = g(x) $$. Thus for
$$ x = x_0 = -1 $$, $$ g(x_0) = 0 $$. Since $$ g(x) = t(f(x)) $$, it follows that $$ f(x) = x_0 = -1 $$. Since $$ f(x) = x^2 + 1 $$, it follows that 
$$ \forall x \in \mathbb R(f(x) \ge 1) $$. Thus there is no value of $$ x \in \mathbb R $$ such that $$ f(x) = -1 $$. Thus $$ t(f(x)) \ne g(x) $$ at $$ x = x_0 = -1 $$.
This contradicts that $$ t \circ f $$ is a function on $$ \mathbb R \to \mathbb R $$. Thus $$ (g,f) \notin R $$.

**(b)**

A relation is preorder if it is reflexive and transitive. 

Proof of $$ R $$ is reflexive:

Suppose $$ f \in \mathcal F $$. Consider $$ i_{\mathbb R} \circ f(x) = i_{\mathbb R}(f(x)) = f(x) $$. Thus there exist a function $$ i_{\mathbb R} $$ such
that $$ i_{\mathbb R} \circ f = f $$. Thus $$ (f,f) \in R $$. Since $$ f $$ is arbitrary, it follows that $$ R $$ is reflexive.

Proof of $$ R $$ is transitive:

Suppose $$ f,g,h \in \mathcal F $$ such that $$ fRg $$ and $$ gRh $$. Since $$ fRg $$, there exist a function $$ s $$ such that that $$ f = s \circ g $$.
Similarly since $$ gRh $$, it follows that for there exist a function $$ t $$ such that $$ t \circ h = g $$. Thus $$ f(x) = s(g(x)) = s(t \circ h(x)) = s(t(h(x))) $$.
Thus $$ f(x) = s(t(h(x))) = s \circ t(h(x)) = k(h(x)) $$, where $$ k = s \circ t $$. Thus there exist a function $$ k $$ such that $$ k \circ h = f $$.
 Thus $$ (f,h) \in R $$. Since $$ f,g,h $$ are arbitrary, it follows that $$ R $$ is transitive.
  
Since $$ R $$ is reflexive and transitive, it follows that $$ R $$ is pre-order.

**(c)**

Suppose $$ f \in \mathcal F $$. Consider $$ f \circ i_{\mathbb R}(x) = f (i_{\mathbb R}(x)) = f(x) $$. Thus there exist a function $$ f = f $$ such that
$$ f \circ i_{\mathbb R} = f $$. Thus $$ (f,i_{\mathbb R}) \in R $$.

**(d)**

($$ \to $$) Suppose $$ i_{\mathbb R}Rf $$. Suppose $$ x_1, x_2 \in \mathbb R $$ such that $$ f(x_1) = f(x_2) $$. Since $$ i_{\mathbb R}Rf $$, there exist a function
$$ t : \mathbb R \to \mathbb R $$ such that $$ t \circ f = i_{\mathbb R} $$. Thus $$ t \circ f(x_1) = t(f(x_1)) = t(f(x_2)) = t \circ f(x_2) $$. Since $$ t \circ f = i_{\mathbb R} $$,
it follows that $$ t \circ f(x_1) = x_1 $$ and $$ t \circ f(x_2) = x_2 $$. Since $$ t \circ f(x_1) = t \circ f(x_2) $$, it follows that $$ x_1 = x_2 $$.
Since $$ x_1, x_2 $$ are arbitrary, it follows that $$ f $$ is one-to-one.

($$ \leftarrow $$) Suppose $$ f $$ is one-to-one. Suppose $$ h = f^{-1} \cup \{ R \setminus A \times \{0\} \} $$ where $$ A = Ran(f) $$. Now we will first prove that $$ h $$ is a function.

To prove $$ h $$ is a function, we need to prove existence and uniqueness. Suppose $$ x \in R $$. Thus we have two possible cases:

- Case 1: $$ x \in A $$. Thus $$ x \in Ran(f) $$. It follows there exist an element $$ y \in \mathbb R $$ such that $$ (y,x) \in f $$. Thus $$ (x,y) \in f^{-1} $$.
 Also since $$ f $$ is one-to-one, thus $$ x $$ is an image of only one element $$ y $$ in $$ f $$. Thus for $$ x $$ there is a unique element $$ y $$ in $$ f^{-1} $$.
 Thus $$ h(x) $$ exists as well as if $$ x \in A $$ then there is only one element(unique) $$ y $$ such that $$ h(x) = y $$.
   
- Case 2: $$ x \notin A $$. Thus $$ x \in \mathbb R \setminus A $$. Thus $$ h(x) = 0 $$. Thus there is a unique value $$ 0 $$ for every $$ x \in \mathbb R \setminus A $$.
  Thus for $$ x \notin A $$, $$ h(x) $$ exists and there is only one value(unique) $$ 0 $$ such that $$ h(x) = 0 $$. 
   
Thus $$ h $$ is a function on $$ \mathbb R \to \mathbb R $$.

Now suppose $$ x \in \mathbb R $$ and $$ h \circ f(x) = h(f(x)) $$. Since $$ f(x) \in Ran(R) $$, then by definition of $$ h $$, $$ h(f(x)) = x $$. Thus 
$$ h \circ f = i_{\mathbb R} $$. 

Thus there exist a function $$ h $$ such that $$ h \circ f = i_{\mathbb R} $$. Thus $$ i_{\mathbb R}Rf $$.

**(e)**

Suppose $$ f \in \mathcal F $$. We have $$ g \circ f(x) = g(f(x)) $$. Since $$ f $$ is a function from $$ \mathbb R $$ to $$ \mathbb R $$, it follows that
 $$ f(x) \in \mathbb R $$. Since $$ \forall x \in \mathbb R(g(x) = c) $$ and $$ f(x) \in \mathbb R $$, it follows that $$ g(f(x)) = c $$. Since $$ g(x) = c $$,
 it follows $$ g \circ f = g $$. Thus $$ (g,f) \in R $$.
 
**(f)**

($$ \to $$) Suppose $$ fRg $$. Thus there exist a function $$ h $$ such that $$ h \circ g = f $$. Thus $$ h(g(x)) = f(x) $$. Since $$ g(x) = c $$, 
it follows that $$ f(x) = h(c) $$. Since $$ h(c) $$ is a constant, thus $$ f(x) = h(c) $$ is also a constant. Thus $$ f $$ is a contant function.

($$ \leftarrow $$) Suppose $$ f $$ is a constant function such that $$ \forall x \in \mathbb R(f(x) = d) $$. Consider $$ f \circ g = f(g(x)) = f(c) = d = f(x) $$.
Thus $$ f \circ g = f $$. Thus $$ (f,g) \in R $$, or $$ fRg $$.

**(g)**

Proof for largest element:

Suppose $$ [l]_S \in \mathcal F / S $$ is set of all one-to-one functions. Thus $$ l \in [l]_S $$ and $$ l $$ is one-to-one. Now to prove $$ [l]_S $$ is the largest element, if 
we prove $$ \forall [f]_S \in \mathcal F / S([f]_S T [l]_S) $$. Since it is given that $$ [f]_S T [g]_S $$ iff $$ f R g $$, it follows that we need to prove $$ f R l $$.   
Now from part(c) of this solution, we have $$ (f,i_{\mathbb R}) \in R $$, or there exist a function $$ h $$ such that $$ f = h \circ i_{\mathbb R} $$.
Also since $$ l $$ is one-to-one, then form part(e) of the solution, there exist a function $$ k $$ such that $$ i_{\mathbb R} = k \circ l $$. Thus we have
$$ f = h \circ i_{\mathbb R} = h \circ k \circ l = m \circ l $$, where $$ m = h \circ k $$. Thus $$ f R l $$. It follows that $$ [f]_S T [l]_S $$. Since
$$ [f]_S $$ is arbitrary, it follows that $$ [l]_S $$ is the largest element of $$ \mathcal F / S $$ in the partial order $$ T $$.
 
Proof for smallest element:

Suppose $$ [s]_S \in \mathcal F / S $$ is set of all constant functions. Thus $$ s \in [s]_S $$ and $$ s $$ is a contant function. Now to prove $$ [s]_S $$ is the smallest element, if 
we prove $$ \forall [f]_S \in \mathcal F / S([s]_S T [f]_S) $$. Since it is given that $$ [f]_S T [g]_S $$ iff $$ f R g $$, it follows that we need to prove $$ s R f $$. Since $$ s $$ is contant
 function, thus using part(e) of this solution, it follows that $$ s R f $$. Thus $$ [f]_S T [s]_S $$. Since $$ [f]_S $$ is arbitrary, it follows that $$ [s]_S $$ is the smallest element of
$$ \mathcal F / S $$ in the partial order $$ T $$.


[stack-6b]: https://math.stackexchange.com/questions/2574301/is-this-function-onto

