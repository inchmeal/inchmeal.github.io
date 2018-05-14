---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.14"
order: "014"
date: 2018-03-09 
---

#### Eva's version

{% highlight scheme linenos %}
;;; M-Eval input:
(define (map proc items)
  (if (null? items)
      '()
      (cons (proc (car items))
            (map proc (cdr items)))))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:

;;; M-Eval value:
ok

;;; M-Eval input:
(map (lambda(x) (+ x 100)) '(1 2 3 4 5))

;;; M-Eval value:
(101 102 103 104 105)
{% endhighlight %}

Well, this works as suggested in the problem.

--------

#### Louis's version

Now, let's use the primitve map(by defining it in the primitive's list).


Using it gives:

{% highlight scheme linenos %}
;;; M-Eval input:
(map (lambda(x) (+ x 100)) '(1 2 3 4 5))

;;; M-Eval value:
metacircular-evaluator-loaded

;;; M-Eval input:
;The object (procedure (x) ((+ x 100)) ((table (false . #f) (true . #t) (car primitive #[compiled-procedure 7 ("list" #x1) #x3 #x4d64f]) (cdr primitive #[compiled-procedure 8 ("list" #x2) #x3 #x4d648]) (cons primitive #[compiled-procedure 9 ("list" #x3) #x3 #x4d642]) (null? primitive #[compiled-procedure 10 ("list" #x5) #x3 #x4d633]) (+ primitive #[arity-dispatched-procedure 11]) (assoc primitive #[compound-procedure 12 assoc]) (cadr primitive #[compiled-procedure 13 ("list" #x42) #x5 #x4d24c]) (cddr primitive #[compiled-procedure 14 ("list" #x44) #x5 #x4d230]) (= primitive #[arity-dispatched-procedure 15]) (- primitive #[arity-dispatched-procedure 16]) (pair? primitive #[compiled-procedure 17 ("list" #x6) #x3 #x4d62c]) (not primitive #[compiled-procedure 18 ("boole" #x1) #x3 #x48d0b]) (newline primitive #[compiled-procedure 19 ("output" #x14) #x3 #x3b8c3]) (display primitive #[compiled-procedure 20 ("output" #x16) #x3 #x3b893]) (error primitive #[compiled-procedure 21 ("error" #x5d) #x3 #x4068b]) (map primitive #[compiled-procedure 22 ("list" #x6f) #x7 #x4ce9c])))) is not applicable.
{% endhighlight %}

Well, its quite explanatory, our `eval` evaluates both of the arguments passed to `map`. Thus instead of applying `map` to `lambda` and `'(1 2 3 4 5)`, the primitive `map` gets applied to our internal representation of the procedure(see the output containing the environment!).

So, whats the problem? The problem is we are asking mit scheme interpreter to understand our representation of procedure `lambda`. MIT scheme can understand `lambda` which are defined using mit scheme not our evaluator!

Note that even if we used primitive procedure `cons` instead of `lambda`, then it won't work too. Because this will also get evaluated by our evaluator! And our evaluator converts it into procedure object so that it can be applied using `apply`.
