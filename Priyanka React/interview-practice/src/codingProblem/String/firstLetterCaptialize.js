function wordCaptialize(str){
    let result = "";
    for(let i=str.length-1; i>=0; i--) {
        result += str[i]
    }
    let char = result[0].toUpperCase();
    let final = ""; // char + resultt.slice(1)
    for(let i = 1; i<result.length; i++) {
        final += result[i]
    }
    return char+final;
}

let string = "priyanka";
let output = wordCaptialize(string);
console.log(output) //priyanka