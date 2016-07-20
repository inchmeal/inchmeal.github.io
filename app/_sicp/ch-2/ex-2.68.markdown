---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.68"
order: "068"
date: 2016-06-22
---

{% highlight racket linenos %}
(define (encode-symbol symbol tree)
  (define (encode-symbol-1 branch)  
     (if (leaf? branch)
       '()      
       (let ((left (left-branch branch)) (right (right-branch branch)))
         (cond 
            ((element-of-set? symbol (symbols left)) (cons 0 (encode-symbol-1 left)))
            ((element-of-set? symbol (symbols right)) (cons 1 (encode-symbol-1 right)))
            (else (error "Symbol not found" symbol))
         )     
       )
     )
   )
   (if (element-of-set? symbol (symbols tree))
       (encode-symbol-1 tree)
       (error "Symbol not found" symbol)
   )    
)  
  
(define (encode message tree)
  (if (null? message)
      '()
      (append (encode-symbol (car message) tree)
              (encode (cdr message) tree))))
{% endhighlight %}


Test/Output

{% highlight racket linenos %}
> (define encoded-msg (encode '(A D A B B C A) sample-tree))
> (display encoded-msg)
(0 1 1 0 0 1 0 1 0 1 1 1 0)
> (display sample-message)
(0 1 1 0 0 1 0 1 0 1 1 1 0)
> 
{% endhighlight %}
