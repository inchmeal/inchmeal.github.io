---
layout: sicp
title:  "SICP, summary and notes"
description: "SICP, Chapter - 2 - Notes, Building Abstractions with Data"
chapter: 2
chapterName: "Building Abstractions with Data"
solution: "notes"
order: "000"
date: 2017-12-12
tags: sicp code
---

In the previous chapter the goal was to learn build abstraction using procedures. In this we turn our attention for building abstraction by combining data to form compound data.

Data abstraction is a methodology that enables us to isolate how a compound data object is used from the details of how it is constructed from more primitive data objects.

The basic idea of data abstraction is to structure the programs that are to use compound data objects so that they operate on *abstract data*. That is, our programs should use data in such a way as to make no assumptions about the data that are not strictly necessary for performing the task at hand. At the same time, a *concrete data* representation is defined independent of the programs that use the data. The interface between these two parts of our system will be a set of procedures, called selectors and constructors, that implement the abstract data in terms of the concrete representation. To illustrate this technique, we will consider how to design a set of procedures for manipulating rational numbers:

- `(make-rat n d)` - constructor to return the rational number.
- `(numer x)` - selector - returns the numerator of the rational number `x`.
- `(denom x)` - selector - returns the denominator of the rational number `x`.

The idea is without knowing the implementation details or the underlying representation of the rational number, we can use these constructor and selectors to implement procedures to add, subtract, multiply or compare.

Now, say if our initial representation of rational number does not reduce rational number to lowest form, then we can easily remidy the situation either by changing the constructor or by changing the selectors. These changes will not have any impact on the procedures using these constructor or selectors!

Now, if some other procedures need to use the rational numbers after we implemented arithmetic operations then for those procedures, it does not matter how arithmetic operations are implemented. Thus we have multiple levels of *abstraction barriers*.

Now to implement `make-rat`, we use `cons` a language supplied(primitive) procedure to define a pair, as follows:

{% highlight racket linenos %}
(define (make-rat n d) (cons n d))

(define (numer x) (car x))

(define (denom x) (cdr x))
{% endhighlight %}

#### What is meant by Data ####

It is not enough to say *whatever is implemented by the given selectors and constructors.* Clearly, not every arbitrary set of three procedures can serve as an appropriate basis for the rational-number implementation. We need to guarantee that, if we construct a rational number x from a pair of integers n and d, then extracting the numer and the denom of x and dividing them should yield the same result as dividing n by d. In other words, make-rat, numer, and denom must satisfy the condition that, for any integer n and any non-zero integer d, if x is `(make-rat n d)`, then:

$$ \frac {(\text{numer x})} {(\text{denom x})} = \frac n d $$

In fact, this is the only condition `make-rat`, `numer`, and `denom` must fulfill in order to form a suitable basis for a rational-number representation. In general, we can think of data as defined by some collection of selectors and constructors, together with specified conditions that these procedures must fulfill in order to be a valid representation.

This point of view can serve to define not only `high-level` data objects, such as rational numbers, but lower-level objects as well. Consider the notion of a pair, we only need to supply `cons`, `car`, and `cdr` to implement a pair. We can implement these procedures even without using the language supplied procedures!

{% highlight racket linenos %}
(define (cons x y)
  (define (dispatch m)
    (cond 
	  ((= m 0) x)
	  ((= m 1) y)
	  (else (error "Argument not 0 or 1 -- CONS" m))
    )
  )
  dispatch
)

(define (car z) (z 0))

(define (cdr z) (z 1))
{% endhighlight %}

The point of exhibiting the procedural representation of pairs is not that our language works this way (Scheme, and Lisp systems in general, implement pairs directly, for efficiency reasons) but that it could work this way. The procedural representation, although obscure, is a perfectly adequate way to represent pairs, since it fulfills the only conditions that pairs need to fulfill. This example also demonstrates that the ability to manipulate procedures as objects automatically provides the ability to represent compound data. This may seem a curiosity now, but procedural representations of data will play a central role in our programming repertoire. This style of programming is often called *message passing*, and we will be using it as a basic tool in chapter 3 when we address the issues of modeling and simulation.

#### Hierarchical Data and Closure Property ####

The procedure `cons` can be used not only to combine numbers but it can be used to combine pairs too!

The ability to create pairs whose elements are pairs is the essence of list structure's importance as a representational tool. We refer to this ability as the *closure property* of `cons`. In general, an operation for combining data objects satisfies the closure property if the results of combining things with that operation can themselves be combined using the same operation. Closure is the key to power in any means of combination because it permits us to create *hierarchical structures* -- structures made up of parts, which themselves are made up of parts, and so on.

