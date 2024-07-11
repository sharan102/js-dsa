/* Quick sort picks a pivot element and partitions the array into two sub-arrays according to whether they are less than or 
greater than the pivot. It then recursively sorts the sub-arrays.
 */

/* 
Time Complexity:
    Best Case: O(n log n)
    Average Case: O(n log n)
    Worst Case: O(n^2) (rare, but can occur if pivot selection is poor)
Space Complexity: 
    O(log n) to O(n) (depending on the implementation)
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort:", quickSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
