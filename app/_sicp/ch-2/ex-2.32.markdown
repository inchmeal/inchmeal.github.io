---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.32"
order: "032"
date: 2016-04-27
---

To find power set of a set, $$ S $$, we can proceed as:
 
Power set of $$ S $$ is:

- if $$ S = \phi $$, then $$ \mathcal P(S) = \{ \phi \} $$.    
- if $$ S \ne \phi $$, then choose any element $$ x \in S $$, then:     
  $$ \mathcal P(S) = \mathcal P(S \setminus \{ x \}) \; \cup \; \{ X \cup \{x\} \, \vert \; X \in  \mathcal P(S \setminus \{ x \}) \} $$.
  

{% highlight racket linenos %}
#lang sicp

(define (subsets s)
  (if (null? s)
      (list nil)
      (let (
             (rest (subsets (cdr s)))
           )
           (append
                  rest
                  (map
                      (lambda (x)
                        (cons (car s) x)
                      )  
                      rest
                  )
           )
     )
  )
)
{% endhighlight %}

