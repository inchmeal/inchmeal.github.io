---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.32"
order: "032"
date: 2018-05-08 
---

#### (a)

It's interesting to see the reduction in number of stack operations with this small change. 

Before checking the code, let's first see the number of stack pushes with and without this change:

(I tested this with `fib` example of ex-5.29):

|---|------------------------------------------------|------------------|
| n | Stack pushes without this change(from ex-5.29) | With this change |
|---|------------------------------------------------|------------------|
| 2 | 72                                             | 54               |
| 3 | 128                                            | 96               |
| 4 | 240                                            | 180              |
| 5 | 408                                            | 306              |
|---|------------------------------------------------|------------------|

Here are the changes:

{% highlight scheme linenos %}
;;.....
ev-application
  (save continue)
  (assign unev (op operands) (reg exp))
  (assign exp (op operator) (reg exp))
  (test (op variable?) (reg exp))
  (branch (label ev-appl-symbol-eval-dispatch))
  (save env)
  (save unev)
  (assign continue (label ev-appl-did-operator))
  (goto (label eval-dispatch))
ev-appl-symbol-eval-dispatch
  (assign continue (label ev-appl-no-restore-did-operator))
  (goto (label eval-dispatch))
ev-appl-did-operator
  (restore unev)
  (restore env)
ev-appl-no-restore-did-operator
  (assign argl (op empty-arglist))
  (assign proc (reg val))
;;.....
{% endhighlight %}

#### (b)

That's an interesting question.

I think it is difficult to give a rigorous argument that it is impossible to build such an evaluator.

But...

Consider how many special cases are possible? Evaluator means to not look ahead for the next instruction before evaluating the current instructions. For adding special cases, we have to look ahead for example in part (a), we look ahead that if operator is a variable. 

The problem is if we keep looking ahead then the lines between compiler and evaluator gets blurry! Except that compiler does this look ahead/parsing just once for each expression but evaluator has to do it every time an expression is encountered.

Also, with so many special cases, how painful it would be to maintain such an evaluator - add a new feature, or debug such an evaluator!

So, Perhaps Alyssa's idea might be possible in theory but it certainly won't eliminate the advantage of compilation altogether.
