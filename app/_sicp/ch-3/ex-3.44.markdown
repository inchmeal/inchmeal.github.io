---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.44"
order: "044"
date: 2018-02-15 
---

I think it won't work but can work with a small fix.

The problem is mainly how to read this assumption of the problem - **You should assume that the balance in from-account is at least amount.**

I think this assumption is possible only when we are entering the procedure `transfer` but how can we assume the same in multi threaded environment when `withdraw` is called. Because the code of the `transfer` method does not have anyway to determine that when it calls `withdraw` the balance has not changed since the time we entered the `transfer` procedure..

Since the situation in which it wont work is rare, lets first start with another part of the question assuming that this will work.

The problem asks an interesting question that what is the difference between this and the earlier exercise if this will work then previous exercise should also work as they look same on the outset both require withdrawing some amount from one acccount and depositing the withdrawn amount in other account.

The difference is from previous exercise is `amount` which is withdrawn in constant here and does not depend on the current balance when we initiate the transfer.(Ofcourse withdrawn amount must be more then the balance but this is a precondition not dependency). So in this case `amount` can be more then the withdraw- yes, even assuming the condition that amount initially is more then the balance when we entered the procedure - in multiple account case - we might run into this problem.

Consider a situation(somewhat similar as of previous exercise) that we are doing transfers as: 

T1 - Transfer 10$ from account A1 to A2

T2 - Transfer 10$ from account A3 to A1

T3 - Transfer 10$ from account A1 to A4


Now lets execute them in parallel and consider that A1, A2, A3, A4 all have 10$ initial balance.


Now if they execute in parallel - there can be a situation when initially we start transfer - enter the procedure transfer - because `amount` was sufficeint(as mentioned in the problem to assume that we enter this procedure assuming that amount is sufficient) **BUT** in the middle first T1 happens and then T3 starts executing and tries to `withdraw` from A1 and withdraw procedure completes with return value "Insufficient Funds".

The problem is transfer method *does not check the return value* and completes its business by calling the `deposit` procedure.

After adding a check and reporting error, however, it should work except that still the program is not deterministic - if T1 -> T2 -> T3 executes then there wont be any problem but if T1 -> T3 -> T2 executes then program will report error.

Note that the fix is just a small check:

{% highlight scheme linenos %}
(define (transfer from-account to-account amount)
  (let (wrs ((from-account 'withdraw')))
	(if (eq? wrs "Insuffecient Funds")
		(error "Can not withdraw!")
	  ((to-account 'deposit) amount))))
{% endhighlight %}

Thus we have not used *sophisticated method* that Loius purposes but just a small fix.

Well, there can be another solution - to allow negative balances in the accounts :)
