// var START_TIME = '2020-10-25 16:00:00';
var START_TIME = '2020-10-21 16:00:00'; // TODO: FIX

var clockElem = document.getElementById('clock');
var countdownElem = document.getElementById('countdown');
var countdownAudio = document.getElementById('countdown-audio');
var siegerehrungElem = document.getElementById('siegerehrung');
var fanfareAudio = document.getElementById('fanfare-audio');

function startCountdown() {
    countdownAudio.setAttribute('class', 'active');
    fanfareAudio.setAttribute('class', 'inactive');
    countdownElem.style.opacity = 1;
    siegerehrungElem.style.opacity = 0;
    startPlaying(countdownAudio);
    countDown();
}

function countDown() {
    var remaining = Date.parse(START_TIME) - Date.now();
    if (remaining < 0) {
        startSiegerehrung();
        return;
    }
    var hours = Math.floor(remaining / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / (1000));
    clockElem.innerHTML = String(hours) + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    var miliseconds = remaining % 1000;
    // console.log(hours, minutes, seconds, miliseconds);
    setTimeout(countDown, miliseconds + 10);
} 

function startSiegerehrung() {
    countdownElem.style.opacity = 0;
    siegerehrungElem.style.opacity = 1;
    countdownAudio.setAttribute('class', 'inactive');
    fanfareAudio.setAttribute('class', 'active');
    countdownAudio.pause();
    startPlaying(fanfareAudio);
}

function startPlaying(elem) {
    try {
        elem.play().catch((exc) => handleNoAudio(elem, exc));
    } catch (exc) {
        handleNoAudio(elem, exc);
    }

}

function handleNoAudio(elem, exc) {
    console.log(elem, exc);
    var audioElems = document.getElementsByTagName('audio');
    for (var audioElem of audioElems) {
        audioElem.controls = true;
    }
    alert("Bitte erlaube uns, auf dieser Seite Musik abzuspielen. Klicke dazu ganz unten auf dieser Seite auf das \"Abspielen\"-Symbol");
}

function init() {
    var time = Date.now() - Date.parse(START_TIME);
    console.log(time);

    if (time <= 0) {
        startCountdown();
    } else {
        startSiegerehrung();
    }
}

init();