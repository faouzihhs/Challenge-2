function addPadding(item){
    let res = String(item);
    return res.padStart(2, '0');
}

function removeGrad() {
    let element = document.getElementById("container");
    element.classList.remove("grad-night");
    element.classList.remove("grad-morning");
    element.classList.remove("grad-day");
    element.classList.remove("grad-evening");
}

var date = new Date(); // current date
// var date = new Date("Mar 21, 2020 23:57:00"); //"Mar 21, 2020 22:00:00"

// Start gradiant and icon
let element = document.getElementById("container");
let img = document.getElementById("icon");

function changeBgAndIcon(date, element, img){
    // night : 00:00 - 05:59
    // morning : 06:00 - 11:59
    // day : 12:00 - 17:59
    // evening : 18:00 - 23:59

    // console.log(date); // this is for testing only

    var hour = date.getHours();
    var minute = date.getMinutes();

    if (hour >= 0 && (hour <= 5 && minute <= 59) ){
        // night
        removeGrad(); // remove all the grediant classes
        element.classList.add("grad-night");
        img.src = "images/night.svg";
    }else if (hour >= 6 && (hour <= 11 && minute <= 59)){
        // morning
        removeGrad();
        element.classList.add("grad-morning");
        img.src = "images/morning.svg";
    }else if (hour >= 12 && (hour <= 17 && minute <= 59)){
        // day
        removeGrad();
        element.classList.add("grad-day");
        console.log("what?");
        img.src = "images/day.svg";
    }else if (hour >= 18 && (hour <= 23 && minute <= 59)){
        // evening
        removeGrad();
        element.classList.add("grad-evening");
        img.src = "images/evening.svg";
    }

    // date.setHours(hour+1); // this is for testing only
    // date.setMinutes(minute+1); // this is for testing only

}

changeBgAndIcon(date, element, img);
window.setInterval(changeBgAndIcon, 1000, date, element, img); // every second -> 1000 milliseconds
// End gradient and icon

// Date start
function setDate(date){
    let year = date.getFullYear(); // ex. 2020
    let month = addPadding(date.getMonth()+1); // ex. 01..12 :: it goes from 0 to 11
    let day = addPadding(date.getDate()); // ex. 21

    document.getElementById("date").innerHTML = day + "-" + month + "-" + year;
}

setDate(date);
window.setInterval(setDate, 60000, date);
// Date end

// Time start
function setTime() {
    let date = new Date();
    let hours = addPadding(date.getHours());
    let minutes = addPadding(date.getMinutes());
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
}

setTime();
window.setInterval(setTime, 1000); // every second -> 1000 milliseconds
// Time stop

// Start to sleep
function refreshToSleep() {
    // "Jan 5, 2021 23:00:00" - now 23:01
    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate()+1);
    countDownDate.setHours(23);
    countDownDate.setMinutes(0);
    countDownDate.setSeconds(0);

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // let hours = addPadding(now.getHours());
    // let minutes = addPadding(now.getMinutes());
    // let seconds = addPadding(now.getSeconds());
    document.getElementById("countdown").innerHTML =  addPadding(hours) + ":" + addPadding(minutes) + ":" + addPadding(seconds);
}

refreshToSleep();
window.setInterval(refreshToSleep, 1000); // every second -> 1000 milliseconds
// End to sleep