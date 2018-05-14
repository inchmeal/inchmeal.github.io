---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.30"
order: "030"
date: 2018-03-16 
---

#### a

Ben's code works because he is using primitives.

#### b

Original Evaluator:

`(p1 1)` will give `(1 2)`

`(p2 1)` will result in `1`.

Reformed C Programmer's version:

`(p1 1)` will give `(1 2)`

`(p2 1)` will result in `(1 2)`.

#### c

I mentioned this in a previous exercise.

That `actual-value` won't hurt non-thunks and evaluates the thunks.

#### d

As we saw this in chapter-3, assignment don't go well with lazy streams as well as here with normal order evaluation.

I am wondering why not go with a third approach:

To use `actual-value` only when evaluating assignments i.e. `(set! <ex>)` expressions.

This will then also require to use `actual-value` in evaluating procedure arguments which are assignment expressions.

Now, this will create another issue, that we return `'ok` in assignment expressions, but then we need to return the latest values. 

My concern with the idea proposed by Cy is that it is even *effecting* the parts which are not even causing the problems.

I am more happy to go with book's approach as I am not certain that I have considered all the implications of the approach I proposed.
