export const getHeapSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    return animations;
}

function heapSort(arr, animations) {
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, animations);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap root (max element) with last element
        animations.push([0, arr[0], i, arr[i], 'swap']);
        swap(arr, 0, i);

        // Call heapify on the reduced heap
        heapify(arr, i, 0, animations);
    }
}

function heapify(arr, n, i, animations) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        animations.push([i, arr[i], largest, arr[largest], 'swap']);
        swap(arr, i, largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, animations);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
