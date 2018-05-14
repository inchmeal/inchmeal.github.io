---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.16"
order: "016"
date: 2018-01-04 
---

{% highlight racket linenos %}
> (define p1 (cons 'a '()))
> (define p2 (cons 'b '()))
> (define p3 (cons 'c '()))
> (set-cdr! p2 p3)
> (set-cdr! p1 p2)
> (count-pairs p1)
3
> (display p1)
(a b c)
> (set-car! p1 p2)
> (display p1)
((b c) b c)
> (count-pairs p1)
5
> (set-car! p1 p3)
> (display p1)
((c) b c)
> (count-pairs p1)
4
> (set-car! p2 p3)
> (display p2)
((c) c)
> (set-car! p1 p2)
> (display p1)
(((c) c) (c) c)
> (count-pairs p1)
7
> (set-car! p1 p1)
> (count-pairs p1)

; The above call did not return
{% endhighlight %}

