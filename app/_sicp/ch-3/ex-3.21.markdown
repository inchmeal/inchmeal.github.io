---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.21"
order: "021"
date: 2018-01-04 
---

Eva Lu is right. The display procedure 'knows' to display 'cons' data-structure. Now, for queue we are using *cons* for storing the front and rear pointers of the list(storing the queue data). Thus the system implementation of display just works assuming it is only a cons.

What we want to display all the data starting from the front pointer till the end of the list pointed by fron pointer and ignore the rear pointer all together for displaying!

Rear pointer is just a internat structure which enables efficient implementation of the queue and it itself is not part of the queue.

The display function can be written as:

{% highlight racket linenos %}
(define (display-queue q) (display (front-ptr q)))
{% endhighlight %}

Output:

{% highlight racket linenos %}
> (define q1 (make-queue))
> (display-queue (insert-queue! q1 'a))
(a)
> (display-queue (insert-queue! q1 'b))
(a b)
> (display-queue (delete-queue! q1))
(b)
> (display-queue (delete-queue! q1))
()
> 
{% endhighlight %}
