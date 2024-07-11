/* Heap sort builds a max heap and repeatedly extracts the maximum element from it, swapping it with the last element of the heap 
and then adjusting the heap.
 */

/* 
Time Complexity:
    Best Case: O(n log n)
    Average Case: O(n log n)
    Worst Case: O(n log n)
Space Complexity: 
    O(1) (in-place sorting)
*/

function heapSort(arr) {
    const n = arr.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Heap Sort:", heapSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
