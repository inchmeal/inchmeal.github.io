---
layout: sicp
title:  "SICP, summary and notes"
description: "SICP, Chapter - 4 - Metalinguistic Abstraction"
chapter: 4
chapterName: "Metalinguistic Abstraction"
solution: "notes"
order: "000"
date: 2017-03-04
tags: sicp code
---

This chapter takes us to a very different path. Instead of being limited to the features provided by programming languages, it says in the beginning, that trick is to learn the trick or to design our own language as per our needs!

Metalinguistic abstraction means designing/implementing new languages. The new language can enable us to describe the problem in different, concise and easier ways. To understand the new syntax of our language we write an evaluator. 

An evaluator is also just another program written in a programming language that can understand the syntax of our shiny new language. Even we can regard every program as a evaluator that understands a specic syntax just like our package of polynomial arithmetic, digital logic simulator, or constraint propogator.

#### The metacircular evaluator

A metacircular evaluator is an evaluator written in the same language that it evaluates.

In the book, a meta-circular evaluator is implemented for a smaller version of scheme(it contains almost all the features mainly debugging and error logging were omitted). 

Well, the first thing to note is we do not do character by character of tokenization, it happens automatically because it is written in scheme and scheme can read s-expressions directly. For eg if we read input `(proc (+ 2 3))`, we need not to read it character by character but list can directly give a list whose first element is `proc` and second element is another list `(+ 2 3)`.

Thus we need to understand at expression level not at the character/alphabets level.

Now, the evaluation happens in a cycle/loop with two main parts (i) eval (ii) apply, Quoting directly from the book:

1. To evaluate a combination (a compound expression other than a special form), evaluate the subexpressions and then apply the value of the operator subexpression to the values of the operand subexpressions.

2. To apply a compound procedure to a set of arguments, evaluate the body of the procedure in a new environment. To construct this environment, extend the environment part of the procedure object by a frame in which the formal parameters of the procedure are bound to the arguments to which the procedure is applied.

**eval** as the name suggests, evaluates a given expression by first checking on a case by case basis the expression type and then evaluating it based on the type of expression. Expression can be of any type like assignment `(set! a 5)` or self evaluating like `5` or quoted like `'a` or lambda like `(lambda )` or application like `(fib 5)` etc. 

Note that the specific syntax of each of the expression type is not part of eval but abstracted in specific evalutation procedures. Thus we can change the syntax of our language without changing the evaluator.

Evaluator needs an environment where it looks for the variables as part of the evaluation. For eg: `(set! y (+ x 5))` will require that we have en evironment where we can lookup the value of `x` and then assign a new value to `y` in the environment.

**apply** is invocation of procedure with the supplied arguments. An application of procedure creates a new environment by extending the environment where procedure is actually defined(not invoked but defined). 

The new environment contains the parameters bounded to the actual values. Now, each of the expression inside the body of the procedure invoked is evaluated(thus calling eval) in the new environment.


Tip: The environment stores the procedure object constructed by 'make-procedure** instead of the expressions list in procedure body. This procedure object internally contains the actual body as well as environment where the preocedure was defined. This procedure object is stored against the name of the procedure so that we can lookup the procedure using this name.

**special forms** are implemented directly in the evaluator for eg: to evaluate `(if pred consequent alternate)` we write a specific procedure to evalute `pred` and then based on it outcome we evaluate `consequent` or `alternate`.

**derived forms** are implemented on top of special forms. i.e. we convert the syntax of derived form into special form syntax. For eg: we converted `cond` into nested `if` expressions. And after conversion we evaluate the transformed expression using special form evaluation.

We saw the halting problem in one of the exercise ex-4.15.

There is an interesting discussion of **internal definitions**(variable or procedure definitions inside a procedure) whether we want the definitions to be sequential or truely simultaneous. Simultaneous definitions are specially needed for circular definitions as we need in last section in streams(chapter-3) where definition of one stream depended on definition of another and vice versa. Ex-4.19 is quite interesting and helps in understanding the difference in these ideas.

