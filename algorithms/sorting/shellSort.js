/* Shell sort is a generalization of insertion sort that allows the exchange of items that are far apart. 
It sorts the elements at a specific interval (gap), gradually reducing the gap until it becomes 1, which is a regular insertion sort.
 */

/* 
Time Complexity:
    Best Case: O(n log n) (depends on the gap sequence)
    Average Case: O(n (log n)^2) or O(n^(3/2)) depending on the gap sequence
    Worst Case: O(n (log n)^2) or O(n^(3/2)) depending on the gap sequence
Space Complexity: 
    O(1) (in-place sorting)
*/

function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
    
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    
    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Shell Sort:", shellSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
