---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.11"
order: "011"
date: 2018-04-23 
---

#### (a)

These two lines under label `afterfib-n-2`:

{% highlight scheme linenos %}
(assign n (reg val))               ; n now contains Fib(n - 2)
(restore val)                      ; val now contains Fib(n - 1)
{% endhighlight %}

..can be replaced by a single line:

{% highlight scheme linenos %}
(restore n)
{% endhighlight %}

#### (b)

Here are the changes:

{% highlight scheme linenos %}
(define (make-save inst machine stack pc)
  (let ((reg-name (stack-inst-reg-name inst)))
	(let ((reg (get-register machine
							 reg-name)))
      (lambda ()
		(push stack (cons reg-name
						  (get-contents reg)))
		(advance-pc pc)))))

(define (make-restore inst machine stack pc)
  (let ((reg-name (stack-inst-reg-name inst)))
	(let ((reg (get-register machine reg-name)))
      (lambda ()
		(if (eq? reg-name (car (top stack)))
			(begin (set-contents! reg (cdr (pop stack))) 
				   (advance-pc pc))
		  (error "Reg at stack top and Reg restored are not equal!"
				 reg-name
				 (car (top stack))))))))

;; install a new procedure top in stack

;;inside stack add top in dispatch:
(define (dispatch message)
  (cond ((eq? message 'push) push)
        ((eq? message 'pop) (pop))
        ((eq? message 'top) (car s))
        ((eq? message 'initialize) (initialize))
        ((eq? message 'print-statistics)
         (print-statistics))
        (else
         (error "Unknown request -- STACK" message))))

(define (top stack)
  (stack 'top))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> 
(define temp-machine
  (make-machine
   '(a b)
   '()
   '((assign a (const 100))
	 (assign b (const 200))
	 (save a)
	 (save b)
	 (restore b)
	 (restore b))))
;;last line should produce error because element at top of
;;stack is from reg a but we are reading it in reg b. 

;Value 11: (register simulator loaded)

1 ]=> 
;Value: temp-machine

1 ]=> (start temp-machine)

;Reg at stack top and Reg restored are not equal! b a
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> 
{% endhighlight %}

#### (c)

Changes are marked with `;;;`. I created stacks for `pc` and `flag` too. Well, these stacks are not required, added them mindlessly :)

{% highlight scheme linenos %}
(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (the-instruction-sequence '()))
	(let ((stacks (list (list 'pc (make-stack))            ;;;
						(list 'flag (make-stack)))))       ;;;
      (let ((the-ops
			 (list (list 'initialize-stack
						 (lambda () (map (lambda(stack)
										   (stack 'initialize))
										 stacks)))
                   ;;**next for monitored stack (as in section 5.2.4)
                   ;;  -- comment out if not wanted
                   (list 'print-stack-statistics
						 (lambda () (map (lambda(stack)
										   (stack 'print-statistics))
										 stacks)))))
			(register-table
			 (list (list 'pc pc) (list 'flag flag))))
		(define (allocate-register name)
          (if (assoc name register-table)
              (error "Multiply defined register: " name)
              (begin
				(set! register-table
					  (cons (list name (make-register name))
							register-table))
				(set! stacks                               ;;;
					  (cons (list name (make-stack))       ;;;
							stacks))))                     ;;;
          'register-allocated)
		(define (lookup-register name)
          (let ((val (assoc name register-table)))
			(if val
				(cadr val)
				(error "Unknown register:" name))))
		(define (execute)
          (let ((insts (get-contents pc)))
			(if (null? insts)
				'done
				(begin
                  ((instruction-execution-proc (car insts)))
                  (execute)))))
		(define (dispatch message)
          (cond ((eq? message 'start)
				 (set-contents! pc the-instruction-sequence)
				 (execute))
				((eq? message 'install-instruction-sequence)
				 (lambda (seq) (set! the-instruction-sequence seq)))
				((eq? message 'allocate-register) allocate-register)
				((eq? message 'get-register) lookup-register)
				((eq? message 'install-operations)
				 (lambda (ops) (set! the-ops (append the-ops ops))))
				((eq? message 'stack) stacks)            ;;;renamed stacks
				((eq? message 'operations) the-ops)
				(else (error "Unknown request -- MACHINE" message))))
		dispatch))))

;;new procedure
(define (get-stack stacks reg-name)
  (let ((stack (assoc reg-name stacks)))
	(if stack
		(cadr stack)
		(error "Can not find stack for reg:" reg-name))))

;; modified restore and save
(define (make-save inst machine stacks pc)
  (let ((reg-name (stack-inst-reg-name inst)))
	(let ((reg (get-register machine
							 reg-name)))
      (lambda ()
		(push (get-stack stacks reg-name)                ;;;
			  (get-contents reg))
		(advance-pc pc)))))

(define (make-restore inst machine stacks pc)
  (let ((reg-name (stack-inst-reg-name inst)))
	(let ((reg (get-register machine reg-name)))       
      (lambda ()
		(set-contents! reg (pop (get-stack stacks reg-name))) ;;;
		(advance-pc pc)))))

{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;example, i used in part (b) now gives different error as expected.
1 ]=> 
(define temp-machine
  (make-machine
   '(a b)
   '()
   '((assign a (const 100))
	 (assign b (const 200))
	 (save a)
	 (save b)
	 (restore b)
	 (restore b))))

;Value 14: (register simulator loaded)

1 ]=> 
;Value: temp-machine

1 ]=> (start temp-machine)

;Empty stack -- POP
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> (restart 1)

1 ]=> 
(define temp-machine
  (make-machine
   '(a b)
   '()
   '((assign a (const 100))
	 (assign b (const 200))
	 (save b)
	 (save a)
	 (save b)
	 (restore b)
	 (restore b))))

;Value: temp-machine

1 ]=> (start temp-machine)

;Value: done

1 ]=> 
{% endhighlight %}


