---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.78"
order: "078"
date: 2018-04-12
---

Interesting! Learned a few subtle details of the non-deterministic computing from the previous section.

The complete code is at the bottom of this page.

Apart from these subtle details, the solution is not difficult. Perhaps, if i have learned these few subtle things in the previous section itself than this could have turned out much easier.

So, here goes the approach:

- Since, non-deterministic evaluator itself tries out all the possibilities, we only need to handle one frame in every procedure.

- Instead of marking frame as `'failed`, mark it as dead end using `(amb)` and which will cause evaluator to try other possible paths.

- Install all the host language **immutable** procedures used in the logic evaluator(like `'assoc`, `'string=?` etc) as primitive procedures in the non-deterministic evaluator.

- Mutable procedures are more subtle and can not be directly used as primitive procedures. For eg:
  - primitve `set!` won't work
	- we already implemented it as special form but it's important to understand why we can't use the primitive form.
	- the variable we are changing is defined in our environment not in the host language.
	- we can not roll back to previous value.
	
  - primitve `set-car!` and `set-cdr` won't work because we can not roll back to previous value.
  
  - primitive `display` won't work because it does not return any value. The way non-deterministic evaluator is written, we always need a value to pass into `success` procedure!
  
- For `display`, we can implement a `display` in the code of non-deterministic evaluator which returns a value like `'ok`.

- Note that while executing a program in the non-deterministic evaluator, the program won't try any other paths unless an `amb` expression is encountered.

- Thus all the procedures and initialization code for `microshaft` database will work as in a normal evaluator implemented in the first section.

- Since all the *mutations* happen in initialization code for `microshaft` database, we can even choose to implement `set-car!` as `permanent-set-car!`. But for consistency, it might be better to support rollback.

- This example explains why not to use `define` for *variable*(here aa or bb) definitions(procedure will work) and instead use `let`:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(define aa (amb 1 2 3))
;;; Starting a new problem 
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(define bb (amb 10 20 30))
;;; Starting a new problem 
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(amb aa bb)
;;; Starting a new problem 
;;; Amb-Eval value:
1
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
10
;;; Amb-Eval input:
try-again
;;; There are no more values of
(amb aa bb)
;;; Amb-Eval input:
{% endhighlight %}

This problem won't occur with using `let`.

- To support `interleaving`, I considered using `ramb`(implemented in previous section ex-4.50) but it won't work as once it chooses a path then it first generates all the values from that path and then it chooses the other path. For example:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(define (ff) (amb 1 2 3))
;;; Starting a new problem 
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(define (gg) (amb 10 20 30))
;;; Starting a new problem 
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(ramb (ff) (gg))
;;; Starting a new problem 
;;; Amb-Eval value:
1
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
2
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
3
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
10
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
20
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
30
;;; Amb-Eval input:
try-again
;;; There are no more values of
(ramb (ff) (gg))
{% endhighlight %}

We can solve this using `let` but it has its own problem. We get duplicates because it tries all combinations(remember distinct!):

{% highlight scheme linenos %}
;;; Amb-Eval input:
(define (test) (let ((aa (amb 1 2 3))
					 (bb (amb 10 20 30)))
				 (ramb aa bb)))
;;; Starting a new problem 
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(test)
;;; Starting a new problem 
;;; Amb-Eval value:
1
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
10
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
20
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
1
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
30
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
1
;;; Amb-Eval input:
{% endhighlight %}

Keeping track of duplicates, might solve this by providing a special form in the non-deterministic evaluator. I left it without interleaving. Probably, there can be other better solution without keeping track which I have not thought.

- Implementing `not` turned out to be more involved. We need a way to know that if a query results in a *failure*. It sorts of look like using `if-fail`(ex-4.52) can do the job as follows:

