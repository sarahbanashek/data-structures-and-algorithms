# Node

The Node class is the base component used to build the linear data structures.

It stores data as well as previous and next nodes so that it can maintain a linear order.

## Constructor
The node takes a single argument of any type
```
const node = new Node([1, 2, 3]);

console.log(node);
>>> Node { data: [ 1, 2, 3 ], next: null, previous: null }
```

## Methods
### \#.setNextNode()
Sets the node stored in the given node's `next` property.
```
node.setNextNode(new Node('some data'));
```

### \#.setPreviousNode()
Sets the node stored in the given node's `previous` property.
```
node.setPreviousNode(new Node('some more data'));
```

### \#.getNextNode()
Returns the node stored in the given node's `next` property.
```
console.log( node.getNextNode() );
>>> Node { data: 'some data', next: null, previous: null }
```

### \#.getNextNode()
Returns the node stored in the given node's `previous` property.
```
console.log( node.getPreviousNode() );
>>> Node { data: 'some more data', next: null, previous: null }
```