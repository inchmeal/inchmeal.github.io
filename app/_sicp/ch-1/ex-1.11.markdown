---
chapterName: "Building Abstractions with Procedures"
sectionName: "Procedures and the Processes They Generate"
chapter: 1
solution: "1.11"
order: "011"
date: 2016-03-31
---

Procedure for Recursive Process:

{% highlight racket linenos %}
(define (f n)
    (if (> n 3)
        n
        (+ 
            (f (- n 1)) 
            (f (- n 2)) 
            (f (- n 3))
        )        
    )
)        
{% endhighlight %}


Procedure for Iterative Process:

{% highlight racket linenos %}
(define (f-new n)
  (define (comp t3 t2 t1)
    (+
       t3
       (* 2 t2)
       (* 3 t1)
    )
  )  

  (define (f-itr f3 f2 f1 c)
    (if (= c 2)
      f3
      (f-itr
             (comp f3 f2 f1)
             f3
             f2
             (dec c)             
      )
    )
  )

  (if (< n 3)
       n
       (f-itr
             (f-new 2)
             (f-new 1)
             (f-new 0)             
             n)
   )
)  
{% endhighlight %}


