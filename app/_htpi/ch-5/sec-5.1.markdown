---
chapterName: "Functions"
sectionName: "5.1 - Functions"
chapter: 5
section: "5.1"
order: "001"
date: 2015-11-03
description:  "Inchmeal - Velleman's How To Prove It Solutions, Ch-5 Sec-5.1, Functions"
redirect_from:
  - /2015/11/03/how-to-prove-it-ch-5-sec-1.html
---

### Summary

- *Function* : Suppose $$ F $$ is a relation from $$ A $$ to $$ B $$. Then $$ F $$ is called a *function* from $$ A $$ to $$ B $$ if for every $$ a \in A $$ there 
is exactly one $$ b \in B $$ such that $$ (a, b) \in F $$. In other words, $$ F $$ is a function from $$ A $$ to $$ B $$ means:    
    $$ \forall a \in A \exists ! b \in B((a,b) \in F) $$.    
To indicate that $$ F $$ is a function from $$ A $$ to $$ B $$, we will write $$ F : A \to B $$.
- Suppose $$ f $$ and $$ g $$ are functions from $$ A $$ to $$ B $$. If $$ \forall a \in A( f (a) = g(a)) $$, then $$ f = g $$. This theorem can be used in 
  proving two functions are equal.
- As can be seen from the definition of function, funtionsa are special kind of relations. Thus all the theorems of relations applies to functions also. Domain of the function $$ f $$
 from $$ A $$ to $$ B $$ must contain each element of the range as first coordinate of an ordered pair in $$ f $$. The elements of the range of $$ f $$ will be the second coordinates 
 of all the ordered pairs in $$ f $$. Thus range need not be all of $$ B $$. Also this second coordinate is also sometimes called as image of the first coordinate.
- As noted earlier, since function is a relation, all definitions that apply to relation also aplly to function. Thus definition of composition of relation also
  apply here as follows:
  - *Composition of function*: Suppose $$ f : A \to B $$ and $$ g : B \to C $$. Then $$ g \circ f : A \to C $$, and for any $$ a \in A $$, the value of $$ g \circ f $$ 
  at $$ a $$ is given by the formula $$ (g \circ f )(a) = g( f (a)) $$.
 
<hr/>

**Soln1**

**(a)** True

**(b)** False

**(c)** True

<hr/>

**Soln2**

**(a)** False. Because there is no image for point $$ d $$.

**(b)** $$ f $$ is not a function. Because for eg: "ape" has $$ 3 $$ images. $$ g $$ is a function.
    
**(c)** True.

<hr/>

**Soln3**

**(a)** $$ f(a) = b, f(b) = b, f(c) = a $$.
 
**(b)** $$ f(2) = 2^2 - 2 \times 2 = 0 $$.

**(c)** $$ f(\pi) = 3, f(- \pi) = -4 $$.

<hr/>

**Soln4**

**(a)** Capital of Italy = Rome.

**(b)** $$ \{1,2,3\} \setminus \{1,3\} = \{2\} $$.

**(c)** $$ f(2) = (3,1) $$.
 
<hr/>

**Soln5**

$$ L \circ H $$: It is an identity function on all countries.

$$ H \circ L $$: This function maps a city $$ c $$ to another city $$ C $$ such that $$ C $$ is the capital of the country of of the city $$ c $$.

<hr/>

**Soln6**

$$ f \circ g (x) = f(g(x)) = \frac 1 {(2x-1)^2 + 2} = \frac 1 {4x^2 -4x + 3} $$.

$$ g \circ f (x) = g(f(x)) = 2 \times { \frac 1 {x^2 + 2} } - 1 $$.    
$$ = \frac 2 {x^2 + 2} - 1 $$.     
$$ = \frac {2 - x^2 - 2} {x^2 + 2} $$.    
$$ = \frac {-x^2} {x^2 + 2}$$.

**Soln7**

**(a)**

To prove $$ f \upharpoonright C $$ is a function,we need to prove that for every $$ c \in C $$ there exists a unique $$ b \in B $$ such that $$ (c,b) \in f \upharpoonright C $$.

<u>Existence:</u>

Suppose $$ c \in C $$. Since $$ C \subseteq A $$, $$ c \in A $$. Since $$ f : A \to B $$, it follows that there exist an element $$ b \in B $$ such that $$ (c,b) \in f $$.
Thus $$ b \in B $$. It follows that $$ (c,b) \in C \times B $$. Since $$ (c,b) \in f $$ and $$ (c,b) \in C \times B $$. It follows that $$ (c,b) \in f \upharpoonright C $$.

