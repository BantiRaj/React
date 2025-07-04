// const promise = new Promise((resolve, reject) => {
//     resolve(
//         console.log("resolved")
//     )
// })


// promise.then((data) => {
//     console.log("callback called");
// }).catch(err => {
//     console.log("err", err)
// })


// const fetchData = async () => {
//     let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await resp.json();
//     console.log(data);
// }
// fetchData()

// const response = fetch('https://jsonplaceholder.typicode.com/posts');

// response
// .then(data => {
//     console.log(data)
//     return data.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log("err", err)
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Parse the JSON data
//   })
//   .then((data) => {
//     console.log("User data:", data); // Handle the parsed data
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error); // Handle errors
//   })
//   .finally(() => {
//     console.log("Fetch operation completed.");
//   });


// function countdown(n) {
//     for (let i = n; i > 0; i--) {
//       console.log(i);
//     }
//     console.log("Done!"); // Indicate the end of the countdown
//   }
  
//   countdown(5);


// function factorial(n) {
//     if(n === 0 || n ===1) return 1;

//     console.log(n * factorial(n-1));
// }
// factorial(10)

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  console.log(fibonacci(6)); // Output: 8