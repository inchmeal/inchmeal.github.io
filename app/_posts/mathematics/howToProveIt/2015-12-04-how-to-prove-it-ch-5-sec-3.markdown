---
layout: blog
title:  "How To Prove It, Ch-5 Sec-5.3, Inverses of Functions"
tags: mathematics howToProveIt
---
This post contains solutions of Chapter - 5, Section - 5.3, Inverses of Functions.

<!--more-->

<hr/>

### Summary

- Suppose $$ f : A \to B $$. If $$ f $$ is one-to-one and onto, then $$ f^{-1}: B \to A $$.
- Suppose $$ f $$ is a function from $$ A $$ to $$ B $$, and suppose that $$ f^{−1} $$ is a function from $$ B $$ to $$ A $$. 
Then $$ f^{−1} \circ f = i_A $$ and $$ f \circ f^{−1} = i_B $$.
- Suppose $$ f : A \to B $$. Then,
  - If there is a function $$ g : B \to A $$ such that $$ g \circ f = i_A $$ then $$ f $$ is one-to-one.
  - If there is a function $$ g : B \to A $$ such that $$ f \circ g = i_B $$ then $$ f $$ is onto.
- Suppose $$ f : A \to B $$. Then the following statements are equivalent.
  - $$ f $$ is one-to-one and onto.
  - $$ f^{−1}: B \to A $$.
  - There is a function $$ g : B \to A $$ such that $$ g \circ f = i_A $$ and $$ f \circ g = i_B $$.
- Suppose $$ f: A \to B $$, $$ g: B \to A $$, $$ g \circ f = i_A $$, and $$ f \circ g = i_B $$. Then $$ g = f^{−1} $$.

<hr/>

**Soln1**

Required function $$ f^{-1} = \{(p,q) \in P \times P \, \vert \, \text{the person } p \text{ is sitting immediately to the left of the person q} \} $$. 

<hr/>

**Soln2**

Required function $$ F^{-1}(X) = A/X $$.

<hr/>

**Soln3**

Suppose $$ g(x) = \frac {3x-5} 2 $$. Thus we have:     
$$ \Rightarrow g \circ f (x) = g(f(x)) = \frac {3 \times {\frac {2x+5} 3 } - 5} 2 $$.    
$$ \Rightarrow  g \circ f (x) = \frac {2x+5 - 5} 2 $$.    
$$ \Rightarrow  g \circ f (x) = \frac {2x} 2 $$.    
$$ \Rightarrow  g \circ f (x) = x $$.    

Thus we have $$ g \circ f = i_{\mathbb R} $$.

Also, we have $$ f \circ g(x) = \frac {2 \times {\frac {3x - 5} 2} + 5} 3 $$.    
$$ \Rightarrow f \circ g(x) = \frac {3x - 5 + 5} 3 $$.    
$$ \Rightarrow f \circ g(x) = \frac {3x} 3 $$.    
$$ \Rightarrow f \circ g(x) = x $$.    

Thus we have $$ f \circ g = i_{\mathbb R} $$.

Since $$ f \circ g = i_{\mathbb R} $$ and $$ g \circ f = i_{\mathbb R} $$, it follows that $$ f $$ is one-to-one and onto and $$ g = f^{-1} $$.

<hr/>

**Soln4**

Suppose $$ g(x) = {\frac {x+3} 2}^{\frac 1 3} $$. Clearly $$ g(x) $$ is defined for all values of $$ x \in \mathbb R $$(cube root of negative number
is defined). Thus $$ g: \mathbb R \to \mathbb R $$.

Now, $$ g \circ f(x) = {(\frac {(2x^3 - 3) +3} 2)}^{\frac 1 3} $$.    
$$ \Rightarrow g \circ f(x) = {(\frac {2x^3} 2)}^{\frac 1 3} $$.    
$$ \Rightarrow g \circ f(x) = {(x^3)}^{\frac 1 3} $$.    
$$ \Rightarrow g \circ f(x) = x $$.    

Thus we have $$ g \circ f = i_{\mathbb R} $$.

Also, $$ f \circ g(x) = 2({(\frac {x + 3} 2)^{\frac 1 3}})^3 - 3 $$.        
$$ \Rightarrow f \circ g(x) = 2{\frac {x + 3} 2} - 3 $$.        
$$ \Rightarrow f \circ g(x) = x + 3 - 3 $$.        
$$ \Rightarrow f \circ g(x) = x $$.        

