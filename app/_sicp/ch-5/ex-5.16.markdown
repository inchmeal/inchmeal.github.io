---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.16"
order: "016"
date: 2018-04-25 
---

Changes are marked with `;;;`:

{% highlight scheme linenos %}
(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (stack (make-stack))
        (the-instruction-sequence '())
		(instruction-count 0)
		(trace-on false))                                ;;;

	(define (reset-instruction-count)
	  (newline)
	  (display (list "Total instructions executed: " instruction-count))
	  (set! instruction-count 0)
	  'done)
	
    (let ((the-ops
           (list (list 'initialize-stack
                       (lambda () (stack 'initialize)))
                 ;;**next for monitored stack (as in section 5.2.4)
                 ;;  -- comment out if not wanted
                 (list 'print-stack-statistics
                       (lambda () (stack 'print-statistics)))
				 (list 'reset-instruction-count reset-instruction-count)))
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
				(if trace-on                                          ;;;
					(begin                                            ;;;
					  (newline)                                       ;;;
					  (display "Executing instruction: ")             ;;;
					  (display (instruction-text (car insts)))))      ;;;
                ((instruction-execution-proc (car insts)))
				(set! instruction-count (+ instruction-count 1))
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
              ((eq? message 'reset-instruction-count) (reset-instruction-count))
              ((eq? message 'trace-on) (set! trace-on true))          ;;;
              ((eq? message 'trace-off) (set! trace-on false))        ;;;
              (else (error "Unknown request -- MACHINE" message))))
      dispatch)))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> 
(define gcd-machine
  (make-machine
   '(a b t)
   (list (list 'rem remainder) (list '= =))
   '(test-b
       (test (op =) (reg b) (const 0))
       (branch (label gcd-done))
       (assign t (op rem) (reg a) (reg b))
       (assign a (reg b))
       (assign b (reg t))
       (goto (label test-b))
       gcd-done)))

;Value 8: (register simulator loaded)

1 ]=> 
;Value: gcd-machine

1 ]=> (set-register-contents! gcd-machine 'a 50)

;Value: done

1 ]=> (set-register-contents! gcd-machine 'b 375)

;Value: done

;;;;BY DEFAULT TRACE IS OFF
1 ]=> (start gcd-machine)

;Value: done

;;;NOW SWITCHING ON THE TRACE
1 ]=> (gcd-machine 'trace-on)

;Value: #f

1 ]=> (set-register-contents! gcd-machine 'a 50)

;Value: done

1 ]=> (set-register-contents! gcd-machine 'b 375)

;Value: done

1 ]=> (start gcd-machine)

Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
;Value: done

1 ]=> 

{% endhighlight %}
