---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.13"
order: "013"
date: 2016-03-31
---

We will prove this by strong induction.

Suppose $$ n $$ is arbitrary integer greater than zero. Suppose theorem is correct for all integers $$ k \ge 0 $$ and $$ k < n $$.
We have the following possible cases:


- Case $$ n = 0 $$:
  We have $$ \frac { {\phi}^n - {\psi}^n } {\sqrt 5} =  \frac { {\phi}^0 - {\psi}^0 } {\sqrt 5} = \frac { 1 - 1 } {\sqrt 5} = 0 = fib(0) $$.
Clearly theorem is correct for $$ n = 0 $$.

- Case $$ n = 1 $$:
  For $$ n = 1 $$, we have $$ \frac { {\phi}^n - {\psi}^n } {\sqrt 5} =  \frac { {\phi}^1 - {\psi}^1 } {\sqrt 5} = \frac { (1 + \sqrt 5) - (1 - \sqrt 5) } {2 \sqrt 5} = \frac {\sqrt 5} {2 \sqrt 5} = 1 = fib(1) $$.
Clearly theorem is correct for $$ n = 1 $$.

- Case $$ n \ge 2 $$:
  Since theorem is correct for all $$ k < n $$ where $$ k \ge 0 $$, we have:       
  $$ fib(n-2) = \frac { {\phi}^{n-2} - {\psi}^{n-2} } {\sqrt 5} $$.      
  $$ fib(n-1) = \frac { {\phi}^{n-1} - {\psi}^{n-1} } {\sqrt 5} $$.      
  Now consider $$ fib(n-1) + fib(n-2) $$:        
  $$ = { \frac { {\phi}^{n-2} - {\psi}^{n-2} } {\sqrt 5} } + { \frac { {\phi}^{n-1} - {\psi}^{n-1} } {\sqrt 5} } $$.     
  $$ = { \frac 1 {\sqrt 5} } ( ({\phi}^{n-2} + {\phi}^{n-1}) - ({\psi}^{n-2} + {\psi}^{n-1}) )$$.      
  $$ = { \frac 1 {\sqrt 5} } ( {\phi}^{n-2} \cdot ( 1 + \phi ) - {\psi}^{n-2} \cdot ( 1 + \psi ) )$$.      
  We know that $$ 1 + \phi = {\phi}^2 $$ and $$ 1 + \psi = {\psi}^2 $$:      
  Thus we get:
  $$ = {\frac 1 {\sqrt 5} } ( {\phi}^{n-2} \cdot {\phi}^2 - {\psi}^{n-2} \cdot {\psi}^2 )$$.    
  $$ = {\frac 1 {\sqrt 5} } ( {\phi}^{n} - {\psi}^{n} )$$.      
  $$ = \frac { {\phi}^n - {\psi}^n } {\sqrt 5} $$.      
  $$ = fib(n) $$        
  
  Thus theorem is correct for $$ n \ge 2 $$.
  
Thus for all the cases we can conclude that theorem is correct for all $$ n $$.
  
  