<u>Uniqueness:</u>

Suppose $$ (c,b_1) \in f \upharpoonright C $$ and $$ (c,b_2) \in f \upharpoonright C $$. Thus $$ (c,b_1) \in f $$ and $$ (c,b_2) \in f $$. Since $$ f $$ is a function, it
 follows that $$ b_1 = b_2 $$. Thus there exist only one element $$ b $$ such that $$ (c,b) \in f \upharpoonright C $$.
  
Suppose $$ (c,b) \in f \upharpoonright C $$. Thus $$ b = f(c) $$. Since $$ (c,b) \in f \upharpoonright C $$, $$ b = f \upharpoonright C (c) $$. Thus $$ b = f(c) = f \upharpoonright C (c) $$.
 
**(b)**

($$ \to $$)Suppose $$ g = f \upharpoonright C $$. Suppose $$ (c,b) \in g $$. Thus $$ (c,b) \in f \upharpoonright C $$. It follows that $$ (c,b) \in f $$.
 Thus $$ g \subseteq f $$.

($$ \leftarrow $$)Suppose $$ g \subseteq f $$. Suppose $$ c \in C $$. Since $$ g: C \to B $$, there must exist an element $$ b \in B $$ such that $$ b = g(c) $$.
 Thus $$ (c,b) \in g $$. Since $$ g \subseteq f $$, it follows $$ (c,b) \in f $$. Thus $$ b = f(c) $$. Since $$ b \in B $$ and $$ c \in C $$, it follows $$ (c,b) \in C \times B $$.
 Since $$ (c,b) \in C \times B $$ and $$ (c,b) \in f $$, if follows that $$ (c,b) \in f \upharpoonright C $$. Thus $$ b = g(c) = f(c) = f \upharpoonright C(c) $$.
Since $$ c $$ is arbitrary, it follows that $$ g = f \upharpoonright C $$.

**(c)**

We have $$ h : \mathbb R \to \mathbb Z $$ and $$ g = \mathbb Z \to \mathbb Z $$. By the definition of restiction, we have $$ h \upharpoonright \mathbb Z = h \cap (\mathbb Z \times \mathbb Z) $$.
Thus $$ h \cap (\mathbb Z \times \mathbb Z) = \{(x,y) \in \mathbb R \times \mathbb Z \, \vert \, y = 2x+3 \} \cap  (\mathbb Z \times \mathbb Z) $$. Thus we 
have $$ h \cap (\mathbb Z \times \mathbb Z) = \{(x,y) \in \mathbb Z \times \mathbb Z \, \vert \, y = 2x+3 \} $$. Thus $$  h \upharpoonright \mathbb Z =  h \cap (\mathbb Z \times \mathbb Z) = g $$.
 
<hr/>

**Soln8**

To prove this we need to prove existence and uniqueness.

<u>Existence:</u>

Since $$ i_A $$ is reflexive, transitive and symmetric, it is a equivalence relation. Also since for each value $$ x $$ in $$ A $$ there is a unique value
$$ x $$ \in A such that $$ (x,x) \in i_A $$. Thus $$ i_A $$ is a function and a equivalence relation.

<u>Uniqueness:</u>

Suppose there exists a function say $$ f $$, such that it is a equivalence relation. Suppose $$ (x,y) \in f $$. Thus we have:

$$ (x,y) \in f $$. iff    
Since $$ f $$ is symmetric,     
$$ (x,y) \in f \land (y,x) \in f $$. iff    
Since $$ f $$ is transitive,    
$$ (x,x) \in f $$. iff        
Since $$ f $$ is a function and $$ (x,y) \in f $$ and $$ (x,x) \in f $$,   
$$ x = y $$

Since $$ (x,y) $$ are arbitrary, it follows that $$ f = i_A $$.

Thus $$ i_A $$ is the only unique function.

<hr/>

**Soln9**

**(a)**

To prove that $$ f \cup g $$ is a function from $$ A \cup B $$ to $$ C $$, we need to prove that for all $$ x \in A \cup B $$, there exist a image of $$ x $$ in
 $$ C $$. Also we need to prove that for each $$ x $$, this image is unique. Thus we need to do existence and uniqueness proof.
 
