---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.56"
order: "056"
date: 2018-02-17 
---

This is quite cool example!

{% highlight scheme linenos %}
(define S (cons-stream
		              1
	  			      (merge (scale-stream S 2)
			   				 (merge (scale-stream S 3)
									(scale-stream S 5)))))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
1 ]=> (stream-ref S 0)

;Value: memo-proc

1 ]=> 
;Value: 1

1 ]=> (stream-ref S 1)

;Value: 2

1 ]=> (stream-ref S 2)

;Value: 3

1 ]=> (stream-ref S 3)

;Value: 4

1 ]=> (stream-ref S 4)

;Value: 5

1 ]=> (stream-ref S 5)

;Value: 6

1 ]=> (stream-ref S 6)

;Value: 8

1 ]=> (stream-ref S 7)

;Value: 9

1 ]=> (stream-ref S 8)

;Value: 10

1 ]=> (stream-ref S 9)

;Value: 12

1 ]=> (stream-ref S 10)

;Value: 15

1 ]=> (stream-ref S 11)

;Value: 16

1 ]=> (stream-ref S 12)

;Value: 18
{% endhighlight %}
