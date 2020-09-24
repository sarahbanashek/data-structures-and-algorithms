# Tree
The `Tree` class follows the basic [tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) data structure.

Each `Tree` instance has a `data` property and a `children` property which stores all child nodes in an array.

## Constructor
The `Tree` takes a single argument representing the data to be stored as the root node of the tree.
```
const tree = new Tree('a');
```

## Methods
### \#.addChild()
Takes either data or `Tree` instance as an argument and pushes onto the parent node's `children` array. Returns the added node.
```
tree.addChild('b');
tree.addChild('c');
tree.addChild('d').addChild(1);

tree.printTree();
>>>   a
>>>  -- b
>>>  -- c
>>>  -- d
>>>  ---- 1
```

### \#.removeChild()
Takes either data or `Tree` instance as an argument and removes all matching nodes from the parent node's `children` array.
```
tree.removeChild('c');

tree.printTree();
>>>   a
>>>  -- b
>>>  -- d
>>>  ---- 1
```

### \#.getChildByData()
Takes data as an argument and returns the first matching node. Returns `undefined` if no match is found.
```
console.log( tree.getChildByData('d') );

>>>  tree { data: 'd', children: [ tree { data: 1, children: [] } ] }


tree.getChildByData('b').addChild(2);
```

### \#.printTree()
Prints the tree's structure to the console. For each level below the parent node, two dashes are added before the node's data.
```
tree.printTree();
>>>   a
>>>  -- b
>>>  ---- 2
>>>  -- d
>>>  ---- 1
```

### \#.printDepthFirstTraversal()
Prints each node's data to the console in depth-first order.
```
tree.printDepthFirstTraversal();
>>>  a
>>>  b
>>>  2
>>>  d
>>>  1
```

### \#.printBreadthFirstTraversal()
Prints each node's data to the console in breadth-first order.
```
tree.printBreadthFirstTraversal();
>>>  a
>>>  b
>>>  d
>>>  2
>>>  1
```