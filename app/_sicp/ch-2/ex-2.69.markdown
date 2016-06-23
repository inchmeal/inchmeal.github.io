---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.69"
order: "069"
date: 2016-06-22
---

{% highlight racket linenos %}
(define (successive-merge pairs)
    (if (null? (cdr pairs))
        (car pairs)
        (let (
              (first (car pairs))
              (second (cadr pairs))
             )
             (successive-merge (adjoin-set
                                      (make-code-tree first second)
                                      (cddr pairs)
                               )
             )
        )
    )
)
{% endhighlight %}


Test/Output

{% highlight racket linenos %}
> (define pairs '((A 4) (B 2) (C 1) (D 1)))
> (define tree (generate-huffman-tree pairs))
> (display tree)
((leaf A 4) ((leaf B 2) ((leaf D 1) (leaf C 1) (D C) 2) (B D C) 4) (A B D C) 8)
> (display sample-tree)
((leaf A 4) ((leaf B 2) ((leaf D 1) (leaf C 1) (D C) 2) (B D C) 4) (A B D C) 8)
> (define encoded-msg (encode '(A D A B B C A) tree))
> (display encoded-msg)
(0 1 1 0 0 1 0 1 0 1 1 1 0)
> 
{% endhighlight %}
