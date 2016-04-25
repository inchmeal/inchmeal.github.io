---
chapterName: "Building Abstractions with Data"
sectionName: "2.1 - Introduction to Data Abstraction"
chapter: 2
solution: "2.5"
order: "005"
date: 2016-04-20
---

We have to show that any pair of non-negative integers, $$ a $$ and $$ b $$, can be represented using a single integer: $$ 2^a 3^b $$.

Since any number can be represented as a product of a unique combination of prime numbers, it follows that any number $$ 2^a 3^b $$
will result in a unique number i.e. no other number will have same combination of $$ 2 $$ and $$ 3 $$.
 
Thus we can get back the pair $$ (a,b) $$ using the number $$ 2^a 3^b $$. To get back the pair we need to find the number of times 
we can divide the number by $$ 2 $$ and $$ 3 $$ to get $$ a $$ and $$ b $$ respectively.

{% highlight racket linenos %}
#lang sicp

(define (cons a b)
  (* (expt 2 a) (expt 3 b))
)

(define (log base x)
  (define (count c n)
      (if (= (remainder n base) 0)
          (count (+ c 1) (/ n base))
          c
      )
  )
  (count 0 x)      
  
)

(define (car x)
  (log 2 x)
)

(define (cdr x)
  (log 3 x)
)
{% endhighlight %} 


Output:

{% highlight racket linenos %}
> (cons 4 6)
11664
> (car 11664)
4
> (cdr 11664)
6
{% endhighlight %} 
