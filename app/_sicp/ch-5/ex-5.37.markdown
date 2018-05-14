---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.37"
order: "037"
date: 2018-05-09 
---

Changed code of `preserving`:

{% highlight scheme linenos %}
(define (preserving regs seq1 seq2)
  (if (null? regs)
      (append-instruction-sequences seq1 seq2)
      (let ((first-reg (car regs)))
        (preserving (cdr regs)
					(make-instruction-sequence
					 (list-union (list first-reg)
								 (registers-needed seq1))
					 (list-difference (registers-modified seq1)
									  (list first-reg))
					 (append `((save ,first-reg))
							 (statements seq1)
							 `((restore ,first-reg))))
					seq2))))
{% endhighlight %}

#### Example 1 `(compile '(+ 1 2 3) 'val 'next)`

Note that with preserve no stack operations are generated!

{% highlight scheme linenos %}
|---------------------------------------------|----------------------------------------------|
| Without Preserve                            | With Preserve                                |
|---------------------------------------------|----------------------------------------------|
| ((env continue)                             | ((env)                                       |
| (env proc argl continue val)                | (env proc argl continue val)                 |
| (                                           | (                                            |
| (save continue)                             | (assign proc                                 |
| (save env)                                  | (op lookup-variable-value)                   |
| (save continue)                             | (const +)                                    |
| (assign proc                                | (reg env))                                   |
| (op lookup-variable-value)                  | (assign val (const 3))                       |
| (const +) (reg env))                        | (assign argl (op list) (reg val))            |
| (restore continue)                          | (assign val (const 2))                       |
| (restore env)                               | (assign argl (op cons) (reg val) (reg argl)) |
| (restore continue)                          | (assign val (const 1))                       |
| (save continue)                             | (assign argl (op cons) (reg val) (reg argl)) |
| (save proc)                                 | (test (op primitive-procedure?) (reg proc))  |
| (save env)                                  | (branch (label primitive-branch3))           |
| (save continue)                             | compiled-branch2                             |
| (assign val (const 3))                      | (assign continue (label after-call1))        |
| (restore continue)                          | (assign val                                  |
| (assign argl (op list) (reg val))           | (op compiled-procedure-entry)                |
| (restore env)                               | (reg proc))                                  |
| (save env)                                  | (goto (reg val))                             |
| (save argl)                                 | primitive-branch3                            |
| (save continue)                             | (assign val                                  |
| (assign val (const 2))                      | (op apply-primitive-procedure)               |
| (restore continue)                          | (reg proc)                                   |
| (restore argl)                              | (reg argl))                                  |
| (assign argl                                | after-call1))                                |
| (op cons)                                   |                                              |
| (reg val) (reg argl))                       |                                              |
| (restore env)                               |                                              |
| (save argl)                                 |                                              |
| (save continue)                             |                                              |
| (assign val (const 1))                      |                                              |
| (restore continue)                          |                                              |
| (restore argl)                              |                                              |
| (assign argl                                |                                              |
| (op cons)                                   |                                              |
| (reg val)                                   |                                              |
| (reg argl))                                 |                                              |
| (restore proc)                              |                                              |
| (restore continue)                          |                                              |
| (test (op primitive-procedure?) (reg proc)) |                                              |
| (branch (label primitive-branch3))          |                                              |
| compiled-branch2                            |                                              |
| (assign continue (label after-call1))       |                                              |
| (assign val                                 |                                              |
| (op compiled-procedure-entry)               |                                              |
| (reg proc))                                 |                                              |
| (goto (reg val))                            |                                              |
| primitive-branch3                           |                                              |
| (save continue)                             |                                              |
| (assign val                                 |                                              |
| (op apply-primitive-procedure)              |                                              |
| (reg proc)                                  |                                              |
| (reg argl))                                 |                                              |
| (restore continue)                          |                                              |
| after-call1))                               |                                              |
|---------------------------------------------|----------------------------------------------|
{% endhighlight %}

#### Example 2 `(compile '(+ 1 (+ 2 3) 4) 'val 'next)`

