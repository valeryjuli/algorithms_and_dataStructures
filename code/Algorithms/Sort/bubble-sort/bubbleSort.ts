/**
 * Returns a sorted array in increasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function bubbleSort(array: Array<number>): Array<number> {
  // Loop from the last item to the first item, it will keep the count of bubble passes
  for (let bubble = array.length - 1; bubble >= 0; bubble--) {
    // Loop through all the array until the current 'largest' element swaping elements
    for (let i = 0; i < bubble; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

/**
 * OPTIMIZED Bubble sort that returns a sorted array in increasing order.
 * This is useful when the array is nearly sorted, we need to stop making passes through the array
 * if no more swaps need to be done.
 *  
 * @param array array to be sorted
 * @returns sorted array
 */
export function OptimalBubbleSort(array: Array<number>): Array<number> {
  // Loop from the last item to the first item, it will keep the count of bubble passes
  for (let bubble = array.length - 1; bubble >= 0; bubble--) {
    // Keep track of times I swapped
    let swaps = 0;
    // Loop through all the array until the current 'largest' element swaping elements
    for (let i = 0; i < bubble; i++) {
      if (array[i] > array[i + 1]) {
        swaps++;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    if (swaps === 0) return array;
  }
  return array;
}
