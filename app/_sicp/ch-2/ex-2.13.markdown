---
chapterName: "Building Abstractions with Data"
sectionName: "Introduction to Data Abstraction"
chapter: 2
solution: "2.13"
order: "013"
date: 2016-04-23
---

Suppose there are two intervals, $$ I_1 $$ and $$ I_2 $$, with centers $$ c_1 $$ and $$ c_2 $$, and tolerance $$ t_1 $$ and $$ t_2 $$ respectively.
  
Thus we have $$ I_1 = [c_1 - { \frac {c_1 \cdot t_1} { 100 } },  \; c_1 + { \frac {c_1 \cdot t_1} { 100 } }] $$ and     
 $$ I_2 = [c_2 - { \frac {c_2 \cdot t_2} { 100 } }, \; c_2 + { \frac {c_2 \cdot t_2} { 100 } }] $$.
 
Assuming that $$ I_1 $$ and $$ I_2 $$ contains only positive end-points. Taking help from Ex-2.11 to find the product interval, we get:
 
$$ I_1 \times I_2 = [ (c_1 - { \frac {c_1 \cdot t_1} { 100 } }) \times (c_2 - { \frac {c_2 \cdot t_2} { 100 } }), \; (c_1 + { \frac {c_1 \cdot t_1} { 100 } }) \times (c_2 + { \frac {c_2 \cdot t_2} { 100 } })] $$.       
$$ = [c_1c_2(1 - {\frac {(p+q)} { 100 } } - { \frac {pq} { 100 } }), \; c_1c_2(1 + {\frac {(p+q)} { 100 } } + { \frac {pq} { 100 } })] $$        
$$ = c_1c_2[(1 - {\frac {(p+q)} { 100 } } - { \frac {pq} { 100 } }), \; (1 + {\frac {(p+q)} { 100 } } + { \frac {pq} { 100 } })] $$        
Since $$ p $$ and $$ q $$ are small, it follows $$  { \frac {pq} { 100 } } $$ will become smaller and we can ignore it. Thus we get:      
$$ = c_1c_2[(1 - {\frac {(p+q)} { 100 } }), \; (1 + {\frac {(p+q)} { 100 } })] $$.
         
Thus we can see the tolerance of the product is sum of the percentage tolerances of individual intervals.