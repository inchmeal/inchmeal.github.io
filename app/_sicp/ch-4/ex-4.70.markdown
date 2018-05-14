---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.70"
order: "070"
date: 2018-04-04 
---

Since `cons-stream` second argument is *delayed*, and within the statement, `THE-ASSERTIONS` is *mutated* to a new value. Thus it will make an infinite stream of assertions where each assertion essentially points to the same assertion just like `ones`.

Thus, it will cause the loss of all the previous assertions(except the last one added) as well as unecessary create an infinite stream of assertions even when actual number of assertions is finite.
