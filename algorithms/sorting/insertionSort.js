/* Insertion sort builds the final sorted array one item at a time. It takes each element and 
inserts it into its correct position relative to the already sorted part of the array.
 */

/* 
Time Complexity:
    Best Case: O(n) (when the array is already sorted)
    Average Case: O(n^2)
    Worst Case: O(n^2)
Space Complexity: 
    O(1) (in-place sorting)
*/

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Insertion Sort:", insertionSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
