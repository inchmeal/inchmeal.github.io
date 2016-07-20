---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.61"
order: "061"
date: 2016-06-17
---

{% highlight racket linenos %}
(define (adjoin-set x set)
  (cond ((null? set) (cons x set))
        ((< x (car set)) (cons x set))
        ((= x (car set)) set)        
        (else (cons (car set) (adjoin-set x (cdr set))))
  )
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
> (display (adjoin-set 5 '(1 2 3 6 9)))
(1 2 3 5 6 9)
> (display (adjoin-set 0 '(1 2 3 6 9)))
(0 1 2 3 6 9)
> (display (adjoin-set 10 '(1 2 3 6 9)))
(1 2 3 6 9 10)
> (display (adjoin-set 1 '(1 2 3 6 9)))
(1 2 3 6 9)
> (display (adjoin-set 9 '(1 2 3 6 9)))
(1 2 3 6 9)
> (display (adjoin-set 6 '(1 2 3 6 9)))
(1 2 3 6 9)
> (display (adjoin-set 15 '(1 2 3 6 9)))
(1 2 3 6 9 15)
> 
{% endhighlight %}

Sometimes, adding an element chances are that we only need to add the new element in the front of the list, thus in $$ \theta(1) $$.

Sometimes, adding an element chances are that we need to add the new element in the end of the list, thus in $$ \theta(n) $$.

Thus on average we have the complexity of $$ \theta( \frac n 2 ) $$.