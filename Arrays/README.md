# Arrays
-----


#### What is an array?
An array is a group of storage locations that are next to each other in the computer's memory.

#### Characteristics Of Arrays

When we have an array stored in a variable, it's actually a reference or pointer to the location of the first of the storage locations.
 
Arrays have a **sequential layout**. This means that the first index of the array is next to the second index of the array. The second index of the array is next to the third index of the array and so on.

To get to the first element in the array, it's right at the start of the array's memory block. To access the second location, go to location of the array and then move over one. The index is an offset, or delta, from the start of the array. This is why in in most programming languages, arrays indices are zero-based. The first element is at a zero offset from the start.

Arrays are considered to be random access data structures because any location in the array can be accessed in constant time by adding the offset to the first location. This is possible because of the sequential layout.

In almost all cases, everything we store in a single array is of the same type: all numbers or all strings or potentially something else
