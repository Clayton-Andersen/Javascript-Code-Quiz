var time = 60;
var timerId;
var score;
var questionIndex = 0;


var timerEl = document.getElementById("time");
var startScreen = document.getElementById("startScreen");
var questionBody = document.getElementById("question-body");
var choicesEl = document.getElementById("choices");

function timer() {
    time--;
    timerEl.textContent = time;

    if (time===0) {
        clearInterval(timerId);
    };
    if (time <= 0) {
        // quizEnd()
    }
};

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionBody.removeAttribute("class","hide");

    timerId = setInterval(timer, 1000);
    timerEl.textContent = time;
    startQuestion();
}

var countdown
var startTimer
var timerEl = document.getElementById('countdown-timer')
var segments = document.getElementsByClassName('segment')


function startQuestion() {
    var currentQuestion = questionsArray[questionIndex];
    var questionTitleEl = document.getElementById('questionTitle')
    questionTitleEl.textContent = currentQuestion.question
    choicesEl.innerHTML = ""
    currentQuestion.choices.forEach(function (choice, i) {
        //declare var document.createEl, set attributes (choice) set text content to each choice 
        //and add event listener to start next question append element(btn) 

        //new function to check q right or wrong and score.
        //run start question again increment index
    })
    // you want to start from the first index of your questions object 
    // to print every question with forEach() method in JS
    // each list items need to be clickable with a function click attached
}

// another function to evaluate your choices



document.querySelector("#start").addEventListener("click", startQuiz)

// var countdown
// var startTimer
// var timerEl = document.getElementById('countdown-timer')
// var segments = document.getElementsByClassName('segment')

// function timer() {
//         countdown = 60
//         startTimer = setInterval(function(){
//         countdown--
//         console.log(countdown)
//         timerEl.innerHTML = countdown;
//         if (countdown===0){
//             clearInterval(startTimer);
//         }
//     },1000)
// }

// function startQuiz() {
//     timer();
  
//     segments[0].classList.remove("hide");
//     }
    
// function nextQuestion(currentQuestion) {
//     segments[currentQuestion].classList.add("hide");
//     var followingQuestion = currentQuestion + 1;
//     segments[followingQuestion].classList.remove("hide");
// }


// document.querySelector('#button').addEventListener('click', startQuiz)

// // var time = Questions.length * 10