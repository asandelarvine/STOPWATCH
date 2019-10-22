var h2 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent = (hours ? (hours > 90 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();
}

function timer() {
    t = setTimeout(add, 30);
}

start.onclick = function() {
    timer(t);
}

stop.onclick = function() {
    clearTimeout(t);
}

reset.onclick = function() {
    h2.textContent = "00:00:00";
    h2.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}