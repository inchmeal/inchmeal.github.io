---
layout: sicp
title:  "SICP, summary and notes"
description: "SICP, Chapter - 3 - Notes, Modularity, Objects, and State"
chapter: 3
chapterName: "Modularity, Objects, and State"
solution: "notes"
order: "000"
date: 2017-12-29
tags: sicp code
---

We want our programs to be *modular* so that they can be divided into coherent parts that can be separately developed and maintained. One powerful way to do this is to model the programs based on the structure of the system being modeled. This is based on the premise/hope that when we do this then extending the program does not require any structural changes in the system but only addition of the correspnding analogs of the new things/objects we want our system to extend with.

There are two world views of the structure of the systems: 

- One organisational strategy is to view the system as a collection of objects.

- Another way is based on streams of information that flow in the system.

Both approaches have their own challenges - With objects the problem is how an object can change and yet maintain its identity. This causes to move away from the substitution model and we need a different model for evaluation. For stream approach we need to decouple simulated time in our model from the order of the events that take place in the computer during evaluation.

#### Object has state

We view the world consisting of many independent objects and each having their states which change over time. But in general objects are not completely independent and they influence the states of each other by interactions. Or we have subsystems in which objects in one subsystem are changing the states of each other or tightly coupled but other subsystems.

Thus we decompose our sytem into computational objects that model the actual objects of the system and each computational object have local state variables describing the actual object's state. We need a way to change these local state variables - *assignment*.

To change the variable special form `set!` is used for eg: `(set! balance (- balance amount))`. Since this form do not return any value, we need another special form `(begin (exp-1) (exp-2) ... (exp-k))` to combine multiple expressions and return the result of last expression.

Introduction of assignment raises the problem of evaluating such programs using substitution model and a new model is needed to understand such programs - because when we simply substitute, the variables current value may have been changed in some earlier expression evaluated and we end up using old value.

There can be few variations on how we model such objects that change state. One straight forward way is:

{% highlight scheme linenos %}
(define (make-withdraw balance)
  (lambda (amount)
	(if (>= balance amount)
		(begin (set! balance (- balance amount))
			   balance)
		"Insufficient funds")))
{% endhighlight %}

Now we can create objects as `(define W1 (make-withdraw 100))` or `(define W2 (make-withdraw 200))`.

Another way is *message-passing*:

