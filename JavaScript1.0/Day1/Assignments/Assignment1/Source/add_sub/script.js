document.getElementById("submit").onclick = function () {
    var op = document.querySelector("input[name=op]:checked").value;
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    let ans = 0;

    if (op == "add") {
        ans = num1 + num2;
        document.getElementById("showAns").innerHTML = ans;
    } else if (op == "sub") {
        ans = num1 - num2;
        document.getElementById("showAns").innerHTML = ans;
    } else if (op == "mul") {
        ans = num1 * num2;
        document.getElementById("showAns").innerHTML = ans;
    } else if (op == "div") {
        ans = num1 / num2;
        document.getElementById("showAns").innerHTML = ans;
    }
};
