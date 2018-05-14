---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.46"
order: "046"
date: 2018-02-15 
---

This is similar to earlier exercises.

Assume two processes P1 and P2 are trying to acquire same mutex object `the-mutex` using `(the-mutex 'acquire)`

Initially lets assume the the value in cell of the mutex is false.

Now in parallel execution both procedures can reach this line `(begin (set-car! cell true)` in proc `test-and-set` because the value of cell is false.

Now, again both of them sets it to true happily and believe it an exclusive access - Truth be told - they cant be more wrong :)
