/**
 * Returns the sum of all even numbers on an object.
 * 
 * @param object 
 */
export const stringifyNumbers = (object: Object): object => {
  const output = {};
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'number') {
      output[key] = object[key].toString();
    } else if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      // An array is also an object so we need to filter those with !Array.isArray()
      output[key] = stringifyNumbers(object[key]);
    } else {
      output[key] = object[key];
    }
  }
  return output;
}

export const stringifyNumbersOptimized = (object: Object): object => {
  for (const key in object) {
    if (typeof object[key] === 'object') {
      stringifyNumbers(object[key]);
    } else if (typeof object[key] === 'number') {
      object[key] = object[key].toString();
    }
  }
  return object;
}
