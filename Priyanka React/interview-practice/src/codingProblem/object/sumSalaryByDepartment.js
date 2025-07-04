var staff = [
    { name: "John", department: "Finance", salary: 5000 },
    { name: "Jane", department: "Finance", salary: 6000 },
    { name: "Mark", department: "IT", salary: 7000 }
];

function groupByitems(arr) {
    let result = {};
    
    for(let i=0; i<arr.length; i++) {
        let val = arr[i];
        let department = val.department;
        
       if(result[department] === undefined) {
           result[department] = val.salary
       } else {
           result[department] = result[department] + val.salary
       }
    }
    
    return result;
}

console.log(groupByitems(staff))

// {
//     Finance: 11000,
//     IT: 7000
// }