---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.33"
order: "033"
date: 2018-05-08 
---

This exercise is kind of interesting after attempting ex-5.31.

The difference between two versions of `factorial` is just the order of operands:

`(* n (factorial-alt (- n 1)))` vs `(* (factorial (- n 1)) n)))`.

So, to check the performance difference, we can think similar to ex-5.31, that what saves and restores can be avoided in first case vs the second case.

But, There is one important thing we should consider which is different here from ex-5.31. Now we are comparing the outputs from compiler! And the compiler *unlike* evaluator, causes the evaluation of arguments from right to left instead of left to right.

#### First consider the `factorial-alt` version:

- It evaluates arguments to `*` from right, thus evaluating `(factorial-alt (- n 1))`. Since this is a procedure, this can change `env` which will be needed to evaluate the next argument, so we save `env`. This is apparent from the code generated:

{% highlight scheme linenos %}
;;....
	(save continue)
	(save proc)
	(save env)
	(assign proc (op lookup-variable-value) (const factorial-alt) (reg env))
	(save proc)
	(assign proc (op lookup-variable-value) (const -) (reg env))
	(assign val (const 1))
;;....
{% endhighlight %}

- Now, we evaluate the next argument which is `n`. Since this is just a variable, it does not change any registers apart from `val`. Thus we can avoid saving and restoring register `argl` while evaluating this. This is again apparent from the code generated:

{% highlight scheme linenos %}
;;....
	(assign argl (op list) (reg val))
	(restore env)
	(assign val (op lookup-variable-value) (const n) (reg env))
	(assign argl (op cons) (reg val) (reg argl))
;;....
{% endhighlight %}

#### Now consider the orginal `factorial` version:

- Here, we first evaluate `n`. Since this can not change `env`, we do not save or restore `env` as is apparent from the code generated:

{% highlight scheme linenos %}
;;....
   (assign proc (op lookup-variable-value) (const *) (reg env))
   (save continue)
   (save proc)
   (assign val (op lookup-variable-value) (const n) (reg env))
   (assign argl (op list) (reg val))
   (save argl)
   (assign proc (op lookup-variable-value) (const factorial) (reg env))
;;....
{% endhighlight %}

- Now, we evaluate `(factorial-val (- n 1))`. Even though this can change `env` we don't need to save n restore `env` because this is last argument and we do not need env after this argument. *But* here we need to save and restore `argl` since this can change `argl`. This can also be seen in the generated code shown above.

Thus in the first case we save and restore `env` while in the second case we save and restore `argl`. Thus the number of operations in both cases turn out to be equal!

So, they are equally efficient.
