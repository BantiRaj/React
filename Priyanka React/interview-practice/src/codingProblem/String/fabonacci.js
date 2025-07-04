// Function to generate Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];  // Starting values of the Fibonacci sequence

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]; // Next number is the sum of the last two numbers
    }

    return sequence;
}

// Example usage: Get first 10 Fibonacci numbers
const numTerms = 10;
console.log(fibonacci(numTerms)); // Output: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]