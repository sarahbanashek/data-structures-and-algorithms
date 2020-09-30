const DoublyLinkedList = require('./DoublyLinkedList');

describe('Class: DoublyLinkedList', () => {
    describe('Method: addToHead', () => {
        it('adds a new node to the head and correctly sets next and previous node pointers', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToHead(2);
            doublyLinkedList.addToHead(1);

            const headData = doublyLinkedList.head.data;
            const headNext = doublyLinkedList.head.next;
            const formerHeadPrevious = headNext.previous;
            const tailData = doublyLinkedList.tail.data;

            expect(headData).toBe(1);
            expect(headNext.data).toBe(2);
            expect(formerHeadPrevious.data).toBe(1);
            expect(tailData).toBe(2);
        });
    });
    describe('Method: addToTail', () => {
        it('adds a new node to the tail and correctly sets next and previous node pointers', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToTail(1);
            doublyLinkedList.addToTail(2);

            const tailData = doublyLinkedList.tail.data;
            const tailPrevious = doublyLinkedList.tail.previous;
            const formerTailNext = tailPrevious.next;
            const headData = doublyLinkedList.head.data;
            
            expect(tailData).toBe(2);
            expect(tailPrevious.data).toBe(1);
            expect(formerTailNext.data).toBe(2);
            expect(headData).toBe(1);
        });
    });
    describe('Method: removeHead', () => {
        it('throws an error if there is no head', () => {
            const emptyList = new DoublyLinkedList();

            expect(() => {
                emptyList.removeHead();
            }).toThrow();
        });
        it('removes the head and tail when there is only one node', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToTail(1);

            doublyLinkedList.removeHead();

            expect(doublyLinkedList.head).toBeNull();
            expect(doublyLinkedList.tail).toBeNull();
        });
        it('removes the head node and returns its data', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToTail(1);
            doublyLinkedList.addToTail(2);

            const removedHead = doublyLinkedList.removeHead();
            const newHead = doublyLinkedList.head;

            expect(removedHead).toBe(1);
            expect(newHead.data).toBe(2);
            expect(newHead.previous).toBeNull();
        });
    });
    describe('Method: removeTail', () => {
        it('throws an error if there is no tail', () => {
            const emptyList = new DoublyLinkedList();

            expect(() => {
                emptyList.removeTail();
            }).toThrow();
        });
        it('removes the tail and head when there is only one node', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToTail(1);

            doublyLinkedList.removeTail();

            expect(doublyLinkedList.head).toBeNull();
            expect(doublyLinkedList.tail).toBeNull();
        });
        it('removes the tail node and returns its data', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.addToTail(1);
            doublyLinkedList.addToTail(2);

            const removedTail = doublyLinkedList.removeTail();
            const newTail = doublyLinkedList.tail;

            expect(removedTail).toBe(2);
            expect(newTail.data).toBe(1);
            expect(newTail.next).toBeNull();
        });
    });
    describe('Method: removeByData', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addToTail(1);
        doublyLinkedList.addToTail(2);
        doublyLinkedList.addToTail(3);

        it('returns null if node does not exist', () => {
            const removed = doublyLinkedList.removeByData(4);

            expect(removed).toBeNull();
        });
        it('removes and returns the node, and correctly resets next and previous pointers', () => {
            const removed = doublyLinkedList.removeByData(2);
            const headNodeNext = doublyLinkedList.head.next.data;
            const tailNodePrevious = doublyLinkedList.tail.previous.data;

            expect(removed).toBe(2);
            expect(headNodeNext).toBe(3);
            expect(tailNodePrevious).toBe(1);
        });
    });
});