---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.76"
order: "076"
date: 2018-04-05 
---

This did not work exactly as the old `and`. Because it has changed the `and` behaviour from procedural style to more mathematical logic style.

Few points to note for implementation:
- if a variable in frame1 is bound in frame2 then they should be *compatible*. To check *compatibility*, I think that here we can just use `equal?` on the values of these variables instead of checking compatibility by unificiation process.
- I still used the `extend-if-possible` which internally does unify match for compatibility instead of simply using `equal?` for the values bounded. Well, just being lazy to implement :)

{% highlight scheme linenos %}
(define (optimized-conjoin conjuncts frame-stream)
  (define (iter conjuncts merged-stream)
	(if (empty-conjunction? conjuncts)
		merged-stream
		(iter (rest-conjuncts conjuncts)
			  (merge-frame-stream
			   (qeval (first-conjunct conjuncts)
					  frame-stream)
			   merged-stream))))
  
  (stream-filter
   (lambda (frame) (not (eq? frame 'failed)))
   (iter conjuncts frame-stream)))

(define (merge-frame-stream stream1 stream2)
  (stream-flatmap (lambda (frame1)
					(stream-map (lambda (frame2)
								  (merge-frames frame1 frame2))
								stream2))
				  stream1))

(define (merge-frames frame1 frame2)
  (cond ((or (eq? 'failed frame1)
			 (eq? 'failed frame2))
		 'failed)
		((null? frame1) frame2) 
		(else (merge-frames (cdr frame1)
								   (extend-if-possible (caar frame1)
													   (cdar frame1)
													   frame2)))))
{% endhighlight %}

I tested this with few rules from previous example but it did not work for many of them! 

Let's first see an example where it worked:

{% highlight scheme linenos %}
;;; Query input:
(assert! (son Adam Cain))
(assert! (son Cain Enoch))
(assert! (son Enoch Irad))
(assert! (son Irad Mehujael))
(assert! (son Mehujael Methushael))
(assert! (son Methushael Lamech))
(assert! (wife Lamech Ada))
(assert! (son Ada Jabal))
(assert! (son Ada Jubal))

(assert! (rule (find-son ?father ?son)
			   (or (son ?father ?son)
				   (and
					(son ?wife ?son)
					(wife ?father ?wife)))))

Assertion added to data base.
...
Assertion added to data base.

;;; Query input:
(find-son ?f ?s)

;;; Query results:
(find-son ada jubal)
(find-son lamech jubal)
(find-son ada jabal)
(find-son lamech jabal)
(find-son methushael lamech)
(find-son mehujael methushael)
(find-son irad mehujael)
(find-son enoch irad)
(find-son cain enoch)
(find-son adam cain)
{% endhighlight %}

But, it did **not work** for many of the previous exercises.(i tried reverse, unique, and few microshaft exercises which use `and`).

The problem is because this has changed the `and` query to behave more in a mathematical logic style and less in the procedural style! Now the variables which may get bound in earlier clauses of `and` won't be bound and any rule based on it might not work. It can even get into infinite loop for some case and for cases like `not` or `lisp-value` won't work at all.

The merging of frame does not solve the problem of infinite loop of rule evaluation or constructs like `not` and `list-value`. Because the former(infinite loop) happens even before the merging of frame! And the latter case, like `not` returns empty stream which merging frames can't fix.

When I implemented this i simply tried it with the last example i worked with containing `and`. It came from previous exercise `(and (job ?x ?j) (unique (job ?anyone ?j)))`. And it did not worked!

The reason is `j` is not bounded!

Looking ahead at the next exercise, probably the problem with `not` and `lisp-value` might get fixed. 

Note that the infinite loop problem can not be fixed even by the loop-detector of ex-4.67 too. The reason is loop-detector only stops the infinite loop but don't solve the problem of unbounded values.
