function multFn() {
    let mult = 2;
    return function (val) {
        mult = mult * val;
        return mult;
    };
}

// Use the closure
let mult = multFn();
function calculate(number) {
    document.getElementById("ans").innerHTML = mult(number);
}
