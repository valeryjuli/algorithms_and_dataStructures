import { expect } from "chai";
import { flatten, flattenOptimal } from "./flatten";

describe.only('Flatten array of arrays recursively', () => {
    const testCases = [
        {
            input: [1, 2, 3, [4, 5] ],
            result: [1, 2, 3, 4, 5],
        },
        {
            input: [1, [2, [3, 4], [[5]]]],
            result: [1, 2, 3, 4, 5],
        },
        {
            input: [[1],[2],[3]],
            result: [1,2,3],
        },
        {
            input: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]],
            result:  [1,2,3],
        }
    ]
    describe('Flatten array of arrays recursively', () => {
        testCases.forEach((testCase, i) => {
            it(`should check case ${testCase.input}`, () => {
                const result = flatten(testCase.input);
                expect(result).to.deep.equal(testCase.result);
            })
        });
    })
    describe('Flatten array of arrays recursively the optimized way', () => {
        testCases.forEach((testCase, i) => {
            it(`should check case ${testCase.input}`, () => {
                const result = flattenOptimal(testCase.input);
                expect(result).to.deep.equal(testCase.result);
            })
        });
    })

})