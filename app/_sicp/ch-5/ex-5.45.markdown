---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.45"
order: "045"
date: 2018-05-12 
---


#### (a)

Let's first look at some results:

{% highlight scheme linenos %}
;;; EC-Eval input:
(factorial 1)
(total-pushes = 7 maximum-depth = 3)
;;; EC-Eval value:
1
;;; EC-Eval input:
(factorial 2)
(total-pushes = 13 maximum-depth = 5)
;;; EC-Eval value:
2
;;; EC-Eval input:
(factorial 3)
(total-pushes = 19 maximum-depth = 8)
;;; EC-Eval value:
6
;;; EC-Eval input:
(factorial 4)
(total-pushes = 25 maximum-depth = 11)
;;; EC-Eval value:
24
;;; EC-Eval input:
(factorial 5)
(total-pushes = 31 maximum-depth = 14)
;;; EC-Eval value:
120
;;; EC-Eval input:
(factorial 6)
(total-pushes = 37 maximum-depth = 17)
;;; EC-Eval value:
720
{% endhighlight %}

From the data above($$\, n \ge 2 \,$$ ), clearly we have:

$$\, \text{total-pushes} = 6n + 1 \,$$

and,

$$\, \text{maximum-depth} = 3n - 1 \,$$ 

Lets compare them:

|-------------------------|---------------------------------------|---------------------|
|                         | total-pushes                          | maximum-depth       |
|-------------------------|---------------------------------------|---------------------|
| special-purpose         | $$\, 2(n-1) \,$$                      | $$\, 2(n-1) \,$$    |
| interpreter             | $$\, 32n-16 \,$$                      | $$\, 5n+3 \,$$      |
| compiler                | $$\, 6n+1 \,$$                        | $$\, 3n-1 \,$$      |
| compiler vs interpreter | $$\, \frac 6 {32} = \frac 3 {16} \,$$ | $$\, \frac 3 5 \,$$ |
| special vs interpreter  | $$\, \frac 2 {32} = \frac 1 {16} \,$$ | $$\, \frac 2 5 \,$$ |
| special vs compiler     | $$\, \frac 2 6 = \frac 1 3 \,$$       | $$\, \frac 2 3 \,$$ |
|-------------------------|---------------------------------------|---------------------|


#### (b)

Looking at the intructions generated, one big difference is handling of operations `-`, `=` and `*`. 

For each of these operations compiled code do extra saves and restores and specially in the case like `=`, where no registers(except flag but which is internal so doesnt count) gets modified!

Well, what if we can use primitive operations as suggested in ex-5.38!

With that change, here are the stats:

{% highlight scheme linenos %}
;;; EC-Eval input:
(factorial 1)
(total-pushes = 5 maximum-depth = 3)
;;; EC-Eval value:
1
;;; EC-Eval input:
(factorial 2)
(total-pushes = 7 maximum-depth = 3)
;;; EC-Eval value:
2
;;; EC-Eval input:
(factorial 3)
(total-pushes = 9 maximum-depth = 4)
;;; EC-Eval value:
6
;;; EC-Eval input:
(factorial 4)
(total-pushes = 11 maximum-depth = 6)
;;; EC-Eval value:
24
;;; EC-Eval input:
(factorial 5)
(total-pushes = 13 maximum-depth = 8)
{% endhighlight %}

Thus we get:

$$\, \text{total-pushes} = 2n + 3 \,$$

and,

$$\, \text{maximum-depth} = 2n - 2 \,$$ 

And these are of the same order as the compiled version!

Are such optimizations always possible? I dont think so. Consider the cases when we have non primitive operations(compound procedures) similar to `=`, or `*` which does modify only a few registers. 

I think it is quite difficult to deduce that which registers a compound procedure modifies and thus avoiding there save and restores.

Also, there are things that we just can not do inside a compiler. For eg:

- A compiler either does a left to right evaluation or a right to left evaluation but not both at the same time. In some cases, one order might be better then other as it will require fewer number of saves and restores. We can always take advantage of this in special purpose machine.


-------

#### Comments

Things have finally all came into a complete story!

I was wondering whether my solutions related to open code changes(ex-5.38) and compile time environment will work correctly. Turns out they did!

There are a few things to do to make those changes work:

(All the changes are in same file `ch5-eceval-compiler.scm`)

- Add following lines under `eceval-operations` in the mentioned file:

{% highlight scheme linenos %}
   ;;for open-code ex-5.39+
   (list 'lexical-address-lookup lexical-address-lookup)
   ;;operations for testing ex-5.38 as machine intructions
   (list '+ +)
   (list '= =)
   (list '- -)
   (list '* *)
{% endhighlight %}

- Also, add the following new registers(change is marked with `;;;`) for open code arguments:

{% highlight scheme linenos %}
(define eceval
  (make-machine
   '(exp env val proc argl continue unev
	 compapp			;*for compiled to call interpreted
	 arg1 arg2    ;;;
	 )
   eceval-operations
{% endhighlight %}

- Add following change in file `ch5-compiler.scm` in procedure `compile-and-go`:

{% highlight scheme linenos %}
(compile expression 'val 'return the-empty-cenv)  ;; passed new argument
{% endhighlight %}

Other changes and their locations I have mentioned in ex-5.45
