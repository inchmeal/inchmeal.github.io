---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.44"
order: "044"
date: 2018-03-23 
---

This turned out quite concise. 

I just changed the main procedure `queens` of ex-2.42 and other helper procedures were not changed(except i removed one redundant argument in 1 or 2 procedures which i kept in that exercise to make procedure parameters same as in the problem statement).

Note that I use the same structure to represent the board as i used in ex-2.42. Thus `display-board` procedure which i implemented there can work here too.

{% highlight scheme linenos %}
(define (queens board-size)
  (define (queens-col k)
	(if (= k 0)
		empty-board
		(let ((k-1-positions (queens-col (- k 1))))
		  (let ((new-row (amb 1 (an-integer-between 1 (+ board-size 1)))))
			(let ((positions (adjoin-position new-row k-1-positions)))
			  (require (safe? positions))
			  positions)))))
  (queens-col board-size))

(define (or a b)
  (if a
	  true
	  (if b true false)))

(define empty-board '())

(define (adjoin-position new-row rest-of-queens) (cons new-row rest-of-queens))

(define (exists? predicate? ls)
   (define (iter count ls)      
      (cond ((null? ls) false)
           ((predicate? count (car ls)) true)
           (else (iter (+ count 1) (cdr ls)))))
   (iter 1 ls))

(define (safe? positions)
  (let ((row (car positions)))
     (not
        (exists?
           (lambda (pos el)
               (or
                  (= (- el pos) row)
                  (or
				   (= (+ el pos) row)
                   (= el row)))) 
           (cdr positions)))))

(define (an-integer-between low high)
  (let ((l (+ low 1)))
	(require (> high l))
	(amb l (an-integer-between l high))))
{% endhighlight %}

Also, i found one subtle bug in my procedure `an-integer-between`. It should return integer *between* them. Thus should(as per my understanding) *not* include the edge points. The old code can be found in ex-4.35.

Output:
(only tested for board-size 6, as most of the code is same as ex-2.42)

{% highlight scheme linenos %}
input:
(queens 6)
;;; Starting a new problem 

;;; Amb-Eval value:
(5 3 1 6 4 2)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(4 1 5 2 6 3)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(3 6 2 5 1 4)

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
(2 4 6 1 3 5)

;;; Amb-Eval input:
try-again

;;; There are no more values of
(queens 6)
{% endhighlight %}
