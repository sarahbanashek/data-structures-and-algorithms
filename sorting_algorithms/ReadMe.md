# Sorting Algorithms

## Bubble Sort
[Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) works by "bubbling up" larger elements to the end of the array. It steps through the array, comparing each element to the one that follows and swapping when necessary. The process is repeated until the array is in ascending order.

### Performance
Time complexity: O(n<sup>2</sup>)  
Space complexity: O(n)

Bubble sort is not recommended for large arrays or arrays that are in reverse order.

### Use
```
bubbleSort(arr, log);
```
`bubbleSort` takes an array as its first argument and has an optional second argument, `log`, that prints each swap to the console when set to `true`.
```
const unsorted = [4, 3, 2, 1];
const sorted = bubbleSort(unsorted);
console.log(sorted);
>>> [1, 2, 3, 4]

bubbleSort(unsorted, true);
>>>  Swapping pair 4, 3 in [4,3,2,1]
>>>  Swapping pair 4, 2 in [3,4,2,1]
>>>  Swapping pair 4, 1 in [3,2,4,1]
>>>  Swapping pair 3, 2 in [3,2,1,4]
>>>  Swapping pair 3, 1 in [2,3,1,4]
>>>  Swapping pair 2, 1 in [2,1,3,4]
```
---