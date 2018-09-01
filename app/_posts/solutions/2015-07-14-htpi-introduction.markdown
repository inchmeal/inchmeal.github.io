---
layout: htpi
title:  "How To Prove It - Introduction"
chapter: introduction
date: 2015-07-14
description: "Inchmeal - Velleman's How to Prove It Solutions"
tags: mathematics howToProveIt
sitemap:
    priority: 0.8
permalink: /htpi/index.html
redirect_from:
  - /2015/07/14/how-to-prove-it-introduction.html    
---

I have started reading a book - [How to Prove it][howToProveIt] (author: Daniel J. Velleman). I shall be posting its solutions from this post onwards, each titled with corresponding chapter.
This post contains solutions for the introduction section of the book.
<!--more-->

*Note:* In this book natural numbers include $$ 0 $$ also. But it seems like in some places in the proofs, I messed up with this convention.
In some placed I might have considered $$ N $$ includes $$ 0 $$ while in other places vice versa. Please point out to me, I will correct to
use the book's version of $$ \mathbb N $$ in all the places.

**Soln.1(a)** 

*Using theorem:*

{% include alert mathsInfo="\\( 2^n - 1 \\) , is not prime, if \\( n \\) is not prime. Also with \\( n = a \cdot b \\), \\( 2^n - 1 \\) can be decomposed into product \\( x.y \\) where \\( x = 2^b - 1 \\) and \\( y = 1 + 2^{1 \cdot b} + 2^{2 \cdot b} + ... 2^{(a-1) \cdot b} \\)" %}

We have \\( n = 3 \times 5 \\), Taking \\( a = 3 \\) and \\( b = 5 \\)

\\( \Rightarrow x = 2^5 - 1 = 31 \\) and \\( y = 1 + 2^{1 \cdot 5} + 2^{2 \cdot 5} = 1057 \\) 

\\( \Rightarrow x = 31, y = 1057 \\)

**Soln.1(b)** 

We can use the same theorem again. Now we have \\( n = 32767 = 31 \times 1057 \\). Taking \\( b = 31 \\) gives \\( x = 2^b - 1 = 2^{31} - 1 = 2147483647 \\) 

<hr/>

**Soln.2**

Table for \\( 3^n - 1\\) :

|---
| \\( n \\) | Is \\( n \\) prime? | \\( 3^n - 1 \\) | Is \\( 3^n - 1 \\) is prime?
|:-:|:-:|:-:|:-:
| 1 | no | 2 | yes
| 2 | yes | 8 | no
| 3 | yes | 26 | no
| 4 | no | 80 | no
| 5 | yes | 242 | no
| 6 | no | 728 | no
| 7 | yes | 2186 | no
| 8 | no | 6560 | no
| 9 | no | 19682 | no
| 10 | no | 59048 | no
| 11 | yes | 177146 | no
| 12 | no | 531440 | no
| 13 | yes | 1594322 | no
| 14 | no | 4782968 | no

It can be observed from above table that \\( 3^n - 1 \\) is always an even number and it is never prime except for \\( n = 1 \\).

Table for \\( 3^n - 2^n \\) :

|---
| \\( n \\) | Is \\( n \\) prime? | \\( 3^n - 2^n \\) | Is \\( 3^n - 2^n \\) is prime?
|:-:|:-:|:-:|:-:
| 1 | no | 1 | no
| 2 | yes | 5 | yes
| 3 | yes | 19 | yes
| 4 | no | 65 | no
| 5 | yes | 211 | yes
| 6 | no | 665 | no
| 7 | yes | 2059 | no
| 8 | no | 6305 | no
| 9 | no | 19171 | no
| 10 | no | 58025 | no
| 11 | yes | 175099 | no
| 12 | no | 527345 | no
| 13 | yes | 1586131 | no
| 14 | no | 4766585 | no
| 15 | no | 14316139 | no
| 16 | no | 42981185 | no
| 17 | yes | 129009091 | yes

It can be observed that if \\( n \\) is not prime than \\( 3^n - 2^n \\) is also not prime. Also it is observed that \\( 3^n - 2^n \\) is prime only if \\( n \\) is prime.

<hr/>

**Soln3**

Theorem 3 says:

{% include alert mathsInfo="There are infinite prime numbers" %}