Then finally we **optimize** our evaluator by separating the evaluation into **analysis** and execution part. The problem with the original evaluator that every time we encounter a procedure we re-evaluate each of its experession by checking whether it is `if` or `set!` etc. Instead we can first analyze the procedure and check for once what are all the expression and create a *result* which abstracts evaluation of each expression. The point is this *result* just knows the expression type and just invokes the evaluation of that expression without checking the expression type. 

For eg: if a procedure contains two expression say `if` followed by `set!`, then our analyzed procedure will not check whether the next expression is `if` it just knows and evaluates the `if` and then it evaluates `set!` instead of checking whether that expression is `set!`.

Tip: Now the procedure object in environment is stored after analysis. Thus when a procedure in invoked then only evaluation of the procedure body occurs instead of analysis + eval like in earlier case.

#### Variations on a Scheme - Lazy Evaluation

We have seen, two forms of evaluation model for evaluating procedure arguments: 

- Applicative order, where arguments are evaluated when the procedure in applied.
- Normal order, where evaluation of arguments is delayed untill they are actually needed. This *mechanism* is called lazy evaluation while such languages are called normal order languages.

Then we modify our evaluator for normal order evaluation! This is simple to do, after implementing our own evaluator! The central idea is:

- We mark argument expressions as *thunks* when the procedure application is evaluated. This is called *delaying* the evaluation.
- When a **thunk** is evaluated, we unmark it and evaluate the actual expression. This is called *forcing* the evaluation.

Now, note that we have to do the second step recursively because, it is possible that a *thunk* also contains a thunk! So we keep evaluating an expression until the last *thunk* gets evaluated.
Also, our *thunk* evaluation should not harm *non thunks*. Thus we can always ask to evaluate an expression and if it is a thunk then it will be evaluated else it will be returned as such.

Note that we also need to capture the environment while *delaying* an expression because when it is evaluated it must be evaluated in the same environment where the procedure was applied!

