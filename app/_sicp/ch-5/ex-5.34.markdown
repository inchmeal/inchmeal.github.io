---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.34"
order: "034"
date: 2018-05-08 
---

That's interesting.

How to spot the code which is causing the process to be iterative?

As we saw in the tail recursion in section 5.5.3 under heading **Applying compiled procedure**, pg-586:

Because of Tail call optimisation, we can have two cases while applying a procedure:

- If the linkage is *label*:

{% highlight scheme linenos %}
(assign continue (label <linkage>))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
{% endhighlight %}

- If the linkage is *return*:

{% highlight scheme linenos %}
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
{% endhighlight %}

Now, consider what happen if the procedure is iterative:

The last expression executed in the procedure must cause return to the previous continue point without introducing any new points of returns.

Lets see the given `iter`, an iterative case, to understand:

{% highlight scheme linenos %}
(define (factorial n)
  (define (iter product counter)
    (if (> counter n)
        product
        (iter (* counter product)
              (+ counter 1))))
  (iter 1 1))
{% endhighlight %}

There is only one expression, `if` inside which for the false case we have a recursive invocation. Now this recursive invocation because of the book's tail call optimization will cause to return to the same place `continue` from where we invoked `iter`.

But what will happen for the recursive process case:

{% highlight scheme linenos %}
(define (factorial n)
    (if (= n 1)
        1
        (* (factorial (- n 1)) n)))
{% endhighlight %}

The last expression here also is `if` and the recursive call happens in the false branch of `if`. Now notice that here `continue` after invocation of `factorial` will need to return to the place where we are creating `argl` for `*`. 

Thus for every recursive call in this case will cause to save a `continue` on the stack! 

This was not the case in iterative version because continue is always same in each recursive call!

#### To summarise:

The iterative procedure will generate recursive call as:

{% highlight scheme linenos %}
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
{% endhighlight %}

while the recursive version will generate the recursive call as:

{% highlight scheme linenos %}
(assign continue (label <linkage>))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
{% endhighlight %}

Now we can see this in the assembly code generated:

Which place we need to see? Yes, the false branch case where recursive call is made in both iterative and recursive cases!

#### Let's first see the iterative case code(check under false branch):

{% highlight scheme linenos %}
false-branch9
;;start of instructions to invoke recursive call to iter
(assign proc (op lookup-variable-value) (const iter) (reg env))
;;this continue is saved because we are evaluating arguments which might change continue
(save continue)
(save proc)
(save env)
;;start of instructions to invoke '+'
(assign proc (op lookup-variable-value) (const +) (reg env))
(assign val (const 1))
(assign argl (op list) (reg val))
(assign val (op lookup-variable-value) (const counter) (reg env))
(assign argl (op cons) (reg val) (reg argl))
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch16))
compiled-branch15
(assign continue (label after-call14))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch16
;;results of (+ counter 1) are stored here in val
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call14
;;now we proceed to make argl for recursive call iter. the first argument
;;is the result of (+ counter 1) is saved in argl 
(assign argl (op list) (reg val))
(restore env)
(save argl)
;;start of instructions to invoke '*' 
(assign proc (op lookup-variable-value) (const *) (reg env))
(assign val (op lookup-variable-value) (const product) (reg env))
(assign argl (op list) (reg val))
(assign val (op lookup-variable-value) (const counter) (reg env))
(assign argl (op cons) (reg val) (reg argl))
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch13))
compiled-branch12
(assign continue (label after-call11))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch13
;;at this point results of (* product counter) are saved in argl
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call11
(restore argl)
;;now with this below instruction the argl is complete for the recursive call iter.
(assign argl (op cons) (reg val) (reg argl))
(restore proc)
;;restored continue which we saved earlier because it might have been changed while invoking '*' and '+'
;;thus this continue contains the same return point when iter was invoked first time.
(restore continue)
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch19))
compiled-branch18
;;here we make the recursive call. THIS IS THE MAIN DIFFERENCE POINT
;;NOTICE that we are not saving any internal continue points but just using the same value of continue
;;which was present originally when this procedure is invoked!
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
{% endhighlight %}

Note that in the above code the stack has same number of elements before and after each invocation of `iter`.

Now, let's see the recursive case(again just see the code under false branch):

{% highlight scheme linenos %}
false-branch4
(assign proc (op lookup-variable-value) (const *) (reg env))
(save continue)
(save proc)
(assign val (op lookup-variable-value) (const n) (reg env))
(assign argl (op list) (reg val))
;;note that here we save argl on the stack before the recursive call to factorial so that when
;;we return at after-call9 label we can restore this and compute '*'.
(save argl)
;;start of instructions for recursive invocation of factorial
(assign proc (op lookup-variable-value) (const factorial) (reg env))
(save proc)
;;here we evaluate arguments to be passed to factorial
(assign proc (op lookup-variable-value) (const -) (reg env))
(assign val (const 1))
(assign argl (op list) (reg val))
(assign val (op lookup-variable-value) (const n) (reg env))
(assign argl (op cons) (reg val) (reg argl))
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch8))
compiled-branch7
(assign continue (label after-call6))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch8
;;at this point val contains the result of (- n 1)
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call6
;;now this completes the argl which is needed for factorial invocation.
(assign argl (op list) (reg val))
(restore proc)
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch11))
compiled-branch10
;;THIS IS THE MAIN POINT WHERE WE CAN SEE THE DIFFERENCE
;;notice that we are changing continue here to return to the place where
;;we can proceed to evaluate '*' procedure invocation.
(assign continue (label after-call9))
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch11
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
after-call9
(restore argl)
(assign argl (op cons) (reg val) (reg argl))
(restore proc)
(restore continue)
(test (op primitive-procedure?) (reg proc))
(branch (label primitive-branch14))
compiled-branch13
(assign val (op compiled-procedure-entry) (reg proc))
(goto (reg val))
primitive-branch14
(assign val (op apply-primitive-procedure) (reg proc) (reg argl))
(goto (reg continue))
after-call12
after-if3
after-lambda1
{% endhighlight %}

Note that in this case after each invocation of `factorial` the number of elements in stack keeps growing till last recursive invocation and then the stack is unwind while performing the computations for `*`.

-----

Comments

Isn't it awesome! The initial sections of this chapter were not as interesting as ch-4 so I was considering to leave it. These interesting details I would have missed!
