const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
const person1 = {
    firstName: "John",
    lastName: "Doe",
};
const person2 = {
    firstName: "Mary",
    lastName: "Doe",
};
const person3 = {
    firstName: "Joseph",
    lastName: "disuja",
};

function personDetail1(data) {
    if (eval(data)) {
        document.getElementById("demo").innerHTML = person.fullName.call(eval(data));
    } else {
        document.getElementById("demo").innerHTML = "Enter a valid Name";
    }
}
function test(asd) {
    personDetail1(asd);
}
