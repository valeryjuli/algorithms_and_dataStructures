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

// TODO: Revisit
export function binarySearchRecursive(sortedArray: Array<number>, item: number): number | null {
  // Base case: I have just one element
  const length = sortedArray.length;
  console.log('L', length)
  if (length === 1 && sortedArray[0] !== item) return null; // Current index is 0

  const middle = Math.round((length - 1)/ 2);
  const middleElement = sortedArray[middle];
  console.log('middleEl:', middleElement, 'middleIdx: ', middle)

  if (middleElement === item) return middle; // Current index is 0

  if (middleElement > item) { // We need to take [0, middleElement]
    console.log('A', sortedArray.slice(undefined, middle ))
    return middle - binarySearchRecursive(sortedArray.slice( undefined, middle), item) + 1;
  } else { // We need to take [middleElement, end]
    console.log('B', sortedArray.slice(middle + 1, undefined))
    return middle + binarySearchRecursive(sortedArray.slice(middle + 1, undefined), item) + 1;
  }
}