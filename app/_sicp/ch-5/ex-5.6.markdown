---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.6"
order: "006"
date: 2018-04-19 
---

Restoring and saving `continue` in `afterfib-n-1` can be reomoved without any effect. 

Because:

- Between the `restore` and `save` operations, there is no change in `continue`.
- the value of `continue` read from stack is never used(apart from putting it back to stack).
