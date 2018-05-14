---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.5"
order: "005"
date: 2018-04-19 
---

I computed for n = 4. Since we are counting from 0, this means we are trying to find the 5th term of fibonacci.

For reference, register machine for fibonacci:

{% highlight scheme linenos %}
(controller
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
   (restore continue)
   ;; set up to compute Fib(n - 2)
   (assign n (op -) (reg n) (const 2))
   (save continue)
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
 fib-done)
{% endhighlight %}

For clarity, I prefixed numbers in stack with the variable names.

The contents of stack are shown from left to right, with right most being the top element.

1. **Stack:** Empty
   **n:** 4    
   **continue:** fib-done

2. After first `fib-loop` iteration:    
   **Stack:** fib-done n:4    
   **n:** 3    
   **continue:** afterfib-n-1

3. After second `fib-loop` iteration:    
   **Stack:** fib-done n:4 afterfib-n-1 n:3    
   **n:** 2    
   **continue:** afterfib-n-1
      
4. After third `fib-loop` iteration:    
   **Stack:** fib-done n:4 afterfib-n-1 n:3 afterfib-n-1 n:2    
   **n:** 1    
   **continue:** afterfib-n-1

5. After fourth `fib-loop` iteration: (no change because it causes a jump to base-case - immediate-answer)    
   **Stack:** fib-done n:4 afterfib-n-1 n:3 afterfib-n-1 n:2    
   **n:** 1    
   **continue:** afterfib-n-1
   
6. After `immediate-answer`    
   **Stack:** fib-done n:4 afterfib-n-1 n:3 afterfib-n-1 n:2    
   **n:** 1    
   **continue:** afterfib-n-1    
   **val:** 1
   
7. Now we jump to `afterfib-n-1`.

8. After `afterfib-n-1`:    
   **Stack:** fib-done n:4 afterfib-n-1 n:3 afterfib-n-1 val:1    
   **n:** 0    
   **continue:** afterfib-n-2    
   **val:** 1    
   (Note that at this point the top of stack contains (fib 1) - base case value).
   
9. Jump to `fib-loop`.

10. Since n = 0, `fib-loop` causes jump to `immediate-answer`.

11. After `immediate-answer`:    
   **Stack:** fib-done n:4 afterfib-n-1 n:3 afterfib-n-1 val:1    
   **n:** 0    
   **continue:** afterfib-n-2    
   **val:** 0    
  
12. Jump to `afterfib-n-2`.

13. After `afterfib-n-2`:    
   **Stack:** fib-done n:4 afterfib-n-1 n:3    
   **n:** 0    
   **continue:** afterfib-n-1    
   **val:** 1    
   
14. Jump to `afterfib-n-1`.

15. After `afterfib-n-1`:    
	**Stack:** fib-done n:4 afterfib-n-1 val:1    
	**n:** 1    
	**continue:** after-fib-n-2    
	val: 1
	
16. Jumpt to `fib-loop`.

17. Since n = 1, `fib-loop` causes jumpt to `immediate-answer`.    
	**Stack:** fib-done n:4 afterfib-n-1 val:1    
	**n:** 1    
	**continue:** after-fib-n-2    
	val: 1
	
18. Jump to `afterfib-n-2`.

19. After `afterfib-n-2`:    
	**Stack:** fib-done n:4    
	**n:** 1    
	**continue:** after-fib-n-1    
	val: 2
	
20. Jump to `afterfib-n-1`.

21. After `afterfib-n-1`:    
	**Stack:** fib-done val:2    
	**n:** 2    
	**continue:** after-fib-n-2    
	val: 2
	
22. Jump to `fib-loop`:    
	**Stack:** fib-done val:2 after-fib-n-2 n:2    
	**n:** 1    
	**continue:** after-fib-n-1    
	val: 2
	
23. Jump to `fib-loop`.

24. Since n = 1, `fib-loop` causes jump to `immediate-answer`.

25. After `immediate-answer`:    
	**Stack:** fib-done val:2 after-fib-n-2 n:2    
	**n:** 1    
	**continue:** afterfib-n-1    
	val: 1

26. Jump to `afterfib-n-1`.

27. After `afterfib-n-1`:    
	**Stack:** fib-done val:2 after-fib-n-2 val:1    
	**n:** 0    
	**continue:** after-fib-n-2    
	val: 1
	
28. Jump to `fib-loop`.

29. Since n=0, `fib-loop` causes jump to `immediate-answer`.

30. After `immediate-answer`:    
	**Stack:** fib-done val:2 after-fib-n-2 val:1    
	**n:** 0    
	**continue:** after-fib-n-2    
	val: 0
	
31. Jump to `after-fib-n-2`.

32. After `after-fib-n-2`:    
	**Stack:** fib-done val:2    
	**n:** 1    
	**continue:** after-fib-n-2    
	val: 1
	
33. Jump to `afterfib-n-2`:    
	**Stack:** Empty    
	**n:** 1    
	**continue:** fib-done    
	val: 3
	
34. Jump to `fib-done`.

35. val = 3 contains the answer!
