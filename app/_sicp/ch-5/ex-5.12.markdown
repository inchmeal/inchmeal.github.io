---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.12"
order: "012"
date: 2018-04-24 
---

Most of the changes are in one procedure. Here are the required changes/additions:

Note that these changes are done on top of [this code][mit-ch-5].

{% highlight scheme linenos %}
;;new procedure
(define (install-data-paths insts machine)
  (let ((inst-groups '())
		(entry-points '())
		(stack-regs '())
		(sources '()))
	(for-each (lambda (inst)
				(if (not (symbol? inst)) ;;not label
					(let ((inst-type (car inst)))
					  (let ((group (assoc inst-type inst-groups)))
						(if group
							(if (not (member inst (cdr group)))
								(set-cdr! group (cons inst (cdr group))))
							(set! inst-groups (cons (list inst-type inst)
													inst-groups))))
					  
					  (cond ((eq? inst-type 'goto)
							 (let ((dest (goto-dest inst)))
							   (if (register-exp? dest)
								   (let ((reg (register-exp-reg dest)))
									 (if (not (member reg entry-points))
										 (set! entry-points (cons reg entry-points)))))
							   'saved-entrypoint))
							((or (eq? inst-type 'save)
								 (eq? inst-type 'restore))
							 (let ((reg (stack-inst-reg-name inst)))
							   (if (not (member reg stack-regs))
								   (set! stack-regs (cons reg stack-regs))))
							 'saved-stack-reg)
							((eq? inst-type 'assign)
							 (let ((reg (assign-reg-name inst))
								   (value-exp (assign-value-exp inst)))
							   (let ((group (assoc reg sources)))
								 (if group
									 (if (not (member value-exp (cdr group)))
										 (set-cdr! group (cons value-exp (cdr group))))
									 (set! sources (cons (list reg value-exp)
														 sources))))
							   'saved-source))))))
			  insts)
	
	((machine 'install-grouped-instructions)
	 (fold-right
	  append
	  '()
	  (map (lambda (group) (cdr group))
		   inst-groups)))
	((machine 'install-entry-points) entry-points)
	((machine 'install-stack-registers) stack-regs)
	((machine 'install-register-sources) sources)
	
	'done))

;;; CHANGED CODE IS MARKED WITH ;;;

;;invoking the above procedure

(define (make-machine register-names ops controller-text)
  (let ((machine (make-new-machine)))
    (for-each (lambda (register-name)
                ((machine 'allocate-register) register-name))
              register-names)
    ((machine 'install-operations) ops)    
    ((machine 'install-instruction-sequence)
     (assemble controller-text machine))
	;; install data-paths - ex-5.12
	(install-data-paths controller-text machine)    ;;;
    machine))

(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (stack (make-stack))
        (the-instruction-sequence '())
		(grouped-insts '())
		(entry-points '())
		(stack-regs '())
		(sources '()))
    (let ((the-ops
           (list (list 'initialize-stack
                       (lambda () (stack 'initialize)))
                 ;;**next for monitored stack (as in section 5.2.4)
                 ;;  -- comment out if not wanted
                 (list 'print-stack-statistics
                       (lambda () (stack 'print-statistics)))))
          (register-table
           (list (list 'pc pc) (list 'flag flag))))
      (define (allocate-register name)
        (if (assoc name register-table)
            (error "Multiply defined register: " name)
            (set! register-table
                  (cons (list name (make-register name))
                        register-table)))
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
              ((eq? message 'stack) stack)
              ((eq? message 'operations) the-ops)
              ((eq? message 'install-grouped-instructions)   ;;;
               (lambda (gins) (set! grouped-insts gins)))    ;;;
              ((eq? message 'install-entry-points)           ;;;
               (lambda (eps) (set! entry-points eps)))       ;;;
              ((eq? message 'install-stack-registers)        ;;;
               (lambda (regs) (set! stack-regs regs)))       ;;;
              ((eq? message 'install-register-sources)       ;;;
               (lambda (rs) (set! sources rs)))              ;;;
              ((eq? message 'get-grouped-instructions) grouped-insts)   ;;;
              ((eq? message 'get-entry-points) entry-points)            ;;;
              ((eq? message 'get-stack-registers) stack-regs)           ;;;
              ((eq? message 'get-register-sources) sources)             ;;;
              (else (error "Unknown request -- MACHINE" message))))
      dispatch)))
{% endhighlight %}

-----


Output:

(note that i manually formatted some of the outputs for clarity)

{% highlight scheme linenos %}
1 ]=> 
(define fib-machine
  (make-machine
   '(continue n val)
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

;Value 18: (register simulator loaded)

1 ]=> 
;Value: fib-machine

1 ]=> (fib-machine 'get-grouped-instructions)

;Value 19: 
((restore val)
 (restore continue)
 (restore n)
 (goto (reg continue))
 (goto (label fib-loop))
 (save val)
 (save n)
 (save continue)
 (branch (label immediate-answer))
 (test (op <) (reg n) (const 2))
 (assign val (reg n))
 (assign val (op +) (reg val) (reg n))
 (assign n (reg val))
 (assign continue (label afterfib-n-2))
 (assign n (op -) (reg n) (const 2))
 (assign n (op -) (reg n) (const 1))
 (assign continue (label afterfib-n-1))
 (assign continue (label fib-done)))

1 ]=> (fib-machine 'get-entry-points)

;Value 20: (continue)

1 ]=> (fib-machine 'get-stack-registers)

;Value 21: (val n continue)

1 ]=> (fib-machine 'get-register-sources)

;Value 22: 
((val ((reg n))
	  ((op +) (reg val) (reg n)))
 (n ((reg val))
	((op -) (reg n) (const 2))
	((op -) (reg n) (const 1)))
 (continue ((label afterfib-n-2))
		   ((label afterfib-n-1))
		   ((label fib-done))))

1 ]=> 
{% endhighlight %}


[mit-ch-5]: https://mitpress.mit.edu/sites/default/files/sicp/code/ch5-regsim.scm
