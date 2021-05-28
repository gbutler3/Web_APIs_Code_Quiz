const questionElement = document.getElementById("question");
const answerButtonElement= document.getElementById("answerButtons");

var shuffledQuestions, currentQuestionIndex

//count down timer start
document.addEventListener('DOMContentLoaded',() =>{
var timerEl = document.querySelector("#secondsLeft");
var startbutton = document.querySelector("#startButton");
var secondsLeft =questions.length *12 //TODO: change the time 

function startQuiz(){
    countDown(); 
    console.log('started');
    startbutton.classList.add('hide');
    shuffledQuestions= questions.sort(()=>Math.random( -.5 ));
    currentQuestionIndex= 0
    questionCard.classList.remove('hide');
    setQuestion();
}

function countDown(){
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timerEl.textContent =secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
    }
//when start button is clicked the timer starts the count down
startbutton.addEventListener("click", startQuiz)
})
//countdown timer end 


function setQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText =question.question
    
    question.answers.forEach(answer  => {    
        var button= document.createElement ('button')
        button.innerText=answer.text //this makes the text be the inner homework
        button.value = answer.correct
        button.addEventListener("click", checkQuestion )
        button.classList.add('answerOptions')
        console.log(answer);     
        answerButtonElement.appendChild(button)
        })
    }

function checkQuestion (e){ //targets the event, but with different functionallity 
    e.target.value; console.log(e.target.value)
    if (e.target.value){ //checking if it is true or false
        console.log("correct");
    } else {
        timerEl -= 5;//if the time is  1 it ends
        }
        console.log(timerEl)
        nextQuestion(); // pulls the new question ie takes the currentquestion and adds 1 to pull the next one
        clearQuestion(); //clears the list of answer options which are showing in the answer button options
        setQuestion(); //showQuestion(shuffledQuestions[currentQuestionIndex])
}

// function checkQuestion(e){}

//variables used to end the game    
var initialsEl = document.querySelector ("#name");
var time = question.length * 15;

function endQuiz(){
    clearInterval(setInterval);
    var scoresPageEl= document.getElementById("scoresPage");
    scoresPageEl.removeAttribute("class");
    questionCard.classList.add('hide');
}

function nextQuestion () {
    currentQuestionIndex ++ 
    console.log(currentQuestionIndex)
    if (shuffledQuestions[currentQuestionIndex] === question.length) {
        endQuiz ();
    } 
}

function clearQuestion () {
    answerButtonElement.innerHTML=""
}
function answerChoice(e) {}

