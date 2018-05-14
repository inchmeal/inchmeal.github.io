---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.29"
order: "029"
date: 2018-05-03 
---

{% highlight scheme linenos %}
;;; EC-Eval input:
(fib 0)

(total-pushes = 16 maximum-depth = 8)
;;; EC-Eval value:
0

;;; EC-Eval input:
(fib 1)

(total-pushes = 16 maximum-depth = 8)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 2)

(total-pushes = 72 maximum-depth = 13)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 3)

(total-pushes = 128 maximum-depth = 18)
;;; EC-Eval value:
2

;;; EC-Eval input:
(fib 4)

(total-pushes = 240 maximum-depth = 23)
;;; EC-Eval value:
3

;;; EC-Eval input:
(fib 5)

(total-pushes = 408 maximum-depth = 28)
;;; EC-Eval value:
5

;;; EC-Eval input:
(fib 6)

(total-pushes = 688 maximum-depth = 33)
;;; EC-Eval value:
8

;;; EC-Eval input:
(fib 7)

(total-pushes = 1136 maximum-depth = 38)
;;; EC-Eval value:
13

;;; EC-Eval input:
(fib 8)

(total-pushes = 1864 maximum-depth = 43)
;;; EC-Eval value:
21

;;; EC-Eval input:
(fib 9)

(total-pushes = 3040 maximum-depth = 48)
;;; EC-Eval value:
34

;;; EC-Eval input:
{% endhighlight %}

(a) Clearly this is $$\,\text{maximum-depth} = 5n + 3 \,$$ 

(b)

First lets prove that $$\, S_n = S_{n-1} + S_{n-2} + k \,$$, where $$\, k \,$$ is a constant. 

For $$\, n \ge 2 \,$$:

If we look at the procedure, computing $$\, fib_n \,$$ requires two things:
- Execution of comparision inside `if`.
- computing $$\, fib_{n-1} \,$$  and $$\, fib_{n-2} \,$$. 
- After computing them, we add them together. 

Since the first and third steps are independent of `n`, it follows that the number of pushes that occur in these steps is some constant number.

Thus the total pushes we need is this constant number and the pushes that happen because of computing $$\, fib_{n-1} \,$$ and computing $$\, fib_{n-2} \,$$.

Thus $$\, S_n = S_{n-1} + S_{n-2} + k \,$$ where $$\, k \,$$ is the constant number of pushes that happen irrespective of `n`.

We can easily compute the value of $$\, k \,$$  from the data we have above. It gives us $$\, k = 40 \,$$.

Now, we shall prove that $$\, S_n = a \cdot fib_{n+1} + b \,$$.

We shall prove it using mathematical induction.

Suppose that the above formulae is correct for all integers $$\, m \,$$ such that $$\, 2 \le m \lt n \,$$. Now if we can deduce that this is true for $$\, m = n \,$$ too, then this will complete the proof.

For case $$\, m = n = 2 \,$$:

$$\, S_2 = a \cdot fib_3 + b = 2a + b \,$$. Since $$\, S_2 = 72 \,$$, for this to be true, we must have $$\, 2a + b  = 72 \,$$(putting the value of $$\, fib_3 \,$$ ).

Similarly, for case $$\, m = n = 3 \,$$, we must have $$\, 3a + b = 128 \,$$.

Now for the case $$\,  m = n \,$$ and $$\, m \ge 4 \,$$:

From the above we know that $$\, s_m = s_{m-1} + s_{m-2} + k \,$$. Since $$\, m - 1 \,$$  and $$\, m - 2 \,$$ lies between $$\, 2 \,$$ and $$\, n \,$$, by our assumption we have:

$$\, S_{m-1} = a \cdot fib_m + b \,$$ and $$\, S_{m-2} = a \cdot fib_{m-1} + b \,$$. Putting them in formulae $$\, S_m = S_{m-1} + S_{m-2} + k \,$$, we get:

$$\, S_m = a \cdot ( fib_m + fib_{m-1}) + 2b + k \,$$, which further simplifies to: 

$$\, S_m = a \cdot fib_{m+1} + 2b + k \,$$. Now if $$\, 2b + k = b \,$$, then the theorem will be correct for this case too. 

Thus from all above cases, our theorem will be true if and only if there exists value(s) of $$\, a \,$$ and $$\, b \,$$ such that all of the following are true:

- $$\, 2a + b = 72 \,$$.
- $$\, 3a + b = 128 \,$$.
- And, $$\, 2b + k = b \,$$.

We already know $$\, k = 40 \,$$.  Solving them we find that $$\, a = 56 \,$$ and $$\, b = -40 \,$$. Thus there exist values of $$\, a \,$$ and $$\, b \,$$ which satisfy all of the above equations, it follows that the theorem is correct!

-----

Comments:

It's one thing to prove that a formulae is correct and entirely another thing to come up with a formulae. This exercise requires only to prove the correctness of the formulae presented in it. I doubt that I could have come up with this formulae myself!

