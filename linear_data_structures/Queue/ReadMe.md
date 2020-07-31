# Queue

A queue is a [linked list](../LinkedList/ReadMe.md) with a first in, first out structure.

The `Queue` class has a property `queue`, which is an instance of the `LinkedList` class.

The `size` and `maxSize` are stored as properties of the `Queue`.

## Constructor
The queue has two optional arguments: the first specifies its maximum size (default is `Infinity`), and the second is an optional logger used to log events (expected to conform to the console interface). It is populated using the `enqueue` method below.
```
const queue = new Queue(maxSize, logger);

const limitedQueue = new Queue(num);
const debugQueue = new Queue(Infinity, console);
```

## Methods
### \#.enqueue()
Given data as an argument, creates a new node and adds it to the tail of the `queue` property. 
```
queue.enqueue('First in');
queue.enqueue('Second in');
queue.enqueue('Third in');

queue.printQueue();
>>> <HEAD> First in, Second in, Third in <TAIL>
```

If the `Queue` instance was created with `console` as its second argument, each `enqueue` call will log the new data and the new queue size to the console.
```
debugQueue.enqueue('First in');
>>> Added First in. Queue size: 1.
```

### \#.dequeue()
Removes the node at the head of the `queue` and returns its data.
```
queue.printQueue();
>>> <HEAD> First in, Second in, Third in <TAIL>

queue.dequeue();

queue.printQueue();
>>> <HEAD> Second in, Third in <TAIL>
```

If the `Queue` instance was created with `console` as its second argument, each `dequeue` call will log the removed data and the new queue size to the console.

```
debugQueue.printQueue();
>>> <HEAD> First in, Second in, Third in <TAIL>

debugQueue.dequeue();
>>> Removed First in. Queue size: 2.
```

### \#.peek()
Returns the `data` of the node at the head of the `queue` without removing it.
```
queue.printQueue();
>>> <HEAD> First in, Second in, Third in <TAIL>

console.log(queue.peek());
>>> First in
```

### \#.printQueue()
Prints to the console the information stored in each node's `data` property in order from the queue's `head` to its `tail`. `<HEAD>` and `<TAIL>` markers are added to denote the start and end of the `queue`.
```
queue.printQueue();
>>> <HEAD> First in, Second in, Third in <TAIL>
```