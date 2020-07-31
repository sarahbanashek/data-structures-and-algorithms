# Doubly Linked List
A linked list is a collection of [nodes](../Node/ReadMe.md) chained together. 

The `DoublyLinkedList` class has a starting node, or `head`, and ending node, or `tail`. The list can be traversed in both directions: from `head` to `tail` or from `tail` to `head`.

The `head` and `tail` nodes are stored as properties in the `DoublyLinkedList`.

## Constructor
The list is created without any arguments and populated using the `addToHead` and `addToTail` methods below.
```
const list = new DoublyLinkedList();
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

### \#.removeTail()
Removes the node stored in the `tail` property and sets that node's `previous` node as the new `tail`.
```
list.printList();
>>> <HEAD> 1, 2, 3 <TAIL>

list.removeTail();

list.printList();
>>> <HEAD> 1, 2 <TAIL>
```

### \#.removeByData()
Given the data of any node in the list, redirects that node's surrounding nodes to point to each other. (The given node's `previous` node will have its `next` property updated to the given node's `next` node.)
```
list.printList();
>>> <HEAD> 1, 2, 3 <TAIL>

list.removeByData(2);

list.printList();
>>> <HEAD> 1, 3 <TAIL>
```

### \#.printList()
Prints to the console the information stored in each node's `data` property in order from the linked list's `head` to its `tail`. `<HEAD>` and `<TAIL>` markers are added to denote the start and end of the list.
```
list.printList();
>>> <HEAD> 1, 2, 3 <TAIL>
```