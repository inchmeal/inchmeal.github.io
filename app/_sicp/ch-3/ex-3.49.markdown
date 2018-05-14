---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.49"
order: "049"
date: 2018-02-15 
---

Well, I could not come up with a good example, a deliberate attempt :)

Simulating/Modelling variant of *Treasure Hunt* where next place/state is revealed by a combination of the clue from previous two places. Ofcourse, I have to make the *place* as a shared resource - only one process can access a place/state at a time.

Now if two processes *participate* in this game starting from different places/points(first two places assigned randomly) - then the situation described in the problem can easily arrive - deadly deadlock! And it can not be avoided by simple numbering.
