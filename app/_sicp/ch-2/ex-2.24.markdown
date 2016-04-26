---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.24"
order: "024"
date: 2016-04-26
---

Skipping drawings. :)

{% highlight racket linenos %}
> (list 1 (list 2 (list 3 4)))
(mcons 
      1 
      (mcons 
            (mcons 
                  2 
                  (mcons 
                        (mcons 
                              3 
                              (mcons 
                                    4 
                                    '()
                              )
                        ) 
                        '()
                  )
            ) 
            '()
      )
)
{% endhighlight %}

