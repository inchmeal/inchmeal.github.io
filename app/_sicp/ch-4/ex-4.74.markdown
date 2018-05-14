---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.74"
order: "074"
date: 2018-04-04 
---

#### (a)

{% highlight scheme linenos %}
(define (simple-stream-flatmap proc s)
  (simple-flatten (stream-map proc s)))

(define (simple-flatten stream)
  (stream-map stream-car
              (stream-filter (lambda (s)
                               (not (stream-null? s)))
                             stream)))
{% endhighlight %}

#### (b)

I hope behavior means output here which i think should be exactly same as in the earlier case.

The reason for output not being affected lies in how interleave works for the cases we used simple-stream-flatmap:

- if the first stream(counting arguments from left to right) passed to it is not empty, it generates/consumes the first element of the first stream and then mixes the remaining streams. Since both streams passed to interleave are either empty or with one element, there is nothing to mix once an element of the first stream is consumed. Thus after generating the first element interleave just returns the other stream.

- if first stream passed to it is null, then interleave simply returns the other stream.

Thus for the case, when stream has only one or zero elements, `interleave` outputs elements in the same order as our `simple-stream-flatmap`.
