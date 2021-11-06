
/**
 * Returns a flatten version of the nested array.
 * 
 * @param array array to be flattened 
 * @returns flattened array
 */
export const flatten = (array: Array<any>) => {
  let output = [];

  function helper(array) {
    array.forEach((element) => {
      if (element.length === undefined) {
          output.push(element);
      } else {
          helper(element);
      }
    })
  }

  helper(array);
  return output;
}

export const flattenOptimal = (array: Array<any>) => {
  let output = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
        output = output.concat(flattenOptimal(element));
      } else {
        output.push(element);
      }
  })

  return output;
}
