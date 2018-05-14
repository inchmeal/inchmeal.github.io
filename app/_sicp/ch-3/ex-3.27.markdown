---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.27"
order: "027"
date: 2018-01-05 
---

This is little tricky to understand. Lets break it down piece by piece:

1. `memoize` is straightforward. 
	- It takes a procedure 'f' and returns another procedure.
	- The returned procedure is bound to the environment created by the call to `memoize`, where a *table* was created.
	- Thus returned procedure has access to this table.
	- This returned procedure takes an argument `x` and first checks, if there value available in the *table* for the *key* x. If yes, it returns the value.
	- If not, it calls the procedure `f` with `x` as an argument and saves the result in the table as well as returns the result. Note that `f` is also available to this returned procedure by the environment.
	- Thats it!

2. `memo-fib` is nothing but the procedure returned by `memoize`. And `f` is the lambda function that we passed to `memo-fib` and which contains the code for fibonacci. 
	- It may seems a bit tricky that `f`(the lamda function we passed) is itself calling `memo-fib`.
	- But this is nothing but indirect recursion! 'memo-fib' --calls--> f(the lambda function passed to memoize) --calls--> 'memo-fib'.
	- As we can see the recursion calls are for lower values of `n` and we have a base case at n = 0 and 1.
	- The *important* thing to note that all these recursive calls of `memo-fib` are executed in the environment where *parent* environment points to the environment in which `memo-fib` was created.
	- Well, technically `mem-fib` is created in global environment. When speaking of `memo-fib`, I am referring to the procedure which the variable `memo-fib` points to. Thus even if the `mem-fib` variable belongs to global-env the procedure it points to is created/bound to a different environment. 
	- Thats it!


Now th last past - *Would the scheme still work if we had simply defined memo-fib to be (memoize fib)?*

No. 

Here things will not work because `fib` itself calls `fib` recursively thus no table lookups happen. 
