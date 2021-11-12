/**
 * Returns a sorted array in increasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function insertionSort(array: Array<number>): Array<number> {
  // Loop all the array starting from i = 1 until the end
  // I'm gonna compare the element i to the element i - 1, if arr[i] < arr[i - 1] then insert in right place
  for (let elementIndex = 1; elementIndex < array.length; elementIndex++) {
    if (array[elementIndex] < array[elementIndex - 1]) {
      // Insert on left portion
      // Loop from i until the beginning
      for (let leftElementIndex = elementIndex - 1; leftElementIndex >= 0; leftElementIndex--) {
        // Compare by pairs if array[j] > array[j + 1] then swap
        if (array[leftElementIndex] > array[leftElementIndex + 1]) {
          // Swap
          [array[leftElementIndex], array[leftElementIndex + 1]] = [array[leftElementIndex + 1], array[leftElementIndex]];
        }
          
      }
    } // Else leave it and pass to next
  }
  return array;
}
