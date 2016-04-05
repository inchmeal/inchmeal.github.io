---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.26"
order: "026"
date: 2016-04-02
---

The change made in function `expmod` by Louis Reasoner will cause `expmode` to be called twice in each recursive invocation. 

The process becomes tree recursive as each invocation results in two branches. Clearly the height of the tree is $$ log_2 \, (base) $$ where 
$$ base $$ is the input to this procedure. 

Also note that number of steps in the process is equal to total number of nodes in the tree.
   
Thus total nodes in the tree are $$ 2 \cdot 2 \cdot 2 \cdot \cdot \cdot (log_2 \, (base) \text{ times }) = 2^{ log_2 \, (base) } = base $$.
     
Thus number of steps is equal to the input passed i.e. $$ \theta (n) $$. As we can see this small mistake converted this code from $$ log_2 \, n $$
complexity to $$ n $$ order complexity.
     
