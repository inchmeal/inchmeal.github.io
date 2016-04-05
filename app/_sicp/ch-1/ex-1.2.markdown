---
chapterName: "Building Abstractions with Procedures"
sectionName: "The Elements of Programming"
chapter: 1
solution: "1.2"
order: "002"
date: 2016-03-29
---

{% highlight racket linenos %}
(/ 
    (+ 
        5 4 (- 
                2 (- 
                    3 (+ 
                          6 (/ 4 5)
                      )
                   )
            )
    ) (* 
            3 
            (- 6 2) 
            (- 2 7)
      )
)    
{% endhighlight %}