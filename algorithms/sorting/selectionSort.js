/* Selection sort divides the array into a sorted and unsorted region. It repeatedly selects the smallest element 
from the unsorted region and swaps it with the leftmost unsorted element.
 */

/* 
Time Complexity:
    Best Case: O(n^2)
    Average Case: O(n^2)
    Worst Case: O(n^2)
Space Complexity: 
    O(1) (in-place sorting)
*/

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort:", selectionSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
