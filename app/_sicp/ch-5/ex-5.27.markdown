---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.27"
order: "027"
date: 2018-05-03 
---

As in last exercise, let's first see some results for various values of `n`:

{% highlight scheme linenos %}
;;; EC-Eval input:
(factorial 1)

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:

(total-pushes = 16 maximum-depth = 8)
;;; EC-Eval value:
1

;;; EC-Eval input:
(factorial 2)

(total-pushes = 48 maximum-depth = 13)
;;; EC-Eval value:
2

;;; EC-Eval input:
(factorial 3)

(total-pushes = 80 maximum-depth = 18)
;;; EC-Eval value:
6

;;; EC-Eval input:
(factorial 4)

(total-pushes = 112 maximum-depth = 23)
;;; EC-Eval value:
24

;;; EC-Eval input:
(factorial 5)

(total-pushes = 144 maximum-depth = 28)
;;; EC-Eval value:
120

;;; EC-Eval input:
(factorial 6)

(total-pushes = 176 maximum-depth = 33)
;;; EC-Eval value:
720

;;; EC-Eval input:
{% endhighlight %}

Clearly the formulae is:

$$\, \text{maximum-depth} = 5n+3 \,$$

and

$$\, \text{total-pushes} = 32(n-1) + 16 = 32n - 16 \,$$ 

Thus we get the following table:

|---------------------|---------------------------------------|------------------------------------------|
|                     | Maximum depth                         | Number of pushes                         |
|---------------------|---------------------------------------|------------------------------------------|
| Recursive factorial | $$\, \text{maximum-depth} = 5n+3 \,$$ | $$\, \text{total-pushes} = 32n - 16 \,$$ |
| Iterative factorial | $$\, \text{maximum-depth} = 10 \,$$   | $$\, \text{total-pushes} = 35n + 29 \,$$ |
|---------------------|---------------------------------------|------------------------------------------|
