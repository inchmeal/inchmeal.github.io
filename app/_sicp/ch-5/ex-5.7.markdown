---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.7"
order: "007"
date: 2018-04-23 
---

#### (a)

{% highlight scheme linenos %}
1 ]=> 
(define expt-machine
  (make-machine
   '(n b val continue)
   (list (list '* *) (list '- -) (list '= =))
   '(
	 (assign continue (label done))
	 loop
	 (test (op =) (reg n) (const 0))
	 (branch (label base-case))
	 (save continue)
	 (assign continue (label after))
	 (assign n (op -) (reg n) (const 1))
	 (goto (label loop))
	 after
	 (restore continue)
	 (assign val (op *) (reg val) (reg b))
	 (goto (reg continue))
	 base-case
	 (assign val (const 1))   
	 (goto (reg continue))
	 done)))

;Value: expt-machine

1 ]=> 
(set-register-contents! expt-machine 'n 5)

;Value: done

1 ]=> 
(set-register-contents! expt-machine 'b 4)

;Value: done

1 ]=> (start expt-machine)

;Value: done

1 ]=> (get-register-contents expt-machine 'val)

;Value: 1024
{% endhighlight %}


#### (b)

{% highlight scheme linenos %}
1 ]=> 
(define expt-machine
  (make-machine
   '(n b product)
   (list (list '* *) (list '- -) (list '= =))
   '(
	 (assign product (const 1))
	 loop
	 (test (op =) (reg n) (const 0))
	 (branch (label done))
	 (assign n (op -) (reg n) (const 1))
	 (assign product (op *) (reg product) (reg b))
	 (goto (label loop))
	 done)))

;Value: expt-machine

1 ]=> (set-register-contents! expt-machine 'n 5)

;Value: done

1 ]=> (set-register-contents! expt-machine 'b 4)

;Value: done

1 ]=> (start expt-machine)

;Value: done

1 ]=> (get-register-contents expt-machine 'product)

;Value: 1024
{% endhighlight %}
