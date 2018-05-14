---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.40"
order: "040"
date: 2018-03-22 
---

Well, things get more interesting in this exercise.

First, to test executiong times, in last exercise I called `(multiple-dwelling)` multiple times. Now, I created a loop instead of manually calling it multiple times.

**Note:** Since the code of most optimised version is a bit unintuitive, I demonstrated it only at the end. These numbers in the below table are only for the first optimized version I implemented for this exercise. The numbers for the most optimized version are shown at the end.

Now, let me first tell the results:


|--------------------------------------------------------|------------------|------------|
| Version                                                | iterations count | Time taken |
|--------------------------------------------------------|------------------|------------|
| Original                                               | 100              | 74         |
| Optimisation as per this exercise                      | 100              | 8          |
| Optimisation as per previous exercise                  | 100              | 71         |
| Moving `distinct` constraint down in previous exercise | 100              | 92         |
|--------------------------------------------------------|------------------|------------|

Here goes the code:

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (let ((fletcher (amb 1 2 3 4 5)))
    (require (not (= fletcher 5)))
    (require (not (= fletcher 1)))
	(let ((cooper (amb 1 2 3 4 5)))
      (require (not (= (abs (- fletcher cooper)) 1)))
      (require (not (= cooper 1)))
	  (let ((miller (amb 1 2 3 4 5)))
		(require (> miller cooper))
		(let ((smith (amb 1 2 3 4 5)))
		  (require (not (= (abs (- smith fletcher)) 1)))
		  (let ((baker (amb 1 2 3 4 5)))
			(require
			 (distinct? (list baker cooper fletcher miller smith)))
			(require (not (= baker 5)))
			(list (list 'baker baker)
				  (list 'cooper cooper)
				  (list 'fletcher fletcher)
				  (list 'miller miller)
				  (list 'smith smith))))))))

;;code for iterations
(define (iter count)
  (if (= count 0)
	  (multiple-dwelling)
	  (begin (multiple-dwelling) (iter (- count 1)))))
{% endhighlight %}

First, now in this exercise, we are moving down `distinct` but it is making it more efficient, seems to be contradicting with previous result.

Well, no!

Here, we are restricting the number of possibilities in every `let` expression. Recall that `let` is nothing but a procedure. Earlier version of let has 5 parameters. Thus it was giving:

$$\, { \text{num-of-args} }^{ \text{num-of-possible-values-of-an-arg } } = 5^5 \,$$ 

Now, in this exercise, we have drastically reduced the number of possibilities of `let` parameters. The outermost `let` has only $$\, 5 \,$$ possibilities. Then the next nested `let` gets approximately $$\, 5 \times 5 \,$$. (I am not considering the cases removed by restrictions in outer let. These values are only for approximations).

Thus the last inner `let` we again, reach the same *order* of possibilities $$\, 5^5 \,$$ (approximately).

But there are only 2 restrictions(requires) placed in last inner `let`! So, these huge number of possibilities are tested only for two requires!

Now comes an interesting part which agrees with our findings of past exercise:

What if we change the order of these two restrictions present in the last inner `let`:

{% highlight scheme linenos %}
(require
 (distinct? (list baker cooper fletcher miller smith)))
(require (not (= baker 5)))
{% endhighlight %}

Let's call these versions as V1 and V2.

Well, it took more number of iterations to see a significant difference:

|---------|------------|------------|
| Version | iterations | time taken |
|---------|------------|------------|
| V1      | 400        | 32         |
| V2      | 400        | 36         |
|---------|------------|------------|


Thus even here, moving `distinct?` down makes it slower.

With this in mind can we further optimise?

`distinct?` can be split in multiple nestings! 

Here comes even more optimised version:

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (let ((fletcher (amb 1 2 3 4 5)))
    (require (not (= fletcher 5)))
    (require (not (= fletcher 1)))
	(let ((cooper (amb 1 2 3 4 5)))
	  (require (not (= cooper fletcher)))
      (require (not (= (abs (- fletcher cooper)) 1)))
      (require (not (= cooper 1)))
	  (let ((miller (amb 1 2 3 4 5)))
		(require (not (= miller cooper)))
		(require (not (= miller fletcher)))
		(require (> miller cooper))
		(let ((smith (amb 1 2 3 4 5)))
		  (require (not (= smith miller)))
		  (require (not (= smith cooper)))
		  (require (not (= smith fletcher)))
		  (require (not (= (abs (- smith fletcher)) 1)))
		  (let ((baker (amb 1 2 3 4 5)))
			(require (not (= baker smith)))
			(require (not (= baker miller)))
			(require (not (= baker cooper)))
			(require (not (= baker fletcher)))
			(require (not (= baker 5)))
			(list (list 'baker baker)
				  (list 'cooper cooper)
				  (list 'fletcher fletcher)
				  (list 'miller miller)
				  (list 'smith smith))))))))
{% endhighlight %}

Executing it 100 times took 4 seconds and executing this 400 times took only 14 seconds!
