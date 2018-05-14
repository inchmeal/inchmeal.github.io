---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.66"
order: "066"
date: 2018-03-28 
---

Ben realises the following case:

If one wants to find average salary of the wheels and thus uses the query from the previous exercise then it give wrong answer because of the duplication in results.

#### Approach outline to avoid duplication:

- A way where we can identify the variable on which we detect duplicate records. Something like this:

{% highlight scheme linenos %}
(sum ?amount ?name
     (and (job ?name (computer programmer))
          (salary ?name ?amount)))
{% endhighlight %}

where `?name` can help in removing duplicates.

- Now, when the rule completes, we have a list of frames each containing `?amount` and `?name`.

- We create another stream of frames by removing the duplicate frames based on the values of the variable `?name` inside a frame. For this we need to maintain a list of *seen* names.

- Then, we proceed with the same approach as suggested by Ben - *He will then pass this stream through a mapping function that extracts ...*
