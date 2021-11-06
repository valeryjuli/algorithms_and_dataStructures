import { expect } from "chai";
import { binarySearch, binarySearchRecursive } from "./binarySearch";

describe('Binary search', () => {
    const testCases = [
        {
            sortedArray: [1, 2, 3, 4, 5],
            item: 5,
            result: 4,
        },
        {
            sortedArray: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            item: 12,
            result: 6,
        },
        {
            sortedArray: [1],
            item: 1,
            result: 0,
        },
        {
            sortedArray: [1],
            item: 2,
            result: null,
        }
    ]
    testCases.forEach((testCase, i) => {
        it(`should return the index of searched item ${testCase.item} for case ${i}`, () => {
            const result = binarySearch(testCase.sortedArray, testCase.item);
            expect(result).to.equal(testCase.result);
        })
    });
    
    testCases.forEach((testCase, i) => {
        it(`should return the index of searched item ${testCase.item} for case ${i}`, () => {
            const result = binarySearchRecursive(testCase.sortedArray, testCase.item);
            expect(result).to.equal(testCase.result);
        })
    });
})