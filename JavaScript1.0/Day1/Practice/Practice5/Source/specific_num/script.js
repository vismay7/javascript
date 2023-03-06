function string() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let str = document.getElementById("str").value;

    let ans = str.slice(num1, num2);
    document.getElementById("par").innerHTML = ans;
}
