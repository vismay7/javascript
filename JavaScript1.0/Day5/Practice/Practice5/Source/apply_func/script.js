const person = {
    fullName: function (city) {
        return `${this.firstName} ${this.lastName} is belongs to ${city}`;
    },
};

const person1 = {
    firstName: "Jonh",
    lastName: "Doe",
};

function personDetail1(name, city) {
    if (eval(name)) {
        if (city !== "") {
            document.getElementById("personDetail").innerHTML = person.fullName.apply(eval(name), [city]);
        } else {
            document.getElementById("personDetail").innerHTML = "Enter a City name";
        }
    } else {
        document.getElementById("personDetail").innerHTML = "Enter valid person name";
    }
}

function test(name, city) {
    personDetail1(name, city);
}
