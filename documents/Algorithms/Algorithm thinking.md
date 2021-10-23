# Algorithmic thinking
Here are my personal notes for the MIT OCW Introduction to Algorithms.

**Books**
- Cormen, Thomas, Charles Leiserson, Ronald Rivest, and Clifford Stein. Introduction to Algorithms

## Introduction
Analysis of efficient procedures (algorithms) for solving large scale problems. We will use  Asymptotic Complexity to evaluate those procedures.

## Impact of Algorithms
Algorithms can be thought as **technology** also, the choice of efficient algorithms directly impacts the computation, energetic and time costs.

Ex: 
There are two types of arrays sorting with computing times:
- Insertion sort
  - $c_1n^2$
- Merge sort
  - $c_2n \log(n)$

The merge sort is faster on small arrays, but the merge sort is faster on larger sets, why?
- Because $\log(n)$ grows slower than $n^2$ on larger numbers

It is at larger problem sizes that the differences
in efficiency between algorithms become particularly prominent
