---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.52"
order: "052"
date: 2018-02-17 
---

#### Using memoization

The sequence if evaluated in full will be:

1 3 6 10 15 21 28 36 45 55 66 78 91 105 120 136 153 171 190 210

Well the 7+1 even number in the sequence is 136.

And next statement prints the output of numbers divisible by 5.

{% highlight scheme linenos %}
1 ]=> (stream-ref y 7)

;Value: memo-proc

1 ]=> 
;Value: 136

1 ]=> (display-stream z)

10
15
45
55
105
120
190
210
;Value: done
{% endhighlight %}

#### Without memoization

Yes, the output will change if memoization is removed because we re-evaluate `stream-cdr` every time and which causes the sum to change thus running it again even the same statement running again gives different output.

Note that first term is not reevaluated! It is the second term where reevaluation happens because first term does not require `stream-cdr`. It is present directly just like as if we were using `car` for the object created using `cons` but all the later terms are delayed which causes their value to change in every evaluation!

{% highlight scheme linenos %}
1 ]=> (stream-ref y 7)

;Value: memo-proc

1 ]=> 
;Value: 162

1 ]=> (display-stream z)

15
180
230
305
;Value: done

1 ]=> (stream-ref y 7)

;Value: 492

1 ]=> (display-stream z)

15
510
560
635
;Value: done

1 ]=> 
{% endhighlight %}




