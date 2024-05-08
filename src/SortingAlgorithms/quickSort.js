
export const getQuickSort = (array) => {

    const animations = [];
    if (array.length <= 1) return array;

    //const newArray = [...array];
    //quickSortHelper(newArray, 0, newArray.length - 1, animations);
    quickSortHelper(array, 0, array.length - 1, animations);
    
    return animations;

}


function quickSortHelper(arr, start, end, animations) {
    if (start >= end) return;
    
    // Partition the array and get the index of the pivot element
    const pivotIndex = partition(arr, start, end, animations);
    
    // Recursively call quickSort on the left and right partitions
    quickSortHelper(arr, start, pivotIndex - 1, animations);
    quickSortHelper(arr, pivotIndex + 1, end, animations);
}

function partition(arr, start, end, animations) {
    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        animations.push([i, end]); // Highlight comparison
        animations.push([i, end]); // Revert comparison highlight
        if (arr[i] < pivot) {
            animations.push([i, arr[pivotIndex]]); // Swap
            animations.push([pivotIndex, arr[i]]); // Swap
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    animations.push([pivotIndex, arr[end]]); // Swap
    animations.push([end, arr[pivotIndex]]); // Swap
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex;
}