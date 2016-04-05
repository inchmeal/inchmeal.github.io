---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.15"
order: "015"
date: 2016-03-31
---

We can see that the procedure keeps on dividing the angle, $$ \alpha $$ by $$ 3 $$ until it becomes less than $$ 0.1 $$. Clearly at max
number of times the division is required is $$ {log}_3 {\alpha} $$.

Thus the time complexity is $$ { log }_3 { \alpha } $$.

Also since the procedure is recursive process and the maximum depth it reaches is $$ { log }_3 { \alpha } $$, the space complexity is also $$ { log }_3 { \alpha } $$.

To find number of steps for $$ 12.15 $$, we can see:
$$ 12.15/3 = 4.05 $$,    
$$ 4.05/3 = 1.35 $$,     
$$ 1.35/3 = 0.45 $$,     
$$ 0.45/3 = 0.15 $$,    
$$ 0.15/3 = 0.05 $$.

Thus we have to divide $$ 5 $$ times. Thus $$ p $$ is called $$ 5 $$ times.