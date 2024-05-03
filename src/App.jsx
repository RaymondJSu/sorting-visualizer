import React from 'react';
import './index.css'
import {getMergeSort} from './SortingAlgorithms/mergeSort.js';
import {getBubbleSort} from './SortingAlgorithms/bubbleSort.js';
import {getQuickSort} from './SortingAlgorithms/quickSort.js';
import {getHeapSort} from './SortingAlgorithms/heapSort.js';

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 300;

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
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{
                    height: `${value}px`,
                    }}></div>
                ))}
                <div className='button-container'>
                    <button className='btn btn-primary' onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className='btn btn-primary' onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className='btn btn-primary' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='btn btn-primary' onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className='btn btn-primary' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className='btn btn-primary' onClick={() => this.testSortingAlgorithms()}>
                    Test Sorting Algorithms (BROKEN)
                    </button>    
                </div>
            </div>
      )
    }

    mergeSort(){

    }

    
}



function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }