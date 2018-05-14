---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.41"
order: "041"
date: 2018-05-11
---

For finding variable, i just duplicated the book's code for looking up a variable in environment(runtime).

Initially, i used `cons` for lexical address but from the examples shown here use `list`, so i changed my code to reflect that. 

{% highlight scheme linenos %}
(define (make-lexical-address frame-num elem-num)
  (list frame-num elem-num))

(define (lex-addr-frame-num lexical-address)
  (car lexical-address))
(define (lex-addr-displacement lexical-address)
  (cadr lexical-address))

(define the-empty-cenv '())

(define (extend-cenv frame base-cenv)
  (cons frame base-cenv))

(define (cenv-first-frame cenv) (car cenv))

(define (enclosing-cenv cenv) (cdr cenv))

(define (find-variable var cenv)
  (define (env-loop frame-num cenv)
	(define (scan displacement vars)
	  (cond ((null? vars)
			 (env-loop (+ frame-num 1)
					   (enclosing-cenv cenv)))
			((eq? var (car vars))
			 (make-lexical-address frame-num
								   displacement))
			(else
			 (scan (+ 1 displacement)
				   (cdr vars)))))
	(if (eq? cenv the-empty-cenv)
		'not-found
		(scan 0 (cenv-first-frame cenv))))
  (env-loop 0 cenv))
{% endhighlight %}

Examples:

The above code can work indenpendently without any dependencies. Just trying the examples given in the problem:

{% highlight scheme linenos %}
1 ]=> 
(find-variable 'c '((y z) (a b c d e) (x y)))

;Value 15: (1 2)

1 ]=> 
(find-variable 'x '((y z) (a b c d e) (x y)))

;Value 16: (2 0)

1 ]=> 
(find-variable 'w '((y z) (a b c d e) (x y)))

;Value: not-found

1 ]=> 
{% endhighlight %}
