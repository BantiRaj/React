let input = "Javascript is fun";
// Output: 5
function vowelCount(input) {
    let str = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(input[i] === str[j]) {
                count++;
            }
        }
    }
    return count;
    
}




console.log(vowelCount(input));


// function vowelCount(input) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     // Convert input to lowercase to handle case insensitivity
//     input = input.toLowerCase();

//     for (let i = 0; i < input.length; i++) {
//         if (vowels.includes(input[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// let input = "Javascript is fun";
// console.log(vowelCount(input)); // Output: 5
