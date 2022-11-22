# Arrays

-----

## What is an array?

An array is a group of storage locations that are next to each other in the computer's memory.

Arrays have a **sequential layout**. This means that the first piece of data in the array is next to the second piece of data in the array. Then the second piece of data is next to the third piece of data and so on.

Arrays are made up of containers of buckets in which data can be stored in each bucket. Each bucket or container is the same size.

## Characteristics Of Arrays

When we have an array stored in a variable, it's actually a reference or pointer to the location of the first bucket.

We can get any other bucket of data because we know the location of the first bucket. To get the second element of the array we move one location over. 

Sort of like if you live in a standard suburban single family house community. If you know how to get to your next door neighbor after passing their house if you'll arrive at the house two doors down. If you continue then three doors away and so on.

In most programming languages, arrays indices are zero-based where the first element is at a zero offset from the start. To get to the first element in the array, it's right at the start of the array's memory block. 

To access the second location, go to location of the array and then move over one. The index is an offset, or delta, from the start of the array. 

Arrays are considered to be random access data structures because any location in the array can be accessed in constant time by adding the offset to the first location. This is possible because of the sequential layout.

In almost all cases, everything we store in a single array is of the same type: all numbers or all strings or potentially something else
