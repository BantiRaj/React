function isPalindrome(str) {
    // Convert to lowercase and remove spaces
    str = str.toLowerCase().replace(/\s+/g, '');

    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "Racecar";
console.log(isPalindrome(str1)); // true