import { expect } from "chai";
import { stringifyNumbers, stringifyNumbersOptimized } from "./stringifyNumbers";

describe.only('stringify numbers on an object', () => {
    let testCases = [];

    beforeEach(() => {
        testCases = [
            {
                input: {
                    num: 1,
                    test: [],
                    data: {
                        val: 4,
                        info: {
                            isRight: true,
                            random: 66
                        }
                    }
                },
                result: {
                    num: "1",
                    test: [],
                    data: {
                        val: "4",
                        info: {
                            isRight: true,
                            random: "66"
                        }
                    }
                },
            }
        ]

    });

    describe('returns the object with all numbers as strings optimized', () => {
        testCases.forEach((testCase, i) => {
            it(`should return object with all numbers as strings for object case ${i}`, () => {
                const result = stringifyNumbersOptimized(testCase.input);
                console.log(result)
                expect(JSON.stringify(result)).to.deep.equal(JSON.stringify(testCase.result));
            })
        });
    })
    describe('returns the object with all numbers as strings', () => {
        testCases.forEach((testCase, i) => {
            it(`should return object with all numbers as strings for object case ${i}`, () => {
                const result = stringifyNumbers(testCase.input);
                console.log(result, 'tttttttttt', testCase.input)
                expect(JSON.stringify(result)).to.deep.equal(JSON.stringify(testCase.result));
            })
        });
    })
})