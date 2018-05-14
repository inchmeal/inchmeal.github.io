---
chapterName: "Survey Sampling"
chapter: 7
solution: "1"
order: "001"
date: 2017-09-11
---

Population mean:

$$ \mu = \frac 1 N \sum_{i=1}^{i=N} x_i = \frac {1 + 2 + 2 + 4 + 8} 5 = 3.4 $$

Population varaince:

$$ {\sigma}^2 = \frac 1 N \sum_{i=1}^{i=N} {(x_i - \mu)}^2 $$        
$$ \quad = \frac { {(1-3.4)}^2 + {(2-3.4)}^2 + {(2-3.4)}^2 + {(4-3.4)}^2 + {(8-3.4)}^2 } 5 $$      
$$ \quad = \frac {31.2} 5 = 6.24 $$


Samples of size 2:

$$ (1,2), (1,2), (1,4), (1,8), (2,2), (2,4), (2,8), (2,4), (2,8), (4,8) $$
 
Note that every sample containing $$ 2 $$ appears twice except for $$ (2,2) $$. Since in a sample order does not
matter and both $$ 2 $$'s are taken from the population, so there is only one possible sample for $$ (2,2) $$.

Thus we have total $$ { 5 \choose 2 } = 10 $$ samples. The probability of occurance of a sample is the fraction of times it appears in the total(10) samples. For eg: Prob. of choosing sample $$ (1,2) $$ is $$ \frac 2 {10} $$.  

Sampling Distribution of the mean of samples of size 2:

|---
| Sample | Mean( $$ {\mu}_i = {\bar X} $$ ) | Probability( $$ p_i $$ )  
|:-:|:-:|:-:|:-:
| $$ (1,2) $$ | $$ \frac {1+2} 2 = 1.5 $$ | $$ \frac 2 {10} $$
| $$ (1,4) $$ | $$ \frac {1+4} 2 = 2.5 $$ | $$ \frac 1 {10} $$
| $$ (1,8) $$ | $$ \frac {1+8} 2 = 4.5 $$ | $$ \frac 1 {10} $$
| $$ (2,2) $$ | $$ \frac {2+2} 2 = 2.0 $$ | $$ \frac 1 {10} $$
| $$ (2,4) $$ | $$ \frac {2+4} 2 = 3.0 $$ | $$ \frac 2 {10} $$
| $$ (2,8) $$ | $$ \frac {2+8} 2 = 5.0 $$ | $$ \frac 2 {10} $$
| $$ (4,8) $$ | $$ \frac {4+8} 2 = 6.0 $$ | $$ \frac 1 {10} $$

Mean of all the sample means, $$ \mathrm{E} {\bar X} = \sum_{i=1}^{i=N} p_i {\mu}_i $$

$$ \quad = { \frac 2 {10} \times 1.5 } + { \frac 1 {10} \times 2.5 } + { \frac 1 {10} \times 4.5 } + { \frac 1 {10} \times 2.0 } + { \frac 2 {10} \times 3.0 } + { \frac 2 {10} \times 5.0 } + { \frac 1 {10} \times 6.0 } $$
  
$$ \quad = 3.4 $$.
  
Variance of all the sample means, $$ \mathrm{Var} ({\bar X}) = \mathrm{E} { ( {\mu}_i - \mathrm{E} {\bar X} ) }^2 $$.
   
For better visibility, using the following table for computation:   

|---
| Sample | Mean( $$ {\mu}_i = {\bar X} $$ ) | $$ { ( {\mu}_i - \mathrm{E} {\bar X} ) }^2 $$ | Probability( $$ p_i $$ )    
|:-:|:-:|:-:|:-:
| $$ (1,2) $$ | $$ 1.5 $$ | $$ { ( 1.5 - 3.4 ) }^2 = 3.61 $$ | $$ \frac 2 {10} $$
| $$ (1,4) $$ | $$ 2.5 $$ | $$ { ( 2.5 - 3.4 ) }^2 = 0.81 $$ | $$ \frac 1 {10} $$
| $$ (1,8) $$ | $$ 4.5 $$ | $$ { ( 4.5 - 3.4 ) }^2 = 1.21 $$ | $$ \frac 1 {10} $$
| $$ (2,2) $$ | $$ 2.0 $$ | $$ { ( 2.0 - 3.4 ) }^2 = 1.96 $$ | $$ \frac 1 {10} $$
| $$ (2,4) $$ | $$ 3.0 $$ | $$ { ( 3.0 - 3.4 ) }^2 = 0.16 $$ | $$ \frac 2 {10} $$
| $$ (2,8) $$ | $$ 5.0 $$ | $$ { ( 5.0 - 3.4 ) }^2 = 2.56 $$ | $$ \frac 2 {10} $$
| $$ (4,8) $$ | $$ 6.0 $$ | $$ { ( 5.0 - 3.4 ) }^2 = 6.76 $$ | $$ \frac 1 {10} $$


Clearly, Variance is the dot product of last two columns, $$ \mathrm{Var} ({\bar X}) = 2.34 $$.
 

Comparing the values of $$ \mathrm{E} {\bar X} $$ and population mean, $$ \mu $$, both are equal to $$ 3.4 $$, in agreement with the Theorem mentioned in problem.
  
Comparing the values of $$ \mathrm{Var} ({\bar X}) $$ and population variance, $$ \sigma $$, as per theorem $$  \mathrm{Var} ({\bar X}) = \frac { {\sigma}^2 } n ( 1 - \frac {n-1} {N-1} ) $$. Here, $$ n = 2 $$ is the sample size and $$ N = 5 $$, total population.
  
Putting these values ion RHS, $$ \frac {6.24} 2 ( 1 - \frac 1 4 ) = 2.34 $$, which is same as the $$ \mathrm{Var} ({\bar X}) $$.
  
  
 
 





