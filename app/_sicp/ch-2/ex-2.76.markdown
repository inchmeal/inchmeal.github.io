---
chapterName: "Building Abstractions with Data"
sectionName: "2.4 Multiple Representations for Abstract Data"
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

