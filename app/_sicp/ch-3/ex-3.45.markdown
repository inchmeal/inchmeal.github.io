---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.45"
order: "045"
date: 2018-02-15 
---

Well, this is straight forward. In `exchange` the procedre calls `withdraw` and withdraw is serialized using the same serializer from which we are calling `exchange`. So, the program will keep waiting for itself! Because withdaw can be called only when exchange is completed but exchange can not be completed without calling withdraw.

