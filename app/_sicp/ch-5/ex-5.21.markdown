---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.21"
order: "021"
date: 2018-04-29 
---

#### (a)

Code turned out quite similar to the book's version of fibonacci(one with double recursion):

{% highlight scheme linenos %}
(define count-leaves-machine
  (make-machine
   '(tree continue count temp)
   (list (list 'null? null?)
		   (list 'pair? pair?)
		   (list 'car car)
		   (list 'cdr cdr)
		   (list 'not not)
		   (list '+ +))
   '((assign continue (label done))
	loop
	 (test (op null?) (reg tree))
	 (branch (label base-case-0))
	 (assign temp (op pair?) (reg tree))
	 (test (op not) (reg temp))
	 (branch (label base-case-1))
	 (save continue)
	 (save tree)
	 (assign continue (label after-car-count))
	 (assign tree (op car) (reg tree))
	 (goto (label loop))
	after-car-count
	 (restore tree)
	 (assign tree (op cdr) (reg tree))
	 (assign continue (label after-cdr-count))
	 (save count)
	 (goto (label loop))
	after-cdr-count
	 (assign temp (reg count))
	 (restore count)
	 (assign count (op +) (reg temp) (reg count))
	 (restore continue)
	 (goto (reg continue))
	base-case-0
	 (assign count (const 0))
	 (goto (reg continue))
	base-case-1
	 (assign count (const 1))
	 (goto (reg continue))
	done)))
{% endhighlight %}

Output/Test:

{% highlight scheme linenos %}
1 ]=> (define t '((1 . (2 . 3)) . ((4 . 5) . ((6 . ()) . 7))))

;Value: t

1 ]=> t

;Value 56: ((1 2 . 3) (4 . 5) (6) . 7)

1 ]=> 
(define count-leaves-machine
  (make-machine
   '(tree continue count temp)
   (list (list 'null? null?)
		   (list 'pair? pair?)
		   (list 'car car)
		   (list 'cdr cdr)
		   (list 'not not)
		   (list '+ +))
   '((assign continue (label done))
	loop
	 (test (op null?) (reg tree))
	 (branch (label base-case-0))
	 (assign temp (op pair?) (reg tree))
	 (test (op not) (reg temp))
	 (branch (label base-case-1))
	 (save continue)
	 (save tree)
	 (assign continue (label after-car-count))
	 (assign tree (op car) (reg tree))
	 (goto (label loop))
	after-car-count
	 (restore tree)
	 (assign tree (op cdr) (reg tree))
	 (assign continue (label after-cdr-count))
	 (save count)
	 (goto (label loop))
	after-cdr-count
	 (assign temp (reg count))
	 (restore count)
	 (assign count (op +) (reg temp) (reg count))
	 (restore continue)
	 (goto (reg continue))
	base-case-0
	 (assign count (const 0))
	 (goto (reg continue))
	base-case-1
	 (assign count (const 1))
	 (goto (reg continue))
	done)))

;Value: count-leaves-machine

1 ]=> (set-register-contents! count-leaves-machine 'tree t)

;Value: done

1 ]=> (start count-leaves-machine)

;Value: done

1 ]=> (get-register-contents count-leaves-machine 'count)

;Value: 7

1 ]=> 
{% endhighlight %}

#### (b)

Code with example:

(Note that there is still one recursive process(and one iterative process))

{% highlight scheme linenos %}
1 ]=> 
(define count-leaves-iter-machine
  (make-machine
   '(tree count continue temp)
   (list (list 'null? null?)
		   (list 'pair? pair?)
		   (list 'car car)
		   (list 'cdr cdr)
		   (list 'not not)
		   (list '+ +))
   '((assign continue (label done))
	 (assign count (const 0))
	loop
	 (test (op null?) (reg tree))
	 (branch (label base-case-0))
	 (assign temp (op pair?) (reg tree))
	 (test (op not) (reg temp))
	 (branch (label base-case-1))
	 (save continue)
	 (save tree)
	 (assign tree (op cdr) (reg tree))
	 (assign continue (label car-count))
	 (goto (label loop))
	car-count
	 (restore tree)
	 (restore continue)
	 (assign tree (op car) (reg tree))
	 (goto (reg continue))
	base-case-0
	 (goto (reg continue))
	base-case-1
	 (assign count (op +) (reg count) (const 1))
	 (goto (reg continue))
	done)))

;Value: count-leaves-iter-machine

1 ]=> (define t '((1 . (2 . 3)) . ((4 . 5) . ((6 . ()) . 7))))

;Value: t

1 ]=> (set-register-contents! count-leaves-machine 'tree t)

;Value: done

1 ]=> (start count-leaves-iter-machine)

;Value: done

1 ]=> (get-register-contents count-leaves-machine 'count)

;Value: 7

1 ]=> 

{% endhighlight %}
