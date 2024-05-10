export const getBubbleSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
  };

  function bubbleSort(arr, animations) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if (arr[j] > arr[j + 1]) {
                // Swap
                animations.push([j, arr[j], j+1, arr[j+1]]);
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
            else {
                animations.push([-1, -1, -1, -1]);
            }
        }
    }
  }