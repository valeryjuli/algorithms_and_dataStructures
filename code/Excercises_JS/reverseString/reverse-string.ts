/**
 * Returns reversed string using concatenation with the last letter of previous substring
 * 
 * @param string 
 * @returns 
 */
export const reverseString = (string: string) => {
  // A string can be seen as an array [h e l l o]
  // Base case:
  // The length of the string array is 1, I just return that character
  const stringArray = Array.from(string);
  if (stringArray.length === 1) return string[0];
  // Recursive case:
  // I'll concatenate the reverseString of the array string without the last character
  // 1 return [o].concat(reverseString('h e l l')) -> [o l l e h]
  // 2 return [l].concat(reverseString('h e l ')) -> [l l e h]
  // 3 return [l].concat(reverseString('h e')) -> [l e h]
  // 5 return [e].concat(reverseString('h')) -> [e].concat([h]) -> [e h]
  // 6 [h]
  return [stringArray[stringArray.length - 1]].concat(reverseString(stringArray.slice(0, -1).join(""))).join("")
}

export const reverseStringOptimized = (string: string) => {
  if (string.length === 1) return string[0];
  return reverseString(string.slice(1)) + string[0];
}