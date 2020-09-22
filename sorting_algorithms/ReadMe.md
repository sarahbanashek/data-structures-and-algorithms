# Sorting Algorithms

## Bubble Sort
[Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) works by "bubbling up" larger elements to the end of the array. It steps through the array, comparing each element to the one that follows and swapping when necessary. The process is repeated until the array is in ascending order.

### Performance
Time complexity: O(n<sup>2</sup>)  
Space complexity: O(1)

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

## Merge Sort
[Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) is a divide and conquer method of sorting an array into ascending order. Given an array of length n, the array is broken into n subarrays containing a single element. The subarrays are then merged repeatedly until a single, sorted array is left.

### Performance
Time complexity: O(n log n)  
Space complexity: O(n)

### Use
```
mergeSort(arr, log);
```
`mergeSort` takes an array as its first argument and has an optional second argument, `log`, that prints the merging of the final two arrays to the console when set to `true`.
```
const unsorted = [3, 5, 2, 90, 4, 7];
const sorted = mergeSort(unsorted);
console.log(sorted);
>>> [2, 3, 4, 5, 7, 90]

mergeSort(unsorted, true);
>>>  left arr: [2,3,5] 
>>>  right arr: [4,7,90]
>>>  merging: [2]
>>>  
>>>  left arr: [3,5] 
>>>  right arr: [4,7,90]
>>>  merging: [2,3]
>>>  
>>>  left arr: [5] 
>>>  right arr: [4,7,90]
>>>  merging: [2,3,4]
>>>  
>>>  left arr: [5] 
>>>  right arr: [7,90]
>>>  merging: [2,3,4,5]
```