export const getQuickSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}

function quickSort(arr, start, end, animations) {
    if (start >= end) return;
    
    // Partition the array and get the index of the pivot element
    const pivotIndex = partition(arr, start, end, animations);
    
    // Recursively call quickSort on the left and right partitions
    quickSort(arr, start, pivotIndex - 1, animations);
    quickSort(arr, pivotIndex + 1, end, animations);
}

function partition(arr, start, end, animations) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        animations.push([i, -1, end, -1, 'highlight']); // Highlight comparison
        animations.push([i, -1, end, -1, 'highlight']); // Revert comparison highlight
        if (arr[i] < pivot) {
            animations.push([i, arr[i], pivotIndex, arr[pivotIndex], 'swap']); // Swap
            
            // Swap arr[i] and arr[pivotIndex]
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    animations.push([pivotIndex, arr[pivotIndex], end, arr[end], 'swap']); // Swap
    // Swap arr[pivotIndex] and arr[end] (move pivot to its correct position)
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
}