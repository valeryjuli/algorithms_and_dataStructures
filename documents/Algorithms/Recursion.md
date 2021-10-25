# Recursion
Recursion is when a function calls itself, we shall use recursion if it simplifies the problem.
> :warning: There's no performance benefit on using recursion - Grokking

> "“Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation!"

## Structure
A recursive function has 2 parts:

1. **Recursive Case**: The function calls itself.
2. **Base Case**: The case when the function does not call itself **again** (avoid infinite loop).

![](./assets/2021-10-24-22-04-23.png =300x300)

## The Call Stack
The call stack is ... well, a **Stack**. It is on this structure that we store the functions being called. On a stack we have only two operations:
1. Push: Add a new item on the top
2. Pop: Remove item on the top

![](./assets/2021-10-24-22-11-37.png =300x200)

### How it works?
- On every function call the computers allocates a box of memory for a function call
- 
![](./assets/2021-10-24-22-13-50.png =200x200)

- Then it stores the argument values of the function being called
- 
![](./assets/2021-10-24-22-14-27.png =200x200)

- Then if a function is called before the end of another function, a new block of memory is added
- 
![](./assets/2021-10-24-22-15-21.png =200x200)

- When the function block on the top **RETURNS A VALUE** it gets *popped* out the stack.
- 
![](./assets/2021-10-24-22-16-10.png =200x200)

So:
> :smile: When a function is called from another function, the calling function is **paused in a partially completed state** all the arguments values are stored in memory

### Factorial Example

![](./assets/2021-10-24-22-20-21.png =450x800)

![](./assets/2021-10-24-22-20-37.png =400x200)

### Important disadvantage
Storing all those function calls on the stack can take up a lot of memory! So for deep recursion maybe we could rewrite as a loop or check **tail recursion**.

[Tail Recursion JS](https://dev.to/hi_iam_chris/recursion-and-tail-recursion-with-javascript-2fdg)

### Helper Method Recursion Pattern
Whenever we need to update a variable continuously we can use this pattern for a clear code.
```javascript
function outerFunction(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // Helper logic here
    // Base case here
    // Modify outerScopedVariable ex.
    outerScopedVariable--;
    // Recursive call
    helper(outerScopedVariable)
  }

  // Call helper method
  helper(input)

  return outerScopedVariable;
}
```

#### Example: Find Odd Number on Array
**HELPER PATTERN**

```javascript
function findOdds(array) {
  let outputArray = [];

  // Helper method
  function helperOdds(helperArray) {
    // Base case
    if (helperArray.length === 0) return;
    // Recursive case
    if (helperArray[0] % 2 !== 0) {
      // Push first element if it's odd
      outputArray.push(helperArray[0]);
    }
    // Recursive call with array without first element
    helperOdds(helperArray.slice(1));
  }

  helperOdds(array);

  return outputArray;
}
```

**PURE RECURSION**
:warning:
- For arrays use **slice, spread operator, concat** to make copies of arrays without mutating them
- For strings use **slice, substr, substring** to make copies
- For objects use **Object.assign, spread operator** to make copies

**Proposed solution:**

```javascript
function findOdds(array) {
  // Base case
  let newArray = [];
  // If we went through all the base array values, return result.
  if (array.length === 0) return newArray;
  // Recursive case
  if (array[0] % 2 !== 0) {
    newArray.push(array[0]);
  }
  // Concat to new array the result of recursive call
  newArray.concat(findOdds(array.slice(1)));
}
```

**My solution:**

```javascript
function findOdds(array, index = 0) {
  // Base case
  // If the index does not exist on the array we finished.
  if (!array[index]) return array;
  // Recursive case
  if (array[index] % 2 === 0) {
    array.splice(index, 1); // Remove it from array, do not increment index
  } else {
    index++; // Do not modify array, just look next item
  }
  findOdds(array, index);
}
```