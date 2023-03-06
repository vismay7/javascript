function string(e) {
    let str = e.value;
    if (str.length == 0) {
        document.getElementById("par").innerHTML = "string is empty";
    } else {
        document.getElementById("par").innerHTML = "string is not empty";
    }
}
