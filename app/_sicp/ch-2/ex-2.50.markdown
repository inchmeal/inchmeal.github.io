---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.50"
order: "050"
date: 2016-05-14
---

Note that I am using `transform-painter` from the sicp package of Dr Racket. Its arguments are slightly different from the `transform-painter` code given in the book.

Procedure `flip-horiz` :

{% highlight racket linenos %}
(define (flip-horiz painter)
  ( (transform-painter
       (make-vect 1.0 0.0) ; new origin
       (make-vect 0.0 0.0) ; new end of edge1
       (make-vect 1.0 1.0) ; new end of edge2
    ) 
    painter
  )
) 
{% endhighlight %}


Procedure `rotate180` :

{% highlight racket linenos %}
(define (rotate180 painter)
  ( 
    (transform-painter
       (make-vect 1.0 1.0) ; new origin
       (make-vect 0.0 1.0) ; new end of edge1
       (make-vect 1.0 0.0) ; new end of edge2
    ) 
    painter
  )
) 
{% endhighlight %}

Procedure `rotate270` :

{% highlight racket linenos %}
(define (rotate270 painter)
  ( (transform-painter
       (make-vect 0.0 1.0) ; new origin
       (make-vect 0.0 0.0) ; new end of edge1
       (make-vect 1.0 1.0) ; new end of edge2
    ) 
    painter
  )
) 
{% endhighlight %}