{% highlight scheme linenos %}
|---------------------------------------------|---------------------------------------------|
| Without Preserve                            | With Preserve                               |
|---------------------------------------------|---------------------------------------------|
| ((env continue)                             | ((env) (env proc argl continue val)         |
| (env proc argl continue val)                | (                                           |
| (                                           | (assign proc                                |
| (save continue)                             | (op lookup-variable-value)                  |
| (save env)                                  | (const +)                                   |
| (save continue)                             | (reg env))                                  |
| (assign proc                                | (save proc)                                 |
| (op lookup-variable-value)                  | (assign val (const 4))                      |
| (const +)                                   | (assign argl (op list) (reg val))           |
| (reg env))                                  | (save argl)                                 |
| (restore continue)                          | (assign proc                                |
| (restore env)                               | (op lookup-variable-value)                  |
| (restore continue)                          | (const +)                                   |
| (save continue)                             | (reg env))                                  |
| (save proc)                                 | (assign val (const 3))                      |
| (save env)                                  | (assign argl (op list) (reg val))           |
| (save continue)                             | (assign val (const 2))                      |
| (assign val (const 4))                      | (assign argl                                |
| (restore continue)                          | (op cons)                                   |
| (assign argl (op list) (reg val))           | (reg val)                                   |
| (restore env)                               | (reg argl))                                 |
| (save env)                                  | (test (op primitive-procedure?) (reg proc)) |
| (save argl)                                 | (branch (label primitive-branch6))          |
| (save continue)                             | compiled-branch5                            |
| (save env)                                  | (assign continue (label after-call4))       |
| (save continue)                             | (assign val                                 |
| (assign proc                                | (op compiled-procedure-entry)               |
| (op lookup-variable-value)                  | (reg proc))                                 |
| (const +)                                   | (goto (reg val))                            |
| (reg env))                                  | primitive-branch6                           |
| (restore continue)                          | (assign val                                 |
| (restore env)                               | (op apply-primitive-procedure)              |
| (restore continue)                          | (reg proc)                                  |
| (save continue)                             | (reg argl))                                 |
| (save proc)                                 | after-call4                                 |
| (save env)                                  | (restore argl)                              |
| (save continue)                             | (assign argl                                |
| (assign val (const 3))                      | (op cons)                                   |
| (restore continue)                          | (reg val)                                   |
| (assign argl (op list) (reg val))           | (reg argl))                                 |
| (restore env)                               | (assign val (const 1))                      |
| (save argl)                                 | (assign argl                                |
| (save continue)                             | (op cons)                                   |
| (assign val (const 2))                      | (reg val)                                   |
| (restore continue)                          | (reg argl))                                 |
| (restore argl)                              | (restore proc)                              |
| (assign argl                                | (test (op primitive-procedure?) (reg proc)) |
| (op cons)                                   | (branch (label primitive-branch9))          |
| (reg val)                                   | compiled-branch8                            |
| (reg argl))                                 | (assign continue (label after-call7))       |
| (restore proc)                              | (assign val                                 |
| (restore continue)                          | (op compiled-procedure-entry)               |
| (test (op primitive-procedure?) (reg proc)) | (reg proc))                                 |
| (branch (label primitive-branch6))          | (goto (reg val))                            |
| compiled-branch5                            | primitive-branch9                           |
| (assign continue (label after-call4))       | (assign val                                 |
| (assign val                                 | (op apply-primitive-procedure)              |
| (op compiled-procedure-entry)               | (reg proc)                                  |
| (reg proc))                                 | (reg argl))                                 |
| (goto (reg val))                            | after-call7))                               |
| primitive-branch6                           |                                             |
| (save continue)                             |                                             |
| (assign val                                 |                                             |
| (op apply-primitive-procedure)              |                                             |
| (reg proc)                                  |                                             |
| (reg argl))                                 |                                             |
| (restore continue)                          |                                             |
| after-call4                                 |                                             |
| (restore argl)                              |                                             |
| (assign argl                                |                                             |
| (op cons)                                   |                                             |
| (reg val)                                   |                                             |
| (reg argl))                                 |                                             |
| (restore env)                               |                                             |
| (save argl)                                 |                                             |
| (save continue)                             |                                             |
| (assign val (const 1))                      |                                             |
| (restore continue)                          |                                             |
| (restore argl)                              |                                             |
| (assign argl                                |                                             |
| (op cons)                                   |                                             |
| (reg val)                                   |                                             |
| (reg argl))                                 |                                             |
| (restore proc)                              |                                             |
| (restore continue)                          |                                             |
| (test (op primitive-procedure?) (reg proc)) |                                             |
| (branch (label primitive-branch9))          |                                             |
| compiled-branch8                            |                                             |
| (assign continue (label after-call7))       |                                             |
| (assign val                                 |                                             |
| (op compiled-procedure-entry)               |                                             |
| (reg proc))                                 |                                             |
| (goto (reg val))                            |                                             |
| primitive-branch9                           |                                             |
| (save continue)                             |                                             |
| (assign val                                 |                                             |
| (op apply-primitive-procedure)              |                                             |
| (reg proc)                                  |                                             |
| (reg argl))                                 |                                             |
| (restore continue)                          |                                             |
| after-call7))                               |                                             |
|---------------------------------------------|---------------------------------------------|
{% endhighlight %}
