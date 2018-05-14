---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.42"
order: "042"
date: 2016-04-28
---

There can be multiple ways to represent board. All we need to do is implement the procedures required in exercise such that they 
work correctly for our board representation. 

Since at any point in the code, a column will contain only one queen. We can represent a solution by a simple list such that
 each element in the list corresponds to a row in board. 
 
Thus the combination of position in this simple list and the value at this position gives us col-number and row-number of the place where queen is placed. For example: 

(Taking row and col numbers to start from 1(not 0).)
  
For eg: Suppose one solution for 5 queens is: (4 2 5 3 1), then the corresponding board is:
  
0 0 0 0 1  
0 1 0 0 0  
0 0 0 1 0  
1 0 0 0 0  
0 0 1 0 0  
  
Position containing queen is marked as 1.

Thus:      
column: 1 contains queen in row = 4.      
column: 2 contains queen in row = 2.      
column: 3 contains queen in row = 5.      
column: 4 contains queen in row = 3.       
column: 5 contains queen in row = 1.     

Another thing to note is that since we are filling the queens column by column while putting exactly one queen at a time in a column,
it follows that we are not required to check if there are multiple queens in a column.
 
Thus we only need to check for duplicate/multiple queens in a row or in a diagonal.
     
Suppose we have already put k-1 queens in k-1 columns safely. The algorithm in exercise places the k-th queen by testing it while
 putting in each row of the column k.
 
The process for testing row-wise or diagonally is similar. So I created one procedure `exists` that can be used for both by passing 
the corresponding test condition.

I have also included procedures for displaying the board.

Here is the complete code:
 
{% highlight racket linenos %}

{% endhighlight %}

Example/Output:

{% highlight racket linenos %}
#lang sicp

(define (fold-right op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (fold-right op initial (cdr sequence))
      )
  )
)

(define (filter predicate sequence)
  (cond ((null? sequence) nil)
        ((predicate (car sequence))
           (cons (car sequence)
                (filter predicate (cdr sequence))
           )
        )
        (else (filter predicate (cdr sequence)))
  )
)

(define (flatmap proc seq)
  (fold-right append nil (map proc seq))
)

(define (enumerate-interval i j)
  (if (> i j)
      nil
      (cons i (enumerate-interval (+ i 1) j))
  )
)  

(define (queens board-size)
  (define (queen-cols k)
     (if (= k 0)
        (list empty-board)
        (filter
            (lambda (positions) (safe? k positions))
            (flatmap
               (lambda (rest-of-queens)
                  (map (lambda (new-row)
                          (adjoin-position new-row k rest-of-queens)
                       )
                       (enumerate-interval 1 board-size)
                  )
               )
               (queen-cols (- k 1))
            )
        )
     )
  )
  (queen-cols board-size)
)

(define empty-board '())

(define (adjoin-position new-row k rest-of-queens) (cons new-row rest-of-queens))

(define (exists? predicate? ls)
   (define (iter count ls)      
      (cond ((null? ls) false)
           ((predicate? count (car ls)) true)
           (else (iter (+ count 1) (cdr ls)))
      )
   )
   (iter 1 ls) 
)

(define (safe? k positions)
  (let ((queens-row-at-col-k (car positions)))
     (not
        (exists?
           (lambda (pos el)
               (or
                  (= (- el pos) queens-row-at-col-k)
                  (= (+ el pos) queens-row-at-col-k)
                  (= el queens-row-at-col-k)
               )
           )  
           (cdr positions)
        )
      )
   )  
)

(define (generate-board positions)
   (let ((numbers (enumerate-interval 1 (length positions))))
      (map
          (lambda (row)
              (map
                  (lambda (col)
                     (if (= row (list-ref positions (- col 1)))
                         1
                         0
                     )
                  )
                  numbers
              )
          )
          numbers
      )   
   )              
)

(define (display-list ls)
  (cond ((null? ls) (display " "))
        (else (display (car ls)) (display " ") (display-list (cdr ls)))
  )
)  
        
(define (display-board board)   
   (newline)
   (cond ((null? board) (newline))
         (else (display-list (car board)) (display-board (cdr board)))
   )
)

(define (generate-all-boards all-positions)
    (map generate-board all-positions)
)

(define (display-all-boards all-boards)
     (map display-board all-boards)
     (newline) 
)
{% endhighlight %}

Example/Output:

{% highlight racket linenos %}

;Example of output returned by queens
> (display (queens 6))
((5 3 1 6 4 2) (4 1 5 2 6 3) (3 6 2 5 1 4) (2 4 6 1 3 5))


; Converting the output from queens to look like board 
> (display-all-boards (generate-all-boards (queens 4)))

0 1 0 0  
0 0 0 1  
1 0 0 0  
0 0 1 0  


0 0 1 0  
1 0 0 0  
0 0 0 1  
0 1 0 0  


> (display-all-boards (generate-all-boards (queens 5)))

0 0 0 0 1  
0 1 0 0 0  
0 0 0 1 0  
1 0 0 0 0  
0 0 1 0 0  


0 0 0 0 1  
0 0 1 0 0  
1 0 0 0 0  
0 0 0 1 0  
0 1 0 0 0  


0 0 1 0 0  
0 0 0 0 1  
0 1 0 0 0  
0 0 0 1 0  
1 0 0 0 0  


0 1 0 0 0  
0 0 0 0 1  
0 0 1 0 0  
1 0 0 0 0  
0 0 0 1 0  


0 0 0 1 0  
0 1 0 0 0  
0 0 0 0 1  
0 0 1 0 0  
1 0 0 0 0  


1 0 0 0 0  
0 0 1 0 0  
0 0 0 0 1  
0 1 0 0 0  
0 0 0 1 0  


0 0 0 1 0  
1 0 0 0 0  
0 0 1 0 0  
0 0 0 0 1  
0 1 0 0 0  


1 0 0 0 0  
0 0 0 1 0  
0 1 0 0 0  
0 0 0 0 1  
0 0 1 0 0  


0 1 0 0 0  
0 0 0 1 0  
1 0 0 0 0  
0 0 1 0 0  
0 0 0 0 1  


0 0 1 0 0  
1 0 0 0 0  
0 0 0 1 0  
0 1 0 0 0  
0 0 0 0 1  

> (display-all-boards (generate-all-boards (queens 0)))



> (display-all-boards (generate-all-boards (queens 1)))

1  

> (display-all-boards (generate-all-boards (queens 2)))

> (display-all-boards (generate-all-boards (queens 3)))

> (length (queens 6))
4
> (length (queens 7))
40
> (length (queens 8))
92
> (length (queens 9))
352
  
{% endhighlight %}
