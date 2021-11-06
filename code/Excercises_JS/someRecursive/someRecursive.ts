/**
 * Returns true if any of the array elements returns true when called with callback.
 * 
 * @param array array to test with callback
 * @param callback callback
 * @returns true if any of the array elements returns true when called with callback.
 */
export const someRecursive = (array: Array<any>, callback: Function) => {
  // Base case: we have one element to test, we return its callback result
  const callbackResult = callback(array[0]);
  if (callbackResult === true ) {
    return true
  } else if (callbackResult === false && array.length > 1) {
    return someRecursive(array.slice(1), callback);
  } else {
    return false;
  };
  // Recursive: I'm gonna check if I'm true OR the the rest of the array is true

}
