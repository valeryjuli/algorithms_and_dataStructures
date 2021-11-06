import { expect } from "chai";
import { capitalizeWords } from "./capitalizeWords";

describe('capitalize strings', () => {
    const testCases = [
        {
            input: ['hello', 'rere', 'toto'],
            result: ['HELLO', 'RERE', 'TOTO'],
        },
        {
            input: ['car','taco','banana'],
            result: ['CAR','TACO','BANANA']
        }
    ]
    describe('capitalize strings', () => {
        testCases.forEach((testCase, i) => {
            it(`should return strings capitalized for ${testCase.input}`, () => {
                const result = capitalizeWords(testCase.input);
                expect(result).to.deep.equal(testCase.result);
            })
        });
    })
})