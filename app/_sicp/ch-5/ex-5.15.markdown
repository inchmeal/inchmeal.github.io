---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.15"
order: "015"
date: 2018-04-25 
---

Changes are marked with `;;;`:

(I also added it as an operation so that it can be called from within machine.)

{% highlight scheme linenos %}
(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (stack (make-stack))
        (the-instruction-sequence '())
		(instruction-count 0))                                          ;;;

	(define (reset-instruction-count)                                   ;;;
	  (newline)                                                         ;;;
	  (display (list "Total instructions executed: "                    ;;;
					 instruction-count))                                ;;;
	  (set! instruction-count 0)                                        ;;;
	  'done)                                                            ;;;
	
    (let ((the-ops
           (list (list 'initialize-stack
                       (lambda () (stack 'initialize)))
                 ;;**next for monitored stack (as in section 5.2.4)
                 ;;  -- comment out if not wanted
                 (list 'print-stack-statistics
                       (lambda () (stack 'print-statistics)))
				 (list 'reset-instruction-count reset-instruction-count)))  ;;;
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
              ((eq? message 'reset-instruction-count) (reset-instruction-count))   ;;;
              (else (error "Unknown request -- MACHINE" message))))
      dispatch)))
{% endhighlight %}


----

Output:

By passing message to machine:

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

;Value 7: (register simulator loaded)

1 ]=> 
;Value: gcd-machine

1 ]=> (set-register-contents! gcd-machine 'a 50)

;Value: done

1 ]=> (set-register-contents! gcd-machine 'b 375)

;Value: done

1 ]=> (gcd-machine 'reset-instruction-count)

(Total instructions executed:  0)
;Value: done

1 ]=> (start gcd-machine)

;Value: done

1 ]=> (gcd-machine 'reset-instruction-count)

(Total instructions executed:  20)
;Value: done

1 ]=> (gcd-machine 'reset-instruction-count)

(Total instructions executed:  0)
;Value: done

1 ]=> 
{% endhighlight %}

By installing it in the solution of previous exercise:

{% highlight scheme linenos %}
1 ]=> 
(define (print . items)
  (newline)
  (display items))

(define (read-at-newline)
  (newline)
  (read))

(define fact-machine
  (make-machine
   '(n val continue)
   (list (list '= =) (list '* *) (list '- -) (list 'read read-at-newline) (list 'print print))
   '(start
	 (perform (op reset-instruction-count))
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


;Value: print

1 ]=> 
;Value: read-at-newline

1 ]=> 

;Value: fact-machine

1 ]=> (start fact-machine)

(Total instructions executed:  0)
1

(total-pushes = 0 maximum-depth = 0)
(1)
(Total instructions executed:  11)
2

(total-pushes = 2 maximum-depth = 2)
(2)
(Total instructions executed:  22)
3

(total-pushes = 4 maximum-depth = 4)
(6)
(Total instructions executed:  33)
4

(total-pushes = 6 maximum-depth = 6)
(24)
(Total instructions executed:  44)
5

(total-pushes = 8 maximum-depth = 8)
(120)
(Total instructions executed:  55)

{% endhighlight %}