<u>Existence:</u>

Suppose $$ x \in A \cup B $$. Thus we have following cases:

- Case 1: $$ x \in A $$.    
Since $$ x \in A $$ and since $$ f $$ is a function on $$ A \to C $$. Thus there exist a $$ y \in C $$ such that $$ (x,y) \in f $$. Thus $$ (x,y) \in f \cup g $$. 
It follows that $$ \exists y \in B((y,x) \in f \cup g) $$. 
 
- Case 2: $$ x \in B $$.
Since $$ x \in B $$ and since $$ g $$ is a function on $$ B \to C $$. Thus there exist a $$ y \in C $$ such that $$ (x,y) \in g $$. Thus $$ (x,y) \in f \cup g $$. 
It follows that $$ \exists y \in B((y,x) \in f \cup g) $$. 

Thus from both cases $$ \exists y \in B((y,x) \in f \cup g) $$. Since $$ x $$ is arbitrary, it follows that $$ \forall x \in A \cup B \exists y \in C((y,x) \in f \cup g) $$.

<u>Uniqueness:</u>

Suppose $$ x \in A \cup B $$ and $$ y_1, y_2 \in C $$ such that $$ (x,y_1) \in f \cup g $$ and $$ (x,y_2) \in f \cup g $$. Thus we have following possible cases:
 
- Case 1: $$ (x,y_1) \in f $$ and $$ (x,y_2) \in f $$.    
Since $$ f $$ is a function, it follows that $$ y_1 = y_2 $$.

- Case 2: $$ (x,y_1) \in g $$ and $$ (x,y_2) \in g $$.    
Since $$ g $$ is a function, it follows that $$ y_1 = y_2 $$.

- Case 3: $$ (x,y_1) \in f $$ and $$ (x,y_2) \in g $$.    
Thus $$ x \in A $$ and $$ x \in B $$. But this is not possible since $$ A \cap B = \phi $$.

- Case 4: $$ (x,y_1) \in g $$ and $$ (x,y_2) \in f $$.    
Thus $$ x \in B $$ and $$ x \in A $$. But this is not possible since $$ A \cap B = \phi $$.

Thus from all possible cases, $$ y_1 = y_2 $$. Thus there is only one image of $$ x \in A \cup B$$ in the set $$ C $$. Thus $$ f \cup g : A \cup B \to C $$ is
  a function.
  
**(b)**

($$ \to $$)Suppose $$ f \cup g: A \cup B \to C $$. Suppose $$ (x,y) \in f \upharpoonright (A \cap B) $$. It follows that $$ (x,y) \in f $$ and $$ (x,y) \in (A \cap B) \times C $$.
Since $$ (x,y) \in f $$, it follows that $$ (x,y) \in f \cup g $$. Also since $$ x \in B $$, and $$ g: B \to C $$, there exist an element $$ y' $$ such that $$ (x,y') \in g $$.
Since $$ (x,y') \in g $$, it follows that $$ (x,y') \in f \cup g $$. Since $$ f \cup g: A \cup B \to C $$, it follows that $$ y = y' $$. Thus $$ (x,y) \in g $$. Since 
$$ (x,y) \in (A \cap B) \times C $$ and $$ (x,y) \in g $$, it follows that $$ (x,y) \in f \upharpoonright (A \cap B) $$. Since $$ (x,y) $$ are arbitrary,
it follows $$ f \upharpoonright (A \cap B) \subseteq g \upharpoonright (A \cap B) $$.    
Using similar argument it can be proved that  $$ g \upharpoonright (A \cap B) \subseteq f \upharpoonright (A \cap B) $$. Thus we can conclude that 
$$ f \upharpoonright (A \cap B) = g \upharpoonright (A \cap B) $$.

($$ \leftarrow $$)Suppose $$ f \upharpoonright (A \cap B) = g \upharpoonright (A \cap B) $$. To prove $$ f \cup g: A \cup B \to C $$, we need to do
existence and uniqueness proofs. Clearly in this case existence proof is exactly same as in part(a). Thus we shall only do the uniqueness proof:

Suppose $$ (x,y_1) \in f \cup g $$ and $$ (x,y_2) \in f \cup g $$. Thus we have following possible cases:

- Case 1: $$ (x,y_1) \in f $$ and $$ (x,y_2) \in f $$.    
Since $$ f $$ is a function, it follows that $$ y_1 = y_2 $$.

