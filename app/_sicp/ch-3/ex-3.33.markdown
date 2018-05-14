---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.33"
order: "033"
date: 2018-02-13 
---

{% highlight scheme linenos %}
;; Averager

(define a (make-connector))
(define b (make-connector))
(define avg (make-connector))

(define (make-averager a b avg)
  (let ((const (make-connector))
		(total (make-connector)))
	(adder a b total)
	(multiplier const avg total)
	(constant 2 const)
	'ok))

(make-averager a b avg)

(probe "a" a)
(probe "b" b)
(probe "avg" avg)
{% endhighlight %}


Output:

{% highlight scheme linenos %}

1 ]=> (set-value! a 20 'ovais)

;Value 32: #[compound-procedure 32 me]

1 ]=> 
Probe: a = 20
;Value: done

1 ]=> (set-value! b 30 'ovais)

Probe: b = 30
Probe: avg = 25
;Value: done

1 ]=> (set-value! a 50 'ovais)

;Contradiction (20 50)
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> (restart 1)

;Abort!

1 ]=> (forget-value! a 'ovais)

Probe: a = ?
Probe: avg = ?
;Value: done

1 ]=> (set-value! a 29 'ovais)

Probe: a = 29
Probe: avg = 59/2
;Value: done

1 ]=> 
{% endhighlight %}


Note that when some error occurs, MIT scheme keep showing it in prompt unless `(restart 1)` is called.

There is one important aspect that caused me some time to understand - Ownership

Any one can set a connector if it has no value. But if there is a value set in it then only that user/code is able to forget that value. This is a good idea - one who sets is responsible to remove. It makes easier to debug things if something goes wrong.

Note that in the above example - when `(forget-value! a 'ovais)` is invoked, the value of `b` is not forgoten - because it was not set my the squarer procedure! But it was set me user- 'ovais.

I am also putting the complete code here for future reference:

{% highlight scheme linenos %}

;; primitives - adder, multiplier, constant and interfaces for these contstraints(inform-about-value, informa-about-no-value)
(define (adder a1 a2 sum)
  (define (process-new-value)
    (cond ((and (has-value? a1) (has-value? a2))
           (set-value! sum
                       (+ (get-value a1) (get-value a2))
                       me))
          ((and (has-value? a1) (has-value? sum))
           (set-value! a2
                       (- (get-value sum) (get-value a1))
                       me))
          ((and (has-value? a2) (has-value? sum))
           (set-value! a1
                       (- (get-value sum) (get-value a2))
                       me))))
  (define (process-forget-value)
    (forget-value! sum me)
    (forget-value! a1 me)
    (forget-value! a2 me)
    (process-new-value))
  (define (me request)
    (cond ((eq? request 'I-have-a-value)  
           (process-new-value))
          ((eq? request 'I-lost-my-value) 
           (process-forget-value))
          (else 
           (error "Unknown request -- ADDER" request))))
  (connect a1 me)
  (connect a2 me)
  (connect sum me)
  me)

(define (multiplier m1 m2 product)
  (define (process-new-value)
    (cond ((or (and (has-value? m1) (= (get-value m1) 0))
               (and (has-value? m2) (= (get-value m2) 0)))
           (set-value! product 0 me))
          ((and (has-value? m1) (has-value? m2))
           (set-value! product
                       (* (get-value m1) (get-value m2))
                       me))
          ((and (has-value? product) (has-value? m1))
           (set-value! m2
                       (/ (get-value product) (get-value m1))
                       me))
          ((and (has-value? product) (has-value? m2))
           (set-value! m1
                       (/ (get-value product) (get-value m2))
                       me))))
  (define (process-forget-value)
    (forget-value! product me)
    (forget-value! m1 me)
    (forget-value! m2 me)
    (process-new-value))
  (define (me request)
    (cond ((eq? request 'I-have-a-value)
           (process-new-value))
          ((eq? request 'I-lost-my-value)
           (process-forget-value))
          (else
           (error "Unknown request -- MULTIPLIER" request))))
  (connect m1 me)
  (connect m2 me)
  (connect product me)
  me)

(define (constant value connector)
  (define (me request)
    (error "Unknown request -- CONSTANT" request))
  (connect connector me)
  (set-value! connector value me)
  me)

(define (inform-about-value constraint)
  (constraint 'I-have-a-value))
(define (inform-about-no-value constraint)
  (constraint 'I-lost-my-value))


;; probe

(define (probe name connector)
  (define (print-probe value)
    (newline)
    (display "Probe: ")
    (display name)
    (display " = ")
    (display value))
  (define (process-new-value)
    (print-probe (get-value connector)))
  (define (process-forget-value)
    (print-probe "?"))
  (define (me request)
    (cond ((eq? request 'I-have-a-value)
           (process-new-value))
          ((eq? request 'I-lost-my-value)
           (process-forget-value))
          (else
           (error "Unknown request -- PROBE" request))))
  (connect connector me)
  me)


;; connectors

(define (make-connector)
  (let ((value false) (informant false) (constraints '()))
    (define (set-my-value newval setter)
      (cond ((not (has-value? me))
             (set! value newval)
             (set! informant setter)
             (for-each-except setter
                              inform-about-value
                              constraints))
            ((not (= value newval))
             (error "Contradiction" (list value newval)))
            (else 'ignored)))
    (define (forget-my-value retractor)
      (if (eq? retractor informant)
          (begin (set! informant false)
                 (for-each-except retractor
                                  inform-about-no-value
                                  constraints))
          'ignored))
    (define (connect new-constraint)
      (if (not (memq new-constraint constraints))
          (set! constraints 
                (cons new-constraint constraints)))
      (if (has-value? me)
          (inform-about-value new-constraint))
      'done)
    (define (me request)
      (cond ((eq? request 'has-value?)
             (if informant true false))
            ((eq? request 'value) value)
            ((eq? request 'set-value!) set-my-value)
            ((eq? request 'forget) forget-my-value)
            ((eq? request 'connect) connect)
            (else (error "Unknown operation -- CONNECTOR"
                         request))))
    me))

(define (for-each-except exception procedure list)
  (define (loop items)
    (cond ((null? items) 'done)
          ((eq? (car items) exception) (loop (cdr items)))
          (else (procedure (car items))
                (loop (cdr items)))))
  (loop list))

(define (has-value? connector)
  (connector 'has-value?))
(define (get-value connector)
  (connector 'value))
(define (set-value! connector new-value informant)
  ((connector 'set-value!) new-value informant))
(define (forget-value! connector retractor)
  ((connector 'forget) retractor))
(define (connect connector new-constraint)
  ((connector 'connect) new-constraint))




;;Celcius - Ferhenhite sytem implementation

(define C (make-connector))
(define F (make-connector))
(celsius-fahrenheit-converter C F)

(define (celsius-fahrenheit-converter c f)
  (let ((u (make-connector))
        (v (make-connector))
        (w (make-connector))
        (x (make-connector))
        (y (make-connector)))
    (multiplier c w u)
    (multiplier v x u)
    (adder v y f)
    (constant 9 w)
    (constant 5 x)
    (constant 32 y)
    'ok))

(probe "Celsius temp" C)
(probe "Fahrenheit temp" F)

;; Averager

(define a (make-connector))
(define b (make-connector))
(define avg (make-connector))

(define (make-averager a b avg)
  (let ((const (make-connector))
		(total (make-connector)))
	(adder a b total)
	(multiplier const avg total)
	(constant 2 const)
	'ok))

(make-averager a b avg)

(probe "a" a)
(probe "b" b)
(probe "avg" avg)

{% endhighlight %}
