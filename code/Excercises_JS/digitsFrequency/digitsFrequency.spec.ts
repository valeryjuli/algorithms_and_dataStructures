import { expect } from "chai";
import { sameFrequency } from "./digitsFrequency";

describe('verify two numbers have the same frequency of digits', () => {
    const testCases = [
        {
            input: [182, 281],
            output: true,
        },
        {
            input: [34, 14],
            output: false,
        },
        {
            input: [3589578, 5879385],
            output: true,
        },
        {
            input: [22, 222],
            output: false,
        }
    ]
    testCases.forEach((testCase, i) => {
        it(`should return the filtered array with only odd numbers}`, () => {
            const result = sameFrequency(testCase.input[0], testCase.input[1]);
            expect(result).to.deep.equal(testCase.output);
        })
    });
})