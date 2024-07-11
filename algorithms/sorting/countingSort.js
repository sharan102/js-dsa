/* Counting sort works for integers within a specific range. It counts the number of occurrences of each element and 
uses this information to place each element into its correct sorted position.
 */

/* 
Time Complexity:
    Best Case: O(n + k) (where k is the range of the input)
    Average Case: O(n + k)
    Worst Case: O(n + k)
Space Complexity: 
    O(n + k)
*/

function countingSort(arr) {
    const max = Math.max(...arr);
    const counts = new Array(max + 1).fill(0);
    const result = [];
    
    for (let num of arr) {
        counts[num]++;
    }
    
    for (let i = 0; i < counts.length; i++) {
        while (counts[i] > 0) {
            result.push(i);
            counts[i]--;
        }
    }
    
    return result;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Counting Sort:", countingSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