- Case 2: $$ (x,y_1) \in g $$ and $$ (x,y_2) \in g $$.    
Since $$ g $$ is a function, it follows that $$ y_1 = y_2 $$.

- Case 3: $$ (x,y_1) \in f $$ and $$ (x,y_2) \in g $$.    
Thus $$ x \in A \cap B $$. It follows that $$ (x,y_1) \in (A \cap B) \times C $$ and $$ (x,y_2) \in (A \cap B) \times C $$. Since $$ (x,y_1) \in f $$ and  
$$ (x,y_1) \in (A \cap B) \times C $$, it follows that $$ (x,y_1) \in f \upharpoonright (A \cap B) $$. Similarly since $$ (x,y_2) \in g $$ and  
$$ (x,y_2) \in (A \cap B) \times C $$, it follows that $$ (x,y_2) \in g \upharpoonright (A \cap B) $$. Since $$ f \upharpoonright (A \cap B) = g \upharpoonright (A \cap B) $$,
if follows that $$ (x,y_1) $$ and $$ (x,y_2) $$ both exist in $$ f $$ and $$ g $$. Thus $$ y_1 = y_2 $$.  

- Case 4: $$ (x,y_1) \in g $$ and $$ (x,y_2) \in f $$.    
This case is exactly same as Case 3, just need to swap $$ f $$ and $$ g $$ in the case 3.

Thus from all the possible cases $$ y_1 = y_2 $$.

Thus $$ f \cup g: A \cup B \to C $$.

<hr/>

**Soln10**

**(a)**

<u>Existence:</u>

Suppose $$ b \in B $$. Since $$ Dom(S) = B $$, there must exist $$ c \in C $$ such that $$ (b,c) \in S $$. Since $$ b $$ is arbitrary, it follows that
for all $$ b \in B $$ there exist an element $$ c \in C $$ such that $$ (b,c) \in S $$.

<u>Uniqueness:</u>

Suppose $$ b \in B $$ and $$ c_1, c_2 \in C $$ such that $$ (b,c_1) \in S $$ and $$ (b,c_2) \in S $$. Since $$ Ran(R) = B $$, it follows that there must
 exist an element $$ a \in A $$ such that $$ (a,b) \in R $$. Thus $$ (a,c_1) \in S \circ R $$ and $$ (a,c_2) \in S \circ R $$. But $$ S \circ R $$ is a function,
it follows that $$ c_1 = c_2 $$. 

Thus we can conclude that $$ S $$ is a function.

**(b)**

$$ A = \{1,2\} $$    
$$ B = \{a,b,c\} $$    
$$ C = \{u,v\} $$    

$$ R = \{ (1,a), (1,b), (2,c) \} $$.    
$$ S = \{ (a,u), (b,u), (c,v) \} $$.    
$$ S \circ R = \{ (1,u), (2,v) \} $$.    

Clearly, $$ S $$ and $$ S \circ R $$ are functions but $$ R $$ is not a function.

<hr/>

**Soln11**

**(a)**

Suppose $$ S $$ is reflexive. Suppose $$ x \in A $$ is an arbitrary element. Since $$ f: A \to B $$, thus $$ f(x) \in B $$. Since $$ S $$ is relation on $$ B $$
 and $$ S $$ is reflexive, it follows that $$ (f(x),f(x)) \in S $$. Thus $$ (x,x) \in R $$. Thus $$ R $$ is reflexive.
 
**(b)**

Suppose $$ S $$ is symmetric. Suppose $$ (x,y) \in R $$. Thus $$ (f(x), f(y)) \in S $$. Since $$ S $$ is symmetric, it follows that $$ (f(y),f(x)) \in S $$. Thus $$ (y,x) \in R $$.
Thus $$ R $$ symmetric.

**(c)**

Suppose $$ S $$ is transitive. Suppose $$ x,y,z \in A $$ such that $$ (x,y) \in R $$ and $$ (y,z) \in R $$. Thus $$ (f(x),f(y)) \in S $$ and $$ (f(y),(f(z))) \in S $$. Since
$$ S $$ is transitive, it follows that $$ (f(x),f(z)) \in S $$. Thus $$ (x,z) \in R $$. Thus $$ R $$ is transitive.

<hr/>

**Soln12**

**(a)** False.

Counter example: 

