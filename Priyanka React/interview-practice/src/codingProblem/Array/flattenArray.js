function flattenArray(arr, result=[]) {
    
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flattenArray(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenArray([1, [2], [3, [4]]])); // [1, 2, 3, 4]