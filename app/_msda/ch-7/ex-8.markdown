---
chapterName: "Survey Sampling"
chapter: 7
solution: "8"
order: "008"
date: 2017-09-13
---

#### (a) #### 

$$ P( \vert \; \bar p - p \; \vert \; \geq \delta ) = 1 - P( \vert \; \bar p - p \; \vert \; \leq \delta ) $$      

$$ = 1 - P( { - \delta } \leq \bar p - p \leq \delta ) $$        

Dividing by, $$ \sigma_{\bar p} $$, standard error of the sample mean: 

$$ = 1 - P( \frac { - \delta } { \sigma_{\bar p} } \leq \frac {\bar p - p} {\sigma_{\bar p} } \leq \frac { \delta } { \sigma_{\bar p} } ) $$      

Now we can approximate it by standard normal using Central Limit Theorem:

$$ \approx 1 - \left( \Phi \left( \frac { \delta } { \sigma_{\bar p} } \right) - \Phi \left(   \frac { - \delta } { \sigma_{\bar p} } \right) \right) $$          

$$ = 1 - \left( \Phi \left(   \frac { \delta } { \sigma_{\bar p} } \right) - \left( 1 - \Phi \left(   \frac { \delta } { \sigma_{\bar p} } \right) \right) \right) $$      

$$ = 2 \left( 1 -  \Phi \left(   \frac { \delta } { \sigma_{\bar p} } \right) \right) $$

Since we are given that $$ P( \vert \; \bar p - p \; \vert \; \geq \delta ) = 0.025 $$

Thus we get $$ \delta = \sigma_{\bar p} \times \Phi^{-1} \left( 1 - { \frac {0.025} 2 } \right) = \sigma_{\bar p} \times 2.4 \text{ ( by looking up normal table ) } $$

Now since this is a proportion, we know for dichotmous case, and also ignoring the finite population correction:

$$ \sigma^2_{\bar p} = \frac { p(1 - p) } n = \frac 1 5 \times \frac 4 5 \times \frac 1 { 100 } = \frac 1 { 625 } $$

which gives us:

$$ \delta = 2.4 \times \sigma_{\bar p} = { 2.4 } \times \sqrt{ \frac 1 { 625 } } = 0.096 $$

Thus the value of delta, which makes the probability of the difference between sample mean $$ \bar p $$ and the population mean $$ p $$ more than $$ \delta $$ apart equals to $$ 0.025 $$, is $$ 0.0384 $$. 

#### (b) ####

The 95% confidence interval is $$ \bar p \pm 1.96 \sigma_{\bar p} $$.

Ignoring the finite population correction, $$ \sigma^2_{\bar p} = \frac { \sigma^2 } n $$, where $$ \sigma^2 $$ is the population variance, which in this case(dichotomous) is $$ p(1-p) = \frac 1 5 \times \frac 4 5 $$. Thus $$ \sigma^2_{\bar p} = \frac 1 5 \times \frac 4 5 \times \frac 1 {100} = \frac 1 {625} $$.
 
Thus the 95% confidence interval becomes $$ 0.25 \pm 1.96 \times \sqrt { \frac 1 {625} } = 0.25 \pm 0.0784 $$, Or $$ (0.1716,   0.3284) $$      
 Clearly the interval contains $$ 0.20 $$ 

Note: In both parts, $$ \sigma^2_{\bar p} $$ is used instead of $$ s^2_{\bar p} $$ because we can compute it using the population variance $$ \sigma^2 = p(1-p) $$. Thus we need not to use $$ s^2_{\bar p} $$ as an approxiamtion for $$ \sigma^2_{\bar p} $$. In other words, use $$ s^2_{\bar p} $$ only when we can not compute $$ \sigma^2_{\bar p} $$. 
