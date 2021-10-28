import { expect } from "chai";
import { nestedEvenSum } from "./nestedEvenSum";

describe('nested even sum', () => {
    const testCases = [
        {
            input: {
                outer: 2,
                obj: {
                    inner: 2,
                    otherObj: {
                        superInner: 2,
                        notANumber: true,
                        alsoNotANumber: "yup"
                    }
                }
            },
            result: 6,
        },
        {
            input: {
                a: 2,
                b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
                c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
                d: 1,
                e: { e: { e: 2 }, ee: 'car' }
            },
            result: 10,
        }
    ]
    describe('returns the sum of all even numbers on an object', () => {
        testCases.forEach((testCase, i) => {
            it(`should return sum of even numbers for object case ${i}`, () => {
                const result = nestedEvenSum(testCase.input);
                expect(result).to.deep.equal(testCase.result);
            })
        });
    })
})