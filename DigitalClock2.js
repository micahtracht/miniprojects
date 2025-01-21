let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let hourFraction = hour / 24;
let minuteFraction = minute / 60;
let secondFraction = (Date.now() % 60000) / 60000;

function updateDates() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    hourFraction = hour / 24;
    minuteFraction = minute / 60;
    secondFraction = (Date.now() % 60000) / 60000;
    
    document.getElementById("hour-value").innerHTML = hour;
    document.getElementById("minute-value").innerHTML = minute;
    document.getElementById("second-value").innerHTML = second;
}

function updatePoints() {
    var hourPoint = document.getElementById("hour-point");
    var minutePoint = document.getElementById("minute-point");
    var secondPoint = document.getElementById("second-point");

    const PI = 3.1415926535

    var horizHourOffset = (Math.sin(hourFraction * 2*PI) + 1)*50;
    document.getElementById("hour-point").style.left = horizHourOffset + "%";

    var vertHourOffset = 475 - (Math.cos(hourFraction * 2*PI) + 1)*250;
    document.getElementById("hour-point").style.top = vertHourOffset + "px";


    var horizMinuteOffset = (Math.sin(minuteFraction * 2*PI) + 1)*50;
    document.getElementById("minute-point").style.left = horizMinuteOffset + "%";

    var vertMinuteOffset = 475 - (Math.cos(minuteFraction * 2*PI) + 1)*250;
    document.getElementById("minute-point").style.top = vertMinuteOffset + "px";


    var horizSecondOffset = (Math.sin(secondFraction * 2*PI) + 1)*50;
    document.getElementById("second-point").style.left = horizSecondOffset + "%";

    var vertSecondOffset = 475 - (Math.cos(secondFraction * 2*PI) + 1)*250;
    document.getElementById("second-point").style.top = vertSecondOffset + "px";
}

function updateCircles() {
    var hourCircle = document.getElementById("hour");
    var minuteCircle = document.getElementById("minute");
    var secondCircle = document.getElementById("second");
    
    let hourAngle = hourFraction * 360;
    let minuteAngle = minuteFraction * 360;
    let secondAngle = secondFraction * 360;

    document.getElementById("hour").style.background = `conic-gradient(var(--hour-color) 0deg ${hourAngle}deg, black ${hourAngle}deg 360deg)`;
    document.getElementById("minute").style.background = `conic-gradient(var(--minute-color) 0deg ${minuteAngle}deg,  black ${minuteAngle}deg 360deg)`;
    document.getElementById("second").style.background = `conic-gradient(var(--second-color) 0deg ${secondAngle}deg, black ${secondAngle}deg 360deg)`;
}

var runCode = setInterval(updateDates, 50);
var runCode2 = setInterval(updatePoints, 50);
var runCode3 = setInterval(updateCircles, 50    );