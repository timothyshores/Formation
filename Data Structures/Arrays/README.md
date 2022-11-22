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

## Built In Array Methods Time Complexity

### Adding to the end of the array

We can use the built-in JavaScript method `.push(elementToBeAddedToEndOfArray)` which will add a new element at the end of the array. This operation is constant time O(1). We're simply updating the last element in the array.

### Adding to the begining of the array

We can use the built-in JavaScript method `.unshift(elementToBeAddedToBeginningOfArray)` which will add a new element at the front of the array. This operation is linear time O(N). 

Every element in the array will need to be shifted over by 1 index and as the size of the array gets larger it takes longer for the computer to complete this operation.

As an example if we have the array `[2, 3]` and we want to add `1` to the beginning the computer will create a new element at the end `[2, 3, undefined]` then it will shift the element `3` over so `[2, 3, 3]` and then the `2` so `[2, 2, 3]` and then lastly it will replace the first index with `1` returning `[1, 2, 3]`. 

This small example is only for an array with 2 elements but if the array had 100, 1,000, 10,000, 100,000 or more elements it would take longer to process.
