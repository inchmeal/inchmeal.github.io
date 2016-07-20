---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.62"
order: "062"
date: 2016-06-17
---

{% highlight racket linenos %}
(define (union-set set1 set2)
  (cond ((null? set1) set2)
        ((null? set2) set1)        
        ((< (car set1) (car set2)) (cons (car set1) (union-set (cdr set1) set2)))
        ((= (car set1) (car set2)) (union-set (cdr set1) set2))
        (else (cons (car set2) (union-set set1 (cdr set2))))
  )
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
> (display (union-set '(0 2 4 6 8) '(1 3 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 4 6 8) '(0 1 3 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 4 6 8) '(1 2 3 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 4 6 8) '(1 3 4 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 3 4 6 7 8 9) '(1 3 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 4 6 8) '(0 2 4 6 8)))
(0 2 4 6 8)
> (display (union-set '(0 1 2 3 4 5 6 7 8 9) '(1 3 5 7 9)))
(0 1 2 3 4 5 6 7 8 9)
> (display (union-set '(0 2 4 6 8) '(11 13 15 17 19)))
(0 2 4 6 8 11 13 15 17 19)
>
{% endhighlight %}

