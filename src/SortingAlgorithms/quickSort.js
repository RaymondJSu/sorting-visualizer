export const getQuickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArr = array.slice();
    quickSort(array, 0, array.length - 1, auxArr, animations);
    return animations;
}

function quickSort(arr, start, end, auxArr, animations) {
    if (start >= end) return;
    
    // Partition the array and get the index of the pivot element
    const pivotIndex = partition(arr, start, end, auxArr, animations);
    
    // Recursively call quickSort on the left and right partitions
    quickSort(arr, start, pivotIndex - 1, auxArr, animations);
    quickSort(arr, pivotIndex + 1, end, auxArr, animations);
}

function partition(arr, start, end, auxArr, animations) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        animations.push([i, end]); // Highlight comparison
        animations.push([i, end]); // Revert comparison highlight
        if (arr[i] < pivot) {
            animations.push([i, arr[pivotIndex]]); // Swap
            
            // Swap arr[i] and arr[pivotIndex]
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    animations.push([pivotIndex, end]);
    animations.push([pivotIndex, end]);
    animations.push([pivotIndex, arr[end]]); // Swap
    

    // Swap arr[pivotIndex] and arr[end] (move pivot to its correct position)
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
}