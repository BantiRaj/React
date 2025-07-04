function a() {
    var b = 8;
    function c() {
        console.log(b);
    }
    return c;
}

var z = a();
console.log(z);

z();


// DNR SBC SPL (06510)