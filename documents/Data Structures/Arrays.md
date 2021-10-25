# Arrays
## Description
- Arrays store information contiguously.

## Disadvantages
- As each element of an array has a memory slot, and all array elements need to be next to each other, we need to allocate N contiguous slots on memory. It can be hard to find them and every time we need a new slot we need to relocate the whole array if we don't find free slots around.
![](./assets/2021-10-24-00-32-45.png =350x250)
![](./assets/2021-10-24-00-32-54.png =350x250)

## Advantages
- It is **SUPER GOOD** for accessing data because we know the memory addresses for every element on the array, **it takes 1 operation to access any position**. This is called **Random Access**
![](2021-10-24-00-49-35.png)

### Operations
![](./assets/2021-10-24-01-00-54.png =250x250)
1. Insertion
To insert on an array, for example, on the middle of it, we need to shift elements and maybe move the whole array if there's no space left around on memory. It is not so practical.
- :x: Arrays are not efficient on insertion
![](./assets/2021-10-24-10-48-59.png =200x200)

3. Deletion
This requires to shift the remaining array elements, it is not so practical as we need to re-index elements.

4. Access = **RANDOM ACCESS**
We can directly jump to any position on an array. For example, binary search need this capability