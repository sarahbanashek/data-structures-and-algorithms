const LinkedList = require('../LinkedList/LinkedList');

class Stack {
    constructor (maxSize = Infinity, logger = null)
    {
        this.stack = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
        this.logger = logger;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
            if (this.logger !== null){
                this.logger.log(`Added ${value}. Stack size is ${this.size}.`)
            }
        } else {
            throw new Error('Stack is full.');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            if (this.logger !== null){
                this.logger.log(`Removed ${value}. Stack size is ${this.size}.`)
            }
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

    printStack() {
        return this.stack.printList();
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