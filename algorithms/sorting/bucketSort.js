/* Bucket sort divides the array into a number of buckets, each of which is then sorted individually, typically with 
another sorting algorithm or recursively with bucket sort itself.
 */

/* 
Time Complexity:
    Best Case: O(n + k) (where k is the number of buckets)
    Average Case: O(n + k)
    Worst Case: O(n^2) (when all elements fall into a single bucket)
Space Complexity: 
    O(n + k)
*/

function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;
    
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = new Array(bucketCount);
    
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    
    for (let num of arr) {
        const bucketIndex = Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    }
    
    arr.length = 0;
    for (let bucket of buckets) {
        insertionSort(bucket); // or any other sort for buckets
        arr.push(...bucket);
    }
    
    return arr;
}

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
console.log("Bucket Sort:", bucketSort(arr.slice())); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
