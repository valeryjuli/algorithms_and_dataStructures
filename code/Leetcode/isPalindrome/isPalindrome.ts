/**
 * Returns true if the string can be read the same forward and backwards.
 * Ex. amanaplanacanalpanama is true
 * 
 * @param string string to test as palindrome
 * @returns true if string is palindrome
 */
export const isPalindrome = (string: string) => {

  function reverseString(string: string) {
    if (string.length === 1) return string[0];
    return reverseString(string.slice(1)) + string[0];
  }
  return reverseString(string) === string;
}

export const isPalindromeOptimal = (string: string) => {
  if (string.length === 1) return true;
  // Base case when looking as mirror equality
  if (string.length === 2) return string[0] === string[1];
  // If the first and last letter are the same, verify the next inner substring
  if (string[0] === string.slice(-1)) return isPalindromeOptimal(string.slice(1, -1));
  return false

}
