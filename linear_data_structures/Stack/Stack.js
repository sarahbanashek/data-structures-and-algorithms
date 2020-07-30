const LinkedList = require('./LinkedList');

class Stack {
    constructor (maxSize = Infinity)
    {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is full.');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            throw new Error('Stack is empty.');
        }
    }

    peek() {
        return !this.isEmpty()
            ? this.stack.head.data
            : null;
    }

    hasRoom() {
        return this.size < this.maxSize
            ? true
            : false;
    }

    isEmpty() {
        return this.size === 0
            ? true
            : false;
    }
}


// const pizzaStack = new Stack(6);
// for (let i = 1; i <= 6; i++) {
//   pizzaStack.push(`Pizza #${i}`);
// }
// console.log(pizzaStack);
// console.log(`The first pizza to deliver is ${pizzaStack.peek()}`);
// for (let i = 1; i <= 6; i++) {
//     pizzaStack.pop();
// }
// console.log(pizzaStack);

module.exports = Stack;