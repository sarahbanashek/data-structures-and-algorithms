const quickSort = (arr, leftBound = 0, rightBound = arr.length - 1) => {
    if (rightBound > leftBound) {
        const pivotIndex = partition(arr, leftBound, rightBound);
        quickSort(arr, leftBound, pivotIndex - 1);
        quickSort(arr, pivotIndex, rightBound);
    }
    return arr;
}


const partition = (arr, leftIndex, rightIndex) => {
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
            swap(arr, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

console.log('Before quickSort: ', numbers);
const sorted = quickSort(numbers);
console.log('After  quickSort: ', sorted);




module.exports = partition;