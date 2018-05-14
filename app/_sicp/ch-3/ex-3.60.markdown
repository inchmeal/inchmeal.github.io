---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.60"
order: "060"
date: 2018-02-18 
---

This was an interesting exercise as it was easier to write the procedure but it took me some time to understand why it will work. I just wrote it intuitively by mapping the mathematical results into procedures - without verifying that if this mapping will work - but it did!

We have two series: 

$$\, S_0 = b_0 + \sum_{i=1}^{\infty} b_i x^{i} \,$$ and $$\, S_1 = a_0 + \sum_{i=1}^{\infty} a_i x^{i} \,$$. Lets denote the sums part in each of them as $$\, X \,$$ and $$\, Y \,$$. Thus we have:

$$\, S_0 = b_0 + Y \,$$  and $$\, S_1 = a_0 + X \,$$

There multiplication gives us: 

$$\, S_0S_1 = a_0b_0 + b_0X + (a_0 + X)Y \,$$. I have intentionally chosen to not expand the last term.

The reason for breaking it down this way is to - *divide the problems* in simple parts - such that those simple part may reveal that they can be solved again using the same "divide" approach. Well another way to say that trying to find a recursive solution :)

Now back to our expanded form. We can see that which of those terms are the versions of the same problem. Clearly the **first term** $$\, a_0 b_0 \,$$ is a constant and it will be the lowest(power) term in the final result of $$\, S_0 S_1 \,$$. This can be computed easily.

The other two terms are not simple terms like the first term - they are series! 

The **second term** $$\, b_0X \,$$ is nothing but another power series which is obtained by scaling $$\, X \,$$ by a factor of $$\, b_0 \,$$. Note that $$\, X \,$$ is a power series - only the first term missing. We can easily compute $$\, b_0X \,$$  using `scale`.

Now the **third term** $$\, (a_0 + X)Y \,$$ is a product of two power series - we are back to the same problem but in smaller terms. So, we can compute it by recursively calling the same procedure again. 

But there is a **small catch** here that may sound obvious but it took me quite some time to understand. Can we add the last two terms $$\, b_0X \,$$ and $$\, (a_0+X)Y \,$$ using `add-streams`?

The procedure `add-streams` assumes that the terms are in right order - it adds first term with first term, second with second and so on. So, that means the series resuling from $$\, b_0X \,$$ and $$\, (a_0 + X)Y \,$$ should represent the same powers in each position.

The answer is Yes! It's possible because we are using power series - The terms are the coefficients corresponding to the powers and terms are ordered in increasing order of power.

So, we just need to verify that first term in both the series $$\, (a_0+X)Y \,$$ and $$\, b_0X \,$$ represents/contains the coefficient for the same power. If first is correct then rest will automatically be correct because both are power series!

First note that $$\, b_0X \,$$ series starts from power 1(not 0) i.e. its first term will correspond to the coefficient of $$\, x^1 \,$$. Thus we must have the other series $$\, (a_0 + X)Y \,$$ starting from the same power term - or should represent coefficient of power 1.

Since we are using our own procedure to multiple power series - we can *assume*(we will make sure of this while returning the results) that $$\, (a_0+X)Y \,$$ will also be a power series - each term representing coefficeint and terms are ordered in increasing order of power.

The first term in $$\, (a_0+X)Y \,$$ would correspond to $$\, x^1 \,$$ - because we used our procedure which returns in correct order - and smallest power term in $$\, (a_0+X)Y \,$$ is: 

Sum of smallest power term in $$\, a_0+X \,$$ and $$\, Y \,$$ = 0 + 1 = 1.

Thus the power of the first term in $$\, (a_0+X)Y \,$$ is same as in the series $$\, b_0X \,$$ and since both are power series the rest of the terms will also follow. Thus we can indeed add them using `add-streams`.

Note that $$\, a_0+X = S_1 \,$$. Thus $$\, S_0S_1 = a_0b_0 + b_0X + (a_0 + X)Y = a_0b_0 + b_0X + S_1Y\,$$

Also $$\, X \,$$ = `(stream-cdr S_1)` and $$\, Y \,$$ = `(stream-cdr s_0)`.


Now, I think code is straightforward to understand:

{% highlight scheme linenos %}
(define (mul-series s0 s1)
  (cons-stream (* (stream-car s0)
				  (stream-car s1))
               (add-streams
				  (scale-stream
				       (stream-cdr s1)
				       (stream-car s0)) 
                  (mul-series (stream-cdr s0) s1))))
{% endhighlight %}

Test/Output:

{% highlight scheme linenos %}
1 ]=> (define s2 (mul-series sine-series sine-series))

;Value: memo-proc

1 ]=> 
;Value: s2

1 ]=> (define c2 (mul-series cosine-series cosine-series))

;Value: c2

1 ]=> (define s2c2 (add-streams s2 c2))

;Value: s2c2

1 ]=> (stream-ref s2c2 0)

;Value: 1

1 ]=> (stream-ref s2c2 10)

;Value: 0

1 ]=> (stream-ref s2c2 20)

;Value: 0

1 ]=> (stream-ref s2c2 100)

;Value: 0

1 ]=> (stream-ref s2c2 1)

;Value: 0

1 ]=> (stream-ref s2c2 2)

;Value: 0

1 ]=> (stream-ref s2c2 3)

;Value: 0

1 ]=> (stream-ref s2c2 4)

;Value: 0

1 ]=> (stream-ref s2 4)

;Value: -1/3

1 ]=> (stream-ref c2 4)

;Value: 1/3

1 ]=> (stream-ref s2 10)

;Value: 2/14175

1 ]=> (stream-ref c2 10)

;Value: -2/14175
{% endhighlight %}



