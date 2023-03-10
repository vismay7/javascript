const calculateRadius = (radius) => {
    if (isNaN(radius)) {
        return "Please Enter a digits";
    } else {
        return Math.PI * radius * radius;
    }
};
const calculate = (radius) => {
    let ans = calculateRadius(radius);
    document.getElementById("ans").innerHTML = ans;
};
