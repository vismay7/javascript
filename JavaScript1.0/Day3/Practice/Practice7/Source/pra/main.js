function print_value(number) {
    document.getElementById("ans").innerHTML = number;
}

function square(num1, print_value) {
    let ans = num1 * num1;
    print_value(ans);
}
function calculate() {
    let num1 = document.getElementById("square_int").value;
    square(num1, print_value);
}
