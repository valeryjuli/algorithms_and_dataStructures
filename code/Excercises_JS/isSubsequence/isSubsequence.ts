/**
 * Return true if characters on first string form a subsequence in second string
 */
export function isSubsequence(str1: string, str2: string): boolean {
  let charStr1 = 0;
  for (let charStr2 = 0; charStr2 <= str2.length; charStr2++) {
    if (charStr1 === str1.length) return true;
    if (str1[charStr1] === str2[charStr2]) {
      charStr1++;
    }
  }
  return false;
}

export function isSubsequenceRecursive(str1: string, str2: string): boolean {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) {
    return isSubsequenceRecursive(str1.slice(1), str2);
  } else {
    return isSubsequenceRecursive(str1, str2.slice(1));
  }
}