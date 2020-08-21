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
        if (this._hasRoom()) {
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
        if (!this._isEmpty()) {
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
        return !this._isEmpty()
            ? this.stack.head.data
            : null;
    }

    _hasRoom() {
        return this.size < this.maxSize
            ? true
            : false;
    }

    _isEmpty() {
        return this.size === 0
            ? true
            : false;
    }

    printStack() {
        return this.stack.printList();
    }
}


module.exports = Stack;