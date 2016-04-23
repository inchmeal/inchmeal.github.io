---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.14"
order: "014"
date: 2016-04-23
---

Lets first take an example of two intervals, $$ I_1 $$ and $$ I_2 $$, and compute $$ \frac 1 { { \frac 1 { I_1 } } + { \frac 1 { I_2 } } } $$
and $$ \frac {I_1 I_2} {I_1 + I_2} $$ using the procedures `par1` and `par2` given in exercise.  

{% highlight racket linenos %}
> (define I1 (make-center-percent 25 1.5))
> (define I2 (make-center-percent 75 0.75))
> (define rs1 (par1 I1 I2))
> (define rs2 (par2 I1 I2))
> (display-interval rs1)
[18.15998452012384,19.35544164037855]
> (display-interval rs2)
[18.50370662460568,18.995897832817338]
{% endhighlight %}

Clearly both results in different answers. 

Lets see if the formulas are actually equivalent when applied to intervals.

We have:

$$ \frac 1 { { \frac 1 { I_1 } } + { \frac 1 { I_2 } } } $$        
By algebra, we can simplify it as:     
$$ \frac 1 { { \frac { I_1 } { I_1 I_2 } } + { \frac { I_2 } { I_1 I_2 } } }$$        

This will be true for intervals, iff:

- $$ { \frac 1 { I_1 } } = { \frac { I_1 } { I_1 I_2 } } $$ for any interval $$ I_1 $$ and $$ I_2 $$. If we look closely this actually
     means that $$ \frac I I = [1, 1] $$.        
- $$ \frac 1 { \frac 1 I } = I $$, for any interval $$ I $$.      
   
Lets see using Alyssa's "interval arithmetic" that above is correct or not:

{% highlight racket linenos %}
> (define I1 (make-center-percent 25 1.5))
> (display-interval I1)
[24.625,25.375]
> (display-interval div)
[0.9704433497536946,1.030456852791878]
> (define reverse (div-interval (make-interval 1.0 1.0) I1))
> (define reverse_reverse (div-interval (make-interval 1.0 1.0) reverse))
> (display-interval reverse_reverse)
[24.625000000000004,25.375]
{% endhighlight %}

As we can see by *interval arithmetic* that $$ \frac I I \ne [1, 1] $$. Thus the algebraic equivalent is not same as interval equivalent.
However $$ \frac 1 { \frac 1 I } = I $$, for any interval $$ I $$ holds true which means this farmulae alegebraic equivalent is same as
arithmetic equivalent.


