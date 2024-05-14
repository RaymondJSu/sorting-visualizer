import React from 'react';
import './index.css'
import {getMergeSort} from './SortingAlgorithms/mergeSort.js';
import {getBubbleSort} from './SortingAlgorithms/bubbleSort.js';
import {getQuickSort} from './SortingAlgorithms/quickSort.js';
import {getHeapSort} from './SortingAlgorithms/heapSort.js';

const ANIMATION_SPEED_MS = 3;

const NUMBER_OF_ARRAY_BARS = 320;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSort(this.state.array)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }
          }
    }
    quickSort() {
        const animations = getQuickSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, actionType] = animations[i];
            if (actionType === 'swap') {
              setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.height = `${barTwoHeight}px`;
                barTwoStyle.height = `${barOneHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            } else if (actionType === 'highlight') {
              // const barOneStyle = arrayBars[barOneIdx].style;
              // const barTwoStyle = arrayBars[barTwoIdx].style;
              // const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              // setTimeout(() => {
              //   barOneStyle.backgroundColor = color;
              //   barTwoStyle.backgroundColor = color;
              // }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
      const animations = getBubbleSort(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[i];
            if (barOneHeight !== -1){
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${barTwoHeight}px`;
              barTwoStyle.height = `${barOneHeight}px`;
            };
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
    
    heapSort() {
        const animations = getHeapSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, actionType] = animations[i];
          if (actionType === 'swap') {
            setTimeout(() => {
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${barTwoHeight}px`;
              barTwoStyle.height = `${barOneHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    // testSortingAlgorithms() {
    //     for (let i = 0; i < 59; i++) {
    //       const array = [];
    //       const length = randomIntFromInterval(1, 1000);
    //       for (let i = 0; i < length; i++) {
    //         array.push(randomIntFromInterval(-1000, 1000));
    //       }
    //       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    //       const mergeSortedArray = getHeapSort(array.slice());
    //       console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    //     }
    //   }
    render() {
        const {array} = this.state;

        return (
            <><div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                        }}></div>
                ))}

            </div><div className='button-container'>
                    <button className='btn btn-primary' onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className='btn btn-primary' onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className='btn btn-primary' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='btn btn-primary' onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className='btn btn-primary' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div></>
      )
    }
}



function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // function arraysAreEqual(arrayOne, arrayTwo) {
  //   if (arrayOne.length !== arrayTwo.length) return false;
  //   for (let i = 0; i < arrayOne.length; i++) {
  //     if (arrayOne[i] !== arrayTwo[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }