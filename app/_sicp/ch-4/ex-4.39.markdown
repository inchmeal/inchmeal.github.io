---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.39"
order: "039"
date: 2018-03-21 
---

Well, I found results a bit counter-intuitive.

Moving the `distinct` constraint further down apparently increases the time!(See the example below which took 13 seconds compared to 10 seconds of the original version). 

Note, it was difficult to measure time in scheme because i was using `(current-time)` which gives time in seconds which is a huge number and all of the combinations run in more than 1 second but less than 2 seconds. The work around was to call the procedure mutliple times like this `(list (multiple-dwellings) (multiple-dwellings) ... )`.

Even with the above work-around, the difference in execution time was quite insignicant and seemed to be counter intuitive as noted before.

Now, I believe that that if should indeed be the case that moving `distinct` clause down will increase the time because of this:

There are two things at play:

- The higher a constraint is the more number of cases it will be tested with.
- The more restrictive a constraint is, the lesser number of cases gets tried in the later constraints.

The `distinct` is most restrictive constraint! 

The number of cases that will go down to the second constraint, when `distinct` is the first constraint is $$\, 5! \,$$.

The number of cases go down to the second constraint, when `distinct` is not the first constraint, and lets say first constraint is `(require (not (= cooper 1)))` will be $$\, 4.5^4 \,$$.

Now, since distinct itself is more time consuming, but it restricts a lot of cases - these two forces kind of balance each other. But still not a complete win, moving down distinct increases the time slightly.

I tested by executing this statement:

{% highlight scheme linenos %}
(list (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling) (multiple-dwelling))
{% endhighlight %}

The following version, where I moved the `distinct` as the last constraint, took much more time(13 seconds) than the original version(10 seconds):

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (let ((baker (amb 1 2 3 4 5))
        (cooper (amb 1 2 3 4 5))
        (fletcher (amb 1 2 3 4 5))
        (miller (amb 1 2 3 4 5))
        (smith (amb 1 2 3 4 5)))
    (require (not (= baker 5)))
    (require (not (= cooper 1)))
    (require (not (= fletcher 5)))
    (require (not (= fletcher 1)))
    (require (> miller cooper))
    (require (not (= (abs (- smith fletcher)) 1)))
    (require (not (= (abs (- fletcher cooper)) 1)))
    (require
     (distinct? (list baker cooper fletcher miller smith)))
    (list (list 'baker baker)
          (list 'cooper cooper)
          (list 'fletcher fletcher)
          (list 'miller miller)
          (list 'smith smith))))
{% endhighlight %}

And this combination seemed to take slightly less time(9 seconds) than the original version(10 seconds):

{% highlight scheme linenos %}
(define (multiple-dwelling)
  (let ((baker (amb 1 2 3 4 5))
        (cooper (amb 1 2 3 4 5))
        (fletcher (amb 1 2 3 4 5))
        (miller (amb 1 2 3 4 5))
        (smith (amb 1 2 3 4 5)))
    (require
     (distinct? (list baker cooper fletcher miller smith)))
    (require (not (= (abs (- smith fletcher)) 1)))
    (require (not (= (abs (- fletcher cooper)) 1)))
    (require (> miller cooper))
    (require (not (= fletcher 5)))
    (require (not (= fletcher 1)))
    (require (not (= cooper 1)))
    (require (not (= baker 5)))
    (list (list 'baker baker)
          (list 'cooper cooper)
          (list 'fletcher fletcher)
          (list 'miller miller)
          (list 'smith smith))))
{% endhighlight %}

This is perhaps because, constraints:

{% highlight scheme linenos %}
(require (not (= (abs (- smith fletcher)) 1)))
(require (not (= (abs (- fletcher cooper)) 1)))
{% endhighlight %}

... are more restrictive(because they restrict two variables) and thus lesser number of cases go down. Thus moving them up slighlty improves the time.