{% highlight scheme linenos %}
(define (negate operands frame)
  (if (eq?
	   (if-fail (qeval (negated-query operands)
					   frame)
				'failed)
	   'failed)
	  frame
	  (amb)))
{% endhighlight %}

But it did not work! Why? Because when `qeval` failed, we correctly get `'failed` which causes the evaluation of `(amb)`. And evaluating `(amb)` caused to look for alternate path. This alternate path takes us to `if-fail` again which returns `'failed` as alternate path(failed path). And thus `if` returned the `frame` even when `qeval` failed!

This made me realise that we don't need a construct like `if-fail` but something like `(amb)` but that accepts an argument and fails if that argument succeeds. This lead to the implementation of `ensure-fail`. The code `(ensure-fail <exp1>) <exp2>` will evaluate `<exp2>` only if `<exp1>` failed. Here goes it's implementation:

{% highlight scheme linenos %}
(define (ensure-fail? exp) (tagged-list? exp 'ensure-fail))
(define (ensure-fail-expression exp) (cadr exp))
(define (analyze-ensure-fail exp)
  (let ((expr (analyze (ensure-fail-expression exp))))
	(lambda (env succeed fail)
	  (expr env
			  (lambda(ignore fail2) (fail))
			  (lambda() (succeed 'ok fail))))))
{% endhighlight %}

- Now, there is still one thing remaining `lisp-value`, which requires this procedure to be evaluated in the non-deterministic evaluator.

{% highlight scheme linenos %}
(define (execute exp)
  (apply (eval (predicate exp) user-initial-environment)
         (args exp)))
{% endhighlight %}

This can be solved simply providing `eval` and `appply` of our non-deterministic evaluator as primitive procedures. And `user-initial-environment` can be set similar to the way we set `true` and `false` in the `setup-environment`:

{% highlight scheme linenos %}
(define (setup-environment)
  (let ((initial-env
         (extend-environment (primitive-procedure-names)
                             (primitive-procedure-objects)
                             the-empty-environment)))
    (define-variable! 'true true initial-env)
    (define-variable! 'false false initial-env)
    (define-variable! 'user-initial-environment initial-env initial-env)
    initial-env))
{% endhighlight %}

- *Driver Loop*: Since the non-deterministic evaluator will run in driver loop, I implemented a procedure `lp`. It can be called as `(lp '(supervisor ?x (Bitdiddle Ben)))` for executing a query. Or for assertion use:

{% highlight scheme linenos %}
(lp '(assert!
 (rule (can-replace ?per1 ?per2)
	   (and (job ?per1 ?job1)
			(job ?per2 ?job2)
			(not (same ?per1 ?per2))
			(or (same ?job1 ?job2)
				(can-do-job ?job1 ?job2))))))
{% endhighlight %}

Well thats it!

So, as already mentioned the main point that differ with the streams, is `interleaving`. This gets worse with multiple infinite frames/results as it may keep answering only from one path and never evaluates the other paths! Thus the order of answers won't be same as in the streams version.

### Execution and some examples:

- Clear the environment. In scheme, I use this:

{% highlight scheme linenos %}
(ge (make-top-level-environment))
(restart 1)
{% endhighlight %}

- Now start the non-deterministic evaluator.

- Evaluate the modified logic evaluator in non-deterministic evaluator. In emacs this can be done by a simple command to send the contents of a buffer to repl(where our driver loop is running).

- If initilization for database is not inside the evaluator, then do it now by invoking `(initialize-data-base microshaft-data-base)`.

- That's it. Few examples of it working:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(initialize-data-base microshaft-data-base)
;;; Starting a new problem 
;;; Amb-Eval value:
done
;;; Amb-Eval input:
(lp '(and (salary (Bitdiddle Ben) ?ben-sal) (and (salary ?name ?sal) (lisp-value < ?sal ?ben-sal))))
;;; Starting a new problem 
(Query Results:)
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (aull dewitt) 25000) (lisp-value < 25000 60000)))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (cratchet robert) 18000) (lisp-value < 18000 60000)))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (reasoner louis) 30000) (lisp-value < 30000 60000)))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (tweakit lem e) 25000) (lisp-value < 25000 60000)))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (fect cy d) 35000) (lisp-value < 35000 60000)))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(and (salary (bitdiddle ben) 60000) (and (salary (hacker alyssa p) 40000) (lisp-value < 40000 60000)))
;;; Amb-Eval input:
try-again
;;; There are no more values of
(lp (quote (and (salary (bitdiddle ben) ?ben-sal) (and (salary ?name ?sal) (lisp-value < ?sal ?ben-sal)))))
;;; Amb-Eval input:
(lp '(assert!
 (rule (can-replace ?per1 ?per2)
	   (and (job ?per1 ?job1)
			(job ?per2 ?job2)
			(not (same ?per1 ?per2))
			(or (same ?job1 ?job2)
				(can-do-job ?job1 ?job2))))))
;;; Starting a new problem 
(Assertion added to data base.)
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(lp '(can-replace ?per1 (Fect Cy D)))
;;; Starting a new problem 
(Query Results:)
;;; Amb-Eval value:
(can-replace (hacker alyssa p) (fect cy d))
;;; Amb-Eval input:
try-again
;;; Amb-Eval value:
(can-replace (bitdiddle ben) (fect cy d))
;;; Amb-Eval input:
try-again
;;; There are no more values of
(lp (quote (can-replace ?per1 (fect cy d))))
;;; Amb-Eval input:
(lp '(assert! (rule (last-pair (?x ?y . ?z) ?r)
			   (last-pair (?y . ?z) ?r))))
