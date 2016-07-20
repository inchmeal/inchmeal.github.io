---
chapterName: "Building Abstractions with Data"
sectionName: "2.5 - Systems with Generic Operations"
chapter: 2
solution: "2.77"
order: "077"
date: 2016-06-26
---

The expression `(magnitude z)` fails initially because it results in a call to `apply-generic`. As per figure(mentioned in question), `z` is tagged with `complex`,
thus `apply-generic` will lookup in the *data directed table* using `get`. Since `magnitude` is not stored in the table corresponding to `complex`, it results in 
error - "no method for the operation magnitude on the types (complex)".

After adding the `put` statements, the error disappears because it adds `magnitude` to the table.

Now after the first call to `apply-generic`, it will result in `(magnitude zz)` where `zz` is `(content z)`. Thus `zz` is of type 'rectangular` as can be seen form the figure.

Now this will again invoke `apply-generic` which will invoke `magnitude` from the `rectangular` package. And which will finally return the `magnitude`.

Thus there are two invocations of `apply-generic`.


 
