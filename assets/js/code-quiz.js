// Questions

// Inside which html tag do we put the JavaScript?
// 1. <scripting>
// 2. <js>
// 3. <script>
// 4. <javascript>
var countdown
var startTimer
var timerEl = document.getElementById('countdown-timer')
var segments = document.getElementsByClassName('segment')

function timer() {
        countdown = 60
        startTimer = setInterval(function(){
        countdown--
        console.log(countdown)
        timerEl.innerHTML = countdown;
        if (countdown===0){
            clearInterval(startTimer);
        }
    },1000)
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

// var Questions = [
//     {
//         question: "somehting?",
//         choices: ["a", "b", "c", "d"],
//         answer: "b"
//     },
//     {
//         question: "somehting?",
//         choices: ["a", "b", "c", "d"],
//         answer: "b"
//     },
//     {
//         question: "somehting?",
//         choices: ["a", "b", "c", "d"],
//         answer: "b"
//     }
// ];


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