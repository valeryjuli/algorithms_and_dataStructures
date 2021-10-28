import { expect } from "chai";
import { capitalizeStrings } from "./capitalizeStrings";

describe('capitalize strings', () => {
    const testCases = [
        {
            input: ['hello', 'rere', 'toto'],
            result: ['Hello', 'Rere', 'Toto'],
        },
        {
            input: ['car','taco','banana'],
            result: ['Car','Taco','Banana']
        }
    ]
    describe('capitalize strings', () => {
        testCases.forEach((testCase, i) => {
            it(`should return strings capitalized for ${testCase.input}`, () => {
                const result = capitalizeStrings(testCase.input);
                expect(result).to.deep.equal(testCase.result);
            })
        });
    })
})