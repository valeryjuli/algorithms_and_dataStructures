import { expect } from "chai";
import { fibonacci, fibonacciOptimized } from "./fibonacci";

describe('find fibonacci coefficients', () => {
  describe('fibonacci recursive', () => {
    const nth =    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  
    nth.forEach((n) => {
        it(`should return ${n}th coefficient of the fibonacci sequence`, () => {
            expect(fibonacci(n)).to.deep.equal(result[n - 1]);
        })
    });
  })
  describe('fibonacci optimized recursive', () => {
    const nth =    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  
    nth.forEach((n) => {
        it(`should return ${n}th coefficient of the fibonacci sequence`, () => {
            expect(fibonacciOptimized(n)).to.deep.equal(result[n - 1]);
        })
    });
  })
})