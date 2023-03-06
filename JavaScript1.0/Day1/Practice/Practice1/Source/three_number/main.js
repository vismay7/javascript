import "./style.css";

let num1 = parseInt(prompt("enter numebr 1"));
let num2 = parseInt(prompt("enter numebr 2"));
let num3 = parseInt(prompt("enter numebr 3"));

let a = [num1, num2, num3];
let ans = 0;
let count = 0;

document.getElementById("numbers").innerHTML = num1 + ", " + num2 + ", " + num3;

for (let i = 0; i < a.length; i++) {
    if (a[i] > 40) {
        ans += a[i];
        count += 1;
    }
}
if (ans === 0) {
    document.getElementById("sum").innerHTML = "there is no greter than 40";
} else {
    document.getElementById("sum").innerHTML = "<p> There are " + count + " number that are greter than 40</p>";
    document.getElementById("sum1").innerHTML = "<p>" + ans + "</p>";
}
