/**
 * Returns a sorted array in decreasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function selectionSort(array: Array<number>): Array<number> {
  const outputArray = [];
  while (array.length !== 0) {
    const biggestNumberIndex = findBiggestNumber(array);
    const removedNumber = array.splice(biggestNumberIndex, 1);
    outputArray.push(removedNumber[0]);
  }
  return outputArray;
}

export function findBiggestNumber(array: Array<number>): number {
  const biggestNumberIndex = array.reduce((biggest, current, currentIndex) => {
    return current > array[biggest] ? currentIndex : biggest
  }, 0);
  return biggestNumberIndex;
}