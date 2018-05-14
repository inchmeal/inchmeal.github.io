---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.9"
order: "009"
date: 2018-04-23 
---

{% highlight scheme linenos %}
(define (make-operation-exp exp machine labels operations)
  (let ((op (lookup-prim (operation-exp-op exp) operations))
        (aprocs
         (map (lambda (e)
				(if (label-exp? e)
					(error "Operation expression can not contain label - " e)
					(make-primitive-exp e machine labels)))
              (operation-exp-operands exp))))
    (lambda ()
      (apply op (map (lambda (p) (p)) aprocs)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> 
(define temp-machine
  (make-machine
   '(a)
   (list (list 'equal? equal?))
   '(
	 start
	 (goto (label here))
	 here
	 (test (op equal?) (label here) (label here))
	 (goto (label there))
	 there)))

;Value 7: (register simulator loaded)

1 ]=> 
;Operation expression can not contain label -  (label here)
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> 

{% endhighlight %}
