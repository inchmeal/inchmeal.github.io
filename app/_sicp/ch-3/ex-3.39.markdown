---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.39"
order: "039"
date: 2018-02-14 
---

We have two procedures passed to `parallel-execute`, Lets calls them **proc1 and proc2**.

Lets call *proc1* part which is serialized as proc1-serialized(squaring part) and the remaining part as proc1-assigned(this is setting the value)

Ofcourse proc1-assigned will always happen after proc1-serialized.

proc1-serialized -> proc1-assigned -> proc2 = 101

proc1-serialized -> proc2 -> proc1-assigned = 100

proc2 -> proc1-serialized -> proc1-assigned = 121

I think these are the only permutations possible.
