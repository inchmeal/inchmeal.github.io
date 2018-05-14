---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.34"
order: "034"
date: 2018-02-13 
---

{% highlight scheme linenos %}
1 ]=> (define (squarer a b) (multiplier a a b))

;Value: squarer

1 ]=> (define x1 (make-connector))

;Value: x1

1 ]=> (define sqr (make-connector))

;Value: sqr

1 ]=> (squarer x1 sqr)

;Value 33: #[compound-procedure 33 me]

1 ]=> (probe "x1" x1)

;Value 34: #[compound-procedure 34 me]

1 ]=> (probe "square" sqr)

;Value 35: #[compound-procedure 35 me]

1 ]=> (set-value! x1 10 'ovais)

Probe: x1 = 10
Probe: square = 100
;Value: done

1 ]=> (forget-value! x1 'ovais)

Probe: x1 = ?
Probe: square = ?
;Value: done

1 ]=> (set-value! sqr 125 'ovais)

Probe: square = 125
;Value: done

1 ]=> (has-value? x1)

;Value: #f

1 ]=> 
{% endhighlight %}


The problem is when we set the square, it does not automatically set a - because of this line in multiplier:

{% highlight scheme linenos %}
((and (has-value? product) (has-value? m1))
{% endhighlight %}

For a multiplier, this is indeed the correct behavior for the multiplier. The problem lies in our squarer because multiplier is not aware/can not be aware of the inputs a and b are same.
