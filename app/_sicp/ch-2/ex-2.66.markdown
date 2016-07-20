---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.66"
order: "066"
date: 2016-06-17
---

Here I am evading the implementation of records structure as exercise seems to focus more on the `lookup` instead of the record.

It can be extended to use record.

{% highlight racket linenos %}
(define (lookup x set)
  (cond ((null? set) false)
        ((= x (entry set)) true)
        ((< x (entry set))
            (lookup x (left-branch set)))
        (else
            (lookup x (right-branch set)))
  )      
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
; using procedure from previous exercise to build tree.
> (define my-tree (list->tree (list 0 3 4 9 11 20 26 29 35 76 93 97)))
> (lookup 21 my-tree)
#f
> (lookup 0 my-tree)
#t
>  (lookup 10 my-tree)
#f
>  (lookup 97 my-tree)
#t
>  (lookup 35 my-tree)
#t
>  (lookup 33 my-tree)
#f
> 
{% endhighlight %}
