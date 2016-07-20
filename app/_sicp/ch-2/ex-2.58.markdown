---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.58"
order: "058"
date: 2016-05-15
---

My approach is to convert the given expression in a way such that part(a) of this exercise can be applied to the converted expression.

I am assuming operators are only restricted to `*` and `+`. However I think it should be easy to extend for other operators.

{% highlight racket linenos %}
(define (simplify expr)
    (cond ((null? expr) expr)
          ((variable? expr) expr)
          ((number? expr) expr)
          ((pair? expr)
                  (if (null? (cdr expr))
                      (simplify (car expr))
                      (if (eq? (cadr expr) '+)
                          (list (simplify (car expr)) '+ (simplify (cddr expr)))
                          (if (null? (cdddr expr))
                              (list (simplify (car expr)) '* (simplify (caddr expr)))
                              (simplify (cons (list (car expr) '* (caddr expr)) (cdddr expr)))
                          )    
                      )
                  )
          )
    )      
)
{% endhighlight %}

Test/Output:

{% highlight racket linenos %}
>  (display (simplify '(x * 3)))
(x * 3)
>  (display (deriv (simplify '(x * 3)) 'x))
3
>  (display (simplify '(x * 3 * 5 * y * 6)))
((((x * 3) * 5) * y) * 6)
>  (display (deriv (simplify '(x * 3 * 5 * y * 6)) 'x))
((15 * y) * 6)
> (display (simplify '(x * 3 * 5 + y * 6)))
(((x * 3) * 5) + (y * 6))
> (display (deriv (simplify '(x * 3 * 5 + y * 6)) 'x))
15
> (display (simplify '(x * 3 * 5 * (y + 1 * 2 * 3 ) + 6)))
((((x * 3) * 5) * (y + 6)) + 6)
> (display (deriv (simplify '(x * 3 * 5 * (y + 1 * 2 * 3 ) + 6)) 'x))
(15 * (y + 6))
> (display (simplify '(x * 3 * 5 * (y + 1 * 2 * 3 ) + (6 * z + 9))))
((((x * 3) * 5) * (y + 6)) + ((6 * z) + 9))
> (display (deriv (simplify '(x * 3 * 5 * (y + 1 * 2 * 3 ) + (6 * z + 9))) 'x))
(15 * (y + 6))
>  (display (simplify '(x * 3 + 5)))
((x * 3) + 5)
>  (display (deriv (simplify '(x * 3 + 5)) 'x))
3
>  (display (simplify '(1 + 3 + 5)))
9
>  (display (deriv (simplify '(1 + 3 + 5)) 'x))
0
> (display (simplify '(((((x)))))))
x
>  (display (deriv (simplify '(((((x)))))) 'x))
1
> 
{% endhighlight %}


Note that in the test example `'(x * 3 * 5 * y * 6))` all numbers are not multiplied(only those which are present next to each other). This was not required in
 the exercise, so leaving it :).
 
 