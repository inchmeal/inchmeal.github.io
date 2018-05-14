---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.38"
order: "038"
date: 2018-02-14 
---

#### a

Order: Peter -> Paul -> Mary = 110 -> 90 -> 45

Order: Paul -> Peter -> Mary = 80 -> 90 -> 45

Order: Mary -> Paul -> Peter = 50 -> 30 -> 40

Order: Mary -> Peter -> Paul = 50 -> 60 -> 40

Order: Peter -> Marry -> Paul = 110 -> 55 -> 35

Order: Paul -> Marry -> Peter = 80 -> 40 -> 50


#### b

Well, no diagrams :)

Lets take an example:

- Peter lookup for the balance.

- Paul lookup for the balance.

- Paul deducts 20 and computes the remaining balance = 80

- Mary reads the balance - which is still 100

- Peter adds 10 and computes the balance - as per Peter balance is still 100 so Peter computes 100 + 10 = 110.

- Mary computes the balance - as per Mary balance is 100 - so she computes 100/2 = 50.

- Paul sets the balance using his computed value, setting balance = 80.

- Mary sets the balance with her computed value, thus setting balance = 50

- Peter sets the balance with his computed value, thus setting balance = 110.


So, in the end, Peter deposited 10, Mary took 50 and Paul took 20, thus balance should be reduced by -(50 + 20 - 10) = -60, i.e. balance shoud be 40 but balance reflecting is 110 :)
