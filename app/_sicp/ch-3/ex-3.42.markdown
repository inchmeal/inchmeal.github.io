---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.42"
order: "042"
date: 2018-02-14 
---

I think it is indeed an optimised solution and it will work exactly as the orignial solution.

There is no need to serialize on every invocation - serialize once and re-use the serialized procedure on every call to withdraw/deposit.
