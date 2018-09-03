---
layout: sicp
title:  "SICP - Review"
description: "Inchmeal | SICP solutions "
date: 2018-09-02
tags: sicp book-review
sitemap:
    priority: 0.9
permalink: /sicp/review.html
---

[SICP][sicp-mit] is one of the most venerable books in computer science, even claimed to be the greatest text in computer science by many. A book which is recommended by the likes of Peter Norvig and Paul Graham, and numerous praises all over the internet.
<!--more-->

In spite of all this, I heard about this book so late as if I was living under a rock where no sane voices could reach. A few years back when my friend Asif mentioned about this book, my initial thought was - why to spend time on reading a book written in the 90s! After all, what new an introductory book could teach a programmer having about a decade of experience? I could not be more wrong!

The book turned out to be the greatest exposition of ideas compiled into a single place I had ever encountered. It even raised the bar for me to appreciate any subsequent book. The first three chapters of SICP already covered everything that I knew or had ever heard about in programming so I wondered what possibly could come next? Well, the rabbit hole goes real deep and not only I had the wrong impression of my current knowledge but I didn’t even have the faintest idea of my ignorance.

I loved the writing style of the book - it always felt like reading a philosophical take on programming. Even while reading the implementation details of many programs, it created an impression of reading on a conceptual level rather than getting bogged down in details. 

To elaborate on the philosophical part, here's an opening quote from chapter 3:

> Even while it changes, it stands still.
<cite>Heraclitus</cite>

How can something like this relate to programming?

-----

Before going further, let me first answer few questions which I had before reading it:

### Is this book difficult?
Yes and No. It depends on the individual and his/her earlier experiences(not necessarily programming) in reading technical books.

For me, it was approachable. Neither was it too easy to skim over the pages nor was it too difficult to get stuck on a page for more than a few hours. Few exercises were quite challenging though (for me, ymmv) and sometimes even a single one took my whole day.

### What are the prerequisites?
There is no prerequisite apart from some basic high school math. It can even be read as the first exposure to programming. Although, it can get a bit daunting as that and some prior experience in programming would be helpful.

If an exercise/example requires some domain knowledge then it is explained in enough detail sufficient for the context.

### Should I learn *scheme* first?
No. Scheme is a very simple yet powerful language and the authors cover the necessary details as the book proceeds.

I made this mistake of reading another book for *scheme* before starting this book. It is not required at all.

### Is the book about functional programming?
No. I had this wrong impression that it is only about functional programming. Although, I admit that a good amount of the content utilizes functional programming but that's not the whole story.

This book is about different ideas and paradigms in programming. It is about a contrast of the different approaches in programming. It is about how abstractions play an important role. It is about not being limited to the constructs provided by the available programming languages. It is about creating our own languages. It is about writing interpreters and compilers.

It’s an exhibition of so many ideas bundled together that it might take a lifetime to acquire as many new ideas.

### Should I attempt this book in another programming language?
I don’t think it is a good idea as in that case one will be dealing with two problems - how to make all the constructs needed in the book in a different language as well as understanding the content.

I think any language from the Lisp family of programming languages won’t give much trouble. But attempting in statically typed language and/or a language with no FP support can be hard.

I used racket for the first half of the book and later moved to MIT scheme.

### Should I attempt all exercises?
The more the better. 

I have written a small summary of the exercises that I found interesting at the bottom of the [notes][notes] section of each chapter.

### Anything else one should know?
- The [source code][sicp-source] of all the examples given in the text is available on the MIT website. It was really helpful for the last two chapters. The source code is based on the MIT scheme.

- There are [video lectures][video-lectures] also available for this course as it was taught at MIT. These lectures follow the first edition of the book. Though I have not watched them, I think they can be very helpful.

- Check out [sicp-guile][sicp-guile]. I saw this place when i reached the last chapter. I liked the idea of writing tests so perhaps guile can serve as a good replacement of MIT scheme.

- The book follows top down approach while explaining concepts. I found this quite helpful but this can sometimes leave us wondering how a particular sub-task will get implemented. Sometimes it helped to first read the whole section without attempting exercises and then re-read again while attempting exercises.

- In few exercises it is possible to get so lost in details that one can even forget the central idea behind the whole exercise. It is helpful to take a step back and see the whole picture and then re-attempt the exercise.

- Few sections can take multiple readings to sink in.

-----

### Spoiler alert
If you like surprises and don’t want to know too many details of the ideas presented in the book then perhaps just stop here. :)

Of course I won't be explaining these ideas, just outlining few of them.

### Chapter 1 - Building abstraction with procedures

- Combining simple ideas into complex ideas in a programming language. First, it shows three stages/features that *scheme* offers for combining ideas:
  
  - Primitive expressions.
  - means of combining expressions.
  - means of building abstraction.
  
  Then later in the book, we recognize these exact same features in an entirely different language used for logic programming!

- Different models of procedure application: Substitution model and Method call. These models are not limited to implementation details but also impacts our reasoning about programs. For example, it is easy to understand an output of a program using the substitution model but requires a more complex mental model to understand the output using the method call approach.

