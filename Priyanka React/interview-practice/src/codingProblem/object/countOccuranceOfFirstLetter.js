var names = ["Alice", "Adam", "Bob", "Charlie", "Chad"];

function groupByitems(arr) {
    let result = {};
    
    for(let i=0; i<arr.length; i++) {
        let val = arr[i];
      if(result[val[0]] === undefined) {
          result[val[0]] = 1
      } else {
          result[val[0]] = ++result[val[0]]
      }
    }
    
    return result;
}

console.log(groupByitems(names))

// {
//     A: 2,
//     B: 1,
//     C: 2
// }