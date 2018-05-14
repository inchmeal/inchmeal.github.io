---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.32"
order: "032"
date: 2018-02-12 
---



I could not find a way to print contents of agenda properly - printing the name of procedures and the evironment values in those procedure - So, I am using a dry-run :)

Remember we have following initial values:

i1: 0    
i2: 1    
o1: 0    

Also at this point agenda is empty:

**Agenda:**

0: empty

#### First In First Out - Queue

I will show items in agenda correspnding to a time-segment in a list such that elements are added in the beginning and removed from the end.

Now set: i1 - 1

**Agenda:**

3: (set-signal! o1 1)

Now set: i2 - 0

**Agenda:**

3: (set-signal! o1 0), (set-signal! o1 1)

(propagate)

After first step of propagate(items will be **removed from the end** ):

**Agenda:**

3 (set-signal! o1 0),

After second step of propagate:

**Agenda:**

3 empty

And at this point o1 is set to 0. This is what should be ideally.


#### Last In First Out

Again we assume that we start from the following state:

i1: 0    
i2: 1    
o1: 0    

Also at this point agenda is empty:

**Agenda:**

0: empty

Now set: i1 - 1

**Agenda:**

3: (set-signal! o1 1)

Now set: i2 - 0

**Agenda:**

3: (set-signal! o1 0), (set-signal! o1 1)

(propagate)

After first step of propagate:(Note: now items will be **removed from the beginning**)

**Agenda:**

3: (set-signal! o1 1)


After second step of propagate:

**Agenda:**

3 empty

And at this point o1 is set to 1. Which is **wrong!**

To summarise the problem in LIFO:

We are taking actions based on older values **after** taking actions based on latest values - which ofcourse will cause inconsistency because the actions triggered by older values are executed later and at the point of this execution we are *overriding* the values set by the latest/newer values.


One more thing to note is - what if we change the order in which values are set for i1 and i2 i.e. instead of first setting i1 = 1 and then i2 = 0, we first set i2 = 0 and then set i1 = 1. Will it cause queue approach to work or will it cause list approach to work?

Well, the answer is queue approach will still work because we always execute actions based on the latest values in the wire. Thus it does not matter in which order we set them.
