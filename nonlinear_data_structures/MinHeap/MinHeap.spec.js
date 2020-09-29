const MinHeap = require('./MinHeap');

describe('Class: MinHeap', () => {
    describe('Method: add', () => {
        it('adds values and bubbles them up to maintain the heap', () => {
            const minHeap = new MinHeap();
            [8, 3, 5, 1, 2].forEach(num => minHeap.add(num));

            const expected = [null, 1, 2, 5, 8, 3];

            expect(minHeap.heap).toStrictEqual(expected);
        });
    });
    describe('Method: popMin', () => {
        it('throws an error if heap is empty', () => {
            const minHeap = new MinHeap();

            expect(() => {
                minHeap.popMin();
              }).toThrow();
        });
        it('returns the min value and heapifies to maintain the heap', () => {
            const minHeap = new MinHeap();
            [8, 3, 5, 1, 2].forEach(num => minHeap.add(num));
            const expectedMin = 1;
            const expectedHeap = [null, 2, 3, 5, 8];

            const resultMin = minHeap.popMin();
            const resultHeap = minHeap.heap;

            expect(resultMin).toEqual(expectedMin);
            expect(resultHeap).toStrictEqual(expectedHeap);

        });
    });
    describe('Method: peek', () => {
        it('throws an error if heap is empty', () => {
            const minHeap = new MinHeap();

            expect(() => {
                minHeap.peek();
              }).toThrow();
        });
        it('returns the min value without modifying the heap', () => {
            const minHeap = new MinHeap();
            [8, 3, 5, 1, 2].forEach(num => minHeap.add(num));
            const expectedMin = 1;
            const expectedHeap = [null, 1, 2, 5, 8, 3];

            const resultMin = minHeap.peek();
            const resultHeap = minHeap.heap;

            expect(resultMin).toEqual(expectedMin);
            expect(resultHeap).toStrictEqual(expectedHeap);
        });
    });
});