---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.41"
order: "041"
date: 2016-04-28
---

{% highlight racket linenos %}
(define (unique-triples n)
   (flatmap
       (lambda (i)
          (flatmap
              (lambda (j)
                  (map  
                      (lambda (k)
                          (list k j i)
                      )
                      (enumerate-interval 1 (- j 1))
                  )
              )
              (enumerate-interval 1 (- i 1))
          )
       )  
       (enumerate-interval 1 n)
   )
)
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
> (display (unique-triples 5))
((1 2 3) (1 2 4) (1 3 4) (2 3 4) (1 2 5) (1 3 5) (2 3 5) (1 4 5) (2 4 5) (3 4 5))
> (display (unique-triples 1))
()
> (display (unique-triples 6))
((1 2 3) (1 2 4) (1 3 4) (2 3 4) (1 2 5) (1 3 5) (2 3 5) (1 4 5) (2 4 5) (3 4 5) (1 2 6) 
    (1 3 6) (2 3 6) (1 4 6) (2 4 6) (3 4 6) (1 5 6) (2 5 6) (3 5 6) (4 5 6))
        
{% endhighlight %}
