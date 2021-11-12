/**
 * Returns a sorted array in increasing order. 
 * @param array array to be sorted
 * @returns sorted array
 */
export function radixSort(array: Array<number>): Array<number> {
  const maxDigits = mostDigits(array);
  for (let i = 0; i < maxDigits; i++) {
    // let buckets = [[], [], [], [], [], [], [], [], [], []];
    let buckets = Array.from({ length: 10 }, () => []);
    for (let n = 0; n < array.length; n++) {
      buckets[getDigit(array[n], i)].push(array[n]);
    }
    // array = [];
    // for (let j = 0; j < 10; j++) {
    //   array.push(...buckets[j]);
    // }
    array = [].concat(...buckets);
  }
  
  return array;
}

/**
 * Returns the ith digit of a number
 */
function getDigit(num, i): number {
  return Math.floor( Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns the number of digits on a number
 */
function  digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Returns the index of the number with the most digits
 */
function mostDigits(array: Array<number>): number {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]))
  }
  return maxDigits;
}