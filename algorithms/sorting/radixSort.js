/* Radix sort sorts numbers by processing individual digits. It sorts the input numbers starting from the least significant digit 
to the most significant digit.
 */

/* 
Time Complexity:
    Best Case: O(n * k) (where k is the number of digits in the largest number)
    Average Case: O(n * k)
    Worst Case: O(n * k)
Space Complexity: 
    O(n + k)
*/

function radixSort(arr) {
    const max = Math.max(...arr);
    let exp = 1;
    
    while (Math.floor(max / exp) > 0) {
        countingSortForRadix(arr, exp);
        exp *= 10;
    }
    
    return arr;
}

function countingSortForRadix(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);
    
    for (let num of arr) {
        count[Math.floor(num / exp) % 10]++;
    }
    
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }
    
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Radix Sort:", radixSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
