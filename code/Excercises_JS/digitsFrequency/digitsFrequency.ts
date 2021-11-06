/**
 * Return true if the digit frequency of both numbers is equal
 * 
 * @param num1 input num1 
 * @param num2 input num2 
 */
export function sameFrequency(num1: number, num2: number): boolean {
  // NAIVE
  // For each number:
  // Decompose the number in digits
  // Loop through digits and populate a map keeping track of frequencies
  // Then using both maps:
  // Verify all those keys and values are the same
  // As soon as one is not equal return false.

  // CASES
  // length is different => return false directly

  // For num1
  // How to decompose? Take the last digit 133 % 10 => 3 then 13 % 10 => 3 1 % 10 => 1 => null
  let num1Freq = {};
  let currNum = num1;
  while (currNum !== 0) {
    const digit = currNum % 10;
    if (digit in num1Freq) {
      num1Freq[digit]++;
    } else {
      num1Freq[digit] = 1;
    }
    // new number is Math.trunc(oldNum / 10)
    currNum = Math.trunc(currNum / 10);
  }

  let num2Freq = {};
  let currNum2 = num2;
  while (currNum2 !== 0) {
    const digit = currNum2 % 10;
    if (digit in num2Freq) {
      num2Freq[digit]++;
    } else {
      num2Freq[digit] = 1;
    }
    // new number is Math.trunc(oldNum / 10)
    currNum2 = Math.trunc(currNum2 / 10);
  }

  for (let key in num1Freq) {
    if (!num2Freq[key]) return false;
    if (num1Freq[key] !== num2Freq[key]) return false;
  }

  console.log(num1Freq, num2Freq);
  return true;
}