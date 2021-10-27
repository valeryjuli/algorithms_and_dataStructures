import { expect } from "chai";
import { isPalindrome, isPalindromeOptimal } from "./isPalindrome";

describe('check if string is palindrome', () => {
    const testCases = [
        {
            input: 'amanaplanacanalpanama',
            result: true,
        },
        {
            input: 'awesome',
            result: false,
        },
        {
            input: 'h',
            result: true,
        }
    ]
    describe('palindrome recursively', () => {
        testCases.forEach((testCase, i) => {
            it(`should check if ${testCase.input} is palindrome`, () => {
                const result = isPalindrome(testCase.input);
                expect(result).to.equal(testCase.result);
            })
        });
    })

    describe('palindrome recursively optimized', () => {
        testCases.forEach((testCase, i) => {
            it(`should reversed input string ${testCase.input}`, () => {
                const result = isPalindromeOptimal(testCase.input);
                expect(result).to.equal(testCase.result);
            })
        });
    })
})