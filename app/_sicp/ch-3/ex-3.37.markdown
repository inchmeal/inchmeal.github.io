---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.37"
order: "037"
date: 2018-02-13 
---

{% highlight scheme linenos %}
(define (c+ x y)
  (let ((z (make-connector)))
    (adder x y z)
    z))


(define (c- x y)
  (let ((z (make-connector)))
    (adder y z x)
    z))

(define (c* x y)
  (let ((z (make-connector)))
    (multiplier x y z)
    z))

(define (c/ x y)
  (let ((z (make-connector)))
    (multiplier y z x)
    z))

(define (cv x)
  (let ((z (make-connector)))
    (constant x z)
    z))

(define (celsius-fahrenheit-converter-new x)
  (c+ (c* (c/ (cv 9) (cv 5))
          x)
      (cv 32)))
(define CC (make-connector))
(define FF (celsius-fahrenheit-converter-new CC))

(probe "Celsius temp" CC)
(probe "Fahrenheit temp" FF)
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (set-value! CC 25 'user)

Probe: Celsius temp = 25
Probe: Fahrenheit temp = 77
;Value: done

1 ]=> (set-value! FF 212 'user)

;Contradiction (77 212)
;To continue, call RESTART with an option number:
; (RESTART 1) => Return to read-eval-print level 1.

2 error> (forget-value! CC 'user)

Probe: Celsius temp = ?
Probe: Fahrenheit temp = ?
;Value: done

2 error> (restart 1)

;Abort!

1 ]=> (set-value! FF 212 'user)

Probe: Fahrenheit temp = 212
Probe: Celsius temp = 100
;Value: done
{% endhighlight %}
