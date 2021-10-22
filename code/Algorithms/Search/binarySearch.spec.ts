import { divide, multiply, substract, sum } from "./binarySearch";
var assert = require('assert');
describe('Index tests', function() {
    it('2 + 2 should return 4', function() {
        assert.equal(sum(2, 2), 4);
    });
    it('2 - 2 should return 0', function() {
        assert.equal(substract(2, 2), 0);
    });
    it('2 * 2 should return 4', function() {
        assert.equal(multiply(2, 2), 4);
    });
    it('2 / 2 should return 1', function() {
        assert.equal(divide(2, 2), 1);
    });
})