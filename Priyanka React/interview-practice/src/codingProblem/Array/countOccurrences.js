function countOccurrences(arr, item) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === item) {
            count++;
        }
    }
    
    return count;
}

console.log(countOccurrences([1, 2, 3, 4, 5, 1, 1], 1)); // 3
console.log(countOccurrences([2, 4, 6, 8, 10], 5)); // 0