---
chapterName: "Survey Sampling"
chapter: 7
solution: "6"
order: "006"
date: 2017-09-13
---

Let $$ \sigma^2_{ \bar {X_1} } $$ and $$ \sigma^2_{ \bar {X_1} } $$ be the sample variances of sample mean of samples $$ X_1 $$ and $$ X_2 $$ respectively of the population-1 and population-2 respectively.

Since population variance of both population is same, denoting it by $$ \sigma $$. Let $$ n = 25 $$ denotes the sample size which is also same for both population.

By simple random sampling that variance of the sample means can be computed as:

$$ \sigma^2_{ \bar {X_1} } = \frac { \sigma^2 } { N_1 } \left( \frac {N_1 - n} {N_1 - 1} \right) $$
 
$$ \sigma^2_{ \bar {X_2} } = \frac { \sigma^2 } { N_2 } \left( \frac {N_2 - n} {N_2 - 1} \right) $$
 
For comparing the two, taking ratio:

$$ \frac { \sigma^2_{ \bar {X_1} } } { \sigma^2_{ \bar {X_2} } }  = { \frac { N_1 - n } { N_1 - 1} } \times { \frac {N_2 - 1} {N_2 - 1} } = 0.9997 $$

Thus the variance of the sample means of both populations is almost equal, Or variance of sample mean of larger population is slightly more compared to the smaller population.

Note that the difference is very very small and comes only because of the finite population correction. Because of its very small size we can ignore this difference and there is no difference in estimating the mean of the smaller population compared to the larger one.

This completes the solution but for the sake of experiment, Lets use $$ N_1 = 100 $$ and $$ N_2 = 100000 $$, then the ratio of the two becomes $$ = 0.763 $$. Thus when the population size is small, then, the finite population correction can not be ignored. And here clearly the sample with larger population has more variance of the sample mean. Thus in this case the sample of smaller population can give more accurate results.



    
    

