---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.28"
order: "028"
date: 2018-05-03 
---


{% highlight scheme linenos %}
1 ]=> 

;;; EC-Eval input:
(define (factorial n)
  (define (iter product counter)
    (if (> counter n)
        product
        (iter (* counter product)
              (+ counter 1))))
  (iter 1 1))

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(factorial 1)

(total-pushes = 70 maximum-depth = 17)
;;; EC-Eval value:
1

;;; EC-Eval input:
(factorial 2)

(total-pushes = 107 maximum-depth = 20)
;;; EC-Eval value:
2

;;; EC-Eval input:
(factorial 3)

(total-pushes = 144 maximum-depth = 23)
;;; EC-Eval value:
6

;;; EC-Eval input:
(factorial 4)

(total-pushes = 181 maximum-depth = 26)
;;; EC-Eval value:
24

;;; EC-Eval input:
(factorial 5)

(total-pushes = 218 maximum-depth = 29)
;;; EC-Eval value:
120

;;; EC-Eval input:
(factorial 6)

(total-pushes = 255 maximum-depth = 32)
;;; EC-Eval value:
720

;;; EC-Eval input:
(define (factorial n)
  (if (= n 1)
      1
      (* (factorial (- n 1)) n)))

(total-pushes = 3 maximum-depth = 3)
;;; EC-Eval value:
ok

;;; EC-Eval input:
(factorial 1)

(total-pushes = 18 maximum-depth = 11)
;;; EC-Eval value:
1

;;; EC-Eval input:
(factorial 2)

(total-pushes = 52 maximum-depth = 19)
;;; EC-Eval value:
2

;;; EC-Eval input:
(factorial 3)

(total-pushes = 86 maximum-depth = 27)
;;; EC-Eval value:
6

;;; EC-Eval input:
(factorial 4)

(total-pushes = 120 maximum-depth = 35)
;;; EC-Eval value:
24

;;; EC-Eval input:
(factorial 5)

(total-pushes = 154 maximum-depth = 43)
;;; EC-Eval value:
120

;;; EC-Eval input:
(factorial 6)

(total-pushes = 188 maximum-depth = 51)
;;; EC-Eval value:
720

;;; EC-Eval input:
{% endhighlight %}


Thus we get the following table:

|---------------------|----------------------------------------|---------------------------------------|------------------------------------------|------------------------------------------|
|                     | Max-depth(no tail optimz)              | Max-depth(with tail optimz)           | num-pushes(no tail optimz)               | num-pushes(with tail optimz)             |
|---------------------|----------------------------------------|---------------------------------------|------------------------------------------|------------------------------------------|
| Recursive factorial | $$\, \text{maximum-depth} = 8n+3 \,$$  | $$\, \text{maximum-depth} = 5n+3 \,$$ | $$\, \text{total-pushes} = 34n - 16 \,$$ | $$\, \text{total-pushes} = 32n - 16 \,$$ |
| Iterative factorial | $$\, \text{maximum-depth} = 3n+14 \,$$ | $$\, \text{maximum-depth} = 10 \,$$   | $$\, \text{total-pushes} = 37n + 33 \,$$ | $$\, \text{total-pushes} = 35n + 29 \,$$ |
|---------------------|----------------------------------------|---------------------------------------|------------------------------------------|------------------------------------------|


- Clearly, without tail optimization we have linear dependency on `n` for space(max-depth). 
- Even the iterative version is no longer independent of `n`.
- Even in the recursive version there is an extra cost added in the no-tail-optimized, compared to the recursive version with tail-optimized. So tail-optimization helps even in recursive version!

-------

#### Comments

I loved the tail optimization. From chapter one, I wondered how it could be done. It appeared quite difficult on the outset and perhaps it is difficult without seeing this solution.

Till now, i found this chapter fine but not quite like chapter 4 where there were so many great ideas at one place. But this small minor change is indeed awesome.

Perhaps things become quite simple when they are done from first principles. For example, in an imperative language - i *feel* that tail call optimization by converting a recursive program into a loop structure might be much more difficult then doing it directly at a more fundamental/ground level like here in the machine instructions.
