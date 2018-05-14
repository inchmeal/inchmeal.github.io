---
chapterName: "Survey Sampling"
chapter: 7
solution: "9"
order: "009"
date: 2017-09-13
---

Let $$ X $$ denotes the population in the sample.
 
Denoting $$ X_i $$ as the $$ i_{th} $$ member of population $$ X $$. Let $$ X_i = 1 $$ if the member votes for the preposition and $$ X_i = 0 $$ if the member votes against the preposition.
 
If $$ \bar X $$ denotes the proportion of the population that votes for the preposition and then $$ 1 - \bar X $$ denotes the proportion that votes against the preposition.

Thus the difference between $$ \bar X $$ and $$ 1 - \bar X $$, i.e. $$ 2 \bar X - 1 $$, gives the estimated margin of victory in the sample population. The variance of this estimate is then $$ \mathrm{Var}(2 \bar X - 1) = 4 \mathrm{Var}(\bar X) $$.

We know that $$ \mathrm{Var}(\bar X) = \frac { \bar p (1 - \bar p) } {n-1} = \frac { 0.55 \times 0.45 } { 1499 } = 0.000165 $$, ignoring the finite population correction.  

Thus the variance of the estimated margin of victory is $$ 4 \times 0.000165 = 0.00066 $$. And which gives the standard error = $$ \sqrt { 0.00066 } = 0.0256 \approx 0.026 $$.
  
The 95% confidence interval is $$ 0.1 \pm 1.96 \times 0.026 $$, or $$ (0.04904,0.15096) \approx (0.05, 0.15) $$.   

Or in percentage, The interval is $$ (5, 15) $$. 

Note: Compared to last problem here we used the approximation for $$ \mathrm{Var}(\bar X) = s^2_{\bar p} = \frac {\bar p(1- \bar p)} {n-1} $$, because population variance is not available.  
