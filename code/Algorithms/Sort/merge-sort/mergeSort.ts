/**
 * Returns a sorted array in increasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function mergeSort(array: Array<number>): Array<number> {
  if (array.length <= 1) return array;
  return merge(mergeSort(array.slice(0, Math.floor(array.length / 2))), mergeSort(array.slice(Math.floor(array.length / 2))));
}

/**
 * Returns an array with merged elements from array 1 and array 2.
 * 
 * @param array1 sorted first array.
 * @param array2 sorted second array.
 * @returns 
 */
export function merge(array1: Array<number>, array2: Array<number>): Array<number> {
  let outputArray = [];
  // We shall begun with the smallest array, lets ignore it for now
  // We need to look at every element of array1 (the smallest)
  let j = 0; // Index on array2
  let i = 0; // Index of array1 (shortest)
  while (i < array1.length) {
    // Comparing the values of array1 & 2
    //If array1[i] > array2[j] => outputArray.push(array2[j]) and do j++
    // else array1[i] < array2[j] => outputArray.push(array1[i]) and i++
    if (array1[i] > array2[j]) {
      outputArray.push(array2[j]);
      j++
    } else {
      outputArray.push(array1[i])
      i++;
    }
  }
  // Push the remaining of array2
  outputArray = outputArray.concat(array2.slice(j, undefined));
  return outputArray;
}