# JavaScript Advanced

## Destructuring Arrays and Objects
On ES6 we can destructure arrays and objects on assignment:
```javascript
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
## Expressions
### Function* Generator Functions [^1]



[^1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*
