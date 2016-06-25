---
chapterName: "Building Abstractions with Data"
sectionName: "2.2 - Hierarchical Data and the Closure Property"
chapter: 2
solution: "2.76"
order: "076"
date: 2016-06-25
---

|---
|| new types | new operations  
|:-:
| **Generic operations with explicit dispatch** | - define all operation for the new type. <br/> - change in all the procedures existing procedures of the system to check for the new type.  | we only need to define the new operation which obviously dispatches based on type.  
| **Data directed style** | define all operations for new type. | add the new operation for every type. thus we are changing the code of every existing type to add new operation. 
| **Message passing style** | define new type to return a procedure that can except messages corresponding to each type. | we need to change existing types to accept message corresponding to new operation.


Data directed style and Message passing style both are almost same and require equal amount of changes for new types or new operations.

I think usage of message passing style is more elegant as compared to data directed style as we directly pass messages/invoke procedures as compared to data directed
where we invoke another procedure(apply-generic) that internally invokes the correct procedure.

