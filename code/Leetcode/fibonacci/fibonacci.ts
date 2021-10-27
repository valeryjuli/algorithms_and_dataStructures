/**
 * Compute the nth coefficient of the fibonacci sequence.
 * 
 * @param n the fibonacci coefficient
 */
export const fibonacci = (n: number) => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Optimized recursive computation the nth coefficient of the fibonacci sequence.
 * 
 * @param n the fibonacci coefficient
 */
export const fibonacciOptimized = (n: number) => {
  let coefficients = [0, 1, 1];

  function helperFibonacci(n: number) {
    if (coefficients[n] !== undefined) {
      return coefficients[n];
    } else {
      const nth = helperFibonacci(n - 1) + helperFibonacci(n - 2);
      coefficients.push(nth);
      return nth;
    }
  }
  
  return helperFibonacci(n);
}