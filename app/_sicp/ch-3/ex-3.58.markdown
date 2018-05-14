---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.58"
order: "058"
date: 2018-02-18 
---

It gives the decimal part when we pass 10 as radix. Thus it gives the decimal part of the number $$\,\frac {num} {den}\,$$ in base `radix`.


{% highlight scheme linenos %}
1 ]=> (define xxx (expand 1 7 10))

;Value: memo-proc

1 ]=> 
;Value: xxx

1 ]=> xxx

;Value 5: (1 . #[compound-procedure 6])

1 ]=> (stream-ref xxx 0)

;Value: 1

1 ]=> (stream-ref xxx 1)

;Value: 4

1 ]=> (stream-ref xxx 2)

;Value: 2

1 ]=> (stream-ref xxx 3)

;Value: 8

1 ]=> (define yy (expand 3 8 10))

;Value: yy

1 ]=> (stream-ref yy 0)

;Value: 3

1 ]=> (stream-ref yy 1)

;Value: 7

1 ]=> (stream-ref yy 2)

;Value: 5

1 ]=> (stream-ref yy 3)

;Value: 0

1 ]=> (stream-ref yy 4)

;Value: 0

1 ]=> (stream-ref yy 5)

;Value: 0

1 ]=> 
{% endhighlight %}