;;; Starting a new problem 
(Assertion added to data base.)
;;; Amb-Eval value:
ok
;;; Amb-Eval input:
(lp '(last-pair (3) ?x))
;;; Starting a new problem 
(Query Results:)
;;; Amb-Eval value:
(last-pair (3) (3))
;;; Amb-Eval input:
(lp '(last-pair (1 2 3) ?x))
;;; Starting a new problem 
(Query Results:)
;;; Amb-Eval value:
(last-pair (1 2 3) (3))
;;; Amb-Eval input:
(lp '(last-pair (2 ?x) (3)))
;;; Starting a new problem 
(Query Results:)
;;; Amb-Eval value:
(last-pair (2 3) (3))
{% endhighlight %}

### Complete code of logic evaluator

{% highlight scheme linenos %}
(define (lp query)
  (let ((q (query-syntax-process query)))
	(if (assertion-to-be-added? q)
		(begin
		  (add-rule-or-assertion! (add-assertion-body q))
		  (display "Assertion added to data base."))
		(begin
		  (display "Query Results:")
		  (instantiate q
					   (qeval q '())
					   (lambda (v f)
						 (contract-question-mark v)))))))

(define (and a b)
  (if a
	  (if b true false)
	  false))

(define (or a b)
  (if a
	  true
	  (if b true false)))

(define (not e)
  (if e false true))

(define (an-element-of items)
  (require (not (null? items)))
  (amb (car items) (an-element-of (cdr items))))

(define (instantiate exp frame unbound-var-handler)
  (define (copy exp)
    (cond ((var? exp)
           (let ((binding (binding-in-frame exp frame)))
             (if binding
                 (copy (binding-value binding))
                 (unbound-var-handler exp frame))))
          ((pair? exp)
           (cons (copy (car exp)) (copy (cdr exp))))
          (else exp)))
  (copy exp))

;;;SECTION 4.4.4.2
;;;The Evaluator

(define (qeval query frame)
  (let ((qproc (get (type query) 'qeval)))
    (if qproc
        (qproc (contents query) frame)
        (simple-query query frame))))

;;;Simple queries

(define (simple-query query-pattern frame)
  (amb (find-assertions query-pattern frame)
	   (apply-rules query-pattern frame)))

;;;Compound queries

(define (conjoin conjuncts frame)
  (if (empty-conjunction? conjuncts)
      frame
      (conjoin (rest-conjuncts conjuncts)
               (qeval (first-conjunct conjuncts)
                      frame))))

;;(put 'and 'qeval conjoin)


(define (disjoin disjuncts frame)
  (if (empty-disjunction? disjuncts)
	  (amb)
	  (amb
       (qeval (first-disjunct disjuncts) frame)
       (disjoin (rest-disjuncts disjuncts)
                       frame))))

;;(put 'or 'qeval disjoin)

;;;Filters

(define (negate operands frame)
  (ensure-fail (qeval (negated-query operands)
					  frame))
  frame)

;;(put 'not 'qeval negate)

(define (lisp-value call frame)
  (if (execute
       (instantiate
        call
        frame
        (lambda (v f)
          (error "Unknown pat var -- LISP-VALUE" v))))
      frame
	  (amb)))

;;(put 'lisp-value 'qeval lisp-value)

(define (execute exp)
  (apply (eval (predicate exp) user-initial-environment)
         (args exp)))

(define (always-true ignore frame) frame)

;;(put 'always-true 'qeval always-true)

;;;SECTION 4.4.4.3
;;;Finding Assertions by Pattern Matching

(define (find-assertions pattern frame)
	(pattern-match pattern
				   (an-element-of
					(fetch-assertions pattern frame))
				   frame))

;; (define (check-an-assertion assertion query-pat query-frame)
;;   (let ((match-result
;;          (pattern-match query-pat assertion query-frame)))
;;     (if (eq? match-result 'failed)
;;         the-empty-stream
;;         (singleton-stream match-result))))

(define (pattern-match pat dat frame)
  (cond ((equal? pat dat) frame)
        ((var? pat) (extend-if-consistent pat dat frame))
        ((and (pair? pat) (pair? dat))
         (pattern-match (cdr pat)
                        (cdr dat)
                        (pattern-match (car pat)
                                       (car dat)
                                       frame)))
        (else (amb))))

(define (extend-if-consistent var dat frame)
  (let ((binding (binding-in-frame var frame)))
    (if binding
        (pattern-match (binding-value binding) dat frame)
        (extend var dat frame))))

;;;SECTION 4.4.4.4
;;;Rules and Unification

(define (apply-rules pattern frame)
  (apply-a-rule (an-element-of
				 (fetch-rules pattern frame))
				pattern
				frame))

(define (apply-a-rule rule query-pattern query-frame)
  (let ((clean-rule (rename-variables-in rule)))
    (let ((unify-result
           (unify-match query-pattern
                        (conclusion clean-rule)
                        query-frame)))
      (qeval (rule-body clean-rule)
              unify-result))))

(define (rename-variables-in rule)
  (let ((rule-application-id (new-rule-application-id)))
    (define (tree-walk exp)
      (cond ((var? exp)
             (make-new-variable exp rule-application-id))
            ((pair? exp)
             (cons (tree-walk (car exp))
                   (tree-walk (cdr exp))))
            (else exp)))
    (tree-walk rule)))

(define (unify-match p1 p2 frame)
  (cond ((equal? p1 p2) frame)
        ((var? p1) (extend-if-possible p1 p2 frame))
        ((var? p2) (extend-if-possible p2 p1 frame)) ; {\em ; ***}
        ((and (pair? p1) (pair? p2))
         (unify-match (cdr p1)
                      (cdr p2)
                      (unify-match (car p1)
                                   (car p2)
                                   frame)))
        (else (amb))))

(define (extend-if-possible var val frame)
  (let ((binding (binding-in-frame var frame)))
    (cond (binding
           (unify-match
            (binding-value binding) val frame))
          ((var? val)                     ; {\em ; ***}
           (let ((binding (binding-in-frame val frame)))
             (if binding
                 (unify-match
                  var (binding-value binding) frame)
                 (extend var val frame))))
          ((depends-on? val var frame)    ; {\em ; ***}
           (amb))
          (else (extend var val frame)))))

(define (depends-on? exp var frame)
  (define (tree-walk e)
    (cond ((var? e)
           (if (equal? var e)
               true
               (let ((b (binding-in-frame e frame)))
                 (if b
                     (tree-walk (binding-value b))
                     false))))
          ((pair? e)
           (or (tree-walk (car e))
               (tree-walk (cdr e))))
          (else false)))
  (tree-walk exp))

;;;SECTION 4.4.4.5
;;;Maintaining the Data Base

(define THE-ASSERTIONS '())

(define (fetch-assertions pattern frame)
  (if (use-index? pattern)
      (get-indexed-assertions pattern)
      (get-all-assertions)))

(define (get-all-assertions) THE-ASSERTIONS)

(define (get-indexed-assertions pattern)
  (get-list (index-key-of pattern) 'assertion-list))

(define (get-list key1 key2)
  (let ((s (get key1 key2)))
    (if s s '())))

(define THE-RULES '())

(define (fetch-rules pattern frame)
  (if (use-index? pattern)
      (get-indexed-rules pattern)
      (get-all-rules)))

(define (get-all-rules) THE-RULES)

(define (get-indexed-rules pattern)
  (append
   (get-list (index-key-of pattern) 'rule-list)
   (get-list '? 'rule-list)))

(define (add-rule-or-assertion! assertion)
  (if (rule? assertion)
      (add-rule! assertion)
      (add-assertion! assertion)))

(define (add-assertion! assertion)
  (store-assertion-in-index assertion)
  (let ((old-assertions THE-ASSERTIONS))
    (set! THE-ASSERTIONS
          (cons assertion old-assertions))
    'ok))

(define (add-rule! rule)
  (store-rule-in-index rule)
  (let ((old-rules THE-RULES))
    (set! THE-RULES (cons rule old-rules))
    'ok))

(define (store-assertion-in-index assertion)
  (if (indexable? assertion)
      (let ((key (index-key-of assertion)))
        (let ((current-assertion-list
               (get-list key 'assertion-list)))
          (put key
               'assertion-list
               (cons assertion
                            current-assertion-list))))))

(define (store-rule-in-index rule)
  (let ((pattern (conclusion rule)))
    (if (indexable? pattern)
        (let ((key (index-key-of pattern)))
          (let ((current-rule-list
                 (get-list key 'rule-list)))
            (put key
                 'rule-list
                 (cons rule
                              current-rule-list)))))))

(define (indexable? pat)
  (or (constant-symbol? (car pat))
      (var? (car pat))))

(define (index-key-of pat)
  (let ((key (car pat)))
    (if (var? key) '? key)))

(define (use-index? pat)
  (constant-symbol? (car pat)))

;;;SECTION 4.4.4.7
;;;Query syntax procedures

(define (type exp)
  (if (pair? exp)
      (car exp)
      (error "Unknown expression TYPE" exp)))

(define (contents exp)
  (if (pair? exp)
      (cdr exp)
      (error "Unknown expression CONTENTS" exp)))

(define (assertion-to-be-added? exp)
  (eq? (type exp) 'assert!))

(define (add-assertion-body exp)
  (car (contents exp)))

(define (empty-conjunction? exps) (null? exps))
(define (first-conjunct exps) (car exps))
(define (rest-conjuncts exps) (cdr exps))

(define (empty-disjunction? exps) (null? exps))
(define (first-disjunct exps) (car exps))
(define (rest-disjuncts exps) (cdr exps))

(define (negated-query exps) (car exps))

(define (predicate exps) (car exps))
(define (args exps) (cdr exps))


(define (rule? statement)
  (tagged-list? statement 'rule))

(define (conclusion rule) (cadr rule))

(define (rule-body rule)
  (if (null? (cddr rule))
      '(always-true)
      (caddr rule)))

(define (query-syntax-process exp)
  (map-over-symbols expand-question-mark exp))

(define (map-over-symbols proc exp)
  (cond ((pair? exp)
         (cons (map-over-symbols proc (car exp))
               (map-over-symbols proc (cdr exp))))
        ((symbol? exp) (proc exp))
        (else exp)))

(define (expand-question-mark symbol)
  (let ((chars (symbol->string symbol)))
    (if (string=? (substring chars 0 1) "?")
        (list '?
              (string->symbol
               (substring chars 1 (string-length chars))))
        symbol)))

(define (var? exp)
  (tagged-list? exp '?))

(define (constant-symbol? exp) (symbol? exp))

(define rule-counter 0)

(define (new-rule-application-id)
  (set! rule-counter (+ 1 rule-counter))
  rule-counter)

(define (make-new-variable var rule-application-id)
  (cons '? (cons rule-application-id (cdr var))))

(define (contract-question-mark variable)
  (string->symbol
   (string-append "?" 
     (if (number? (cadr variable))
         (string-append (symbol->string (caddr variable))
                        "-"
                        (number->string (cadr variable)))
         (symbol->string (cadr variable))))))


;;;SECTION 4.4.4.8
;;;Frames and bindings
(define (make-binding variable value)
  (cons variable value))

(define (binding-variable binding)
  (car binding))

(define (binding-value binding)
  (cdr binding))


(define (binding-in-frame variable frame)
  (assoc variable frame))

(define (extend variable value frame)
  (cons (make-binding variable value) frame))


;;;;From Section 4.1

(define (tagged-list? exp tag)
  (if (pair? exp)
      (eq? (car exp) tag)
      false))

;;;;Table support from Chapter 3, Section 3.3.3 (local tables)

(define (make-table)
  (let ((local-table (list '*table*)))
    (define (lookup key-1 key-2)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (cdr record)
                  false))
            false)))
    (define (insert! key-1 key-2 value)
      (let ((subtable (assoc key-1 (cdr local-table))))
        (if subtable
            (let ((record (assoc key-2 (cdr subtable))))
              (if record
                  (set-cdr! record value)
                  (set-cdr! subtable
                            (cons (cons key-2 value)
                                  (cdr subtable)))))
            (set-cdr! local-table
                      (cons (list key-1
                                  (cons key-2 value))
                            (cdr local-table)))))
      'ok)    
    (define (dispatch m)
      (cond ((eq? m 'lookup-proc) lookup)
            ((eq? m 'insert-proc!) insert!)
            (else (error "Unknown operation -- TABLE" m))))
    dispatch))

;;;; From instructor's manual

(define get '())

(define put '())

(define (initialize-data-base rules-and-assertions)
  (define (deal-out r-and-a rules assertions)
    (cond ((null? r-and-a)
           (set! THE-ASSERTIONS assertions)
           (set! THE-RULES rules)
           'done)
          (else
           (let ((s (query-syntax-process (car r-and-a))))
             (cond ((rule? s)
                    (store-rule-in-index s)
                    (deal-out (cdr r-and-a)
                              (cons s rules)
                              assertions))
                   (else
                    (store-assertion-in-index s)
                    (deal-out (cdr r-and-a)
                              rules
                              (cons s assertions))))))))
  (let ((operation-table (make-table)))
    (set! get (operation-table 'lookup-proc))
    (set! put (operation-table 'insert-proc!)))
  (put 'and 'qeval conjoin)
  (put 'or 'qeval disjoin)
  (put 'not 'qeval negate)
  (put 'lisp-value 'qeval lisp-value)
  (put 'always-true 'qeval always-true)
  (deal-out rules-and-assertions '() '()))

;; Do following to reinit the data base from microshaft-data-base
;;  in Scheme (not in the query driver loop)
;; (initialize-data-base microshaft-data-base)

(define microshaft-data-base
  '(
;; from section 4.4.1
(address (Bitdiddle Ben) (Slumerville (Ridge Road) 10))
(job (Bitdiddle Ben) (computer wizard))
(salary (Bitdiddle Ben) 60000)

(address (Hacker Alyssa P) (Cambridge (Mass Ave) 78))
(job (Hacker Alyssa P) (computer programmer))
(salary (Hacker Alyssa P) 40000)
(supervisor (Hacker Alyssa P) (Bitdiddle Ben))

(address (Fect Cy D) (Cambridge (Ames Street) 3))
(job (Fect Cy D) (computer programmer))
(salary (Fect Cy D) 35000)
(supervisor (Fect Cy D) (Bitdiddle Ben))

(address (Tweakit Lem E) (Boston (Bay State Road) 22))
(job (Tweakit Lem E) (computer technician))
(salary (Tweakit Lem E) 25000)
(supervisor (Tweakit Lem E) (Bitdiddle Ben))

(address (Reasoner Louis) (Slumerville (Pine Tree Road) 80))
(job (Reasoner Louis) (computer programmer trainee))
(salary (Reasoner Louis) 30000)
(supervisor (Reasoner Louis) (Hacker Alyssa P))

(supervisor (Bitdiddle Ben) (Warbucks Oliver))

(address (Warbucks Oliver) (Swellesley (Top Heap Road)))
(job (Warbucks Oliver) (administration big wheel))
(salary (Warbucks Oliver) 150000)

(address (Scrooge Eben) (Weston (Shady Lane) 10))
(job (Scrooge Eben) (accounting chief accountant))
(salary (Scrooge Eben) 75000)
(supervisor (Scrooge Eben) (Warbucks Oliver))

(address (Cratchet Robert) (Allston (N Harvard Street) 16))
(job (Cratchet Robert) (accounting scrivener))
(salary (Cratchet Robert) 18000)
(supervisor (Cratchet Robert) (Scrooge Eben))

(address (Aull DeWitt) (Slumerville (Onion Square) 5))
(job (Aull DeWitt) (administration secretary))
(salary (Aull DeWitt) 25000)
(supervisor (Aull DeWitt) (Warbucks Oliver))

(can-do-job (computer wizard) (computer programmer))
(can-do-job (computer wizard) (computer technician))

(can-do-job (computer programmer)
            (computer programmer trainee))

(can-do-job (administration secretary)
            (administration big wheel))

(rule (lives-near ?person-1 ?person-2)
      (and (address ?person-1 (?town . ?rest-1))
           (address ?person-2 (?town . ?rest-2))
           (not (same ?person-1 ?person-2))))

(rule (same ?x ?x))

(rule (wheel ?person)
      (and (supervisor ?middle-manager ?person)
           (supervisor ?x ?middle-manager)))

(rule (outranked-by ?staff-person ?boss)
      (or (supervisor ?staff-person ?boss)
          (and (supervisor ?staff-person ?middle-manager)
               (outranked-by ?middle-manager ?boss))))
))
{% endhighlight %}


### Complete code of non-deterministic evaluator

{% highlight scheme linenos %}
;;;;AMB EVALUATOR FROM SECTION 4.3 OF
;;;; STRUCTURE AND INTERPRETATION OF COMPUTER PROGRAMS

;;;;Matches code in ch4.scm.
;;;; To run the sample programs and exercises, code below also includes
;;;; -- enlarged primitive-procedures list
;;;; -- support for Let (as noted in footnote 56, p.428)

;;;;This file can be loaded into Scheme as a whole.
;;;;**NOTE**This file loads the metacircular evaluator of
;;;;  sections 4.1.1-4.1.4, since it uses the expression representation,
;;;;  environment representation, etc.
;;;;  You may need to change the (load ...) expression to work in your
;;;;  version of Scheme.
;;;;**WARNING: Don't load mceval twice (or you'll lose the primitives
;;;;  interface, due to renamings of apply).

;;;; resetting the environment so that we can reload the file
(ge (make-top-level-environment))
(restart 1)

;;;;Then you can initialize and start the evaluator by evaluating
;;;; the two lines at the end of the file ch4-mceval.scm
;;;; (setting up the global environment and starting the driver loop).
;;;;In the driver loop, do
;(define (require p)
;  (if (not p) (amb)))


;;**implementation-dependent loading of evaluator file
;;Note: It is loaded first so that the section 4.2 definition
;; of eval overrides the definition from 4.1.1
(load "ch4-mceval.scm")



;;;Code from SECTION 4.3.3, modified as needed to run it

(define (amb? exp) (tagged-list? exp 'amb))
(define (ramb? exp) (tagged-list? exp 'ramb))
(define (amb-choices exp) (cdr exp))

;; analyze from 4.1.6, with clause from 4.3.3 added
;; and also support for Let
(define (analyze exp)
  (cond ((self-evaluating? exp) 
         (analyze-self-evaluating exp))
        ((quoted? exp) (analyze-quoted exp))
        ((variable? exp) (analyze-variable exp))
        ((assignment? exp) (analyze-assignment exp))
        ((pair-assign-car? exp) (analyze-pair-assign exp car set-car!))
        ((pair-assign-cdr? exp) (analyze-pair-assign exp cdr set-cdr!))
        ((permanent-assignment? exp) (analyze-permanent-assignment exp))
        ((definition? exp) (analyze-definition exp))
        ((if? exp) (analyze-if exp))
        ((if-fail? exp) (analyze-if-fail exp))
        ((ensure-fail? exp) (analyze-ensure-fail exp))
        ((lambda? exp) (analyze-lambda exp))
        ((begin? exp) (analyze-sequence (begin-actions exp)))
        ((cond? exp) (analyze (cond->if exp)))
        ((let? exp) (analyze (let->combination exp))) ;**
        ((amb? exp) (analyze-amb exp))                ;**
        ((ramb? exp) (analyze-ramb exp))                ;**
        ((require? exp) (analyze-require exp))                ;**
        ((application? exp) (analyze-application exp))
        (else
         (error "Unknown expression type -- ANALYZE" exp))))
(define (require? exp) (tagged-list? exp 'require))

(define (require-predicate exp) (cadr exp))

(define (analyze-require exp)
  (let ((pproc (analyze (require-predicate exp))))
    (lambda (env succeed fail)
      (pproc env
             (lambda (pred-value fail2)
               (if (not (true? pred-value))
                   (fail2)
                   (succeed 'ok fail2)))
             fail))))

(define (ambeval exp env succeed fail)
  ((analyze exp) env succeed fail))

;;;Simple expressions

(define (analyze-self-evaluating exp)
  (lambda (env succeed fail)
    (succeed exp fail)))

(define (analyze-quoted exp)
  (let ((qval (text-of-quotation exp)))
    (lambda (env succeed fail)
      (succeed qval fail))))

(define (analyze-variable exp)
  (lambda (env succeed fail)
    (succeed (lookup-variable-value exp env)
             fail)))

(define (analyze-lambda exp)
  (let ((vars (lambda-parameters exp))
        (bproc (analyze-sequence (lambda-body exp))))
    (lambda (env succeed fail)
      (succeed (make-procedure vars bproc env)
               fail))))

;;;Conditionals and sequences

(define (ensure-fail? exp) (tagged-list? exp 'ensure-fail))
(define (ensure-fail-expression exp) (cadr exp))

(define (analyze-ensure-fail exp)
  (let ((expr (analyze (ensure-fail-expression exp))))
	(lambda (env succeed fail)
	  (expr env
			  (lambda(ignore fail2) (fail))
			  (lambda() (succeed 'ok fail))))))

(define (if-fail? exp) (tagged-list? exp 'if-fail))
(define (if-fail-first exp) (cadr exp))
(define (if-fail-second exp) (caddr exp))

(define (analyze-if-fail exp)
  (let ((first (analyze (if-fail-first exp)))
		(second (analyze (if-fail-second exp))))
	(lambda (env succeed fail)
	  (first env
			  succeed
			 (lambda()
			   (second env succeed fail))))))

(define (analyze-if exp)
  (let ((pproc (analyze (if-predicate exp)))
        (cproc (analyze (if-consequent exp)))
        (aproc (analyze (if-alternative exp))))
    (lambda (env succeed fail)
      (pproc env
             ;; success continuation for evaluating the predicate
             ;; to obtain pred-value
             (lambda (pred-value fail2)
               (if (true? pred-value)
                   (cproc env succeed fail2)
                   (aproc env succeed fail2)))
             ;; failure continuation for evaluating the predicate
             fail))))

(define (analyze-sequence exps)
  (define (sequentially a b)
    (lambda (env succeed fail)
      (a env
         ;; success continuation for calling a
         (lambda (a-value fail2)
           (b env succeed fail2))
         ;; failure continuation for calling a
         fail)))
  (define (loop first-proc rest-procs)
    (if (null? rest-procs)
        first-proc
        (loop (sequentially first-proc (car rest-procs))
              (cdr rest-procs))))
  (let ((procs (map analyze exps)))
    (if (null? procs)
        (error "Empty sequence -- ANALYZE"))
    (loop (car procs) (cdr procs))))

;;;Definitions and assignments

(define (analyze-definition exp)
  (let ((var (definition-variable exp))
        (vproc (analyze (definition-value exp))))
    (lambda (env succeed fail)
      (vproc env                        
             (lambda (val fail2)
               (define-variable! var val env)
               (succeed 'ok fail2))
             fail))))

(define (analyze-assignment exp)
  (let ((var (assignment-variable exp))
        (vproc (analyze (assignment-value exp))))
    (lambda (env succeed fail)
      (vproc env
             (lambda (val fail2)        ; *1*
               (let ((old-value
                      (lookup-variable-value var env))) 
                 (set-variable-value! var val env)
                 (succeed 'ok
                          (lambda ()    ; *2*
                            (set-variable-value! var
                                                 old-value
                                                 env)
                            (fail2)))))
             fail))))

(define (permanent-assignment? exp) (tagged-list? exp 'permanent-set!))

(define (analyze-permanent-assignment exp)
  (let ((var (assignment-variable exp))
        (vproc (analyze (assignment-value exp))))
    (lambda (env succeed fail)
      (vproc env
             (lambda (val fail2)        ; *1*
               (set-variable-value! var val env)
               (succeed 'ok fail2))
			 fail))))

;;;set-car! and set-cdr!
(define (pair-assign-car? exp) (tagged-list? exp 'set-car!))
(define (pair-assign-cdr? exp) (tagged-list? exp 'set-cdr!))

(define (pair-assign-expression exp) (cadr exp))
(define (pair-assign-value exp) (caddr exp))

(define (analyze-pair-assign exp selector mutator!)
  (let ((eproc (analyze (pair-assign-expression exp)))
        (vproc (analyze (pair-assign-value exp))))
    (lambda (env succeed fail)
      (eproc env
             (lambda (expr fail2)
			   (vproc env
					  (lambda (val fail3)
						(let ((old-value (selector expr)))
						  (mutator! expr val)
						  (succeed 'ok
								   (lambda ()    
									 (mutator! expr
											   old-value)
									 (fail3)))))
					  fail2))
             fail))))

;;;Procedure applications

(define (analyze-application exp)
  (let ((fproc (analyze (operator exp)))
        (aprocs (map analyze (operands exp))))
    (lambda (env succeed fail)
      (fproc env
             (lambda (proc fail2)
               (get-args aprocs
                         env
                         (lambda (args fail3)
                           (execute-application
                            proc args succeed fail3))
                         fail2))
             fail))))

(define (get-args aprocs env succeed fail)
  (if (null? aprocs)
      (succeed '() fail)
      ((car aprocs) env
                    ;; success continuation for this aproc
                    (lambda (arg fail2)
                      (get-args (cdr aprocs)
                                env
                                ;; success continuation for recursive
                                ;; call to get-args
                                (lambda (args fail3)
                                  (succeed (cons arg args)
                                           fail3))
                                fail2))
                    fail)))

(define (execute-application proc args succeed fail)
  (cond ((primitive-procedure? proc)
         (succeed (apply-primitive-procedure proc args)
                  fail))
        ((compound-procedure? proc)
         ((procedure-body proc)
          (extend-environment (procedure-parameters proc)
                              args
                              (procedure-environment proc))
          succeed
          fail))
        (else
         (error
          "Unknown procedure type -- EXECUTE-APPLICATION"
          proc))))

;;;amb expressions

(define (list-cons-ref l index)
  (define (iter l index)
	(if (= index 0)
		l
		(iter (cdr l) (- index 1))))
  
  (if (< index 0)
	  (error "index can not be negative!")
	  (iter l index)))

(define (move-random-to-first! l length)
  (if (<= length 1)
	  l
	  (let ((random-index (random length))
			(first-elem (car l)))
		(let ((list-ref (list-cons-ref l random-index)))
		  (let ((random-elem (car list-ref)))
			(set-car! l random-elem)
			(set-car! list-ref first-elem))))))

(define (analyze-ramb exp)
  (let ((cprocs (map analyze (amb-choices exp))))
    (lambda (env succeed fail)
	  (define (try-next choices length)
        (if (null? choices)
            (fail)
			(begin
			  (move-random-to-first! choices length)
			  ((car choices)
			   env
               succeed
               (lambda ()
                 (try-next
				  (cdr choices)
				  (- length 1)))))))
	  (try-next cprocs (length cprocs)))))

(define (analyze-amb exp)
  (let ((cprocs (map analyze (amb-choices exp))))
    (lambda (env succeed fail)
      (define (try-next choices)
        (if (null? choices)
            (fail)
            ((car choices) env
                           succeed
                           (lambda ()
                             (try-next (cdr choices))))))
      (try-next cprocs))))

;;;Driver loop

(define input-prompt ";;; Amb-Eval input:")
(define output-prompt ";;; Amb-Eval value:")

(define (driver-loop)
  (define (internal-loop try-again)
    (prompt-for-input input-prompt)
    (let ((input (read)))
	  (define stime (get-universal-time))
      (if (eq? input 'try-again)
          (try-again)
          (begin
            (newline)
            (display ";;; Starting a new problem ")
            (ambeval input
                     the-global-environment
                     ;; ambeval success
                     (lambda (val next-alternative)
					   (newline)
                       (announce-output output-prompt)
                       (user-print val)
                       (internal-loop next-alternative))
                     ;; ambeval failure
                     (lambda ()
                       (announce-output
                        ";;; There are no more values of")
                       (user-print input)
                       (driver-loop)))))))
  (internal-loop
   (lambda ()
     (newline)
     (display ";;; There is no current problem")
     (driver-loop))))



;;; Support for Let (as noted in footnote 56, p.428)

(define (let? exp) (tagged-list? exp 'let))
(define (let-bindings exp) (cadr exp))
(define (let-body exp) (cddr exp))

(define (let-var binding) (car binding))
(define (let-val binding) (cadr binding))

(define (make-combination operator operands) (cons operator operands))

(define (let->combination exp)
  ;;make-combination defined in earlier exercise
  (let ((bindings (let-bindings exp)))
    (make-combination (make-lambda (map let-var bindings)
                                   (let-body exp))
                      (map let-val bindings))))
                     


;; A longer list of primitives -- suitable for running everything in 4.3
;; Overrides the list in ch4-mceval.scm
;; Has Not to support Require; various stuff for code in text (including
;;  support for Prime?); integer? and sqrt for exercise code;
;;  eq? for ex. solution

;;primitive display can not be used as primitive procedure
;; because evaluator assumes that return every procedure
;; returns a value
(define (display-items . items)
  (newline)
  (display items)
  'ok)

(define (error-items . items)
  (error items)
  'ok)

(define primitive-procedures
  (list (list 'car car)
        (list 'cdr cdr)
        (list 'cons cons)
        (list 'null? null?)
        (list 'list list)
        (list 'memq memq)
        (list 'member member)
        (list 'map map)
        (list 'not not)
        (list '+ +)
        (list '- -)
        (list '* *)
        (list '= =)
        (list '> >)
        (list '< <)
        (list '>= >=)
        (list '<= <=)
        (list 'abs abs)
        (list 'remainder remainder)
        (list 'integer? integer?)
        (list 'sqrt sqrt)
        (list 'eq? eq?)
        (list 'equal? equal?)
        (list 'number? number?)
		(list 'symbol? symbol?)
		(list 'string=? string=?)
		(list 'string-length string-length)
		(list 'substring substring)
		(list 'string-append string-append)
        (list 'string->symbol string->symbol)
        (list 'symbol->string symbol->string)
        (list 'number->string number->string)
        (list 'pair? pair?)
        (list 'cadr cadr)
        (list 'cdar cdar)
        (list 'cddr cddr)
        (list 'caddr caddr)
        (list 'assoc assoc)
        (list 'append append)
        (list 'eval eval)
        (list 'apply apply)
        (list 'display display-items)
        (list 'error error-items)
		
;;      more primitives
        ))

(define the-global-environment (setup-environment))
(driver-loop)

'AMB-EVALUATOR-LOADED
{% endhighlight %}

In the above evaluator, file "ch4-mceval.scm" is used which can be downloaded from [mit][mit]. Note that, there is one change to be done in this file in `setup-environment` mentioned in the above details.

[mit]: https://mitpress.mit.edu/sites/default/files/sicp/code/ch4-mceval.scm
