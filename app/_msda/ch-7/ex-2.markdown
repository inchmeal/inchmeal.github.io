---
chapterName: "Survey Sampling"
chapter: 7
solution: "2"
order: "002"
date: 2017-09-11
---

Denoting the proportion of sample greator than 3 by $$ y_i $$ for the $$ i^{th} $$ sample.

Sampling Distribution of the quantity $$ y $$ of samples of size 2:

|---
| Sample | $$ y_i $$ | $$ p_i $$ 
|:-:|:-:|:-:|:-:
| $$ (1,2) $$ | $$ \frac 0 2 $$ | $$ \frac 2 {10} $$
| $$ (1,4) $$ | $$ \frac 1 2 $$ | $$ \frac 1 {10} $$
| $$ (1,8) $$ | $$ \frac 1 2 $$ | $$ \frac 1 {10} $$
| $$ (2,2) $$ | $$ \frac 0 2 $$ | $$ \frac 1 {10} $$
| $$ (2,4) $$ | $$ \frac 1 2 $$ | $$ \frac 2 {10} $$
| $$ (2,8) $$ | $$ \frac 1 2 $$ | $$ \frac 2 {10} $$
| $$ (4,8) $$ | $$ \frac 2 2 $$ | $$ \frac 1 {10} $$

Mean of the quantity,  $$ y $$, $$ \mathrm{E} y = \sum_{i=1}^{i=N} p_i y_i $$, which is the dot product of last two columns $$ = \frac 4 {10} = 0.4 $$. 

$$ \mathrm{Var} (y) = \mathrm{E} { \left( y_i - {\mathrm{E} y} \right) }^2 $$.
   
For clarity, using the following table for computation:   

|---
| Sample | $$ y_i $$ | $$ { \left( y_i - {\mathrm{E} y} \right) }^2 $$ | $$ p_i $$    
|:-:|:-:|:-:|:-:
| $$ (1,2) $$ | $$ \frac 0 2 $$ | $$ { ( \frac 0 2 - 0.4 ) }^2 = 0.16 $$ | $$ \frac 2 {10} $$
| $$ (1,4) $$ | $$ \frac 1 2 $$ | $$ { ( \frac 1 2 - 0.4 ) }^2 = 0.01 $$ | $$ \frac 1 {10} $$
| $$ (1,8) $$ | $$ \frac 1 2 $$ | $$ { ( \frac 1 2 - 0.4 ) }^2 = 0.01 $$ | $$ \frac 1 {10} $$
| $$ (2,2) $$ | $$ \frac 0 2 $$ | $$ { ( \frac 0 2 - 0.4 ) }^2 = 0.16 $$ | $$ \frac 1 {10} $$
| $$ (2,4) $$ | $$ \frac 1 2 $$ | $$ { ( \frac 1 2 - 0.4 ) }^2 = 0.01 $$ | $$ \frac 2 {10} $$
| $$ (2,8) $$ | $$ \frac 1 2 $$ | $$ { ( \frac 1 2 - 0.4 ) }^2 = 0.01 $$ | $$ \frac 2 {10} $$
| $$ (4,8) $$ | $$ \frac 2 2 $$ | $$ { ( \frac 2 2 - 0.4 ) }^2 = 0.36 $$ | $$ \frac 1 {10} $$


Variance is the dot product of last two columns, $$ \mathrm{Var} (y) = 0.09 $$. 
