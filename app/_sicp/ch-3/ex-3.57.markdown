---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.57"
order: "057"
date: 2018-02-17 
---

For the memoized part, to compute $$\,n^{th}\,$$ term, we need $$\,n^{th} - 2\,$$ additions. Thus it is linear in time complexity.

Without memoization, to compute $$\,n^{th}\,$$ term, the `add-streams` take two fib streams(`fib` and `(cdr fib)`) and add their first term. Or we add $$\,fib_{n-1} + fib_{n}\,$$. Now the problem is that unlike in the memoized part this sums are recomputed again! So in a way we are back to our resursive version of fibs that we saw [here][sicp-ch3]. There are already saw that this is a exponential time complexity.

[sicp-ch3]: https://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.2
