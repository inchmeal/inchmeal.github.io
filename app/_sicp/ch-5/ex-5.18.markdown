---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.18"
order: "018"
date: 2018-04-25 
---

{% highlight scheme linenos %}
(define (make-register name)
  (let ((contents '*unassigned*)
		(trace-on false))
    (define (dispatch message)
      (cond ((eq? message 'get) contents)
            ((eq? message 'set)
             (lambda (value)
			   (if trace-on
				   (begin
					 (newline)
					 (display "Changing reg-")
					 (display name)
					 (display " old-val: ")
					 (display contents)
					 (display " new-val: ")
					 (display value)))
			   (set! contents value)))
			((eq? message 'trace-on) (set! trace-on true))
			((eq? message 'trace-off) (set! trace-on false))
            (else
             (error "Unknown request -- REGISTER" message))))
    dispatch))

;;;CHANGES IN DISPATCH PROCEDURE IN make-new-machine
;;note the to support variable number of arguments we need to separate first-register
;; and other registers (lambda (first-reg . reg-names))
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
        ((eq? message 'trace-on) (set! trace-on true))
        ((eq? message 'trace-off) (set! trace-on false))
        ((eq? message 'registers-trace-on)
		 (lambda (first-reg . reg-names)
		   (for-each (lambda(reg-name)
					   ((lookup-register reg-name) 'trace-on))
					 (cons first-reg reg-names))))
        ((eq? message 'registers-trace-off)
		 (lambda (first-reg . reg-names)
		   (for-each (lambda(reg-name)
					   ((lookup-register reg-name) 'trace-off))
					 (cons first-reg reg-names))))
        (else (error "Unknown request -- MACHINE" message))))
{% endhighlight %}

-----

Output:

{% highlight scheme linenos %}
1 ]=> 
(define gcd-machine
  (make-machine
   '(a b t)
   (list (list 'rem remainder) (list '= =))
   '(test-b
	 dummy-label
       (test (op =) (reg b) (const 0))
       (branch (label gcd-done))
       (assign t (op rem) (reg a) (reg b))
       (assign a (reg b))
       (assign b (reg t))
       (goto (label test-b))
       gcd-done)))

((gcd-machine 'registers-trace-on) 'a 'b)
(set-register-contents! gcd-machine 'a 50)
(set-register-contents! gcd-machine 'b 375)
(start gcd-machine)

;Value 18: (register simulator loaded)

1 ]=> 
;Value: gcd-machine

1 ]=> 
;Unspecified return value

1 ]=> 
Changing reg-a old-val: *unassigned* new-val: 50
;Value: done

1 ]=> 
Changing reg-b old-val: *unassigned* new-val: 375
;Value: done

1 ]=> 
Changing reg-a old-val: 50 new-val: 375
Changing reg-b old-val: 375 new-val: 50
Changing reg-a old-val: 375 new-val: 50
Changing reg-b old-val: 50 new-val: 25
Changing reg-a old-val: 50 new-val: 25
Changing reg-b old-val: 25 new-val: 0
;Value: done

1 ]=> 
{% endhighlight %}
