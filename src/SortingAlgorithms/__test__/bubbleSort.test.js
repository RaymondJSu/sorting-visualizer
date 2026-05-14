import { getBubbleSort } from '../bubbleSort';

function replayBubbleSortAnimations(array, animations) {
    const replayed = array.slice();

    for (let i = 2; i < animations.length; i += 3) {
        const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[i];

        if (barOneHeight !== -1) {
            replayed[barOneIdx] = barTwoHeight;
            replayed[barTwoIdx] = barOneHeight;
        }
    }

    return replayed;
}

test('bubble sort returns no animations for a one-item array', () => {
    expect(getBubbleSort([7])).toEqual([]);
});

test('bubble sort animations sort the array when replayed', () => {
    const array = [8, 3, 5, 1, 9, 2, 5];
    const animations = getBubbleSort(array.slice());

    expect(replayBubbleSortAnimations(array, animations)).toEqual([1, 2, 3, 5, 5, 8, 9]);
});
