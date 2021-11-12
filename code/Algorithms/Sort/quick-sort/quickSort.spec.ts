import { expect } from "chai";
import { quickSort, pivot } from "./quickSort";

describe('Quick sort', () => {
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
            const result = quickSort(testCase.inputArray);
            expect(result).to.deep.equal(testCase.sortedArray);
        })
    });

    const testCasesPivot = [
        {
            array: [1, 3, 5, 2, 0],
            pivot: 1,
        },
        {
            array: [6, 2, 4, 0, 8, 10],
            pivot: 3,
        },
        {
            array: [4, 8, 2, 1, 5, 7, 6, 3],
            pivot: 3,
        }
    ]
    testCasesPivot.forEach((testCase, i) => {
        it.only(`should return pivot position`, () => {
            const result = pivot(testCase.array);
            expect(result).to.deep.equal(testCase.pivot);
        })
    });


})