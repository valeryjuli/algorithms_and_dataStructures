import { expect } from "chai";
import { someRecursive } from "./someRecursive";

describe.only('Array.some() recursively', () => {
    const testCases = [
        {
            input: [1, 2, 3, 4],
            callback: (num) => num % 2 !== 0,
            result: true,
        },
        {
            input: [4, 6, 8, 12],
            callback: (num) => num % 2 !== 0,
            result: false,
        },
        {
            input: [4, 6, 8, 12],
            callback: (num) => num > 20,
            result: false,
        },
        {
            input: [2, 2, 2, 2],
            callback: (num) => num > 2,
            result: false,
        }
    ]
    describe('some() recursively', () => {
        testCases.forEach((testCase, i) => {
            it(`should check case ${testCase.input}`, () => {
                const result = someRecursive(testCase.input, testCase.callback);
                expect(result).to.equal(testCase.result);
            })
        });
    })

})