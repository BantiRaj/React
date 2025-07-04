function reversePreserveSpaces(input) {
    let result = [];
    let chars = [];

    // Step 1: Extract non-space characters
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            chars.push(input[i]);
        }
    }
    
    console.log(chars)

    // Step 2: Build result array
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            result[i] = ' ';
        } else {
            result[i] = chars.pop(); // pop from end (reverse)
        }
    }
 console.log(result)
    // Step 3: Join manually (no join())
    let final = '';
    for (let i = 0; i < result.length; i++) {
        final += result[i];
    }

    return final;
}

let input = "I am priyanka";
let output = reversePreserveSpaces(input);
console.log(output); // a kn ayirpmaI