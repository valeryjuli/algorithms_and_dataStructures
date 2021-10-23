# Big O Notation - How we compare algorithms

Big O notation is used to compare the algorithms running times *growing rates*. It expresses the **worst scenario relation** between execution time and the size of the input.

:round_pushpin: We use the **rough number** of simple operations that the algorithm performs for execution.

We care about the trend! That means we can simplify the notation so:
- We can simplify constants multiplication have $O(14n) = O(n)$
- We can remove the small constants $O(n + 2222) = O(n)$ because if we take HUGE n the 2222 end up being not that important on the trend

![BigO](./assets/2021-10-23-23-56-58.png  =200x100)

- Algorithm speed isn’t measured in seconds, but **in growth of the number of operations**.
- Algorithms execution time change with the growth of input size. It is important to evaluate the evolution.

## Note on logarithms
> We can say that a $log()$ roughly measures **the number of times you can divide the number by 2 before the value being less or equal to one**
> 
![](./assets/2021-10-24-00-24-40.png =200x200)

**LOGARITHM COMPLEXITY IS GREAT!**

## Common BigO's
 ![](./assets/2021-10-24-00-20-18.png =400x400)

## How to calculate it?
### Constants
We can simplify constants:
- $O(2n) = O(n)$
- $O(500) = O(1)$
- $O(43 n^2) = O(n^2)$

### Smaller terms
We can simplify terms that on HUGE $n$ would be small compared to others:
- $O(n^2 + 5n + 9) = O(n^2)$ because on huge $n$ the $5n$ would be way smaller than the $n$ ... Remember math limits.

### Loops
For loops the BigO is the **length of the loop** multiplied by the inner complexity:
- $O_loop(n) = O(n * innerBigO$

#### Nested loops
For nested loops we will have $O(n * k) = O(n^2)$. Why?
- Each loop I'll do $n$ operations, and if I have another loop inside, for each $n$ operation I'll do also $k$ operations. 
```javascript
for (let i = 0; i < L; i++) {
  for (let k = 0; k < L; k++) {
    // Do something
  }
}
```

