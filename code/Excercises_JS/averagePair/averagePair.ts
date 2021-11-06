/**
 * Return true if there is is a pair whose average is the specified
 * 
 * @param array array
 * @param avg average to look for by pairs
 */
export function averagePair(array: Array<number>, avg: number): boolean {
  // Base case
  if (array.length < 2) return false;
  
  let startW = 0;
  let endW = array.length - 1;
  while (startW < endW) {
    const currAverage = (array[startW] + array[endW]) / 2;
    if (currAverage === avg) return true;
    if (currAverage > avg) {
      endW--;
    } else {
      startW++;
    }
  }
  return false;
}