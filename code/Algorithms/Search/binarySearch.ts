/**
 * Binary search algorithm
 * @param sortedArray sorted array of numbers
 * @param item item to find on sorted array
 * @returns index of item on sortedArray
 */
export function binarySearch(sortedArray: Array<number>, item: number): number | null {
  let currentIndex;
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  while (startIndex <= endIndex) {
    currentIndex = Math.round((startIndex + endIndex) / 2);
    if (sortedArray[currentIndex] === item) {
      return currentIndex;
    } else if (sortedArray[currentIndex] > item) {
      endIndex = currentIndex - 1;
    } else {
      startIndex = currentIndex + 1;
    }
  }
  return null;
}