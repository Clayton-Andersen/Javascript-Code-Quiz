
var countdown
var startTimer
var timerEl = document.getElementById('countdown-timer')
var segments = document.getElementsByClassName('segment')

function timer() {
    countdown = 60
    startTimer = setInterval(function () {
        countdown--
        console.log(countdown)
        timerEl.innerHTML = countdown;
        if (countdown === 0) {
            clearInterval(startTimer);
        }
    }, 1000)
}

function startQuiz() {
    timer();

    segments[0].classList.remove("hide");
}

function nextQuestion(currentQuestion) {
    segments[currentQuestion].classList.add("hide");
    var followingQuestion = currentQuestion + 1;
    segments[followingQuestion].classList.remove("hide");
}


document.querySelector('#button').addEventListener('click', startQuiz)

// var time = Questions.length * 10

var questionsArray = [
    {
        question: "Inside which html tag do we put the JavaScript?",
        choices: [
            "<scripting>",
            "<js>",
            "<script>",
            "<javascript>"],
        answer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        choices: [
            "nnumbers and strings",
            "other arrays",
            "booleans",
            "all the above"],
        answer: "d"
    },
    {
        question: "Commonly used data types do not include______. ",
        choices: [
            "boleans",
            "strings",
            "alerts",
            "numbers"],
        answer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed within______. ",
        choices: [
            "quotes",
            "parantheses",
            "curly brackets",
            "square brackets"],
        answer: "b"
    },
    {
        question: "String variables must be enclosed within ______ when being assigned to variables. ",
        choices: [
            "brackets",
            "quotes",
            "curly brackets",
            "hyphens"],
        answer: "a"
    },
    {
        question: "JavaScript was originally developed by_____. ",
        choices: [
            "Bill Gates",
            "MySpace",
            "Netscape",
            "Napster"],
        answer: "c"
    }
];
for (var i = 0; i < questionsArray.length; i++) {
    console.log(questionsArray)
}


// //Button to initiate timer and quiz add event listener
// //Questions displayed and list answers
// //Check user input right and wrong add event listener
// //if statement if right, next question, if wrong deduct 10 sec and move to next q
// //after iterated all questions, game ends or time expires and game ends
// //game ends: display end screen, timer stops. Local storage of score
// for (let i = 0; i < Questions.length; i++) {
//     console.log(Questions[i].answer);
//     for (let z = 0; z < Questions[i].choices.length; z++) {
//         console.log(Questions[i].choices[z])

//     }

// }

// // if (useranswer === Questions[i].answer) {
// //     points++
// // } else if(useranswer !== Questions.answer){
// //     time =- 5
// // }