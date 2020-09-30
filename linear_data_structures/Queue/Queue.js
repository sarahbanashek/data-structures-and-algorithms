const LinkedList = require('../LinkedList/LinkedList');

class Queue {
    constructor(maxSize = Infinity, logger = null) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
        this.logger = logger;
    }

    enqueue(data) {
        if (this._hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
            if(this.logger !== null) {
                this.logger.log(`Added ${data}. Queue size: ${this.size}.`);
            }
        } else {
            throw new Error('Queue is full');
        }
    }

    dequeue() {
        if (!this._isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            if (this.logger !== null) {
                this.logger.log(`Removed ${data}. Queue size: ${this.size}.`);
            }
            return data;
        } else {
            throw new Error('Queue is empty');
        }
        
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

    peek() {
        return !this._isEmpty()
            ? this.queue.head.data
            : null;
    }

    printQueue() {
        return this.queue.printList();
    }
}

// const queue = new Queue(Infinity, console);
// queue.enqueue('First in');
// queue.enqueue('Second in');
// queue.enqueue('Third in');
// console.log(queue.peek());
// // queue.dequeue();
// queue.printQueue();

module.exports = Queue;