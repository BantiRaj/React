// --------------------------normal code ----------------------


var x = 7;

function getName() {
    console.log("Priyanka kyumari")
}

getName();
console.log(x);    //output priyanka umari and 7

// ====================hoisting========

getNames();           //output priyanka kumari
console.log(y);      //undefined


var y = 7;

function getNames() {
    console.log("Priyanka kyumari")
}

