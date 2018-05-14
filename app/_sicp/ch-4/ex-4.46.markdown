---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.46"
order: "046"
date: 2018-03-23 
---

Because the parser reads from left to right it won't work if evaluator evaluates from right to left.

The whole grammar rules will go wrong for eg: simple noun is *article* followed by *noun* when read from left to right. But reading from right to left won't work.

What we could have done if evaluator is right to left?

Well, I think simply reversing the input would have made it work then.
