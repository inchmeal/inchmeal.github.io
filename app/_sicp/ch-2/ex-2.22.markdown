---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.22"
order: "022"
date: 2016-04-25
---

{% highlight racket linenos %}
(define (square-list items)
  (define (iter things answer)
    (if (null? things)
        answer
        (iter (cdr things)
              (cons (square (car things)) answer)
        )
    )
  )
  (iter iterms nil)
)
{% endhighlight %}

This procedure removes an item from the original list, squares it, and add it to the start of the new list.

Thus an item at position $$ i $$ of original list will be present at position $$ n-i $$ of the new list, where $$ n $$ is length
of the list.

Clearly the item does not reserve their original positions in new list. In fact they are present in exactly opposite position.

{% highlight racket linenos %}
(define (square-list items)
  (define (iter things answer)
    (if (null? things)
        answer
        (iter (cdr things)
              (cons answer (square (car things)))
        )
    )
  )
  (iter iterms nil)
)
{% endhighlight %}

This is also not correct as it is no longer a list structure. More accurately it is exactly opposite of list structure i.e. each pair's first 
element is pointing to the next pair and second element is storing the data unlike in the list structure each pair's first element contains data
and second element points to the next pair.



