# Stack
A stack is a [linked list](../LinkedList/ReadMe.md) with a last in, first out structure.

The `Stack` class has a property `stack`, which is an instance of the `LinkedList` class.

The `size` and `maxSize` are stored as properties of the `Stack`.

## Constructor
The stack has two optional arguments: the first specifies its maximum size (default is `Infinity`), and the second is an optional logger used to log events (expected to conform to the console interface). It is populated using the `push` method below.
```
const stack = new Stack(maxSize, logger);

const limitedStack = new Stack(num);
const debugStack = new Stack(Infinity, console);
```

## Methods
### \#.push()
Given data as an argument, creates a new node and adds it to the head of the `stack` property. 
```
stack.push('First in');
stack.push('Second in');
stack.push('Third in');

stack.printStack();
>>> <HEAD> Third in, Second in, First in <TAIL>
```

If the `Stack` instance was created with `console` as its second argument, each `push` call will log the new data and the new stack size to the console.
```
debugStack.push('First in');
>>> Added First in. Stack size is 1.
```

### \#.pop()
Removes the node at the head of the `stack` and returns its data.
```
stack.printStack();
>>> <HEAD> Third in, Second in, First in <TAIL>

stack.pop();

stack.printStack();
>>> <HEAD> Second in, First in <TAIL>
```

If the `Stack` instance was created with `console` as its second argument, each `pop` call will log the removed data and the new stack size to the console.

```
debugStack.printStack();
>>> <HEAD> Third in, Second in, First in <TAIL>

debugStack.pop();
>>> Removed Third in. Stack size is 2.
```

### \#.peek()
Returns the `data` of the node at the head of the `stack` without removing it.
```
stack.printStack();
>>> <<HEAD> Third in, Second in, First in <TAIL>

console.log(stack.peek());
>>> Third in
```

### \#.printStack()
Prints to the console the information stored in each node's `data` property in order from the stack's `head` to its `tail`. `<HEAD>` and `<TAIL>` markers are added to denote the start and end of the `stack`.
```
stack.printStack();
>>> <HEAD> Third in, Second in, First in <TAIL>
```