Thus we have $$ f \circ g = i_{\mathbb R} $$.

Since $$ f \circ g = i_{\mathbb R} $$ and $$ g \circ f = i_{\mathbb R} $$, it follows that $$ f $$ is one-to-one and onto and $$ g = f^{-1} $$.

<hr/>

**Soln5**

Suppose $$ g(x) = 2 - \log x $$. Clearly $$ g: R^+ \to R $$.

We have $$ g \circ f(x) = 2 - \log 10^{2-x} = 2 - (2 - x) = x $$. Thus $$ g \circ f = i_{\mathbb R} $$.

Also, we have $$ f \circ g(x) = 10^{2 - (2 - \log x)} = 10^{\log x} = x $$. Thus $$ f \circ g = i_{\mathbb R^+} $$.

Since $$ f \circ g = i_{\mathbb R^+} $$ and $$ g \circ f = i_{\mathbb R} $$, it follows that $$ f $$ is one-to-one and onto and $$ g = f^{-1} $$.

<hr/>

**Soln6**

Suppose $$ g(x) = \frac {2x} {x - 3} $$ is a function from $$ B = \mathbb R \setminus \{ 3 \} $$ to $$ \mathbb R $$. Clearly $$ g(x) \ne 2 $$ for any value of
$$ x $$. Thus we can say that $$ g: B \to A $$, where $$ B = \mathbb R \setminus \{ 3 \} $$ and $$ A = \mathbb R \setminus \{ 2 \} $$.

Now, $$ g \circ f(x) = \frac {2{\frac {3x} {x-2} } } { { \frac {3x} {x-2} } - 3 } $$.    
$$ \Rightarrow g \circ f(x) = \frac {\frac {6x} {x-2} } { { \frac {3x - 3(x-2)} {x-2} } } $$.      
$$ \Rightarrow g \circ f(x) = \frac {\frac {6x} {x-2} } { { \frac {6} {x-2} } } $$.      
$$ \Rightarrow g \circ f(x) = \frac {6x} 6 $$.      
$$ \Rightarrow g \circ f(x) = x $$.      

Thus we have $$ g \circ f = i_A $$.

Similarly it can be shown that, $$ f \circ g(x) = i_B $$.  

Since $$ f \circ g = i_B $$ and $$ g \circ f = i_A $$, it follows that $$ f $$ is one-to-one and onto and $$ g = f^{-1} $$.

Thus **(a)** and **(b)** both are solved.

<hr/>

**Soln7**

**(a)**

To prove $$ f = f_2 \circ f_1 $$, we need to prove that $$ \forall x \in \mathbb R (f(x) = f_2 \circ f_1 (x)) $$. Suppose $$ x \in \mathbb R $$. Thus
$$ f_2 \circ f_1(x) = f_2 (f_1(x)) = \frac {f_1(x)} 5 = \frac {x+7} 5 = f(x) $$. Since $$ x $$ is arbitrary, $$ f = f_2 \circ f_1 $$.
 
**(b)**

Clearly $$ {f_1}^{-1}(x) = x - 7 $$ and $$ {f_2}^{-1}(x) = 5x $$. Thus $$ {f_1}^{-1} \circ {f_2}^{-1}(x) = {f_2}^{-1}(x) - 7 = 5x - 7 = f^{-1}(x) $$.

<hr/>

**Soln8**

**(a)**

Suppose $$ b $$ is an arbitrary element of $$ B $$. Let $$ a = f^{-1}(b) \in A $$. Then $$ (b,a) \in f^{-1} $$, so $$ (a, b) \in f $$ and therefore $$ f(a) = b $$.     
Thus, $$ (f \circ f^{-1})(b) = f( f^{-1} (b)) = f(a) = b = i_B(b) $$.         
Since $$ b $$ was arbitrary, we have shown that $$ \forall b \in B(( f^{−1} \circ f)(b) = i_B(b)) $$, so $$ f \circ f^{−1} = i_B $$.

**(b)**

Suppose $$ g = f^{-1} $$. Since $$ f = (f^{-1})^{-1} $$, it follows $$ f \circ f^{-1} = (f^{-1})^{-1} \circ f^{-1} = g^{-1} \circ g $$. Since $$ g = f^{-1} $$, $$ g: B \to A $$. 
Thus $$ g^{-1} \circ g = i_B $$(using the first half of the proof as required in the solution). It follows $$ f \circ f^{-1} = i_B $$.
   
