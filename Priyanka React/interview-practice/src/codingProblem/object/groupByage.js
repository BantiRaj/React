var groups = [
    {
        name: "Devi",
        age: 20
    },
     {
        name: "Ravi",
        age: 30
    },
     {
        name: "Ram",
        age: 20
    },
    
];


function groupByAge(arr) {
    let result = {};
    
    for(let i=0; i<arr.length; i++) {
        let val = arr[i];
        let age = val.age;
        
        if(result[age] === undefined) {
            result[age] = [];
        }
        
        result[age][result[age].length] = val
    }
    
    return result;
}

console.log(groupByAge(groups))

//output
// {
//   '20': [ { name: 'Devi', age: 20 }, { name: 'Ram', age: 20 } ],
//   '30': [ { name: 'Ravi', age: 30 } ]
// }
