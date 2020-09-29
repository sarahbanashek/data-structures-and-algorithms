const PriorityQueue = require('./PriorityQueue');

describe('Class: PriorityQueue', () => {
    describe('Method: add', () => {
        it('adds items and bubbles them up to maintain priority order', () => {
            const priorityQueue = new PriorityQueue();
            const items = [['H', 8], ['C', 3], ['E', 5], ['A', 1], ['B', 2]];
            items.forEach(item => priorityQueue.add({data: item[0], priority: item[1]}));

            const expected = [null, {data: 'A', priority: 1}, {data: 'B', priority: 2}, {data: 'E', priority: 5}, {data: 'H', priority: 8}, {data: 'C', priority: 3}];

            expect(priorityQueue.heap).toStrictEqual(expected);
        });
    });
    describe('Method: popMin', () => {
        it('throws an error if PriorityQueue is empty', () => {
            const priorityQueue = new PriorityQueue();

            expect(() => {
                priorityQueue.popMin();
              }).toThrow();
        });
        it('returns the item with lowest priority value and heapifies to maintain priority order', () => {
            const priorityQueue = new PriorityQueue();
            const items = [['H', 8], ['C', 3], ['E', 5], ['A', 1], ['B', 2]];
            items.forEach(item => priorityQueue.add({data: item[0], priority: item[1]}));
                    
            const resultItem = priorityQueue.popMin();
            const resultHeap = priorityQueue.heap;

            const expectedItem = {data: 'A', priority: 1};
            const expectedHeap = [null, {data: 'B', priority: 2}, {data: 'C', priority: 3}, {data: 'E', priority: 5}, {data: 'H', priority: 8}];


            expect(resultItem).toStrictEqual(expectedItem);
            expect(resultHeap).toStrictEqual(expectedHeap);
        });
    });
    describe('Method: peek', () => {
        it('throws an error if heap is empty', () => {
            const priorityQueue = new PriorityQueue();

            expect(() => {
                priorityQueue.peek();
              }).toThrow();
        });
        it('returns the item with lowest priority value without modifying the PriorityQueue', () => {
            const priorityQueue = new PriorityQueue();
            const items = [['H', 8], ['C', 3], ['E', 5], ['A', 1], ['B', 2]];
            items.forEach(item => priorityQueue.add({data: item[0], priority: item[1]}));
            
            const resultItem = priorityQueue.peek();
            const resultHeap = priorityQueue.heap;

            const expectedItem = {data: 'A', priority: 1};
            const expectedHeap = [null, {data: 'A', priority: 1}, {data: 'B', priority: 2}, {data: 'E', priority: 5}, {data: 'H', priority: 8}, {data: 'C', priority: 3}];

            expect(resultItem).toStrictEqual(expectedItem);
            expect(resultHeap).toStrictEqual(expectedHeap);
        });
    });
    describe('Method: addNewHighestPriority', () => {
        it('adds a new item to the PriorityQueue and gives it highest priority', () => {
            const priorityQueue = new PriorityQueue();
            const items = [['C', 3], ['E', 5], ['B', 2]];
            items.forEach(item => priorityQueue.add({data: item[0], priority: item[1]}));
            priorityQueue.addNewHighestPriority('A');

            const resultHeap = priorityQueue.heap;
            const expectedHeap = [null, {data: 'A', priority: 1}, {data: 'B', priority: 2}, {data: 'C', priority: 3}, {data: 'E', priority: 5}];

            expect(resultHeap).toStrictEqual(expectedHeap);
        });
    });
});