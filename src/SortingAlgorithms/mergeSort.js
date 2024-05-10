export const getMergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArr = array.slice();
    mergeSort(array, 0, array.length - 1, auxArr, animations);
    return animations;
  };

  function mergeSort(
    arr,
    start,
    end,
    auxArr,
    animations,
  ){
    if (start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(auxArr, start, mid, arr, animations);
    mergeSort(auxArr, mid + 1, end, arr, animations);
    merge(arr, start, mid, end, auxArr, animations)
  }

  function merge(
    arr,
    start,
    mid,
    end,
    auxArr,
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
      if (auxArr[i] <= auxArr[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxArr[i]]);
        arr[k++] = auxArr[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxArr[j]]);
        arr[k++] = auxArr[j++];
      }
    }

    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxArr[i]]);
      arr[k++] = auxArr[i++];
    }

    while (j <= end) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxArr[j]]);
      arr[k++] = auxArr[j++];
    }
  }

