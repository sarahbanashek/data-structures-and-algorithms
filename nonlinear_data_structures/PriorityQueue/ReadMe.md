# Priority Queue
A [priority queue](https://en.wikipedia.org/wiki/Priority_queue) is a data structure in which each node is assigned a priority and stored accordingly.

In this case, the priority queue is implemented with a [min heap](../MinHeap/ReadMe.md). The `PriorityQueue` class's `heap` property is an array in which elements are objects containing a `data` property and a `priority` property. The array always contains `null` as its initial element to allow for easier parent/child index calculations.

## Constructor
The `PriorityQueue` does not take any arguments and is populated using the `add` method below.
```
const priorityQueue = new PriorityQueue();
```

## Methods
### \#.add()
Takes the following object as an argument: `{data, priority}`. Pushes the object onto the `heap` array, then uses the `bubbleUp` method to restore the order of the heap.
```
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

rainbow.forEach(color => priorityQueue.add({
    data: color, 
    priority: Math.floor(Math.random() * 50)
    }));

priorityQueue.printQueue();
>>> [ null,
>>>   { data: 'orange', priority: 12 },
>>>   { data: 'blue', priority: 31 },
>>>   { data: 'yellow', priority: 37 },
>>>   { data: 'red', priority: 45 },
>>>   { data: 'green', priority: 39 },
>>>   { data: 'indigo', priority: 47 },
>>>   { data: 'violet', priority: 49 } ]
```

### \#.peek()
Returns the highest priority object in the priority queue without removing it.
```
console.log( priorityQueue.peek() );

>>> { data: 'orange', priority: 12 }
```

### \#.popMin()
Removes and returns the highest priority object in the priority queue. 

This process swaps the object with the highest priority (at index 1) with the last element of the heap, then pops it from the end of the heap. The `heapify` method is then used to find the new highest priority and restore the order of the heap.
```
priorityQueue.printQueue();
>>> [ null,
>>>   { data: 'orange', priority: 12 },
>>>   { data: 'blue', priority: 31 },
>>>   { data: 'yellow', priority: 37 },
>>>   { data: 'red', priority: 45 },
>>>   { data: 'green', priority: 39 },
>>>   { data: 'indigo', priority: 47 },
>>>   { data: 'violet', priority: 49 } ]

priorityQueue.popMin();

priorityQueue.printQueue();
>>> [ null,
>>>   { data: 'blue', priority: 31 },
>>>   { data: 'green', priority: 39 },
>>>   { data: 'yellow', priority: 37 },
>>>   { data: 'red', priority: 45 },
>>>   { data: 'violet', priority: 49 },
>>>   { data: 'indigo', priority: 47 } ]
```

### \#.printQueue()
Prints to the console the array stored in the `PriorityQueue`'s `heap` property. 

The first element is always `null`.
```
priorityQueue.printQueue();
>>> [ null,
>>>   { data: 'orange', priority: 12 },
>>>   { data: 'blue', priority: 31 },
>>>   { data: 'yellow', priority: 37 },
>>>   { data: 'red', priority: 45 },
>>>   { data: 'green', priority: 39 },
>>>   { data: 'indigo', priority: 47 },
>>>   { data: 'violet', priority: 49 } ]
```