import { expect } from "chai";
import { power } from "./powerRecursion";

describe.only('find odds', () => {
    const testCases = [
        {
            input: {base: 2, exponent: 3},
            result: 8,
        },
        {
            input: {base: 2, exponent: 4},
            result: 16
        },
        {
            input: {base: 2, exponent: 0},
            result: 1,
        }
    ]
    testCases.forEach((testCase, i) => {
        it(`should return base raised to the given power`, () => {
            const result = power(testCase.input.base , testCase.input.exponent);
            expect(result).to.deep.equal(testCase.result);
        })
    });
})