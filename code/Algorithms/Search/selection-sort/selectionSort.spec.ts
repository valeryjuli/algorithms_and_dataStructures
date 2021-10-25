import { expect } from "chai";
import { findBiggestNumber, selectionSort } from "./selectionSort";

describe('Selection sort', () => {
    const testCasesSort = [
        {
            sortedArray: [5, 4, 3, 2, 1],
            inputArray: [5, 3, 1, 2, 4],
        },
        {
            sortedArray: [16, 14, 12, 10, 8, 6, 4, 2, 0],
            inputArray: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        },
        {
            sortedArray: [612, 223, 45, 0],
            inputArray: [0, 223, 45, 612],
        },
        {
            sortedArray: [0],
            inputArray: [0],
        },
        {
            sortedArray: [3, 2, 2, 2],
            inputArray: [2, 2, 3, 2],
        }
    ]
    testCasesSort.forEach((testCase, i) => {
        it(`should return sorted array from largest to smallest number`, () => {
            const result = selectionSort(testCase.inputArray);
            expect(result).to.deep.equal(testCase.sortedArray);
        })
    });

    const largestNumberTestCases = [
        {
            array: [1, 2, 3, 4, 5],
            item: 4,
        },
        {
            array: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            item: 8,
        },
        {
            array: [0, 223, 45, 612],
            item: 3,
        },
        {
            array: [0],
            item: 0,
        }
    ]
    largestNumberTestCases.forEach((testCase, i) => {
        it(`should return the index of the largest number`, () => {
            const result = findBiggestNumber(testCase.array);
            expect(result).to.equal(testCase.item);
        })
    });
})