<hr/>

**Soln9**

Suppose $$ f: A \to B $$. Suppose $$ g: B \to A $$ such that $$ f \circ g = i_B $$. Suppose $$ b \in B $$. Thus $$ (b,b) \in i_B $$. It follows that
$$ (b,b) \in f \circ g $$. Thus There exist an element $$ a \in A $$ such that $$ (b,a) \in g $$ and $$ (a,b) \in f $$. Thus there exist an element $$ a \in A $$
such that $$ f(a) = b $$. Since $$ b $$ is arbitrary, it follows that $$ \forall b \in B \exists a \in A ( f(a) = b ) $$. Thus $$ f $$ is onto.

<hr/>

**Soln10**

($$ \to $$)Suppose $$ (b,a) \in B \times A $$ is an arbitrary pair in $$ g $$. Since $$ b \in B $$, it follows $$ (b,b) \in i_B $$. Since $$ f \circ g = i_B $$, it follows
  $$ (b,b) \in f \circ g $$. Thus for some element $$ a' \in A $$, $$ (b,a') \in g $$ and $$ (a',b) \in f $$. Since $$ g $$ is a function and $$ (b,a) \in g $$, it follows
  $$ a = a' $$. Thus $$ (a,b) \in f $$. It follows $$ (b,a) \in f^{-1} $$. Thus $$ g \subseteq f^{-1} $$.
  
($$ \leftarrow $$) Suppose $$ (b,a) \in B \times A $$ is an arbitrary pair in $$ f^{-1} $$. Thus $$ (a,b) \in f $$ and $$ (a,a) \in i_A $$. Since $$ g \circ f = i_A $$, it follows
  $$ (a,a) \in g \circ f $$. Thus for some element $$ b' \in B $$, $$ (a,b') \in f $$ and $$ (b',a) \in g $$. Since $$ f $$ is a function and $$ (a,b) \in f $$, it follows
  $$ b = b' $$. Thus $$ (b,a) \in g $$. Thus $$ f^{-1} \subseteq g $$.
  
Since $$ f^{-1} \subseteq g $$ and $$ g \subseteq f^{-1} $$, it follows that $$ g = f^{-1} $$.

<hr/>

**Soln11**

**(a)**

Since $$ f: A \to B $$ and $$ g: B \to A $$ and $$ f \circ g = i_B $$, it follows that $$ f $$ is onto by the theorem(3.1 in above summary). It is given that
$$ f $$ is one-to-one. Thus $$ f $$ is one-to-one and onto. Thus $$ f^{-1} \circ f = i_A $$.

Thus, $$ g = i_A \circ g = (f^{-1} \circ f) \circ g = f^{-1} \circ (f \circ g) = f^{-1} \circ i_B = f^{-1} $$.    

**(b)**
  
Since $$ f: A \to B $$ and $$ g: B \to A $$ and $$ g \circ f = i_A $$, it follows that $$ f $$ is one-to-one by the theorem(3.2 in above summary). It is given that
$$ f $$ is onto. Thus $$ f $$ is one-to-one and onto. Thus $$ f \circ f^{-1} = i_B $$.

Thus, $$ g = g \circ i_B = g \circ (f \circ f^{-1})= (g \circ f) \circ f^{-1} = i_A \circ f^{-1} = f^{-1} $$. 
   
**(c)**

Since $$ f: A \to B $$ and $$ g: B \to A $$ and $$ f \circ g = i_B $$, it follows from theorem(3rd theorem form above summary) that $$ f $$ is onto and $$ g $$ is one-to-one.

Proof for $$ g $$ is not onto:

Suppose $$ g $$ is onto. Thus $$ g $$ is one-to-one and onto. Thus by theorem, $$ g^{-1} = f $$. Applying $$ g $$ on both sides, $$ g \circ g^{-1} = g \circ f $$.
Since $$ g $$ is one-to-one and onto, $$ g \circ g^{-1} = i_A $$. Thus $$ g \circ f = i_A $$. But it contradicts with the given that $$ g \circ f \ne i_A $$. Thus we can
 conclude that $$ g $$ is not onto.
 
Proof for $$ f $$ is not one-to-one:

Suppose $$ f $$ is one-to-one. Thus $$ f $$ is one-to-one and onto. Thus by theorem, $$ f^{-1} = g $$. Thus $$ f^{-1} \circ f = g \circ f  $$.
Since $$ f $$ is one-to-one and onto, $$ f^{-1} \circ f = i_A $$. Thus $$ g \circ f = i_A $$. But it contradicts with the given that $$ g \circ f \ne i_A $$. Thus we can
 conclude that $$ f $$ is not one-to-one.
 
<hr/>

**Soln12**

Suppose $$ f: A \to B $$ is one-to-one. Suppose $$ B' = Ran(f) $$. Clearly $$ B' \subseteq B $$. Now we shall prove $$ f^{-1}: B' \to A $$. Thus we shall do it
by proving existence and uniqueness:

*Existence:*

Suppose $$ b \in B' $$. Thus $$ b \in Ran(f) $$. It follows that there exists $$ a \in A $$ such that $$ (a,b) \in f $$. Thus $$ (b,a) \in f^{-1} $$.
Thus there exist $$ a \in A $$ such that $$ (b,a) \in f^{-1} $$. Since $$ b $$ is arbitrary, it follows $$ \forall b \in B' \exists a \in A ((b,a) \in f^{-1}) $$.
 
*Uniqueness:*

Suppose $$ b \in B' $$. Suppose $$ (b,a_1) \in f^{-1}, (b,a_2) \in f^{-1} $$. Thus $$ (a_1,b) \in f $$ and $$ (a_2,b) \in f $$. Since $$ f $$ is one-to-one, it follows
  $$ a_1 = a_2 $$. Thus there exists a unique element $$ a \in A $$ such that $$ (b,a) \in f^{-1} $$. 
  
Thus $$ f^{-1}: B' \to A $$.

<hr/>

**Soln13**

**(a)**

We have $$ R = \{ (x,y) \in A \times A \, \vert \, f(x) = f(y) \} $$. It follows that $$ \forall x \in A \forall y \in A (xRy \leftrightarrow f(x) = f(y)) $$. Clearly we 
have $$ f $$ is compatible with $$ R $$, since $$ \forall x \in A \forall y \in A(xRy \to f(x) = f(y)) $$. Thus it follows directly from
Ex18 from sec-5.1, that $$ h = \{ (X,y) \in A/R \times B \, \vert \, \exists x \in X (f(x) = y) \} $$ is a function such that $$ h([x]_R) = f(x) $$.

**(b)**

Since $$ \forall x \in A \forall y \in A (xRy \leftrightarrow f(x) = f(y)) $$, it follows from ex16 from sec5.2 that $$ h $$ is one-to-one.

Proof for $$ h $$ is onto. Suppose $$ b \in B $$. Since $$ f $$ is onto, it follows that there exists an $$ a \in A $$ such that $$ f(a) = b $$. Since 
$$ a \in A $$ and $$ R $$ is an equivalence relation, it follows $$ [a]_R \in A/R $$. Thus $$ h([a]_R) = f(a) = b $$. Since $$ b $$ is arbitrary, it follows that
for every $$ b \in B $$, there exists an element $$ [a]_R \in A/R $$. Thus $$ h $$ is onto.

**(c)**

Since $$ h: A/R \to B $$ is one-to-one and onto, it follows that $$ h^{-1}: B \to A/R $$ exists. Suppose $$ (b,X) \in h^{-1} $$. Thus $$ (X,b) \in h $$.
  It follows there exist $$ x \in A $$ such that $$ [x]_R = X $$ and $$ b = f(x) $$. Thus $$ ([x]_R,b) \in h $$. Suppose $$ y \in [x]_R $$. Thus $$ yRx $$, 
  or $$ f(y) = f(x) $$. Since $$ f(x) = b $$, it follows $$ f(y) = b $$. Thus $$ \forall y \in [x]_R (f(y) = b) $$. Since $$ X = [x]_R $$, it follows
  $$ \forall y \in X (f(y) = b) $$. Since $$ (b,X) \in h^{-1} $$, it follows $$ h^{-1}(b) = \{ y \in A \, \vert \, f(y) = b \} $$.

**(d)**
  
It seems like there is a little typo in the question, instead of $$ \forall b \in B(g(b) \in h(b)) $$, it seems it actually should be
$$ \forall b \in B(g(b) \in h^{-1}(b)) $$.

Suppose $$ g: B \to A $$.
 
($$ \to $$) Suppose $$ f \circ g = i_B $$. Suppose $$ b \in B $$. Thus there must exist an element $$ a \in A $$ such that $$ (b,a) \in g $$, or $$ g(b) = a $$.
Thus $$ f(g(b)) = f(a) $$, which is equivalent to $$ f \circ g(b) = f(a) $$. Since $$ f \circ g = i_B $$, it follows $$ b = f(a) $$, or $$ f(a) = b $$. Thus
 from part(c) of this solution it follows that $$ a \in h^{-1}(b) $$. Since $$ a = g(b) $$, it follows $$ g(b) \in h^{-1}(b) $$. Since $$ b $$ is arbitrary, it 
 follows $$ \forall b \in B (g(b) \in h^{-1}(b)) $$.
  
($$ \leftarrow $$) Suppose $$ \forall b \in B (g(b) \in h^{-1}(b)) $$. Suppose $$ b \in B $$ is an arbitrary element. Thus there must exist an element $$ a \in A $$ such 
that $$ (b,a) \in g $$, or $$ g(b) = a $$. Thus $$ a \in h^{-1}(b) $$. By part(c) it follows that $$ f(a) = b $$. Since $$ a = g(b) $$, it follows $$ f(g(b)) = b $$.
 Thus $$ f \circ g(b) = b $$. Since $$ b $$ is arbitrary, it follows that $$ f \circ g = i_B $$.

<hr/>

**Soln14**

**(a)**

Suppose $$ x \in A' $$. Thus $$ x \in Ran(g) $$. It follows that there exist an element $$ b \in B $$ such that $$ g(b) = x $$. Thus we have 
$$ g \circ f(x) = g(f(x)) = g(f(g(b))) = g(f \circ g(b)) = g(i_B(b)) = g(b) = x $$. Since $$ x $$ is arbitrary, it follows that $$ g \circ f(x) = x $$ for
 all $$ x \in A' $$.
 
**(b)**

We know from Sec5.1 Ex-7, $$ f \upharpoonright A' = f $$. Since $$ f \circ g = i_B $$, it follows $$ (f \upharpoonright A') \circ g = i_B $$. Also from
 part(a) of this solution we have $$ g \circ (f \upharpoonright A') = i_{A'} $$. Thus $$ f \upharpoonright A' $$ is one-to-one and onto and $$ (f \upharpoonright A')^{-1} = g $$.
 
<hr/>

**Soln15**

Suppose $$ A' = Ran(g) $$. Thus clearly $$ A' = B $$. Now with $$ A' = Ran(g) $$, it follows from Soln14(b) that $$ (f \upharpoonright A')^{-1} = g $$. Since $$ A' = B $$, it follows $$ (f \upharpoonright B)^{-1} = g $$.

<hr/>

**Soln16**

**(a)**

We have $$ f(x) = 4x - x^2 $$. Suppose $$ y = f(x) $$. Thus we have $$ 4x - x^2 = y $$. Thus $$ x^2 -4x +y = 0 $$. It is a quadratic equation, thus we have
$$ x = 2 \pm \sqrt {4-y} $$. Clearly $$ y \le 4 $$. Thus $$ B = \{ y \in \mathbb R \, \vert \, y \le 4 \} $$.

**(b)**

Suppose $$ g: B \to A $$ such that $$ g(x) = 2 + \sqrt {4-x} $$ where $$ B = \{ x \in \mathbb R \, \vert \, x \le 4 \} $$ and $$ A = \{x \in \mathbb R \, \vert \, x \ge 2 \} $$. 
Thus we have $$ g \circ f(x) = g(f(x)) = 2 + \sqrt {4-f(x)} = 2 + \sqrt {4 - (4x - x^2)} = 2 + \sqrt {4 - 4x + x^2)} = 2 + \sqrt {(x-2)^2} = 2 + x - 2 = x $$.
Thus $$ g \circ f(x) = i_B $$.     
Similarly $$ (f \upharpoonright A) \circ g(x) = 4g(x) - (g(x))^2 = g(x)(4 - g(x)) $$. Thus $$ (f \upharpoonright A) \circ g(x) = (2 + \sqrt {4-x})(4 - 2 - \sqrt {4-x})) = (2 + \sqrt {4-x})(2 - \sqrt {4-x}) = 2^2 - (\sqrt {4-x})^2 = x $$.
Thus $$ (f \upharpoonright A) \circ g(x) = i_A $$. Now from Soln14(b) we have $$ (f \upharpoonright A)^{-1} = g $$.
 
<hr/>

**Soln17**

We shall prove $$ f = g^{-1} $$ by proving that $$ f \circ g = i_{\mathcal S} $$ and $$ g \circ f = i_{\mathcal P} $$, where $$ \mathcal P $$ is set of
all partial orders and $$ \mathcal S $$ is set of all strict partial order.

Proof of $$ f \circ g = i_{\mathcal S} $$:

Suppose $$ R \in \mathcal S $$. Thus $$ R $$ is strict partial order. Thus $$ R $$ and $$ i_{\mathcal A} $$ are disjoint. It follows $$ f \circ g(R) = f(g(R)) = (R \cup i_A) \setminus i_A = R \setminus i_A $$.
Since $$ R $$ and $$ i_A $$ are disjoint, it follows $$ f \circ g (R) = R \setminus i_A = R $$. Thus $$ f \circ g = i_{\mathcal S} $$.

Proof of $$ g \circ f = i_{\mathcal P} $$:

Suppose $$ R \in \mathcal P $$. Thus $$ R $$ is partial order. Thus $$ i_{\mathcal A} \subseteq R $$. It follows $$ g \circ f(R) = g(f(R)) = (R \setminus i_A) \cup i_A = R \cup i_A $$.
Since $$ i_A \subseteq R $$, it follows $$ g \circ f (R) = R \cup i_A = R $$. Thus $$ g \circ f = i_{\mathcal P} $$.

