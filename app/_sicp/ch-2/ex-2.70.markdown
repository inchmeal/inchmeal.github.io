---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.70"
order: "070"
date: 2016-06-22
---

{% highlight racket linenos %}
> (define pairs '((A 2) (BOOM 1) (GET 2) (JOB 2) (NA 16) (SHA 3) (YIP 9) (WAH 1)))
>  (define tree (generate-huffman-tree pairs))
> (define encoded-msg (encode '(GET A JOB SHA NA NA NA NA NA NA NA NA GET A JOB SHA NA NA NA NA NA NA NA NA WAH YIP YIP YIP YIP YIP YIP YIP YIP YIP SHA BOOM) tree))
> (display encoded-msg)
(1 1 1 1 1 1 1 0 0 1 1 1 1 0 1 1 1 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 1 1 1 1 0 1 1 1 0 0 0 0 0 0 0 0 0 1 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 0 1 1 0 1 1)
> (length encoded-msg)
84
> 
{% endhighlight %}

We have 8 symbols, thus we need $$ {\log}_2 8 = 3 $$ bits for each symbol. In the given message we have 36 symbols/words. Thus we need $$ 36 \times 3 = 108 $$ bits. 