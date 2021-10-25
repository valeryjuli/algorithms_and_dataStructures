
/**
 * Returns the base raised to a given exponent using recursion.
 * 
 * @param base 
 * @param exponent 
 * @returns base^exponent
 */
export function power(base: number, exponent: number): number {
  // Base case
  if (exponent === 0) return 1;
  // Recursive case
  return base * power(base, exponent - 1);
}