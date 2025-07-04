function removeDuplicates(arr) {
    let result = [];
    
    for(let i=0; i<arr.length; i++) {
        if(!result.includes(arr[i])) {
            result.push(arr[i])
        } else {
            
        }
    }
    
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 10, 10])); // [10]


///
// function removeDuplicates(arr) {
//     let result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
        
//         // Manually check if the element already exists in the result array
//         for (let j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 isDuplicate = true;
//                 break; // No need to check further if a duplicate is found
//             }
//         }

//         // If it's not a duplicate, add it to the result
//         if (!isDuplicate) {
//             result.push(arr[i]);
//         }
//     }
    
//     return result;
// }
