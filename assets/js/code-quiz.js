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

    if (time === 0) {
        clearInterval(timerId);
    };
    if (time <= 0) {
        // quizEnd()
    }
};

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionBody.removeAttribute("class", "hide");

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
    var answerEl = document.createElement('ul')
    questionTitleEl.textContent = currentQuestion.question
    choicesEl.innerHTML = ""
    currentQuestion.choices.forEach(function (choices, i) {
        var ulElement = document.createElement('li')
        ulElement.innerText = choices
        ulElement.setAttribute("data-answer", i)
        answerEl.append(ulElement)
    });
    choicesEl.append(answerEl)
}

document.querySelector("#start").addEventListener("click", startQuiz)
choicesEl.addEventListener("click", function (event) {
    let clickedAnswer = event.target.attributes[0].value
    clickedAnswer = clickedAnswer * 1
    if (clickedAnswer === questionsArray[questionIndex].answer) {
        console.log("correct")
    } else {
        console.log("false")
    }
    questionIndex++
    startQuestion();
})

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