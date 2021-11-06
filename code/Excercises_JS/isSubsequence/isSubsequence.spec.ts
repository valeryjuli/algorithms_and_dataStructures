import { expect } from "chai";
import { isSubsequence, isSubsequenceRecursive } from "./isSubsequence";

describe('verify characters on first string form a subsequence in second string', () => {
    const testCases = [
        {
            input1: 'hello',
            input2: 'hello world',
            output: true,
        },
        {
            input1: 'sing',
            input2: 'sting',
            output: true,
        },
        {
            input1: 'abc',
            input2: 'abracadabra',
            output: true,
        },
    ]
    testCases.forEach((testCase, i) => {
        it.only(`verify characters on first string form a subsequence in second string`, () => {
            const result = isSubsequence(testCase.input1, testCase.input2);
            expect(result).to.deep.equal(testCase.output);
        })
        it.only(`Recursive solution to verify characters on first string form a subsequence in second string`, () => {
            const result = isSubsequenceRecursive(testCase.input1, testCase.input2);
            expect(result).to.deep.equal(testCase.output);
        })
    });
})