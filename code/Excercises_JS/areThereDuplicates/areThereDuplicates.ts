/**
 * Return true if there is at least one duplicate in the function arguments
 * 
 * @param args function arguments
 */
export function areThereDuplicates(...args: any): boolean {
  let dictionary = {};
  for (let argument of args) {
    if (!(argument in dictionary)) {
      dictionary[argument] = 1;
    } else {
      return true;
    }
  }
  return false;
}