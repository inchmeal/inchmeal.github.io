---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.43"
order: "043"
date: 2016-04-28
---

For computing *"queen k"* there are *k* iterations such that in each iteration *"queen k-1"* is computed only once. 

By swapping those lines, `(queens (- k 1))` is called n(number of rows) times in one iteration.

Thus while computing *"queen 8"*, procedure *"queen 7"* is called 8 times.      
Similarly while computing *"queen 7"*, procedure *"queen 6"* is called 8 times.

Suppose $$ T_i $$ denotes the time taken in computing *"queen i"* for the original code.
  
Suppose $$ P_i $$ denotes the time taken in computing *"queen i"* for the swapped version.
  
Thus we have:

$$ T_8 = T_7 + X_8 $$, where $$ X_k $$ denotes the time taken in other parts of the code in the same(k-th, where k = 8) iteration.

Clearly this other part, $$ X_k $$, apart from call to *"queen k"* will take same time in both versions, because code is same except
the swapped line.

Thus:  

$$ P_8 = 8 \times P_7 + X_8 $$        
$$ = 8 \times ((8 \times P_6) + X_7) + X_8 $$           
.....      
$$ = (8^8) \times P_0 + 8^7 \times X_1 + 8^6 \times X_2 + 8^6 \times X_3 + ...  + X_8 $$           
Note that $$ P_0 = T_0 $$, both are base cases.        
$$ = (8^8) \times T_0 + 8^7 \times X_1 + 8^7 \times X_2 + 8^7 \times X_3 + ...  + X_8 $$         
  
Also, we can easily see number of other instruction increases as number of queens increase, Thus $$ X_n \ge X_{n-1} $$.
 
Thus we get:     

$$ P_8 \le (8^8) \times T_0 + 8^7 \times X_8 + 8^6 \times X_8 + 8^5 \times X_8 + ...  + X_8 $$         
$$ = (8^8) \times T_0 + X_8 \times ( 8^7 + 8^6 + 8^5 + ...  + 1) $$         
$$ \le (8^8) \times T_0 + X_8 \times  8^8 $$         
$$ = (8^8) \times (T_0 + X_8) $$         

Thus we get: $$ P_8 \le (8^8) \times (T_0 + X_8) $$.

Similarly, $$ T_8 = T_7 + X_8 = T_6 + X_7 + X_8 .... \le T_0 + X_0 + X_1 + ... X_8 \le T_0 + 8 \times X_8 $$.
 
Thus $$ T_8 \le T_0 + 8 \times X_8 $$.    
 
Thus we can combine the two to get:

$$ P_8 \le 8^8 T_8 $$.
