const LinkedList = require('..LinkedList/LinkedList');

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data}. Queue size: ${this.size}.`);
        } else {
            throw new Error('Queue is full');
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data}. Queue size: ${this.size}.`);
            return data;
        } else {
            throw new Error('Queue is empty');
        }
        
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

module.exports = Queue;