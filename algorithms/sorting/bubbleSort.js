/*
Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
It passes through the list until no swaps are needed, indicating it is sorted.
 */

/* 
Time Complexity:
    Best Case: O(n) (when the array is already sorted)
    Average Case: O(n^2)
    Worst Case: O(n^2)

Space Complexity: 
    O(1) (in-place sorting) 
*/

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort:", bubbleSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
