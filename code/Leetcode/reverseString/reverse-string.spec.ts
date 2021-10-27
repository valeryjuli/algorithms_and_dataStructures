import { expect } from "chai";
import { reverseString, reverseStringOptimized } from "./reverse-string";

describe('return string reversed', () => {
    const testCases = [
        {
            input: 'hello',
            result: 'olleh',
        },
        {
            input: 'awesome',
            result: 'emosewa'
        },
        {
            input: 'h',
            result: 'h',
        }
    ]
    describe('reverse recursively', () => {
        testCases.forEach((testCase, i) => {
            it(`should reversed input string ${testCase.input}`, () => {
                const result = reverseString(testCase.input);
                expect(result).to.equal(testCase.result);
            })
        });
    })

    describe('reverse recursively optimized', () => {
        testCases.forEach((testCase, i) => {
            it(`should reversed input string ${testCase.input}`, () => {
                const result = reverseStringOptimized(testCase.input);
                expect(result).to.equal(testCase.result);
            })
        });
    })
})