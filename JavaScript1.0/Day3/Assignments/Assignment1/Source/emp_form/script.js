function storeData() {
    let empId = document.getElementById("empId");
    let empName = document.getElementById("empName");
    let empEmail = document.getElementById("empEmail");
    let empAge = document.getElementById("empAge");
    let empContact = document.getElementById("empContact");
    let empDes = document.getElementById("empDesignation");
    let empSalary = document.getElementById("empSalary");
    let empDate = document.getElementById("empDate");
    let empLoc = document.getElementById("emLoc");

    let alertBox = document.getElementById("alert");

    let element = [empId, empName, empEmail, empAge, empContact, empDes, empSalary, empDate, empLoc];
    for (let i = 0; i < element.length; i++) {
        if (element[i].value.length == 0) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter all fields</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empId.value) {
        let empIdReg = /^[0-9]{5,}$/.test(empId.value);
        if (!empIdReg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter a valid Id</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }

    if (empAge.value) {
        let empAgereg = /^([1-9][0-9])$/.test(empAge.value); //1
        if (!empAgereg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter a Age 10 to 99</div>';
            return;
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empEmail.value) {
        let empEmailreg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(empEmail.value);
        if (!empEmailreg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter a Valid email Formate</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empDate.value) {
        let dateTime = new Date(empDate.value);
        var date = dateTime.getDate() + "-" + dateTime.getMonth() + "-" + dateTime.getFullYear();
    }

    if (empContact.value) {
        let empConReg = /^[0-9]{10}$/.test(empContact.value);
        if (!empConReg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter a Valid Contact</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empSalary.value) {
        let empSalReg = /^[0-9]+$/.test(empSalary.value);
        if (!empSalReg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter only digits in Salary feild</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empName.value) {
        let empNameReg = /^[a-zA-Z]+$/.test(empName.value);
        if (!empNameReg) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Enter only characters in Name feild</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
    if (empLoc) {
        if (empLoc.value.length == 21) {
            alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Please select a location</div>';
            return;
        } else {
            alertBox.innerHTML = "";
        }
    }
}
