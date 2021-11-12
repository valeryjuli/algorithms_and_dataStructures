/**
 * Returns a sorted array in increasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function quickSort(array: Array<number>, begin = 0, end = array.length - 1): Array<number> {
  // Sorted array is quickSort(left) + pivot + quickSort(right)
  if (begin < end) {
    const pivotIndex = pivot(array, begin, end);
    quickSort(array, begin, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
  return array;
}

/**
 * Returns the index of the pivot that is the first element on the given array.
 * 
 * @param array array.
 */
export function pivot(array: Array<number>, begin = 0, end = array.length - 1): number {
  // We are going to compare the pivot to each element of the array
  // We need two pointers, one indicating the end of the 'left' side and the other looping
  // from i = 1 to the end
  let pivotPosition = begin;
  for (let i = begin + 1; i <= end; i++) {
    // when array[i] < array[0] => pivotPosition++
    if (array[i] < array[begin]) {
      pivotPosition++;
      // swap what is on array[i] to the pivot position
      [array[pivotPosition], array[i]] = [array[i], array[pivotPosition]];
    }
  }
  [array[begin], array[pivotPosition]] = [array[pivotPosition], array[begin]]
  return pivotPosition;
}