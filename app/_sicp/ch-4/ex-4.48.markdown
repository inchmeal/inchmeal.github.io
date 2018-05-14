---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.48"
order: "048"
date: 2018-03-23 
---

Compound sentences using conjunctions:

{% highlight scheme linenos %}
(define conjunctions '(conj and or but yet))
(define (parse-sentence)
  (define (maybe-extend sentence)
    (amb sentence
         (maybe-extend (list 'comp-sentence
                             sentence
							 (parse-word conjunctions)
                             (parse-simple-sentence)))))
  (maybe-extend (parse-simple-sentence)))

(define (parse-simple-sentence)
  (list 'sentence
         (parse-noun-phrase)
         (parse-verb-phrase)))
{% endhighlight %}

Output:

{% highlight scheme linenos %}
;;; Amb-Eval input:
(parse '(the professor lectures to the student and the cat sleeps but the student studies))

;;; Starting a new problem 

;;; Amb-Eval value:
(comp-sentence
 (comp-sentence
  (sentence (simple-noun-phrase
			 (article the) (noun professor))
			(verb-phrase (verb lectures)
						 (prep-phrase (prep to)
									  (simple-noun-phrase
									   (article the) (noun student)))))
  (conj and)
  (sentence
   (simple-noun-phrase (article the) (noun cat)) (verb sleeps)))
 (conj but)
 (sentence
  (simple-noun-phrase (article the) (noun student)) (verb studies)))
{% endhighlight %}
