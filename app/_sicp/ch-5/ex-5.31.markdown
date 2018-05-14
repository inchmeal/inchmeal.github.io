---
chapterName: "Computing with Register Machines"
chapter: 5
solution: "5.31"
order: "031"
date: 2018-05-08 
---

There are four cases given:

1. saves and restores env around the evaluation of the operator.
2. saves and restores env around the evaluation of each operand(except last one).
3. saves and restores argl around the evaluation of each operand.
4. saves and restores proc around the evaluation of the operand sequence.

Note that all the given expressions are procedure applications. Since every procedure application requires changing the `env` to the procedure where it is defined, we have to save `env`. 

Do we need to worry about what expressions might get evaluated next and to make sure register contents are correct for those expressions?

The answer is **no**. Check `env-sequence` which takes care of it by saving and restoring `env` while evaluating each expression if there are more than one expression.

The point is we need not to care while evaluating an expression for preserving the register contents for other expressions which might get evaluated next! We only need to make sure that while evaluating the current expression, registers contain the right values.

For eg: while evaluating `(f 'x 'y)` we only need to worry about saves and restores for this procedure application. If there is another expression `(+ a b)` which follows it, we need not to worry about saving register contents for this another expression.

Now which registers we need to make sure have right contents while evaluating procedure application?

- To evaluate arguments, we must have correct `env` so that all the operands can be evaluated.
- Similarly we must have correct `env` while evaluating operator.
- After operator and operands are evaluted, we need to make sure that `proc` and `argl` contains right contents so that procedure can be correctly applied. Note that in the procedure application we don't need `env` because we setup `env` from the `proc` when we apply a procedure. Check `compound-apply`.

Note: We evaluate arguments from left to right in eceval. Later section, the compiler evalutes arguments in right to left but we need not to consider it because this exercise is specifically talking about saves/restores in eceval.

#### (f 'x 'y)

All of the above four saves and restores can be avoided for this case bec.:

- evaluating operator `f` requires only lookup-variable value and does not modify env register.
- Each operand is a quoted expression - whose evaluation does not change env, argl, and proc registers.

#### ((f) 'x 'y)

- First case can not be *always* avoided since we are invoking a procedure `(f)`. This can change `env`. Procedure invocation is done with env set to the environmet where the procedure was defined. Thus if `f` is not defined in the same `env` where we are invoking it then it will certainly change `env`. I wonder even if `f` is defined in the same env, how a compiler can figure out this that `env` of `f` is same as the `env` from where it is invoked. 

- Since all operands are still quoted expressions, all the remaining saves and restores can be avoided.

#### (f (g 'x) y)

- First case can be avoided since we are only doing `lookup-variable-value` which does not modify env register.
- 2nd case can not be avoided, Since `y` is no longer quoted, we need correct `env` where `y` is defined. Thus `env` should not change while evaluating the last argument `(g 'x)`. But since evaluating `(g 'x)` can change `env`, we need to save and restore `env` before and after evaluating `(g 'x)` respectively.
- 3rd and 4th case can not be avoided for the first argument because we need to do evaluatre `(g 'x)` which is a procedure application. And procedure application changes `argl` and `proc`.
- 3rd case can be avoided for the last argument. Since evaluating `y` requires only `lookup-variable-value` and does not change `argl` and `proc`.
- Since 4th case is before and after the complete args list and since in this example 4th case can not be avoided for the first argument thus it can not be avoided even if second argument does not change `proc`.

#### (f (g 'x) 'y)

This is also similar to the previous example with some differences:
- 2nd case can be avoided because `'y` is quoted so we can avoid save and restore of `env` while evaluating `(g 'x)` because evaluating `'y` does not require `env`.
- 3rd case *again* can be avoided for the last argument. Now since `'y` is quoted(Unlike `y` is a symbol in previous example), it's evaluation does not change `argl`.

All other cases in this example are same as in previoud example.
