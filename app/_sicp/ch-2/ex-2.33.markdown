---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.33"
order: "033"
date: 2016-04-27
---

{% highlight racket linenos %}
#lang sicp

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence))
      )
  )
)

(define (map p sequence)
   (accumulate (lambda (x y) (cons (p x) y)) nil sequence)
)


(define (append seq1 seq2)
   (accumulate
               cons
               seq1               
               seq2
   )
)


(define (length sequence)
  (accumulate (lambda (x y) (+ 1 y)) 0 sequence)
)
{% endhighlight %}


Example/Output:

{% highlight racket linenos %}

; map example
> (display (map inc (list 1 2 3)))
(2 3 4)
> (display (map inc '()))
()

; append example
> (display (append '() (list 1 2 3)))
(1 2 3)
> (display (append '() '()))
()
> (display (append (list 1 2 3) '()))
(1 2 3)
>  (display (append (list 1 2 3) (list 4 5 6)))
(4 5 6 1 2 3)

; length example
> (length '())
0
>  (length (list 10 20 30))
3

{% endhighlight %}


