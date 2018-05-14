---
chapterName: "Metalinguistic Abstraction"
chapter: 4
solution: "4.43"
order: "043"
date: 2018-03-22 
---

Here is my solution:

I *believe* that unless something is directly given in the question, we should not deduce anything, i.e. deductions should be left for the code.

(Used nested lets as in previous exercise to narrow down the possibilities)

{% highlight scheme linenos %}
(define (yacht-puzzle)
  (let ((lorna-yacht-owner 'moore)
        (gabrielle-yacht-owner 'barnacle)
        (rosalind-yacht-owner 'hall)
        (melissa-yacht-owner 'downing)
        (melissa-father 'barnacle)
        (mary-father 'moore)
        (mary-yacht-owner (amb 'moore 'downing 'hall 'barnacle 'parker)))
    (require (distinct? (list lorna-yacht-owner
                              gabrielle-yacht-owner
                              rosalind-yacht-owner
                              melissa-yacht-owner
                              mary-yacht-owner)))
	(require (not (eq? mary-yacht-owner mary-father)))

	(let ((gabrielle-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
	  (require (distinct? (list melissa-father mary-father gabrielle-father)))
	  (require (not (eq? gabrielle-father gabrielle-yacht-owner)))

	  (let ((rosalind-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
		(require (distinct? (list melissa-father mary-father gabrielle-father rosalind-father)))
		(require (not (eq? rosalind-father rosalind-yacht-owner)))

		(let ((lorna-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
		  (require (distinct? (list melissa-father mary-father gabrielle-father rosalind-father lorna-father)))
		  (require (not (eq? lorna-father lorna-yacht-owner)))

		   (let ((lorna (cons lorna-father lorna-yacht-owner))
				 (gabrielle (cons gabrielle-father gabrielle-yacht-owner))
				 (rosalind (cons rosalind-father rosalind-yacht-owner))
				 (melissa (cons melissa-father melissa-yacht-owner))
				 (mary (cons mary-father mary-yacht-owner)))

			 (define (father daughter-name)
			   (car daughter-name))
			 (define (yacht-owner daughter-name)
			   (cdr daughter-name))

			 (let ((parker-daughter (amb lorna gabrielle rosalind melissa mary)))
			   (require (eq? (father parker-daughter) 'parker))
			   (require (eq? gabrielle-father (yacht-owner parker-daughter)))

			   (list
				(list 'lorna-father lorna-father 'lorna-yach-owner lorna-yacht-owner)
				(list 'gabrielle-father gabrielle-father 'gabrielle-yacht-owner gabrielle-yacht-owner)
				(list 'rosalind-father rosalind-father 'rosalind-yacht-owner rosalind-yacht-owner)
				(list 'melissa-father melissa-father 'melissa-yacht-owner melissa-yacht-owner)
				(list 'mary-father mary-father 'mary-yacht-owner mary-yacht-owner)))))))))

{% endhighlight %}

This gives us answer:

{% highlight scheme linenos %}
;;; Amb-Eval value:
((lorna-father downing lorna-yach-owner moore) (gabrielle-father hall gabrielle-yacht-owner barnacle) (rosalind-father parker rosalind-yacht-owner hall) (melissa-father barnacle melissa-yacht-owner downing) (mary-father moore mary-yacht-owner parker))
{% endhighlight %}


------

#### Change in mary's father

{% highlight scheme linenos %}
(define (yacht-puzzle)
  (let ((lorna-yacht-owner 'moore)
        (gabrielle-yacht-owner 'barnacle)
        (rosalind-yacht-owner 'hall)
        (melissa-yacht-owner 'downing)
        (melissa-father 'barnacle)
        (mary-father (amb 'moore 'downing 'hall 'barnacle 'parker))  ;;changed
        (mary-yacht-owner (amb 'moore 'downing 'hall 'barnacle 'parker)))
    (require (distinct? (list lorna-yacht-owner
                              gabrielle-yacht-owner
                              rosalind-yacht-owner
                              melissa-yacht-owner
                              mary-yacht-owner)))
	(require (distinct? (list melissa-father mary-father))) ;;changed
	(require (not (eq? mary-yacht-owner mary-father)))

	(let ((gabrielle-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
	  (require (distinct? (list melissa-father mary-father gabrielle-father)))
	  (require (not (eq? gabrielle-father gabrielle-yacht-owner)))

	  (let ((rosalind-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
		(require (distinct? (list melissa-father mary-father gabrielle-father rosalind-father)))
		(require (not (eq? rosalind-father rosalind-yacht-owner)))

		(let ((lorna-father (amb 'moore 'downing 'hall 'barnacle 'parker)))
		  (require (distinct? (list melissa-father mary-father gabrielle-father rosalind-father lorna-father)))
		  (require (not (eq? lorna-father lorna-yacht-owner)))

		   (let ((lorna (cons lorna-father lorna-yacht-owner))
				 (gabrielle (cons gabrielle-father gabrielle-yacht-owner))
				 (rosalind (cons rosalind-father rosalind-yacht-owner))
				 (melissa (cons melissa-father melissa-yacht-owner))
				 (mary (cons mary-father mary-yacht-owner)))

			 (define (father daughter)
			   (car daughter))
			 (define (yacht-owner daughter)
			   (cdr daughter))

			 (let ((parker-daughter (amb lorna gabrielle rosalind melissa mary)))
			   (require (eq? (father parker-daughter) 'parker))
			   (require (eq? gabrielle-father (yacht-owner parker-daughter)))

			   (list
				(list 'lorna-father lorna-father 'lorna-yach-owner lorna-yacht-owner)
				(list 'gabrielle-father gabrielle-father 'gabrielle-yacht-owner gabrielle-yacht-owner)
				(list 'rosalind-father rosalind-father 'rosalind-yacht-owner rosalind-yacht-owner)
				(list 'melissa-father melissa-father 'melissa-yacht-owner melissa-yacht-owner)
				(list 'mary-father mary-father 'mary-yacht-owner mary-yacht-owner)))))))))
{% endhighlight %}


Output:

{% highlight scheme linenos %}
;;; Amb-Eval value:
((lorna-father downing lorna-yach-owner moore) (gabrielle-father hall gabrielle-yacht-owner barnacle) (rosalind-father parker rosalind-yacht-owner hall) (melissa-father barnacle melissa-yacht-owner downing) (mary-father moore mary-yacht-owner parker))

;;; Amb-Eval input:
try-again

;;; Amb-Eval value:
((lorna-father parker lorna-yach-owner moore) (gabrielle-father moore gabrielle-yacht-owner barnacle) (rosalind-father downing rosalind-yacht-owner hall) (melissa-father barnacle melissa-yacht-owner downing) (mary-father hall mary-yacht-owner parker))
{% endhighlight %}

Here we get **2** possible answers.
