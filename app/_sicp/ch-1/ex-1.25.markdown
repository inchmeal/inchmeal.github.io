---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.25"
order: "025"
date: 2016-04-02
---

The function `expmod` defined by Alyssa P. Hacker will take much more time as compared to the original procedure. In the original procedure
all operations multiplication/division/remainder are done on integers at max to $$ {base}^2 $$, where $$ base $$ is input to the procedure.

But in the process defined by Alyssa, these operations are performed on huge number: $$ base^n $$. This slows down the algorithm
significantly.