{% highlight scheme linenos %}
(define (delay-it exp env)
  (list 'thunk exp env))

(define (thunk? obj)
  (tagged-list? obj 'thunk))

(define (thunk-exp thunk) (cadr thunk))
(define (force-it obj)
  (if (thunk? obj)
      (actual-value (thunk-exp obj) (thunk-env obj))
      obj))
{% endhighlight %}

Apart from above change, there are other changes in procedure application for *delaying* the evaluation of arguments.

We see some interesting exercises(4.27, 4.30) to demonstrate the problems when mixing *assignments* and *lazy order* evaluation.

Later, we also see using normal order evaluation to implement lazy lists(or lazier lazy list!). They are similar to streams but a bit are *extra lazy* as in streams we atleast evaluate the first argument in `cons` and delay the other argument while in *lazy lists* both arguments will be delayed.

These lazy lists provide atleast one advantage over the streams - to define circularly dependent things. We saw in chapter-3 streams that even using streams circular dependent definitions were not allowed in MIT scheme. For eg:

{% highlight scheme linenos %}
(define (solve f y0 dt)
  (define y (integral dy y0 dt))
  (define dy (map f y))
  y)
(define (integral integrand initial-value dt)
  (define int
    (cons initial-value
          (add-lists (scale-list integrand dt)
                    int)))
  int)
{% endhighlight %}

Here y depends on dy and vice versa. This is possible to define such definitions with lazy lists.

#### Variations in Scheme - Nondeterministic Computing

This was a more difficult and in authors words - *profound* - change that we do in our evaluator compared to the previous normal order evaluation change.

Tip: To understand the implementation we should see how it is used but with some idea that how it is going to be implemented later. Thus I think first read the complete section without attempting any exercises and then re-read and while attempting exercises. 

I found this section unique in the sense that exercises are easier than the contents!

The central idea of non-deterministic computing is to provide a way where we say *what* instead of *how* while writing programs. For example there are logical puzzles like(from the book):

> Baker, Cooper, Fletcher, Miller, and Smith live on different floors of an apartment house that contains only five floors. Baker does not live on the top floor. Cooper does not live on the bottom floor. Fletcher does not live on either the top or the bottom floor. Miller lives on a higher floor than does Cooper. Smith does not live on a floor adjacent to Fletcher's. Fletcher does not live on a floor adjacent to Cooper's. Where does everyone live?

We can solve such puzzles by telling the *constraints* in our program instead of writing code on how to work our those constraints as follows:

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (let ((baker (amb 1 2 3 4 5))
        (cooper (amb 1 2 3 4 5))
        (fletcher (amb 1 2 3 4 5))
        (miller (amb 1 2 3 4 5))
        (smith (amb 1 2 3 4 5)))
    (require
     (distinct? (list baker cooper fletcher miller smith)))
    (require (not (= baker 5)))
    (require (not (= cooper 1)))
    (require (not (= fletcher 5)))
    (require (not (= fletcher 1)))
    (require (> miller cooper))
    (require (not (= (abs (- smith fletcher)) 1)))
    (require (not (= (abs (- fletcher cooper)) 1)))
    (list (list 'baker baker)
          (list 'cooper cooper)
          (list 'fletcher fletcher)
          (list 'miller miller)
          (list 'smith smith))))
{% endhighlight %}

As we can see above the code is not completely avoiding *how* but still it is far closer to *what* then *how*.

The central concept and the construct that we implement and use here is `amb`(I think the name amb came from *ambiguous*). The `amb` expression can return any of the value passed to it but only one at a time. That is to say that if the first value *failed* then we *backtrack* and try another value.

Note that when there are no expressions inside `amb` like `(amb)` then it means it is a dead end and we should back track to try other possible branches.

The other important concept is `require` which we implement as a procedure on the top of our language using empty `amb` or `(amb)`. It takes a predicate and *fails* if that predicate is not true. Thus when a `require` fails we backtrack and try other possible branch points unless/until there are no other possible branch points.

Again, now the main contruct that can give us different branch point is `amb`. Thus when an expression fails we backtrack until there is another `amb` which can give alternate value. Then from that `amb` expression we again evaluate the expressions following that `amb` but now we have a new value that we use.

For example, in the above program, first `amb` assigns `1` to each of the variables `baker`, `cooper`..., `smith`. Now when a constraint `require` fails, the evaluator backtrack to the last `amb` and assign `smith` to 2. Now we again proceed and check the constraints. If a constraint is failed again, then we again backtrack and `smith` gets 3 and proceed.

Now when all the values in `smith` had been tried and we still failed, then we backtrack to `miller`, which then assigns `miller` the value 2 and proceed. Note that now in the next statement we assign `smith` 1 and proceed further. Now when we fail then we back track and `smith` gets `2`(note `miller` is 2 now).

Thus we try all the combinations of `baker`, `smith` until we get success or failed after exhausting all possiblities and back track to `fletcher` and then proceed!

Thus the evaluator stops when either all the possibilities are tried or some possibility has yielded an outcome.

In a way `amb` provides an impression of `streams` but with a difference. Quoting from the book:

> It is instructive to contrast the different images of time evoked by nondeterministic evaluation and stream processing. Stream processing uses lazy evaluation to decouple the time when the stream of possible answers is assembled from the time when the actual stream elements are produced. The evaluator supports the illusion that all the possible answers are laid out before us in a timeless sequence. With nondeterministic evaluation, an expression represents the exploration of a set of possible worlds, each determined by a set of choices. Some of the possible worlds lead to dead ends, while others have useful values. The nondeterministic program evaluator supports the illusion that time branches, and that our programs have different possible execution histories. When we reach a dead end, we can revisit a previous choice point and proceed along a different branch.

It is important to understand the cost of trying all the possibilities. There are ways when we can narrow down the possibilities, see exercise - 4.40, where the idea is we eliminate the impossible items as early as possible so that they won't be tried. For example if we know that `baker` can not be 5 then we can do this before even thinking of other variables like `fletcher` or `cooper`. Thus we eliminate all the combination when `baker` with value `5` is tried with different possiblities of other variables.

Some tips that may help in better understanding:

- The main construct that can give multiple values, one at a time, is `amb`.
- To support backtracking, every expression must have a way to go back or proceed further. This is done using `success` and `fail` two procedures which we pass to every expression when it is avaluated.
- If an expression is successfully evaluated then we proceed further else we go back using fail.
- Check notes in solution of ex-4.78 for few more subtle details.

I think thats it!

Parsing english language section is interesting but can be skipped without losing any concepts apart from ideas for parsing a natural language.

#### Logical Programming

Things get interesting further!

- Mathematics is about "what" as described in first chapter and programming is about "how". Higher order languages helps us to move a bit close to "what" by freeing us from many details of "how"
- Quoting from book: *Expression oriented languages are based on the "pun" that an expression that describes the value of a function may alos be interpreted as a means of computing that value.* Because of this most programming languages are strongly biased towards unidirectional style(computations with well defined inputs and outputs.)
- Remember the constraint based program in the book for coverting temperature units - departs from the unidirectional approach. Similarly non-dterministic computing also departs from that approach as each expression can have more than one value and different paths are tried to arrive at a solution. Thus in deterministic programming we are dealing with relations(mathematical relations) rather than single valued functions.
- Logic programming extends this idea further by combining the relational vision of programming witha powerful kind of symbolic pattern matching called *unification*.
- This approach is certainly not for every programming but when it works, it can be quite powrful. For example, a single "what is" can solve multiple problems of "how to". Let's say we want to append two lists. We can describe "what is" as:
  - An empty list and any other list `y`, append to form `y`.
  - For any `u`, `v`, `y` and `z`, If `v` and `y` append to form `z` then `(cons u v)` and `y` append to form `(cons u z)`.
  - The program will look like:
  
{% highlight scheme linenos %}
(rule (append-to-form () ?y ?y))
(rule (append-to-form (?u . ?v) ?y (?u . ?z))
	  (append-to-form ?v ?y ?z)) ;if v and y append to form y then rule conclusion holds true.
{% endhighlight %}

- As we can see from the above rule, the idea is if there exist some values for which the rule body(second expressinon in the rule) holds true then rule conclusion is also true(first expression in rule).

- Notice that for above code if we query `(append-to-form (1 2 3) (4 5 6) ?x)` would return `(append-to-form (1 2 3) (4 5 6) (1 2 3 4 5 6))`. But it will also work for query `(append-to-form (1 2 3) ?x (1 2 3 4 5))` and returns `(append-to-form (1 2 3) (4 5) (1 2 3 4 5))`.

- Unlike the above example, It might not always possible that "what" can be used to deduce "how".

- Logic programming excels in quering information from databases. In this section a simple logic evaluator is built that works as described in the above example. It can query data from databases too. For example if database contains records like `(job <person-name> <job-title>)` then we can query all people working as `computer programmer` as `(job ?x (computer programmer))`.

- If we want to query all the jobs computer related then `(job ?x (computer . ?x))`. Notice the ".", which matches the remaining part. If "." is removed then a job like `(computer programmar analyst)` won't match as `analyst` can not match to anything. But with ".", `?x` gets matched to `(programmer analyst)`.

- We can have `and`, `or` and `not` for example `(and (lives-in ?x (new delhi)) (job ?x (computer . ?y)))`. Notice that `?x` is same to match the names.

- I find this query language similar to sql and it also gives some idea how sql can be implemented in a very basic way.

- There are three subsections in the book, first section descibes using the query language, second describes the *design* of query language evaluator and a discussion that why *logic programming* is not mathematical logic, and third section describes the implementation of the query language evaluator.

- The central idea in designing this system is unification. It is a kind of pattern matching. A simple example is to execute query `(job ?x (Computer . ?y))` we search in the records in the databse(in-memory list of records) and look for patterns that match this query. For example the database record `(job (Bitdiddle Ben) (Computer Programmar))` will match by binding `?x` to `(Bitdiddle Ben)` and `?y` to `(Programmar)`. But the database record `(job (William Oliver) (Big Wheel))` won't match as `Big` is not equal to `Computer`.

- Things can go much more complicated than above example when we might want to match from both sides. Like `(?x b c)` and `(a b ?y)` can result in a match by binding `?x` to `a` and binding `?y` to `c`.

- Apart from pattern match, there is infrastructure how to bring those records and the rules in database to match against the query. In the book this infra is done using *streams* but it can also be implemented using non-deterministic evaluator(check ex-4.78).

- I think for a quick overview, read the design part of this section and leaving the implementation part.

- We draw parallels between the normal programming and logic programming evaluator as there are three main ideas:
  - A way to write simple queries. For example writing `(job ?x ?y)`.
  - A way to combine the these queries using `and` and `or` analogous to combining statements in normal langauge.
  - A way to build abstractions. Here we have *rules* analogous to *procedures*.

- These parallels can be seen in the design and implementation too. The design of *rules* evaluation is similar to *procedure* evaluation.


- We might start thinking that logic programming is mathematical logic. The book contains a great explanation for why it is not so. The main point is our clauses are procedural! For example when evaluating `(and <exp2> <exp2>)`, we first evaluate `exp1` and if it passed for a certain data then we check the second expresion on the same data. Thus there is a direction unlike in mathematical logic. Then we also see that `not` is also not exactly like mathematical logic *not* but works only on the results from the previous query it is combined with.
- The point is logic programming is powerful enough to look like mathematical logic but weak enough so that we can optimize and write code in it.

- This section can take more than one or two readings to get the *feel* of the ideas. Most of the exercises are easier than understanding the contents(leaving ex-4.67 and last few execises 4.77, 4.78, 4.79).

------

#### Interesting exercises:

In section 4.1, almost all the exercises seems to be conceptual and important.

Simple Evaluator(Sec 4.1): 4.1, 4.3, 4.4, 4.6, 4.9, 4.11, 4.12, 4.14, 4.15, 4.16, 4.19, 4.20, 4.21, 4.22, 4,23

Lazy Evaluation: 4.27(Conceptual), 4.30(Conceptual), 4.31(Conceptual and Interesting - this asks to provide constructs such that user can choose normal order or applicative order while defining procedures).

Lazier lazy lists: 4.32(Conceptual), Exercises 4.33 and 4.34 can turn out quite difficult to implement if our concepts for implementation are not clear enough. So, they are good exercises but not so important for understanding the main concept(which is lazy list). Also, they can be quite fun/frustrating :)

Note that through 4.34, we can see mixing host language and implementation language for a task can turn out quite difficult. It can also turn out easy if the implementation/syntax concepts are very clear but even a small bug can take hours to figure out!

Nondeterministic programming(usecases): 4.35(Conceptual), 4.39(Conceptual), 4.40(Conceptual), 4.41 and 4.44 are interesting to see the difference between normal scheme version and using `amb` or non-dterministic computing. Do atleast 4.44 to see the difference. If reading english parsing, then do 4.47 as its a good conceptual exercise.

Nondeterministic programming(implementation): 4.50(conceptual, not important), Atleast do 4.51 and 4.52 as both can help in better understanding of the implementation.

Logic programming(uses): 4.55, 4.56, 4.57, 4.63, 4.68, 4,69(uses 4.63) - practice. Conceptual - 4.64, 4.66

Logic programming(implementation): 4.70 to 4.75

Logic programming(moderate difficult, challenging): 4.67, 4.76, 4.77, 4.78. I think 4.67 and 4.78 are worth trying and can be fun. 4.79 i have not done as it might take a lot of time(may be weeks or even months!).
