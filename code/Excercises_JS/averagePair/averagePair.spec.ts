import { expect } from "chai";
import { averagePair } from "./averagePair";

describe('verify if there is a pair whose average is the specified', () => {
    const testCases = [
        {
            input: [1, 2, 3],
            avg: 2.5,
            output: true,
        },
        {
            input: [1, 3, 3, 5, 6, 7, 10, 12, 19],
            avg: 8,
            output: true,
        },
        {
            input: [-1, 0, 3, 4, 5, 6],
            avg: 4.1,
            output: false,
        },
        {
            input: [],
            avg: 4.1,
            output: false,

        }
    ]
    testCases.forEach((testCase, i) => {
        it.only(`should true if there is a pair in ${testCase.input} whose average is ${testCase.avg}`, () => {
            const result = averagePair(testCase.input, testCase.avg);
            expect(result).to.deep.equal(testCase.output);
        })
    });
})