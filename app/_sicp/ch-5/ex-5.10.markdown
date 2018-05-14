---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.10"
order: "010"
date: 2018-04-23
---

Well, new syntax can *also* just mean to *rename* the syntax for eg: instead of the name `assign` we may have `set`. This is quite trivial and perhaps the point of the exercise is same that because of abstraction we can indeed change the *syntax* without impacting the non-syntax procedures.

Another way is to create new syntax in the existing evaluator which might not be available before. I implemented the new expression `(add <r1> <r2> <r3>)`. This expression adds the values in `r1` and `r2` and puts the sum in `r3`.

{% highlight scheme linenos %}
(define (make-add inst machine pc)
  (let ((first (get-register machine (add-first-reg-name inst)))
		(second (get-register machine (add-second-reg-name inst)))
		(rs (get-register machine (add-result-reg-name inst))))
	(lambda ()
	  (set-contents! rs (+ (get-contents first)
						   (get-contents second)))
	  (advance-pc pc))))

(define (add-first-reg-name inst)
  (cadr inst))

(define (add-second-reg-name inst)
  (caddr inst))

(define (add-result-reg-name inst)
  (car (cdddr inst)))

;;add in main procedure
(define (make-execution-procedure inst labels machine
                                  pc flag stack ops)
  (cond ((eq? (car inst) 'assign)
         (make-assign inst machine labels ops pc))
        ((eq? (car inst) 'add)
         (make-add inst machine pc))
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
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=>
(define temp-machine
  (make-machine
   '(a b c)
   '()
   '(
	 (add a b c))))

;Value 10: (register simulator loaded)

1 ]=> 
;Value: temp-machine

1 ]=> (set-register-contents! temp-machine 'a 10)

;Value: done

1 ]=> (set-register-contents! temp-machine 'b 100)

;Value: done

1 ]=> (start temp-machine)

;Value: done

1 ]=> (get-register-contents temp-machine 'c)

;Value: 110

1 ]=> 

{% endhighlight %}
