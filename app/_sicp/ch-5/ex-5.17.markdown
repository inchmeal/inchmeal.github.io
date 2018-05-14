---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.17"
order: "017"
date: 2018-04-25 
---

As suggested in the exercise - *retain necessary information* - we can collect these labels inside the intruction data structure!

One thing to note is that there can be multiple labels contigously present in the controller sequence. For such labels, we should print all labels before printing the next immediate instruction.

Here are the required changes:

{% highlight scheme linenos %}
;;CHANGES IN instruction DATA
(define (make-instruction text)
  (cons text (cons '() '())))

(define (instruction-text inst)
  (car inst))

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

;;Changes in procedure extract-labels
(define (extract-labels text receive)
  (if (null? text)
      (receive '() '())
      (extract-labels (cdr text)
       (lambda (insts labels)
         (let ((next-inst (car text)))
           (if (symbol? next-inst)
               (begin
				 ;;initially i forgot this null check which caused me some
				 ;;trouble while testing.
				 (if (not (null? insts))                                 ;;; 
					 (add-a-instruction-label! (car insts) next-inst))   ;;;
				 (receive insts
                     (cons (make-label-entry next-inst
                                             insts)
                           labels)))
               (receive (cons (make-instruction next-inst)
                              insts)
                   labels)))))))


;;CHANGES IN execute procedure inside procedure make-new-machine
(define (execute)
  (let ((insts (get-contents pc)))
    (if (null? insts)
        'done
      (begin
	   (if trace-on
		   (begin
			(for-each (lambda(label)                     ;;;
						(newline)                        ;;;
						(display "Moving over label: ")  ;;;
						(display label))                 ;;;
					  (instruction-labels (car insts)))  ;;;
			(newline)
			(display "Executing instruction: ")
			(display (instruction-text (car insts)))))
       ((instruction-execution-proc (car insts)))
	   (set! instruction-count (+ instruction-count 1))
       (execute)))))
{% endhighlight %}

-------

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

(gcd-machine 'trace-on)
(set-register-contents! gcd-machine 'a 50)
(set-register-contents! gcd-machine 'b 375)
(start gcd-machine)

;Value 12: (register simulator loaded)

1 ]=> 
;Value: gcd-machine

1 ]=> 
;Value: #f

1 ]=> 
;Value: done

1 ]=> 
;Value: done

1 ]=> 
Moving over label: test-b
Moving over label: dummy-label
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Moving over label: dummy-label
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Moving over label: dummy-label
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
Executing instruction: (assign t (op rem) (reg a) (reg b))
Executing instruction: (assign a (reg b))
Executing instruction: (assign b (reg t))
Executing instruction: (goto (label test-b))
Moving over label: test-b
Moving over label: dummy-label
Executing instruction: (test (op =) (reg b) (const 0))
Executing instruction: (branch (label gcd-done))
;Value: done

1 ]=> 
{% endhighlight %}
