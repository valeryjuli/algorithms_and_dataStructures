import { expect } from "chai";
import { insertionSort } from "./insertionSort";

describe.only('Insertion sort', () => {
    const testCasesSort = [
        {
            sortedArray: [1, 2, 3, 4, 5],
            inputArray: [5, 3, 4, 1, 2],
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
        it(`should return sorted array from smallest to largest number`, () => {
            const result = insertionSort(testCase.inputArray);
            expect(result).to.deep.equal(testCase.sortedArray);
        })
    });
})