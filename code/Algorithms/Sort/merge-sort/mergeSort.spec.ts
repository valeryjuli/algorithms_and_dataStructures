import { expect } from "chai";
import { merge, mergeSort } from "./mergeSort";

describe('Merge sort', () => {
    const testCasesSort = [
        {
            sortedArray: [1, 2, 3, 4, 5],
            inputArray: [5, 3, 1, 2, 4],
        },
        {
            sortedArray: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            inputArray: [16, 14, 12, 10, 8, 6, 4, 2, 0],
        },
        {
            sortedArray: [0],
            inputArray: [0],
        },
        {
            sortedArray: [2, 2, 2, 3],
            inputArray: [2, 2, 3, 2],
        }
    ]
    testCasesSort.forEach((testCase, i) => {
        it.only(`should return sorted array from smallest to largest number`, () => {
            const result = mergeSort(testCase.inputArray);
            expect(result).to.deep.equal(testCase.sortedArray);
        })
    });

    const testCasesMerge = [
        {
            array1: [1, 2, 3, 4, 5],
            array2: [1, 2, 3, 4, 5],
            result: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
        },
        {
            array1: [0, 2, 4, 6, 8, 10],
            array2: [1, 3, 4, 7, 9],
            result: [0, 1, 2, 3, 4, 4, 6, 7, 8, 9, 10]
        },
        {
            array1: [0, 300, 450],
            array2: [1, 45, 66, 500],
            result: [0, 1, 45, 66, 300, 450, 500]
        }
    ]
    testCasesMerge.forEach((testCase, i) => {
        it(`should return merged arrays`, () => {
            const result = merge(testCase.array1, testCase.array2);
            expect(result).to.deep.equal(testCase.result);
        })
    });


})