export const getMergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const helpArr = array.slice();
    mergeSortHelper(array, 0, array.length - 1, helpArr, animations);
    return animations;
  };

  function mergeSortHelper(
    arr,
    start,
    end,
    helpArr,
    animations,
  ){
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSortHelper(helpArr, start, mid, arr, animations);
    mergeSortHelper(helpArr, mid + 1, end, arr, animations);
    merge(arr, start, mid, end, helpArr, animations)
  }

  function merge(
    arr,
    start,
    mid,
    end,
    helpArr,
    animations,
  ){
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (helpArr[i] <= helpArr[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, helpArr[i]]);
        arr[k++] = helpArr[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, helpArr[j]]);
        arr[k++] = helpArr[j++];
      }
    }

    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, helpArr[i]]);
      arr[k++] = helpArr[i++];
    }

    while (j <= end) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, helpArr[j]]);
      arr[k++] = helpArr[j++];
    }
  }

