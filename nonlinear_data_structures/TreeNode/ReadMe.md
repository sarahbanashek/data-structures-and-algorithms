# Tree Node
The `TreeNode` class follows the basic [tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) data structure.

Each `TreeNode` instance has a `data` property and a `children` property which stores all child nodes in an array.

## Constructor
The `TreeNode` takes a single argument representing the data to be stored as the root node of the tree.
```
const treeNode = new TreeNode('a');
```

## Methods
### \#.addChild()
Takes either data or `TreeNode` instance as an argument and pushes onto the parent node's `children` array. Returns the added node.
```
treeNode.addChild('b');
treeNode.addChild('c');
treeNode.addChild('d').addChild(1);

treeNode.printTree();
>>>   a
>>>  -- b
>>>  -- c
>>>  -- d
>>>  ---- 1
```

### \#.removeChild()
Takes either data or `TreeNode` instance as an argument and removes all matching nodes from the parent node's `children` array.
```
treeNode.removeChild('c');

treeNode.printTree();
>>>   a
>>>  -- b
>>>  -- d
>>>  ---- 1
```

### \#.getChildByData()
Takes data as an argument and returns the first matching node. Returns `undefined` if no match is found.
```
console.log( treeNode.getChildByData('d') );

>>>  TreeNode { data: 'd', children: [ TreeNode { data: 1, children: [] } ] }


treeNode.getChildByData('b').addChild(2);
```

### \#.printTree()
Prints the tree's structure to the console. For each level below the parent node, two dashes are added before the node's data.
```
treeNode.printTree();
>>>   a
>>>  -- b
>>>  ---- 2
>>>  -- d
>>>  ---- 1
```

### \#.printDepthFirstTraversal()
Prints each node's data to the console in depth-first order.
```
treeNode.printDepthFirstTraversal();
>>>  a
>>>  b
>>>  2
>>>  d
>>>  1
```

### \#.printBreadthFirstTraversal()
Prints each node's data to the console in breadth-first order.
```
treeNode.printBreadthFirstTraversal();
>>>  a
>>>  b
>>>  d
>>>  2
>>>  1
```