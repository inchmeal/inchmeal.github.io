---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.65"
order: "065"
date: 2016-06-17
---

This can be done in following steps:

- Convert both trees of the sets using part(a) into ordered list.
- Use `union-set` and `intersection-set` procedure of ordered list from previous section to get a set in oredered list representation.
- Convert the ordered list into tree with part(b).

Clearly all of these parts are of $$ O(n) $$ complexity. The overall complexity will be $$ O(n) $$. 

{% highlight racket linenos %}
(define (union-set-tree tree1 tree2) 
   (list->tree (union-set 
                  (tree->list tree1) 
                  (tree->list tree2)
               )
   )
) 
  
(define (intersection-set-tree tree1 tree2) 
   (list->tree (intersection-set 
                  (tree->list tree1) 
                  (tree->list tree2)
               )
   )
) 
{% endhighlight %}
