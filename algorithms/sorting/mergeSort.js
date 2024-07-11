/* Merge sort is a divide and conquer algorithm that divides the array into halves, recursively sorts each half, and 
then merges the sorted halves.
 */

/* 
Time Complexity:
    Best Case: O(n log n)
    Average Case: O(n log n)
    Worst Case: O(n log n)
Space Complexity: 
    O(n) (additional space for merging)
*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Merge Sort:", mergeSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
