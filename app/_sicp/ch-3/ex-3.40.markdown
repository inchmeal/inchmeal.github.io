---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.40"
order: "040"
date: 2018-02-14 
---

We have two procedures - one is doing square and other is doing cube - so lets call them square and cube.

In square, we can have following subparts: square-read-x-1st-time, square-read-x-2nd-time, square-compute, square-assign - lets call them a, b, c, d respectively.

In cube, we can have following subparts: cube-read-x-1st-time, cube-read-x-2nd-time, cube-read-x-3rd-time, cube-compute, cube-assign - lets calls them i, j, k, l, m.

Now, (a, b, c, d) can be interleaved/mixed with (i, j, k, l, m) - which gives too many combinations.

I will do few of these and skip the rest :)

(a,b,c,d,i,j,k,l,m) - 10,00,000

(i,j,k,l,m,a,b,c,d) - 10,00,000

(a,i,j,k,l,m,b,c,d) - 10,000

(i,a,b,c,d,j,k,l,m) - 100,000

(a,b,c,i,j,k,l,m,d) - 100

(i,j,k,l,a,b,c,d,m** - 1000


**After serialization**

Only one possibility: 10,00,000
