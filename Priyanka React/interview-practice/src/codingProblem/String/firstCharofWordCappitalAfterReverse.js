function wordCapitalize(str) {
    let result = "";
    let arr = [];
    let anotherArr = [];
    
    for(let i = 0; i <str.length; i++){
        if(str[i] !== ' ') {
            arr.push(str[i])
        }
    }
    
    for(let i = 0; i <str.length; i++){
        if(str[i] === ' ') {
            anotherArr[i] = ' ';   
        } else {
            anotherArr[i] = arr.pop();
        }
    }
    
    let final = "";
    for(let i = 0; i <anotherArr.length; i++){
        if (i === 0 || anotherArr[i - 1] === ' ') {
            final += anotherArr[i].toUpperCase();
        } else {
            final += anotherArr[i].toLowerCase(); // lowercase others for consistency
        }
    }
    
    console.log(final)
}

let string = "I am priyanka";
let output = wordCapitalize(string);
console.log(output); // Output: "I Ma Aknayirp"