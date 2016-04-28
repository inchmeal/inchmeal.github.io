---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.38"
order: "038"
date: 2016-04-28
---

Procedures for *fold-left* and *fold-right*:

{% highlight racket linenos %}
(define (fold-right op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (fold-right op initial (cdr sequence))
      )
  )
)

(define (fold-left op initial sequence)
  (define (iter result rest)
    (if (null? rest)
        result
        (iter (op result (car rest))
              (cdr rest))))
  (iter initial sequence))
{% endhighlight %}

Fold-Right:

$$ a_1 \text{ op } (a_2 \text{ op } (a_3 \text{ op } ... (a_n \text{ op } \text{ init }) ... )) $$.

Eg: If $$ op = \times $$ and $$ n = 4 $$ :

$$ a_1 \times (a_2 \times (a_3 \times (a_4 \times \text{ init }))) $$.

 
Fold-Left:
 
$$ ((...(\text{ init } \text{ op } a_1) \text{ op } a_2) \text{ op } a_3) \text{ op } ... ) \text{ op } a_n $$.
  
Eg: If $$ op = \times $$ and $$ n = 4 $$ :

$$ (((\text{ init } \times a_1) \times a_2) \times a_3) \times a_4 $$.
  
 
{% highlight racket linenos %}
> (fold-right / 1 (list 1 2 3))
3/2

>  (fold-left / 1 (list 1 2 3))
1/6

> (display (fold-right list nil (list 1 2 3)))
(1 (2 (3 ())))

> (display (fold-left list nil (list 1 2 3)))
(((() 1) 2) 3)
> 
{% endhighlight %}


If *fold-right* and *fold-left* produce same values then:

$$ a_1 \text{ op } (a_2 \text{ op } (a_3 \text{ op } ... (a_n \text{ op } \text{ init }) ... )) = ((...(\text{ init } \text{ op } a_1) \text{ op } a_2) \text{ op } a_3) \text{ op } ... ) \text{ op } a_n $$.

For eg: if $$ n = 4 $$ and $$ op = \times $$:

$$ a_1 \times (a_2 \times (a_3 \times (a_4 \times \text{ init }))) = (((\text{ init } \times a_1) \times a_2) \times a_3) \times a_4 $$.

Clearly this property is called associative in mathematics.