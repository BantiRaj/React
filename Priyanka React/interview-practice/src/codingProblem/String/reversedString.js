function reverseWordsManually(input) {
    let result = "";
    let word = "";

    for (let i = 0; i <= input.length; i++) {
        let char = input[i];

        // If space or end of string, reverse the word manually
        if (char === ' ' || i === input.length) {
            let reversed = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversed += word[j];
            }

            result += reversed;

            // Add space only if it's not the end
            if (i !== input.length) {
                result += " ";
            }

            word = ""; // reset word
        } else {
            word += char; // build the current word
        }
    }

    return result;
}

let input = "hello priyanka";
let output = reverseWordsManually(input);
console.log(output); // ➜ "olleh aknayirp"