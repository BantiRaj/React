function sumArray(arr) {
    let sum = 0; // Initialize sum to 0
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element in the array to sum
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, -2, -3, -4])); // -10
