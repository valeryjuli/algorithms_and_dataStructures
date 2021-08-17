
## Peak Finder
GIven an array 
`[a, b, c, d , e, f, g, h, i]`
where a - i are numbers

A peak is defined as: 
Position **2** is a peak if $b \geq a  \And   b \geq c$

Position 9 is a peak if $i \geq h$

**Problem** Find a peak if it exists

**Idea#1**
```javascript
var peakValue = array[0];
var peakIndex = 0;
for (const i = 0, i < array.length, i++) {
  if (i !== 0 && i != array.length - 1) {
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      peakValue = array[i];
      peakIndex = i;
    }
  } else {
    if (i !== 0 && array[i] > array[i-1]) {
      peakValue = array[i];
      peakIndex = i;
    }
  }
}
```
**Questions**
- Can there be more than one peak?
  - Yes. 
- Because we use 'greater equal' if its like [..., 3, 3, 3, ...] then the middle 3 index is a peak?


**StraightForward Algorithm**
For the straight forward approach the algorithm will begin from left to right one by one
In the worst case the algorithm complexity would be $\theta(n)$, meaning it would go through the **n** elements of the array.

**Divide and conquer paradigm**
Index arrays
`[1 |2 | |n/2 - 1 | n/2 | n/2 + 1 | | n-1 | n ]`

### Algorithm
- Start on a[n/2]
- If a[n/2 - 1] > a[n/2] then look from 0 to n/2 - 1
- If a[n/2 + 1] > a[n/2] then look from n/2 + 1 to n
- Else it means a[n] is a peak

**Cost of execution:**

For an input of size $n$, it will need the 'work' of the first comparison $\theta(1)$ of whether to look left or right, plus the cost of 'processing' the rest $n/2$

$T(n) = T(n/2) + \theta(1)$

If we continue the analysis
$$
 T(n) = T(n/4) + \theta(1) + \theta(1)
 \\
 T(n) = T(n/8) + 3\theta(1)
 \\
 T(n) = T(n/2^k) + k\theta(1)
 \\
 k = \log_2(n)
 \\
 T(n) = T(1) + \log_2(n)\theta(1) 
 \\
 T(n) = O(log(n))
 $$
On the base  case where $n=1$ we have $T(1) = \theta(1)$

## 2D Peak Finder
If we find a hill in $a$ for example, on the matrix of size $M x N$ it means that:
$a\geq b, a\geq d, a \geq e, a \geq c$ if b,c,d,e were a's neighbors

### Algorithm
- Pick the middle column $j = m/2$
- Find global max on column at $(i', j')$
- Compare $(i', j - 1'),(i', j'),(i', j + 1')$
- Pick left if $(i', j - 1')\ge(i', j')$
- Pick right if $(i', j + 1')\ge(i', j')$
  
Here we just split the matric on half

- If $(i', j')\ge(i', j'),(i, j+1)$ then is a 2D PEAK. 

Now we solve for the new matrix but with HALF the number of columns.
We continue this until end with one column, there the global maximum is the peak

**Cost of execution**
