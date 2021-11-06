/**
 * Returns the array of strings capitalized, meaning every string is in uppercase.
 * @param array array of strings
 * @returns 
 */

export const capitalizeWords = (array: Array<string>) => {
  const firstWordUppercase = [array[0].toUpperCase()];
  if (array.length === 1) return firstWordUppercase;
  return (firstWordUppercase).concat(capitalizeWords(array.slice(1)));
}
