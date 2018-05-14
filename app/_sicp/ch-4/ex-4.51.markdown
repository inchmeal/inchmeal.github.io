---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.51"
order: "051"
date: 2018-03-26 
---

{% highlight scheme linenos %}
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
{% endhighlight %}

Test Code:

{% highlight scheme linenos %}
(define (require p)
    (if (not p) (amb)))

(define (an-element-of l)
  (require (not (null? l)))
  (amb (car l) (an-element-of (cdr l))))

(define count 0)
(let ((x (an-element-of '(a b c)))
      (y (an-element-of '(a b c))))
  (permanent-set! count (+ count 1))
  (require (not (eq? x y)))
  (list x y count))
{% endhighlight %}

Output is, ofcourse, as mentioned in the problem.

When we use `set!`, however the output is as expected `(a b 1)`.
