import { getMergeSort } from '../mergeSort';

function replayMergeSortAnimations(array, animations) {
    const replayed = array.slice();

    for (let i = 2; i < animations.length; i += 3) {
        const [barIdx, newHeight] = animations[i];
        replayed[barIdx] = newHeight;
    }

    return replayed;
}

test('merge sort returns no animations for a one-item array', () => {
    expect(getMergeSort([7])).toEqual([]);
});

test('merge sort animations sort the array when replayed', () => {
    const array = [8, 3, 5, 1, 9, 2, 5];
    const animations = getMergeSort(array.slice());

    expect(replayMergeSortAnimations(array, animations)).toEqual([1, 2, 3, 5, 5, 8, 9]);
});