$$ A = \{1,2,3\}, B = \{a,b,c,d\}, f = \{(1,a),(2,b),(3,c)\}, R = \{(1,1), (2,2), (3,3), (4,4) \} $$.

Clearly $$ (d,d) \notin S $$, because there is no element $$ u $$ in $$ A $$ such that $$ f(x) = d $$.
 
**(b)** True.

Suppose $$ R $$ is symmetric. Suppose $$ (x,y) \in S $$. Thus there must exist some $$ u \in A $$ such that $$ f(u) = x $$ and there must exist some $$ v \in A $$
such that $$ f(v) = x $$ and $$ (u,v) \in R $$. Since $$ R $$ is symmetric, it follows that $$ (v,u) \in R $$. Since $$ y = f(v) $$ and $$ x = f(u) $$, it follows
that $$ (y,x) \in S $$. Thus $$ S $$ is symmetric.

**(c)** False.

$$ A = \{1.2.3.4\} $$.    
$$ B = \{u,v,w\} $$.    
$$ f = \{(1,u),(2,v),(3,v),(4,w)\} $$.    
$$ R = \{(1,2), (3,4) \} $$.    

Clearly $$ R $$ is transitive. Clearly $$ (u,v) \in S $$, because $$ (1,2) \in R $$. Similarly $$ (v,w) \in S $$, since $$ (3,4) \in R $$. But $$ (u,w) \notin S $$
 because $$ (1,4) \notin R $$.
 
<hr/>

**Soln13**

**(a)**

True. Suppose $$ R $$ is reflexive. Suppose $$ f \in \mathcal F $$. Suppose $$ x \in A $$. Since $$ f $$ is a function, $$ f(x) \in B $$ will be a unique value.
Since $$ f(x) \in B $$, and $$ R $$ is reflexive, it follows that $$ (f(x), f(x)) \in R $$. Since $$ x $$ is arbitrary, $$ \forall x \in A((f(x), f(x)) \in R) $$.
Thus $$ (f,f) \in S $$. Thus $$ S $$ is reflexive.

**(b)**

True. Suppose $$ R $$ is symmetric. Suppose $$ (f,g) \in \mathcal F $$. Thus $$ \forall x \in A((f(x), g(x)) \in R) $$. Since $$ R $$ is transitive, it follows that 
 $$ \forall x \in A((g(x), f(x)) \in R) $$. Thus $$ (g,f) \in S $$. Thus $$ R $$ is symmetric.
 
**(c)**

True. Suppose $$ R $$ is transitive. Suppose $$ (f,g) \in \mathcal F $$ and $$ (g,h) \in \mathcal F $$. Thus $$ \forall x \in A((f(x), g(x)) \in R) $$ and
Thus $$ \forall x \in A((g(x), h(x)) \in R) $$. Since $$ R $$ is transitive, it follows that $$ \forall x \in A((f(x), h(x)) \in R) $$. Thus $$ (f,h) \in S $$.
Thus $$ S $$ is transitive.

<hr/>

**Soln14**

**(a)**

Suppose $$ x \in A $$. Thus $$ f(x) = a $$. Also, $$ f \circ g (x) = f (g(x)) = a $$. Thus $$ f \circ g (x) = f(x) $$. Since $$ x $$ is arbitrary, it follows
 $$ f \circ g = f $$(using theorem for that talks about two functions are equals if for all values of $$ x $$, corresponding images are also equal).
 
**(b)**
 
