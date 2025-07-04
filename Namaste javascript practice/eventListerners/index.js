document.getElementById("clickMe").addEventListener("click", function  () {
    console.log("button clicked");
})


const users = [
    {firstName: 'Priyanka', age: 30},
    {firstName: 'Raman', age: 31},
    {firstName: 'Banti', age: 28},
    {firstName: 'Saurabh', age: 30}
]

//[Priyanka, Saurabh]

const output = users.filter(val => val.age === 30).map(value => value.firstName);

const output2 = users.reduce((acc, curr) => {
    if(curr.age === 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output)
console.log(output2)