Thus $$ f $$ is one-to-one and onto and $$ g = f^{-1} $$.

<hr/>

**Soln18**

**(a)**

To prove $$ R $$ is an equivalence relation, we need to prove that $$ R $$ is reflexive, symmetric and transitive.

<u>Reflexive:</u>

Suppose $$ f \in \mathcal F $$. Suppose $$ h = i_A $$. Thus $$ f = i_A \circ f \i_A $$, or $$ f = (i_A)^{-1} \circ f \circ i_A $$. It follows $$ fRf $$. Thus $$ R $$ is reflexive.
 
<u>Symmetric:</u>

Suppose $$ f,g \in \mathcal F $$ such that $$ fRg $$. Thus there exist an $$ h \in \mathcal P $$ such that $$ f = h^{-1} \circ g \circ h $$. It follows
$$ h \circ f = g \circ h $$(by applying h on both sides). Similarly taking value corresponding to $$ h^{-1} $$  on both sides, $$ h \circ f \circ h^{-1} = g \circ h \circ h^{-1} = g $$.
 Thus $$ gRf $$. Thus $$ R $$ is symmetric.
 
<u>Transitive:</u>
 
Suppose $$ f,g,h \in \mathcal F $$ such that $$ fRg $$ and $$ gRh $$. Thus for some $$ h_1, h_2 \in \mathcal P $$, we have $$ f = h_1^{-1} \circ g \circ h_1 $$ and $$ g = h_2^{-1} \circ h \circ h_2 $$.
Thus we have $$ f = h_1^{-1} \circ (h_2^{-1} \circ h \circ h_2) \circ h_1 = (h_1^{-1} \circ h_2^{-1}) \circ h \circ (h_2 \circ h_1) = (h_2 \circ h_1)^{-1} \circ h \circ (h_2 \circ h_1) $$. Thus $$ fRh $$.
It follows $$ R $$ is transitive.

Thus $$ R $$ is an equivalence relation.

**(b)**

Suppose $$ fRg $$. Thus there exist an $$ h \in \mathcal P $$ such that $$ f = h^{-1} \circ g \circ h $$. Thus we have $$ f \circ f = (h^{-1} \circ g \circ h) \circ (h^{-1} \circ g \circ h) $$.
Thus $$ f \circ f = h^{-1} \circ g \circ (h \circ h^{-1}) \circ g \circ h =  h^{-1} \circ g \circ i_A \circ g \circ h = h^{-1} \circ g \circ g \circ h $$. Thus $$ f \circ fRg \circ g $$.

**(c)**

Suppose $$ f(a) = a $$ and $$ fRg $$. Thus there exist an $$ h \in \mathcal P $$ such that $$ f = h^{-1} \circ g \circ h $$. Thus $$ f(a) = a = h^{-1} \circ g \circ h(a) $$. Applying $$ h $$ on both sides,
$$ h(a) = g \circ h(a) $$. Thus $$ g(h(a)) = h(a) $$. Thus $$ g $$ also has a fixed point = $$ h(a) $$.

<hr/>













                             
