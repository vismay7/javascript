// function revStr(str) {}
function checkStr(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str === "string" && str !== "" && isNaN(str)) {
                // console.log(str.split("").reverse().join(""));
                resolve(str.split("").reverse().join(""));
            } else {
                reject("Enter a String");
            }
        }, 500);
    });
}
function check_string(str) {
    checkStr(str).then(
        (result) => {
            document.getElementById("text").innerHTML = result;
        },
        (err) => {
            document.getElementById("text").innerHTML = err;
        }
    );
}
