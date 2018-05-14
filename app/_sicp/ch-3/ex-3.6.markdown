---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.6"
order: "006"
date: 2017-12-31 
---

I could not find a way to *seed* in the sicp package of DrRacket. So just implement the procedure and used `random <val>` - and passed seed as val to this procedure for naive testing :)

{% highlight racket linenos %}
#lang sicp

(#%require (only racket/base error))

(define random-seed 100)

; TODO: change it with the correct procedure to seed. This wont 
; work as expected. `random <val>` returns a random number less than the passed value - which 
; is not what we want :)
(define (rand-update val)
  (random val))

(define (rand m)
    (cond
      ((eq? 'generate m) (set! random-seed (rand-update random-seed)) random-seed)
      ((eq? 'reset m) (lambda(n) (set! random-seed n) random-seed))
      (else (error "Invalid parameter"))))
{% endhighlight %}

