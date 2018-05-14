---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.51"
order: "051"
date: 2018-02-16 
---

When we first define `x` using `(define x (stream-map show (stream-enumerate-interval 0 10)))` it will only compute the first element in `x` which causes it to call `show` and printing the first element `0`. 

Note that notice the function `show` it returns `x` which is used in `cons-stream` for constructing the object when returned. It may cause a slight confusion with `(display x)` output. However, this is easy to distinguish in output(MIT-scheme), the value that gets printed by default is the returned value of the procedure entered in the shell - is printed as `;Value: <val>`. 

Now when we call `(stream-ref x 5)` it does not print `0` but prints `1` to `5` and then prints the final returned value which ofcourse is `5`(because 6th, counting from 0, element in the list `'(0 1 2 3 4 5 6 7 8 9 10)` is 5).

The reason it does not print `0` is because of memoization! The first value was already computed while defining `x` so it was not computed again.

Now when we call `(stream-ref x 5)` it does not print any output  from statement `(display x)` because the values before this are all memoized and `show` is not called. Thus it only outputs the last returned value `;Value: 5`.

That explains it!

{% highlight scheme linenos %}
1 ]=>  (define x (stream-map show (stream-enumerate-interval 0 10)))

0
;Value: x

1 ]=> (stream-ref x 5)

1
2
3
4
5
;Value: 5

1 ]=> (stream-ref x 5)

;Value: 5

1 ]=> (stream-ref x 7)

6
7
;Value: 7

1 ]=> (stream-ref x 7)

;Value: 7

1 ]=> (stream-ref x 14)

8
9
10
;The object (), passed as the first argument to cdr, is not the correct type.
;To continue, call RESTART with an option number:
; (RESTART 2) => Specify an argument to use in its place.
; (RESTART 1) => Return to read-eval-print level 1.

{% endhighlight %}


