function dateCal() {
    let dateInput = document.getElementById("date").value;
    let dateFormate = /^([0-9]{2}-[0-9]{2}-[0-9]{4})/.test(dateInput);

    if (dateFormate) {
        let date = dateInput.split("-");
        check(date);
    } else {
        document.getElementById("prAlert").innerHTML = "Enter a valid Date Format";
    }
}

function check(date) {
    let dd = parseInt(date[1]);
    let mm = parseInt(date[0]);
    let yy = parseInt(date[2]);

    if (mm >= 1 && mm <= 12) {
        if (dd >= 1 && dd <= 31 && (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12)) {
            document.getElementById("prAlert").innerHTML = "Date is valid.";
        } else if (dd >= 1 && dd <= 30 && (mm == 4 || mm == 6 || mm == 9 || mm == 11)) {
            document.getElementById("prAlert").innerHTML = "Date is valid.";
        } else if (dd >= 1 && dd <= 28 && mm == 2) {
            document.getElementById("prAlert").innerHTML = "Date is valid.";
        } else if (dd == 29 && mm == 2 && (yy % 400 == 0 || (yy % 4 == 0 && yy % 100 != 0))) {
            document.getElementById("prAlert").innerHTML = "Date is valid.";
        } else {
            document.getElementById("prAlert").innerHTML = "Date is invalid.";
        }
    } else {
        document.getElementById("prAlert").innerHTML = "Month is not valid.";
    }
}
