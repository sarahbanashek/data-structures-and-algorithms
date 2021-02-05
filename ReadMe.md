# Data Structures and Algorithms

## Linear Data Structures

### [- Node](./linear_data_structures/Node/ReadMe.md)
The Node class is the base component used to build the linear data structures.

### [- LinkedList](./linear_data_structures/LinkedList/ReadMe.md)
A linked list is a collection of [nodes](./linear_data_structures/Node/ReadMe.md) chained together.

The LinkedList class has a starting node, or head, and ending node, or tail. The list can be traversed in one direction: from head to tail.

### [- DoublyLinkedList](./linear_data_structures/DoublyLinkedList/ReadMe.md)
The DoublyLinkedList class has a starting node, or head, and ending node, or tail. The list can be traversed in both directions: from head to tail or from tail to head.

### [- Queue](./linear_data_structures/Queue/ReadMe.md)
A queue is a [linked list](./linear_data_structures/LinkedList/ReadMe.md) with a first in, first out structure.

### [- Stack](./linear_data_structures/Stack/ReadMe.md)
A stack is a [linked list](./linear_data_structures/LinkedList/ReadMe.md) with a last in, first out structure.

## Nonlinear Data Structures

### [- Tree](./nonlinear_data_structures/Tree/ReadMe.md)
The Tree class follows the basic [tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) data structure.

### [- BinarySearchTree](./nonlinear_data_structures/BinarySearchTree/ReadMe.md)
A binary search tree is a data structure in which each node has at most two children (one left child and one right child).

### [- MinHeap](./nonlinear_data_structures/MinHeap/ReadMe.md)
A min heap is a binary tree in which each level except the last must be completely filled, and the value of each parent node is less than the values of its child nodes.

### [- PriorityQueue](./nonlinear_data_structures/PriorityQueue/ReadMe.md)
A priority queue is a data structure in which each node is assigned a priority and stored accordingly.

In this case, the priority queue is implemented with a [min heap](./nonlinear_data_structures/MinHeap/ReadMe.md).

### [- Graph](./nonlinear_data_structures/graphs/ReadMe.md)
A graph is a data structure consisting of a set of vertices and the edges that connect them.

## Sorting Algorithms

### [- bubbleSort](./sorting_algorithms/ReadMe.md)
Bubble sort works by "bubbling up" larger elements to the end of the array. It steps through the array, comparing each element to the one that follows and swapping when necessary. The process is repeated until the array is in ascending order.

### [- mergeSort](./sorting_algorithms/ReadMe.md)
Merge Sort is a divide and conquer method of sorting an array into ascending order. Given an array of length n, the array is broken into n subarrays containing a single element. The subarrays are then merged repeatedly until a single, sorted array is left.

### [- quickSort](./sorting_algorithms/ReadMe.md)
Quicksort is a divide and conquer algorithm for sorting an array into ascending order. This method chooses a pivot element, then partitions the array into two subarrays: one in which elements are less than the pivot and one in which elements are greater than the pivot. The subarrays are then sorted recursively.