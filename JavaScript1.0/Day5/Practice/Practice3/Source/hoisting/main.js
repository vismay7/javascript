try {
    test1();
} catch (error) {
    document.getElementById("test_hos1").innerHTML = error;
}
let test1 = function () {
    document.getElementById("test_hos1").innerHTML = "function Run";
};

try {
    test2();
} catch (error) {
    document.getElementById("test_hos2").innerHTML = error;
}
var test2 = function () {
    document.getElementById("test_hos2").innerHTML = "function Run";
};

try {
    test3();
} catch (error) {
    document.getElementById("test_hos3").innerHTML = error;
}
function test3() {
    document.getElementById("test_hos3").innerHTML = "function Run";
}
