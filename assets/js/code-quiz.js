var time = 1;
var timerId;
var score;


var timerEl = document.getElementById("time");
var startScreen = document.getElementById("startScreen");
var questionBody = document.getElementById("question-body");

function timer() {
    time--;
    timerEl.textContent = time;

    if (time===0) {
        clearInterval(timerId);
    };
    if (time <= 0) {
        // quizEnd()
    }
}

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionBody.removeAttribute("class","hide");

    timerId = setInterval(timer, 1000);
    timerEl.textContent = time;
    
}

var countdown
var startTimer
var timerEl = document.getElementById('countdown-timer')
var segments = document.getElementsByClassName('segment')


function startQuestion() {
    // you want to start from the first index of your questions object 
    // to print every question with forEach() method in JS
    // each list items need to be clickable with a function click attached
}

// another function to evaluate your choices




document.querySelector("#start").addEventListener("click", startQuiz)