{% highlight scheme linenos %}
(define (make-account balance)
  (define (withdraw amount)
    (if (>= balance amount)
        (begin (set! balance (- balance amount))
               balance)
        "Insufficient funds"))
  (define (deposit amount)
    (set! balance (+ balance amount))
    balance)
  (define (dispatch m)
    (cond ((eq? m 'withdraw) withdraw)
          ((eq? m 'deposit) deposit)
          (else (error "Unknown request -- MAKE-ACCOUNT"
                       m))))
  dispatch)
{% endhighlight %}

#### Benefits of assignment

Without assignment an object local state can not be changed. If an object can not change its state then every time one uses this object then the user must pass the values of the previous state of this object. This makes it difficult for the external user to use this object.

For example in case of random number, if an implementation requires to remember the last number generated to generate the next number then the users of random-number generator will always require to pass the last number generated.

But with assignment this problem is resolved and object remembers its state. Thus the users do not need to remember the last number generated - thus making the program loosely coupled! This may tempt us to think of this strategy can help in making the program modular but :)

#### Pitfalls of imperative programming

First as we already saw, that it causes complexity in evaluation models - we can not use simple substitution model. Another more fundamental problem is associated with **sameness or change**.

Suppose we have two objects `W1` and `W2` created using the same initializer `(define W1 (create-account-with-balanace 100))`. Are these objects same? We can say this only in a context/time but can not be said in general that they are same(in context of assignment).

Referentially transparent language supports the concept of *equals can be substituted for equals*. But note that this can not be done in above case as equality/sameness is bound with context/time. Thus we can not determined effectively when objects can be substituted and how we can simplify expressions by substituting equivalent expressions.

It also becomes more difficult to how we check for equality? Two account with same balance are equal? Or Two variable *pointing to* same account are equal. In the former case - if we want to consider them equal then we need to be sure of the places where any of the two account is changed.

Also, it is more difficult to understand what is the meaning of *sameness*. Two rational numbers are same if both numerators and denominators are same and as soon as we change either numerator or denominator then it changes the rational number. But this is not the case with account - when the balance of an account is changed by withdrawing money - it remains the same account even after withdrawing money. Thus assignment/mutability introduces a more fundamental problem - where a compound data object has an *identity* that is something different from the pieces of which it is composed.

Quoting directly from book:

*This complication is a consequence, not of our programming language, but of our perception of a bank account as an object. We do not, for example, ordinarily regard a rational number as a changeable object with identity, such that we could change the numerator and still have the same rational number.*

Another problem is **order of assignment**, for example:

{% highlight scheme linenos %}
(set! counter (+ counter 1))
(set! product (* counter product))
{% endhighlight %}

Now, we need to be sure that which statement comes first. Consider when program gets bigger - this problem also becomes more difficult and a programmar must take care that he should use the value at appropriate place.

Now complement this problem with concurrent processes!

#### Environment model of execution 

We need a place - environment - where a variable can be stored and refered. Environment is a sequence of frames and a frame is a table structure holding name-value pairs. For eg: `(define x 3)` creates a bindng in the of `x` with `3`.

A new frame is created when any procedure is invoked/evaluated. The new frame points to the enclosing environment. Thus every frame points to an enclosing environment except the first one - which we call global environment - note that global environment will contain only one frame pointing to no other frame.

A procedure is a pair of name and its body - lambda expression. Procedure name is a variable whose value is just text containing the body of procedure. This text is accessed via this variable acting as a pointer. Note that unlike other variables - this variable's value is not stored in frame but stored somewhere else and accessed via this variable.

When programs starts executing by default a global enironment is created. Now when a procedure is invoked from this environment it creates a new frame with a pointer to the global environment. And if now again there is another procedure defined in this frame is invoked from this environment - then again a new frame is created with a pointer to the previous environment(note - its not global but the enclosing environment). 

Now if a variable is accessed in an environment - then its first looked in the last/top frame of an environment - if found value is returned, else the variable is looked up in the enclosing environment recursively till the value is found or global environment is reached - in that case error is reported. This method of variable lookup thus shadows the global/enclosing variables with the local variables if global/enclosing variable and local variable share the same name.

Note that when a new frame is created the enclosing environment is the one in which the variable containing the procedure name is bound.

And thats it! - Check figure 3.5 to get a clearer picture.
	
Now frames work just as the repository of Local state - I think this is simple to see - so skipping details.

#### Modeling with mutable state

Till now when we were working on data abstraction in chapter-2, we were using constructors and selectors. Now we have one more aspect - mutators - to change the state or local variables of the object.

There are few interesting examples discussed - Queue, Tables, Digital Simulator, and Constraints Propagation. They can be skipped - perhaps reading Digital Simulator is good learning that how states can help in managing abstractions of gates and how we combine multiple gates to create more complex circuits and simulation - its a good read. 

Constraint Propagation is also good read but can be skipped - The central idea is that if we have a farmulae like temperature unit converter : 9C = 5(F-32) then in general it requires two different implementations one when we have C and want to compute F and vice versa. But using the idea presented here there can be a single place with contraints specified. 

Both examples/ideas, Simulator and contraints propagation were new to me - specially the constraints one.

#### Concurrency: Time Is of the Essence

Two aspects of concurrency:

- To make programs more modular - in our effort to map the real world with our systems.
- To make programs more efficient or to utilize parallel computing.

Since this is a part of state chapter - only we talked about shared memory approach for dealing with concurrency. How the assignment has added complexity in normal single process(single threaded) programs because of enforcing the order in statements and how this complexity has multiplied in parallel executing processes.

The central idea was that assignment has introduced time in our programs - we want to know which operation executes first - the order.

If one is not familiar with mutex, semaphores, monitors then this section is a good introduction. However, approaches like message passing are not coverd yet - probably in a later section/chapter.

Also, I am not sure if MIT scheme provides all the libraries to help executing the code and exercises in this section - Perhaps this library can help - [mit-concurrency-lib][mit-lib] - which I got to know from [stack-overflow][stack-link]. I tested only one or two programs using it but later did not use it as it was quite time consuming to test the parallel execution.

There is a similarity pointed out in the last part of this section with the Theory of Relativity. The complexity in our system is because of dealing with time and state for communicating between various procedures to establish an order - is somewhat similar to Theory of Relativity - where- Speed of light is a fundamental constant connecting two entities time and space. So perhaps we might encounter a similar fundamental idea(like speed of light connects time and space) in dealing with time and state.

#### Streams

I learned streams first time. It's a brilliant approach. Too bad for me to learn about it this late - after a decade in programming!

As we saw assignment introduces an order or time in our programs. One statement can give different output at different time. Streams are another way to model our system to make it independent of time! Instead of make time part of our system - we can define our variables, say x, in terms of time based procedures, like x(t). 

Now we no longer need to track the order or time to know a value of a variable. But we just ask the value for a particular time. Awesome!

How do we do it - streams - which contain an ordered set of events/values and we can go as further in it as we want to get the value for a particular time. The streams are just lists which contain values for the entire time history.

Streams are are nothing special but just **delayed lists**. Ofcourse we should *not* compute all values unless they are needed. Thus we have delayed evaluation and the next element in the list is not evaluated unless it is accessed. Also to avoid re-evaluation we do memoization so that when same element is accessed again, we just return the stored value.


An important point to understand is that *mixing* the streams(or more accurately delayed evaluation) with assignment is a recipe of disaster. See ex-3.51, 3.52. In book's own words:

*Unfortunately, including delays in procedure calls wreaks havoc with our ability to design programs that depend on the order of events, such as programs that use assignment, mutate data, or perform input or output.*

Delayed evaluation gives us a powerful way and even we can sort of have **Infinite Streams**. In book, it is shown how to implement **infinite series**(eg: power series) using Infinite Streams. This is quite powerful way of doing things and I can not imagine such elegant code for writing the series(ex-3.59):

{% highlight scheme linenos %}
(define exp-series
  (cons-stream 1 (integrate-series exp-series)))
{% endhighlight %}

Try doing some stream manipulations like adding two streams, scaling a stream etc.

There is an example where we find square-root of a number using streams for performing iterations. The further we go down the stream, more accurate the results get. 

Another way to look at streams: *computational analogs of signal processing systems*. We can model signal processing systems using streams. 

We can also use streams to implement signal processing systems with loops. The problem is the one definition of stream may depend on another stream not yet defined. For eg: The not yet defined stream have first element available but requires a stream defined earlier to compute the next element. For example, to solve first order differential equation: $$\, f(y) = \frac {dy} {dt} \,$$, we have the following procedure:

{% highlight scheme linenos %}
(define (solve f y0 dt)
  (define y (integral (delay dy) y0 dt))
  (define dy (stream-map f y))
  y)
{% endhighlight %}

Here `y` depends on `dy` and `dy` depends on `y`! Many implementations of scheme(including MIT scheme) do not provide any direct way of writing such definitions.

Note the use of `delay` in the above procedure. This way we can *delay* the evaluation of arguments, we call this as *delayed argument*. This is actually the same thing as *normal order evaluation* that we learned in chapter-1. But in general, most languages do not provide normal(delayed) order evaluation, so we need constructs like `delay` to implement `delayed argument`.

Well, we may wonder here why not have *normal order evaluation* by default instead of using delayed arguments. The problem is assignment and delay do not go well together as noted in ex-3.52.

Now, it may seems like streams solve all the problems and functional programming is the way to go! Read this section: **A functional-programming view of time** - which shows with an example  that while dealing with concurrency in a shared bank account, streams do not solve the problem of time completely and we again get into the problem of ordering. Apart from that, in my opinion, the other issue is of performance. Defining such powerful abstractions are indeed great for the programmar but the compiler may not produce efficient code.

To summarize, let me copy the last paragraph directly from the book:

*We began this chapter with the goal of building computational models whose structure matches our perception of the real world we are trying to model. We can model the world as a collection of separate, time-bound, interacting objects with state, or we can model the world as a single, timeless, stateless unity. Each view has powerful advantages, but neither view alone is completely satisfactory. A grand unification has yet to emerge.*

#### Interesting/Conceptual Exercises

Environment evaluation: 3.11, 3.16, 3.17

Modeling with mutable state: 3.23(deque)

If read the section of simulator - 3.32 is a short but conceptually good exercise.

For constraints propagation - 3.34 and 3.37 are also short but good.

For concurrency - 3.43(concurrency issues), 3.47(implementing mutexes), 3.48(deadlock)

Streams: 3.50(conceptual), 3.52(demonstrate issues when delay and assignment is combined)

Infinite Streams: 3.56, 3.59(power series), 3.63(important, conceptual), 3.66(a bit difficult but interesting), 3.67(short, practice), 3.70(interesting, practice).

Streams as signals: 3.74 to 3.76(short, practice), 3.78(differential equation and delayed argument).

Streams for modeling vs Objects for modeling: 3.81,3.82(both conceptual)

[mit-lib]: http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-23.html#%_sec_3.4.1
[stack-link]: https://stackoverflow.com/questions/13467753/implement-parallel-execute-in-scheme
