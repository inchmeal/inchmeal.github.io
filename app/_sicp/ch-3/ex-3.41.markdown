---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.41"
order: "041"
date: 2018-02-14 
---

I think in very rare situation problem can occur.

Say, balance is 64bit number and requires two operations to write - 32 bit first and then 32 bit next.

Thus writing balance to memory takes two operation and if one reads balance in between these operations then it will be wrong value.

But this case was not mentioned and according to book write operation is not possible to be taken in multiple steps - assuming this there will not be any problem(I hope!)
