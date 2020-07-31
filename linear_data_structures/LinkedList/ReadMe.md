# Linked List
A linked list is a collection of [nodes](../Node/ReadMe.md) chained together. 

The `LinkedList` class has a starting node, or `head`, and ending node, or `tail`. The list can be traversed in one direction from `head` to `tail`.

The `head` node is stored as a property in the `LinkedList`, while the `tail` is found by iterating through the list. See [Doubly Linked List](../DoublyLinkedList/ReadMe.md) if tracking the `tail` is desired.

## Constructor
The list is created without any arguments and populated using the `addToHead` and `addToTail` methods below.
```
const list = new LinkedList();
```

## Methods
### \#.addToHead()
Given data as an argument, creates a new node and adds it to the head of the list. 
```
list.addToHead('some data');

list.printList();
>>> <HEAD> some data <TAIL>
```

### \#.addToTail()
Given data as an argument, creates a new node and adds it to the `tail` of the list. 
```
list.addToTail('some more data');

list.printList();
>>> <HEAD> some data, some more data <TAIL>
```

### \#.removeHead()
Removes the node stored in the `head` property and sets that node's `next` node as the new `head`.
```
list.printList();
>>> <HEAD> 1, 2, 3 <TAIL>

list.removeHead();

list.printList();
>>> <HEAD> 2, 3 <TAIL>
```

### \#.printList()
Prints to the console the information stored in each node's `data` property in order from the linked list's `head` to its `tail`. `<HEAD>` and `<TAIL>` markers are added to denote the start and end of the list.
```
list.printList();
>>> <HEAD> 1, 2, 3 <TAIL>
```