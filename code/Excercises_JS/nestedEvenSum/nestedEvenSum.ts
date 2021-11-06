import { getConstantValue } from "typescript"

/**
 * Returns the sum of all even numbers on an object.
 * 
 * @param object 
 */
export const nestedEvenSum = (object: Object): number => {
  let sum = 0;
  for (const value of Object.values(object)) {
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    } else if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    }
  }
  return sum;
}
