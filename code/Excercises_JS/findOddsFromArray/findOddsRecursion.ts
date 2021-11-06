/**
 * Return the array of odds number from a given array.
 * 
 * @param array input array 
 * @returns array with odd numbers
 */
export function findOdds(array: Array<number>) {
  // Base case
  let newArray = [];
  // If we went through all the base array values, return result.
  if (array.length === 0) return newArray;
  // Recursive case
  if (array[0] % 2 !== 0) {
    newArray.push(array[0]);
  }
  // Concat to new array the result of recursive call
  newArray = newArray.concat(findOdds(array.slice(1)));

  // We must return the newArray after the call stack is done
  return newArray;
}