---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.43"
order: "043"
date: 2018-02-14 
---

#### Exchange happens sequentially

Since every exchange is sequential, there will not be any change in the numbers except the order. The situation is exactly like writing permutations of the set {10, 20 ,30}.

#### Old Exchange version

Here, we are still assuming that the individual account's `withdraw` and `deposit` are serialized.

Instead of diagram, I shall try with table.

E1 = exchange operation between Acc1 and Acc2.

E2 = exchange operation between Acc2 and Acc3.

ra1 = read balance from Acct 1

ra2 = read balance from Acct 2

ra3 = read balance from Acct 3

wa1 = withdraw from Acct 1

da1 = deposit into Acct 2

wa2 = withdraw from Acct 2

da3 = deposit into Acct 3

|------------------------------------------------------------------|-------------|-------------|-------------|
| Operation                                                        | Act 1       | Act 2       | Act 3       |
|------------------------------------------------------------------|-------------|-------------|-------------|
|                                                                  | 10          | 20          | 30          |
| E1-ra1-ra2                                                       | 10          | 20          | 30          |
| E2-ra2-ra3                                                       | 10          | 20          | 30          |
| E1-compute(difference = -10)                                     | 10          | 20          | 30          |
| E1-wa1                                                           | 20=10-(-10) | 20          | 30          |
| E1-da1                                                           | 20          | 20+(-10)=10 | 30          |
| E2-compute(difference = -10 computed using old balance in Acc 2) | 20          | 10          | 30          |
| E2-wa2                                                           | 20          | 10-(-10)=20 | 30          |
| E2-da3                                                           | 20          | 20          | 30+(-10)=20 |
|------------------------------------------------------------------|-------------|-------------|-------------|


As we can see in the end, we have 10,20,20 = The total sum is still same. The reason why total some is preserved is because we always add a constant amount in one account and subtracts the same from another. It is possible because indiviual withdraw and deposit are atomic/sequential operations.

#### Old Exchange and withdraw/deposit are also not serialized.

Now as I said that adding/deleting the constatn difference is no longer atomic operation. 

For example - 

E1-da1 happens in two steps - compute and assign which are interleaved with other steps.

(for simplicity lets assume all other operations happen serialized/atomic)

Now look at the following table:


|------------------------------------------------------------------|-------------|------------------------------------------------|-------------|
| Operation                                                        | Act 1       | Act 2                                          | Act 3       |
|------------------------------------------------------------------|-------------|------------------------------------------------|-------------|
|                                                                  | 10          | 20                                             | 30          |
| E1-ra1-ra2                                                       | 10          | 20                                             | 30          |
| E2-ra2-ra3                                                       | 10          | 20                                             | 30          |
| E1-compute(difference = -10)                                     | 10          | 20                                             | 30          |
| E1-wa1                                                           | 20=10-(-10) | 20                                             | 30          |
| E1-da1-compute                                                   | 20          | computed, but not assigned to balance 20+(-10) | 30          |
| E2-compute(difference = -10 computed using old balance in Acc 2) | 20          | 20                                             | 30          |
| E2-wa2                                                           | 20          | 20-(-10)=30                                    | 30          |
| E2-da3                                                           | 20          | 30                                             | 30+(-10)=20 |
| E2-da1-assign                                                    | 20          | 10(assigned)                                   | 30          |
|------------------------------------------------------------------|-------------|------------------------------------------------|-------------|

Now the sum 20 + 10 + 30 = 60 != 70(Original Sum)


It turns out table approach to skip diagram did not turn out well :)
