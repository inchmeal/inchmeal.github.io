---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.13"
order: "013"
date: 2018-04-24 
---

Note: I *pre-allocated* the registers instead of one at a time as suggested in exercise. Well, without reading complete problem, I went ahead with the implementation and realised later about the pre-allocation part. Ofcourse, the suggestion in book is a better(as well as easier) approach.

Code:

{% highlight scheme linenos %}
(define (make-machine ops controller-text)  ;;; removed registers argument
  (let ((machine (make-new-machine)))
    (for-each (lambda (register-name)
                ((machine 'allocate-register) register-name))
			  ;;ex-5.13 change
              (collect-registers controller-text))  ;;;
	
    ((machine 'install-operations) ops)    
    ((machine 'install-instruction-sequence)
     (assemble controller-text machine))
	;; install data-paths - ex-5.12
	(install-data-paths controller-text machine)
    machine))

;;new procedure
(define (collect-registers instructions)
  (let ((regs '()))

	(define (add-reg-if-not-present reg)
	  (if (not (member reg regs))
		  (set! regs (cons reg regs))))
	
	(for-each (lambda (inst)
				(if (not (symbol? inst))
					(let ((inst-type (car inst)))
					  (cond ((eq? inst-type 'assign)
							 (add-reg-if-not-present
							  (assign-reg-name inst))
							 (for-each (lambda(exp)
										 (if (register-exp? exp)
											 (add-reg-if-not-present
											  (register-exp-reg exp))))
									   (assign-value-exp inst)))
							((or (eq? inst-type 'save)
								 (eq? inst-type 'restore))
							 (add-reg-if-not-present
							  (stack-inst-reg-name inst)))
							((and (eq? inst-type 'goto)
								  (register-exp? (goto-dest inst)))
							 (add-reg-if-not-present
							  (register-exp-reg (goto-dest inst))))
							((eq? inst-type 'test)
							 (for-each (lambda(exp)
										 (if (register-exp? exp)
											 (add-reg-if-not-present
											  (register-exp-reg exp))))
									   (test-condition inst)))))))
			  instructions)
	regs))
{% endhighlight %}

-----

Output/Test:


{% highlight scheme linenos %}
1 ]=> 
(define fib-machine
  (make-machine
   (list (list '< <) (list '- -) (list '+ +))
   '((assign continue (label fib-done))
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
	 fib-done)))

;Value 25: (register simulator loaded)

1 ]=> 
Found the following : (val n continue) registers.
;Value: fib-machine

1 ]=> (set-register-contents! fib-machine 'n 5)

;Value: done

1 ]=> (start fib-machine)

;Value: done

1 ]=> (get-register-contents fib-machine 'val)

;Value: 5

1 ]=> (set-register-contents! fib-machine 'n 7)

;Value: done

1 ]=> (start fib-machine)

;Value: done

1 ]=> (get-register-contents fib-machine 'val)

;Value: 13

1 ]=> 

{% endhighlight %}