Note that this closure property is same as mathematical closure property. It is *different* from the closure property used in programming contexts for the ability to access the free variables.

TODO: (how this closure property is seen/works/plays out with static typed languages)

#### Sequences ####

Structures like sequences or also known by linked-lists can be easily constructed using `cons` as follows:

{% highlight racket linenos %}
(cons 1
  (cons 2
    (cons 3
	  (cons 4 nil)
	)
  )
)
{% endhighlight %}

The scheme also provides a primitive called `list` to create the same structure as: `(list 1 2 3 4)`. Suppose we associate this list by `l`, then `car l` will return `1` and `cdr l` returns `2 3 4`.

Thus `cdr` returns all the elements except the first and `car` returns only the first element. To get second element we can use `(car (cdr l))`. The value of nil, used to terminate the chain of pairs, can be thought of as a sequence of no elements, the empty list.

Some list operations:

{% highlight racket linenos %}
;Access elements by number/index starting from 0

(define (list-ref items n)
  (if (= n 0)
      (car items)
      (list-ref (cdr items) (- n 1))))
(define squares (list 1 4 9 16 25))

(list-ref squares 3)
;16

;To find length in iterative style
(define (length items)
  (define (length-iter a count)
    (if (null? a)
        count
        (length-iter (cdr a) (+ 1 count))))
  (length-iter items 0))

;Append two lists
(define (append list1 list2)
  (if (null? list1)
      list2
      (cons (car list1) (append (cdr list1) list2))))
{% endhighlight %}

#### map ####

If we want to perform some operation on each element on the list, then one way is to iterate/recurse on each element of the list and perform the operation and return the resulting list. Another way is to *abstract* this idea into a *higher-level* `map` procedure that accepts another procedure which specifies the required operation, and returns the new list by applying that operation on each element.

{% highlight racket linenos %}
(define (map proc items)
  (if (null? items)
      nil
      (cons (proc (car items))
            (map proc (cdr items)))))
(map abs (list -10 2.5 -11.6 17))
(10 2.5 11.6 17)
(map (lambda (x) (* x x))
     (list 1 2 3 4))
(1 4 9 16)
{% endhighlight %}


#### Sequence Operations ####

This section descibes abstractions like `map`, `filter`, `accumulate` to perform sequence or list operations.
The idea is to design programs as these sequence operations. This also helps in making modular designs by combining relatively independent pieces. Its a powerful strategy that enables us to mix and match. Also this helps in localizing our data-structure dependencies to a small number of operations and enables us to experiment with alternate data-structure without impacting the overall design of our program.
Explanation in book is really nice and I can not captured in small notes. Read Section-2.2.3 directly from the book.

#### Nested Mappings ####

This section describes that the list operations like `map` can be used for computations which are generally expressed using nested loops. It also introduces `flatmap` which combines accumulate and map operations:

{% highlight racket linenos %}
(define (flatmap proc seq)
  (accumulate append nil (map proc seq)))
{% endhighlight %}

#### A picture Language ####

This section presents an example of how abstractions help in building a picture langauge. The basic idea is:

- Frames: They are identified by three things(Origin Vector, Two edge Vectors). Thus we can have a ractangular or a parallelogam frame depending on the edge vectors.
- frame-coord-map: to map a given vector(assuming in unit (0,0) to (1,1)) to the frame. Thus if we have a way to draw in the rectangle (0,0),(0,1),(1,0),(1,1), or a unit square cell - then we can easility transform all the vectors drawn in that frame to a given frame using frame-coord-map.
- painters: This are the procedures that accepts a frame and paint the picture in the corresponding frame(using frame-coord-map). We can have many painters i.e. many procedures for different painting like wave, line-segments etc.
- beside, below: painter operations - they accept painters as arguments and return a procedure to draw painter side by side or up and down. The returned procedure is again a painter! A painter which accepts a frame and split that frame accordingly to paint side-by-side or up-and-down.
- Thus the idea is painter operations can be combined to form higher lever abstractions. This is possible because of the *closure property* of the painter operations i.e. we have higher level procedures that accept painter as an argument and return painter as an argument allowing us to build higher level abstractions. eg Using beside and below to build horizontal-split and vertical-split and then using them to build a square and so on.

#### Stratified Design ####

This is a conclusion of the whole idea. Copying directly the main points from the book:

The picture language exercises some of the critical ideas we've introduced about abstraction with procedures and data. The fundamental data abstractions, painters, are implemented using procedural representations, which enables the language to handle different basic drawing capabilities in a uniform way. The means of combination satisfy the closure property, which permits us to easily build up complex designs. Finally, all the tools for abstracting procedures are available to us for abstracting means of combination for painters.

We have also obtained a glimpse of another crucial idea about languages and program design. This is the approach of stratified design, the notion that a complex system should be structured as a sequence of levels that are described using a sequence of languages. Each level is constructed by combining parts that are regarded as primitive at that level, and the parts constructed at each level are used as primitives at the next level. The language used at each level of a stratified design has primitives, means of combination, and means of abstraction appropriate to that level of detail.

Stratified design pervades the engineering of complex systems. For example, in computer engineering, resistors and transistors are combined (and described using a language of analog circuits) to produce parts such as and-gates and or-gates, which form the primitives of a language for digital-circuit design. These parts are combined to build processors, bus structures, and memory systems, which are in turn combined to form computers, using languages appropriate to computer architecture. Computers are combined to form distributed systems, using languages appropriate for describing network interconnections, and so on.

#### Symbolic Data, Sets and Tree ####

Here we learned that scheme allows the language scheme itself to be manipulated as symbols. For eg: In English language when we want to literally say a word we enclose it in quote. Like "Say 'your name'" means saying to say 'your name' which is defferent than actually responding by saying your name :)

Scheme uses single quote as a syntatctic sugar for writing symbols: 

{% highlight racket linenos %}
> (define x 3)
> x
3
> `x
x
> (display (list x 'x))
3 x
> (display `(x y))
(x y)
> (display (quote (x y)))
(x y)
{% endhighlight %}

This provides a powerful mechanism that enables us to write program for differentiation and even this can be used for building the interpreter as mentioned will be done in later chapters of the book.

Later book introduces sets with two implementation as a sequence or as ordered tree. Its interesting to see the code for differentiation given in the book. Or just skim over those examples.

For set implementaion using trees, I think it can be skipped. Or just review these two exercises: 2.63, 2.64

#### Huffman trees ####

This example use symbols and trees to represent letters which we encode using huffman algorithm. This section can be skipped without losing on any concepts but its good to see how huffman algorithm works and how it is built with the current knowledge acquired till now from the book.

#### Multiple Representation of Abstract Data ####

This is very interesting section especially and people coming from OOPs background can draw some parallels here.

Till now we learned that data-abstraction helps in changing the implementation details without impacting the code using it via selectors/constructors. What if it is required to have multiple representation of the same data as different representations offer different advantages on operations we want to perform. For Eg: The sets we have two representations one with tree other with no order. For complex numbers, there can be two representations one with polar coordinates and one with rectangular coordinates. As shown in the polar coordinates provides easier way to multiply two complex numbers while rectangular coordinates easier way to add two complex numbers.

Now, how to have these multiple representations of data to co-exist in the same system?

First we *tag* these representations so that we can differentiate between them. Without tagging we have to rename the constructors/selectors so that there is no conflict.

There are **3 approaches** discussed:

- Generic operations with explicit dispatch

{% highlight scheme linenos %}

; generic selectors
(define (real-part z)
  (cond ((rectangular? z) 
         (real-part-rectangular (contents z)))
        ((polar? z)
         (real-part-polar (contents z)))
        (else (error "Unknown type -- REAL-PART" z))))
(define (imag-part z)
  (cond ((rectangular? z)
         (imag-part-rectangular (contents z)))
        ((polar? z)
         (imag-part-polar (contents z)))
        (else (error "Unknown type -- IMAG-PART" z))))
(define (magnitude z)
  (cond ((rectangular? z)
         (magnitude-rectangular (contents z)))
        ((polar? z)
         (magnitude-polar (contents z)))
        (else (error "Unknown type -- MAGNITUDE" z))))
(define (angle z)
  (cond ((rectangular? z)
         (angle-rectangular (contents z)))
        ((polar? z)
         (angle-polar (contents z)))
        (else (error "Unknown type -- ANGLE" z))))

; generic construction
(define (make-from-real-imag x y)
  (make-from-real-imag-rectangular x y))   ;note that there is one more method make-from-real-imag-polar
(define (make-from-mag-ang r a)
  (make-from-mag-ang-polar r a))

; In usage
(define (add-complex z1 z2)
  (make-from-real-imag (+ (real-part z1) (real-part z2))
                       (+ (imag-part z1) (imag-part z2))))
{% endhighlight %}