- Different ways of evaluating procedure arguments: **Normal order evaluation**(lazy evaluation) and **Applicative order evaluation**. Later in the book(chapter-4), we experiment with both ways of evaluation in our own implemented language and compare and contrast between them.

- Different types of processes generated by recursion - iterative and recursive process. Later in the book(chapters-4, 5), we implement tail call optimization which ensures that recursive *procedures* generate iterative *processes*.

- Procedure as first class member in programming language, higher order procedures and anonymous procedures(lambda). 

### Chapter 2 - Building abstractions with data
- Data abstraction - we use procedures for abstraction instead of using classes and objects as common in object oriented languages.

- We see that data and procedures can be viewed as similar entities. The idea is that any data can be represented by procedure thus diminishing the difference between the two.

- Stratified design. Decomposing a system in layers where each layer is built on top of another one. The abstractions implemented in the layers below become the primitives in the layers above.

- Multiple representations of abstract data. This also includes abstractions similar in object oriented languages.

### Chapter 3 - Modularity, Objects and State
This chapter is fundamental in understanding the difficulties in combining the functional and object oriented programming. It illustrates why immutability is important in functional programming and how it conflicts with the main premise of object-oriented programming - that object has a state.

- To implement a modular system, we discuss two worldviews: Object-oriented and stream based. These views differ in their relationship with time where the former is time bound and the latter is timeless.

- The complexities in imperative programming introduced because of the assignment operator. Example: If an account balance is changed then we say that account has not changed but just the balance but when a number say 5 is changed to 6 we say that it's a different number!

- Concurrency - This is not as extensively covered but quite good for an introduction.

- Streams or **infinite lists** - This was so awesome, so elegant. It makes it so easy to implement the infinite series from mathematics! And of course, streams are not limited to mathematics.

- We compare the time dependent stateful object oriented systems *with* time independent stateless stream based systems. Also, why a grand unification of them is yet to emerge.

### Chapter 4 - Metalinguistic abstraction
- Instead of being limited by the constructs of available programming languages, the trick is to learn the trick - design our own programming language!

- We implement a scheme evaluator/interpreter in scheme itself!

- Then we play with our language by introducing new constructs and ideas.
  
- We modify our language by adding support for *normal order evaluation*. We learn how it becomes complicated when mixed with the assignment operator.
  
- Mathematics is about “what” and programming is about “how”. Higher-order languages help us to move a bit close to “what” by freeing us from many details of “how”. 

- **Nondeterministic computing**. In the spirit of the above idea, we develop higher level construct **amb** in our language for introducing backtracking in the language itself. Till now our program flows only in one direction depending on the program itself but the introduction of *amb* can make the program to automatically backtrack if some paths in the program lead to dead end. To emphasize, backtracking happens by the evaluator - the program does not explicitly contain code for backtracking.

- **Logic Programming**. Again in the same spirit of higher order language, we then implement a new query language inspired from mathematical logic by having constructs like "and", "or", "not" for solving specific kind of problems.

### Chapter 5 - Computing with register machines
I found this chapter a bit boring in the beginning but things became really interesting eventually. 

- We implement the scheme evaluator built in the previous chapter in machine instructions.

- We also build a compiler that converts scheme programs into assembly/machine instructions.

- Compare and contrast evaluator and compiler.

- Tail call optimization in both evaluator as well as compiler!

### Exercises and solutions
They are an integral part of the book. All exercises are very carefully thought out. Read the problem statement carefully. I made this mistake of not reading them carefully and paid the price by wasting many hours.

On a side note, the names of the characters in the exercises were funny. Hi Alyssa P. Hacker :)

Doing SICP exercises also feels like a social acitivity. There are many people who have put their solutions online. It was motivating as well as fun comparing my solution with the others. Of course one should have self discipline to only look at other solutions after trying/implementing on their own. I found the following places helpful:

- [Bill the Lizard][bill]
- [Eli Bendersky][eli]
- [l0stman][l0stman]
- [Scheme wiki][scheme-wiki]
- [wizardbook][wizardbook]

----

Wow!!

Even after completing the whole book, I could not believe that so much content can be covered in a single book? No part of the book felt rushed, no part of the book appeared short in explanation

Perhaps this is the only book till now where I can't think of any criticism! It’s too perfect. I won’t change a single thing. Saying something is perfect is somewhat unsettling. How can it be possible to not have any room for improvement? Perhaps I lack experience and knowledge to criticise such a great work.

Thanks a lot to the authors for writing this wonderful book. As is truely said - it is indeed a wizard book filled with sorceries!


[scheme-wiki]: http://community.schemewiki.org/?SICP-Solutions
[eli]: https://eli.thegreenplace.net/tag/sicp
[wizardbook]: https://wizardbook.wordpress.com/solutions-index/
[l0stman]: https://github.com/l0stman/sicp
[bill]: http://www.billthelizard.com/2009/10/sicp-challenge.html
[notes]: https://www.inchmeal.io/sicp/ch-1/notes.html
[sicp-mit]: https://mitpress.mit.edu/sites/default/files/sicp/index.html
[video-lectures]: https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video-lectures/
[sicp-source]: https://mitpress.mit.edu/sites/default/files/sicp/code/index.html
[sicp-guile]: https://github.com/zv/SICP-guile
