const quickSort = (arr, log = false, leftBound = 0, rightBound = arr.length - 1) => {
    if (!(arr instanceof Array)) {
        throw new Error('Expected array');
    }
    if (rightBound > leftBound) {
        const pivotIndex = partition(arr, log, leftBound, rightBound);
        quickSort(arr, log, leftBound, pivotIndex - 1);
        quickSort(arr, log, pivotIndex, rightBound);
    }
    return arr;
}


const partition = (arr, log, leftIndex, rightIndex) => {
    const pivot = arr[Math.floor((leftIndex + rightIndex) / 2)];
    while (leftIndex <= rightIndex) {
        // move left pointer forward
        while (arr[leftIndex] < pivot) {
            leftIndex++;
        }
        // move right pointer backward
        while (arr[rightIndex] > pivot) {
            rightIndex--;
        }
        if (leftIndex <= rightIndex) {
            if (log) {
                console.log(`swapping ${arr[leftIndex]} and ${arr[rightIndex]}`);
            }
            swap(arr, leftIndex, rightIndex);
            if (log) {
                console.log(`updated array: [${arr}]`);            
            }
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


module.exports = quickSort;