Suppose $$ f \circ g = f $$. Since $$ g $$ is arbitrary, $$ g $$ can be any function. Suppose $$ g $$ is a constant function such that $$ \forall x \in A(g(x) = b) $$. 
Suppose $$ x \in A $$ is an arbitrary element. Thus $$ f \circ g (x) = f(g(x)) = f(b) $$. Since $$ f \circ g = f $$, it follows $$ f \circ g(x) = f(x) $$. It follows 
that $$ f(b) = f(x) $$. Since $$ f $$ is a function, $$ f(b) $$ is a unique value. Since $$ x $$ is arbitrary, it follows that $$ \forall x \in A(f(x) = f(b) $$. 
Thus $$ f(x) $$ is a constant function.
  
<hr/>

**Soln15**

**(a)**

Clearly for $$ a = 0 $$, we have $$ \vert x \vert = x $$. Thus $$ (f,g) \in R $$.
 
**(b)**

<u>Reflexive:</u>

Suppose $$ f \in \mathcal F $$. Suppose $$ a $$ is any real number, clearly $$ f(x) = f(x) $$ for all $$ x > a $$. Thus $$ (f,f) \in R $$. Thus $$ R $$ is reflexive.

<u>Transitive</u>

Suppose $$ (f,g) \in R $$ and $$ (g,h) \in R $$. Since $$ (f,g) \in R $$, it follows that there is an element $$ a \in R $$ such that $$ \forall x > a(f(x) = g(x)) $$. 
   Similarly since $$ (g,h) \in R $$, it follows that there is an element $$ b \in R $$ such that $$ \forall x > b (g(x) = h(x)) $$.
   
Now there are two cases, $$ a \ge b $$ or $$ b > a $$. If $$ a \ge b $$, then suppose $$ x > a $$ is any arbitrary number. Then $$ f(x) = g(x) $$ and $$ g(x) = h(x) $$.
Thus $$ f(x) = h(x) $$.    
Similarly if $$ b > a $$, and suppose $$ x > b $$ is any arbitrary number. Then also we have $$ f(x) = g(x) = h(x) $$.     
Thus in either case there exist a number $$ c $$ such that $$ \forall x > c (f(x) = h(x)) $$. Thus $$ R $$ is transitive.
  
<u>Symmetric:</u>

Suppose $$ (f,g) \in R $$. Thus there is an element $$ a \in R $$ such that $$ \forall x > a(f(x) = g(x)) $$. Or we can also say that $$ \forall x > a(g(x) = f(x)) $$. 
 It follows that $$ (g,f) \in R $$. Thus $$ R $$ is symmetric.
 
<hr/>

**Soln16**

**(a)**

Suppose $$ a = 3, c = 8 $$. Then for any $$ x > a $$,    

$$ \vert f(x) \vert = \vert 7x + 3 \vert = 7x + 3 < 7x + x = 8x < 8x^2 = c \vert g(x) \vert $$.

Thus $$ f \in O(g) $$.

We will prove it by contradiction. Suppose $$ g \in O(f) $$. Then for some $$ a \in Z^+ $$ and $$ c \in R^+ $$, we have $$ \forall x > a (\vert g(x) \vert\le c \vert f(x) \vert) $$.
Thus $$ \forall x > a (x^2 \le c (7x + 3) $$. Suppose $$ x > 10c $$ is an arbitrary number such that $$ x > a $$. Thus $$ x^2 > 10cx $$. Also, since
$$ g \in O(f) $$,we have $$ x^2 \le c(7x+3) < c(7x + 3x) = 10cx $$. Thus $$ x^2 < 10cx $$. But $$ x^2 > 10cx $$. Thus we have a contradiction. Thus
$$ f \notin O(g) $$.

**(b)**

If a relation is preorder, it means it is reflexive and transitive. Thus we will prove these two properties to prove the relation as preorder.

Suppose $$ f \in \mathcal F $$. Thus for $$ a = 1 $$ and $$ c = 1 $$, we have $$ \forall x > 1 (f(x) \le f(x) $$. Thus $$ (f,f) \in S $$. Thus $$ S $$ is reflexive.

Suppose $$ (f,g) \in S $$ and $$ (g,h) \in S $$. Thus there exist $$ a_1, c_1, a_2, c_2 $$ such that $$ \forall x > a_1 (\vert f(x) \vert \le c_1 \vert g(x) \vert) $$
and $$ \forall x > a_2 (\vert g(x) \vert \le c_2 \vert h(x) \vert) $$. Suppose $$ a $$ is the maximum of $$ a_1, a_2 $$. Suppose $$ x > a $$, it follows that
$$ \vert f(x) \vert \le c_1 \vert g(x) \vert \le c_1 c_2 \vert h(x) \vert $$. Since $$ x $$ is arbitrary, we have 
$$ \forall x > a (\vert f(x) \vert \le c \vert h(x) \vert) $$, where $$ c = c_1 c_2 $$. Thus $$ (f,h) \in S $$. Thus $$ S $$ is transitive.

To prove that $$ S $$ is not partial order, we shall prove that $$ S $$ is not antisymmetric. We will take a counter example to prove $$ S $$ is not symmetric.
Suppose $$ f(x) = x $$ and $$ g(x) = 2x $$. Then $$ \forall x > 0 (\vert f(x) \vert \le \vert g(x) \vert ) $$ and $$ \forall x > 0 (\vert g(x) \vert \le 2 \vert f(x) \vert ) $$.
Thus $$ (f,g) \in S $$ and $$ (g,f) \in S $$ but $$ f \ne g $$. Thus $$ S $$ is not antisymmetric.

**(c)**

Suppose $$ f_1 \in O(g) $$ and $$ f_2 \in O(g) $$. Thus there exist $$ a_1, c_1, a_2, c_2 $$ such that $$ \forall x > a_1 (\vert f_1(x) \vert \le c_1 \vert g(x) \vert) $$
and $$ \forall x > a_2 (\vert f_2(x) \vert \le c_2 \vert g(x) \vert) $$. Suppose $$ a $$ is maximum of $$ a_1, a_2 $$. Suppose $$ x > a $$ is any arbitrary number.
Thus we have $$ \vert f_1(x) \vert \le c_1 \vert g(x) \vert $$ and $$ \vert f_2(x) \vert \le c_2 \vert g(x) \vert $$.
Now $$ f(x) = sf_1(x) + tf_2(x) $$. Thus by triangular inequality, we have $$ \vert sf_1(x) + tf_2(x) \vert \le \vert s \vert \vert f_1(x) \vert + \vert t \vert \vert f_2(x) \vert $$.    
Since $$ \vert f_1(x) \vert \le c_1 \vert g(x) \vert $$ and $$ \vert f_2(x) \vert \le c_2 \vert g(x) \vert $$, it follows that 
$$ \vert sf_1(x) + tf_2(x) \vert \le \vert s \vert \vert f_1(x) \vert + \vert t \vert \vert f_2(x) \vert  \le \vert s \vert c_1 \vert g(x) \vert + \vert t \vert c_2 \vert g(x) \vert \le (c_1 \vert s \vert + c_2 \vert t \vert ) \vert g(x) \vert $$.
Thus $$ \vert f(x) \vert \le c \vert g(x) \vert $$, where $$ c = (c_1 \vert s \vert + c_2 \vert t \vert ) $$. Thus $$ f \in O(g) $$.

<hr/>

**Soln17**

**(a)** 

Suppose $$ x \in A $$. Since $$ g: A \to B $$, $$ g(x) = g(x) $$. Thus $$ (x,x) \in R $$. Thus $$ R $$ is reflexive.

Suppose $$ (x,y) \in R $$. Thus $$ g(x) = g(y) $$. Or we can also say $$ g(y) = g(x) $$. Thus $$ (y,x) \in R $$. Thus $$ R $$ is symmetric.

Suppose $$ (x,y) \in R $$ and $$ (y,z) \in R $$. Thus $$ g(x) = g(y) = g(z) $$. Since $$ g(x) = g(z) $$, it follows $$ (x,z) \in R $$. Thus $$ R $$ is transitive.
 
Since $$ R $$ is reflexive, symmetric and transitive, it follows that $$ R $$ is an equivalence relation.

**(b)**

Suppose $$ R $$ is an equivalence relation on $$ A $$. Suppose $$ g: A \to A/R $$ and $$ g(x) = [x]_R $$.

($$ \to $$)Suppose $$ (x,y) \in R $$. Since $$ R $$ is an equivalence relation, it follows that $$ [x]_R = [y]_R $$. Thus $$ g(x) = g(y) $$. Thus $$ R \subseteq \{(x,y) \in A \times A \, \vert \, g(x) = g(y) \} $$.

($$ \leftarrow $$)suppose $$ (x,y) \in \{(x,y) \in A \times A \, \vert \, g(x) = g(y) \} $$. Since $$ g(x) = [x]_R $$, it follows that $$ [x]_R = [y]_R $$. Thus $$ (x,y) \in R $$.
 Thus $$ \{(x,y) \in A \times A \, \vert \, g(x) = g(y) \} \subseteq R $$.
 
Thus from both directions, we have $$ R = \{(x,y) \in A \times A \, \vert \, g(x) = g(y) \} $$.

<hr/>

**Soln18**

**(a)**

Suppose $$ R $$ is compatible with $$ f $$.

Suppose $$ h = \{ (X,y) \in A/R \times B \, \vert \, \exists x \in X (f(x) = y) \} $$.

<u>Existence:</u>

Suppose $$ X \in A/R $$ and $$ y \in B $$ such that $$ (X,y) \in h $$. Thus there exist an $$ x $$ such that $$ x \in X $$ and $$ y = f(x) $$. Since $$ x \in X $$ and $$ X \in A/R $$, it
  follows that $$ X = [x]_R $$. Thus $$ ([x]_R,f(x)) \in h $$. Or $$ h([x]_R) = f(x) $$. Thus such a relation exists.

<u>Uniqueness:</u>

Suppose there is another relation $$ k $$. Suppose $$ (X,y) \in k $$ such that $$ X = [x]_R $$, $$ y = f(x) $$ and $$ h(X) = f(x) $$. Suppose $$ p \in [x]_R $$. Thus $$ pRx $$. Since $$ R $$ is compatible with $$ f $$, it 
 follows that $$ f(p) = f(x) $$. Thus there exists a $$ p $$ such that $$ p \in [x]_R $$ and $$ p = f(x) $$. It follows that $$ ([x]_p,f(x)) \in h $$(where h is the function we defined).
 Or $$ (X,y) \in h $$. Since $$ (X,y) $$ are arbitrary, it follows that $$ k = h $$.
 
Note: Not confident about the solution.

**(b)**

Suppose $$ x \in A $$ and $$ y \in A $$. Suppose $$ xRy $$. Since $$ x \in A $$, $$ h([x]_R) = f(x) $$. Similarly, since $$ y \in A $$, $$ h([y]_R) = f(y) $$.
Since $$ xRy $$, it follows that $$ [x]_R = [y]_R $$. Since $$ f $$ is a function, it follows $$ h([x]_R) = h([y]_R) $$. Thus $$ f(x) = f(y) $$. Thus if $$ xRy $$, then
$$ f(x) = f(y) $$. Since $$ x,y $$ are arbitrary, it follows that $$ \forall x \in A \forall y \in A(xRy \to f(x) = f(y)) $$. Thus $$ R $$ is compatible with $$ f $$.

<hr/>

**Soln19**

**(a)**

Suppose $$ xRy $$, then $$ x - y = 5k $$. Thus $$ x = y + 5k $$. Thus $$ x^2 = y^2 + 10yk + 25k^2 $$, or $$ x^2 - y^2 = 5k(2y + 5k) $$. Thus $$ (x^2,y^2) \in R $$.
Or we can also say that if $$ xRy $$ then $$ x^2Ry^2 $$.   

Now consider the function $$ h = \{ (X,Y) \in Z/R \times Z/R \, \vert \, \exists x \in X \exists y \in Y(y = x^2) \} $$.
  
Now we will prove that $$ h $$ is the unique function to satisfy $$ h([x]_R) = [x^2]_R $$.
 
<u>Existence:</u>

Suppose $$ (X,Y) \in h $$. Thus there exists an element $$ x \in X $$ and $$ y \in Y $$ such that $$ y = x^2 $$. Since $$ R $$ is an equivalence relation,
it follows that $$ X = [x]_R $$ and $$ Y = [y]_R = [x^2]_R $$. Thus $$ ([x]_R,[x^2]_R) \in h $$, or $$ h([x]_R) = [x^2]_R $$.

<u>Uniqueness:</u>

Suppose $$ k: Z/R \to Z/R $$ is a function such that $$ k([x]_R) = [x^2]_R $$. Suppose $$ p \in [x]_R $$. Thus $$ pRx $$. We proved above that if $$ pRx $$ then
$$ p^2Rx^2 $$. Thus $$ [x^2]_R = [p^2]_R $$. It is also clear that $$ p^2 \in [p^2]_R $$, or $$ p^2 \in [x^2]_R $$. Thus there exist a $$ p \in [x]_R $$ such 
$$ p^2 \in [x^2]_R $$. Thus $$ ([x]_R,[x^2]_R) \in h $$. Since $$ ([x]_R,[x^2]_R) $$ is arbitrary, it follows that $$ k = h $$. 

**(b)**
 
Here it will be enough to show just one counter example. Suppose $$ x = 0, y = 5 $$. Clearly $$ (x,y) \in R $$. If $$ h: Z/R \to Z/R $$ is a function, it follows that,
$$ h([o]_R) = h([5]_R $$. Now $$ h([0]_R) = [2^0]_R = [1]_R $$ and $$ h([5]_R) = [2^5]_R = [32]_R $$. Thus $$ [1]_R = [32]_R $$. But this is not correct
because $$ 32 - 1 \ne 5k $$. Thus $$ h $$ is not a function.


 