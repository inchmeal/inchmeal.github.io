---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.25"
order: "025"
date: 2018-03-15 
---

Since, `unless` is a procedure and our language in applicative order, this will go in an infinite loop.

But, if the language is normal order, then it won't go in an infinite loop since the resursion will stop when n equals 0 and second argument to `unless` won't even get evaluated.
