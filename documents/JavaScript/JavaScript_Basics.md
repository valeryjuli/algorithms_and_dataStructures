# JavaScript Basics

Awesome resource on JavaScript [Javascript.info](https://javascript.info/coding-style)
## String escape sequences
Inside strings we might want to skip the normal processing of a symbol in a string like use "" inside a string "hola "ella"" is gonna give an error, but "hola \"ella\"" wont

- \b: backspace
- \r: carriage return
- \t: horizontal tab
- \v: vertical tab
- \\: backslash
- \": double quote
- \n	newline
## Operators [^1]
### Miscellaneous
- **new.target** In constructors and functions invoked using the new operator, new.target returns a reference to the constructor or function. In normal function calls, new.target is undefined.
- **super** The super keyword is used to access and call functions on an object's parent.
    - The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.
    - When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 
    - The super keyword can also be used to call functions on a parent object.
  
- **...obj** Spread syntax. Can be used when all elements from an object or array need to be included in a list of some kind. 
  - `myFunction(...iterableObj);`  pass all elements of iterableObj as arguments to function myFunction
  - `[...iterableObj, '4', 'five', 6];`  combine two arrays by inserting all elements from iterableObj
  - `let objClone = { ...obj };`
    On **ECMAScript 2018**
    ppass all key:value pairs from an object 
### Increment and decrement
- **x++** = Return X and then do increment 
- **x--** = Return X and then do decrement
- **--x** = Decrement and return decremented value
- **++x** = Increment and return incremented value

### Unary operators (one operand)
 Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true
 
- **delete** _property_ 
- **void**: discards expressions return value
- **typeof**
- **+**: Coverts operand to **Number** 

- **-**: Coverts operand to **Number and negates it** 
- **~**: Bitwise NOT operator
- **!**: logical NOT

### Equality operators
- **==** It attemps to covert compared operands *IS NOT AN STRICT EQUALITY* comparison. 
  - If operands are of different types, it will try a CONVERSION.
  - Same for **!=**
- **===** It is a STRICT EQUALITY
  - Always consider operants of different types as different
  - Same for **!==**

### Asignment Operators [^3]
- **&&=** The logical AND assignment (x &&= y) operator only assigns if x is truthy.
- **||=** The logical OR assignment (x ||= y) operator only assigns if x is falsy
- **??=** The logical nullish assignment (x ??= y) operator only assigns if x is nullish (null or undefined).

:warning: We could use the operator `||` OR to return a value like we use `??` like `alert(firstName || lastName || nickName || "Anonymous")` **but** it returns **the first truthy value.**

## Arrays [^2]
### Content validation
- Array.every() Returns true if every element in this array satisfies the testing function.

### Filter or sort
- `Array.filter()`
- `Array.find()`
- `Array.findIndex(element`) returns index of given element
- `Array.includes()` Determines whether the array contains a value, returning true or false as appropriate.
- `Array.some()` Returns true if at least one element in this array satisfies the provided testing function.
### Creation
- `Array.from()` Creates a new Array instance from an array-like or iterable object.
- `Array.of()` creates new arrays with specified elements
### Remove elements
- `Array.pop()` removes last element of array and returns it.
- `Array.shift()` removes first element of array and returns it.
### Add elements
- `Array.push()` pushes into last array element
- `Array.unshift()` pushes into first position of array
### Remove, Cut, Insert onto Array
- `Array.splice(start[, deleteCount, elem1, ..., elemN])` It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. **Returns the array of removed elements**.
  - Negative indexes are also allowed `-1` meaning one before the end of array

### Copy part of element
- `Array.slice([start], [end])`
## Functions
{...}

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/
[^2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[^3]: https://javascript.info/nullish-coalescing-operator
