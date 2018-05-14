---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.19"
order: "019"
date: 2018-03-12 
---

That's interesting.

At present, I am more inclined towards Alyssa'a view.

Ben's view is imperative style, the way program statements are ordered can change the behaviour of program.

Alyssa's view is also similar to Ben's with an exception which can help in spotting bugs. Alyssa's want clear boundaries that either a variable is a outer-scope or is a local scope but it shoudn't be the case that at one point the variable is used from outer-scope and at other point in the same procedure it is used from local scope. 

I think that's a good idea to avoid subtle bugs.

Now, Eva's view which I think is purely functional and order does not matter. I think this is possible only with purely functional languages! As long as we have assignments, Eva's view can not be implemented. 

Because even if we have truly simulataneous definitions, how things will behave when one definition depends on other and the latter variable is changed using assignment? Thus the output of same procedure can differ depending on **when** assignment is executed.

But **when** means **order**. Thus Eva's view requires us a complete freedom from order of statements!

Also, there are other cases to consider - the circular definitions - as we saw in chapter-3. For those cases, it means we need *applicative order* evaluation instead of *normal order* evaluation.

Thus the argument can be summarised as argument between imperative and functional world!

It is yet too early for me to say that functional view of the world *can* solve most problems. I don't know yet!
