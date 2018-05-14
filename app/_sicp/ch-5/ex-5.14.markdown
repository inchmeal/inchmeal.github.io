---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.14"
order: "014"
date: 2018-04-24 
---

Code after making the changes in `fact-machine` as suggested in the problem:

{% highlight scheme linenos %}
(define (print . items)
  (newline)
  (display items))

(define fact-machine
  (make-machine
   '(n val continue)
   (list (list '= =) (list '* *) (list '- -) (list 'read read) (list 'print print))
   '(start
	 (assign n (op read))
	 (perform (op initialize-stack))
	 (assign continue (label fact-done))     ; set up final return address
	fact-loop
	 (test (op =) (reg n) (const 1))
	 (branch (label base-case))
	 ;; Set up for the recursive call by saving n and continue.
	 ;; Set up continue so that the computation will continue
	 ;; at after-fact when the subroutine returns.
	 (save continue)
	 (save n)
	 (assign n (op -) (reg n) (const 1))
	 (assign continue (label after-fact))
	 (goto (label fact-loop))
	after-fact
	 (restore n)
	 (restore continue)
	 (assign val (op *) (reg n) (reg val))   ; val now contains n(n - 1)!
	 (goto (reg continue))                   ; return to caller
	base-case
	 (assign val (const 1))                  ; base case: 1! = 1
	 (goto (reg continue))                   ; return to caller
	fact-done
	 (perform (op print-stack-statistics))
	 (perform (op print) (reg val))
	 (goto (label start)))))
{% endhighlight %}

Testing:

(make sure print is available while defining fact-machine)

{% highlight scheme linenos %}
1 ]=> (start fact-machine)
1

(total-pushes = 0 maximum-depth = 0)
(1)

2

(total-pushes = 2 maximum-depth = 2)
(2)

3

(total-pushes = 4 maximum-depth = 4)
(6)

4

(total-pushes = 6 maximum-depth = 6)
(24)

5

(total-pushes = 8 maximum-depth = 8)
(120)

6

(total-pushes = 10 maximum-depth = 10)
(720)

7

(total-pushes = 12 maximum-depth = 12)
(5040)

8

(total-pushes = 14 maximum-depth = 14)
(40320)

9

(total-pushes = 16 maximum-depth = 16)
(362880)

10

(total-pushes = 18 maximum-depth = 18)
(3628800)

{% endhighlight %}

Note that here total-pushes and maximum-depth are equal. This can be seen in the code too as we first *iterate* over all `n` and pushing values to stack without any pop operation. Once we reach bottom case then we perform pop and keep popping till stack becomes empty. Since every time we push two elements, it means that total-pushes should be in the multiples of 2.

Now, excluding the base case, where we do not `push`, it follows that formula should be $$\, 2 \times (n - 1) \,$$. This is indeed the case as can be seen from the output too.
