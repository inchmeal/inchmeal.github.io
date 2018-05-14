---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.17"
order: "017"
date: 2018-03-12 
---

#### Why extra frame?

Because `let` is transformed into a lambda creation and invocation. And lambda invocation creates a frame.

#### Why this difference won't cause any behaviour change?

Because the new lambda does not do anything extra from the original procedure.

#### Design a new way to avoid extra frame creation.

Instead of creating `let`, we can just put the definitions like `(define x '*unassigned*)` in the beginning of the body and *replace* all the existing definitions by `set!`. For eg:

If we have a procedure: 

{% highlight scheme linenos %}
(define (test x)
  (set! x (+ x 1))
  (define a 0)
  (set! a (+ a 1))
  (define b 1)
  (+ x a b))
{% endhighlight %}

It gets transformed to:

{% highlight scheme linenos %}
(define (test x)
  (define a '*unassigned*)
  (define b '*unassigned*)
  (set! x (+ x 1))
  (set! a 0)
  (set! a (+ a 1))
  (set! b 1)
  (+ x a b))
{% endhighlight %}
