const bubbleSort = require('./bubbleSort');

describe('Function: bubbleSort', () => {
    it('throws an error if not given an array', () => {
        expect(() => {
            bubbleSort('not an array');
          }).toThrow();
    });
    it('correctly sorts an array', () => {
        const unsorted = [2, -1, 0, -2];
        const sorted = [-2, -1, 0, 2];

        const result = bubbleSort(unsorted);

        expect(result).toStrictEqual(sorted);
    });
});

