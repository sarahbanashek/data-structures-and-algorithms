const Queue = require('./Queue');

describe('Class: Queue', () => {
    describe('Method: enqueue', () => {
        it('adds a new node to the queue and updates the queue size', () => {
            const queue = new Queue();
            
            queue.enqueue(1);
            const headData = queue.queue.head.data;
            const queueSize = queue.size;

            expect(headData).toBe(1);
            expect(queueSize).toBe(1);
        });
        it('throws an error if the queue is full', () => {
            const queue = new Queue(0);

            expect(() => {
                queue.enqueue(1);
            }).toThrow();
        });
    });
    describe('Method: dequeue', () => {
        it('removes the head node, returns its data, and updates the queue size', () => {
            const queue = new Queue();
            queue.enqueue(1);
            
            const dequeuedData = queue.dequeue();
            const queueSize = queue.size;

            expect(dequeuedData).toBe(1);
            expect(queueSize).toBe(0);
        });
        it('throws an error if the queue is empty', () => {
            const queue = new Queue();

            expect(() => {
                queue.dequeue();
            }).toThrow();
        });
    });
    describe('Method: peek', () => {
        it(`returns the head node's data without modifying the queue`, () => {
            const queue = new Queue();
            queue.enqueue(1);

            const headData = queue.peek();
            const queueSize = queue.size;

            expect(headData).toBe(1);
            expect(queueSize).toBe(1);
        });
    });
});