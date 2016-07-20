---
chapterName: "Building Abstractions with Data"
sectionName: "2.3 Symbolic Data"
chapter: 2
solution: "2.71"
order: "071"
date: 2016-06-22
---

In huffmann encoding, we keep on combining a pair of leaves with minimum weights. Now in this case we shall first combine:
 
$$ 1 + 2 = 3 $$, then           
$$ 3 + 4 = 7 $$, then           
$$ 7 + 8 = 15 $$, then           
$$ 15 + 16 = 31 $$, then           
...
...
$$ 2^{n-1} - 1 + 2^{n-1} =  2^n - 1 $$.
           
We can see above that, except for the first one, every combination combines a new word/symbol or results in a leaf. The first node however combines two words
for frequency $$ 1 $$ and $$ 2 $$.

Clearly the leaf that results from the last combination will correspond to the smallest number of bits because it will have least depth(=1). 
It follows that smallest number of bits we need = $$ 1 $$. Since this word is corresponding to the last combination, clearly it is the word with highest frequency
i.e. $$ 2^{n-1} $$.

Similarly leaf that results from first combination will correspond to the highest number of bits because it will have highest depth. It follows number of bits 
we need is $$ {\log}_2 { 2^{n-1} } = n-1 $$ bits.



         
         


