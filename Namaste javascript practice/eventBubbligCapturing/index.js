document.getElementById("grandParent").addEventListener(" ", () => {
    console.log("grand parent called");
    e.stopPropagation();
})

document.getElementById("parent").addEventListener("click", (e) => {
    console.log("parent called");
    e.stopPropagation();
})

document.getElementById("child").addEventListener("click", (e) => {
    console.log("child called");
    e.stopPropagation(); 
})