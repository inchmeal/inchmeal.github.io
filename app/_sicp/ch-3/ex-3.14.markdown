---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.14"
order: "014"
date: 2018-01-04 
---

Well, it reverses the list!

How it accomplish this is a mystery :)

In each invocation of `loop`,  *x* is the list to be reversed and *y* is the reversed list till this point. Thus initially *y* is empty. Now it splits *x* in first element(car) and rest(cdr) and combines this first element of *x* and *y*(using temp). Now it invokes `loop` to inverse the remaining *x*(cdr) and the reversed list formed in current invocation(*y*). Thus by the time, all the items go to *y*, *x* becomes empty and loop/recursion ends.
