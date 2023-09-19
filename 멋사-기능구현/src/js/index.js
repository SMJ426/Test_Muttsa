let min, sec, time;

function startTimer() {
    var hrs = document.getElementById("hrs").value;
    var min = document.getElementById("min").value;
    var sec = document.getElementById("sec").value;

    if (hrs === "") hrs = 0;
    if (min === "") min = 0;
    if (sec === "") sec = 0;

    time = setInterval(countStart, 1000);
}

function countStart() {
    if (sec !== 0) {
        sec -= 1;
        console.log(sec);
    } else {
        if (min !== 0) {
            min -= 1;
            sec = 59;
        } else if (hrs !== 0) {
            hrs -= 1;
            min = 59;
        } else {
            console.log("타이머 종료");
        }
    }
}
function resetTimer() {}
