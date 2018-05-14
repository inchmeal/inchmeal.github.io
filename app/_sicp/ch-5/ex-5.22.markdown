---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.22"
order: "022"
date: 2018-04-29 
---

#### append (immutable)

Code and example:

{% highlight scheme linenos %}
1 ]=> 
(define append-machine
  (make-machine
   '(x y rs continue)
   (list (list 'null? null?)
		   (list 'cons cons)
		   (list 'car car)
		   (list 'cdr cdr)
		   (list 'not not))
   '((assign continue (label done))
	loop
	 (test (op null?) (reg x))
	 (branch (label base-case))
	 (save continue)
	 (save x)
	 (assign continue (label after-append))
	 (assign x (op cdr) (reg x))
	 (goto (label loop))
	after-append
	 (restore x)
	 (restore continue)
	 (assign x (op car) (reg x))
	 (assign rs (op cons) (reg x) (reg rs))
	 (goto (reg continue))
	base-case
	 (assign rs (reg y))
	 (goto (reg continue))
	done))
)

;Value: append-machine

1 ]=> (set-register-contents! append-machine 'x '(1 2 3))

;Value: done

1 ]=> 
(set-register-contents! append-machine 'y '(a b))

;Value: done

1 ]=> (start append-machine)

;Value: done

1 ]=> (get-register-contents append-machine 'rs)

;Value 57: (1 2 3 a b)

1 ]=> 

{% endhighlight %}

#### append! mutable

{% highlight scheme linenos %}
1 ]=> 
(define append!-machine
  (make-machine
   '(x y iterx temp)
   (list (list 'null? null?)
		 (list 'set-cdr! set-cdr!)
		 (list 'cdr cdr))
   '((assign iterx (reg x))
	loop
	 (assign temp (op cdr) (reg iterx))
	 (test (op null?) (reg temp))
	 (branch (label base-case))
	 (assign iterx (op cdr) (reg iterx))
	 (goto (label loop))
	base-case
	 (perform (op set-cdr!) (reg iterx) (reg y)))))

;Value: append!-machine

1 ]=> (set-register-contents! append!-machine 'x '(p q))

;Value: done

1 ]=> (set-register-contents! append!-machine 'y '(r s))

;Value: done

1 ]=> (start append!-machine)

;Value: done

1 ]=> (get-register-contents append!-machine 'x)

;Value 58: (p q r s)

1 ]=> 

{% endhighlight %}
