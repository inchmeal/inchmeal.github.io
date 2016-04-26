---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.25"
order: "025"
date: 2016-04-26
---

{% highlight racket linenos %}
; (1 3 (5 7) 9)
> (define l (list 1 3 (list 5 7) 9))
> (car (cdr (car (cdr (cdr l)))))
7


; ((7))
> (define l (list (list 7)))
> (car (car l))
7


; (1 (2 (3 (4 (5 (6 7))))))
> (define l (list 1 (list 2 (list 3 (list 4 (list 5 (list 6 7)))))))
> (car (cdr (car (cdr (car (cdr (car (cdr (car (cdr (car (cdr l))))))))))))
7

{% endhighlight %}

