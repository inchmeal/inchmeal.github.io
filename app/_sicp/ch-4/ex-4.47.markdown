---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.47"
order: "047"
date: 2018-03-23 
---

Both cases cause infinite loops but in different ways. The first case can read a word/words in some cases(when a verb phrase can't be read) before going to infinite loop. 

Let's first see the code again:

{% highlight scheme linenos %}
(define (parse-verb-phrase)
  (amb (parse-word verbs)
       (list 'verb-phrase
             (parse-verb-phrase)
             (parse-prepositional-phrase))))
{% endhighlight %}

First invocation will read a verb from the input because of `(parse-word verbs)`. Now if the first expression of `amb` *failed*(one eg when the input read is not verb) or we called `try-again`, then other expression in `amb` is evaluated. This will make a recursive call to `parse-verb-phrase`. Now, this recursive call again reads a `verb` and returns to evaluation of expression `(list 'verb-phrase (parse-ver-phrase) (parse-prepositional-phrase))`. And we try to read preposition phrase.

What if reading the preposition failed? This will cause to go to the next expression of `amb` from the recursive call. And that will again read the verb and try to read preposition and failing again and then again calling `(parse-verb-phrase)`.

The point is this infinite loop is a bit subtle. When read is sucessfull i.e. correctly reading a verb-phrase, then it will work but on failure it just keep trying recursively.

Louis Reasoner bugs are subtle and many times they are difficult to spot!

Well, the second case goes to infinite loop much faster, without reading anything from the input.