Think about the changes need to be done when a new representation of complex-number is required. When a new operation, say divide(to divide to complex numbers), is needed.
Also, if there are two separate developers implementing each representation, then they both need to work on the above dispatching together.

- Data directed

Assume that we have a table(can be hash), where we can store and retrieve using get or put. Note that we stored in hash by passing 3 arguments - operation, operator, procedure and retrieve using operation, and operator. It is not discussed that how this table is implemented. I used hash-table provided by racket for doing exercises.

{% highlight scheme linenos %}
(define (install-rectangular-package)
  ;; internal procedures
  (define (real-part z) (car z))
  (define (imag-part z) (cdr z))
  (define (make-from-real-imag x y) (cons x y))
  (define (magnitude z)
    (sqrt (+ (square (real-part z))
             (square (imag-part z)))))
  (define (angle z)
    (atan (imag-part z) (real-part z)))
  (define (make-from-mag-ang r a) 
    (cons (* r (cos a)) (* r (sin a))))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'rectangular x))
  (put 'real-part '(rectangular) real-part)
  (put 'imag-part '(rectangular) imag-part)
  (put 'magnitude '(rectangular) magnitude)
  (put 'angle '(rectangular) angle)
  (put 'make-from-real-imag 'rectangular 
       (lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'rectangular 
       (lambda (r a) (tag (make-from-mag-ang r a))))
  'done)


(define (install-polar-package)
  ;; internal procedures
  (define (magnitude z) (car z))
  (define (angle z) (cdr z))
  (define (make-from-mag-ang r a) (cons r a))
  (define (real-part z)
    (* (magnitude z) (cos (angle z))))
  (define (imag-part z)
    (* (magnitude z) (sin (angle z))))
  (define (make-from-real-imag x y) 
    (cons (sqrt (+ (square x) (square y)))
          (atan y x)))
  ;; interface to the rest of the system
  (define (tag x) (attach-tag 'polar x))
  (put 'real-part '(polar) real-part)
  (put 'imag-part '(polar) imag-part)
  (put 'magnitude '(polar) magnitude)
  (put 'angle '(polar) angle)
  (put 'make-from-real-imag 'polar
       (lambda (x y) (tag (make-from-real-imag x y))))
  (put 'make-from-mag-ang 'polar 
       (lambda (r a) (tag (make-from-mag-ang r a))))
  'done)

(define (apply-generic op . args)
  (let ((type-tags (map type-tag args)))
    (let ((proc (get op type-tags)))
      (if proc
          (apply proc (map contents args))
          (error
            "No method for these types -- APPLY-GENERIC"
            (list op type-tags))))))

(define (real-part z) (apply-generic 'real-part z))
(define (imag-part z) (apply-generic 'imag-part z))
(define (magnitude z) (apply-generic 'magnitude z))
(define (angle z) (apply-generic 'angle z))
  
{% endhighlight %}

Note, how we separated the *things that change from the things that remain same* in the selectors of complex-number. Now two developers implementing different representation can work separately on their implementations. Note that `apply` is used for invoking the procedure retrieved from the table. `apply-generic` accepts variable number of arguments which is specified by `.`.

- Message Passing

The key idea of data-directed programming is to handle generic operations in programs by dealing explicitly with operation-and-type tables. The style of programming in last section organized the required dispatching on type by having *each operation take care of its own dispatching*. In effect, this decomposes the operation-and-type table into rows, with each generic operation procedure representing a row of the table.

An alternative implementation strategy is to decompose the table into columns and, instead of using *intelligent operations* that dispatch on data types, to work with *intelligent data objects* that dispatch on operation names. We can do this by arranging things so that a data object, such as a rectangular number, is represented as a procedure that takes as input the required operation name and performs the operation indicated. In such a discipline, make-from-real-imag could be written as

{% highlight racket linenos %}
(define (make-from-real-imag x y)
  (define (dispatch op)
    (cond ((eq? op 'real-part) x)
          ((eq? op 'imag-part) y)
          ((eq? op 'magnitude)
           (sqrt (+ (square x) (square y))))
          ((eq? op 'angle) (atan y x))
          (else
           (error "Unknown op -- MAKE-FROM-REAL-IMAG" op))))
  dispatch)
{% endhighlight %}

Note that the value returned by make-from-real-imag is a procedure -- the internal dispatch procedure. And operations like `real-part` do not take care of dispatching in explicit way. 
This style of programming is called message passing. The name comes from the image that a data object is an entity that receives the requested operation name as a *message*.

#### Systems with Generic Operations ####

The first section talks about how we can build a system will generic operations `add`, `multiply` etc for each type of number that we have worked till now: primitive numbers, rational number and complex number. These methods should work irrespective that the arguments are primitve numbers, rational or complex numbers. We use the *data directed* approach to accomplish it but since each of these methods take two arguments, we store the corresponding procedures with two types like:

{% highlight racket linenos %}
(define (install-scheme-number-package)
  (define (tag x)
    (attach-tag 'scheme-number x))    
  (put 'add '(scheme-number scheme-number)
       (lambda (x y) (tag (+ x y))))
  (put 'sub '(scheme-number scheme-number)
       (lambda (x y) (tag (- x y))))
  (put 'mul '(scheme-number scheme-number)
       (lambda (x y) (tag (* x y))))
  (put 'div '(scheme-number scheme-number)
       (lambda (x y) (tag (/ x y))))
  (put 'make 'scheme-number
       (lambda (x) (tag x)))
  'done)

(define (make-scheme-number n)
  ((get 'make 'scheme-number) n))
{% endhighlight %}


Note that we still have not defined operations to add to numbers of different kinds - primitve and complex or rational and complex. Another point to note is that for complex number we need two levels of generic method calls - at first level complex number are added and while adding complex numbers we call `add` for adding primitive numbers. Do exercises(for tabular summary check - 2.76) to get a clearer picture.

#### Combining data of different types ####

Consider the situation of adding/multiplying two numbers of different types, say a complex number by an integer. To accomplish this with our existing tool - data directed approach - we `put` add in hashtable as `(put 'add '(complex scheme-number) <procedure>)`. Thus for every operation we want to mix we put the corresponding version in has. Obviously this requires lot of repeated work. One approach to fix this problem is to use *coercion* i.e. we coerce one type into another - for eg: we can coerce 'scheme-number into a 'complex number. 

There are two ways of implementing coercion:

- One is to write converters from one type to another. Eg: Writing converter for scheme-number to complex. Now our procedure `apply-generic` when fails to find an operation for the given types - tries to convert its arguments using these converters. Thus it also need to be aware of these converters - so we put them in a coercion hash-table using `(put-coercion 'scheme-number 'complex scheme-number->complex)`. Now `apply-generic` checks if there are converters and *tries all the permutations* to check if an operation is defined for that permutation. for eg: it check if 'add is defined for `(scheme-number complex)` and if not found it tries for  `(complex scheme-number)`, then `(complex complex)` and so on.

- The above approach requires to write too many converters. For Eg: If we have integer, rational and complex then we need $$ 3 \times 2 = 6 $$ converters. Another approach is - To write converter from one lower type to higher type. And then `apply-generic` tries to convert recursivley from lower to higher then again to next higher in the type tower. This saves us from writing converters. Also it is more intuitive for some cases.

There is one case to consider: Suppose there is an operaton defined only for complex numbers, but we pass rational numbers and thus this operation is invoked after *raising* our rational numbers into complex numbers. The problem appears when this operation returns a complex number - which might be something we not expect. One approach is to always sympify the results by checking if the result can be *dropped* into a lower type without any loss.

I felt I actually got these ideas only while working with exercises which reinforces the point that how important it is to work through the exercises. Another note to myself is - sometimes its easy to get lost in a big exercise and to not look at the bigger picture so it is useful to take a step back and reflect on what actually were the main ideas and look for the scope for improvement.

The exercises in this section were quite time consuming but definitely worth the effort. Its really important to reflect on the ideas learned and to not get lost in the details. Oh! I already said that :)

#### Interesting/Conceptual Exercises ####

Data Abstraction: 2.5, 2.6

For List, Coin Change - 2.19, 2.22, 2.23

Interval arithmatic: 2.7 - 2.16(few of these are challenging)(all interval arithmetic exercises can be skipped without loosing any concepts)

Hierarchical Structures, trees: 2.29, 2.31(implement tree-map, good), 2.32(generate subsets, good)

Sequence Operations(map,filter,accumulate): 2.34, 2.37(matrices), 2.38(fold-left, fold-right), 2.39 

Nested Mappings - 2.40(Conceptual), 2.41(Practice), 2.42(8 queens problem), 2.43(Complexity, optional)

Sets(implemented as trees): 2.63, 2.64

Multiple Representation of Abstract Data: 2.73, 2.76(conceptual)

Systems with Generic Operations: 2.77, 2,78, 2.79 - all are conceptual.

Arithmetic system and Polynomials: 2.82 to 2.97, Notet that 2.92 can be skipped(its too long and tedious - Although, it raised some interesting question which I am looking forward in the book for answers.)


