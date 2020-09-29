# Min Heap
A [min heap](https://en.wikipedia.org/wiki/Binary_heap) is essentially a [binary tree](https://en.wikipedia.org/wiki/Binary_tree) in which each level except the last must be completely filled, and the value of each parent node is less than the values of its child nodes.

The `MinHeap` class stores its values as an array in its `heap` property. The array always contains `null` as its initial element to allow for easier parent/child index calculations.

The index of a child node is found by multiplying the current index by two (for the left child) and adding one to the product (for the right child). Parent nodes are found by dividing the current index by two and taking the floor of the quotient.

## Constructor
The min heap takes an optional logger argument used to log events (expected to conform to the console interface) and is populated using the `add` method below.
```
const minHeap = new MinHeap();

const debugMinHeap = new MinHeap(console);
```

## Methods
### \#.add()
Given a value as an argument, pushes that value onto the `heap` array, then uses the `bubbleUp` method to restore the order of the `heap`.
```
minHeap.add(5);
minHeap.add(2);

minHeap.printHeap();
>>> [ null, 2, 5 ]
```

If the `MinHeap` instance was created with `console` as an argument, each `add` call will log the new value and the new heap to the console.
```
minHeap.add(5);
minHeap.add(2);
>>> Adding 5
>>> New heap: [,5]
>>> Adding 2
>>> New heap: [,2,5]
```

### \#.peek()
Returns the minimum value in the heap without modifying the heap.
```
const min = minHeap.peek();
console.log(min);
>>>  2 
```

### \#.popMin()
Removes and returns the minimum value in the heap. 

This process swaps the min value (at index 1) with the last element of the heap, then pops the min value from the end of the heap. The `heapify` method is then used to find the new min and restore the order of the heap.
```
minHeap.printHeap();
>>> [ null, 10, 11, 14, 38, 31, 29 ]

minHeap.popMin();
minHeap.printHeap();
>>> [ null, 11, 29, 14, 38, 31 ]
```

If the `MinHeap` instance was created with `console` as an argument, the following will be logged to the console:
```
minHeap.printHeap();
>>> [ null, 10, 11, 14, 38, 31, 29 ]

minHeap.popMin();
>>> 10 is swapped with 29
>>> Removed 10: [,29,11,14,38,31]
>>> New heap: [,11,29,14,38,31]

```

### \#.printHeap()
Prints to the console the array stored in the `MinHeap`'s `heap` property. 

The first element is always `null`.
```
minHeap.printHeap();
>>> [ null, 10, 11, 14, 38, 31, 29 ]
```