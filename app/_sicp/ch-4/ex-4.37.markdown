---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.37"
order: "037"
date: 2018-03-21 
---



Yes, it is more efficient as it requires fewer number of checks. We just check if third number is `integer?` which obviously is far less costly than searching for a number, $$\, k \,$$,  that satisfies the constraint $$\, i^2 + j^2 = k^2 \,$$. 

However, this comes with an assumption that the computation of `sqrt` takes insignificant time comapared to scanning the numbers from $$\, j \,$$ to $$\, high \,$$.
