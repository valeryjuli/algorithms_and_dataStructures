import { expect } from "chai";
import { findOdds } from "./findOddsRecursion";

describe('find odds', () => {
    const testCases = [
        {
            inputArray: [1, 2, 3, 4, 5],
            outputArray: [1, 3, 5],
        },
        {
            inputArray: [0, 2, 4, 6, 8, 10, 12, 14, 16],
            outputArray: [],
        },
        {
            inputArray: [5, 6, 11, 21, 33],
            outputArray: [5, 11, 21, 33],
        },
        {
            inputArray: [1],
            outputArray: [1],
        }
    ]
    testCases.forEach((testCase, i) => {
        it(`should return the filtered array with only odd numbers}`, () => {
            const result = findOdds(testCase.inputArray);
            expect(result).to.deep.equal(testCase.outputArray);
        })
    });
})