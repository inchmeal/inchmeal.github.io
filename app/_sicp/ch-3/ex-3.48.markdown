---
chapterName: "Modularity, Objects, and State"
chapter: 3
solution: "3.48"
order: "048"
date: 2018-02-15 
---

#### How deadlock avoidance method described avoids deadlock

Well, deadlock happens only when we have a circular dependency in acquiring locks/resource.

For example in `serialized-exchange` when two processes calls it to exchange balances of account a1, and a2 then one process waits for the lock from another process and other process waits for the lock from former one. Thus the dependency is circular.

The numbering scheme, to first acquire the lock for a resource with smallest number then next smallest and so on, makes an ordered way in which one acquires the resource. If multiple processes needs to work with resources numbered as 1 and 2, exclusively - then they try to acquire the lock in the order for first 1 and then after acquiring 1, attempt is made to for acquiring 2.

Since every one follows the same order, there would not be a case where one first acquires 2 and waits for 1 which is acquired by someone else! Thus circular dependency is mitigated.

#### Change in the existing code

{% highlight scheme linenos %}
(define (make-id-generator)
  (let ((id 0))
	(define (next)
	  (set! id (+ id 1)))
	((make-serializer) next)))

(define account-id-generate (make-id-generator))

(define (make-account-and-serializer balance)
  (define (withdraw amount)
    (if (>= balance amount)
        (begin (set! balance (- balance amount))
               balance)
        "Insufficient funds"))
  (define (deposit amount)
    (set! balance (+ balance amount))
    balance)
  (let ((balance-serializer (make-serializer))
		(id (account-id-generate)))
    (define (dispatch m)
      (cond ((eq? m 'withdraw) withdraw)
            ((eq? m 'deposit) deposit)
            ((eq? m 'balance) balance)
            ((eq? m 'serializer) balance-serializer)
            ((eq? m 'id) id)
            (else (error "Unknown request -- MAKE-ACCOUNT"
                         m))))
    dispatch))

(define (serialized-exchange account1 account2)
  (let ((serializer1 (account1 'serializer))
        (serializer2 (account2 'serializer)))
	(let ((exchanger
		   (if (< (account1 'id) (account2 'id2))
			   (serializer1 (serializer2 exchange))
			   (serializer2 (serializer1 exchange)))))
	  (exchanger account1 account2))))
{% endhighlight %}
