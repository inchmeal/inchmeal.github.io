---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.39"
order: "039"
date: 2018-05-10 
---

{% highlight scheme linenos %}
;;ex-5.39
;;note that i later changed this from cons to list ex-5.41
(define (make-lexical-address frame-num elem-num)
  (cons frame-num elem-num))

(define (lex-addr-frame-num lexical-address)
  (car lexical-address))
(define (lex-addr-displacement lexical-address)
  (cdr lexical-address))

(define (lexical-address-lookup lex-addr env)
  (let ((correct-env (env-ref env
							  (lex-addr-frame-num lex-addr))))
	(let ((elem (list-ref (frame-values
						   (first-frame correct-env))
						  (lex-addr-displacement lex-addr))))
	  (if (eq? elem '*unassigned*)
		  (error "Error - Unassigned variable access!")
		  elem))))
  
(define (lexical-address-set! lex-addr val env)
  (let ((correct-env (env-ref env
							  (lex-addr-frame-num lex-addr))))
    (list-set! (frame-values
				(first-frame correct-env))
			   (lex-addr-displacement lex-addr)
			   val)
	'ok))

(define (env-ref env frame-num)
  (cond ((eq? env the-empty-environment)
		 (error "Invalid environment!"))
		((= frame-num 0) env)
		(else (env-ref
			   (enclosing-environment env)
			   (- frame-num 1)))))
{% endhighlight %}
