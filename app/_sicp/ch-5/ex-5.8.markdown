---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.8"
order: "008"
date: 2018-04-23 
---

The register will contain 3. This is because labels are stored in a table in the order in which they occur in instructions. Now when a label *lookup* is done, it returns the first entry in this table. Thus it will return 3. As we can see in the output:

{% highlight scheme linenos %}
1 ]=> 
(define temp-machine
  (make-machine
   '(a)
   '()
   '(
	 start
	 (goto (label here))
	 here
	 (assign a (const 3))
	 (goto (label there))
	 here
	 (assign a (const 4))
	 (goto (label there))
	 there)))

;Value 5: (register simulator loaded)

1 ]=> 
;Value: temp-machine

1 ]=> (start temp-machine)

;Value: done

1 ]=> (get-register-contents temp-machine 'a)

;Value: 3
{% endhighlight %}

-----

Here is the modified code to report error for duplicate labels:


{% highlight scheme linenos %}
(define (contains-label? labels label-name)
  (let ((val (assoc label-name labels)))
    (if val true false)))

(define (extract-labels text receive)
  (if (null? text)
      (receive '() '())
      (extract-labels (cdr text)
       (lambda (insts labels)
         (let ((next-inst (car text)))
           (if (symbol? next-inst)
               (receive insts
                   (cons (if (contains-label? labels next-inst)
							 (error "Duplicate label found -- EXTRACT LABEL: " next-inst)
							 (make-label-entry next-inst
                                                insts))
                              labels))
               (receive (cons (make-instruction next-inst)
                              insts)
                   labels)))))))
{% endhighlight %}
