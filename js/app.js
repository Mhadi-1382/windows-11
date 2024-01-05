
/*!
    Windows 11 Template
    Created on date: 12/30/2023
    Built on date: 1/4/2024
*/

// ========== LOADER
var audioBoot = new Audio("./sounds/BootUp.mp3");
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
        document.querySelector("main").classList.toggle("main-background-animation");
        document.querySelector("#taskCenterAnimation").classList.toggle("task-center-animation");
        document.querySelector("#taskLeftAnimation").classList.toggle("task-left-animation");
        document.querySelector("#taskRightAnimation").classList.toggle("task-right-animation");
        audioBoot.play();
    }, 5000);
});


// ========== TIME & DATE
var time = new Date();
var timeH = time.getHours();
var timeM = time.getMinutes();
var timeId = document.querySelector("#timeShow");
timeId.innerHTML = timeH + ":" + timeM;
var timeId2 = document.querySelector("#timeShowTaskbarOpen");
timeId2.innerHTML = timeH + ":" + timeM;

var date = new Date();
var dateM = time.getMonth()
var dateD = time.getDay()
var dateFY = time.getFullYear()
var dateId = document.querySelector("#dateShow");
dateId.innerHTML = dateM + "/" + dateD + "/" + dateFY;
var dateId2 = document.querySelector("#dateShowTaskbarOpen");
dateId2.innerHTML = dateM + "/" + dateD + "/" + dateFY;


// ========== TASKBAR
// ===== WISHME
var wishMeId = document.getElementById("wishMeId");
if (date.getHours() >= 24 ^ date.getHours() <= 12) {
    wishMeId.innerHTML = "Good morning,";
} else if (date.getHours() >= 13 & date.getHours() <= 19) {
    wishMeId.innerHTML = "Good afternoon,";
} else {
    wishMeId.innerHTML = "Good evening,";
}
// ===== START MENU
function startMenu() {
    document.getElementById("startMenu").classList.toggle("start-menu-style");
}
function startMenuDropdownPower() {
    document.getElementById("startMenuDropdownPower").classList.toggle("start-menu-dropdown-power-style");
}
function shutDown() {
    document.getElementById("shutDown").classList.toggle("shut-down-style");
    setTimeout(() => {
        window.close()
    }, 6000)
}
function restart() {
    document.getElementById("restart").classList.toggle("restart-style");
    setTimeout(() => {
        document.getElementById("restart").classList.toggle("restart-style");
        startMenuDropdownPower()
        startMenu()
    }, 6000);
}
function sleep() {
    document.getElementById("sleep").classList.toggle("sleep-style");
    document.getElementById("sleepWarpperLoaderProgressCircle").style.display = "none";
    document.getElementById("sleepWarpperLoaderProgressCircleTxt").style.display = "none";
    setTimeout(() => {
        document.getElementById("sleep").classList.toggle("sleep-style");
        var sleepWarpper = document.getElementById("sleepWarpper");
        sleepWarpper.classList.toggle("sleep-warpper-style");
    }, 6000);
    sleepWarpper.addEventListener("click", () => {
        document.getElementById("sleepWarpperLoaderProgressCircle").style.display = "flex";
        document.getElementById("sleepWarpperLoaderProgressCircleTxt").style.display = "flex";
        startMenuDropdownPower();
        startMenu();
    })
}
// ===== NOTIFICATIONS
function notifications() {
    document.getElementById("notifications").classList.toggle("notifications-style");
}
function darkMode() {
    document.body.classList.toggle("dark-mode-style");
}
function nightLight() {
    document.body.classList.toggle("night-light-style");
}
// ===== TIME & DATE
function timeAndDate() {
    document.getElementById("timeAndDate").classList.toggle("time-date-style");
}
// ===== NETWORK
function network() {
    document.getElementById("network").classList.toggle("network-style");
}
// ===== SPEAKERS
function speakers() {
    document.getElementById("speakers").classList.toggle("speakers-style");
}
// ===== HIDDEN ICON
function hiddenIcon() {
    document.getElementById("hiddenIcon").classList.toggle("hidden-icon-style");
}
// ===== WEATHER (IS EMPTY)
function weather() {
    document.getElementById("weather").classList.toggle("weather-style");
}


// ========== FULLSCREEN
function fullScreen() {
    let element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
window.addEventListener("click", () => {
    fullScreen();
})

// ========== OPEN APP: TERMINAL
var taskCenterAppAdd = document.querySelector("#taskCenterAppAdd"),
    textArea = document.querySelector("textarea");

function openTerminal() {
    document.getElementById("startMenu").classList.remove("start-menu-style");
    document.getElementById("openTerminal").classList.toggle("open-terminal-style");
    textArea.select();
    if (taskCenterAppAdd.innerHTML) {
        taskCenterAppAdd.classList.toggle("task-center-app-add-style");
    } else {
        taskCenterAppAdd.innerHTML = `<img src="imgs/icons/terminal.png" alt="" class="taskbar-app-active" draggable="false" title="Terminal">`;
    }
}