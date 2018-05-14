---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.46"
order: "046"
date: 2018-05-12 
---

Note that we can use the same approach outlined in ex-5.29 to arrive at the expression for `total-pushes` or $$\, S_n \,$$ 

Here are the results:

|-------------------------|-------------------------------------|---------------------|
|                         | total-pushes($$\, S_n \,$$ )        | maximum-depth       |
|-------------------------|-------------------------------------|---------------------|
| special-purpose         | $$\, 3 {\text{fib}}_{n+1} - 3 \,$$  | $$\, 2n-2 \,$$      |
| interpreter             | $$\, 56 {\text{fib}}_{n+1} -40 \,$$ | $$\, 5n+3 \,$$      |
| compiler                | $$\, 10{\text{fib}}_{n+1} - 3 \,$$  | $$\, 3n-1 \,$$      |
| compiler vs interpreter | $$\, \frac {10} {56} \,$$           | $$\, \frac 3 5 \,$$ |
| special vs interpreter  | $$\, \frac 3 {56} \,$$              | $$\, \frac 2 5 \,$$ |
| special vs compiler     | $$\, \frac 3 {10} \,$$              | $$\, \frac 2 3 \,$$ |
|-------------------------|-------------------------------------|---------------------|

Note that i removed an extra `save` in the special-purpose fibonacci using the suggestion from ex-5.6

Also, with open coding enabled in the compiler version, we get:

$$\, \text{total-pushes} = 3{\text{fib}}_{n+1} + 2\,$$    

and,

$$\, \text{maximum-depth} = 2n - 2 \,$$    

Note that, for fib. there is one more operator `<` that i added in open coding operators. Intially the results were quite far apart(it was $$\, 7 \text{fib}_{n+1} \,$$ ) but after realising that `<` is not open coded, fixing that made the compiler performance almost same as special-purpose performance. 

For adding `<`, just two things:

- Add code in ch5-compiler.scm parallel to open coding changes for `=`.
- Also check previous exercise ex-5.45(end of the page there) for adding open code operations.

Well thats it!

-----

(I am not sure why problem says that for large n, we won't approach limiting value. As shown above, for large $$\, n \,$$, i think while comparing the $$\, \text{fib}_{n+1} \,$$ term cancels out even if they are not linear. Probably i am wrong.)

To make it easier to work with special purpose fib, i made few changes so that it can read input from console without requiring to explicitly set in the register. Here's the modified code:

{% highlight scheme linenos %}
(define fib-machine
  (make-machine
   '(continue n val)
   (list (list '< <) (list '- -) (list '+ +) (list 'read read-at-newline) (list 'print print))
   '(start
	 (assign n (op read))
	 (perform (op initialize-stack))
	 (assign continue (label fib-done))
	 fib-loop
	   (test (op <) (reg n) (const 2))
	   (branch (label immediate-answer))
	   ;; set up to compute Fib(n - 1)
	   (save continue)
	   (assign continue (label afterfib-n-1))
	   (save n)                           ; save old value of n
	   (assign n (op -) (reg n) (const 1)); clobber n to n - 1
	   (goto (label fib-loop))            ; perform recursive call
	 afterfib-n-1                         ; upon return, val contains Fib(n - 1)
	   (restore n)
	   ;(restore continue)
	   ;; set up to compute Fib(n - 2)
	   (assign n (op -) (reg n) (const 2))
	   ;(save continue)
	   (assign continue (label afterfib-n-2))
	   (save val)                         ; save Fib(n - 1)
	   (goto (label fib-loop))
	 afterfib-n-2                         ; upon return, val contains Fib(n - 2)
	   (assign n (reg val))               ; n now contains Fib(n - 2)
	   (restore val)                      ; val now contains Fib(n - 1)
	   (restore continue)
	   (assign val                        ;  Fib(n - 1) +  Fib(n - 2)
			   (op +) (reg val) (reg n)) 
	   (goto (reg continue))              ; return to caller, answer is in val
	 immediate-answer
	   (assign val (reg n))               ; base case:  Fib(n) = n
	   (goto (reg continue))
	   fib-done
	   (perform (op print-stack-statistics))
	   (perform (op print) (reg val))
	   (goto (label start)))))
(define (print . items)
  (newline)
  (display items))

(define (read-at-newline)
  (newline)
  (read))
{% endhighlight %}

For completion, let me also put the numbers which led to the above formulas. For interpreter version, they are already in ex-5.29.

For the special-purpose version:

{% highlight scheme linenos %}
1 ]=> (start fib-machine)

;input
1

(total-pushes = 0 maximum-depth = 0)
(1)

;input
2

(total-pushes = 3 maximum-depth = 2)
(1)

;input
3

(total-pushes = 6 maximum-depth = 4)
(2)

;input
4

(total-pushes = 12 maximum-depth = 6)
(3)

;input
5

(total-pushes = 21 maximum-depth = 8)
(5)

;input
6

(total-pushes = 36 maximum-depth = 10)
(8)

;input
7

(total-pushes = 60 maximum-depth = 12)
(13)
{% endhighlight %}


For compiler version:

{% highlight scheme linenos %}
;;; EC-Eval input:
(fib 1)

(total-pushes = 7 maximum-depth = 3)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 2)

(total-pushes = 17 maximum-depth = 5)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 3)

(total-pushes = 27 maximum-depth = 8)
;;; EC-Eval value:
2

;;; EC-Eval input:
(fib 4)

(total-pushes = 47 maximum-depth = 11)
;;; EC-Eval value:
3

;;; EC-Eval input:
(fib 5)

(total-pushes = 77 maximum-depth = 14)
;;; EC-Eval value:
5

;;; EC-Eval input:
(fib 6)

(total-pushes = 127 maximum-depth = 17)
;;; EC-Eval value:
8

;;; EC-Eval input:
(fib 7)

(total-pushes = 207 maximum-depth = 20)
;;; EC-Eval value:
13


{% endhighlight %}

Compiler with open-coding enabled version(including `<`):

{% highlight scheme linenos %}
;;; EC-Eval input:
(fib 0)

(total-pushes = 5 maximum-depth = 3)
;;; EC-Eval value:
0

;;; EC-Eval input:
(fib 1)

(total-pushes = 5 maximum-depth = 3)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 2)

(total-pushes = 8 maximum-depth = 3)
;;; EC-Eval value:
1

;;; EC-Eval input:
(fib 3)

(total-pushes = 11 maximum-depth = 4)
;;; EC-Eval value:
2

;;; EC-Eval input:
(fib 4)

(total-pushes = 17 maximum-depth = 6)
;;; EC-Eval value:
3

;;; EC-Eval input:
(fib 5)

(total-pushes = 26 maximum-depth = 8)
;;; EC-Eval value:
5

;;; EC-Eval input:
(fib 6)

(total-pushes = 41 maximum-depth = 10)
;;; EC-Eval value:
8

;;; EC-Eval input:
(fib 7)

(total-pushes = 65 maximum-depth = 12)
;;; EC-Eval value:
13

;;; EC-Eval input:
{% endhighlight %}
