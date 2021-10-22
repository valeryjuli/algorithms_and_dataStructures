# Binary Search

Binary search is an algorithm that solves a searching problem. It looks for an element on a sorted list and returns the position of it (if it exists), if it doesn't exists returns **null** for __example:__
- Finding a word that begins by 'R' on a dictionary, the best way to do it is to go chop a page in the middle of the dictionary instead of going from the beginning.
- Finding an username on a list of users on facebook.

## Requirements
* It requires a sorted list of elements.

## How it works?
Instead of searching looping one by one through the list, we will filter each time by half of the remaining list until we find the element. At each iteration we need to know if the element is greater or smaller than our current "guess"

We start with a list of 1000 sorted numbers, we want to find 25.
1. We start by "guessing" if it's on **500**? -> No, is smaller
2. Ok, so half of 500 is 250, is it on **250**? -> No, is smaller
3. Ok, so half of 250 is 125, is it on **125**? -> No, is smaller
3. We do this until we arrive to 25!

## Big O complexity
Binary search takes $log_2n$ to run in the **worst case** for a list of *n*. Why?

We are dibing in halves:
1. Length of array initially $n$
2. First iteration: length = $n / 2$
3. Second iteration: length = $(n / 2) / 2 = n / 4 = n / 2^2$
4. Third iteration: length = $(n / 2) / 2 / 2 = n / 4 / 2= n / 2^3$
5. Kth iteration: length = $n / 2^k$

The best case would be $O(1)$ if we guess on the first try!

