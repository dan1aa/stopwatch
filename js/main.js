let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = document.querySelector('.timerDisplay');
let start = document.querySelector('.startTimer');
let pause = document.querySelector('.stopTimer');
let reset = document.querySelector('.resetTimer');
let lap = document.querySelector('.lapTimer');
let lapsDisplay = document.querySelector('.laps')

timer.innerHTML = '00 : 00 : 00 : 000 ';

let int = null;
let countLap = 0;

start.onclick = () => {
    if (int !== null) clearInterval(int)
    int = setInterval(displayTimer, 10);
}

pause.onclick = () => {
    clearInterval(int);
}

reset.onclick = () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerHTML = '00 : 00 : 00 : 000 ';
    lapsDisplay.innerHTML = '';
    countLap = 0;
}
lap.onclick = () => {
    if(timer.textContent !== '00 : 00 : 00 : 000 ')  { 
        countLap++;
        lapElement = document.createElement('span')
        lapText = `Lap ${countLap} : ${timer.innerHTML}`;
        lapElement.innerHTML = lapText;
        lapsDisplay.appendChild(lapElement)
    }
}

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}