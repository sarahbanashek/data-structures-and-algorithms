const bubbleSort = arr => {
    let swapping = true;
    while (swapping) {
        swapping = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                console.log(`Swapping pair ${arr[i]}, ${arr[i + 1]} in [${arr}]`);
                swap(arr, i, i + 1);
                swapping = true;
            }
        }
    }
      return arr;
}

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));

module.exports = bubbleSort;