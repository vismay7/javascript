function date() {
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    document.write("Today date: " + currentDate);
    document.write("/" + currentMonth);
    document.write("/" + currentYear);
}
