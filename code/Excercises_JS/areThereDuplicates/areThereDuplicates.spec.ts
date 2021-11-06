import { expect } from "chai";
import { areThereDuplicates } from "./areThereDuplicates";

describe('verify if functions arguments are duplicated', () => {
    const testCases = [
        {
            input: [182, 281, 'a'],
            output: false,
        },
        {
            input: [34, 34],
            output: true,
        },
        {
            input: ['a', 'b', 'c', 'd', 'a'],
            output: true,
        }
    ]
    testCases.forEach((testCase, i) => {
        it(`should true if there are duplicated arguments for case ${testCase.input}`, () => {
            const result = areThereDuplicates(...testCase.input);
            expect(result).to.deep.equal(testCase.output);
        })
    });
})