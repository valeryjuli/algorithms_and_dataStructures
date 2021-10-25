# Selection Sort
## Code and test
- [Code](../../../code/Algorithms/Search/selection-sort/selectionSort.ts)
- [Test](../../../code/Algorithms/Search/selection-sort/selectionSort.spec.ts)

Selection sort is used to sort elements in decreasing order. It will first find the biggest number, then remove it from the input array and push it to the output array.

## Requirements
- It requires an array of unsorted numbers.
- It needs **random access**

## How it works?
1. We start by taking the native array and finding its maximmum
2. Then we remove that element from the input array and push it to the output array
3. We repeat until input array is empty.

## Big O complexity
Because at each iteration we got through all the array to find the maximum, and going through the array has a complexity of $O(n)$ and we do it $n$ times, it will be a complexity of $O(n^2)$ 
![](./assets/2021-10-24-21-50-56.png)