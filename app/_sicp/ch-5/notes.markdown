---
layout: sicp
title:  "SICP, summary and notes"
description: "SICP, Chapter - 5 - Computing with Register Machines"
chapter: 5
chapterName: "Computing with Register Machines"
solution: "notes"
order: "000"
date: 2017-04-18
tags: sicp code
---

Feeling a bit lazy to write a more detailed summary, so i will just put a quick summary for this chapter.

- We start with writing specialized machines for simple operations like `gcd`, `factorial`. Building a machine entails writing the data paths(between the required registers and/or stack) and the controller instructions(assembly).

- We learn how to do procedure call as well as recursion using assembly code.

- We then build a register simulator that can execute the controller instructions.

- Then on top of this register machine simulator, we develop an evaluator from chapter-4, section 4.1. Thus our evaluator is written in controller instructions(assembly code). There are few shortcuts we took to avoid complexity like directly using the scheme primtives for read and write from console.

- Here comes the amazing part, while writing the assembly code/controller intructions, we write it in a way to perform *tail call* optimization! And it turned out quite simple!

- One of the exercises asked to change this evaluator to support delayed arguments similar to the lazy evaluator in chapter 4. It turned out quite tedious but interesting.

- There are certain ways we organise/design assembly code, all of them were not explicitly discussed but we learn them while going through the code examples and exercises. For example developing a procedure in scheme `preserving` that takes care of scenario: some register is modified but its previous content will be used later *then* we save this register on stack and restore this register before it gets used.

- Then more interesting things happen.

- We build a compiler that converts scheme programs into assembly instructions. Here also we do *tail call optimization*.

- We then see the performance difference between evaluator(interpreter) and compiler. Advantage of compiler being much faster execution than interpreter. Interpeter helps us to *write* code faster as every expression can be viewed while it executes. Thus we can debug fast and change fast.

- In exercises, we integrate compiler and interpreter/evaluator! We have an evaluator that can invoke compiled procedures! This can be helpful in the following way: the procedures which were already built and tested are compiled and the new procedures which are being written are interpreted. Thus kind of best of both worlds.

- Also, we build *compile time environment* in exercises that helps in generating optimized code for variable lookups. We also see one use case where compile time environment can be used for other purposes apart from optimizations.

- Finally in exerise 5.50, we compile the evaluator that we built in chapter 4 using the compiler built in this chapter. Then we execute that compiled code(assembly code) on top of the register simulator. And we test it by evaluating few programs like fibonacci using the compiled evaluator!
