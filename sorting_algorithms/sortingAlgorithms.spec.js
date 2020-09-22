const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');

const unsorted = [2, -1, 5, 2, 0, -2];
const sorted = [-2, -1, 0, 2, 2, 5];

describe('Function: bubbleSort', () => {
    it('throws an error if not given an array', () => {
        expect(() => {
            bubbleSort('not an array');
          }).toThrow();
    });
    it('correctly sorts an array', () => {
        const result = bubbleSort(unsorted);

        expect(result).toStrictEqual(sorted);
    });
});

describe('Function: mergeSort', () => {
    it('throws an error if not given an array', () => {
        expect(() => {
            mergeSort('not an array');
          }).toThrow();
    });
    it('correctly sorts an array', () => {
        const result = mergeSort(unsorted);

        expect(result).toStrictEqual(sorted);
    });
});
