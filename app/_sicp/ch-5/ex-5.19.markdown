---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.19"
order: "019"
date: 2018-04-25 
---

Here is my approach:

- The main idea is to store the `lineno` in instructions data-structure.
- When installing a breakpoint, compute the lineno of the intruction where breakpoint needs to be installed and then store this lineno in a breakpoint table.
- While executing, stop the execution if the current lineno being executed is inside the breakpoint table.
- For the case when we proceed from a breakpoint, maintain a flag `resume-from-breakpoint?`. If this value is set then don't stop at the breakpoint as well as unset it so that we can stop again at the breakpoint.
- To compute lineno from the offset `n` given by user, we need lables table. Thus, inside `make-machine`, now i also installed labels in the machine.

Well, thats it!

I shall first present the main changes and then at the bottom(after example output), will put the complete code.

So, here are the main changes:

{% highlight scheme linenos %}
;;NEW PROCEDURES
(define (cancel-all-breakpoints machine)
  (machine 'remove-all-breakpoints))

(define (proceed-machine machine)
  (machine 'resume-from-breakpoint))

(define (cancel-breakpoint machine label-name offset)
  (let ((labels (machine 'labels)))
	(let ((label-insts (lookup-label labels label-name)))
	  (if (null? label-insts)
		  (error "Invalid request as a breakpoint can't be at the end of instructions!")
		  ((machine 'remove-breakpoint)
		   (+ (instruction-lineno (car label-insts))
			  (- offset 1))
		   (cons label-name
				 offset))))))

(define (set-breakpoint machine label-name offset)
  (let ((labels (machine 'labels)))
	(let ((label-insts (lookup-label labels label-name)))
	  (if (null? label-insts)
		  (error "Can not define breakpoint at the end of instructions!")
		  ((machine 'install-breakpoint)
		   (+ (instruction-lineno (car label-insts))
			  (- offset 1))
		   (cons label-name
				 offset))))))

;;;Changes are marked with ;;;
(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (stack (make-stack))
        (the-instruction-sequence '())
		(instruction-count 0)
		(trace-on false)
		(labels '())                           ;;;
		(breakpoint-lineno-table '())          ;;;
		;;total available instructions
		;;not to be confused with instruction-count
		;;which contains the number of instructions executed
		(total-instructions 0)                 ;;;
		(resume-from-breakpoint? false))       ;;;
	(define (reset-instruction-count)
	  (newline)
	  (display (list "Total instructions executed: " instruction-count))
	  (set! instruction-count 0)
	  'done)
	(define (install-breakpoint lineno breakpoint)                             ;;;
	  (if (> lineno total-instructions)                                        ;;;
		  (begin                                                               ;;;
			(newline)                                                          ;;;
			(display "Ignoring breakpoint: ")                                  ;;;
			(display breakpoint)                                               ;;; 
			(display " as this offset lies after all the instructions!")       ;;;
			'ignored)                                                          ;;; 
		  (let ((breakpoint-at-lineno (assoc lineno breakpoint-lineno-table))) ;;;
			(if breakpoint-at-lineno                                           ;;; 
				(begin                                                         ;;; 
				  (newline)                                                    ;;; 
				  (display "Ignoring breakpoint: ")                            ;;; 
				  (display breakpoint)                                         ;;; 
				  (display " as this point is already set by an existing breakpoint: ") ;;;
				  (display (cdr breakpoint-at-lineno)))                        ;;;
				(begin
				  (set! breakpoint-lineno-table (cons (cons lineno breakpoint) ;;;
													  breakpoint-lineno-table));;;
				  'installed-breakpoint)))))
	(define (remove-breakpoint lineno breakpoint)                              ;;;
	  (let ((breakpoint-at-lineno (assoc lineno breakpoint-lineno-table)))     ;;;
		(if breakpoint-at-lineno 
			(begin                                                             ;;; 
			  (set! breakpoint-lineno-table                                    ;;;
					(delete! breakpoint-at-lineno breakpoint-lineno-table))    ;;;
			  'removed-breakpoint)                                             ;;; 
			(begin                                                             ;;; 
			  (newline)                                                        ;;; 
			  (display "Ignoring remove breakpoint since : ")                  ;;; 
			  (display breakpoint)                                             ;;; 
			  (display " is not present!")                                     ;;; 
			  'not-present))))                                                 ;;; 
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
			  (let ((breakpoint-at-lineno (assoc (instruction-lineno (car insts)) ;;;
										breakpoint-lineno-table)))                ;;; 
				(if (and (not resume-from-breakpoint?)                            ;;; 
						 breakpoint-at-lineno)                                    ;;; 
					(begin (newline)                                              ;;; 
						   (display "Stopped at break-point " )                   ;;; 
						   (display (cdr breakpoint-at-lineno))                   ;;; 
						   'breakpoint)                                           ;;; 
					(begin
					  (if resume-from-breakpoint?                                 ;;; 
						  (set! resume-from-breakpoint? false))                   ;;; 
					  (if trace-on
						  (begin
							(for-each (lambda(label)
										(newline)
										(display "Moving over label: ")
										(display label))
									  (instruction-labels (car insts)))
							(newline)
							(display "Executing instruction: ")
							(display (instruction-text (car insts)))))
					  ((instruction-execution-proc (car insts)))
					  (set! instruction-count (+ instruction-count 1))
					  (execute)))))))
      (define (dispatch message)
        (cond ((eq? message 'start)
               (set-contents! pc the-instruction-sequence)
               (execute))
              ((eq? message 'install-instruction-sequence)
               (lambda (seq)
				 (set! the-instruction-sequence seq)
				 (set! total-instructions (length seq))))
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
              ((eq? message 'install-labels)                            ;;; 
               (lambda (lbls) (set! labels lbls)))                      ;;; 
			  ((eq? message 'labels) labels)                            ;;; 
              ((eq? message 'install-breakpoint) install-breakpoint)    ;;;
              ((eq? message 'remove-breakpoint) remove-breakpoint)      ;;;
              ((eq? message 'remove-all-breakpoints)                    ;;; 
			   (set! breakpoint-lineno-table '())                       ;;; 
			   'done)                                                   ;;; 
			  ((eq? message 'resume-from-breakpoint)                    ;;; 
			   (set! resume-from-breakpoint? true)                      ;;; 
			   (execute))                                               ;;; 
              (else (error "Unknown request -- MACHINE" message))))
      dispatch)))

;;There is a small change is extract-labels for linenos
(define (extract-labels lineno text receive)
  (if (null? text)
      (receive '() '())
      (let ((next-inst (car text)))
		(if (not (symbol? next-inst))
			(set! lineno (+ lineno 1)))
		(extract-labels lineno (cdr text)
						(lambda (insts labels)
						  (if (symbol? next-inst)
							  (begin
								(if (not (null? insts))
									(add-a-instruction-label! (car insts)
															  next-inst))
								(receive insts
									(cons (make-label-entry next-inst
															insts)
										  labels)))
							  (receive (cons (make-instruction next-inst lineno)
											 insts)
								  labels)))))))

;;assemble now also returns labels
(define (assemble controller-text machine)
  (extract-labels 0 controller-text
    (lambda (insts labels)
      (update-insts! insts labels machine)
	  ;;now return the pair of insts and labels
	  ;;instead of just insts.
	  (cons insts labels))))  ;;;

(define (make-machine register-names ops controller-text)
  (let ((machine (make-new-machine)))
    (for-each (lambda (register-name)
                ((machine 'allocate-register) register-name))
              register-names)
    ((machine 'install-operations) ops)
	
    (let ((insts-and-labels (assemble controller-text machine))) ;;;
      ((machine 'install-instruction-sequence)                   ;;;
       (car insts-and-labels))                                   ;;; 
	  ((machine 'install-labels)                                 ;;; 
	   (cdr insts-and-labels)))                                  ;;; 
    machine))                                                    ;;; 

{% endhighlight %}

------

#### Test/Output:

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

(set-breakpoint gcd-machine 'test-b 4)
(set-breakpoint gcd-machine 'test-b 5)
(gcd-machine 'trace-on)
(set-register-contents! gcd-machine 'a 50)
(set-register-contents! gcd-machine 'b 375)
(start gcd-machine)

;Value 53: (register simulator loaded)

1 ]=> 
;Value: gcd-machine

1 ]=> 
;Value: installed-breakpoint

1 ]=> 
;Value: installed-breakpoint

1 ]=> 
;Value: #f

1 ]=> 
;Value: done

1 ]=> 
;Value: done

1 ]=> 
Moving over label: test-b
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Stopped at break-point (test-b . 4)
;Value: breakpoint

1 ]=> (proceed-machine gcd-machine)

Executing instruction: (assign a (reg b))
Stopped at break-point (test-b . 5)
;Value: breakpoint

1 ]=> (get-register-contents gcd-machine 'a)

;Value: 375

1 ]=> (get-register-contents gcd-machine 'b)

;Value: 375

1 ]=> (get-register-contents gcd-machine 't)

;Value: 50

1 ]=> (cancel-breakpoint gcd-machine 'test-b 4)

;Value: removed-breakpoint

1 ]=> (proceed-machine gcd-machine)

Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Stopped at break-point (test-b . 5)
;Value: breakpoint

1 ]=> (get-register-contents gcd-machine 't)

;Value: 25

1 ]=> (cancel-all-breakpoints gcd-machine)

;Value: done

1 ]=> (proceed-machine gcd-machine)

Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
;Value: done

1 ]=> 
(set-breakpoint gcd-machine 'test-b 4)

;Value: installed-breakpoint

1 ]=> 
(set-breakpoint gcd-machine 'test-b 4)

Ignoring breakpoint: (test-b . 4) as this point is already set by an existing breakpoint: (test-b . 4)
;Unspecified return value

1 ]=> 
(set-breakpoint gcd-machine 'test-b 40)

Ignoring breakpoint: (test-b . 40) as this offset lies after all the instructions!
;Value: ignored

1 ]=> 
(set-breakpoint gcd-machine 'gcd-done 4)

;Can not define breakpoint at the end of instructions!
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> 

{% endhighlight %}


#### Complete code:

This code include changes for exercises 5.14 to 5.19:

{% highlight scheme linenos %}

;;;;REGISTER-MACHINE SIMULATOR FROM SECTION 5.2 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch5.scm

;;;;This file can be loaded into Scheme as a whole.
;;;;Then you can define and simulate machines as shown in section 5.2

;;;**NB** there are two versions of make-stack below.
;;; Choose the monitored or unmonitored one by reordering them to put the
;;;  one you want last, or by commenting one of them out.
;;; Also, comment in/out the print-stack-statistics op in make-new-machine
;;; To find this stack code below, look for comments with **


(define (make-machine register-names ops controller-text)
  (let ((machine (make-new-machine)))
    (for-each (lambda (register-name)
                ((machine 'allocate-register) register-name))
              register-names)
    ((machine 'install-operations) ops)
	
    (let ((insts-and-labels (assemble controller-text machine)))
      ((machine 'install-instruction-sequence)
       (car insts-and-labels))
	  ((machine 'install-labels)
	   (cdr insts-and-labels)))
	
    machine))

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

(define (get-contents register)
  (register 'get))

(define (set-contents! register value)
  ((register 'set) value))

;;**original (unmonitored) version from section 5.2.1
(define (make-stack)
  (let ((s '()))
    (define (push x)
      (set! s (cons x s)))
    (define (pop)
      (if (null? s)
          (error "Empty stack -- POP")
          (let ((top (car s)))
            (set! s (cdr s))
            top)))
    (define (initialize)
      (set! s '())
      'done)
    (define (dispatch message)
      (cond ((eq? message 'push) push)
            ((eq? message 'pop) (pop))
            ((eq? message 'initialize) (initialize))
            (else (error "Unknown request -- STACK"
                         message))))
    dispatch))

(define (pop stack)
  (stack 'pop))

(define (push stack value)
  ((stack 'push) value))

;;**monitored version from section 5.2.4
(define (make-stack)
  (let ((s '())
        (number-pushes 0)
        (max-depth 0)
        (current-depth 0))
    (define (push x)
      (set! s (cons x s))
      (set! number-pushes (+ 1 number-pushes))
      (set! current-depth (+ 1 current-depth))
      (set! max-depth (max current-depth max-depth)))
    (define (pop)
      (if (null? s)
          (error "Empty stack -- POP")
          (let ((top (car s)))
            (set! s (cdr s))
            (set! current-depth (- current-depth 1))
            top)))    
    (define (initialize)
      (set! s '())
      (set! number-pushes 0)
      (set! max-depth 0)
      (set! current-depth 0)
      'done)
    (define (print-statistics)
      (newline)
      (display (list 'total-pushes  '= number-pushes
                     'maximum-depth '= max-depth)))
    (define (dispatch message)
      (cond ((eq? message 'push) push)
            ((eq? message 'pop) (pop))
            ((eq? message 'initialize) (initialize))
            ((eq? message 'print-statistics)
             (print-statistics))
            (else
             (error "Unknown request -- STACK" message))))
    dispatch))

(define (cancel-all-breakpoints machine)
  (machine 'remove-all-breakpoints))

(define (proceed-machine machine)
  (machine 'resume-from-breakpoint))

(define (cancel-breakpoint machine label-name offset)
  (let ((labels (machine 'labels)))
	(let ((label-insts (lookup-label labels label-name)))
	  (if (null? label-insts)
		  (error "Invalid request as a breakpoint can't be at the end of instructions!")
		  ((machine 'remove-breakpoint)
		   (+ (instruction-lineno (car label-insts))
			  (- offset 1))
		   (cons label-name
				 offset))))))

(define (set-breakpoint machine label-name offset)
  (let ((labels (machine 'labels)))
	(let ((label-insts (lookup-label labels label-name)))
	  (if (null? label-insts)
		  (error "Can not define breakpoint at the end of instructions!")
		  ((machine 'install-breakpoint)
		   (+ (instruction-lineno (car label-insts))
			  (- offset 1))
		   (cons label-name
				 offset))))))

(define (make-new-machine)
  (let ((pc (make-register 'pc))
        (flag (make-register 'flag))
        (stack (make-stack))
        (the-instruction-sequence '())
		(instruction-count 0)
		(trace-on false)
		(labels '())
		(breakpoint-lineno-table '())
		;;total available instructions
		;;not to be confused with instruction-count
		;;which contains the number of instructions executed
		(total-instructions 0) 
		(resume-from-breakpoint? false))
	(define (reset-instruction-count)
	  (newline)
	  (display (list "Total instructions executed: " instruction-count))
	  (set! instruction-count 0)
	  'done)
	(define (install-breakpoint lineno breakpoint)
	  (if (> lineno total-instructions)
		  (begin
			(newline)
			(display "Ignoring breakpoint: ")
			(display breakpoint)
			(display " as this offset lies after all the instructions!")
			'ignored)
		  (let ((breakpoint-at-lineno (assoc lineno breakpoint-lineno-table)))
			(if breakpoint-at-lineno
				(begin
				  (newline)
				  (display "Ignoring breakpoint: ")
				  (display breakpoint)
				  (display " as this point is already set by an existing breakpoint: ")
				  (display (cdr breakpoint-at-lineno)))
				(begin
				  (set! breakpoint-lineno-table (cons (cons lineno breakpoint)
													  breakpoint-lineno-table))
				  'installed-breakpoint)))))
	(define (remove-breakpoint lineno breakpoint)
	  (let ((breakpoint-at-lineno (assoc lineno breakpoint-lineno-table)))
		(if breakpoint-at-lineno 
			(begin
			  (set! breakpoint-lineno-table
					(delete! breakpoint-at-lineno breakpoint-lineno-table))
			  'removed-breakpoint)
			(begin
			  (newline)
			  (display "Ignoring remove breakpoint since : ")
			  (display breakpoint)
			  (display " is not present!")
			  'not-present))))
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
			  (let ((breakpoint-at-lineno (assoc (instruction-lineno (car insts))
										breakpoint-lineno-table)))
				(if (and (not resume-from-breakpoint?)
						 breakpoint-at-lineno)
					(begin (newline)
						   (display "Stopped at break-point " )
						   (display (cdr breakpoint-at-lineno))
						   'breakpoint)
					(begin
					  (if resume-from-breakpoint?
						  (set! resume-from-breakpoint? false))
					  (if trace-on
						  (begin
							(for-each (lambda(label)
										(newline)
										(display "Moving over label: ")
										(display label))
									  (instruction-labels (car insts)))
							(newline)
							(display "Executing instruction: ")
							(display (instruction-text (car insts)))))
					  ((instruction-execution-proc (car insts)))
					  (set! instruction-count (+ instruction-count 1))
					  (execute)))))))
      (define (dispatch message)
        (cond ((eq? message 'start)
               (set-contents! pc the-instruction-sequence)
               (execute))
              ((eq? message 'install-instruction-sequence)
               (lambda (seq)
				 (set! the-instruction-sequence seq)
				 (set! total-instructions (length seq))))
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
              ((eq? message 'install-labels)
               (lambda (lbls) (set! labels lbls)))
			  ((eq? message 'labels) labels)
              ((eq? message 'install-breakpoint) install-breakpoint)
              ((eq? message 'remove-breakpoint) remove-breakpoint)
              ((eq? message 'remove-all-breakpoints)
			   (set! breakpoint-lineno-table '())
			   'done)
			  ((eq? message 'resume-from-breakpoint)
			   (set! resume-from-breakpoint? true)
			   (execute))
              (else (error "Unknown request -- MACHINE" message))))
      dispatch)))


(define (start machine)
  (machine 'start))

(define (get-register-contents machine register-name)
  (get-contents (get-register machine register-name)))

(define (set-register-contents! machine register-name value)
  (set-contents! (get-register machine register-name) value)
  'done)

(define (get-register machine reg-name)
  ((machine 'get-register) reg-name))

(define (assemble controller-text machine)
  (extract-labels 0 controller-text
    (lambda (insts labels)
      (update-insts! insts labels machine)
	  ;;now return the pair of insts and labels
	  ;;instead of just insts.
	  (cons insts labels))))

(define (extract-labels lineno text receive)
  (if (null? text)
      (receive '() '())
      (let ((next-inst (car text)))
		(if (not (symbol? next-inst))
			(set! lineno (+ lineno 1)))
		(extract-labels lineno (cdr text)
						(lambda (insts labels)
						  (if (symbol? next-inst)
							  (begin
								(if (not (null? insts))
									(add-a-instruction-label! (car insts)
															  next-inst))
								(receive insts
									(cons (make-label-entry next-inst
															insts)
										  labels)))
							  (receive (cons (make-instruction next-inst lineno)
											 insts)
								  labels)))))))

(define (update-insts! insts labels machine)
  (let ((pc (get-register machine 'pc))
        (flag (get-register machine 'flag))
        (stack (machine 'stack))
        (ops (machine 'operations)))
    (for-each
     (lambda (inst)
       (set-instruction-execution-proc! 
        inst
        (make-execution-procedure
         (instruction-text inst) labels machine
         pc flag stack ops)))
     insts)))

(define (make-instruction text lineno)
  (cons (cons lineno text) (cons '() '())))

(define (instruction-text inst)
  (cdar inst))

(define (instruction-lineno inst)
  (caar inst))

(define (instruction-execution-proc inst)
  (cadr inst))

(define (instruction-labels inst)
  (cddr inst))

(define (set-instruction-execution-proc! inst proc)
  (set-car! (cdr inst) proc))

(define (set-instruction-labels! inst labels)
  (set-cdr! (cdr inst) labels))

(define (add-a-instruction-label! inst label)
  (set-instruction-labels! inst (cons label (instruction-labels inst))))

(define (make-label-entry label-name insts)
  (cons label-name insts))

(define (lookup-label labels label-name)
  (let ((val (assoc label-name labels)))
    (if val
        (cdr val)
        (error "Undefined label -- ASSEMBLE" label-name))))


(define (make-execution-procedure inst labels machine
                                  pc flag stack ops)
  (cond ((eq? (car inst) 'assign)
         (make-assign inst machine labels ops pc))
        ((eq? (car inst) 'test)
         (make-test inst machine labels ops flag pc))
        ((eq? (car inst) 'branch)
         (make-branch inst machine labels flag pc))
        ((eq? (car inst) 'goto)
         (make-goto inst machine labels pc))
        ((eq? (car inst) 'save)
         (make-save inst machine stack pc))
        ((eq? (car inst) 'restore)
         (make-restore inst machine stack pc))
        ((eq? (car inst) 'perform)
         (make-perform inst machine labels ops pc))
        (else (error "Unknown instruction type -- ASSEMBLE"
                     inst))))


(define (make-assign inst machine labels operations pc)
  (let ((target
         (get-register machine (assign-reg-name inst)))
        (value-exp (assign-value-exp inst)))
    (let ((value-proc
           (if (operation-exp? value-exp)
               (make-operation-exp
                value-exp machine labels operations)
               (make-primitive-exp
                (car value-exp) machine labels))))
      (lambda ()                ; execution procedure for assign
        (set-contents! target (value-proc))
        (advance-pc pc)))))

(define (assign-reg-name assign-instruction)
  (cadr assign-instruction))

(define (assign-value-exp assign-instruction)
  (cddr assign-instruction))

(define (advance-pc pc)
  (set-contents! pc (cdr (get-contents pc))))

(define (make-test inst machine labels operations flag pc)
  (let ((condition (test-condition inst)))
    (if (operation-exp? condition)
        (let ((condition-proc
               (make-operation-exp
                condition machine labels operations)))
          (lambda ()
            (set-contents! flag (condition-proc))
            (advance-pc pc)))
        (error "Bad TEST instruction -- ASSEMBLE" inst))))

(define (test-condition test-instruction)
  (cdr test-instruction))


(define (make-branch inst machine labels flag pc)
  (let ((dest (branch-dest inst)))
    (if (label-exp? dest)
        (let ((insts
               (lookup-label labels (label-exp-label dest))))
          (lambda ()
            (if (get-contents flag)
                (set-contents! pc insts)
                (advance-pc pc))))
        (error "Bad BRANCH instruction -- ASSEMBLE" inst))))

(define (branch-dest branch-instruction)
  (cadr branch-instruction))


(define (make-goto inst machine labels pc)
  (let ((dest (goto-dest inst)))
    (cond ((label-exp? dest)
           (let ((insts
                  (lookup-label labels
                                (label-exp-label dest))))
             (lambda () (set-contents! pc insts))))
          ((register-exp? dest)
           (let ((reg
                  (get-register machine
                                (register-exp-reg dest))))
             (lambda ()
               (set-contents! pc (get-contents reg)))))
          (else (error "Bad GOTO instruction -- ASSEMBLE"
                       inst)))))

(define (goto-dest goto-instruction)
  (cadr goto-instruction))

(define (make-save inst machine stack pc)
  (let ((reg (get-register machine
                           (stack-inst-reg-name inst))))
    (lambda ()
      (push stack (get-contents reg))
      (advance-pc pc))))

(define (make-restore inst machine stack pc)
  (let ((reg (get-register machine
                           (stack-inst-reg-name inst))))
    (lambda ()
      (set-contents! reg (pop stack))    
      (advance-pc pc))))

(define (stack-inst-reg-name stack-instruction)
  (cadr stack-instruction))

(define (make-perform inst machine labels operations pc)
  (let ((action (perform-action inst)))
    (if (operation-exp? action)
        (let ((action-proc
               (make-operation-exp
                action machine labels operations)))
          (lambda ()
            (action-proc)
            (advance-pc pc)))
        (error "Bad PERFORM instruction -- ASSEMBLE" inst))))

(define (perform-action inst) (cdr inst))

(define (make-primitive-exp exp machine labels)
  (cond ((constant-exp? exp)
         (let ((c (constant-exp-value exp)))
           (lambda () c)))
        ((label-exp? exp)
         (let ((insts
                (lookup-label labels
                              (label-exp-label exp))))
           (lambda () insts)))
        ((register-exp? exp)
         (let ((r (get-register machine
                                (register-exp-reg exp))))
           (lambda () (get-contents r))))
        (else
         (error "Unknown expression type -- ASSEMBLE" exp))))

(define (register-exp? exp) (tagged-list? exp 'reg))

(define (register-exp-reg exp) (cadr exp))

(define (constant-exp? exp) (tagged-list? exp 'const))

(define (constant-exp-value exp) (cadr exp))

(define (label-exp? exp) (tagged-list? exp 'label))

(define (label-exp-label exp) (cadr exp))


(define (make-operation-exp exp machine labels operations)
  (let ((op (lookup-prim (operation-exp-op exp) operations))
        (aprocs
         (map (lambda (e)
                (make-primitive-exp e machine labels))
              (operation-exp-operands exp))))
    (lambda ()
      (apply op (map (lambda (p) (p)) aprocs)))))

(define (operation-exp? exp)
  (and (pair? exp) (tagged-list? (car exp) 'op)))
(define (operation-exp-op operation-exp)
  (cadr (car operation-exp)))
(define (operation-exp-operands operation-exp)
  (cdr operation-exp))


(define (lookup-prim symbol operations)
  (let ((val (assoc symbol operations)))
    (if val
        (cadr val)
        (error "Unknown operation -- ASSEMBLE" symbol))))

;; from 4.1
(define (tagged-list? exp tag)
  (if (pair? exp)
      (eq? (car exp) tag)
      false))

'(REGISTER SIMULATOR LOADED)
{% endhighlight %}
