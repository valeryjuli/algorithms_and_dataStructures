/**
 * Returns the array of string capitalized, meaning every string first letter is in uppercase.
 * @param array array of strings
 * @returns 
 */

export const capitalizeStrings = (array: Array<string>) => {
  let output = [];

  const word = array[0];
  const pascalCase = word[0].toUpperCase() + word.slice(1);

  if (array.length === 1) {
    return [pascalCase];
  } else {
    output.push(pascalCase);
    return output.concat(capitalizeStrings(array.slice(1)));
  }
}
