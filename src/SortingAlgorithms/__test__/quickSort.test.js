import { getQuickSort } from '../quickSort';

function replaySwapAnimations(array, animations) {
    const replayed = array.slice();

    for (const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, actionType] of animations) {
        if (actionType === 'swap') {
            replayed[barOneIdx] = barTwoHeight;
            replayed[barTwoIdx] = barOneHeight;
        }
    }

    return replayed;
}

test('quick sort returns no animations for a one-item array', () => {
    expect(getQuickSort([7])).toEqual([]);
});

test('quick sort animations sort the array when replayed', () => {
    const array = [8, 3, 5, 1, 9, 2, 5];
    const animations = getQuickSort(array.slice());

    expect(replaySwapAnimations(array, animations)).toEqual([1, 2, 3, 5, 5, 8, 9]);
});