Proof of this theorem is done by contradiction. It was shown if \\( m = p_1 \cdot p_2 \cdot p_3 ... p_n + 1 \\) where \\( p_1, p_2, p_3 ... p_n \\) are finite(assumption) list of prime numbers. Now it can be seen that \\( m \\) is a prime number which contradicts the assumption of finite prime numbers. 

*(a)* Use this method to find a prime different from 2, 3, 5, and 7. 

Lets find \\( m = 2 \times 3 \times 5 \times 7 + 1 = 210 + 1 = 211 \\)

Now, if \\( 2, 3, 5, 7 \\) is the list of all prime numbers known(except m), than from the proof \\( m = 211 \\) can be the new prime number.

But this is not the case here as there are infinite prime numbers. Thus \\( m \\) may not result in a prime number.

If we use all prime numbers less than a given number(say \\( g \\) ), for computing \\( m \\), than from the steps of the proof we are sure 
that \\( m \\) is not divisible by any of the numbers less than \\( g \\). Thus if m is not prime than all of its prime-factors must be greater than \\( g \\).

As, \\( 211 \\) is a big number to manually check from all prime-number greater than 7 for prime-factors of \\( 211 \\), we may
take a smaller set say \\( 2, 3, 5 \\) to find \\( m = 2 \times 3 \times 5 + 1 = 31 \\) and check for prime-factors of m greater than \\( 5 \\).

After checking, \\( 31 \\) is a prime number. 

*(b)* Use this method to find a prime different from 2, 5, and 11. 

Using the method from above, taking only \\( 2 \\) results \\( m = 2 + 1 = 3 \\) which is a prime number.

Now taking only \\( 2, 3 \\) results \\( m = 2 \times 3 + 1 = 7 \\) which is also a prime number.

<hr/>

**Soln4**

We may use following theorem here:

{% include alert mathsInfo="For every positive integer n, there is a sequence of n consecutive positive integers containing no primes." %}

Its proof shows that a set of such consecutive integers can be 
 
 $$ x + i  = (n + 1)! + 2 + i, \text{ where } 0 \le i \le n - 1 $$
 
 Putting \\( n = 5 \Rightarrow x + i = 6! + 2 + i = 722 + i \\) which gives us 722, 723, 724, 725, 726

<hr/>

**Soln5**

Table: 

|--
| \\( n \\) | Is \\( n \\) prime? | \\( 2^n - 1 \\) | Is \\( 2^n - 1 \\) is prime?
|:-:|:-:|:-:|:-:
| 1 | no | 1 | no
| 2 | yes | 3 | yes
| 3 | yes | 7 | yes
| 4 | no | 15 | no
| 5 | yes | 31 | yes
| 6 | no | 63 | no
| 7 | yes | 127 | yes
| 8 | no | 255 | no
| 9 | no | 511 | no
| 10 | no | 1023 | no
| 11 | yes | 2047 | no
| 12 | no | 4095 | no


The discussion on p.5 says that if \\( 2^n - 1 \\) is prime than \\( 2^{n-1} \cdot (2^n - 1) \\) is a perfect number,

For \\( n = 3 \Rightarrow 2^{3-1} \cdot (2^3 - 1) \Rightarrow 4 \times 7 = 28 \\).

Similarly, for \\( n = 5 \Rightarrow 2^{5-1} \cdot (2^5 - 1) \Rightarrow 16 \times 31 = 496 \\).

<hr/>

**Soln6**

There are no more such prime triplets. From [wiki][wiki]:

> In mathematics, a prime triplet is a set of three prime numbers of the form (p, p + 2, p + 6) or (p, p + 4, p + 6). With the exceptions of (2, 3, 5) and (3, 5, 7), this is the closest possible grouping of three prime numbers, since one of every three sequential odd numbers is a multiple of three, and hence not prime.
<cite>[wiki][wiki]</cite>

which is true, as all prime numbers except \\( 2 \\) are odd and no three consecutive odd numbers can be prime as at-least one of them must be a multiple of three.

[howToProveIt]: http://www.amazon.com/How-Prove-Structured-Approach-2nd/dp/0521675995
[ghpages]: https://pages.github.com
[wiki]: https://en.wikipedia.org/wiki/Prime_triplet

