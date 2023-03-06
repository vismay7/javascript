var duration = 10800000; // 3 hours
// var duration = 5000; // 5 sec

var start_time = new Date().getTime();
var timer = setInterval(() => {
    var now = new Date().getTime();

    var remaining_time = duration - (now - start_time);

    let hr = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mi = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
    var se = Math.floor((remaining_time % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = "Time remaining: " + hr + "h " + mi + "m " + se + "s";

    if (remaining_time < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's up!";

        endExam();
    }
}, 1000);
